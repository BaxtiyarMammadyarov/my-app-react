import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8082/rest/card/get';
const ADD_CARD_REST_API_URL = 'http://localhost:8082/rest/card/add';
const REMOVE_CARD_REST_API_URL = 'http://localhost:8082/rest/card/remove';
const INCRMENT_CARD_REST_API_URL = 'http://localhost:8082/rest/card/increment';
const DEINCRMENT_CARD_REST_API_URL = 'http://localhost:8082/rest/card/deincrement';



class CardService{
    getAllCards(){
        return axios.get(PRODUCT_REST_API_URL);
    }
    addToCard(data){
       axios.post(ADD_CARD_REST_API_URL,data).then( (res)  => res )
    }

    deleteToCard(data){
        axios.post(REMOVE_CARD_REST_API_URL,data);
    }
    increment(data){
        axios.post(INCRMENT_CARD_REST_API_URL,data);
    }
    deincrement(data){
        axios.post(DEINCRMENT_CARD_REST_API_URL,data);
    }
}

export default new CardService();