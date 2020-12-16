import React from "react";
import Main from "./components/main";

import "./tailwind.output.css";

function App() {
  const cardState = React.useRef();
  return <Main cardRef={cardState} />;
}

export default App;
