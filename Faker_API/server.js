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

// app.use( faker() );

////////////////////////////////////////

//create Faker classes

class User{
    constructor() {
        this.user_id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.company_id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

//////////////////////////////////
// Create an api route "/api/users/new" that returns a new user
app.get('/api/users/new', (req,res) => {
    //make an instance of the class
    const new_user = new User();
    res.json({msg: new_user})
});

// Create an api route "/api/companies/new" that returns a new company
app.get('/api/companies/new', (req,res) => {
    //create new company class instance
    const new_company = new Company();
    res.json({msg: new_company});
});

// Create an api route "/api/user/company" that returns both a new user and a new company

//listening port in the console log
app.listen(port, () =>{
    console.log(`listening on port ${port}`)
})

//notes
//faker documentation https://github.com/marak/Faker.js/