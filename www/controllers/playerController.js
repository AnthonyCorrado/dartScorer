angular.module('dartScorer.PlayerController', [])

.controller('PlayerController', function($scope, PlayerService, $ionicModal) {

    // get all players from db on /players
    $scope.players = PlayerService.getPlayers()
        .then(function(playerData) {
            $scope.players = playerData;
    });

    $scope.addPlayer = function() {
        $ionicModal.fromTemplateUrl('templates/partials/players-form.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    $scope.takePicture = function() {
        console.log('say cheeeeeeese!');
    };

    $scope.createPlayer = function(playerObj) {
        console.log(playerObj);
        // PlayerService.createPlayer(playerObj);
    };

});