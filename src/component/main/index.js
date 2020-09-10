import React from "react";
import "./main.scss"
import { getCategory } from "./../../content-server/index";

class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    // On mounting, an async function is called  (showcased polyfill feature)
    componentDidMount() {
        console.log('Calling async function..')
        this.handleGetCategory();
    }

    // async function to call categories API
    async handleGetCategory() {
        let response;
        try {
            response = await getCategory();
        } catch(ex) {
            console.log('Error occured:', ex); 
        }

        response.json().then((result) => {
            console.log('Categories:', result)
        }).catch((error) => {
            console.log(error);
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