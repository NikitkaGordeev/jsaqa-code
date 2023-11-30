describe("api tests", () => {
  it('create user1', () => {
    cy.request({
      method: 'POST',
      url: '/v2/user',
      body: {
        "id": 1,
        "username": "name1",
        "firstName": "Name1",
        "lastName": "Name1",
        "email": "name@test.test",
        "password": "1234",
        "phone": "8988888",
        "userStatus": 0
      }
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).to.eql({
        "code": 200,
        "type": "unknown",
        "message": "1"
      });
    });
  });

  it('update user1', () => {
    cy.request({
      method: 'PUT',
      url: '/v2/user/name1',
      body: {
        "id": 1,
        "username": "name1",
        "firstName": "Name2",
        "lastName": "Name2",
        "email": "name@test.test",
        "password": "1234",
        "phone": "8988888",
        "userStatus": 0
      }
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).to.eql({
        "code": 200,
        "type": "unknown",
        "message": "1"
      });
    });
  });

  it('delete user1', () => {
    cy.request({
      method: 'DELETE',
      url: '/v2/user/name1',
      body: {
        "id": 1,
        "username": "name1",
        "firstName": "Name2",
        "lastName": "Name2",
        "email": "name@test.test",
        "password": "1234",
        "phone": "8988888",
        "userStatus": 0
      }
    }).then((response) => {
      expect(response.status).be.eql(200);
    });
  });
});