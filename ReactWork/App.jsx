const parent = document.getElementById("parent")
// console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{
    backgroundColor:"red",
    color:"white",
    textAlign:"center"
}}, "ABES Enginnering College");

const li1 = React.createElement("li",{},"Java Programming");
const li2 = React.createElement("li",{},"Python Programming");
const li3 = React.createElement("li",{},"C++ Programming");
const ul = React.createElement("ul", {style:{
    backgroundColor:"yellow",
    color:"black"


}}, li1,li2,li3);

const pi = React.createElement("img",{src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80", style:{
    width:250,
    height:250,
    borderRadius:"50%"

}} )

const name = React.createElement("h4",{},"Abhinav Vishwakarma")
const wrap = React.createElement("div",{style:{
    display:"flex",
    flexDirection:"row",
    gap:25,
    fontSize:50
}},pi,name);
const wrapper = React.createElement("div",{},h2,wrap, ul);

root.render(wrapper);