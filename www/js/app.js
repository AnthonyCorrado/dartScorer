// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('dartScorer', ['ionic',
    'ngLodash',
    'starter.controllers',
    'starter.services',
    'dartScorer.TabController',
    'dartScorer.GameController',
    'dartScorer.PlayerService',
    'dartScorer.BoardController'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom'); //other values: top
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'TabController'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/games',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-games.html',
        controller: 'GameController'
      }
    }
  })

  .state('tab.dartboard', {
      url: '/dartboard',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dartboard.html',
          controller: 'BoardController'
        }
      }
    })
    .state('tab.dartboard-game', {
      url: '/dartboard/:gameType',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dartboard.html',
          controller: 'BoardController'
        }
      }
    })

  .state('tab.chats', {
      url: '/players',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-players.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/games');

});
