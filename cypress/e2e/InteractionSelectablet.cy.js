
describe('Click on each list item',()=>{

    it('clicks every button', () => {
        cy.visit('https://demo.automationtesting.in/Selectable.html')
        
        cy.get('#Default')
       
        
        // cy.get('.deaultFunc > :nth-child(1) > b').click().wait(3000)
        // cy.get('.deaultFunc > :nth-child(2) > b').click()
        
        cy.get('ul>li').each(($el, index, $list)=>{

          cy.wrap($el).click()
        })
          
          })
        }) 
      


