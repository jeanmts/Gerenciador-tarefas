import "./styles.css";
import backgroundSignUp from "../../assets/background-signUp.svg"
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { setItem,getItem, removeItem } from "../../utils/storage";


export default function SignUp() {
const [form, setForm] = useState([{ nome: '', email: '', senha: ''}]);
const [errorSignUp, setErrorSignUp]  = useState();
const navigate = useNavigate();    
function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {

            if(!form.nome || !form.email || !form.senha) {
                return
            }
            if(form.senha.length < 5) {
                passwordLength = "Senha deve conter pelo menos 5 caracteres"
            }
            const response = await api.post('/sign-up',{
                ...form            
            })
           setErrorSignUp(removeItem("errorSignUp"))
            navigate("/sign-in")
                
            } catch (error) {
                console.log(error.response.data.message)
                setItem("errorSignUp", error.response.data.message)
                setErrorSignUp(getItem("errorSignUp"))
            }
            console.log(errorSignUp)
    }
    return (
        <>
        <div className="container">
        <div className="border-top"></div>
        <div className="container-signUp">
            <form className="form-signUp" onSubmit={handleSubmit}>
                <label className="label-form" htmlFor='nome'>Nome</label>
                <input className="input-form" name='nome' type="text" value={form.name} onChange={handleChangeInput}></input>
                <label className="label-form" htmlFor='email'>E-mail</label>
                <input className="input-form" name='email' type="email" value={form.e_mail} onChange={handleChangeInput}></input>
                <label className="label-form" htmlFor='senha'>Senha</label>
                <input className="input-form" name='senha' type="password" value={form.password} onChange={handleChangeInput}></input>
                {errorSignUp ? <span className="span-erro">{errorSignUp}</span> : null  }
                <div className="container-button">
                    <button  className="btn-signUp">Cadastre-se</button>
                    <Link className="link-button" to={'/sign-in'}>Login</Link>
                </div>
            </form>
        <img className="img-background" src={backgroundSignUp} alt="background image" />
        </div>
        </div>
        </>
        
    )
}