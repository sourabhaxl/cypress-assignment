describe("Verify that accordions expand and collapse on click action", ()=>{

beforeEach(()=>

cy.visit('https://demo.automationtesting.in/Accordion.html')

)

    it('Verify that only 4 accordions are present',()=>{

        cy.get(':nth-child(1) > .panel-heading > .panel-title').should('be.visible')
        cy.get(':nth-child(2) > .panel-heading > .panel-title').should('be.visible')
        cy.get(':nth-child(3) > .panel-heading > .panel-title').should('be.visible')
        cy.get(':nth-child(4) > .panel-heading > .panel-title').should('be.visible')
        

    })

    it('Verify that the first accordion is expanded by default', ()=>{
        
        //Asserting with the text
        cy.get('#collapse1 > .panel-body').should('contain.text', 'This Automation Testing API')
    })

    it('Collapse the first accordion', ()=>{

        cy.get(':nth-child(1) > .panel-heading > .panel-title').click()
        
    })


    it('Expands the second accordion',()=>{
        cy.get(':nth-child(2) > .panel-heading > .panel-title').click()
       

    })

    it('Collapse the second accordion',()=>{
        cy.get(':nth-child(2) > .panel-heading > .panel-title').click()
       

    })

    it('Expands the third accordion',()=>{
        cy.get(':nth-child(3) > .panel-heading > .panel-title').click()
       

    })

    it('Collapse the second accordion',()=>{
        cy.get(':nth-child(3) > .panel-heading > .panel-title').click()
       

    })

    it('Expands the fourth accordion',()=>{
        cy.get(':nth-child(4) > .panel-heading > .panel-title').click()
        
    })

    it('Collapse the second accordion',()=>{
        cy.get(':nth-child(4) > .panel-heading > .panel-title').click()
       

    })


})