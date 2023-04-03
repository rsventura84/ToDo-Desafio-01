import { Button } from './Button/Button'
import { Input } from './Input/Input'
import styles from './NewTask.module.css'
import plus from '../../assets/plus.svg';

export function NewTask(){
    return(
        <div className={styles.newtask}>
            <Input /> 
            <Button name={"Criar"} image={plus}/>
        </div>
    )
}