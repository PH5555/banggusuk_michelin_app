import React, {useState} from 'react';
import { getCookie } from '../util/Cookie';
import axios from 'axios';

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

	const fileInstance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 10000,
        headers: {'X-AUTH-TOKEN': getCookie('accessToken'), 'Content-Type': 'multipart/form-data'}
      });
	
    const getInstance = (type) => {
        if(type === 'useToken') {
            return tokenInstance;
        } 
        else if (type === 'default'){
            return defaultInstance;
        }
		else if (type === 'file'){
			return fileInstance;
		}
        return defaultInstance;
    }

    const axiosData = async (type, method, url, data) => {
        setIsLoading(true);
        const instance = getInstance(type);
        
        if(method === 'GET'){
            const response = await instance.get(url);
            setIsLoading(false);
            return response;
        }
        else if(method === 'POST'){
            const response = await instance.post(url, data);
            setIsLoading(false);
            return response;
        }
    }
    
    return [axiosData, isLoading];
}
