import Nav from "react-bootstrap/Nav";
import styles from "./NavBar.module.css";

//Importanddo imagem de Logo principal
import Logo from "../Imagens/logo.svg";

//Funcionalidade NavBar
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.imgLogo}>
        <img src={Logo} height="90px" />
      </div>
      <div className={styles.menu_container}>
        <ul>
          <li>
            <Nav.Link href="#SobreNós" className={styles.adoteLink}>
              Sobre Nós
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="#Adote" className={styles.adoteLink}>
              Adote
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="#Apadrinhe">Apadrinhe</Nav.Link>
          </li>
          <li>
            <Nav.Link href="#SejaVoluntario">Seja Voluntário</Nav.Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
