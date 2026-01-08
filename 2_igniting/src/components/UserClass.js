import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        count: "Dummy",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.child + " Did Mount");
    const data = await fetch("https://api.github.com/users/mhammadsaani");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log(this.props.child + "Component Did Update");
  }

  render() {
    const { name, followers, username, avatar_url } = this.state.userInfo;
    console.log("Child Render");
    console.log(this.state.userInfo);

    return (
      <>
        <div className="user-card">
          <img className="avatar" src={avatar_url} />
          <h2 className="bg-red-900">{name} </h2>
          <h2> Count: {followers} </h2>
          <h3> {"location"} </h3>
          <h4> Twitter: {username}</h4>
        </div>
        <hr />
      </>
    );
  }
}

export default UserClass;
