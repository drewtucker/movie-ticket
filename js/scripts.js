//BUSINESS LOGIC

var age = $("#ageInput").val();

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

  var matinee = function(times) {
    for (var i = 0; i < times.length; i+= 1) {

    if (times[i].charAt(0) <= 3) {
      ticketPrice = ticketPrice - 2;
      return ticketPrice;
    }
    else if (times[i].charAt(0) > 3) {
      return ticketPrice;
    }
   };
  };


//USER INTERFACE LOGIC
  $(document).ready(function(event) {
// Balto.times.forEach(function(time) {

  $("#baltoShowings").append("<li> <a href='#baltoOption1'>" + Balto.times[0] + "</a> </li>");
  $("#baltoShowings").append("<li> <a href='#baltoOption2'>" + Balto.times[1] + "</a> </li>");
  $("#baltoShowings").append("<li> <a href='#baltoOption3'>" + Balto.times[2] + "</a> </li>");
  $("#baltoShowings").append("<li> <a href='#baltoOption4'>" + Balto.times[3] + "</a> </li>");
  $("#baltoShowings").append("<li> <a href='#baltoOption5'>" + Balto.times[4] + "</a> </li>");
  $("#baltoShowings").append("<li> <a href='#baltoOption6'>" + Balto.times[5] + "</a> </li>");

$("#baltoOption1").click(function(){
    alert("yeAH BUDDYYYY");
});

// })
});
