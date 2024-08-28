import styles from './SobreNos.module.css';
import imagemSobreNos from '../Imagens/imagemSobreNos.svg'

function SobreNos() {
    return (
        <div className={styles.SobreNos}>
            <img src={imagemSobreNos} alt="Imagens sobre a ONG" />
            <div>
                <p>SJPA é um programa de adoção em Juiz de Fora, MG,
                que conecta animais resgatados a lares amorosos,
                oferecendo-lhes uma nova chance com cuidado e
                carinho.</p>
            </div>
        </div>
    )
}

export default SobreNos;
