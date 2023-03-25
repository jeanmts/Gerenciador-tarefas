import "./styles.css";
import backGroundLogin from "../../assets/background-login.svg";
import eyesClosed from "../../assets/eyesClosed.svg";
import eyesOpen from "../../assets/eyesOpen.svg";
import { Link } from "react-router-dom";
import api from "../../services/api"
import { useState, useEffect } from "react";
import {getItem, removeItem, setItem} from "../../utils/storage"
import {useNavigate} from "react-router-dom"

export default function SignIn( ) {
    const navigate = useNavigate();
    const [errorSignIn, setErrorSignIn]  = useState();

useEffect(()=> {
const token = getItem('token');
    if(token) {
        navigate('/main')
    }

},[])

const [form, setForm] = useState({email: "", senha:""})
function handleTypeInput() {
    const passWordInput = document.querySelector(".inputPassword");
    const imgInput = document.querySelector(".img-input");

    if (passWordInput.type == "password") {
        passWordInput.type = "text";
        imgInput.setAttribute("src", eyesOpen)
    } else {
        passWordInput.type = "password";
        imgInput.setAttribute("src", eyesClosed)
    }
}
function handleInputValue(e) {
setForm({...form, [e.target.name]: e.target.value})
}
async function handleSubmit(e) {
    e.preventDefault()
try {
        if(!form.email || !form.senha) {
            return
        }

        const response= await api.post('/sign-in', {
           ...form
        })
        const {token} = response.data 
        setItem("token", token)
            navigate("/main")
            setErrorSignIn(removeItem('erroSignIn'))
    } catch (error) {
        console.log(error.response.data.message)
        setItem("erroSignIn", error.response.data.message)
        setErrorSignIn(getItem("erroSignIn"))
    }
}

    return (
        <>
            <div className="border-top"></div>
            <div className="container-sign">
                <div className="sign">
                <img className="img-background" src={backGroundLogin}></img>
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <label className="label-form" htmlFor="email">Email</label>
                    <input className="input-form" name='email' type="email" value={form.email} onChange={handleInputValue}></input>
                    <label className="label-form" htmlFor="senha">Senha</label>
                    <input className="input-form inputPassword" type="password" name="senha" value={form.senha} onChange={handleInputValue}></input>
                    <img onClick={()=>handleTypeInput()} className="img-input" src={eyesClosed} alt="eyes" />
                {errorSignIn ? <span className="span-erro">{errorSignIn}</span> : null  }
                    <Link type="button" className="link-form" to={'/sign-up'}>Cadastre-se</Link>
                    <button className="button-form">Login</button>
                </form>
            </div>
                </div>
            </div>
        </>
    )
}


