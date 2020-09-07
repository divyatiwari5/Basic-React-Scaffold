import React from "react";
import './app.scss';
import Header from "./component/header";
import Main from "./component/main/index";

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default App;