var hack5 = angular.module('Hack5App', []);

hack5.controller('Hack5Controller', [
    '$scope', '$document',
    function($scope, $document) {
    	

        $scope.cards = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

        $(".form-control").dropdown({
            "autoinit": ".select"
        });

        
        

        
        


        var insta = angular.element($('#insta'));
        var twit = angular.element($('#twit'));
        var chrome = angular.element($('#chrome'));
        var face = angular.element($('#face'));

        insta.css('color', 'green');





    }
]);
