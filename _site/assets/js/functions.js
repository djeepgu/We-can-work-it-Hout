$( document ).ready(function() {
  // HIDE NAVIGATION AND CONTENT ON THE HOME PAGE
  $("#home-page .nav").hide();
  $("#home-page .about").hide();

  // AUTOMATIC COMPANY NAME SLIDE UP
  setTimeout( function() {
    // RESIZE HEIGHT OF HEADER
    $("#home-page .header").addClass("shrink");
    $("#home-page .stripes .drop-letter").addClass("shrink");
    
  }, 3000);

    // AFTER NAME SLIDES UP SHOW NAVIGATION BAR
  setTimeout( function() {
    $("#home-page .nav").css("display", "block").fadeIn();
    $("#home-page .about").fadeIn("slow");
  }, 4500);

    // NAVIGATION ACTIVE STATE

  var path = window.location.href;
  $(".nav a").each(function() {
    if (this.href === path) {
      $(this).addClass('active');
    }
  });

  // SIDEBAR UP/DOWN NAVIGATION

    //DOWN
  $("#down").click(function () {
    var count = $(".portfolio > div").length;
    var activeView = $(".portfolio").find(".in-view").index() + 1;
    var downNext = activeView + 1;

    if (count == activeView) {
      $(".portfolio").scrollTo("#pg1", 500);
      $(".portfolio > div:nth-last-child(1)").removeClass("in-view");
      $("#pg1").addClass("in-view");
    } else {
      $(".portfolio").scrollTo("#pg"+downNext+"", 500);
      $(".portfolio > div:nth-child("+activeView+")").removeClass("in-view");
      $(".portfolio > div:nth-child("+downNext+")").addClass("in-view");
    }

  });

    //UP
  $("#up").click(function () {
    var count = $(".portfolio > div").length;
    var activeView = $(".portfolio").find(".in-view").index() + 1;
    var upNext = activeView - 1;

    if (activeView == 1) {
      $(".portfolio").scrollTo("#pg"+count+"", 500);
      $("#pg1").removeClass("in-view");
      $(".portfolio > div:nth-last-child(1)").addClass("in-view");
    } else {
      $(".portfolio").scrollTo("#pg"+upNext+"", 500);
      $(".portfolio > div:nth-child("+activeView+")").removeClass("in-view");
      $(".portfolio > div:nth-child("+upNext+")").addClass("in-view");
    }

  });

  // MOBILE BURGER MENU
  // SHOW SPLASH MENU
  $(".menu-wrap").on("click", function () {
    showSplash();
  });

  // HIDE SPLASH MENU
  $(".close").on("click", function () {
    hideSplash();
  });

  $("#splash").on("click", function(event) {
    if (event.target == this) {
      hideSplash();
    }

  });

});

function showSplash() {
  $("#splash").addClass("show").removeClass("hide");
}

function hideSplash() {
  $("#splash").addClass("hide").removeClass("show");
}
