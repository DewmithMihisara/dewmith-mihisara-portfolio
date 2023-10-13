function clearCustomerInputFields() {
    $("#cusId,#firstName,#lastName,#inputAddress,#salary").val("");
    $("#cusId,#firstName,#lastName,#inputAddress,#salary").css("border", "1px solid #ced4da");
    $("#cusId").focus();
    setBtn();
}
