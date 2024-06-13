import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsGrid from './components/ProjectsGrid';
import CreateProject from './components/CreateProject';
import EditProject from './components/EditProject';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <Router>
            <NavigationBar />

            <Routes>
                <Route index element={<ProjectsGrid/>} />
                <Route path="/createProject" element={<CreateProject/>} />
                <Route path="/editProject/:projectId" element={<EditProject/>} />
                <Route path="/project" element={<></>} />
                <Route path="/user/projects" element={<ProjectsGrid showEditBtn />} />
                <Route path="/login" element={<></>} />
            </Routes>
        </Router>
    );
}

export default App;
