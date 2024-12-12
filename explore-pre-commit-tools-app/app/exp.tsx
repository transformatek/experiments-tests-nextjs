import React from "react";

const ExampleComponent = () => {
  return (
    <div>
      <h1> Example Component </h1>

      <p> This is an example component with issues. </p>
    </div>
  );
};

export default ExampleComponent;

// ESLint Problems:
// 1. 'unusedVariable' is defined but never used.
// 2. Extra spaces inside tags (e.g., `<h1> Example Component </h1>`).
// 3. Missing accessibility features such as `aria-label` for accessibility compliance.
