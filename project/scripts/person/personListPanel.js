var personListPanel = {};
var plpView;
var person;
var personTable;
var listItem;

personListPanel.createChildren = function() {}

personListPanel.createView = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            plpView = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/personListPanel.html', false);
    httpRequest.send();
}

personListPanel.prePopulate = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'assets/person.json', true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            person = JSON.parse(httpRequest.responseText);
            constructTable(person);
        }
    }
}

personListPanel.listenEvents = function () {

    document.getElementById('table').addEventListener('click', listItemSelected);
    document.getElementById('add').addEventListener('click', addSelected);
    eventManager.subscribe('submitSelected', onSubmitSelect);
}

personListPanel.setDefault = function () {
    eventManager.broadcast('listItemSelected', this);
}

var listItemSelected = function () {
    eventManager.broadcast('listItemSelected', this);
};

var addSelected = function () {
    eventManager.broadcast('addSelected', '');
};

var onSubmitSelect = function (person) {
    constructTable(person);
};

var constructTable = function(person) {

    getPersonTable();
    var temp = '';
    for(i = 0; i < person.length; i++) {
        var values = Object.values(person[i]);
        temp += personTable.replace('%id%', values[0])
                           .replace('%firstname%', values[1])
                           .replace('%lastname%', values[2])
                           .replace('%email%', values[3])
                           .replace('%birthdate%', values[4]);
    }
    document.getElementById('table').innerHTML += temp;
}

var getPersonTable = function() {

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {

        if(httpRequest.readyState == 4 && httpRequest.status == 200) {
            personTable = httpRequest.responseText;
        }
    }
    httpRequest.open('GET', 'html/personTable.html', false);
    httpRequest.send();
}