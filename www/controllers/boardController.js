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
        var dart = true;
        $scope.setPlayers[turnData.playerTurn].score -= score;
        // perhaps send the player object to the ScoreService to allow for saving of stats and such
        turnData = ScoreService.whichTurn($scope.setPlayers, dart);
        console.log(turnData);
        if (turnData.nextTurn) {
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
        var competitors = GameSetupService.startGame($scope.players, $stateParams.gameType);
        $scope.setPlayers = competitors;
        $scope.closeModal();
    };

    var turnSummary = function () {
        // console.log($scope.setPlayers[playerTurn]);
        var turnData = ScoreService.whichTurn();
        $scope.nextPlayer = $scope.setPlayers[turnData.playerTurn];
        // $scope.currentPlayer = $scope.setPlayers[playerTurn];
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