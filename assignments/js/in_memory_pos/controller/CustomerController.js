$("#cusSv").click(function () {
    if (checkAll()) {
        saveCus();
    } else {
        alert("Error");
    }
});
$("#cusDl").click(function () {
    let id = $("#id").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }
});
$("#cusUp").click(function () {
    let id = $("#id").val();
    updateCustomer(id);
    clearCustomerInputFields();
});
// $("#searchCus").click(function (){
//     let cusId = $('#id').val();
//     if (searchCustomer(cusId) == undefined) {
//         alert("No such Customer..please check the ID");
//     }else{
//         let customer=getCustomer(cusId);
//     }
// });
function bindTrEvents() {
    $('#tblBody>tr').click(function () {
        let cusId = $(this).children().eq(0).text();
        let firstName = $(this).children().eq(1).text();
        let lastName = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let salary = $(this).children().eq(4).text();

        $("#id").val(cusId);
        $("#firstName").val(firstName);
        $("#lastName").val(lastName);
        $("#inputAddress").val(address);
        $("#salary").val(salary);
    })
}

function saveCus() {
    let cusId = $('#id').val();
    if (searchCustomer(cusId.trim()) == undefined) {
        let cusFirstName = $("#firstName").val();
        let cusLastName = $("#lastName").val();
        let cusAddress = $("#inputAddress").val();
        let cusSalary = $("#salary").val();

        customer = {
            id: cusId,
            firstName: cusFirstName,
            lastName: cusLastName,
            address: cusAddress,
            salary: cusSalary
        };

        customerDB.push(customer);
        clearCustomerInputFields();
        getAllCustomers();
        console.log(customerDB);

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            let cusFirstName = $("#firstName").val();
            let cusLastName = $("#lastName").val();
            let cusAddress = $("#inputAddress").val();
            let cusSalary = $("#salary").val();

            customer.firstName = cusFirstName;
            customer.lastName = cusLastName;
            customer.address = cusAddress;
            customer.salary = cusSalary;

            getAllCustomers();
        }
    }
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

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

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}
// function getCustomer(id){
//
// }