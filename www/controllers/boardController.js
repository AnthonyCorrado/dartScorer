angular.module('dartScorer.BoardController', [])

.controller('BoardController', function($scope, $rootScope, $ionicModal, PlayerService, lodash, $stateParams, ScoreService, GameSetupService) {
    var playerTurn = 0;
    var dartNum = 1;
    $scope.gameTitle = $stateParams.gameType;

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
        // var roundTotal = ScoreService.subtractScore(score, type);

        // perhaps send the player object to the ScoreService to allow for saving of stats and such
        $scope.setPlayers[playerTurn].score -= score;

        if(dartNum % 3 === 0) {
            if(playerTurn < ($scope.setPlayers.length - 1)) {
               playerTurn++;
               // nextPlayer();
            } else {
                playerTurn = 0;
            }
        }
        dartNum++;
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

    $scope.startGame = function() {
        var competitors = GameSetupService.startGame($scope.players, $stateParams.gameType);
        $scope.setPlayers = competitors;
        console.log($scope.setPlayers);
        $scope.closeModal();
    };

    var nextPlayer = function () {
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