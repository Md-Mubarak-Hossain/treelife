import React from 'react';
import Birot from './Birot';
import {LuSearch} from 'react-icons/lu';
import { Row } from 'reactstrap';
const Birots = () => {
    const items=[
        { id:1,name:"Tree1",imag:"tree"},
        { id:2,name:"Tree2",imag:"tree"},
        { id:3,name:"Tree3",imag:"tree"},
        { id:4,name:"Tree4",imag:"tree"},
        { id:5,name:"Tree5",imag:"tree"}
    ]
    return (
        <div className="p-3">
             <div className="input-group rounded mx-md-2 p-2">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <LuSearch className="fas fa-search"></LuSearch>
                </span>
            </div>
            <Row  
            xxl={3}
            xl={3}
            lg={3}
            md={2}>          
               {
                    items.map(item=><Birot key={item.id} item={item}></Birot>)
                }
        </Row>
        </div>
    );
};

export default Birots;