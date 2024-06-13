import React from 'react';
import Ratio from 'react-bootstrap/Ratio';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/ProjectCard.css';

function ProjectCard({project, showEditBtn = false, ...props}) {
    return (
        <Card className="card-shadow zoom p-2 h-100" bg="dark" text="light">
            <Ratio aspectRatio="4x3">
                <Card.Img src={project.coverImageURL}
                          alt="Project card cover image"
                          variant="top" 
                          className="rounded object-fit-cover"
                          loading="lazy"
                />
            </Ratio>

            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="line-limit-4">{project.summary}</Card.Text>
                
                <div className="d-flex flex-column ">
                    { showEditBtn // Show edit button only for the my projects page.
                        ?  <Button href={`/editProject/${project.id}`} variant="secondary" className="mb-3">
                                Edit Project
                            </Button>
                        : null
                    }

                    <Button href={`/project/${project.id}`}>
                        View Project
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
