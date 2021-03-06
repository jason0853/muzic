module.exports = function($config, $firebaseArray, $firebaseObject, authFactory) {

    var playerListFactory = {};

    // list data
    playerListFactory.muzic = [];

    var rootRef = new Firebase($config.firebaseUrl);
    var userRef = rootRef.child(authFactory.key);
    var muzicRef = userRef.child('muzic');

    // Init my list
    playerListFactory.initList = function() {
        return $firebaseArray(muzicRef).$loaded();
    };

    // Add data
    playerListFactory.addData = function(data) {
        return $firebaseArray(muzicRef).$add(data);
    };

    // Remove data
    playerListFactory.removeData = function(idx) {
        playerListFactory.initList().then(function(data) {
            var item = data[idx];
            data.$remove(item);
        });
    };

    return playerListFactory;
};
