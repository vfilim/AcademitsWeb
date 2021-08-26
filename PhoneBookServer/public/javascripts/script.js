var vm = new Vue({
    el: "#app",

    data: {
        items: [],

        firstName: "",
        lastName: "",
        phoneNumber: "",
        searchString: "",

        isFirstNameCorrect: true,
        isLastNameCorrect: true,
        isPhoneNumberCorrect: true
    },

    created: function () {
        this.findItems();
    },

    methods: {
        addEntry: function () {
            this.isFirstNameCorrect = true;
            this.isLastNameCorrect = true;
            this.isPhoneNumberCorrect = true;

            var isEntryCorrect = true;

            if (this.firstName.trim() === "") {
                this.isFirstNameCorrect = false;
                isEntryCorrect = false;
            }

            if (this.lastName.trim() === "") {
                this.isLastNameCorrect = false;
                isEntryCorrect = false;
            }

            if (this.phoneNumber.trim() === "") {
                this.isPhoneNumberCorrect = false;
                isEntryCorrect = false;
            }

            if (!isEntryCorrect) {
                return;
            }

            var self = this;

            $.post({
                url: "/api/addContact",
                contentType: "application/json",
                data: JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber
                })
            }, function () {
                self.findItems();
            });

            this.firstName = "";
            this.lastName = "";
            this.phoneNumber = "";
        },

        deleteEntry: function (item) {
            this.items = this.items.filter(function (x) {
                return x.id !== item.id;
            });

            $.post({
                url: "/api/deleteContact",
                contentType: "application/json",
                data: JSON.stringify(item)
            });

            this.recalculateNumbers();
        },

        findItems: function () {
            var self = this;

            self.items = [];

            var term = "searchString=" + self.searchString;

            $.get('/api/findItems?' + term, function (items) {
                items.forEach(function (x) {
                    self.items.push(x);
                });

                self.recalculateNumbers();
            });
        },

        recalculateNumbers: function () {
            this.items.forEach(function (item, index) {
                item.number = index + 1;
            });
        }
    }
});