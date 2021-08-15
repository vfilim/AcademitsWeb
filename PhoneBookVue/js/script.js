var vm = new Vue({
    el: "#app",

    data: {
        newId: 1,
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

            this.items.push({
                id: this.newId,
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            });

            this.newId++;
            this.firstName = "";
            this.lastName = "";
            this.phoneNumber = "";
        },

        deleteEntry: function (item) {
            this.items = this.items.filter(function (x) {
                return x.id !== item.id;
            });

            this.recalculateIds();
        },

        recalculateIds: function () {
            this.newId = this.items.length + 1;

            this.items.forEach(function (item, index) {
                item.id = index + 1;
            });
        }
    }
});