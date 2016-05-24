angular.module('quoteApp').controller('mainCtrl', function($scope, quoteService){

    $scope.name = "Jeremy";

    $scope.name4 = quoteService.myName;

    $scope.quotes = quoteService.getQuotes();

    $scope.addQuotes = function() {
      var newQuote = {
        text:$scope.newText,
        author:$scope.newAuthor
      }
      if(quoteService.addQuotes(newQuote))
      {
        $scope.newText = '';
        $scope.newAuthor= '';
      }
    }

    $scope.deleteMe = function(textToDelete) {
      quoteService.removeQuotes(textToDelete);
    }



});
