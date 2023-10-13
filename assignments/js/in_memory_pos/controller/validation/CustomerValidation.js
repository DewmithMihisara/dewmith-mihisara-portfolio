const CUS_ID_REGEX = /^(c-)[0-9]{3}$/;
const CUS_FIRST_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const CUS_LAST_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let c_vArray = [];
c_vArray.push({field: $("#id"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#firstName"), regEx: CUS_FIRST_NAME_REGEX});
c_vArray.push({field: $("#lastName"), regEx: CUS_LAST_NAME_REGEX});
c_vArray.push({field: $("#inputAddress"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#salary"), regEx: CUS_SALARY_REGEX});
function clearCustomerInputFields() {
    $("#id,#firstName,#lastName,#inputAddress,#salary").val("");
    $("#id,#firstName,#lastName,#inputAddress,#salary").css("border", "1px solid #ced4da");
    $("#id").focus();
}

function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

$("#id,#firstName,#lastName,#inputAddress,#salary").on("keydown keyup", function (e) {
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    if (e.key == "Tab") {
        e.preventDefault();
    }

    checkValidations(c_vArray[indexNo]);

    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveCus();
            }
        }
    }
});

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}
function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}