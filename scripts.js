

$(document).ready(function () {
    let offset={ offset: "80%" }
  $(".about_title").waypoint(
    function () {
      $(".about_title").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
  //about content
  $(".about_content").waypoint(
    function () {
      $(".about_content").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
  // two
  $(".seller1").waypoint(
    function () {
      $(".seller1").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//   three
$(".seller2").waypoint(
    function () {
      $(".seller2").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );      
// four
$(".seller3").waypoint(
    function () {
      $(".seller3").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//   Best seller
$("#producthead").waypoint(
    function () {
      $("#producthead").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//    card1
$("#card1").waypoint(
    function () {
      $("#card1").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
//card2
$("#card2").waypoint(
    function () {
      $("#card2").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
  //card3
$("#card3").waypoint(
    function () {
      $("#card3").addClass("animate__animated animate__fadeInRight");
    },
    offset
  );

  //card4
$("#card4").waypoint(
    function () {
      $("#card4").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
  //card5
$("#card5").waypoint(
    function () {
      $("#card5").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//card6
$("#card6").waypoint(
    function () {
      $("#card6").addClass("animate__animated animate__fadeInRight");
    },
    offset
  );
  // service 
  //colu1
  $("#colu1").waypoint(
    function () {
      $("#colu1").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
//colu2
$("#colu2").waypoint(
    function () {
      $("#colu2").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
  //colu3
  $("#colu3").waypoint(
    function () {
      $("#colu3").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
  //colu4
  $("#colu4").waypoint(
    function () {
      $("#colu4").addClass("animate__animated animate__fadeInRight");
    },
    offset
  );
  //contact
  $(".contact").waypoint(
    function () {
      $(".contact").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
  //form control
  $(".form1").waypoint(
    function () {
      $(".form1").addClass("animate__animated animate__fadeInUp");
    },
    offset
    // form2
  );
  $(".form2").waypoint(
    function () {
      $(".form2").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//   form3
  $(".form3").waypoint(
    function () {
      $(".form3").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
//   message1
  $(".message1").waypoint(
    function () {
      $(".message1").addClass("animate__animated animate__fadeInUp");
    },
    offset
  );
  //  Mens collection
  $(".collection").waypoint(
    function () {
      $(".collection").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );
  //   shop now
  $(".shopnow").waypoint(
    function () {
      $(".shopnow").addClass("animate__animated animate__fadeInLeft");
    },
    offset
  );

});







