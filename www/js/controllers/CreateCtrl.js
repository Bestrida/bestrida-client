angular.module('create', [])

.controller('CreateCtrl', ['$scope', '$http', 'CreateFct', 'localStorageService', function($scope, $http, CreateFct, localStorageService) {

  // Save current user information
  $scope.userId = localStorageService.get('userId');

  // Set date equal to current date
  $scope.date = new Date();
  // Load and save current user friends and segments
  CreateFct.getUser($scope.userId)
    .success(function(data) {
      $scope.userName = data.fullName;
      $scope.userPhoto = data.photo;
      $scope.challengers = data.friends;
      $scope.segments = data.segments;
    });

  // Create Challenge - Triggered when 'create challenge' button is clicked
  $scope.createChallenge = function() {
    var data = {
      segmentId: $scope.segment._id,
      segmentName: $scope.segment.name,
      challengerId: $scope.userId,
      challengerName: $scope.userName,
      challengerPhoto: $scope.userPhoto,
      challengeeId: $scope.challenger.id,
      challengeeName: $scope.challenger.fullName,
      challengeePhoto: $scope.challenger.photo,
      completionDate: $scope.date
    };
    CreateFct.createChallenge(data);
  };


}])

.directive('ionSelect', function() {
  'use strict';
  return{
    restrict: 'EAC',
    scope: {
      label:'@',
      labelField:'@',
      labelField1: '@',
      labelField2: '@',
      provider:'=',
      ngModel: '=?',
      ngValue: '=?',
    },
    require: '?ngModel',
    transclude : false,
    replace: false,
    // NOTE: input controller if directive is decoupled into separate folder
    // NOTE: consider refactoring template with templateURL -> templateUrl: 'templates/create-challenge.html',
    template:
      // Template for input field and dropdown
      '<div class="item item-input-inset">'
        +'<label class="item-input-wrapper">'
          +'<i class="icon ion-search placeholder-icon"></i>'
          +'<input id="filter" type="search"  ng-model="ngModel" ng-value="ngValue" ng-keydown="onKeyDown()" required />'
        +'</label>'
        +'<button class="button button-small button-clear" ng-model="ngModel" ng-click="open()">'
          +'<i class="icon ion-chevron-down"></i>'
        +'</button>'
      +'</div>'
      // Template that is displayed when dropdown button is clicked
      +'<div class="optionList" ng-hide="showHides">'
          +'<ul class="list">'
            +'<li class="item" ng-click="select(item)" ng-repeat="item in provider | limitTo:3">{{item[labelField]}}</li>'
          +'</ul>'
      +'</div>'
      // Template that is displayed when input field is typed in
      +'<div class="optionList" ng-show="showHide">'
          +'<ul class="list">'
            +'<li class="item" ng-click="select(item)" ng-repeat="item in provider | filter:ngModel">{{item[labelField]}}</li>'
          +'</ul>'
      +'</div>',

    link: function (scope, element, attrs, ngModel) {
      scope.ngValue = scope.ngValue !== undefined ? scope.ngValue :'item';

      scope.select = function(item){
        ngModel.$setViewValue(item);
        scope.showHide = false;
        scope.showHides = true;
      };

      element.bind('click',function(){
        element.find('input').triggerHandler('focus');
      });

      scope.open = function(){
        // NOTE: investigate what scope.ngModel is used for here - it is unclear
        scope.showHide = false;
        scope.ngModel = "";
        return scope.showHides=!scope.showHides;
        // return scope.showHide=!scope.showHide;
      };

      scope.onKeyDown = function(){
        scope.showHides = true;
        scope.showHide = true;
        if(!scope.ngModel){
          scope.showHide = false;
        }
      };

      scope.$watch('ngModel',function(newValue){
        if(newValue)
      element.find('input').val(newValue[scope.labelField]);
      });
    },
  };
});
