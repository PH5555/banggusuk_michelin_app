import React, {useState} from 'react';
import { getCookie } from '../util/Cookie';

export const useAxios = () => {
    const [isLoading, setIsLoading] = useState(false);

    const defaultInstance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 10000,
      });

    const tokenInstance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 10000,
        headers: {'X-AUTH-TOKEN': getCookie('accessToken')}
      });

    const getInstance = (type) => {
        if(type == 'useToken') {
            return tokenInstance;
        } 
        else if (type == 'default'){
            return defaultInstance;
        }
        return defaultInstance;
    }

    const axiosData = async (type, method, url, data) => {
        setIsLoading(true);
        const instance = getInstance(type);
        
        if(method == 'GET'){
            const response = await instance.get(url);
            setIsLoading(false);
            return response;
        }
        else if(method == 'POST'){
            const response = await instance.post(url, data);
            setIsLoading(false);
            return response;
        }
    }
    
    return [axiosData, isLoading];
}
