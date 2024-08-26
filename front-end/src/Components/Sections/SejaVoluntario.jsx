import styles from './SejaVoluntario.module.css';
import SobreNos from '../Imagens/SobreNos.svg';

function SejaVoluntario() {
    return (
        <div className={styles.sejavoluntario}>
            <img src={SobreNos} alt="Imagens sobre a ONG" />
            <div>
                <p>SJPA é um programa de adoção em Juiz de Fora, MG,
                que conecta animais resgatados a lares amorosos,
                oferecendo-lhes uma nova chance com cuidado e
                carinho.</p>
            </div>
        </div>
    );
}

export default SejaVoluntario;
