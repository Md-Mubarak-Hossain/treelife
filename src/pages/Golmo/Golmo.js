import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import golmo from '../../components/images/golmo.jpg';
import useTitle from '../../hocks/useTitle';
const Golmo = ({ item }) => {
    useTitle('Golmo');
    return (

        <div className='p-2'>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={golmo}
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
                    <Button className='w-100 bg-success'>
                        See Details
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Golmo;