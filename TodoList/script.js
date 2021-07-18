(function () {
    function ready() {
        var newEntryInput = document.querySelector(".new-entry-input");
        var newEntryButton = document.querySelector(".todo-list-button");
        var entries = document.querySelector(".entries");

        newEntryButton.addEventListener("click", function () {
            if (newEntryInput.value === '') {
                alert("You can't add an empty entry");

                return;
            }

            var newEntry = document.createElement("li");
            newEntry.className = "entry";

            var deleteEntryButton = document.createElement("button");
            deleteEntryButton.className = "todo-list-button"
            deleteEntryButton.textContent = "Delete";

            newEntry.textContent = newEntryInput.value;

            entries.appendChild(newEntry);

            deleteEntryButton.addEventListener("click", function () {
                entries.removeChild(newEntry);
            });

            var editEntryButton = document.createElement("button");
            editEntryButton.className = "todo-list-button";
            editEntryButton.textContent = "Edit";

            newEntry.appendChild(editEntryButton);
            newEntry.appendChild(deleteEntryButton);

            editEntryButton.addEventListener("click", function () {
                newEntry.removeChild(deleteEntryButton);
                newEntry.removeChild(editEntryButton);

                var editEntryInput = document.createElement("input");
                editEntryInput.value = newEntry.textContent;

                newEntry.textContent = '';

                newEntry.append(editEntryInput);

                var saveButton = document.createElement("button");
                saveButton.className = "todo-list-button";
                saveButton.textContent = "Save";

                saveButton.addEventListener("click", function () {
                    newEntry.removeChild(saveButton);
                    newEntry.removeChild(editEntryInput);

                    newEntry.textContent = editEntryInput.value;

                    newEntry.appendChild(editEntryButton);
                    newEntry.appendChild(deleteEntryButton);
                });

                newEntry.appendChild(saveButton);
            });

            newEntryInput.value = "";
        });
    }

    document.addEventListener("DOMContentLoaded", ready);
}());