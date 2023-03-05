import "./styles.css";
import backGroundLogin from "../../assets/background-login.svg";
import eyesClosed from "../../assets/eyesClosed.svg";
import eyesOpen from "../../assets/eyesOpen.svg";




export default function SignIn( ) {

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
    return (
        <>
        <div className="container-signIn">
            <div className="border-top"></div>
            <div className="container-sign">
            <div className="container-img">
                <img className="img-background" src={backGroundLogin}></img>
            </div>
            <div className="container-form">
                <form className="form">
                    <label className="label-form" htmlFor="email">Email</label>
                    <input className="input-form" type="email" name="email"  />
                    <label className="label-form" htmlFor="senha">Senha</label>
                    <input className="input-form inputPassword" type="password" name="senha" ></input>
                    <img onClick={()=>handleTypeInput()} className="img-input" src={eyesClosed} alt="eyes" />
                    <a  className="link-form" href="#">Cadastre-se</a>
                    <button className="button-form">Login</button>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}


