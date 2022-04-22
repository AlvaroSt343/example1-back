import { render } from "express/lib/response";
import react from "react";
import reactDom from "react-dom";
import { Component } from "react/cjs/react.production.min";
import { SSL_OP_PKCS1_CHECK_1 } from "constants";

class App extends Component {
    render(){
        return(
            <h1>aasasd</h1>
        )
    }
}

render(<App/>, document.getElementById('app'));