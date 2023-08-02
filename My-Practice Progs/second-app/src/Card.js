import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Col, Row } from 'react-bootstrap';

function BasicExample() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Make an API call when the component mounts
        axios.get('https://api.slingacademy.com/v1/sample-data/photos')
            .then(response => {
                setPhotos(response.data.photos);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs only once

    const renderCards = () => {
        const cardGroups = [];
        for (let i = 0; i < photos.length; i += 4) {
            const group = photos.slice(i, i + 4);
            cardGroups.push(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Row key={i}>
                        {group.map(photo => (
                            <Col key={photo.id} md={3}>
                                <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                    <Card.Img variant="top" src={photo.url} />
                                    <Card.Body>
                                        <Card.Title>{photo.title}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
            );
        }
        return cardGroups;
    };

    return (
        <div>
            {renderCards()}
        </div>
    );
}

export default BasicExample;
