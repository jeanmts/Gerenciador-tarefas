import "./styles.css";
import backgroundSignUp from "../../assets/background-signUp.svg"


export default function SignUp() {
    return (
        <>
        <div className="border-top"></div>
        <div className="container-signUp">
        <div>
            <form className="form-signUp">
                <label className="label-form" htmlFor="email">E-mail</label>
                <input className="input-form" name="email" type="e-mail" />
                <label className="label-form" htmlFor="password">Senha</label>
                <input className="input-form" name="password" type="password" />    
                <label className="label-form" htmlFor="password">Confirme Sua Senha</label>
                <input className="input-form" name="password" type="password" /> 
                <div className="container-button">
                    <button className="btn-signUp">Cadastre-se</button>
                    <a className="link-button" href="">Login</a>
                </div>
            </form>
        </div>
        <img src={backgroundSignUp} alt="background image" />
        </div>
        
        </>
    )
}