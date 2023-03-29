import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const handleNavLinkClick = (sectionName) => {
    setActiveSection(sectionName);
    document.querySelector(`#${sectionName}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavLinkClick("home")}
          >
            Home
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavLinkClick("about")}
          >
            About
          </li>
        </ul>
      </nav>

      <section id="home" className="section">
        <h1>Home Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
          metus felis. Duis eleifend quam ut libero dignissim, sed auctor urna
          imperdiet. Aliquam eu elit eget lacus feugiat suscipit eu a elit.
        </p>
      </section>

      <section id="about" className="section">
        <h1>About Section</h1>
        <p>
          Morbi vitae sapien eget augue dapibus placerat a quis nibh. Aliquam
          lobortis nulla sit amet libero molestie, id ultricies libero
          fringilla. Vestibulum convallis molestie nisl, sed sagittis mi porta
          eu. Maecenas eu bibendum quam.
        </p>
      </section>
    </div>
  );
}

export default App;
