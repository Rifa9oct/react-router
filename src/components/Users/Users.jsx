import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="text-xl font-bold">
            <h2>Our Users: {users.length}</h2>
            <p className="my-6">Know about users information !!</p>
            <div className="grid grid-cols-3 gap-6">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
                
            </div>
        </div>
    );
};

export default Users;