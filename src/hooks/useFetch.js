import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            const _data = await (await axios.get(url)).data;
            setData(_data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return data;
};

export default useFetch;
