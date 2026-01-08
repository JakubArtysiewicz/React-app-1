import {Children} from "react";

const modal = ({ children, isActiveModal, setActiveModal}) => {
    return isActiveModal && (
        <div className="flex justify-center items-center absolute inset-0 bg-black bg-opacity-20 z-10 flex-col ">
            {children}
            <button type={"button"} onClick={()=>setActiveModal(false)}>
                Close
            </button>
        </div>
    )
}

export default modal