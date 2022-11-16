module.exports = function (app, shopData) {

    // Handle our routes
    app.get('/', function (req, res) {
        res.render('index.ejs', shopData)
    });
    app.get('/about', function (req, res) {
        res.render('about.ejs', shopData);
    });

    app.get('/search', function (req, res) {
        res.render("search.ejs", shopData);
    });

    app.get('/search-result', function (req, res) {
        //searching in the database
        // res.send("You searched for: " + req.query.keyword);
        const q = req.query.keyword;
        // console.log(q);
        let sqlquery = `SELECT * FROM  books where name LIKE "%${q}%"`;
        console.log(sqlquery);
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect('./');
            }
            shopData.result = result;
            res.render('searchresult.ejs', shopData);
        });
    });

    // regester route
    app.get('/register', function (req, res) {
        res.render('register.ejs', shopData);
    });

    // list route
    app.get('/list', (req, res) => {
        let sqlquery = "SELECT * FROM books";
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect('./');
            }
            res.send(result);
        });
    });

    // registered route
    app.post('/registered', function (req, res) {
        // saving data in database
        res.send(' Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered!  We will send an email to you at ' + req.body.email);
    });


    // add book  route
    app.get('/addbook', function (req, res) {
        res.render("addbook.ejs", shopData);
    });

    // bookadded route
    app.post('/bookadded', function (req, res) {
        // saving data in database
        let sqlquery = "INSERT INTO books (name, price) VALUES (?,?)";
        // execute sql query
        let newrecord = [req.body.name, req.body.price];
        db.query(sqlquery, newrecord, (err, result) => {
            if (err) {
                return console.error(err.message);
            }
            else
                res.send(' This book is added to database, name: ' + req.body.name + ' price ' + req.body.price);
        });
    });

    app.get('/bargainbooks', (req, res) => {
        let sqlquery = "SELECT * FROM books WHERE price > 20";
        console.log(sqlquery);
        db.query(sqlquery, (err, result) => {
            if (err) {
                res.redirect('./');
            }
            shopData.result = result;
            res.render('bargainbooks.ejs', shopData);
        });
    });


    // end of module
};