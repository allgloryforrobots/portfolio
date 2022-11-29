import './scss/app.scss'
import { Routes, Route } from 'react-router-dom';
import { MainPage, ContactsPage, ProjectsPage, SkillsPage } from './pages/'

function App() {

  return (

    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/contacts" element={<ContactsPage/>}></Route>
      <Route path="/projects" element={<ProjectsPage/>}></Route>
      <Route path="/skills" element={<SkillsPage/>}></Route>
    </Routes>

  );

}
 
export default App;
