import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const navigate = useNavigate();
    const handleShowDetails = () =>{
        navigate(`/user/${id}`);
    }
    return (
        <div className="p-10 rounded-lg bg-yellow-200">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <div className='mt-4'>
                {/* option-1 */}
                <Link className='text-red-600' to={`/user/${id}`}>Show Details</Link>

                {/* option-2 */}
                <Link className='bg-blue-500 px-5 py-2 rounded mx-3 text-white' to={`/user/${id}`}>
                    <button>Click Me</button>
                </Link>

                {/* option-3 */}
                <button className='bg-blue-500 px-5 py-2 rounded mx-3 mt-5 text-white' onClick={handleShowDetails}>Click to see details</button>
            </div>
        </div>
    );
};

User.propTypes ={
    user: PropTypes.object
}
export default User;