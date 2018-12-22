$('#home').click(function() {

  var active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    console.log(active[i].id);
    console.log(active[i].class);
  };
  var toSwap = active[0].id;

  if (toSwap === "contactBox") {
    $('#contactBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#contactBox').css('left', '150%');
        $('#contactBox').appendTo('#container');
    });

    var current = document.getElementById("contactBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");

  } else if (toSwap === "aboutBox") {
    $('#aboutBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#aboutBox').css('left', '150%');
        $('#aboutBox').appendTo('#container');
    });

    var current = document.getElementById("aboutBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "portfolioBox") {
    $('#portfolioBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#portfolioBox').css('left', '150%');
        $('#portfolioBox').appendTo('#container');
    });

    var current = document.getElementById("portfolioBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  }


  $('#homeBox').animate({
      left: '50%'
  }, 500);

  var home = document.getElementById("homeBox");
  //console.log(current);
  home.className = home.className += " active";

});

$('#about').click(function() {

  var active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    console.log(active[i].id);
    console.log(active[i].class);
  };

  var toSwap = active[0].id;

  if (toSwap === "homeBox") {
    $('#homeBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#homeBox').css('left', '150%');
        $('#homeBox').appendTo('#container');
    });

    var current = document.getElementById("homeBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "contactBox") {
    $('#contactBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#contactBox').css('left', '150%');
        $('#contactBox').appendTo('#container');
    });

    var current = document.getElementById("contactBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "portfolioBox") {
    $('#portfolioBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#portfolioBox').css('left', '150%');
        $('#portfolioBox').appendTo('#container');
    });

    var current = document.getElementById("portfolioBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  }

    $('#aboutBox').animate({
        left: '50%'
    }, 500);

    var about = document.getElementById("aboutBox");
    //console.log(current);
    about.className = about.className += " active";
});

$('#contact').click(function() {

  var active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    console.log(active[i].id);
    console.log(active[i].class);
  };

  var toSwap = active[0].id;

  if (toSwap === "homeBox") {
    $('#homeBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#homeBox').css('left', '150%');
        $('#homeBox').appendTo('#container');
    });

    var current = document.getElementById("homeBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "aboutBox") {
    $('#aboutBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#aboutBox').css('left', '150%');
        $('#aboutBox').appendTo('#container');
    });

    var current = document.getElementById("aboutBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "portfolioBox") {
    $('#portfolioBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#portfolioBox').css('left', '150%');
        $('#portfolioBox').appendTo('#container');
    });

    var current = document.getElementById("portfolioBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  }

  $('#contactBox').animate({
      left: '50%'
  }, 500);

  var contact = document.getElementById("contactBox");
  //console.log(current);
  contact.className = contact.className += " active";
});

$('#portfolio').click(function() {

  var active = document.getElementsByClassName("active");
  for (i = 0; i < active.length; i++) {
    console.log(active[i].id);
    console.log(active[i].class);
  };

  var toSwap = active[0].id;

  if (toSwap === "homeBox") {
    $('#homeBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#homeBox').css('left', '150%');
        $('#homeBox').appendTo('#container');
    });

    var current = document.getElementById("homeBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "aboutBox") {
    $('#aboutBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#aboutBox').css('left', '150%');
        $('#aboutBox').appendTo('#container');
    });

    var current = document.getElementById("aboutBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  } else if (toSwap === "contactBox") {
    $('#contactBox').animate({
        left: '-50%'
    }, 500, function() {
        $('#contactBox').css('left', '150%');
        $('#contactBox').appendTo('#container');
    });

    var current = document.getElementById("contactBox");
    //console.log(current);
    current.className = current.className.replace(" active", "");
  }

  $('#portfolioBox').animate({
      left: '50%'
  }, 500);

  var contact = document.getElementById("portfolioBox");
  //console.log(current);
  contact.className = contact.className += " active";
});
