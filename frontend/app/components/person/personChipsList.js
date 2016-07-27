function PersonChipsList() {
    var ctrl = this;

    ctrl.persons = [];
}

angular.module('myApp').component('personChipsList', {
    templateUrl: 'components/person/personChipsList.html',
    controller: PersonChipsList,
    bindings: {
        persons: '='
    }
});