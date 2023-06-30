import logo from "../assets/Logo/rc-jobs-test-logo.png"


const Navbar = () => {
    return ( 
       <nav className="w-full h-14 bg-white flex justify-between px-4 md:px-4 items-center">
        <div>
           <img className="h-12 w-25 " src={logo} alt="" />
        </div>
        <ul className={" hidden md:flex dspace-x-5 font-bold"}>
            <li className={"mx-[10px] cursor-pointer"}>Login</li>
            <li className={"mx-[10px] cursor-pointer"}>Dashboard</li>
            <li className={"mx-[10px] cursor-pointer"}>Profile</li>
            <li className={"mx-[10px] cursor-pointer"}>Logout</li>
        </ul>
           <div className={"md:hidden"}>
               <a className={"text-4xl"} href={"&"}>&#8801;
               </a>
           </div>
       </nav>
    )
}

export default Navbar