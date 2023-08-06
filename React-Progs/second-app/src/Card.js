import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row } from 'react-bootstrap';

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
        let originalText = "Some quick example text to build on the card title and make up the bulk of the card's content.";
        let slicedText = originalText.slice(0, 50);
        for (let i = 0; i < photos.length; i += 5) {
            const group = photos.slice(i, i + 5);
            cardGroups.push(
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '.4rem', border: '1px solid black' }}>
                    <Row className='gap-3' key={i}>
                        {group.map(photo => (
                            <Card style={{ width: '15rem', marginBottom: '20px', padding: '.7rem' }}>
                                <Card.Img variant="top" src={photo.url} />
                                <Card.Body>
                                    <Card.Title>{photo.title}</Card.Title>
                                    <Card.Text>
                                        {slicedText + "..."}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
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
