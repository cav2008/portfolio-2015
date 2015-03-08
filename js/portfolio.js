$(document).ready(function() {
    // tool tips
    $(".logos i").tooltip();

    $('.logos i').click(function () {
          $(this).effect("bounce", { times: 5, distance: 40 }, 900);
    });
});