import { useContext } from "react";
import { DataContext } from "../App";

export default function ComponentC () {
    const data = useContext(DataContext);    
    return (
        <div>
            {data.loggedIn && <h3>The user is: {data.username}</h3>}
            <button onClick={() => data.setLoggedIn(true)}>Log In</button>
        </div>
    )
}