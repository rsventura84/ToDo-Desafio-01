import { Created } from './Created/Created'
import { Done } from './Done/Done'
import styles from './Info.module.css'

interface InfoProps {
    countCreated?:number
    countDone?:number
}

export function Info ({countCreated, countDone}:InfoProps ){
    return (
        <div className={styles.info}>
            <div className={styles.container}>
            <Created countCreated={countCreated}/>
            <Done  countDone={countDone}/>
            </div>
        </div>
    )
}
