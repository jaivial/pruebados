import React from "react"
import "./news.css";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../../public/assets/LogoNombre2.png';
import Arrow from '../../../public/assets/arrow.svg';
import ArrowRosa from '../../../public/assets/arrowrosa.svg';


export default function News() {
    return (
        <main>
             <nav className="navbar">
                <div className="logo">
                    <Image
                        src={Logo}
                        className='logonavbar'
                        alt='Guillermo Fernández dietista nutricionista en Valencia'
                    >

                    </Image>
                </div>
                <div className='rightsidenavbar'>

                    <div className="links">
                        <Link href="#">Inicio</Link>
                        <Link href="#">Sobre mí</Link>
                       
                        <div className="dropdown">
                            <span>Servicios</span>
                            <Image src={Arrow} className='arrownegra' alt='Guillermo Fernández dietista nutricionista en Valencia'></Image>
                            <Image src={ArrowRosa} className='arrowrosa' alt='Guillermo Fernández dietista nutricionista en Valencia'></Image>
                            <div className="dropdown-content">
                                <Link href="/nutricion-deportiva">Nutrición Deportiva</Link>
                                <Link href="/nutricion-clinica">Nutrición Clínica</Link>
                                <Link href="/perdida-de-peso">Pérdida de Peso</Link>
                            </div>
                        </div>
                        <Link href="#">Contacto</Link>
                    </div>
                    <div className="appointment-button">Pide tu Cita</div>
                </div>
            </nav>
        </main>
    )
}