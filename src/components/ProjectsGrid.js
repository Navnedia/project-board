import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectsGrid() {
    const [ projects, setProjects ] = useState([]);

    const baseURL = process.env.REACT_APP_API_BASE_URL;

    // Get list of projects from the backend API:
    useState(() => {
        fetch(`${baseURL}/projects`)
            .then((response) => response.json())
            .then((data) => setProjects(() => data))
            .catch((err) => console.error(err));
    }, [projects]);

    return (
        <Container className="my-3">
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-3">
                {projects.map((project) => (
                    <Col key={project.id}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProjectsGrid;
