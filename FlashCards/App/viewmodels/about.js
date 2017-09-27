define(['durandal/system'], function(system) {
    var vm = {};

    vm.activate = function () {
        system.log('** activate about');
    };

    vm.attached = function () {
        system.log('** attached about');
    };

    return vm;

});