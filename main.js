$(document).ready(function () {
  $("#mostrar").click(function () {
    $("#imagen").show();
    $("title").text("¡Mirá la siguiente imagen!");
    $("#titulo").text("¡Mirá la siguiente imagen!");
  });

  $("#esconder").click(function () {
    $("#imagen").hide();
    $("title").text("¡No tenemos ninguna imagen!");
    $("#titulo").text("¡No tenemos ninguna imagen!");
  });
});
