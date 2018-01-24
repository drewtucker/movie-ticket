
//***USER INTERFACE LOGIC***
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();

});


//***BUSINESS LOGIC***


var ticketPrice = 12;

//MOVIE CONSTRUCTOR
var movie = function(name, rating, times, isNew) {
  this.name = name;
  this.rating = rating;
  this.times = times;
  this.isNew = isNew;
  };

var Balto = new movie("Balto", "G", ["12:00", "1:00", "2:00", "3:00", "5:00", "7:30"], false);
var theRoom = new movie("The Room", "PG-13", ["11:30", "12:30", "1:00", "2:30", "4:00", "5:30", "7:00"], false);
var It = new movie("It", "R", ["11:00", "12:45", "1:00", "2:30", "4:45", "6:00", "8:00"], true);
var age;

//BALTO LIST OF SHOWINGS
  $(".baltoShowings").append("<li id='baltoOption1'> <a href='#baltoOption1'>" + Balto.times[0] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption2'> <a href='#baltoOption2'>" + Balto.times[1] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption3'> <a href='#baltoOption3'>" + Balto.times[2] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption4'> <a href='#baltoOption4'>" + Balto.times[3] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption5'> <a href='#baltoOption5'>" + Balto.times[4] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption6'> <a href='#baltoOption6'>" + Balto.times[5] + "</a> </li>");

//THE ROOM LIST OF SHOWINGS
  $(".theRoomShowings").append("<li id='theRoomOption1'> <a href='#theRoomOption1'>" + theRoom.times[0] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption2'> <a href='#theRoomOption2'>" + theRoom.times[1] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption3'> <a href='#theRoomOption3'>" + theRoom.times[2] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption4'> <a href='#theRoomOption4'>" + theRoom.times[3] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption5'> <a href='#theRoomOption5'>" + theRoom.times[4] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption6'> <a href='#theRoomOption6'>" + theRoom.times[5] + "</a> </li>");
  $(".theRoomShowings").append("<li id='theRoomOption7'> <a href='#theRoomOption7'>" + theRoom.times[6] + "</a> </li>");

//IT LIST OF SHOWINGS
  $(".itShowings").append("<li id='itOption1'> <a href='#itOption1'>" + It.times[0] + "</a> </li>");
  $(".itShowings").append("<li id='itOption2'> <a href='#itOption2'>" + It.times[1] + "</a> </li>");
  $(".itShowings").append("<li id='itOption3'> <a href='#itOption3'>" + It.times[2] + "</a> </li>");
  $(".itShowings").append("<li id='itOption4'> <a href='#itOption4'>" + It.times[3] + "</a> </li>");
  $(".itShowings").append("<li id='itOption5'> <a href='#itOption5'>" + It.times[4] + "</a> </li>");
  $(".itShowings").append("<li id='itOption6'> <a href='#itOption6'>" + It.times[5] + "</a> </li>");


//CLICK FUNCTIONS FOR MOVIE SHOWINGS ON PAGE

  $("#baltoOption1").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#baltoOption2").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#baltoOption3").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#baltoOption4").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#baltoOption5").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#baltoOption6").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption1").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption2").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption3").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption4").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption5").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption6").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#theRoomOption7").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption1").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption2").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption3").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption4").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption5").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
  $("#itOption6").click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });

//END OF CLICK FUNCTIONS


});




  // var matinee = function(times) {
  //   for (var i = 0; i < times.length; i+= 1) {
  //
  //   if (times[i].charAt(0) <= 3) {
  //     matineeTicketPrice = -2;
  //     return matineeTicketPrice;
  //   }
  //   else if (times[i].charAt(0) > 3) {
  //     matineeTicketPrice = 0;
  //     return matineeTicketPrice;
  //   }
  //  };
  // };




  //  AGE FUNCTION
  //   age = parseInt($("input#ageInput").val());
  //   if(age >= 65){
  //     seniorTicketPrice = -2;
  //     return seniorTicketPrice;
  //   }
  //   else if (age < 13) {
  //     alert("You're too young boy! Go watch Balto.")
  //     seniorTicketPrice = 0;
  //     return seniorTicketPrice;
  //   }
  //   else {
  //     seniorTicketPrice = 0;
  //     return seniorTicketPrice;
  //   }
  // });
