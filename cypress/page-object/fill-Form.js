export class fillForm{
    
    validDetails(){

        cy.get(':nth-child(1) > :nth-child(2) > .form-control').focus().type('ValidUserfirstname')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').focus().type('ValidUserLastname')
        cy.get('.col-md-8 > .form-control').type('HouseNumber 123, Delhi, India')
        cy.get('#eid > .form-control').type('test@gmail.com')
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type("1313333333")
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').check() //selecting male
        //cy.get(':nth-child(5) > .col-md-3').select('Male')
     
     
        //Website BUG --- The dropdown for language is not expanding
        //  cy.get('#msdd').click()
       // cy.get('.ui-autocomplete.ui-front.ui-menu.ui-widget.ui-widget-content.ui-corner-all').contains('English').click()
        cy.get('#Skills').select('Analytics')
        //cy.get('#countries').select('India')
        cy.get('.select2-selection').click()
        cy.get('.select2-search__field').type('India')
        cy.get('.select2-results__option').click()
        cy.get('#yearbox').select('1994')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('April')
        cy.get('#daybox').select('1')
        cy.get('#firstpassword').type('temp123')
        cy.get('#secondpassword').type('temp123')
        cy.get('#submitbtn').click()

    }


    invalidDetails(){

        cy.get(':nth-child(1) > :nth-child(2) > .form-control').focus().type('InvalidUserfirstname')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').focus().type('InvalidUserLastname')
        cy.get('.col-md-8 > .form-control').type('HouseNumber 123, Delhi, India')
        cy.get('#eid > .form-control').type('test')
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type("1313333333")
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').check()
       // cy.get(':nth-child(5) > .col-md-3').select('Male')
        cy.get('#msdd').select('English')
        cy.get('#Skills').select('Analytics')
        cy.get('#countries').select('India')
        cy.get('#yearbox').select('1994')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('April')
        cy.get('#daybox').select('1')
        cy.get('#firstpassword').type('temp123')
        cy.get('#secondpassword').type('temp123')
        cy.get('#submitbtn').click()

    }

    emptyForm(){

        cy.get('#submitbtn').click()

    }

}