import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const HomePage = () => {
  const companyAddress = "123 Main Street, Brookline";
  const companyName = "HarmonyHubSolutions";
  const companyEmail = "info@harmonyhubsolutions.com";
  const companyPhone = "+1 (555) 987-6543";

  return (
    <Card className="w-50 mt-5 mx-auto">
      <Card.Body>
        <Card.Title>Welcome to Our Website</Card.Title>

        <ListGroup>
          <ListGroup.Item>
            <strong>Address:</strong> {companyAddress}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Name:</strong> {companyName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone:</strong> {companyPhone}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default HomePage;
