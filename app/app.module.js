var hack5 = angular.module('Hack5App', []);

hack5.controller('Hack5Controller', ['$scope', function($scope) {

    $scope.cards = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

    $(".form-control").dropdown({
        "autoinit": ".select"
    });

    
    $scope.toggleHides = document.getElementsByClassName('toggle');


    for (i = 0; i < $scope.toggleHides.length; i++) {
        $scope.toggleHides[i].addEventListener('click', shoutit, false);
    }


    $scope.shoutit = function() {
    	console.log('yes');
    }



}]);
