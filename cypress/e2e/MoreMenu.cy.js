describe('Verify the dynamic data in More menu',()=>{

it('Validates that data is generated',()=>{

    cy.visit('https://demo.automationtesting.in/DynamicData.html')
   
    cy.get('#save').click({force:true})

    //Assertion to validate that the data is generated

    cy.get('#loading').should('be.visible')
    .should('contain', 'First Name')              //Assertion for first name
    .should('contain', 'Last Name')               //Assertion for last name
    cy.get('#loading > img').should('be.visible') //Assertion for image

})



})