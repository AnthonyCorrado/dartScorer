angular.module('dartScorer.BoardController', [])

.controller('BoardController', function($scope, $rootScope, $ionicModal, PlayerService, lodash, $stateParams, ScoreService, GameSetupService) {
    $scope.gameTitle = $stateParams.gameType;
    var turnData = {
        'playerTurn': 0
    };

    $scope.test = 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/8lT9nh2LWcNYfec/Screen%20Shot%202015-01-15%20at%206.16.38%20PM.png';

    $scope.test2 = 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/0U85vmHHkkvwZRk/Screen%20Shot%202015-01-15%20at%206.08.01%20PM.png';

    $ionicModal.fromTemplateUrl('templates/player-select.html', {
        scope: $scope,
        animation: 'slide-in-up',
        backdropClickToClose: false
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
        $scope.grayBG = true;
        $scope.blurBG = true;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.score = function(score, type) {
        var playerObj = ScoreService.score(score, type, $scope.setPlayers);
        if (playerObj.hasWon) {
            playerWinSummary(playerObj);
        }
        if (playerObj.nextTurn) {
            console.log(playerObj);
            turnSummary();
        }
    };

    // populate "who's playing" modal with players from db
    $scope.players = PlayerService.getPlayers()
        .then(function(playerData) {
            $scope.players = playerData;
    });

    $scope.selectedPlayers = [];

    $scope.selectPlayer = function(playerId, playerObj) {
        var id = playerId;
        $scope.players[playerId].selected = !$scope.players[playerId].selected;
    };

    $scope.initializeGame = function() {
        playerTurn = 0;
        dartNum = 1;
        var competitors = GameSetupService.startGame($scope.players);
        $scope.setPlayers = competitors;
        $scope.closeModal();
    };

    var turnSummary = function () {
        var turnData = ScoreService.whichTurn($scope.setPlayers, false);
        $scope.currentPlayer = $scope.setPlayers[turnData.playerTurn];
        if ((turnData.playerTurn + 1) === $scope.setPlayers.length) {
            $scope.nextPlayer = $scope.setPlayers[0];
        } else {
            $scope.nextPlayer = $scope.setPlayers[turnData.playerTurn + 1];
        }
        
        $ionicModal.fromTemplateUrl('templates/next-player.html', {
            scope: $scope,
            animation: 'slide-in-up',
            backdropClickToClose: true
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
            $scope.grayBG = true;
            $scope.blurBG = true;
        });
    };

    // winnner's summary modal -------------------

    var playerWinSummary = function(winnerObj) {
        console.log(winnerObj.name + ' has won!!!');
        $scope.winner = winnerObj;
        $ionicModal.fromTemplateUrl('templates/winner-summary.html', {
            scope: $scope,
            animation: 'slide-in-up',
            backdropClickToClose: false
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
            $scope.grayBG = true;
            $scope.blurBG = true;
        });
    };

    // -------- modal controls -------------------
    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        if ($scope.modal) {
            $scope.modal.remove();
        }
    });
      // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        $scope.hideMenu = false;
        $scope.grayBG = false;
        $scope.blurBG = false;
        // Execute action
    });
      // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        $scope.hideMenu = false;
        // Execute action
    });
    // -----------------------------------------
});