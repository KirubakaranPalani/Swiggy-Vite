import "./User.css";
import { useEffect, useState } from "react";

const User = (props) => {
    const[count] = useState(0);
    const { name } = props

    // this return type in useEffect will work as componentWillUnMount in Functional component
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer for 1 second")
        }, 1000);
        return (() => {
            clearInterval(timer);
            console.log("UseEffect Return");
        })
    }, [])
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            {/* <h2>Location: {location}</h2> */}
            <h2>Contact: 915793550</h2>
        </div>
    )
}

export default User;