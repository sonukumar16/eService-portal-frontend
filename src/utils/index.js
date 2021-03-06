import Cookies from "js-cookie";

export const setToken = (token )=> Cookies.set('token', token);

export const getToken = ()=> Cookies.get('token');

export const removeToken = ()=> Cookies.remove('token');

export const setRole = (role )=> Cookies.set('role', role);

export const getRole = ()=> Cookies.get('role');

export const removeRole = ( )=> Cookies.remove('role');

export const removeCookies = ()=> {
        const res = document.cookie;
        const multiple = res.split(";");
        console.log(multiple);
        for(let i = 0; i < multiple.length; i++) {
           let key = multiple[i].split("=");
           document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
        }
}