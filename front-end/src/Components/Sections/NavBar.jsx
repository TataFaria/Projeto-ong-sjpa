import Nav from "react-bootstrap/Nav";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
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
  );
}

export default Navbar;
