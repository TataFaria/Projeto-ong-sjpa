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
        </div>
    )
}

export default SejaVoluntario