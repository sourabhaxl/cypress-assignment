//Not able to implement

describe('Resizes the given window',()=>{

it('Resize the window', ()=>{

cy.visit('https://demo.automationtesting.in/Resizable.html') 


cy.get('#resizable').trigger('resize', '100', '100')



})

})