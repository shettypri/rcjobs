import logo from "../assets/Logo/rc-jobs-test-logo.png"


const Navbar = () => {
    return ( 
       <nav className="w-full h-14 bg-slate-400 flex justify-between px-4 md:px-4 items-center">
        <div>
           <img className="h-12 w-25 cursor-pointer" src={logo} alt=""  />
        </div>
        <ul className={" hidden md:flex dspace-x-5 font-bold"}>
            <li className={"mx-[10px] cursor-pointer text-white"}>Login</li>
            <li className={"mx-[10px] cursor-pointer text-white"}>Dashboard</li>
            <li className={"mx-[10px] cursor-pointer text-white"}>Profile</li>
            <li className={"mx-[10px] cursor-pointer text-white"}>Logout</li>
        </ul>
           <div className={"md:hidden"}>
               <a className={"text-4xl"} href={"&"}>&#8801;
               </a>
           </div>
       </nav>
    )
}

export default Navbar