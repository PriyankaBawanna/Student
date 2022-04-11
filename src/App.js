import Routers from "./Components/Home/js/Routers";

import AddParent from "./Model/AddParent/js/AddParent";
import AddStudent from "./Model/AddStudent/js/AddStudent";
import AddTeacher from "./Model/AddTeacher/js/AddTeacher";

function App() {
  return (
    <>
      <Routers />
      <AddStudent />
      <h1>Welcome to </h1>
      <AddParent />
      <AddTeacher />
    </>
  );
}

export default App;
