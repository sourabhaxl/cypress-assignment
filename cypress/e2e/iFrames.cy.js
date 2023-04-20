import 'cypress-iframe';

describe('Handling iframes',()=>{

    beforeEach(()=>{

    cy.visit('https://demo.automationtesting.in/Frames.html')

    })

    it('Access the single iframe and pass text value to it',()=>{

       cy.getIframe('#singleframe').click()
       
       
       //cy.get("//iframe[@id='singleframe']").type("Passing data in iframe") 
            //The data is not visible in the application, 
            //might be a bug in the application
            cy.wait(5000)

    })

    it('Access the single iframe using iframe plugin',()=>{
        cy.frameLoaded('#singleframe')
        cy.iframe('#singleframe').click().type('Iframe text')

    })


    it('Interacts with the nested iframe',()=>{
            cy.get(':nth-child(2) > .analystic').click()
            cy.frameLoaded("iframe[src='MultipleFrames.html']")
            cy.frameLoaded('#singleframe')
            cy.iframe('#singleframe').click().type('Iframe text')


        })

})