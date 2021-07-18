$(function () {
    $(".add-entry-button").click(function () {
        if ($(".new-entry-input").val() === "") {
            alert("You can't add an empty entry");

            return;
        }

        var newEntry = $("<li></li>")
            .text($(".new-entry-input").val())
            .addClass("entry");

        var editEntryButton = $("<button>Edit</button>")
            .click(function () {
                newEntry.children().detach();

                var editEntryInput = $("<input></input>").val(newEntry.text());

                newEntry.html("")
                editEntryInput.appendTo(newEntry);

                $("<button>Save</button>").appendTo(newEntry)
                    .addClass("todo-list-button")
                    .click(function () {
                        newEntry.append(newEntry.children(1).val());
                        newEntry.children().detach();

                        newEntry.append(editEntryButton);
                        newEntry.append(deleteButton);
                    })
            })
            .addClass("todo-list-button")
            .appendTo(newEntry);

        var deleteButton = $("<button>Delete</button>")
            .click(function () {
                newEntry.remove();
            })
            .addClass("todo-list-button")
            .appendTo(newEntry);

        $(".new-entry-input").val("");

        $(".entries").append(newEntry);
    });
});