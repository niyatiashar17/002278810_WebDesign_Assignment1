// Jobs.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Jobs = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      company: 'TechCo',
      location: 'San Francisco, CA',
      description: 'Exciting opportunity for a skilled software engineer...',
    },
    {
      title: 'Web Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      description: 'Join our team as a web developer and contribute to innovative projects...',
    },
    {
      title: 'Associate Software Engineer',
      company: 'TechCompany',
      location: 'Boston, MA',
      description: 'Exciting opportunity for a skilled software engineer...',
    },
    {
      title: 'Associate Developer',
      company: 'WebSolutions',
      location: 'New York, NY',
      description: 'Join our team as a web developer and contribute to innovative projects...',
    },
    {
      title: 'Technology Assistance',
      company: 'TechCo',
      location: 'San Francisco, CA',
      description: 'Exciting opportunity for a skilled software engineer...',
    },
    {
      title: 'System Engineer',
      company: 'WebSolutions',
      location: 'New York, NY',
      description: 'Join our team as a web developer and contribute to innovative projects...',
    },
    
  ];

  const truncateDescription = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="container mt-5">
      <h2>Job Openings</h2>
      <div className="row">
        {jobs.map((job, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.location}</Card.Text>
                <Card.Text>{truncateDescription(job.description, 50)}</Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
