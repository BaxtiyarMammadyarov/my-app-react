import {createContext, useEffect, useState} from "react";
import ProductService from "../services/ProductService";
import CardService from "../services/CardService";

export const GlobalContext = createContext();

export const GlobalProvider = (props) =>{
    const [products, setProducts] = useState([])
    const [cards, setCards] = useState([])
    const [cardArr, setCardArr] = useState([])
    let obj = {};
    // const setCardArr = [];
    const setProductArr = [];
    useEffect(() => {
        ProductService.getAllProduct().then((response) => {
            setProducts(response.data);
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })

    }, []);
    useEffect(()=>{
        CardService.getAllCards().then((response)=>{
            setCards(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[cardArr])

    return <GlobalContext.Provider value = {{products:products,setProducts :setProducts,cards :cards,setCards: setCards,setCardArr : setCardArr,cardArr : cardArr,setProductArr:setProductArr}} >{props.children}</GlobalContext.Provider>
}