import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();   //load data from API
    const navigate = useNavigate(); //clik or something action happen then it will help to go another route.

    // const params = useParams();  
    const {userId} = useParams();
    console.log(userId);

    const handleGoBack = () =>{
        navigate(-1);
    }
    const {name, website} = user;
    console.log(name, website);
    return ( 
        <div>
            <div className="text-2xl font-medium border-4 rounded border-yellow-500 w-[500px] mx-auto p-5">
                <h2><span className="text-blue-500">Details about user:</span> {name}</h2>
                <p><span className="text-blue-500">Website:</span> {website}</p>
            </div>
            <button className='font-bold bg-blue-500 px-5 py-2 rounded mx-3 mt-5 text-white' onClick={handleGoBack}>Go Back</button>
        </div>
     );
}
 
export default UserDetails;