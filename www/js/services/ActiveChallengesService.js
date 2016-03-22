angular.module('activechallengesservice', ['LocalStorageModule'])

.factory('FeedFct', ['$http', function($http) {
    return {
      pendingChallenge: function(userId) {
        return $http.get('http://bestrida.herokuapp.com/api/challenges/pending/'+ userId);
      },
      getFriends: function(userId) {
        return $http.get('http://bestrida.herokuapp.com/api/friends/' + userId);
      },
      postAcceptChallenge: function(challenge) {
        return $http.post('http://bestrida.herokuapp.com/api/challenges/accept', challenge);
      },
      postDeclineChallenge: function(challenge) {
        return $http.post('http://bestrida.herokuapp.com/api/challenges/decline', challenge);
      }
    };
}])

.factory('CreateFct', ['$http', function($http) {
  return {
    createChallenge: function(data) {
      return $http.post('http://bestrida.herokuapp.com/api/challenges/create', data);
    },
    getUser: function(challengerId) {
      return $http.get('http://bestrida.herokuapp.com/api/users/' + challengerId);
    },
    getSegments: function() {
      return $http.get('http://bestrida.herokuapp.com/api/segments/');
    }
  };
}])

.factory('AuthFct', function ($window, $state, localStorageService, $location) {
  var url = 'http://bestrida.herokuapp.com/auth/strava';
  var loginWindow, token, hasToken, userId, hasUserId;
  return {
  login : function () {
    loginWindow = $window.open(url, '_blank', 'location=no,toolbar=no');
    loginWindow.addEventListener('loadstart', function (event) {
      if((event.url).startsWith("http://bestrida.herokuapp.com/loggedIn.html")) {
        var token = event.url.match('oauth_token=(.*)&userId')[1];
        var userId = event.url.match('&userId=(.*)')[1];
        loginWindow.close();
        localStorageService.set('strava-token', token);
        localStorageService.set('token-date', JSON.stringify(new Date()));
        localStorageService.set('userId', userId);
      }
      $state.go('tab.challenge-feed');
    });
  }
};
})

.factory('CompletedFct', ['$http', function($http) {
  return {
    getFriends: function(userId) {
      return $http.get('http://bestrida.herokuapp.com/api/friends/' + userId);
    },
    getCompletedChallenge: function(userId) {
      return $http.get('http://bestrida.herokuapp.com/api/challenges/completed/' + userId);
    }
  };
}])

.factory('ActiveChallengesFct', ['$http', function($http) {
  return {
    getActiveChallenges: function(userId) {
      return $http.get('http://bestrida.herokuapp.com/api/challenges/active/' + userId);
    },
    getFriends: function(userId) {
      return $http.get('http://bestrida.herokuapp.com/api/friends/' + userId);
    },
    removeActiveChallenge: function(activeChallenge, userId) {
      //this is the data format that the server is expecting
      var completeChallenge = {
        id: activeChallenge._id,
        //userId will need to reflect the logged in user's id - currently hardcoded for testing purposes
        userId: userId
      };
      // activeChallenges.splice(activeChallenges.indexOf(activeChallenge), 1);
      return $http.post('http://bestrida.herokuapp.com/api/challenges/complete', completeChallenge);
    }
  };
}])

.factory('ChallengeStatsFct', ['$http', function($http) {
  return {
    getChallenge: function(challengerId) {
      return $http.get('http://bestrida.herokuapp.com/api/challenges/' + challengerId);
    }
  };
}])

.factory('PendingDetailFct', ['$http', function($http) {
  return {
    getSegment: function(segmentId) {
      return $http.get('http://bestrida.herokuapp.com/api/segments/' + segmentId);
    }
  };
}]);