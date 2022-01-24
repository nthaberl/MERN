const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//constructing classes
class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.companyName = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            county: faker.address.county()
        }
    }
}

//-----ROUTES
//getting new user
app.get("/api/users/new", (req, res) => {
    const randomUser = new User();
    console.log(randomUser);
    res.json({ data: randomUser });
})


//getting new company info
app.get("/api/companies/new", (req, res) => {
    const randomCompany = new Company();
    res.json({data: randomCompany})
})

//getting new company AND new user
app.get("/api/user/company", (req, res) => {
    const newUser = new User();
    const newComp = new Company();
    res.json({companyData: newComp, userDate: newUser})
})

app.listen(port, () => console.log(`Listening on port: ${port}`));