var vm = new Vue({
    el: '#app',

    data: {
        items: [],

        firstName: '',
        lastName: '',
        phoneNumber: '',
        searchString: '',

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

            if (this.firstName.trim() === '') {
                this.isFirstNameCorrect = false;
                isEntryCorrect = false;
            }

            if (this.lastName.trim() === '') {
                this.isLastNameCorrect = false;
                isEntryCorrect = false;
            }

            if (this.phoneNumber.trim() === '') {
                this.isPhoneNumberCorrect = false;
                isEntryCorrect = false;
            }

            if (!isEntryCorrect) {
                return;
            }

            var self = this;

            post('/api/addContact', {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            }).done(function () {
                self.cancelSearch();
            });

            this.firstName = '';
            this.lastName = '';
            this.phoneNumber = '';
        },

        deleteEntry: function (item) {
            this.items = this.items.filter(function (x) {
                return x.id !== item.id;
            });

            post('/api/deleteContact', item);
        },

        findItems: function () {
            var self = this;

            get('/api/findItems', self.searchString).done(function (items) {
                self.items = items;
            });
        },

        cancelSearch: function () {
            this.searchString = '';

            this.findItems();
        }
    }
});

function post(url, data) {
    return $.post({
        url: url,
        data: JSON.stringify(data),
        contentType: 'application/json'
    });
};

function get(url, term) {
    return $.get({
        url: url,
        data: {term: term}
    });
}