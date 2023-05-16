import { axiosBase } from "./axiosBase"


export const baseService = {

    //Bir fonksiton başında async varsa PROMISE return eder
    getAll: async (endpoint) => {

        let responseData = [];

        //get function async oldugu için kod beklemez devam eder. beklemesi için await yazıyoruz
        await axiosBase.get(endpoint)
            .then(res => {
                responseData = res.data
            })
        return responseData

    },
    add: async (endpoint, data) => {
        let responseData = {}

        await axiosBase.post(endpoint, data)
            .then(res => {
                responseData = res.data;
            })

        return responseData;
    },

    delete: async (endpoint, id) => {
        let responseData = {};

        await axiosBase.delete(endpoint + '/' + id)
            .then(res => {
                responseData = res.data;
            });

        return responseData;
    }

}


