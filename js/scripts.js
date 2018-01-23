
//USER INTERFACE LOGIC
$(document).ready(function() {

  $("form#userInput").submit(function(event){
    var age = parseInt($("input#ageInput").val());
    console.log(isSenior(age));
    event.preventDefault();
  });

  $(".baltoShowings").append("<li id='baltoOption1'> <a href='#baltoOption1'>" + Balto.times[0] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption2'> <a href='#baltoOption2'>" + Balto.times[1] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption3'> <a href='#baltoOption3'>" + Balto.times[2] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption4'> <a href='#baltoOption4'>" + Balto.times[3] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption5'> <a href='#baltoOption5'>" + Balto.times[4] + "</a> </li>");
  $(".baltoShowings").append("<li id='baltoOption6'> <a href='#baltoOption6'>" + Balto.times[5] + "</a> </li>");

  $("#baltoOption1").last().click(function(){
    event.preventDefault();
    $("#result").text("Ticket Price: " + "$" + ticketPrice + ".00");
  });
});


//BUSINESS LOGIC


var ticketPrice = 12;

var movie = function(name, rating, times, isNew) {
  this.name = name;
  this.rating = rating;
  this.times = times;
  this.isNew = isNew;
  };

  var Balto = new movie("Balto", "G", ["12:00", "1:00", "2:00", "3:00", "5:00", "7:30"], false);
  var theRoom = new movie("The Room", "PG-13", ["11:30", "12:30", "1:00", "2:30", "4:00", "5:30", "7:00"], false);
  var It = new movie("It", "R", ["11:00", "12:45", "1:00", "2:30", "4:45", "6:00", "8:00"], true);

  var isSenior = function(age){
    if(age >= 65){
      seniorTicketPrice = -2;
      return seniorTicketPrice;
    }
    else if (age < 13) {
      $("#column1").show();
      return ticketPrice;

    }
    else {
      return ticketPrice;
    }
  }


  var matinee = function(times) {
    for (var i = 0; i < times.length; i+= 1) {

    if (times[i].charAt(0) <= 3) {
      matineeTicketPrice = -2;
      return matineeTicketPrice;
    }
    else if (times[i].charAt(0) > 3) {
      return ticketPrice;
    }
   };
  };

console.log(ticketPrice + matinee(Balto.times[1]) + isSenior(67));
