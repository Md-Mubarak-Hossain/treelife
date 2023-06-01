import React from 'react';
import Golmo from './Golmo';

const Golmos = () => {
    const items=[
        { id:1,name:"Tree1",imag:"tree"},
        { id:2,name:"Tree2",imag:"tree"},
        { id:3,name:"Tree3",imag:"tree"},
        { id:4,name:"Tree4",imag:"tree"},
        { id:5,name:"Tree5",imag:"tree"}
    ]
    return (
        <div className="p-3">
            <div className='row row-cols-3'>          
               {
                    items.map(item=><Golmo key={item.id} item={item}></Golmo>)
                }
        </div>
        </div>
    );
};

export default Golmos;