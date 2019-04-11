import faker from 'faker';
faker.locale = 'en_AU';

describe('test pets APIs', () => {
  // Setting up data for tests
  const id = new Date().getTime();
  const name = faker.name.firstName();
  const updatedName = faker.name.firstName(); 

  it('should add the pet correctly', () => {
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
    cy.log(id);
    cy.request('POST', url, body)
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(id);
      expect(response.body.name).to.eq(name);
    })
  });
  it('should update the pet correctly', () => {
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
    cy.request('PUT', url, body)
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  });
  it('should find the pet by status correctly', () => {
    var url = 'https://petstore.swagger.io/v2/pet/findByStatus?'
    const status = "status=available";
    var url = url.concat(status);
    const body = {"status": "available" }
    cy.request('GET', url, body)
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  });
  it('should find the pet by id correctly', () => {
    var url = 'https://petstore.swagger.io/v2/pet/'
    var url = url.concat(id);
    cy.request('GET', url)
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  });
  it('should update the pet by id correctly', () => {
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    cy.request({
      method: 'POST',
      url: path,
      form: true,
      body: {name: "Doggie", status: "available"}
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  });
  it('should delete the pet by id correctly', () => {
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    cy.request({
      method: 'DELETE',
      url: path
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    })
  });
});