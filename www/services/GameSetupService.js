angular.module('dartScorer.GameSetupService', [])

.factory('GameSetupService', function(lodash, $rootScope) {
    var gameObj = {};

    gameObj.startGame = function(players) {
        var gameid = $rootScope.gameid;
        var startingScore = 0;
        // set starting points based on game type
        if (gameid == 1 || gameid == 11) {
            startingScore = 301;
        } else if (gameid == 2 || gameid == 12) {
            startingScore = 501;
        } else if (gameid == 3) {
            startingScore = [25, 25, 25, 20, 20, 20, 19, 19, 19, 18, 18, 18, 17, 17, 17, 16, 16, 16, 15, 15, 15];
        }
        return this.setPlayers(players, startingScore);
    };

    gameObj.setPlayers = function(players, startingScore) {
        var competitors = [];

        // sets selected players for match
        lodash.forEach(players, function(n, key) {
            if(n.selected === true) {
                n.key = key;
                competitors.push(n);
            }
        });
        lodash.forEach(competitors, function (x, xKey) {
            // sets specific properties for player based on if game is an '01 game or cricket 
            // an '01 game is set to .score, which is a number
            // cricket is set to .neededZones, which is an array
            isArr = Object.prototype.toString.call(startingScore) == '[object Array]';
            if (typeof startingScore === 'number') {
                x.score = startingScore;
            } else if (isArr) {
                x.neededZones = startingScore;
            }
            
        });
        console.log(competitors);

        return competitors;
    };

    return gameObj;
});