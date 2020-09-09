import React, {lazy, Suspense} from "react";
import './app.scss';
import Header from "./component/header";
const Main = lazy(() => import ("./component/main/index"));

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Header/>
                <Suspense fallback={<div className="main">Loading Main component....</div>}>
                    <Main/>
                </Suspense>
            </div>
        )
    }
}

export default App;