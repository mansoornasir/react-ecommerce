describe('empty spec', () => {
  let cred;
  before(() => {
    cy.visit('http://localhost:3000/')
    cy.fixture('credentials').then((data => {
      cred = data
    }));
  })
  it("Verify if user is able to navigate to Home", () => {
    cy.get('[href="/home"]').click();
    cy.get(':nth-child(3) > div').should("contain.text", "Home")
  })
  it("Verify if About page is redirected to Error", () => {
    cy.get('[href="/about"]').click();
    cy.get(':nth-child(3) > div').should("contain.text", "Error")
  })
  it("Verify if user is not able to see products without login", () => {
    cy.get('[href="/products"]').click();
    cy.contains("You need to login first.")
  })
  it("Verify if user is able to login with valid credentials", () => {
    cy.get('[href="/login"]').click();
    cy.get('#email').type(cred.email)
    cy.get('#password').type(cred.password)
    cy.get('.btn').click();
    cy.contains(/successfully logged in/i)
  })

  it("Verify if list contains Java", () => {
    cy.get('[href="/home"]').click();
    cy.get("li").should("have.length", 5)
    cy.get("li").last().should("have.class", "yellow")
    cy.get("li").contains("Javascript").should("have.css", "color", "rgb(0, 0, 255)")
  })

  it.only("API Testing", () => {
    // cy.request('https://api-try-n-save.herokuapp.com/').as('c')
    // cy.get('@c').should((response) => {
    //   expect(response.status).to.eq(200)
    //   expect(response).to.have.property('headers')
    //   expect(response.body).to.contain("Testing...")

    // cy.request('POST', 'https://api-try-n-save.herokuapp.com/api/user/register', {
    //   name: 'Mansoor',
    //   email: 'nasir7@testing.com',
    //   password: 'mans00ri7',
    //   address: 'Peshawar',
    // }).then(res => {
    //   console.log(res.body)
    // })

    cy.request('POST', 'https://api-try-n-save.herokuapp.com/api/user/login', {
      email: 'mansoor@testing.com',
      password: 'mans00ri7',
    }).then(res => {
      expect(res.headers.token).to.not.equal('')
    })

    cy.request('POST', 'https://api-try-n-save.herokuapp.com/api/user/login', {
      email: 'mansoor@testing.com',
      password: 'mans00ri7',
    }).then(res => {
      const token = res.headers.token;

      cy.request({
        method: 'GET',
        url: 'https://api-try-n-save.herokuapp.com/api/products',
        headers: {
          'token': token
        }
      }).then(response => {
        const products = response.body;
        expect(products.length).to.not.eq(0);

      })

    })
  })

})

it("Controls", () => {
  cy.get('[href="/home"]').click();
  cy.get('#checkbox').check().should('be.checked')
  cy.get('#checkbox').uncheck().should('not.be.checked')
  // cy.get('input[type="checkbox"]').check(['Java','Python'])
  cy.get('#dropdown').select('Item 5').should('have.value', '5')
})


/*
Some commands
  cy.url()
      .should('include', '/new')
  cy.get('#txt').dblclick()
  cy.log()
  cy.get('li').each(() => {...})
  cy.go('back')
  cy.go('forward')
  cy.get('.h').parent()
  cy.get('#txt').should('be.visible').and('be.enabled')
  cy.wait(1000)
  cy.title()
  cy.reload()
  cy.get('.toc chapters').find('li').should('have.length',5)
  .should("have.class", "yellow").and()
  cy.get(' #txt-fld').should('have.value', 'Cypress')
  cy.get('#txt-fld'').should('contain', 'Cypress')
  cy.get('#txt-fld'').should('be.visible')
  cy.get('#txt-fld'').should('not.exist');
  cy.get('#txt-fld'').should('have.css', 'display', 'block');
  cy.get('h1#headingText').find('span').should('have.text','Sign in')

  cy.visit('https://accounts.google.com')
      .then(() => {
         return cy.get('h1#heading');
      })


*/