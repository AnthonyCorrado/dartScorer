angular.module('dartScorer.GameController', [])

.controller('GameController', function($scope) {
    $scope.gameTypes = [
        {'name': '301', 'gameTypeId': '1' },
        {'name': '301 Tournament', 'gameTypeId': '11' },
        {'name': '501', 'gameTypeId': '2' },
        {'name': '501 Tournament', 'gameTypeId': '12' },
        {'name': 'Cricket', 'gameTypeId': '3' }
    ];

    $scope.selectedGame = function(gameTypeId) {
        alert(gameTypeId);
    };

});