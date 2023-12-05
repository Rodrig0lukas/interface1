import Image from 'next/image'

export default function Home() {
  return (
  <header className="header">
    <div className="navHeader">
        <nav className="User">
            <ul>
                <li><a href="#">Olá, Marilia!</a></li>
                <li><a href="#">Minha Conta</a></li>
                <li><a href="#">Plantaforma de Prova</a></li>
            </ul>
        </nav>
    </div>
  </header>
  )
}
