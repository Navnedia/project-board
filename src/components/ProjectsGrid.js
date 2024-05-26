import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectsGrid() {
    const [ projects, setProjects ] = useState([
        {
            id: 1,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 2,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 3,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 4,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 5,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 6,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 7,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 8,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 9,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        },
        {
            id: 10,
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
            coverImageURL: "https://placehold.co/1280x960",
            contactEmail: "address@example.com"
        }
    ]);

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
