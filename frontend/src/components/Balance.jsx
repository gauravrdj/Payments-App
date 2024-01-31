
export const Balance = ({ value, balance}) => {
    
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-semibold ml-4 text-lg text-purple-900">
            Rs {balance.toFixed(2)} 
        </div>
    </div>
}