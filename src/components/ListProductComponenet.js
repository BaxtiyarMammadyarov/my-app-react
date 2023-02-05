import React, {useContext, useEffect, useState} from 'react'
import ProductService from '../services/ProductService'
import CardService from "../services/CardService";
import "./ListProductComponent.css"
import {GlobalContext} from "../context/GlobalState";


const ListProductComponenet = () => {
    // const [products, setProducts] = useState([])
    // const [cards, setCards] = useState([])
    // useEffect(() => {
    //     ProductService.getAllProduct().then((response) => {
    //         setProducts(response.data);
    //         // console.log(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    //     CardService.getAllCards().then((response)=>{
    //         setCards(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }, []);
    const {products} = useContext(GlobalContext)
    const {setCardArr} = useContext(GlobalContext)
// function  addCard(product){
//     var jsonData = {"isbn13" : product.isbn13}
//     // setCardList(jsonData);
//     // console.log(jsonData)
//     CardService.addToCard(jsonData)
// }
    return (
        <div className='container dis-flex'>
            <div className='row '>
                <div className='col-12'>
                    <div className='row'>
                        {
                            products.map(
                                product =>

                                    <div className="card" style={{width: "15rem", margin: "0.1rem"}}
                                         key={product.isbn13}>
                                        <img className="card-img-top"
                                             style={{width: "15rem", height: "10rem", margin: "0.1rem"}}
                                             src={product.image} alt="Card image cap"/>
                                        <div className="card-body" style={{width: "15rem", margin: "0.1rem"}}>
                                            <p className="card-title">{product.title}</p>
                                            <p className="card-subtitle mb-2 text-muted">{product.subtitle}</p>
                                        </div>
                                        <p className="card-text">{product.price}</p>
                                        <button type="button" onClick={function () {
                                            let jsonData = {"isbn13": product.isbn13}
                                            // setCardList(jsonData);
                                            // console.log(jsonData)

                                            CardService.addToCard(jsonData)
                                            setCardArr.push(jsonData)
                                        }
                                        } className="btn btn-success" style={{marginBottom: "0.5rem"}}>Add to card
                                        </button>
                                    </div>
                            )
                        }
                    </div>
                </div>


            </div>
            {/*<div className='dis-20'>*/}
            {/*    <ul>*/}
            {/*    {  cards.map(*/}
            {/*        card =>*/}
            {/*        <li>*/}
            {/*            <div className="card " key={card.id} style={{ width: "10rem", margin: "",height: "10rem" }}>*/}
            {/*                <div className="card-body"   >*/}
            {/*                    <h5 className="card-title">{card.title}</h5>*/}
            {/*                    <p className="card-text">{card.price}</p>*/}
            {/*                    <p className="card-text">{card.amount}</p>*/}
            {/*                    <a href="#" className="btn btn-primary">Button</a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    )*/}

            {/*    }*/}

            {/*    </ul>*/}
            {/*</div>*/}


        </div>

    )


}


export default ListProductComponenet