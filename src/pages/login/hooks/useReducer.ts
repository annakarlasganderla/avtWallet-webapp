import { IValidLogin } from '../../../types/Interfaces.type';

export const initialState: IValidLogin = {
    isValid: false,
    error: false,
    errorMessage: {
        email: '',
        password: '',
        credentials: '',
    },
};
  
export const usLoginReducer = (state: IValidLogin, action: any) => {
    switch (action.type) {
        case 'errorEmail':
            state = { ...state, error: true, isValid: false, errorMessage: 
                { ...state.errorMessage, email: action.payload } 
            };
            return state;
        case 'errorPassword':
            state = { ...state, error: true, isValid: false, errorMessage: 
                { ...state.errorMessage, password: action.payload } 
            };
            return state;
        case 'validEmail': 
            state = { ...state, error: false, isValid: false, errorMessage:
                { ...state.errorMessage, email: '' } 
            };
            return state;
        case 'validPassword': 
            state = { ...state, error: false, isValid: false, errorMessage:
                { ...state.errorMessage, password: '' } 
            };
            return state;
        case 'errorCredentials':
            state = { ...state, error: true, isValid: false, errorMessage: 
                { ...state.errorMessage, credentials: action.payload } 
            };
            return state;
        case 'success':
            state = { ...state, isValid: true, error: false, errorMessage: initialState.errorMessage };
            return state;
        default:
            return state;
    };
};
