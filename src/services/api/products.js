import axios from 'axios';
import endPoints from '@/services/api';

const addProduct = async (body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    try {
        return (await axios.post(endPoints.products.addProduct, body, config))
            .data;
    } catch (error) {
        //console.log(error);
    }
};

const deleteProduct = async (id) => {
    try {
        return (await axios.delete(endPoints.products.deleteProduct(id))).data;
    } catch (error) {
        //console.log(error);
    }
};

const updateProduct = async (id, body) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    try {
        return (
            await axios.put(endPoints.products.updateProduct(id), body, config)
        ).data;
    } catch (error) {
        console.log(error);
    }
};

export { addProduct, deleteProduct, updateProduct };
