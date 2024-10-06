import React from 'react'
import Home from './index'

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />)
    cy.get('div').contains('This is the message from the server')
  })
})
