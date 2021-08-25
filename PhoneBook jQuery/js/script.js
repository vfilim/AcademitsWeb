$(function () {
    var rowsCount = 0;

    $(".add-entry-button").click(function () {
        var firstNameInput = $(".first-name-input");
        var lastNameInput = $(".last-name-input");
        var phoneNumberInput = $(".phone-number-input");

        firstNameInput.removeClass("is-invalid");
        lastNameInput.removeClass("is-invalid");
        phoneNumberInput.removeClass("is-invalid");

        $(".alerts-block").remove();
        var validationMessage = $("<div class=\"alerts-block\"></div>");

        if (firstNameInput.val() === "") {
            firstNameInput.addClass("is-invalid");
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the name</div>"));
        }

        if (lastNameInput.val() === "") {
            lastNameInput.addClass("is-invalid");
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the last name</div>"));
        }

        if (phoneNumberInput.val() === "") {
            phoneNumberInput.addClass("is-invalid");
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the number</div>"));
        }

        if (validationMessage.text() !== "") {
            $(".container").append(validationMessage);

            return;
        }

        var newRow = $("<tr></tr>");

        newRow.append($("<th></th>").attr("scope", "row").text(rowsCount + 1));
        newRow.append($("<td></td>").text(firstNameInput.val()));
        newRow.append($("<td></td>").text(lastNameInput.val()));
        newRow.append($("<td></td>").text(phoneNumberInput.val()));

        rowsCount++;

        var deleteButton = $("<button class=\"btn btn-sm p-0\" title=\"Delete\">X</button>");

        deleteButton.click(function () {
            newRow.remove();
            rowsCount--;

            recalculateRowNumbers();
        });

        newRow.append($("<td></td>").append(deleteButton));

        clearInputs();

        $(".phone-book-table tbody").append(newRow);

        function clearInputs() {
            firstNameInput.val("");
            lastNameInput.val("");
            phoneNumberInput.val("");
        }
    });

    function recalculateRowNumbers() {
        $(".phone-book-table tbody th:first-child").each(function (i) {
            $(this).text(i + 1);
        });
    }
});