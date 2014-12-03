var myApp = angular.module('login',[]);

myApp.controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    var MAX_SPEED = 6000;
    var FRICTION = 0.97;
    var arenaWidth = 800;
    var arenaHeight = 800;
    var upArrow = 38;
    var downArrow = 40;
    var rightArrow = 39;
    var leftArrow = 37;
    var upKey = 87;
    var downKey = 83;
    var rightKey = 68;
    var leftKey = 65;

    var wizard = {};
    wizard.x = 1000;
    wizard.y = 600;
    wizard.vx = 0;
    wizard.vy = 0;
    wizard.width = 30;
    wizard.height = 40;
    wizard.health = 100;

    $scope.doFrame = function() {
        wizard.x += wizard.vx / 1000;
        wizard.y += wizard.vy / 1000;
        wizard.vx *= FRICTION;
        wizard.vy *= FRICTION;
    }

    $scope.accelerate = function(x, y) {
        wizard.vx = Math.max(Math.min(MAX_SPEED, wizard.vx + x), -MAX_SPEED);
        wizard.vy = Math.max(Math.min(MAX_SPEED, wizard.vy + y), -MAX_SPEED);
    }

    // this array stores the model view of each object in the arena
    var objects = [];

    var arena = $("#arena");
    var myWizard = $("#myWizard");

    arena.css("width", arenaWidth);
    arena.css("height", arenaHeight);
    myWizard.css("width", wizard.width);
    myWizard.css("height", wizard.height);

    var joined = false;
    var keys = {};

    $scope.keyDown = function($event) {
        keys[$event.which] = true;
        var x = 0;
        var y = 0;
        console.log(keys);
        for (var key in keys) {
            if (key == upArrow || key == upKey) {
                y += -6000;
            }
            if (key == downArrow || key == downKey) {
                y += 6000;
            }
            if (key == leftArrow || key == leftKey) {
                x += -6000;
            }
            if (key == rightArrow || key == rightKey) {
                x += 6000;
            }
        }
        $scope.accelerate(x, y);
    };

    $scope.keyUp = function($event) {
        delete keys[$event.which];
    };

    $scope.clickOnArena = function($event) {
        console.log("offsetX: " + $event.offsetX);
        console.log("offsetY: " + $event.offsetY);
    };

    function drawModels(model) {

    };

    $scope.drawArena = function() {
        if (!$scope.joined)
            return;
        $scope.doFrame()
        myWizard.css("top", wizard.y);
        myWizard.css("left", wizard.x);
    };

    $scope.joinGame = function() {
        $scope.joined = true;
    };

    $interval(function() {
        $scope.drawArena();
    }, 20);

}]);
