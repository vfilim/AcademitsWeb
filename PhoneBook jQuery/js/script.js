$(function () {
    var rowsCount = 0;

    $(".add-entry-button").click(function () {
        var firstNameInput = $(".form-control").eq(0);
        var lastNameInput = $(".form-control").eq(1);
        var phoneNumberInput = $(".form-control").eq(2);

        firstNameInput.css({"border-color": ""});
        lastNameInput.css({"border-color": ""});
        phoneNumberInput.css({"border-color": ""});

        $(".alerts-block").remove();
        var validationMessage = $("<div class=\"alerts-block\"></div>");

        if (firstNameInput.val() === "") {
            firstNameInput.css({"border-color": "#dc3545"});
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the name<\div>"));
        }

        if (lastNameInput.val() === "") {
            lastNameInput.css({"border-color": "#dc3545"});
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the last name<\div>"));
        }

        if (phoneNumberInput.val() === "") {
            phoneNumberInput.css({"border-color": "#dc3545"});
            validationMessage.append($("<div class=\"alert alert-danger\" role=\"alert\">Enter the number<\div>"));
        }

        if (validationMessage.text() !== "") {
            $(".container").append(validationMessage);

            return;
        }

        var newRow = $("<tr></tr>");

        newRow.append($("<td></td>").addClass("col-1").text(++rowsCount));
        newRow.append($("<td></td>").addClass("col-3").text(firstNameInput.val()));
        newRow.append($("<td></td>").addClass("col-4").text(lastNameInput.val()));
        newRow.append($("<td></td>").addClass("col-3").text(phoneNumberInput.val()));

        var deleteButton = $("<button class=\"btn btn-sm\">x</button>");

        deleteButton.click(function () {
            newRow.remove();
            rowsCount--;

            recalculateRowNumbers();
        });

        newRow.append($("<td></td>").addClass("col-1").append(deleteButton));

        eraseInputs();

        $("tbody").append(newRow);

        function eraseInputs() {
            firstNameInput.val("");
            lastNameInput.val("");
            phoneNumberInput.val("");
        }
    });

    function recalculateRowNumbers() {
        var i = 0;

        while (i < rowsCount) {
            $(".phone-book-table td:first-child").eq(i).html(++i);
        }
    }
});