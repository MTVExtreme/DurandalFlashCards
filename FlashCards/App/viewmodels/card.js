define(['models/selectedCards'], function (selectedCards) {
    var vm = {};
    vm.indexParam = 0;
    vm.selected = selectedCards;

    vm.activate = function(name, index) {
        vm.indexParam = index;
    };

    vm.attached = function () {
        selectedCards.setIndex(vm.indexParam);
    };

    vm.flip = function () {
        $('.card').toggleClass('flip');
    };

    return vm;
});