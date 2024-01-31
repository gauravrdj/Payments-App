import { useNavigate } from "react-router-dom";
export function Startingpage(){
    const navigate=useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
        <div className="text-center p-10 bg-slate-100 shadow-lg rounded-md">
          <h1 className="text-4xl mb-4 text-gray-800">Welcome to Gaurav's PayTM</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your trusted platform for secure and seamless transactions.
          </p>
          <button onClick={()=>{
               navigate('/signup');
          }} className="bg-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition duration-300 focus:outline-none">
            Start Transaction
          </button>
        </div>
      </div>
    );
}