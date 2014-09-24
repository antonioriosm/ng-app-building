var ngMongo = angular.module('ngMongo', ['ngResource']);

// ngMongo.factory('Mongo', function($http) {
//     return {
//         database: function() {
//             return $http.get('/mongo-api/dptos');
//         }
//     };
// });
ngMongo.factory('Mongo', function($resource) {
    return {
        database: $resource('/mongo-api/dptos')
    };
});

ngMongo.directive('deleteButton', function() {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        template: "<button class='btn btn-danger btn-sm' ng-click='deleteDpto(dpto)'><i class='glyphicon glyphicon-remove glyphicon-white'></i><span ng-transclude></span></button>",
    };
});

ngMongo.controller('ListCtrl', function($scope, Mongo) {

    // var result = Mongo.database();
    //     result.success(function(data) {
    //         $scope.dptos = data;
    //     }
    // );

    $scope.dptos = Mongo.database.query({}, isArray = true);
    
    $scope.addDpto = function() {
        if ($scope.reg._id !=="" && $scope.reg.desdep !== "") {
            var newReg = new Mongo.database($scope.reg);
            newReg.$save();
            $scope.dptos = Mongo.database.query({}, isArray = true);
            // $scope.dptos.unshift($scope.reg);
            $scope.reg = {};
        }
    };

    $scope.deleteDpto = function(dpto) {
        if (confirm("Delete this departamento? There's no undo...")) {
            dpto.$delete({_id: dpto._id});
            $scope.dptos = Mongo.database.query({}, isArray = true);
            // $scope.dptos.splice($scope.dptos.indexOf(dpto),1);
        }
    };


});