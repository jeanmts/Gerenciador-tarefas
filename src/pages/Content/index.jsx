import "./styles.css";
import Header from "../../components/Header"
import iconEdit from "../../assets/iconEdit.svg"
import iconDelete from "../../assets/iconDelete.svg"
import api from "../../services/api";
import { useEffect, useState } from "react";
import {getItem, removeItem, setItem} from '../../utils/storage'

export default function Content() {
    const [tasks,setTasks] =useState([])
    const [form,setForm] = useState({tarefa:''})
    const [errorContent, setErrorContent] = useState()

async function loadTasks() {
    try {
        const token = getItem('token')
        const {data} = await api.get('/main', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setTasks(data)
    } catch (error) {
        console.log(error)
    }
   
}
useEffect(()=>{
    loadTasks();
},[])
function handleInputValue(e) {
setForm({...form, [e.target.name]: e.target.value})
}

async function handleSubmit(e){
    e.preventDefault
    try {
        if(!form.tarefa) {
            return
        }
        const token = getItem('token')
        const response = await api.post('/main',{...form},{ headers: {
            Authorization: `Bearer ${token}`
        }})
        setErrorContent(removeItem("errorContent"))
        await loadTasks()
     } catch (error) {
        console.log(error.response.data.message)
        setItem("errorContent", error.response.data.message)
        setErrorContent(getItem("errorContent"))
    }
}
async function deleteTasks(id) {
    try {
        const token = getItem('token')
        const response = await api.delete(`/main/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(!response.data) {
            return
        }
        setErrorContent(removeItem("errorContent"))
        await loadTasks()
    } catch (error) {
        console.log(error.response.data.message)
        setItem("errorContent", error.response.data.message)
        setErrorContent(getItem("errorContent"))
    }
}


    return (
        <>
        <Header/>
        <div className="container-main">
                <form className="form-main" onSubmit={handleSubmit}>
                    <input className="input-main" type="text" name="tarefa" value={form.tarefa}  onChange={handleInputValue}/>
                    <button className="btn-main">Adicionar</button>
                </form>
                {errorContent ? <span className="span-erro">{errorSignIn}</span> : null  }
            <div className="container-tasks">
            {tasks.map((task)=>  {
                return (
                    <div className="task" key={task.id} >
                        <div className="task-name" >
                        <h3 className="title-task">{task.tarefa}</h3>
                        </div>
                        <div className="container-options">
                            <div>
                            <img onClick={()=>deleteTasks(task.id)} className="img-delete" src={iconDelete} alt="" />
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