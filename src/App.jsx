import { useState } from 'react';

import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import ProjectSidebar from './Components/ProjectSidebar.jsx';
import SelectedProject from './Components/SelectedProject.jsx';


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  }); 

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined ,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleCancelAddProject() {
     setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = <SelectedProject project={selectedProject }/>;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProjet={handleStartAddProject}/>;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
     <ProjectSidebar 
     onStartAddProjet={handleStartAddProject} 
     projects={projectsState.projects} 
     onSelectProject={handleSelectProject}
     />
     {content}
    </main>
  );
}

export default App;
