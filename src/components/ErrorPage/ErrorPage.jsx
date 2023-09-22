import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);   // can see what's the error you get.
    return ( 
        <div className="flex items-center justify-center h-screen">
            <div className="">
                <h2 className="text-5xl font-bold text-red-500">Opps!!!</h2>
                <p className="mt-12 font-bold text-2xl">{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div className="text-xl mt-5">
                        <h3>Page not found</h3>
                        <p>Go back where you from</p>
                        <Link to="/"><button className="bg-blue-500 px-5 py-2 rounded mx-3 mt-5 text-white font bold">Home</button></Link>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default ErrorPage;