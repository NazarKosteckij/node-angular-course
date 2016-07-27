function PersonChips() {
    var ctrl = this;
}

angular.module('myApp').component('personChips', {
    templateUrl: 'components/person/personChips.html',
    controller: PersonChips,
    bindings: {
        person: '<'
    }
});