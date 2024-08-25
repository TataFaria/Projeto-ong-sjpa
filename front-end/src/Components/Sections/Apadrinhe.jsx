import styles from './Apadrinhe.module.css'
import dogApadrinhe from '../Imagens/dogApadrinhe.svg'
import petsApadrinhe from '../Imagens/petsApadrinhe.svg'

function Apadrinhe() {
  return (
    <div className={styles.apadrinhe}>
      <img src={dogApadrinhe} alt="Dog image" className={styles.imageLeft} />
      <div className={styles.columnRight}>
        <h1><span>Apadrinhe</span> um pet e cuide dele de longe</h1>
        <img src={petsApadrinhe} alt="Pets image" className={styles.imageRight} />
      </div>
    </div>
  )
}

export default Apadrinhe
