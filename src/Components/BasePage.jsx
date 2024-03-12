import Background from "./Background";

export default function BasePage({children}){
    return(
        <div className="base-page-section">
            <Background>
            <div className="grid grid-cols-2 gap-4 text-center items-center h-screen">
            <div className="p-10">
                <b className="font-black text-xl">Inventory Management and Billing Application</b>
                <p>Inventory System to control and manage products in the warehouse in real time and integrated to make it easier to develop your business</p>

            </div>

            <div>

            <div className="card w-96 glass">
            <div className="card-body">
                
            <div className="join grid grid-cols-2">
            <button className="join-item btn btn-outline">Login</button>
            <button className="join-item btn btn-outline">Register</button>
            </div>
            {children}
            
            <div className="card-actions justify-end">
            </div>
            </div>
            </div>

            </div>

            </div>
            </Background>
        </div>
    )
}