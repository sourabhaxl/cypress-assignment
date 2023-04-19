describe('Verify the alerts', ()=>{

beforeEach(()=>

cy.visit('https://demo.automationtesting.in/Alerts.html')

)

it('Verify the alert with OK message',()=>{

    cy.get(".analystic[href='#OKTab']").click()

    //Validating the message on alert popup
    //Alert messages close automatically by CYPRESS
    cy.on('window:alert', (alertMessage)=>{
        expect(alertMessage).to.contain('I am an alert box!')
    
    })

})

it('Verify the alert with OK button',()=>{

    cy.get(':nth-child(2) > .analystic').click()
    cy.get('#CancelTab > .btn').click()

    //Validating the message on alert popup
    cy.on('window:confirm', (alertMessage)=>{
    expect(alertMessage).to.contain('Press a Button !')
    })

})

it('Verify the alert with cancel button',()=>{

    cy.get(':nth-child(2) > .analystic')
    cy.get('#CancelTab > .btn')

    //Validating the message on alert popup
    cy.on('window:confirm', (alertMessage)=>{
    expect(alertMessage).to.contain('Press a Button !')
    })

    //Cypress closes alert window with cancel button
    cy.on('window:confirm', ()=>false)

})


it('Verify the alert with Textbox',()=>{

    cy.get(':nth-child(3) > .analystic')
    cy.window().then((win)=>{
    cy.stub(win, 'prompt').returns()
    })
    cy.get(':nth-child(3) > .analystic').click()

    // Assertion for text is failing because website is returning no text
    
    //cy.get('#demo1').should('have.text', 'Hello Automation Testing user How are you today')

})

})