const parent = React.createElement(
    "div",
    {
        id: "parent"
    },
    [React.createElement(
        "div",
        { id: "children" },
        [React.createElement("h1", {}, "I am H1 Tag"), React.createElement("h1", {}, "I am second H1 Tag")]
    ), React.createElement(
        "div",
        { id: "children2" },
        [React.createElement("h1", {}, "I am H1 Tag"), React.createElement("h1", {}, "I am second H1 Tag")]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);