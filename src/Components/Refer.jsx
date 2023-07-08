import {useNavigate, useParams} from "react-router-dom";


const Refer = () => {
    const navigate = useNavigate()
    const params = useParams()
    const refferalLink = params.refer
    sessionStorage.setItem("referCode", refferalLink)
    const goToLogin = () => {
        console.log(refferalLink)
        navigate("/")
    }


    return (
        <div >
            just wait and watch
            <button onClick={goToLogin}
            className="border border-black">
                Go to the login page
            </button>
        </div>


    )
}

export default Refer