function PersonChips() {
    var ctrl = this;

    ctrl.person = {
        firstName: "",
        lastName: ""
    }
}

angular.module('myApp').component('personChips', {
    templateUrl: 'components/person/personChips.html',
    controller: PersonChips,
    bindings: {
        person: '<'
    }
});