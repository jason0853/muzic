module.exports = function($window, $rootScope, playerService, playerListFactory) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/partials/youtubePlayer.html',
        controller: function($scope, $rootScope, $window) {
            // Load youtube iframe api
            if ($scope.myMuzicData.length != 0) {
                $rootScope.activeMuzic = 0;
                $window.onYouTubeIframeAPIReady(playerListFactory.muzic[$rootScope.activeMuzic].id);
            }

            // To play Youtube
            $scope.playBtn = function() {
                playerService.playYoutube();
            };

            // To pause Youtube
            $scope.pauseBtn = function() {
                playerService.pauseYoutube();
            };

            // To stop Youtube
            $scope.stopBtn = function() {
                playerService.stopYoutube();
            };
        }
    }
};
