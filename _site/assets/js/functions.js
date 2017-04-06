$( document ).ready(function() {
  $("#home-page .nav").hide()
  // AUTOMATIC COMPANY NAME SLIDE UP
  setTimeout( function() {
    // RESIZE HEIGHT OF HEADER
    $("#home-page .header").css('height', '64px');
    $("#home-page .stripes .drop-letter").css('height', '64px');
  }, 3000);

    // AFTER NAME SLIDES UP SHOW NAVIGATION BAR
  setTimeout( function() {
    $("#home-page .nav").fadeIn();
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


});
