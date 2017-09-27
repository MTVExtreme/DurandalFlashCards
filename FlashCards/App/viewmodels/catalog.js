define(['durandal/system', 'services/flashCardService', 'plugins/router'], function (system, service, router) {
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
        router.navigate('#cards/' + encodeURIComponent(name));
    };

    return vm;
});