angular.module('dartScorer.PlayerService', [])

.factory('PlayerService', function($q) {
    var ref = new Firebase("https://dartscorer.firebaseio.com/");
    var playerRef = new Firebase("https://dartscorer.firebaseio.com/players");
    var playerData = {};

    playerData.getPlayers = function() {
        var players = {};
        var deferred = $q.defer();
        playerRef.on("value", function(snapshot) {
            deferred.resolve(snapshot.val());
        });
        return deferred.promise;
    };

    playerData.createPlayer = function(playerObj) {
        console.log(playerObj);
    };

    playerData.playerDetail = function(playerId) {
        var deferred = $q.defer();
        playerRef.child(playerId).on("value", function(snapshot) {
            deferred.resolve(snapshot.val());
        });
        return deferred.promise;
    };

    return playerData;

        // MOCK PLAYER DATA FOR FIREBASE ----------------

        // ref.child('players').push({
        //     name: 'Guest',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/8e6JuITh1vIy7bw/dbcoop.jpg'
        // });
        // ref.child('players').push({
        //     name: 'Anthony',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/8lT9nh2LWcNYfec/Screen%20Shot%202015-01-15%20at%206.16.38%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Lorenzo',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Tc5ygqekrulVgfH/Screen%20Shot%202015-01-15%20at%206.14.39%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'AJ',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/2LRx3ePOryO0FCW/Screen%20Shot%202015-01-15%20at%206.13.49%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Ryan',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/DHvhzkrKqLzoFl9/Screen%20Shot%202015-01-15%20at%206.13.32%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Adam',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/g34yCQkHHYXApHd/Screen%20Shot%202015-01-15%20at%206.09.00%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Alex',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/0U85vmHHkkvwZRk/Screen%20Shot%202015-01-15%20at%206.08.01%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Karan',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/HZm9w5oIcGvQZuI/Screen%20Shot%202015-01-15%20at%206.07.51%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Ali',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Xmnwbug3fZpchFM/Screen%20Shot%202015-01-15%20at%206.09.43%20PM.png'
        // });
        // ref.child('players').push({
        //     name: 'Ross',
        //     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        // });
        // ref.child('players').push({
        //     name: 'Brett',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/nmHgDqSMIOYeYWQ/Screen%20Shot%202015-01-15%20at%206.07.26%20PM.png'
        // });
        // {
        //     name: 'Anthony',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/8lT9nh2LWcNYfec/Screen%20Shot%202015-01-15%20at%206.16.38%20PM.png'
        // }, {
        //     name: 'Lorenzo',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Tc5ygqekrulVgfH/Screen%20Shot%202015-01-15%20at%206.14.39%20PM.png'
        // }, {
        //     name: 'AJ',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/2LRx3ePOryO0FCW/Screen%20Shot%202015-01-15%20at%206.13.49%20PM.png'
        // }, {
        //     name: 'Ryan',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/DHvhzkrKqLzoFl9/Screen%20Shot%202015-01-15%20at%206.13.32%20PM.png'
        // }, {
        //     name: 'Adam',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/g34yCQkHHYXApHd/Screen%20Shot%202015-01-15%20at%206.09.00%20PM.png'
        // }, {
        //     name: 'Alex',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/0U85vmHHkkvwZRk/Screen%20Shot%202015-01-15%20at%206.08.01%20PM.png'
        // }, {
        //     name: 'Karan',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/HZm9w5oIcGvQZuI/Screen%20Shot%202015-01-15%20at%206.07.51%20PM.png'
        // }, {
        //     name: 'Ali',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Xmnwbug3fZpchFM/Screen%20Shot%202015-01-15%20at%206.09.43%20PM.png'
        // }, {
        //     name: 'Ross',
        //     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        // }, {
        //     name: 'Brett',
        //     face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/nmHgDqSMIOYeYWQ/Screen%20Shot%202015-01-15%20at%206.07.26%20PM.png'
        // };

});