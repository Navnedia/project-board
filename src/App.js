import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectEditor from './components/ProjectEditor';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <Router>
            <NavigationBar />

            <Routes>
                <Route index element={<ProjectsGrid/>} />
                <Route path="/user/projects" element={<ProjectsGrid/>} />
            </Routes>
        </Router>
    );
}

export default App;
