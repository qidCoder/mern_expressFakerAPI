//dependency imports

const express = require("express");//this will basically bring in this whole express file into here
const cors = require("cors");
const faker = require("faker");

//variables
const port = 8000;
const app = express();

////////////////////////////////////////

//dependency implementations

app.use( cors() );//allows for our site to talk to other cross origin sites by handling the security issues
//ex: if we are on port 8000 and want to talk to port 3000
//ex: talking to some other website or API

app.use( express.json() );//allows our Express application to be able to read and output JSON

app.use( faker() );

////////////////////////////////////////

//create Faker classes

class User{
    constructor() {
        this.user_id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.random.alphaNumeric();
    }
}

class Company {
    constructor() {
        this.company_id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street = faker.address.streetAddress(),
            city = faker.address.city(),
            state = faker.address.state(),
            zipCode = faker.address.zipCode(),
            country = faker.address.country()
        }
    }
}

// //bring in the string of whatever the URL is - we are going to bring in the home route/index route
// app.get('/', (req, res) => [
//     //to respond with a json object, just give it any object body
//     res.json({msg: "this is a message sent back from a get request"})
// ])

// //adding in another route
// app.get('/name', (req,res) => {
//     res.json({name: "SHelley!!!"})
// })

// //adding in a POST request
// app.post('/create', (req, res) => {
//     console.log(req.body)
//     res.json({msg: `Thanks ${req.body.name}!`})//requires a response
// })

// app.listen( port, () => {
//     console.log(`Listening on port ${port}`)
// })


//notes
//faker documentation https://github.com/marak/Faker.js/