var app = angular.module('appControler', []);

app.controller('MaincCtrl', ['$scope', function($scope) {

    // SET:GET HEAD MAINCTRL
    $scope.headerMain = {};
    $scope.headerMain = {
        "title": "StackJobs México",
        "contentTitle": "StackJobs"
    }

}]);