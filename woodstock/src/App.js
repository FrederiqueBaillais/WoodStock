import React from 'react';
import "App.css";
import Header from "pages/header";
import About from "pages/about";
import Shop from "pages/shop";
import Team from "pages/team";
import Contact from "pages/contact";
import Footer from "pages/footer";

function App() {
  return (
    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="wood stock by BeCode"/>
        <title>WoodStock by BeCode</title>
      </head>
      <body>
        <div className="App">
          <Title />
          <About />
          <Shop />
          <Team />
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default App;