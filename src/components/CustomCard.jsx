import React from 'react'
import '../styles/style.css'
import { Card } from 'react-bootstrap'

export const CustomCard = ({ img, title, description }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"
                src={img}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}
