import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// export default function About() {
//   return (
//     <>
//       <h3>About</h3>
//       {/* <User name={"Hammad - Functional"} location={"Pakistan"} /> */}
//       <UserClass name={"Hammad - Class"} location={"Pakistan"} />
//     </>
//   );
// }

export default class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }
  render() {
    console.log("Parent Render");

    return (
      <>
        <h3>About</h3>
        {/* <User name={"Hammad - Functional"} location={"Pakistan"} /> */}{" "}
        <UserClass
          name={"Hammad - Class"}
          location={"Pakistan"}
          child={"child1"}
        />
        <UserClass
          name={"Hammad - Class"}
          location={"Pakistan"}
          child={"child2"}
        />
      </>
    );
  }
}
