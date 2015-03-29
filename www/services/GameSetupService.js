angular.module('dartScorer.GameSetupService', [])

.factory('GameSetupService', function(lodash) {
    var gameObj = {};

    gameObj.startGame = function(players, gameType) {
        var competitors = [];
        var startingScore = 0;
        // set starting points based on game type
        if (gameType == 1 || gameType == 11) {
            startingScore = 301;
        } else if (gameType == 2 || gameType == 12) {
            startingScore = 501;
        } else {
            startingScore = null;
        }

        // sets selected players for match
        lodash.forEach(players, function(n, key) {
            if(n.selected === true) {
                n.key = key;
                competitors.push(n);
            }
        });
        lodash.forEach(competitors, function (x, xKey) {
            x.score = startingScore;
            // ScoreService.scoreTotals(x);
        });
        console.log(competitors);
        // ScoreService.setupGame(competitors, gameType);
        return competitors;
    };

    return gameObj;
});