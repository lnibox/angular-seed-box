'use strict';

angular.module('myApp.header', []).directive('boxHeader', function() {
    return {
        restrict: 'EA',
        templateUrl: 'header/header.html',
        scope: {}
    };
});