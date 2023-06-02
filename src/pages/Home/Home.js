import React from 'react';
import banner from '../../components/images/banner_treelife.jpg'
import { LuSearch } from 'react-icons/lu';
import { Card } from 'reactstrap';
const Home = () => {
    return (
        <Card className='border-0'>
            <img src={banner} className="img-fluid shadow-4" alt="Green Tree, Green World" />
            <div className="card-img-overlay">
                <div className="input-group rounded mx-auto">
                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <LuSearch className="bg-light border-0"></LuSearch>
                    </span>
                </div>
            </div>
        </Card>
    );
};
export default Home;