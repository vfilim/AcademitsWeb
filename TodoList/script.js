(function () {
    function ready() {
        var newEntryInput = document.querySelector(".new-entry-input");
        var newEntryButton = document.querySelector(".add-entry-button");

        newEntryButton.addEventListener("click", function (e) {
            var newEntry = document.createElement("p");
            newEntry.className = "new-entry"

            var deleteEntryButton = document.createElement("button");
            deleteEntryButton.className = "delete-entry-button"
            deleteEntryButton.textContent = "Delete";

            newEntry.textContent = newEntryInput.value;
            document.body.appendChild(newEntry);

            newEntry.appendChild(deleteEntryButton);

            deleteEntryButton.addEventListener("click", function (e) {
                document.body.removeChild(newEntry);
            });

            newEntryInput.value = "";
        });
    };

    document.addEventListener("DOMContentLoaded", ready);
}());