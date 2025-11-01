import { useState } from 'react';

import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import ProjectSidebar from './Components/ProjectSidebar.jsx';


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  }); 

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  let content;
  if(projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProjet={handleStartAddProject}/>;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
     <ProjectSidebar onStartAddProjet={handleStartAddProject}/>
     {content}
    </main>
  );
}

export default App;
