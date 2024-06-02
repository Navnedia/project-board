import React from 'react';
import Ratio from 'react-bootstrap/Ratio';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import '../styles/ProjectCard.css';

function ProjectCard({project, ...props}) {
    return (
        <Card className="p-2 h-100 zoom" bg="dark" text="light">
            <Ratio aspectRatio="4x3">
                <Card.Img src={project.coverImageURL}
                          variant="top" 
                          className="rounded"
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                />
            </Ratio>

            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className='line-limit-4'>{project.summary}</Card.Text>
                
                {/* <div className="d-flex justify-content-end">
                    <Button href="" className="stretched-link">
                        View Project
                    </Button>
                </div> */}
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
