angular.module('dartScorer.PlayerService', [])

.factory('PlayerService', function() {
  // Might use a resource here that returns a JSON array
  var playerData = {};
  // Some fake testing data
  playerData.getPlayers = function() {
    return [{
      id: 100,
      name: 'Player1',
      face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
      id: 0,
      name: 'Anthony',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/8lT9nh2LWcNYfec/Screen%20Shot%202015-01-15%20at%206.16.38%20PM.png'
    }, {
      id: 1,
      name: 'Lorenzo',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Tc5ygqekrulVgfH/Screen%20Shot%202015-01-15%20at%206.14.39%20PM.png'
    }, {
      id: 2,
      name: 'AJ',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/2LRx3ePOryO0FCW/Screen%20Shot%202015-01-15%20at%206.13.49%20PM.png'
    }, {
      id: 3,
      name: 'Ryan',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/DHvhzkrKqLzoFl9/Screen%20Shot%202015-01-15%20at%206.13.32%20PM.png'
    }, {
      id: 4,
      name: 'Adam',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/g34yCQkHHYXApHd/Screen%20Shot%202015-01-15%20at%206.09.00%20PM.png'
    }, {
      id: 5,
      name: 'Alex',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/0U85vmHHkkvwZRk/Screen%20Shot%202015-01-15%20at%206.08.01%20PM.png'
    }, {
      id: 6,
      name: 'Karan',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/HZm9w5oIcGvQZuI/Screen%20Shot%202015-01-15%20at%206.07.51%20PM.png'
    }, {
      id: 7,
      name: 'Ali',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/Xmnwbug3fZpchFM/Screen%20Shot%202015-01-15%20at%206.09.43%20PM.png'
    }, {
      id: 8,
      name: 'Ross',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 9,
      name: 'Brett',
      face: 'https://s3.amazonaws.com/uploads.hipchat.com/39979/747064/nmHgDqSMIOYeYWQ/Screen%20Shot%202015-01-15%20at%206.07.26%20PM.png'
    }];
  };
  return playerData;
});