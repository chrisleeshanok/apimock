var express = require('express');
var nconf = require('nconf');
var router = express.Router();

//Mongoose Schema
var Mock = require('../models/mock');

router.route('/mocks')

.get(function(req, res, next) {
    Mock.find({}, function(err, mocks) {
        if (err) {
            res.status(500).json({
                "code": 500,
                "status": "Unable to fetch Mocks",
                "message": "There was an error fetching Mocks from the database"
            });
        } else {
            res.render('mocks', {
                "mocks": mocks,
                "context_root": nconf.get('gallery_api').CONTEXT_ROOT
            });
        }
    });
})

.post(function(req, res, next) {
    next(new Error('Not implemented'));
})
.put(function(req, res, next) {
    next(new Error('Not implemented'));
})
.delete(function(req, res, next) {
    next(new Error('Not implemented'));
});

router.route('/mocks/create')
.get(function(req, res, next) {
    res.render('mocks_create', {
        "context_root": nconf.get('gallery_api').CONTEXT_ROOT
    });
});

router.route('/mocks/edit/:mockid')
.get(function(req, res, next) {
    Mock.findById(req.params.mockid, function(err, mock) {
        if (err) {
            res.status(404).json({
                "code": 404,
                "status": 'Not Found',
                "message": "No mock data found by this id"
            });
        } else {
            res.render('mocks_edit', {
                "mock": JSON.stringify(mock),
                "context_root": nconf.get('gallery_api').CONTEXT_ROOT
            });
        }
    });
})

module.exports = router;
