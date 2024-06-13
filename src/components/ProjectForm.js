import React, { useState, useEffect } from 'react';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';
import Container from 'react-bootstrap/Container';
import 'react-mde/lib/styles/css/react-mde-all.css';
import 'github-markdown-css/github-markdown-light.css';
import '../styles/ProjectEditor.css';

// Default blank project state:
const blankProject = {
    title: "",
    description: "",
    summary: "",
    coverImageURL: "",
    contactEmail: ""
};

const baseURL = process.env.REACT_APP_API_BASE_URL;

// Configure the rehype links transformer plugin to open links externally and add rel important attributes.
const linksPluginConfig = [rehypeExternalLinks, {rel: ["nofollow", "noopener", "noreferrer"], target: "_blank"}]


function ProjectForm({project = blankProject, projectId = null, onCancel = (_) => {}, onSave = (_) => {}, BodyWrapper = "div", BtnWrapper = "div", ...props}) {
    // Tracking state of the project form.
    const [projectForm, setProjectForm] = useState(project);
    // Track if the form has been validated after submit (triggers showing validation styles).
    const [validated, setValidated] = useState(false);
    // State representing if the cover image URL field should be marked invalid if the link is not a valid image.
    const [imageUrlInvalid, setImageUrlInvalid] = useState(false);
    // Seperate state tracking for working with the markdown editor.
    const [description, setDescription] = useState("");
    // Set the selected tab state on the markdown editor.
    const [selectedTab, setSelectedTab] = useState("write");

    // Update description changes on the project state model.
    useEffect(() => {
        setProjectForm((project) => ({...project, description: description}));
    }, [description])

    // When the cover image fails to find the image source replace it with a placeholder and mark the field invalid.
    function handleImageError(e) {
        e.onError = null;
        e.target.src = "https://placehold.co/1280x960";
        // If the URL field is not empty then the URL should be considered invalid.
        setImageUrlInvalid(projectForm.coverImageURL !== "");
    }

    function handleSubmit(e) {
        const form = e.currentTarget;
        const isValid = form.checkValidity() // Run built-in form validation.
        e.preventDefault();
        e.stopPropagation();
        // console.log("Submit");
        // console.log(JSON.stringify(projectForm));

        // Show validation states if something is invalid, or save if it's all good.
        if (isValid === false || imageUrlInvalid || description.length === 0) {
            setValidated(true);
        } else {
            // console.log("save");
            onSave(projectForm);
        }
    }

    useState(() => {
        if (!!projectId) {
            fetch(`${baseURL}/projects/${projectId}`)
                .then((response) => response.json())
                .then((data) => {
                    setProjectForm(() => data);
                    setDescription(() => data.description);
                }).catch((err) => console.error(err));
        }
    }, [projectId]);

    return (
        <Container fluid="md" className="my-4">
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="overflow-auto">
                <BodyWrapper>
                    {/* <Container fluid="md"> */}
                        <Ratio aspectRatio="4x3" className="mb-2" >
                            <Image 
                                src={projectForm.coverImageURL}
                                alt="Project cover image"
                                className="object-fit-cover"
                                onError={handleImageError}
                                rounded fluid
                            />
                        </Ratio>

                        <Form.Group controlId="projectImageURL" className="mb-3">
                            <Form.Label className="fw-bold">Cover Image URL</Form.Label>

                            <Form.Control type="url" placeholder="https://" autoFocus value={projectForm.coverImageURL} onChange={(e) => {
                                setProjectForm((project) => ({...project, coverImageURL: e.target.value}));
                                setImageUrlInvalid(false) // Reset the validity state till after change.
                            }} required isInvalid={imageUrlInvalid} />

                            <Form.Control.Feedback type="invalid">
                                Please provide a valid image url. Make sure the url starts with http:// or https://
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="projectTitle" className="mb-3">
                            <Form.Label className="fw-bold">Project Title</Form.Label>

                            <Form.Control 
                                type="text" 
                                placeholder="Untitled Project"
                                maxLength="60" 
                                value={projectForm.title} 
                                onChange={(e) => {
                                    setProjectForm((project) => ({...project, title: e.target.value}));
                                }} 
                            required />
                        </Form.Group>

                        <Form.Group controlId="projectSummary" className="mb-3">
                            <Form.Label className="fw-bold mb-0">Summary</Form.Label>
                            <Form.Text id="summaryHelp" className="d-block mb-2">
                                Provide a short 1-2 sentence summary of your project concept 
                                (visible on the projects list page).
                            </Form.Text>

                            <Form.Control 
                                as="textarea" 
                                placeholder="Tell us about your project . . ." 
                                aria-describedby="summaryHelp" 
                                maxLength="200" 
                                value={projectForm.summary} 
                                onChange={(e) => {
                                    setProjectForm((project) => ({...project, summary: e.target.value}));
                                }} 
                            required />
                        </Form.Group>

                        <Form.Group controlId="projectContactEmail" className="mb-3">
                            <Form.Label className="fw-bold">Contact Email</Form.Label>

                            <Form.Control type="email" placeholder="username@example.com" value={projectForm.contactEmail}
                                onChange={(e) => {
                                    setProjectForm((project) => ({...project, contactEmail: e.target.value}));
                                }} 
                            required />
                        </Form.Group>

                        <Form.Group controlId="projectDescription" className="mb-3">
                            <Form.Label className="fw-bold mb-0">Full Description</Form.Label>
                            <Form.Text className="d-block mb-2">
                                Tell us about your project! Share as much detail as possible, whether it be in the
                                initial idea phase or in later development stages. Include any relevant information, 
                                such as project type, skill sets needed on your team, project goals, and other 
                                resources. Don't forget to have fun and be creative! Feel free to play around with
                                formatting, images, assets, and links.<br/><br/>

                                This full description is for people to see when they view your project page.
                            </Form.Text>

                            <ReactMde
                                value={description}
                                onChange={setDescription}
                                selectedTab={selectedTab}
                                onTabChange={setSelectedTab}
                                maxEditorHeight={600}
                                generateMarkdownPreview={(markdown) => Promise.resolve(
                                    <ReactMarkdown 
                                        remarkPlugins={[remarkGfm]} 
                                        rehypePlugins={[linksPluginConfig]} 
                                        className="markdown-body">
                                        { markdown }
                                    </ReactMarkdown>
                                )}
                            />
                        </Form.Group>
                    {/* </Container> */}
                </BodyWrapper>

                <BtnWrapper>
                    <div className="d-flex justify-content-end">
                        {/* <Button type="button" variant="secondary" className="m-1" onClick={onCancel(projectForm)}>
                            Cancel
                        </Button> */}

                        <Button type="submit" variant="primary" className="m-1">Save</Button>
                    </div>
                </BtnWrapper>
            </Form>
        </Container>
    );
}

export default ProjectForm;