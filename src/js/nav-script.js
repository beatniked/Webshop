$(document).ready(function () {
  $(function () {
    $(".toggle").on("click", function () {
      if ($(".item").hasClass("active-nav")) {
        $(".item").removeClass("active-nav");
        $(this).find("a").html("<i class='fas fa-bars'></i>");
      }
      else {
        $(".item").addClass("active-nav");
        $(this).find("a").html("<i class='fas fa-times'></i>");
      }
    });
  });
});










