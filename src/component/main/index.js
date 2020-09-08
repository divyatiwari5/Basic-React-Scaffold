import React from "react";
import "./main.scss"
import { getCategory } from "./../../content-server/index";

class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('Calling Categories API..')
        getCategory().then((resp) => {
            console.log(resp);
        }).catch((error) => {
            console.log("Error: ", error);
        })
    }

    render() {
        return(
            <div className="main">
                <h1>This is a main Component text!</h1>
            </div>
        )
    }
}

export default Main