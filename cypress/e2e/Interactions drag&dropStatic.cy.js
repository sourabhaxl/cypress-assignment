describe('Verify the drag and drop functionality',()=>{

beforeEach(()=>{

cy.visit('https://demo.automationtesting.in/Static.html')

})
it('Drags and drop the first item',()=>{

    const dataTransfer=new DataTransfer()

cy.get('#angular').trigger('dragstart', {dataTransfer})

cy.get('#droparea').trigger('drop',{dataTransfer})

})

//Drag & Drop the 2nd item using cypress plugin
it('drag & drop the 2nd item using cypress drag and drop plugin',()=>{
    cy.get('#mongo').drag('#droparea')
})


it.only('drag & drop the all the three item using cypress drag and drop plugin',()=>{
    cy.get('#angular').drag('#droparea')
    cy.wait(5000)
    cy.get('#mongo').drag('#droparea')
    cy.wait(5000)
    cy.get('#node').drag('#droparea')
    cy.wait(5000)

})

})
