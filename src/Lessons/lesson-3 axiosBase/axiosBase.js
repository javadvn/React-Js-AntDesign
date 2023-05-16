import axios from "axios";


//timeout -> request yolladığımda bir saniyede cevap dönmezse ERROR ALIRIM!!
export const axiosBase = axios.create({
    baseURL:'https://northwind.vercel.app/api/',
    timeout:10000
})