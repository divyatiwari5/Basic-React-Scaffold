import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {environment: '', heading: ''}
    }
    componentDidMount() {
        this.setState({ environment: process.env.NODE_ENV }, () => {
            if(this.state.environment === 'development') {
                this.setState({heading: 'The app is running in development mode.'})
            } else if(this.state.environment === 'production') {
                this.setState({heading: 'The app is currently running in production.'})
            }
        })
    }
    render() {
        return (
            <div className={`heading ${this.state.environment === 'development' ? 'dev-bg' : 'prod-bg'}`}>
                <h1>{this.state.heading}</h1>
            </div>
        )
    }
}

export default Header