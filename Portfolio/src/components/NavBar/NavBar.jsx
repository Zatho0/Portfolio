import './NavBar.css'

export default function NavBar(){
    return (
        
            <nav id="navbar">
                <a href="#" className="logo">THOMAS <span>REIX</span></a>

                <div className="nav-menu">
                    <ul className="nav-link">
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <p className="nav-status">Stage Mai-Juin 2026</p>
                </div>
                <button className="burger" id="burger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
        
    )
}