import React from "react"
import ReactDOM from "react-dom"
import { Header } from "./components/Header.js"
import Body from "./components/Body.js"

// Not using keys (not acceptable)   <<< index as key   <<<   unique id (best practice)

const AppLayout = () => {
    console.log('Body component: ', <Body/>)
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)
