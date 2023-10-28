$(function (){
    loadCusIds();
    loadAllItemId();
});

function loadCusIds() {
    $("#cusIdList").empty();
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let values=`<option value=${id}>${id}</option>`;
        $("#cusIdList").append(values);
    }
}

function loadAllItemId() {
    for (const item of itemDB) {
        $('#selItmId').append(`<option>${item.code}</option>`)
    }
}
loadCusIds();
loadAllItemId();