import styles from './Empty.module.css'
import clipboard from '../../../assets/clipboard.svg'

export function Empty(){
    return(
        <div className={styles.empty}>
            <div className={styles.container}>
            <img src={clipboard} alt="" />
            <span><strong>Você ainda não tem tarefas cadastradas</strong><br></br>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}