const ITM_ID_REGEX = /^(i-)[0-9]{3}$/;
const ITM_DES_REGEX = /^[A-Za-z ]{3,}$/;
const ITM_QTY_ON_HAND_REGEX = /^[0-9]{2,}$/;
const ITM_PRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

let i_Array = [];
i_Array.push({field: $("#code"), regEx: ITM_ID_REGEX});
i_Array.push({field: $("#description"), regEx: ITM_DES_REGEX});
i_Array.push({field: $("#hQty"), regEx: ITM_QTY_ON_HAND_REGEX});
i_Array.push({field: $("#salary"), regEx: ITM_PRICE_REGEX});
function clearItemInputFields() {
    $("#code,#description,#hQty,#price").val("");
    $("#code,#description,#hQty,#price").css("border", "1px solid #ced4da");
    $("#code").focus();
}
function setItmBorder(bol, ob) {
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
function checkItmValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setItmBorder(true, object)
        return true;
    }
    setItmBorder(false, object)
    return false;
}
function checkAllItm() {
    for (let i = 0; i < i_Array.length; i++) {
        if (!checkItmValidations(i_Array[i])) return false;
    }
    return true;
}