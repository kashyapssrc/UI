var lsp = {};
var lspView;

lsp.createChildren = function() {
    console.log('left side panel children is created');
}

lsp.createView = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            lspView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/lspView.html', false);
    httpRequest.send();
    console.log('left side panel view is created');
}

lsp.prePopulate = function() {}

lsp.listenEvents = function() {

    document.getElementById('person').addEventListener('click', onPersonSelect);
    document.getElementById('address').addEventListener('click', onAddressSelect);
}

lsp.setDefault = function() {
    eventManager.broadcast('entitySelected', 'person');
}

var onPersonSelect = function() {
    eventManager.broadcast('entitySelected', 'person');
}

var onAddressSelect = function() {
    eventManager.broadcast('entitySelected', 'address');
}