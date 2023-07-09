const API = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/${API_VERSION}/auth/login`,
        profile: `${API}/${API_VERSION}/auth/profile`,
    },
    products: {
        getProducts: (limit, offset) =>
            `${API}/${API_VERSION}/products?limit=${limit}&offset=${offset}`,
        getAllProducts: `${API}/${API_VERSION}/products`,
        getProduct: (id) => `${API}/${API_VERSION}/products/${id}`,
        addProduct: `${API}/${API_VERSION}/products`,
        updateProduct: (id) => `${API}/${API_VERSION}/products/${id}`,
        deleteProduct: (id) => `${API}/${API_VERSION}/products/${id}`,
    },
    categories: {
        getCategories: `${API}/${API_VERSION}/categories`,
        getCategory: (id) => `${API}/${API_VERSION}/categories/${id}`,
        getProducts: (id) => `${API}/${API_VERSION}/categories/${id}/products`,
        updateCategory: (id) => `${API}/${API_VERSION}/categories/${id}`,
    },
    files: {
        upload: `${API}/${API_VERSION}/files/upload`,
        getFile: (name) => `${API}/${API_VERSION}/files/${name}`,
    },
};

export default endPoints;
