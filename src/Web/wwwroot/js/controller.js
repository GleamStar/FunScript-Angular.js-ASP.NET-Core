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
        city: [{ name: "Киев", group: "ЗОНА1" },
               { name: "Борисполь", group: "ЗОНА2" },
               { name: "Боярка ", group: "ЗОНА2" },
               { name: "Бровары", group: "ЗОНА2" },
               { name: "Васильков", group: "ЗОНА2"},
               { name: "Выжгород", group: "ЗОНА2" },
               { name: "Вишнёвое", group: "ЗОНА2" },
               { name: "Ирпень", group: "ЗОНА2" },
               { name: "Одесса", group: "ЗОНА3" },
               { name: "Харьков", group: "ЗОНА3" },

        ],
        //city:{
        //    citylist: [{ id: 1, name: ["one", "two", "three", "f"] }, { id: 2, name: ["one", "two", "three", "f"] }, { id: 3, name: ["one", "two", "three", "f"] }, { id: 4, name: ["one", "two", "three", "f"] }],
        //    group: [{ id: 1, name: "one",index :0.25 }, { id: 2, name: "two" }, { id: 3, name: "three" }, { id: 4, name: "foure" }]
        //},
        city : [{ group:"One",city["Odessa","Lv"]}],
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
