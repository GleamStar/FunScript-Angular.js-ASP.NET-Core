(function () {
    'use strict';

    var years = ( function getYears(offset, range) {
        var currentYear = new Date().getFullYear()+1;
        var years = [];
        for (var i = 0; i < range + 1; i++) {
            years.push(currentYear - offset - i);
        }
        return years;
    })(1,20);
    var model = {
        city: ["Киев", "Одесса", "Днепропетровск", "Львов"],
        typecar: ["Легковые", "Прицепы", "Автобусы", "Mото"],
        crash: ["Нет", "1 год", "2 года", "3 года"],
        years: years
    };

    angular
        .module('App')
        .controller('OptionCtrl', controller);
        
    function controller($scope) {
        
        $scope.data = model;
        //   $scope.city = "Выберите город";
        //  $scope.years = "Выберите год";
       
        $scope.selected = {
            typecar: $scope.data.typecar[0],
            city: $scope.data.city[0],
            crash: $scope.data.crash[0],
            years: $scope.data.years[0]
        };
        
    }
  
})();
