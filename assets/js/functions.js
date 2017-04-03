$( document ).ready(function() {

  // AUTOMATIC COMPANY NAME SLIDE UP
  setTimeout( function() {
    // RESIZE HEIGHT OF HEADER
    $("#home-page .header").css('height', '64px')

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


});
