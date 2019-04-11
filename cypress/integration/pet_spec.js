describe('Add a pet', () => {
  it('should add the pet correctly', () => {
    const url = 'https://petstore.swagger.io/v2/pet'
    const body = {
      "id": 1,
      "category": {
        "id": 1,
        "name": "testDoggie"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 9999,
          "name": "string"
        }
      ],
      "status": "available"
    }
    cy.request('POST', url, body)
    .then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
    })
  });
  it('should update the pet correctly', () => {
    const url = 'https://petstore.swagger.io/v2/pet'
    const body = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "testDoggie"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 9999,
          "name": "string"
        }
      ],
      "status": "available"
    }
    cy.request('PUT', url, body)
    .then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
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
      console.log(response);
    })
  });
  it('should find the pet by id correctly', () => {
    const id = 1;
    var url = 'https://petstore.swagger.io/v2/pet/'
    var url = url.concat(id);
    cy.request('GET', url)
    .then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
    })
  });
  it('should update the pet by id correctly', () => {
    const id = 1
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    const form = true;
    // const options = {
    //   body : {
    //     "name": "doggie",
    //     "status": "available"
    //   }
    // }
    // const body = {
    //   "name": "doggie",
    //   "status": "available"
    // }
    cy.log(path);
    // cy.request('POST', url, {name: "Doggie", status: "available"}, form)
    // .then((response) => {
    //   expect(response.status).to.eq(200);
    //   console.log(response);
    // })
    cy.request({
      method: 'POST',
      url: path,
      form: true,
      body: {name: "Doggie", status: "available"}

    })
    .then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
    })
  });
  it('should delete the pet by id correctly', () => {
    const id = 1
    var path = 'https://petstore.swagger.io/v2/pet/';
    var path = path.concat(id);
    cy.request({
      method: 'DELETE',
      url: path
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      console.log(response);
    })
  });
});