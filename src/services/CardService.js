import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8082/rest/card/get';
const ADD_CARD_REST_API_URL = 'http://localhost:8082/rest/card/add';



class CardService{
    getAllProduct(){
        return axios.get(PRODUCT_REST_API_URL);
    }
    addToCard(data){
        axios.post(ADD_CARD_REST_API_URL,data);
    }
}

export default new CardService();