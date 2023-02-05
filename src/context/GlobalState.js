import {createContext, useEffect, useState} from "react";
import ProductService from "../services/ProductService";
import CardService from "../services/CardService";

export const GlobalContext = createContext();

export const GlobalProvider = (props) =>{
    const [products, setProducts] = useState([])
    const [cards, setCards] = useState([])
    const setCardArr = [];
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
    },[setCardArr])
    return <GlobalContext.Provider value = {{products:products,cards :cards,setCardArr : setCardArr}} >{props.children}</GlobalContext.Provider>
}