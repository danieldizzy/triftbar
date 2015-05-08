'use strict';

app.controller('ItemController' , function($scope, FURL, $firebase, $location, $routeParams){

	var ref = new Firebase(FURL);
	var fbItems = $firebase(ref.child('items')).$asArray();
	var itemsId = $routeParams.itemsId;

	if(itemsId) {
		$scope.selectedItem = getItem(itemsId);
	}

	function getItem (itemsId) {
		return $firebase(ref.child('items').child(itemsId)).$asObject();
	}

	$scope.updateItem = function(items){
		$scope.selectedItem.$save(items);
		$location.path('/browse');
	}

	$scope.items = fbItems;

	$scope.postItem = function(items) {
		fbItems.$add(items);
		$location.path('/browse');
	}
}); 