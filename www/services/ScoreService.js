angular.module('dartScorer.ScoreService', [])

.factory('ScoreService', function() {
    var scoreData = {};
    var turnData = {
        'dartNum': 1,
        'playerTurn': 0,
        'nextTurn': false
    };

    scoreData.scoreTotals = function(players) {
        console.log(players);
    };

    scoreData.subtractScore = function(score, type) {
        console.log(playerTurn);
    };

    scoreData.whichTurn = function(setPlayers, dart) {
        turnData.nextTurn = false;
        console.log('dart ' + turnData.dartNum);
        if(turnData.dartNum % 3 === 0) {
            if(turnData.playerTurn < (setPlayers.length - 1)) {
                turnData.playerTurn++;
                
            } else {
                turnData.playerTurn = 0;
            }
            turnData.nextTurn = true;
        }
        if (dart) {
            turnData.dartNum++;
        }
        return turnData;
    };

    return scoreData;
});