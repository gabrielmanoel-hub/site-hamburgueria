import style from '@/styles/header.module.scss'
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <a href='/'>
                   {/* {logo && ( <Image  src={logo} alt= 'logo' priority />)} */}
                   <Image  src= {logo} alt= 'logo' priority = {false} />
                </a>
            </header>
        </>
    )
}