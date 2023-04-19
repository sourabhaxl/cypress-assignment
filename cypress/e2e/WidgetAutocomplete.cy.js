
describe('Verify the widget autocomplete functionality', ()=>{

beforeEach(()=>{

    cy.visit('https://demo.automationtesting.in/AutoComplete.html')
}

)

it('Verify that autocomplete suggestions are visible', ()=>{
    cy.get('#searchbox').click().type('ind')
    cy.get('ui-menu-item').contains('India').click()

})

it('Verify that user is able to select multiple values', ()=>{
    cy.get('#searchbox').click().type('ind')
    cy.get('ui-menu-item').contains('India').click()
    cy.get('#searchbox').click().type('ita')
    cy.get('ui-menu-item').contains('Italy').click()

})

it('Verify that the value is not present in dropdown if already selected', ()=>{
    cy.get('#searchbox').click().type('ind')
    cy.get('ui-menu-item').should('not.have.value', 'India')
    cy.get('#searchbox').click().type('ita')
    cy.get('ui-menu-item').should('not.have.value', 'Italy')
    

})

it('Verify that user is able to remove the values from autocomplete field', ()=>{
    
    

})

})