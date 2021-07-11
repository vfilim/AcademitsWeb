(function () {
    $(function () {
        $(".add-entry-button").click(function (e) {
            var newEntry = $("<p></p>")
                .text(
                    $(".new-entry-input").val())
                .append(
                    $("<button>Delete</button>")
                        .click(function (e) {
                            newEntry.remove();
                        })
                        .addClass("delete-entry-button")
                );

            $("body").append(newEntry);
        });
    });
}());