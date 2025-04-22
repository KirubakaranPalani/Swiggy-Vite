import React from "react";
import "./User.css";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 1,
            userInfo: {
                name: "Name",
                created_at: "time",
                avatar_url: "avatar_url"
            }
        }
        console.log("Child constructor",props);
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/KirubakaranPalani");
        const json = await data.json();
        this.setState(
            {
                userInfo: json,
            }
        )
        console.log(json);
    }
    render() {
        const { count, count2} = this.state;
        const { name, created_at, avatar_url } = this.state.userInfo;
        // console.log("Child render")
        // debugger;
        return (
            <div className="user-card">
                <h1>Count= {count}</h1>
                <button onClick={() => {
                    this.setState(
                        {
                            count: this.state.count +1,
                        }
                    )
                }}>Count Increase</button>
                <h1>Count2= {count2}</h1>
                <h2>Name: {name}</h2>
                <h2>Created At: {created_at}</h2>
                <h2>img: <img src={avatar_url} alt="profile pic"/></h2>
            </div>
        );
    }
}

export default UserClass;