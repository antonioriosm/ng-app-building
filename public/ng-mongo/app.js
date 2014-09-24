var MyCtrl = function($scope) {
    $scope.items = [
        {name: "Idiot IPA", price:1.5, lastDrank:"2013-03-11"},
        {name: "Inversion IPA", price:0.25, lastDrank:"2013-03-09"}
    ];

    $scope.pluralizer = {
        0 : "No beers!",
        1 : "Only one left!",
        other: "{} Beers in Fridge"
    };

    $scope.addBeer = function() {
        var newBeer = {name: $scope.name, price: $scope.price, lastDrank: new Date()};
        $scope.items.push(newBeer);
    };

    $scope.removeItem = function(item) {
        if (confirm("Remove this beer - it's a good one!")) {
          $scope.items.splice($scope.items.indexOf(item),1);
        }
    };
};