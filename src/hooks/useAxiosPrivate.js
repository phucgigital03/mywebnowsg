import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import httpRequest from '~/utils/httpRequest';

const refreshToken = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const numberend = Math.random() * 10;
            resolve(`cnudncubv2932${numberend}`);
        }, 1000);
    });
};

function useAxiosPrivate() {
    const accesstoken = useSelector((state) => state.Authentication.token);
    useEffect(() => {
        let refreshTokenRequired = null;

        const request = httpRequest.interceptors.request.use(
            (config) => {
                // if (!config.headers['Authorization']) {
                //     config.headers['Authorization'] = `Bearer ${accesstoken}`;
                // }
                return config;
            },
            function (error) {
                // Do something with request error
                return Promise.reject(error);
            },
        );

        const responsive = httpRequest.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error.response.status === 404) {
                    console.log(refreshTokenRequired);
                    refreshTokenRequired = refreshTokenRequired ? refreshTokenRequired : refreshToken();
                    const newAccessToken = await refreshTokenRequired;
                    console.log(newAccessToken);
                    refreshTokenRequired = null;
                    // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    // return httpRequest(prevRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            httpRequest.interceptors.response.eject(responsive);
            httpRequest.interceptors.request.eject(request);
        };
    }, [accesstoken, refreshToken]);

    return httpRequest;
}

export default useAxiosPrivate;
