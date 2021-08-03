(function () {
    function ready() {
        var newEntryInput = document.querySelector(".new-entry-input");
        var newEntryButton = document.querySelector(".todo-list-button");
        var entries = document.querySelector(".entries");

        newEntryButton.addEventListener("click", function () {
            var newEntryString = newEntryInput.value.trim();

            if (newEntryString === '') {
                alert("You can't add an empty entry");

                return;
            }

            var newEntry = document.createElement("li");
            newEntry.className = "entry";

            var deleteEntryButton = document.createElement("button");
            deleteEntryButton.className = "todo-list-button";
            deleteEntryButton.textContent = "Delete";

            newEntry.textContent = newEntryString;

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

                var oldText = newEntry.textContent;
                newEntry.textContent = '';

                newEntry.append(editEntryInput);

                var saveButton = document.createElement("button");
                saveButton.className = "todo-list-button";
                saveButton.textContent = "Save";

                saveButton.addEventListener("click", function () {
                    var editEntryInputString = editEntryInput.value.trim();

                    if (editEntryInputString === "") {
                        alert("The edit can't be empty");

                        return;
                    }

                    newEntry.removeChild(saveButton);
                    newEntry.removeChild(cancelButton);
                    newEntry.removeChild(editEntryInput);

                    newEntry.textContent = editEntryInputString;

                    newEntry.appendChild(editEntryButton);
                    newEntry.appendChild(deleteEntryButton);
                });

                var cancelButton = document.createElement("button");
                cancelButton.className = "todo-list-button";
                cancelButton.textContent = "Cancel";

                cancelButton.addEventListener("click", function () {
                    newEntry.removeChild(saveButton);
                    newEntry.removeChild(cancelButton);
                    newEntry.removeChild(editEntryInput);

                    newEntry.textContent = oldText;

                    newEntry.appendChild(editEntryButton);
                    newEntry.appendChild(deleteEntryButton);
                });

                newEntry.appendChild(saveButton);
                newEntry.appendChild(cancelButton);
            });

            newEntryInput.value = "";
        });
    }

    document.addEventListener("DOMContentLoaded", ready);
}());