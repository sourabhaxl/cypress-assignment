describe('Verify the drag and drop functionality',()=>{

    beforeEach(()=>{
    
    cy.visit('https://demo.automationtesting.in/Dynamic.html')
    
    })
    it('Drags and drop the first item',()=>{
    
        const dataTransfer=new DataTransfer()
    
    cy.get('#angular').trigger('dragstart', {dataTransfer})
    cy.get('#droparea').trigger('drop',{dataTransfer})

    cy.get('#mongo').trigger('dragstart', {dataTransfer})
    cy.get('#droparea').trigger('drop',{dataTransfer})
    
    cy.get('#node').trigger('dragstart', {dataTransfer})
    cy.get('#droparea').trigger('drop',{dataTransfer})
    })
})