import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import CardService from "../services/CardService";
import "./ListProductComponent.css"


const ListProductComponenet = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        ProductService.getAllProduct().then((response) => {
            setProducts(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10'>
                    <div className='row'>
                        {
                            products.map(
                                product =>

                                    <div className="card" style={{ width: "15rem", margin: "0.5rem" }} key={product.isbn13} >
                                        <img className="card-img-top" style={{ width: "15rem", height: "10rem", margin: "0.2rem" }} src={product.image} alt="Card image cap" />
                                        <div className="card-body" style={{ width: "15rem", margin: "0.1rem" }}>
                                            <p className="card-title">{product.title}</p>
                                            <p className="card-subtitle mb-2 text-muted">{product.subtitle}</p>
                                        </div>
                                        <p className="card-text">{product.price}</p>
                                        <button type="button" onClick={(e)=>{
                                            e.preventDefault();
                                            var jsonData = {"isbn13" : product.isbn13}
                                            console.log(jsonData)
                                            CardService.addToCard(jsonData)

                                        }

                                        } className="btn btn-success" style={{ marginBottom: "0.5rem" }} >Add to card</button>
                                    </div>

                            )
                        }
                    </div>
                </div>
                <div className='col-2'>

                </div>

            </div>




        </div>

    )


}



export default ListProductComponenet