import React from "react"
import ReactDOM from "react-dom"

//React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading1 = React.createElement("h1", {id: "heading"}, "Bavana Sriraksha")

console.log('Heading: ', heading1)

// JSX - Is not HTML in JS (HTML like or XML like syntax)

// JSX (transpiled before it reaches the JS engine) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const ele = <span> React element </span>

const heading = (
<h1 id="heading" > Heading using JSX {ele} </h1>
)

console.log('jsxHeading: ', heading)

// React Component
// Class Based Component - Old
// Functional Component - New

// React Functional Component

const TitleComponent = () => {
    return <h1> Bavana Sriraksha Title Functinal Component </h1>
}


// Component composition

const number = 1000

const HeadingComponent = () => (

    <div>
    <h2> {number} </h2>
    <h2> {100 + 200} </h2>
    <h2> {console.log('Test message')} </h2>
    <TitleComponent />
    <h1> Bavana Sriraksha Functinal Component </h1>
    {heading}
    {TitleComponent()}
    <TitleComponent> </TitleComponent>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading1)

// root.render(heading)

root.render(<HeadingComponent/>)

console.log('Heading value: ', heading)
