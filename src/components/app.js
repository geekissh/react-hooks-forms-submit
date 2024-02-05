import React from "react";
import Form from "./Form";

function App() {
  function handleFormSubmit(formData) {
    console.log("Form submitted with data:", formData);
     }

  return (
    <div>
      <h1>React Form Example</h1>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
