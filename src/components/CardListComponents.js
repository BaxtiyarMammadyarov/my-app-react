
import React, {useContext, useEffect, useState} from 'react'
import CardService from '../services/CardService'

import "./CardListComponents.css"
import {GlobalContext} from "../context/GlobalState";


const CardListComponents = () => {
    // const [cards, setCards] = useState([])
    // useEffect(() => {
    //
    //     CardService.getAllCards().then((response)=>{
    //         setCards(response.data);
    //
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }, []);

    // function deleteToCard(data){
    //     let jsonData = {"id" : data.id}
    //     console.log(jsonData)
    //     CardService.deleteToCard(jsonData);
    // }
    const {cards} = useContext(GlobalContext)
    const {setCardArr} = useContext(GlobalContext)

    return (
        <div className='container '>
            <ul>
                {  cards.map(
                    card =>
                        <li>
                            <div className="card " key={card.id+card.iisbn13} style={{ width: "10rem", margin: "",height: "10rem" }}>
                                <div className="card-body"   >
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.price}</p>
                                    <p className="card-text">{card.amount}</p>
                                    {/*<a href="#" className="btn btn-primary">Button</a>*/}
                                    <a href="#" className="btn btn-primary btn-danger" onClick={function (event){
                                        event.preventDefault();
                                        let jsonData = {"id" : card.id}
                                        console.log(jsonData)
                                        setCardArr.pop(jsonData)
                                        CardService.deleteToCard(jsonData);

                                    }
                                    }>Sil</a>
                                </div>
                            </div>
                        </li>
                )

                }

            </ul>
        </div>
    )
}



export default CardListComponents;