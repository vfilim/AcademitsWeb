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

    var isEntryCorrect = true;

    if (request.firstName === undefined || request.firstName.trim() === '') {
        isEntryCorrect = false;
    }

    if (request.lastName === undefined || request.lastName.trim() === '') {
        isEntryCorrect = false;
    }

    if (request.phoneNumber === undefined || request.phoneNumber.trim() === '') {
        isEntryCorrect = false;
    }

    if (!isEntryCorrect) {
        res.send({'success': false, 'message': 'enter all fields'});

        return;
    }

    request.id = newId;
    newId++;

    items.push(request);

    res.send({'success': true});
});

router.get('/api/findItems', function (req, res) {
    var searchString = (req.query.term || '').toUpperCase();

    res.send(items.filter(function (x) {
        return (searchString === '' ||
            x.firstName.toUpperCase().indexOf(searchString) >= 0 ||
            x.lastName.toUpperCase().indexOf(searchString) >= 0 ||
            x.phoneNumber.toUpperCase().indexOf(searchString) >= 0);
    }));
});

router.post('/api/deleteContact', function (req, res) {
    items = items.filter(function (x) {
        return x.id !== req.body.id;
    });

    res.send({'success': true});
});

module.exports = router;
