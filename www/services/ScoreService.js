angular.module('dartScorer.ScoreService', [])

.factory('ScoreService', function($rootScope, lodash) {
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
        var isValid = this.isValidTurn(score, allPlayers[turn], type);
        // sets score to revert back to in the event of a bust
        if ((turnObj.dartNum + 2) % 3 === 0) {
            allPlayers[turn].revertScore = allPlayers[turn].score;
        }

        if (!isValid) {
            allPlayers[turn].busted = true;
        }
        if (isValid) {
            allPlayers[turn].score -= score;
            console.log(this.checkForWin(allPlayers[turn].score, type));
        }

        if(this.checkForWin(allPlayers[turn].score, type)) {
            allPlayers[turn].hasWon = true;
        }

        allPlayers[turn].nextTurn = newTurn;

        // first dart score property added if valid
        if ((turnData.dartNum - 1) % 3 === 0) {
            if (isValid) {
                allPlayers[turn].firstDart = score;
            } else {
                allPlayers[turn].firstDart = 'Busted';
            }
        // second dart ......
        } else if ((turnData.dartNum + 1) % 3 === 0) {
            if (isValid) {
                allPlayers[turn].secondDart = score;
            } else {
                 allPlayers[turn].secondDart = 'Busted';
            }
        // third dart ......
        } else if (turnData.dartNum % 3 === 0) {
            if (isValid) {
                allPlayers[turn].thirdDart = score;
                allPlayers[turn].turnTotal = allPlayers[turn].firstDart + allPlayers[turn].secondDart + allPlayers[turn].thirdDart;
            } else {
                allPlayers[turn].thirdDart = 'Busted';
                allPlayers[turn].turnTotal = 'Busted';
                allPlayers[turn].score = allPlayers[turn].revertScore;
            }
        }

        if (turnObj.dartNum % 3 === 0 && turnData.dartNum !== 0) {
            allPlayers[turn].nextTurn = true;
            allPlayers[turn].busted = false;
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

    scoreData.isValidTurn = function(dartScore, totalScore, type) {
        var gameid = $rootScope.gameid;
        console.log(totalScore);
        // 301 and 501 regular and tourney mode
        if (gameid == 1 || gameid == 2) {
            if (dartScore > totalScore.score) {
                return false;
            }
            else {
                return true;
            }
        } else if (gameid == 11 || gameid == 12) {
            if (dartScore > totalScore.score) {
                return false;
            } else if (dartScore === totalScore.score && type !== 'double') {
                return false;
            } else if (dartScore - totalScore === 1) {
                return false;
            } else {
                return true;
            }
        }
        else {
            return true;
        }
        // cricket mode
        // else if (gameid == 3) {

        //     var isNeeded = lodash.includes(totalScore.neededZones, dartScore);
        //     console.log(isNeeded);
        //     // if (turnScore)
        //     //this.
        // }
    };
    scoreData.checkForWin = function(playerScore, type) {
        var gameid = $rootScope.gameid;
        if (gameid == 1 || gameid == 2 ) {
            if (playerScore === 0) {
                return true;
            }
        } else if (gameid == 11 || gameid == 12) {
            if (playerScore === 0 && type === 'double') {

                return true;
            }
        }
    };

    return scoreData;
});