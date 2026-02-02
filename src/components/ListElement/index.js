import {useEffect, useState} from "react";
import modal from "../modal";
import Modal from "../modal";

const ListElement = ({element}) => {

    const [isDone, setIsDone] = useState(element.isDone)

    const [isActiveDescription, setActiveDescription] = useState(false)

    const [isActiveModal, setActiveModal] = useState(false)

    const [error, setError] = useState("");

    const [title, setTitle] = useState(element.title);

    const [description, setDescription] = useState(element.description);


    console.log(title)

    console.log(isActiveDescription)

    useEffect(() => {setIsDone(false)},[]) // <== Hook

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) {
            setError("Wszystkie pola wymagane");
            return;
        }

        setError("");
        setActiveModal(false);
    };

    return (
        <>
        <li key={element.id} className=" bg-amber-950 text-white m-2 pr-8 h-20 flex flex-row rounded-xl shadow-xl">
        <input className="m-2" type={"checkbox"} checked={isDone} onChange={() => setIsDone(!isDone)} />
            <div className="flex flex-row">

            <h2 className="p-7"
                onClick={()=> setActiveDescription(!isActiveDescription)}
            >
                {title}
            
            </h2>
                { isActiveDescription && (<a className="p-7">{description}</a>
                )}

    </div>

    <time dateTime={element.date} className="absolute right-7 p-2"> {element.date} </time>

    <button type={"button"} onClick={()=>setActiveModal(true)}>
        edit
    </button>

            <button type={"submit"} className="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-trash" viewBox="0 0 16 16">
            <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
    </button>
    </li>
            <Modal isActiveModal={isActiveModal} setActiveModal={setActiveModal}>

                {error &&
                    (<div className="bg-red-100 text-red-600 p-2 rounded mb-3 text-center">
                        {error}
                    </div>)
                }

                <label>Tytuł</label>
                <input className={"text-black text-center"}
                    type="text"
                    value = {title}
                       onChange = {(event)=> {
                           setTitle(event.target.value);
                           setError("");
                }}
                />
                <label>Notatka</label>
                <input className={"text-black text-center"}
                       type="text"
                       value={description}
                            onChange = {(event)=> {
                                setDescription(event.target.value);
                                setError("");
                            }}
                />
                <button onClick={handleSubmit}>save</button>
            </Modal>
        </>
    )
}
export default ListElement;