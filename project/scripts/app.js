var app = {};
var init = function() {

    console.log('inside init');
    app.createChildren();
    app.createView();
    app.prePopulate();
    app.listenEvents();
    app.setDefault();
}

app.createChildren = function() {

    lsp.createChildren();
    rsp.createChildren();
}

app.createView = function() {

    lsp.createView();
    document.getElementById('app').innerHTML += lspView;
    rsp.createView();
    document.getElementById('app').innerHTML += rspView;
}

app.prePopulate = function() {
    lsp.prePopulate();
    rsp.prePopulate();
    console.log('prepped');
}

app.listenEvents = function() {
    lsp.listenEvents();
    rsp.listenEvents();
}

app.setDefault = function () {
    lsp.setDefault();
    rsp.setDefault();
}
