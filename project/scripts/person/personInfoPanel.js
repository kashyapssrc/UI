var personInfoPanel = {};
var pipView;
var keyList = ['id', 'firstname', 'lastname', 'email', 'birthdate'];

personInfoPanel.createChildren = function() {
    console.log('info panel is created');
}

personInfoPanel.createView = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            pipView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/personInfoPanel.html', false);
    httpRequest.send();
}

personInfoPanel.prePopulate = function() {}

personInfoPanel.listenEvents = function() {
    eventManager.subscribe('listItemSelected', onListItemSelect);
    eventManager.subscribe('addSelected', onAddSelect);
    document.getElementById('submit').addEventListener('click', submitSelected);
}

personInfoPanel.setDefault = function () {
    eventManager.subscribe('listItemSelected', onListItemSelect);
}

var onAddSelect = function () {
    for(i = 0; i< keyList.length; i++) {
        document.getElementById(keyList[i]).value = '';
    }
};

var submitSelected = function () {
    var temp = {};
    var person = [];
    for(i = 0; i< keyList.length; i++) {
        temp[keyList[i]] = document.getElementById(keyList[i]).value;
    }
    person.push(temp);
    eventManager.broadcast('submitSelected', person);
};

var onListItemSelect = function(tableRow) {
    for(i = 0; i < keyList.length; i++) {
        document.getElementById(keyList[i]).value = tableRow.cells[i].innerHTML;
    }
};