$(function () {

    // Get the this week earners
    $.get(app_base + "Snippets/GetThisYearsTopEarners?top=10",
    function (data) {
        $(".alltimeleaderboard").html(data);
    });

});