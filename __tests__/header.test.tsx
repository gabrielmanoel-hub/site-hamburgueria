import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../pages/header'

describe('Header', () => {
    it('test header', () => {
      const {container} = render(<Header/>)
      // const imgs = container.querySelector('image')
      const ppp = container.hasAttribute('logo')
      const p = container.hasAttribute('priority')
      
      // expect(imgs)
      expect(ppp).toBeEmptyDOMElement()
      expect(p)
     
    });

  
})

