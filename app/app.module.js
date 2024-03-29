var hack5 = angular.module('Hack5App', []);

hack5.controller('Hack5Controller', [
    '$scope', '$document', '$http', '$q', '$sce',
    function($scope, $document, $http, $q, $sce) {

        $(".form-control").dropdown({
            "autoinit": ".select"
        });


        $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            }
            //$http.get('/celebs').
            //then(function(response) {
            //    console.log(response.data[0].name);
            //}, function(response) {
            //    // called asynchronously if an error occurs
            //    // or server returns response with an error status.
            //});
            //

        $scope.cards = [];

        $q.all([
                $http.get('/celebs/55e11b431ba8d6356ffb2b4e/twitter'),
                $http.get('/celebs/55e11b431ba8d6356ffb2b4e/instagram'),
                $http.get('/celebs/55e11b431ba8d6356ffb2b4e/bing'),
                $http.get('/celebs/55e11b431ba8d6356ffb2b4e/soundcloud')
            ])
            .then(function(results) {
                var twitter = results[0];
                var insta = results[1].data;
                console.log(insta);
                var bing = results[2];
                var sc = results[3];

                for (var i = 0; i < insta.length; i++) {
                    insta[i].url = $sce.trustAsResourceUrl(insta[i].url) + 'embed';
                    $scope.cards.push(insta[i]);
                    console.log(insta[i]);

                }
                console.log($scope.cards.length);
            });

        //console.log($scope.cards.length);











        // var insta = angular.element($('#insta'));
        // var twit = angular.element($('#twit'));
        // var chrome = angular.element($('#chrome'));
        // var face = angular.element($('#face'));
        //
        // insta.css('color', 'green');





    }
]);

hack5.directive('iconUpdate', ['', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs) {

            iAttrs.class
        }
    };
}]);
