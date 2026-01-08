import { useState } from "react";
export default function User({ name, location }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <div className="user-card">
        <h2> {name} </h2>
        <h3> {location} </h3>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <h4> Twitter: mhammadsaani</h4>
      </div>
      <hr />
    </>
  );
}
