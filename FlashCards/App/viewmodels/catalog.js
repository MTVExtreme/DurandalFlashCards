define(['durandal/system', 'services/flashCardService'], function (system, service) {
    var vm = {};

    var calaogNames = [];

    vm.activate = function () {
        system.log('** activate catalog');
        return service.catalogNames()
            .done(function (data) {
                vm.calaogNames = data;
            });
    };

    vm.attached = function () {
        system.log('** attached catalog');
    };

    vm.canDeactivate = function () {
        return true;
    };

    return vm;
});