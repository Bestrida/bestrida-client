angular.module('challengers', [])

.controller('ChallengeCtrl', ['$scope', 'FeedFct', 'localStorageService', function($scope, FeedFct, localStorageService) {
  // Save current users information
  $scope.userId = localStorageService.get('userId');
  $scope.photo = {};

  // Update pending challenges when the user pulls down to refresh
  $scope.doRefresh = function() {
    FeedFct.pendingChallenge($scope.userId)
    .success(function(data) {
      $scope.challenges = data;
      $scope.challenges.forEach(function(challenge) {
        challenge.challengerId == $scope.userId ? challenge.opponent = challenge.challengeeName : challenge.opponent = challenge.challengerName;
      });
    })
    .finally(function() {
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  // Save current users pending challenges
  FeedFct.pendingChallenge($scope.userId)
    .success(function(data) {
      $scope.challenges = data;
      $scope.challenges.forEach(function(challenge) {
        challenge.challengerId == $scope.userId ? challenge.opponent = challenge.challengeeName : challenge.opponent = challenge.challengerName;
      });
    });

  // Save current users friends photo to display
  // NOTE: This is costly in terms of time to make the API call and the iterate through the friends array. Might make more sense to store this as part of all challenges instead so we only have to make 1 API call?
  FeedFct.getFriends($scope.userId)
    .success(function(data) {
      data.forEach(function(friend) {
        $scope.photo[friend.id] = friend.photo;
      });
    });
 
  $scope.acceptChallenge = function(challenge) {
    var data = {
      id: challenge._id
    };
    FeedFct.postAcceptChallenge(data);
  };

  $scope.declineChallenge = function(challenge) {
    var data = {
      id: challenge._id
    };
    FeedFct.postDeclineChallenge(data);
  };

}]);