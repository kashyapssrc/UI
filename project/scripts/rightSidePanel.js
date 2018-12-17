var rsp = {};
var rspView;
var addressView;
var personView;

rsp.createChildren = function() {

    console.log('right side panel is created');
    personPanel.createChildren();
}

rsp.createView = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            rspView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/rspView.html', false);
    httpRequest.send();
    console.log('right side panel view is created');
}

rsp.prePopulate = function() {};

rsp.listenEvents = function () {
    eventManager.subscribe('entitySelected', onSelectEntity);
}

rsp.setDefault = function() {}

var onSelectEntity = function(entity) {
    if(entity === 'person'){

        entityPerson();
        document.getElementById('rsp').innerHTML = personView;
        console.log(document.getElementById('rsp').innerHTML);
        personPanel.init();
    } else {

        entityAddress();
        document.getElementById('lsp').innerHTML = addressView;
        addressPanel.init();
    }
}

var entityAddress = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            addressView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/addressPanel.html', false);
    httpRequest.send();
}

var entityPerson = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            personView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/personPanel.html', false);
    httpRequest.send();
}