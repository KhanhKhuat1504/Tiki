var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/markers', function(req, res, next) {
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select * from MARKERS"; //dòng lệnh lấy thông tin
        connection.query(query, function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            console.log(rows);
            //thông tin lấy từ database được lưu trong biến "rows"
            res.send(rows); //send response

        });
    });
});

router.post('/login', function(req, res, next) {
    console.log(req.body);
    var info_sent=req.body;
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "select * from USERS where email=?"; //dòng lệnh lấy thông tin //
        connection.query(query, [info_sent.email], function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            console.log(rows);
            //check if rows is empty of not
            if (rows.length > 0) {
                //compare password
                if (info_sent.password===rows[0].password) {
                    var data_sent={
                        fullname: rows[0].fullname,
                        email: rows[0].email,
                        redirectPath: '/index.html',
                        username: rows[0].username,
                        user_id: rows[0].id
                    };

                    //set session
                    req.session.user=rows[0].id;
                    console.log(data_sent);
                    res.send(data_sent);
                } else {
                    //error unauthorized access
                    res.sendStatus(401);
                }
            } else {
                //error unauthorized access
                res.sendStatus(401);
            }
        });
    });
});

router.post('/sign_up', function(req, res, next) {
    console.log(req.body);
    var info_sent=req.body;
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO USERS VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; //dòng lệnh lấy thông tin //
        connection.query(query, [req.body.email, req.body.username, req.body.password, req.body.fullname, req.body.first_name, req.body.last_name, req.body.dob, req.body.address, req.body.phone_number], function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send("Successfully sign up");
        });
    });
});

router.post('/logout', function(req, res, next) {

    //delete session
    delete req.session.user;
    res.send('Logout successfully');

});

router.get('/get_profile_user', function(req, res, next) {
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = ""; //dòng lệnh lấy thông tin
        connection.query(query, function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            console.log('received');
            console.log(rows);
            //thông tin lấy từ database được lưu trong biến "rows"
            res.send(rows); //send response

        });
    });
});

router.post('/update_user', function(req, res, next) {
    console.log(req.body);
    var info_sent=req.body;
    req.pool.getConnection( function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE individual SET first_name=?, last_name=?, DOB=?, address=?, experience=?, hobbies=? WHERE indi_id=?"; //dòng lệnh lấy thông tin //
        connection.query(query, [req.body.first_name, req.body.last_name, req.body.DOB, req.body.address, req.body.experience, req.body.hobbies, req.session.user.indi_id], function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                console.log('fail');
                return;
            }
            else {
                res.send('updated successfully');
            }
            console.log('updated successfully');
        });
    });
});

module.exports = router;
