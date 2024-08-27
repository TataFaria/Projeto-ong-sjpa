<<<<<<< HEAD:front-end/front-end/src/Components/Sections/SobreNos.jsx
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
=======
import styles from './SejaVoluntario.module.css';
import imagemCelular from '../Imagens/imagemCelular.svg'

function SejaVoluntario () {
    
    return(
        <div className={styles.SejaVoluntario}>
         <div>
           <p> Transforme vidas <br/>
           adote, apadrinhe ou seja voluntário
            </p>
            <p>
            Faça parte da nossa missão <br/>
            de amor e cuidado aos animais. <br/>
            Junte-se a nós para dar um lar, <br/>
            apoiar e ajudar em nossa causa! <br/>
            </p>
            <button id="button" type="submit" className={styles.btn}>
                Eu quero fazer parte
            </button>
         </div>  
            <img src={imagemCelular} alt="Imagens do celular" className={styles.imagemCelular} height="450px"  /> 
>>>>>>> 495962f32ef7412feac108d3de78ff9f7fa290d0:front-end/src/Components/Sections/SejaVoluntario.jsx
        </div>
    )
}

<<<<<<< HEAD:front-end/front-end/src/Components/Sections/SobreNos.jsx
export default SobreNos;
=======
export default SejaVoluntario
>>>>>>> 495962f32ef7412feac108d3de78ff9f7fa290d0:front-end/src/Components/Sections/SejaVoluntario.jsx
