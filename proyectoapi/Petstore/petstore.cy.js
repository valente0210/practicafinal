describe('Pruebas API PetStore', () => {
  
  const baseUrl = 'https://petstore.swagger.io/v2';
  const petId = 12345;

  it('Añadir mascota a la tienda', () => {
    cy.request('POST', `${baseUrl}/pet`, {
      id: petId,
      name: 'Firulais',
      status: 'available'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq('Firulais');
      expect(response.body.status).to.eq('available');
    });
  });

  it('Consultar mascota por ID', () => {
    cy.request('GET', `${baseUrl}/pet/${petId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq('Firulais');
      expect(response.body.status).to.eq('available');
    });
  });

  it('Actualizar mascota a sold', () => {
    cy.request('PUT', `${baseUrl}/pet`, {
      id: petId,
      name: 'Firulais V2',
      status: 'sold'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Firulais V2');
      expect(response.body.status).to.eq('sold');
    });
  });

  it('Consultar mascota por estatus', () => {
    cy.request('GET', `${baseUrl}/pet/findByStatus?status=sold`).then((response) => {
      expect(response.status).to.eq(200);
      const ids = response.body.map(pet => pet.id);
      expect(ids).to.include(petId);
    });
  });

});