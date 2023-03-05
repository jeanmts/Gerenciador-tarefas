import "./styles.css";
import Header from "../../components/Header"
import tasks from "../../Data/tasks/index";
import iconEdit from "../../assets/iconEdit.svg"
import iconDelete from "../../assets/iconDelete.svg"




export default function Main() {
    return (
        <>
        <Header/>
        <div className="container-main">
                <form className="form-main">
                    <input className="input-main" type="text" />
                    <button className="btn-main">Adicionar</button>
                </form>
            <div className="container-tasks">
            {tasks.map((task)=>  {
                return (
                    <div className="task" key={task.id} >
                        <div className="task-name" >
                        <h3 className="title-task">{task.name}</h3>
                        </div>
                        <div className="container-options">
                            <div>
                            <img className="img-edit" src={iconEdit} alt="" />
                            </div>
                            <div>
                            <img className="img-delete" src={iconDelete} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        
        </>
    )
}