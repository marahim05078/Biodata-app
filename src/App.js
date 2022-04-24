import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name={"Md. A. Rahim"}
        address={"Ahmedpur, Natore, Rajshahi-6433"}
        email={"mark05078@gmail.com"}
        mobile={"01740886895"}
        profession={"Webdevelopment"}
        experiencs={"None"}
        skills={["HTML", "CSS", "Bootstrap", "Javasript", "Basi React JS"]}
        interest={["Next.js", "Node.js", "Express,js", "PHP-Laravel"]}
      />
      <Person
        name={"Reyad Ahmed"}
        address={"Naouga, Rajshahi"}
        email={"reyad@gmail.com"}
        mobile={"01740568843"}
        profession={"Full Stack web developer"}
        experiencs={"5 Years"}
        skills={[
          "HTML",
          "CSS",
          "Bootstrap",
          "Javasript",
          "jQuery",
          "React JS",
          "Laravel",
          "Express.js",
        ]}
        interest={["React Native", "Next.js", "Socket", "Svelte"]}
      />
    </div>
  );
}

export default App;
