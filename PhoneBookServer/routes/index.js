var express = require('express');
var router = express.Router();

var items = [];
var newId = 1;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Phone Book Server'});
});

router.post('/api/addContact', function (req, res) {
    var request = req.body;

    request.id = newId;
    newId++;

    items.push(request);

    res.send('Success');
});

router.get('/api/findItems', function (req, res) {
    var firstNameTerm = (req.query.firstName || '').toUpperCase();
    var lastNameTerm = (req.query.lastName || '').toUpperCase();
    var phoneNumberTerm = (req.query.phoneNumber || '').toUpperCase();

    res.send(items.filter(function (x) {
        return (firstNameTerm === '' || x.firstName.toUpperCase().indexOf(firstNameTerm) >= 0) &&
            (lastNameTerm === '' || x.lastName.toUpperCase().indexOf(lastNameTerm) >= 0) &&
            (phoneNumberTerm === '' || x.phoneNumber.toUpperCase().indexOf(phoneNumberTerm) >= 0);
    }));
});

router.post('/api/deleteContact', function (req, res) {
    items = items.filter(function (x) {
        return x.id != req.body.id;
    });
});

module.exports = router;
