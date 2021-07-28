$(function () {
    $(".add-entry-button").click(function () {
        $(".new-entry-input").val($.trim($(".new-entry-input").val()))

        if ($(".new-entry-input").val() === "") {
            alert("You can't add an empty entry");

            return;
        }

        var newEntry = $("<li></li>")
            .text($(".new-entry-input").val())
            .addClass("entry");

        var editEntryButton = $("<button>Edit</button>")
            .addClass("todo-list-button")
            .click(function () {
                newEntry.children().detach();

                var editEntryInput = $("<input>").val(newEntry.text());

                var oldText = newEntry.text();

                newEntry.html("");
                editEntryInput.appendTo(newEntry);

                $("<button>Save</button>").appendTo(newEntry)
                    .addClass("todo-list-button")
                    .click(function () {
                        editEntryInput.val($.trim(editEntryInput.val()));

                        if (editEntryInput.val() === "") {
                            alert("The edit can't be empty");

                            return;
                        }

                        newEntry.append(newEntry.children(1).val());
                        newEntry.children().detach();

                        newEntry.append(editEntryButton);
                        newEntry.append(deleteButton);
                    });

                $("<button>Cancel</button>").appendTo(newEntry)
                    .addClass("todo-list-button")
                    .click(function () {
                        newEntry.text(oldText);
                        newEntry.children().detach();

                        newEntry.append(editEntryButton);
                        newEntry.append(deleteButton);
                    });
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