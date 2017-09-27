define(['models/selectedCards'], function (selectedCards) {
    var vm = {};
    vm.selected = selectedCards;

    vm.activate = function (name) {
        selectedCards.select(name);
    }
    return vm;
});