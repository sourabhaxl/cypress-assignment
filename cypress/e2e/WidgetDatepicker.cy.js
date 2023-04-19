describe('Verify the date picker functionality', ()=>{

beforeEach(()=>{
cy.visit('https://demo.automationtesting.in/Datepicker.html')

})

it('Verrify that user is able to select the date from datepicker', ()=>{
    
    cy.get('#datepicker1').contains('8').click()
    

})

})