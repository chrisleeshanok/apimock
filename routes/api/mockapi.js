var express = require('express');
var router = express.Router();

//Mongoose Schema
var Mock = require('../../models/mock');

router.route('/mockapi/mock/:mockid')

.all(function(req, res, next) {

    Mock.findById(req.params.mockid, function(err, mock) {

        if (err) {
            res.status(404).json({
                "code": 404,
                "status": 'Not Found',
                "message": "No mock data found by this id"
            });
        }

        var responseCode = mock.response.code;

        if (!responseCode) {
            responseCode = 200; //Fallback
        }

        res.status(responseCode).json(mock.response.data);
    });
});

router.route('/mockapi/mock')
.all(function(req, res, next) {
    res.status(404).json({
        "code": 404,
        "status": 'No Mock ID given',
        "message": "A valid Mock ID was not supplied as a url parameter"
    });
});

module.exports = router;
