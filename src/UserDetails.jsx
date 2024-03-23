import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    //dynamic vabe specif person er data receive kore
    const user = useLoaderData();

    const params = useParams();
    console.log(params);
    
    const {name} = user;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>User Detail</h1>
            <p>name: {name}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;