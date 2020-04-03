// Check off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// Click On X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event) {

    if (event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        //  create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});