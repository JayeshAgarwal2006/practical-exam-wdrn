import React from "react";

function FunctionUsers(props) {

const callUser = (name, phone) => {
alert("Calling " + name + " by dialling " + phone);
};

return (
<div>

<h2>Function Component Users</h2>

{props.users.map(user => (

<div key={user.id}>

<p>Name: {user.name}</p>
<p>Email: {user.email}</p>
<p>Phone: {user.phone}</p>
<p>Address: {user.address}</p>


<button onClick={() => callUser(user.name,user.phone)}>
Call
</button>


<hr/>

</div>

))}

</div>
);

}

export default FunctionUsers;