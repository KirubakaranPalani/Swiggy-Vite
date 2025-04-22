import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";
// Mounting -> updating -> unmounting
// Render cycle
// Constructor(Dummy) -> Render(Dummy) -> componentDidMount(ApiCall)(this.setState) -> 
// update cycle
// Render(ApiCall) -> Dom update -> componentDidUpdate
// React has render phase(constructor, render) and commit phase(update dom and componentDidMount)
// Simply react will batch render phase <dom update> and commit phase batch

class AboutUs extends React.Component{
    constructor (props) {
        super(props)
        console.log("Parent Constructor",props);
    }
    render(){
        // console.log("Parent render")
        return (
            <div>
            <h1>AboutUs</h1>
            <h2>This is about us page</h2>
            <User name="Kirubakaran (Function)" location= "Vellore, TamilNadu (Function)"/>
            <UserClass />
            </div>
        );
    }
}

export default AboutUs;