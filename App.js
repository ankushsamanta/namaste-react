
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"}, [React.createElement(
        "h1", {}, "I am Ankush Samanta"),React.createElement(
        "h2", {}, "I am Ankush Samanta")])
);





const heading = React.createElement(
    "h1",
    {id:"heading"},
    "hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);