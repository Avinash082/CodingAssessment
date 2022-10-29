import React from "react";

const Dashboard = () =>{
    const name= sessionStorage.getItem("Email")
    return(
        <div>
            <h1>Dashboard</h1>
            <h3>Welcome {name}</h3>
        </div>
    )
}

export default Dashboard;