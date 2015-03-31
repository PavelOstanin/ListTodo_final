var app;
app = angular.module("todoList", []);

    app.controller('TodoController', ['$scope', function($scope) {
    $scope.lists = [{
                    title:'Complete the test task for Ruby Garage',
                    tasks: [
                         {title:'Write HTML & CSS'},
			 {title:'Add JavaScript'}
                          ]
	            },
		    {
                     title:'For Home',
                     tasks: [
                         {title:'Buy a milk'},
			 {title:'Clean the room'}
                            ]
                   }];


   $scope.addTask = function(create) {
	 var index = $scope.lists.indexOf(create);
         $scope.lists[index].tasks.push({title:$scope.taskText});
         $scope.val= '';
   }

   $scope.addList = function() {
         $scope.lists.push({title:$scope.listText, tasks:[]});
         $scope.listText = '';
   }

   $scope.removeList = function(cat) {
         return $scope.lists.splice($scope.lists.indexOf(cat), 1);
   }
   $scope.removeTask = function(par1, par2) {
         var index = $scope.lists.indexOf(par1);
         var index2 = $scope.lists[index].tasks.indexOf(par2);
         return $scope.lists[index].tasks.splice(index2, 1);
   }

}]);


