$( document ).ready(function() {

  // AUTOMATIC COMPANY NAME SLIDE UP
  setTimeout( function() {
    // RESIZE HEIGHT OF HEADER
    $("#home-page .header").css('height', '64px');
    $("#home-page .stripes .drop-letter").css('height', '64px');
  }, 3000);

    // AFTER NAME SLIDES UP SHOW NAVIGATION BAR
  setTimeout( function() {

    $("#home-page .nav").css('visibility', 'visible')

  }, 5000);

    // NAVIGATION ACTIVE STATE
      // TAKE INDEX OF THE ACTIVE MENU
  //var activeMenu = $(".nav .active").index();
      // CHECK WHICH MENU HAS BEEN CLICKED
  $(".nav ul li").on("click", function() {
    var clickedMenu = $(this).index();
    // REMOVE active CLASS FROM activeMenu
    $(this).removeClass("active");
    // ADD active CLASS TO THE CLICKED MENU
    $(":nth-child("+clickedMenu+")", this).addClass("active");
    //alert(clickedMenu);
    //alert(activeMenu);
    //alert("test");
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
