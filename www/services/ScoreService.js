angular.module('dartScorer.ScoreService', [])

.factory('ScoreService', function() {
    var scoreData = {};
    var roundNum = 1;
    var turnData = {
        'dartNum': 0,
        'playerTurn': 0,
        'nextTurn': false
    };

    scoreData.score = function(score, type, allPlayers) {

        var turnObj = this.whichTurn(allPlayers, true);
        var turn = turnObj.playerTurn;
        var newTurn = turnObj.nextTurn;
        allPlayers[turn].score -= score;
        allPlayers[turn].nextTurn = newTurn;
        console.log(turnData.dartNum);
        if ((turnData.dartNum - 1) % 3 === 0) {
            allPlayers[turn].firstDart = score;
        } else if ((turnData.dartNum + 1) % 3 === 0) {
            allPlayers[turn].secondDart = score;
        } else if (turnData.dartNum % 3 === 0) {
            allPlayers[turn].thirdDart = score;
            allPlayers[turn].turnTotal = allPlayers[turn].firstDart + allPlayers[turn].secondDart + allPlayers[turn].thirdDart;
        }
        if (turnObj.dartNum % 3 === 0 && turnData.dartNum !== 0) {
            allPlayers[turn].nextTurn = true;
        }

        return allPlayers[turn];
    };

    scoreData.whichTurn = function(setPlayers, dart) {
        turnData.nextTurn = false;
        // only increments on player score, not turn checking
        if(dart) {
            if(turnData.dartNum % 3 === 0 && turnData.dartNum !== 0) {
                if(turnData.playerTurn < setPlayers.length - 1) {
                    turnData.playerTurn++;
                } else {
                    turnData.playerTurn = 0;
                }
            }
            turnData.dartNum++;
        }
        return turnData;
    };

    return scoreData;
});