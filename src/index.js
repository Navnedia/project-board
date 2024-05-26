import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import ProjectCard from './components/ProjectCard';
import reportWebVitals from './reportWebVitals';

const projectDetails = {
    id: 1,
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices. Amet consectetur adipiscing elit ut aliquam purus sit amet. Donec pretium vulputate sapien nec sagittis. Eget lorem dolor sed viverra.",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit.",
    coverImageURL: "https://placehold.co/1280x960",
    contactEmail: "address@example.com"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <ProjectCard project={projectDetails} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
