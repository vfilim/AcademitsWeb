var vm = new Vue({
    el: "#app",

    data: {
        items: [],

        firstName: "",
        lastName: "",
        phoneNumber: "",

        isFirstNameCorrect: true,
        isLastNameCorrect: true,
        isPhoneNumberCorrect: true
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

            $.post({
                url: "/api/addContact",
                contentType: "application/json",
                data: JSON.stringify({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phoneNumber
                })
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
        },

        findItems: function () {
            var self = this;

            self.items = [];

            var firstNameTerm = "firstName=" + self.firstName;
            var lastNameTerm = "&lastName=" + self.lastName;
            var phoneNumberTerm = "&phoneNumber=" + self.phoneNumber;

            var term = firstNameTerm + lastNameTerm + phoneNumberTerm;

            $.get('/api/findItems?' + term, function (items) {
                items.forEach(function (x) {
                    self.items.push(x);
                });
            });
        }
    }
});