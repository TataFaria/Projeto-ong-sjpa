import styles from './NossosPets.module.css';

function NossosPets() {
    return (
        <div className={styles.NossosPets}>
        <h1> Nossos Pets </h1>
        <div className={styles.TiposPets}>
            <ul>
                <li>Gatos</li>
                <li>Cachorros</li>
                <li>Todas as espécies</li>
            </ul>
        </div>
        <div className={styles.SectionCards}>
            <div className={styles.CardsPet}>
               
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
            <div className={styles.CardsPet}>
             
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
            <div className={styles.CardsPet}>
               
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
            <div className={styles.CardsPet}>
                
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
            <div className={styles.CardsPet}>
              
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
            <div className={styles.CardsPet}>
            
                <h2>Bela</h2>
                <p>Adulto / Pequeno</p>
                <button>Saiba Mais</button>
            </div>
        </div>
    </div>
    );
}

export default NossosPets;
