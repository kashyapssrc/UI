var personPanel = {};

personPanel.init = function() {

    personPanel.createChildren();
    personPanel.createView();
    personPanel.prePopulate();
    personPanel.listenEvents();
    personPanel.setDefault();
}

personPanel.createChildren = function() {

    personListPanel.createChildren();
    personInfoPanel.createChildren();
}

personPanel.createView = function() {

    personListPanel.createView();
    console.log(plpView);
    var rspTag = document.getElementById('rsp');
    console.log(rspTag.getElementsByClassName('person-panel'));
    console.log(document.getElementById('person-panel'));
    document.getElementById('person-panel').innerHTML = plpView;
    personInfoPanel.createView();
    document.getElementById('person-panel').innerHTML += pipView;
}

personPanel.prePopulate = function() {

    personListPanel.prePopulate();
    personInfoPanel.prePopulate();
}

personPanel.listenEvents = function() {
    personListPanel.listenEvents();
    personInfoPanel.listenEvents();
}

personPanel.setDefault = function() {
    personListPanel.setDefault();
    personInfoPanel.setDefault();
}