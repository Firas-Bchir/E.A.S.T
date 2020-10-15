import React from "react"
import ReactDOM from "react-dom"
import Home from "./components/home.jsx"
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
      return <Home/>
      

    }
  }

ReactDOM.render( <App/>,document.getElementById('app')
);