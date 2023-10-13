function bindTrEvents() {
    $('#tblBody>tr').click(function () {
        let id = $(this).children().eq(0).text();
        let firstName = $(this).children().eq(1).text();
        let lastName = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let salary = $(this).children().eq(4).text();

        $("#cusId").val(id);
        $("#firstName").val(firstName);
        $("#lastName").val(lastName);
        $("#inputAddress").val(address);
        $("#salary").val(salary);
    })
}
$('cusSv').click(function (){
   let cusId=$('id').val();

   if (cusSearch(cusId.trim()) == undefined){
       let cusFirstName = $("#firstName").val();
       let cusLastName = $("#lastName").val();
       let cusAddress = $("#inputAddress").val();
       let cusSalary = $("#salary").val();

       let newCustomer = Object.assign({}, customer);

       newCustomer.id = cusId;
       newCustomer.firstName = cusFirstName;
       newCustomer.lastName = cusLastName;
       newCustomer.address = cusAddress;
       newCustomer.salary = cusSalary;

       customerDB.push(newCustomer);
       clearCustomerInputFields();
       getAllCustomers();
       console.log(customerDB);
    }
});
function getAllCustomers() {
    $("#tblBody").empty();

    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let firstName = customerDB[i].firstName;
        let lastName = customerDB[i].lastName;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${firstName}</td>
                     <td>${lastName}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        $("#tblBody").append(row);

        bindTrEvents();
    }
}

function cusSearch(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}