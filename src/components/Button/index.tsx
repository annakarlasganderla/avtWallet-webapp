import { FC } from 'react';
import { IButtonProps } from '../../types/Interfaces.type';
import styles from './button.module.scss';

const Button: FC<IButtonProps> = (props) => {

    return (
        <div 
            className={styles.button_area}
            style={{ 
                width: props.width, 
                height: props.height, 
                marginTop: `${props.spacing}px` 
            }}
        >
            <button 
                style={{ 
                    width: '100%',
                    backgroundColor: props.outlined ? '#ffffff' : 'black', 
                    border: props.outlined ? '2px solid black' : 'none', 
                    color: props.outlined ? 'black' : '#ffffff',
                    fontSize: props.textsize
                }}
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
