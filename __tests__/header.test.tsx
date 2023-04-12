import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../pages/header'


interface Props {
  src: string,
  alt: string
}

jest.mock('next/image', () => {
  return ({ src, alt }: Props) => {
    return <img src={src} alt={alt} />;
  };
});

describe('Header component', () => {
  it('should render logo and priority elements', () => {
    
    const {container} = render(<Header />)
    const header = container.getElementsByClassName('header')[0]
    const Class = header.getAttribute('class')
      
      expect(Class).toBe("header")
    
  });
  
  it('checks if an <a> element with href="/" attribute is present <header> element.', () => {
    const {container} = render(<Header/>)
    expect(container.querySelector('header > a[href="/"]')).toBeTruthy()

      
  });

  it("renders an image", () => {
    const  { container } = render(<Header />);
    const img = container.querySelector('img')
    const alt = img?.getAttribute('alt')
    expect(alt).toBe('logo');

 });  
});




