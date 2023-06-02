import React from 'react';
import banner from '../../components/images/banner_treelife.jpg'
import { LuSearch } from 'react-icons/lu';
import { Card } from 'reactstrap';
const Home = () => {
    return (
        <Card className='border-0'>
            <img src={banner} className="img-fluid shadow-4" alt="Green Tree, Green World" />
            <div className="card-img-overlay">
                <div className="input-group rounded mx-auto p-lg-5">
                    <input type="search" className="form-control rounded py-md-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0 py-3" id="search-addon">
                        <LuSearch className="fas fa-search"></LuSearch>
                    </span>
                </div>
            </div>
        </Card>
    );
};
export default Home;