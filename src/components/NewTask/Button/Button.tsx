import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{ 
name?: string;
image?: string;
}

export function Button({name,image,...props}: ButtonProps) {
    return <button className={styles.button} {...props}>
        <span className={styles.name}>{name}</span>
        <img className={styles.image} src={image} alt={name} /> 
        </button>
    
}