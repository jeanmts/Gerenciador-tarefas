import "./styles.css";
import backGroundNotFound from "../../assets/page-404.svg";


export default function NotFound() {
    return(
        <>
        <div className="border-top"></div>
        <div className="container-404">
            <h1 className="title-404">Page Not Found</h1>
            <img className="image-404" src={backGroundNotFound} alt="" />
        </div>
        </>
    )
}