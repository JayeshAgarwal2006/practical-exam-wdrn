import React from "react";
import ClassUsers from "./class";
import FunctionUsers from "./fusers";

function App() {

const users = [
{ id:1, name:"Rahul", email:"rahul@gmail.com", phone:"9876543210", address:"Delhi"},
{ id:2, name:"namra", email:"namra23@gmail.com", phone:"8734321456", address:"Mumbai"},
{ id:3, name:"sahil", email:"sahil123@gmail.com", phone:"7654321098", address:"Delhi"},
{ id:4, name:"priya", email:"priya64@gmail.com", phone:"6324865432", address: "ahmedabad"},
{ id:5, name:"sneha", email:"sneha23@gmail.com", phone:"9876543210", address:"delhi"},
{ id:6, name:"rohit", email:"rohit44@gmail.com", phone:"9876543210", address:"delhi"},
{ id:7, name:"suman", email:"suman45@gmail.com", phone:"9876543210", address:"delhi"},
{ id:8, name:"priyanka", email:"priyanka53@gmail.com", phone:"9876543210", address:"delhi"},
{ id:9, name:"himesh", email:"himesh21@gmail.com", phone:"9876543210", address:"delhi"},
{ id:10, name:"satyam", email:"satyam43@gmail.com", phone:"9876543210", address:"delhi"}
];
return (
<div>
<h1>User List</h1>

<ClassUsers users={users.slice(0,5)} />

<FunctionUsers users={users.slice(5,10)} />

</div>
);

}

export default App;