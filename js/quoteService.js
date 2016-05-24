angular.module('quoteApp')
  .service('quoteService', function(){

  this.myName = "Bearabon";
  if(localStorage.length){
    quotes = JSON.parse(localStorage.getItem('quotes'));
    for(var i = 0; i < quotes.length; i++) {
      delete quotes[i].$$hashKey;

    }
    console.log(quotes);
  }else {
  var quotes = [
    { text: "Life isn't about getting and having, it's about giving and being.", author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
}

//get, add, and remove
  this.getQuotes = function() {
    return quotes;
  }

  this.addQuotes = function(data) {
    if(data.author && data.text){
      quotes.push(data);
      localStorage.setItem('quotes', JSON.stringify(quotes));
      return true;
    }
    return false;

  };

  this.removeQuotes = function(text) {
    for(var i = 0; i < quotes.length; i++){
      if(quotes[i].text.toLowerCase() === text.toLowerCase()){
        quotes.splice(i--,1);
        localStorage.setItem('quotes', JSON.stringify(quotes));
      }
    }
  };
});
[{"text":"Life isn't about getting and having, it's about giving and being.","author":"Kevin Kruse","$$hashKey":"object:3"},{"text":"Whatever the mind of man can conceive and believe, it can achieve","author":"Napoleon Hill","$$hashKey":"object:4"},{"text":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein","$$hashKey":"object:5"},{"text":"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.","author":"Robert Frost","$$hashKey":"object:6"},{"text":"The most difficult thing is the decision to act, the rest is merely tenacity.","author":"Amelia Earhart","$$hashKey":"object:7"},{"text":"Life is what happens to you while you're busy making other plans.","author":"John Lennon","$$hashKey":"object:8"},{"text":"What even is a jQuery?","author":"Tyler S. McGinnis","$$hashKey":"object:9"},{"text":"When life gives you lemons yell at life. Ask to see life's manager!","author":"Cave Johnson"}]
