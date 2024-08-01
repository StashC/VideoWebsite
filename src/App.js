import "./App.css";
import ContactCard from "./Components/ContactCard.tsx";
import TopBar from "./Components/TopBar/TopBar.tsx";
import PersonalProfile from "./Containers/PersonalProfile/PersonalProfile.tsx";
import ProjectGallery from "./Containers/PersonalProfile/ProjectGallery/ProjectGallery.tsx";

function App() {
  return (
    <div className="App">
      <TopBar />
      <PersonalProfile />
      <ProjectGallery />
      <ContactCard />
    </div>
  );
}

export default App;
