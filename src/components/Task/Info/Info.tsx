import { Created } from './Created/Created'
import { Done } from './Done/Done'
import styles from './Info.module.css'

export function Info (){
    return (
        <div className={styles.info}>
            <div className={styles.container}>
            <Created />
            <Done />
            </div>
        </div>
    )
}

