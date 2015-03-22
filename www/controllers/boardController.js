angular.module('dartScorer.BoardController', [])

.controller('BoardController', function($scope, $rootScope, $ionicModal, PlayerService, lodash, $stateParams) {

    $scope.gameTitle = $stateParams.gameType;
    var turnNum = 1;
    var playerTurn = 1;

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
            if(playerTurn < $scope.setPlayers.length) {
               playerTurn++;
            } else {
                playerTurn = 1;
            }
        }
        turnNum++;
    };

    $scope.players = PlayerService.getPlayers();

    $scope.selectedPlayers = [];

    $scope.selectPlayer = function(index, playerObj) {
        var id = playerObj.id;
        console.log(id);
        $scope.players[index].selected = !$scope.players[index].selected;
        if (lodash.contains($scope.selectedPlayers, id)){
            $scope.selectedPlayers.pop(id);
        }
        else {
            $scope.selectedPlayers.push(id);
        }
    };

    $scope.startGame = function() {
        var competitors = [];
        console.log($scope.players[0].id);
        lodash.forEach($scope.players, function (n, key) {
            lodash.forEach($scope.selectedPlayers, function (x, xKey) {
                if (n.id === x) {
                    n.score = 301;
                    competitors.push(n);
                }
            });
        });
        $scope.setPlayers = competitors;
        $scope.closeModal();

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