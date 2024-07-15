import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User_card = () => {
    const[data,setData]=useState([])
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        .catch((err) => { console.log(err); })
    }
    return (
        <div className='card-container'>
            {
                data.map((item,index)=>{
                    return (                        
                        <div className='card' key={index}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default User_card;