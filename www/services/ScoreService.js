angular.module('dartScorer.ScoreService', [])

.factory('ScoreService', function() {
    var scoreData = {};

    scoreData.scoreTotals = function(players) {
        console.log(players);
    };

    scoreData.subtractScore = function(score, type, playerTurn) {
        console.log(playerTurn);

        if (playerTurn === 1) {
            $scope.setPlayers[0].score -= score;
        }
        else if (playerTurn === 2) {
            $scope.setPlayers[1].score -= score;
        }
        else if (playerTurn === 3) {
            $scope.setPlayers[2].score -= score;
        }
        else if (playerTurn === 4) {
            $scope.setPlayers[3].score -= score;
        }
        if(turnNum % 3 === 0) {
            if($scope.playerTurn < $scope.setPlayers.length) {
               $scope.playerTurn++;
               nextPlayer();
            } else {
                $scope.playerTurn = 1;
            }
        }
        turnNum++;
    };

    return scoreData;
});