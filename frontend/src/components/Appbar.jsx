import { useNavigate } from "react-router-dom"
import axios from 'axios'
export const Appbar = () => {
    const navigate=useNavigate();
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 text-blue-700">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-blue-700">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-blue-700">
                    <button onClick={async()=>{
                     
                     try{
                        await axios.post('http://localhost:3000/api/v1/user/black', {
                            token : localStorage.getItem('token'),
                        });
                     }
                     catch(e){
                          console.log(e);
                     }
                     localStorage.clear();
                       navigate('/signin');
                    }}>{localStorage.getItem('firstName')[0].toUpperCase()}</button>
                </div>
            </div>
        </div>
    </div>
}