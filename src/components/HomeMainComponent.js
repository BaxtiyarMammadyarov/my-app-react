
import React, { useEffect, useState } from 'react'
import ListProductComponenet from "./ListProductComponenet";
import CardListComponents from "./CardListComponents";
import "./HomeMainComponent.css"


const HomeMainComponent = () => {




    return (
        <div className='container dis-flex '>
            <div className='row dis-80'>
                <ListProductComponenet />
            </div>
            <div className='row dis-20 card-list'>
                <CardListComponents  />
            </div>


        </div>
    )
}



export default HomeMainComponent;
