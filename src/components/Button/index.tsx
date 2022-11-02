import { FC } from 'react';
import { IButtonProps } from '../../types/Interfaces.type';
import styles from './button.module.scss';

const Button: FC<IButtonProps> = (props) => {

    return (
        <div className={styles.button_area}>
            <button 
                onClick={props.onClick}
                type={props.type}
                disabled={props.disabled}
                className={styles.button}
            >
                {props.children}
            </button>
        </div>
    );
};

export default Button;
