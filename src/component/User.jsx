import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    console.log(user);
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '10px',
        padding: '20px',
        margin: '25px'
    }
    return (
        <div style={userStyle}>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            {/* etar mane id dynamic vabe id onujayi link banay */}
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;