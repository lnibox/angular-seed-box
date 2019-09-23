'use strict';

angular.module('myApp.footer', ['ngRoute']).directive('boxFooter', function() {
    return {
        restrict: 'EA',
        templateUrl: 'footer/footer.html',
        scope: {}
    }
});