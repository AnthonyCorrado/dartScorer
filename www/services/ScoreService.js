angular.module('dartScorer.ScoreService', [])

.factory('ScoreService', function() {
    var dartNum = 1;
    var playerTurn = 0;

    var scoreData = {};

    scoreData.scoreTotals = function(players) {
        console.log(players);
    };

    scoreData.subtractScore = function(score, type) {
        console.log(playerTurn);
        return - 10;

        if (playerTurn === 0) {
            $scope.setPlayers[0].score -= score;
        }
        else if (playerTurn === 1) {
            $scope.setPlayers[1].score -= score;
        }
        else if (playerTurn === 2) {
            $scope.setPlayers[2].score -= score;
        }
        else if (playerTurn === 3) {
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