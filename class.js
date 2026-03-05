import React, { Component } from "react";

class ClassUsers extends Component {

callUser = (name, phone) => {
alert("Calling " + name + " by dialling " + phone);
};

render() {
return (
<div>
<h2>Class Component Users</h2>

{this.props.users.map(user => (
<div key={user.id}>
<p>Name: {user.name}</p>
<p>Email: {user.email}</p>
<p>Phone: {user.phone}</p>
<p>Address: {user.address}</p>

<button onClick={() => this.callUser(user.name,user.phone)}>
Call
</button>

<hr/>
</div>
))}

</div>
);
}
}

export default ClassUsers;  