import 'cypress-iframe';
describe('Verify that video is playing', ()=>{


it('Verify that youtube video is playing',()=>{
    cy.visit('https://demo.automationtesting.in/Youtube.html')
    //cy.get('body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
   cy.frameLoaded('.col-xs-9 > iframe')
   cy.iframe('.col-xs-9 > iframe').click()
  //Not able to assert if video is playing or paused
   
})

it('Verify that vimeo video is playing',()=>{


   cy.visit('https://demo.automationtesting.in/Vimeo.html')
   cy.frameLoaded('#foo')
   cy.iframe('#foo').click()

//Not able to assert if video is playing or paused
})

})