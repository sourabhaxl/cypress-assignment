describe('Upload files',()=>{

   
    it('Uploads a pdf file from fixture folder',()=>{

        cy.visit('https://demo.automationtesting.in/FileUpload.html')
        .wait(2000)

        //Uploading file using attachFile function from fixtures folder
        cy.get('#input-4').attachFile('test.pdf').wait(3000)
        cy.get('.fileinput-upload').click({force:true})

        //Not able upload file due to issue in Site, the upload button does not work

    
})

    it('Verifies that the generate file button is disabled if user has not entered any text yet',()=>{
       
        cy.visit('https://demo.automationtesting.in/FileDownload.html')
        cy.get('#createTxt').should('be.disabled')
        cy.get('#createPdf').should('be.disabled')

    })

    it('Downloads the text file and verifies the content of downloaded file', ()=>{

        cy.visit('https://demo.automationtesting.in/FileDownload.html')
        cy.get('#textbox').type('Testfile').wait(3000)
        cy.get('#createTxt').should('be.enabled')
        cy.get('#createTxt').click()
        cy.get('#link-to-download').click()

        //Asserting that the file is downloaded using readFile function

        cy.readFile('cypress/downloads/info.txt')

        //Verifying the contents inside the file using readFile function

        cy.readFile('cypress/downloads/info.txt').should('contain', 'Testfile')


})

    it('Downloads the pdf file', ()=>{

        cy.visit('https://demo.automationtesting.in/FileDownload.html')
        cy.get('#pdfbox').type('test')

        //Assertion to verify that download button is enabled after entering the text
        cy.get('#createPdf').should('be.enabled')
        cy.get('#createPdf').click()

        cy.get('#pdf-link-to-download').click()

        //Asserting that the file is downloaded
        cy.readFile('cypress/downloads/info.pdf')

        //Asserting the file text
        cy.readFile('cypress/downloads/info.pdf').should('contain', 'test')

})



})