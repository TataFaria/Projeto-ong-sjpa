import styles from './Adote.module.css';
import imagemCel from '../Imagens/imagemCel.svg'

function Adote () {
    
    return(
        <div className={styles.adote}>
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
            <img src={imagemCel} alt="Imagens do celular" className={styles.imagemCel} height="400px"  /> 
        </div>
    )
}

export default Adote