
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Contact = () => {
  const emailAddress = 'contact@harmonyhubsolutions.com';
  const phoneNumber = '+1 (555) 123-4567';
  const instagramUsername = 'harmonyhubsolutions';
  const whatsappNumber = '+1 (555) 987-6543';

  return (
    <Card className="w-50 mt-5 mx-auto">
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>

        <ListGroup>
          <ListGroup.Item>
            <strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone:</strong> {phoneNumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Instagram:</strong> <a href={`https://www.instagram.com/${instagramUsername}/`} target="_blank" rel="noopener noreferrer">@{instagramUsername}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>WhatsApp:</strong> <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">{whatsappNumber}</a>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Contact;
