import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../pages/header'

describe('Header', () => {
  it('test header', () => {
    const {container} = render(<Header />)
    const a = container.querySelector('a')
    const atributo = container.querySelector("[href='/']")
     expect(a).toBeInTheDocument()
     expect(atributo).toBeInTheDocument()

  })
})