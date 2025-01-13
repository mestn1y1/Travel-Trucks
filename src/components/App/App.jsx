import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
