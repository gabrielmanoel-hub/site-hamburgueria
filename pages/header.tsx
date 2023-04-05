import style from '@/styles/header.module.scss'
import Image from 'next/image'
import logo from '../assets/logo.svg'
export default function Header() {
    return (
        <>
            <header className={style.header}>
                <a href='/'>
                   {logo && ( <Image 
                        src={logo}
                        alt="logo" 
                        priority
                        />)}
                        
                </a>
                <div></div>
            </header>
        </>
    )
}