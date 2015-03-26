angular.module('dartScorer.PlayerDetailController', [])

.controller('PlayerDetailController', function($scope, PlayerService, $ionicModal, $stateParams) {
    PlayerService.playerDetail($stateParams.playerId)
        .then(function(playerData) {
            $scope.playerDetails = playerData;
        });
});