var vm = new Vue({
    el: "#app",

    data: {
        newEntry: "",
        items: [],
        id: 0
    },

    methods: {
        addEntry: function () {
            if (this.newEntry == "") {
                alert("Enter the entry");

                return;
            }

            this.items.push({text: this.newEntry, editText: this.newEntry, id: this.id, isEditing: false});
            this.id++;
            this.newEntry = "";
        },

        deleteEntry: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },

        editEntry: function (item) {
            item.isEditing = true;
        },

        cancelEdit: function (item) {
            item.isEditing = false;
            item.editText = item.text;
        },

        saveEdit: function (item) {
            item.isEditing = false;
            item.text = item.editText;
        }
    }
});
