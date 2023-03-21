import { FC } from 'react';
import styles from './button.module.scss';
import { IButtonProps } from './button.types';

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
                    background: props.disabled ? '#444444' : 'black',
                    backgroundColor: props.outlined ? '#ffffff' : 'black', 
                    border: props.outlined ? '2px solid black' : 'none', 
                    color: props.outlined ? 'black' : '#ffffff',
                    fontSize: props.textsize,
                    opacity: props.disabled ? '.7' : '',
                    cursor: props.disabled === true ? 'not-allowed' : 'pointer'
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
