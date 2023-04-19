describe('Upload a pdf',()=>{

it.only('Uploads a pdf file from fixture folder',()=>{

    cy.visit('https://demo.automationtesting.in/FileUpload.html')
    .wait(3000)
    cy.get('#input-4').attachFile('test.pdf').wait(5000)
    cy.get('.fileinput-upload').click({force:true})

    
    
})

it('Downloads the text file', ()=>{

cy.visit('https://demo.automationtesting.in/FileDownload.html')
cy.get('#textbox').type('Testfile').wait(3000)
cy.get('#createTxt').should('be.enabled')




})

it('downloads the pdf file', ()=>{
    cy.visit('https://demo.automationtesting.in/FileDownload.html')
    cy.get('#pdfbox').type('test').wait(3000)
    //Assertion to verify that download button is enabled after entering the text
    cy.get('#createPdf').should('be.enabled')

})



})