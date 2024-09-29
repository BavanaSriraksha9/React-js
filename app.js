// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(heading);
// console.log("Heading: ", heading);

{/* <div id="parent">
    <div id="child">
        <h1> I am h1 tag </h1>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
    [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]
    ),
    React.createElement("div", { id: "child1" },
    [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]
    )]
);

console.log("Parent: ", parent);
root.render(parent);