var myApp = angular.module('login',[]);
  
myApp.controller('MainController', ['$scope', '$http', '$interval', function($scope, $http) {
    
    var moveDelta = 10;
    var wizardWidth = 30;
    var wizardHeight = 40;
    var arenaWidth = 800;
    var arenaHeight = 800;
    var upArrow = 38;
    var downArrow = 40;
    var rightArrow = 39;
    var leftArrow = 37;
    
    $scope.myWizard = $( '#myWizard' );
    $("#arena").css("width", arenaWidth);
    $("#arena").css("height", arenaHeight);
    $("#myWizard").css("height", wizardHeight);
    $("#myWizard").css("width", wizardWidth);
    
    $scope.joined = false;

    $scope.joinGame = function() {
        $scope.joined = true;
        console.log($scope.joined);
    };
    
    var changeVerticalPos = function(wizard, delta) {
        var pos = parseInt(wizard.css("margin-top"));
        var newPos = pos + delta;
        if (newPos > 0 && newPos + wizardHeight < arenaHeight) {
            wizard.css("margin-top", newPos);
        }
    };
    
    var changeHorizontalPos = function(wizard, delta) {
        var pos = parseInt(wizard.css("margin-left"));
        var newPos = pos + delta;
        if (newPos > 0 && newPos + wizardWidth < arenaWidth) {
            wizard.css("margin-left", newPos);
        }
    };
    
    $scope.keyDown = function($event) {
        if (!$scope.joined)
            return;
        console.log($event.keyCode);
        switch($event.keyCode) {
            case (upArrow):
                changeVerticalPos($scope.myWizard, 0 - moveDelta);
                break;
            case (downArrow):
                changeVerticalPos($scope.myWizard, moveDelta);
                break;
            case (leftArrow):
                changeHorizontalPos($scope.myWizard, 0 - moveDelta);
                break;
            case (rightArrow):
                changeHorizontalPos($scope.myWizard, moveDelta);
                break;
        }
    };
}]);
