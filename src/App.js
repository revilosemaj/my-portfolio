import React from "react";
import { Header } from "./pages/header/header.component";
import { Section } from "./pages/section/section.component";
import { Iphone } from "./pages/iphone/iphone.component";
import { Article } from "./pages/article/article.component";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Iphone />
      <Article />
    </div>
  );
}

export default App;
