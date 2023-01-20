import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8082/rest/all';

class ProductService{
    getAllProduct(){
        return axios.get(PRODUCT_REST_API_URL);
    }
}

export default new ProductService();
