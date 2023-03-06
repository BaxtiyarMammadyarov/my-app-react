import React, {useContext, useEffect, useState} from 'react'
import CardService from '../services/CardService'

import "./CardListComponents.css"
import {GlobalContext} from "../context/GlobalState";


const CardListComponents = () => {

    const {cards} = useContext(GlobalContext)
    const {setCards} = useContext(GlobalContext)
    const {setCardArr} = useContext(GlobalContext)

    return (
        <div className='container navbar navbar-light bg-light  list-item'>
            {cards.map(
                card =>
                    <div className="card " key={card.id}>
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <div className="price-item">
                                <p className="card-text ">
                                    Price : {card.price}
                                </p>
                                <div className="card-text price">
                                    <div className= "price-amount">
                                        Amount : <span className="badge badge-light">  {card.amount}</span>
                                    </div>
                                    <div className="add-remove">
                                        <button type="button" className="btn btn-link" onClick={function (event) {

                                            event.preventDefault();
                                            let jsonData = {"id": card.id}
                                            console.log(jsonData)
                                            CardService.increment(jsonData);
                                            setCardArr(cards)
                                        }
                                        }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path
                                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                <path
                                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg>
                                        </button>
                                        <button type="button" className="btn btn-link" onClick={function (event) {

                                            event.preventDefault();
                                            let jsonData = {"id": card.id}
                                            console.log(jsonData)
                                            CardService.deincrement(jsonData);
                                            if (card.amount === 1) {
                                                setCards(cards.filter(el => el.id !== jsonData.id));
                                            }
                                            setCardArr(jsonData)
                                        }
                                        }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
                                                <path
                                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*<a href="#" className="btn btn-primary">Button</a>*/}

                        </div>
                        <div className="btn-list">
                            {/*<a href="#" className="btn btn-primary btn-danger" style={{marginBottom: "0.5rem"}} onClick={function (event){*/}
                            {/*    event.preventDefault();*/}
                            {/*    let jsonData = {"id" : card.id}*/}
                            {/*    console.log(jsonData)*/}
                            {/*    setCards(cards.filter(el => el.id !== jsonData.id));*/}
                            {/*    CardService.deleteToCard(jsonData);*/}

                            {/*}*/}
                            {/*}>Add</a>*/}
                            <a href="#" className="btn btn-primary btn-danger" style={{marginBottom: "0.5rem"}}
                               onClick={function (event) {
                                   event.preventDefault();
                                   let jsonData = {"id": card.id}
                                   console.log(jsonData)
                                   setCards(cards.filter(el => el.id !== jsonData.id));
                                   CardService.deleteToCard(jsonData);

                               }
                               }>remove</a>
                        </div>

                    </div>
                // <li className='row' key={card.id+card.iisbn13} >
                //     <span>${card.title}</span>
                //     <span>${card.price}</span>
                //     <span>${card.amount}</span>
                //
                //     <a href="#" className="btn sil" onClick={function (event){
                //                     event.preventDefault();
                //                     let jsonData = {"id" : card.id}
                //               console.log(jsonData)
                //                     setCardArr.pop(jsonData)
                //                      CardService.deleteToCard(jsonData);
                //
                //                 }
                //              }><img src="img/sil.svg" alt=""/></a>
                // </li>
            )

            }


        </div>
    )
}


export default CardListComponents;