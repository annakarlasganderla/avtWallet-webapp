import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
});

// Interceptar todas as requisições e adicionar o token de autenticação, se estiver disponível
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptar todas as respostas e tratar erros de autorização ou outros erros
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redirecionar para a página de login ou tratar o erro de autenticação de acordo com o seu fluxo
        }
        return Promise.reject(error);
    }
);

export default api;