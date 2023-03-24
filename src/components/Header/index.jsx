import "./styles.css";
import { getItem, removeItem } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Header() {
const navigate = useNavigate();  
function logout() {
  removeItem("token");
  const token = getItem('token')
  if(!token) {
    setTimeout(()=>{
      navigate('/sign-in')
    },[1000])
  }
}

  return (
    <>

      <div className="container-header">
        <button className="btn-logout" onClick={()=>logout()}>Sair</button>
      </div>
            <div className="border-top-header"></div>
    </>
  );
}
