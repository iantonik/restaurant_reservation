
var express = require("express");
var path = require("path");

var app = express();
var PORT = (process.env.PORT || 5000)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

var reservation1 = [
    {
        name: "Jenny",
        phone: "867-5309",
        email: "tommy@tutone.org"
    }
];


//routes

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/reservation", function(req, res){
    res.sendFile(path.join(__dirname, "reservation.html"))
});

app.get("/viewtables", function(req, res){
    res.sendFile(path.join(__dirname, "viewtables.html"))
});



app.get("/api/reservations",function(req, res){
    return res.json(reservation1);
});

app.post("/api/reservations",function(req, res){
    var rsvp= req.body;
    
    rsvp.routeName = rsvp.name.replace(/\s+/g, "").toLowerCase();

    reservation1.push(rsvp);
    res.json(rsvp);
});
