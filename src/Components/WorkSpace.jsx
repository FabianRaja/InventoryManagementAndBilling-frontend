export default function WorkSpace({children}){
    return(
        <div className="workspace-section h-screen background-set " >
          
    <div className="navbar glass shadow-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-black">DASHBOARD</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>console.log("working")} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item " >8</span>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end z-40 ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1710230092~exp=1710230692~hmac=e122b0db47a534e41b1d5ac3ceb5034830b4dd8e4556009f1788e838ed980305" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-40 mt-3 z-[1] p-4 shadow rounded-box w-52 skeleton font-bold border border-neutral">
        <li><a>Add Product</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div> 
</div><hr/>
 {children}
        </div>
    )
}