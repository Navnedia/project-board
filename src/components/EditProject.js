import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from './ProjectForm';

const baseURL = process.env.REACT_APP_API_BASE_URL;

function EditProject({...props}) {
    let { projectId } = useParams();

    function handleProjectUpdate(project) {
        // Make PUT request to update the project listing on backend REST API:
        // console.log("Sending to backend");
        fetch(`${baseURL}/projects/${project.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        }).then((response) => {
            if (!response.ok) {
                throw response;
            }
            window.location.href = `${window.location.origin}/user/projects`
            return true
        })
        .catch((err) => console.error(err));
    }

    return (
        <ProjectForm projectId={projectId} onSave={handleProjectUpdate} />
    );
}

export default EditProject;