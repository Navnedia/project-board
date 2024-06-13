import ProjectForm from './ProjectForm';
import React from 'react';

function CreateProject() {
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    function handleProjectCreate(project) {
        // Make POST request to add listing on backend REST API:
        // console.log("Sending to backend");
        fetch(`${baseURL}/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        }).then((response) => response.json())
        .then((project) => {
            // You could also redirect to the project detail page in the future.
            // console.log(project);
            window.location.href = `${window.location.origin}/user/projects`
        })
        .catch((err) => console.error(err));
    }

    return (
        <ProjectForm onSave={handleProjectCreate} />
    );
}

export default CreateProject;