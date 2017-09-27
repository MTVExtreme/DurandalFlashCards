define(['durandal/system', 'services/flashCardService'], function (system, service) {
    var vm = {};

    var calaogNames = [];

    vm.activate = function () {
        system.log('** activate catalog');
        return service.catalogNames()
            .done(function (data) {
                vm.catalogNames = data;
            });
    };

    vm.attached = function () {
        system.log('** attached catalog');
    };

    vm.canDeactivate = function () {
        return true;
    };

    vm.goToCards = function (name) {
        system.log('Go To ' + name);
    };

    return vm;
});