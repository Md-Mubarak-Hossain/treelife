import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import birot from '../../components/images/birot.jfif';
import useTitle from '../../hocks/useTitle';
import { Link } from 'react-router-dom';
const Birot = ({ item }) => {
    useTitle('Birot');
    return (

        <div className='p-2'>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={birot}
                    top
                    width="100%" />
                <CardBody>
                    <CardTitle tag="h5">
                        {item.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Link to='/birot/details'><Button className='w-100 bg-success'>
                        See Details
                    </Button></Link>
                </CardBody>
            </Card>
        </div>
    );
};

export default Birot;