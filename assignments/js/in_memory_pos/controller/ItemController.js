$("#itmSv").click(function () {
    if (checkAllItm()) {
        saveItm();
    } else {
        alert("Error");
    }
});
$("#itmUp").click(function () {
    let id = $("#code").val();
    updateItem(id);
    clearItemInputFields();
});

$("#itmDel").click(function () {
    let id = $("#code").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteItem(id);
        if (response) {
            alert("Item Deleted");
            clearItemInputFields();
            getAllItem();
        } else {
            alert("Item Not Removed..!");
        }
    }
});
function deleteItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == id) {
            itemDB.splice(i, 1);
            return true;
        }
    }
    return false;
}
function updateItem(id) {
    if (searchItem(id) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this Item.?");
        if (consent) {
            let item = searchItem(id);
            let des = $("#description").val();
            let hqt = $("#hQty").val();
            let price = $("#price").val();

            item.description = des;
            item.qtyOnHand = hqt;
            item.unitPrice = price;

            getAllItem();
        }
    }
}
function saveItm() {
    let codeItm = $('#code').val();
    if (searchItem(codeItm.trim()) == undefined) {
        let itmDes = $("#description").val();
        let itmHQty = $("#hQty").val();
        let price = $("#price").val();

        item = {
            code:codeItm,
            description:itmDes,
            qtyOnHand:itmHQty,
            unitPrice:price
        };

        itemDB.push(item);
        clearItemInputFields();
        getAllItem();
        console.log(itemDB);

    } else {
        alert("Item already exits.!");
        clearItemInputFields();
    }
}
function bindTrEventsItm() {
    $('#itmTblBody>tr').click(function () {
        let code = $(this).children().eq(0).text();
        let des = $(this).children().eq(1).text();
        let qoh = $(this).children().eq(2).text();
        let unitPr = $(this).children().eq(3).text();

        $("#code").val(code);
        $("#description").val(des);
        $("#hQty").val(qoh);
        $("#price").val(unitPr);
    })
}
function getAllItem() {
    $("#itmTblBody").empty();

    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let des = itemDB[i].description;
        let qoh = itemDB[i].qtyOnHand;
        let unitPr = itemDB[i].unitPrice;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${des}</td>
                     <td>${qoh}</td>
                     <td>${unitPr}</td>
                    </tr>`;

        $("#itmTblBody").append(row);

        bindTrEventsItm();
    }
}
function searchItem(id) {
    return itemDB.find(function (item) {
        return item.code == id;
    });
}