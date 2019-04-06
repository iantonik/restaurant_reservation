
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

var reservation = [
    {
        name: "Jenny",
        phone: "867-5309",
        email: "tommy@tutone.org"
    }
];

var newReservation = {
    name: $("#name").val().trim(),
    phone: $("#phone").val().trim(),
    email: $("#email").val().trim(),
    
}
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

app.post("/api/reservations",function(req, res){
    var reservation= req.body;
    
    reservation.routeName = reservation.name.replace(/\s+/g, "").toLowerCase();

    reservations.push(reservation);
    res.json(reservation);
});