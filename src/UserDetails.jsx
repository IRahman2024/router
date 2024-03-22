import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    //dynamic vabe specif person er data receive kore
    const user = useLoaderData();
    
    const {name} = user;
    
    return (
        <div>
            <h1>User Detail</h1>
            <p>name: {name}</p>
        </div>
    );
};

export default UserDetails;