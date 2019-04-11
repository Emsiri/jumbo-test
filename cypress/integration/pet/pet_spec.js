import faker from 'faker';
faker.locale = 'en_AU';
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

describe('test pets APIs', () => {
  // Setting up data for tests
  const id = new Date().getTime();

  Given('I add a new pet with the name {string}', (name) => {
    const url = 'https://petstore.swagger.io/v2/pet'
    const body = {
      "id": id,
      "category": {
        "id": id,
        "name": "string"
      },
      "name": name,
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": id,
          "name": "string"
        }
      ],
      "status": "available"
    }
    Then('I should see a new {string} in the response', (name) => {
      cy.request('POST', url, body)
      .then((response) => { 
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(id);
        expect(response.body.name).to.eq(name);
      })
    })
  });
  
  Given('I update the pet with the new name {string}', (updatedName) => {
    const url = 'https://petstore.swagger.io/v2/pet'
    const body = {
      "id": id,
      "category": {
        "id": id,
        "name": "string"
      },
      "name": updatedName,
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": id,
          "name": "string"
        }
      ],
      "status": "available"
    }
    Then('I should see the pet named {string} in the response', (updatedName) => {
      cy.request('PUT', url, body)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(id);
        expect(response.body.name).to.eq(updatedName);
      })
    })
  });
  Given('I search for pets with the {string} status', (status) => {
    var url = 'https://petstore.swagger.io/v2/pet/findByStatus?'
    const params = `status=${status}`;
    var url = url.concat(params);
    const body = {"status": status }
    then('I should see all the {string} pets', (status)=> {
      cy.request('GET', url, body)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
      })
    })
  });
  Given('I search for the pet with the id', () => {
    var url = 'https://petstore.swagger.io/v2/pet/'
    var url = url.concat(id);
    Then('I should see the correct pet with the name {string}', (updatedName)=> {
      cy.request('GET', url)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(id);
        expect(response.body.name).to.eq(updatedName);
      })
    })
  });
  Given('I update the pet via id', () => {
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    Then('I should get back a correct response', () => {
      cy.request({
        method: 'POST',
        url: path,
        form: true,
        body: {name: "Doggie", status: "pending"}
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
    })
  });
  Given('I delete the pet via id', () => {
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    Then('I should receive the correct response', () =>{
      cy.request({
        method: 'DELETE',
        url: path
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
    })
  });
});
