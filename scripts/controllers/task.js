'use strict';

app.controller('ItemController', function($scope, $firebase, FURL, $location, $routeParams, toaster) {

	var ref = new Firebase(FURL);
	var fbItems = $firebase(ref.child('items')).$asArray();
	var itemId = $routeParams.itemId;

	$scope.items = fbItems;
	
	if(itemId) {
		$scope.selectedItem = getItem(itemId);
	}

	function getItem(itemId) {
		return $firebase(ref.child('items').child(itemId)).$asObject();
	};

	$scope.postItem = function(item) {
		$scope.items.$add(item);
		toaster.pop('success', 'Task created successfully.');
		$location.path('/');
	};	

	$scope.updateItem = function(item) {
		$scope.selectedItem.$save(item);
		toaster.pop('success', "Task is updated.");
		$location.path('/');
	};

});