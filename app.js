var myApp = angular.module('login',[]);
  
myApp.controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    var wizardWidth = 30; // image wizard
    var wizardHeight = 40; // image height
    var arenaWidth = 800;
    var arenaHeight = 800;
    var upArrow = 38;
    var downArrow = 40;
    var rightArrow = 39;
    var leftArrow = 37;
    
    // this array stores the model view of each object in the arena
    var objects = [];
    
    var arena = $("#arena");
    
    var myWizard = {};
    myWizard.hp = 100;
    myWizard.xPos = 380;
    myWizard.yPos = 380;
    myWizard.xVelocity = 0;
    myWizard.yVelocity = 0;
    
    arena.css("width", arenaWidth);
    arena.css("height", arenaHeight);
    
    var joined = false;
    
    $scope.keyDown = function($event) {
        console.log("key down");
        console.log($event);
        /*if (!$scope.joined)
            return;

        //console.log($event.keyCode);
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
        } */
    };
    
    $scope.clickOnArena = function($event) {
        console.log("offsetX: " + $event.offsetX);
        console.log("offsetY: " + $event.offsetY);
    };
    
    $scope.keyPress = function($event) {
        console.log("key press");
        console.log($event);
    };
    
    $scope.keyUp = function($event) {
        console.log("key up");
        console.log($event);
    };
    
    function drawModels(model) {
        
    };
    
    $scope.drawArena = function() {
        
    };

    $scope.joinGame = function() {
        $scope.joined = true;
    };
    
    $interval(function() {
        drawArena();
    }, 100);
    
}]);




