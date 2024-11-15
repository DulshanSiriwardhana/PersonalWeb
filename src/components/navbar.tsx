import { useNavigate } from "react-router-dom";

export const NavBar=()=>{
    const navigate = useNavigate();

    const handleLinkClick=(path: string)=>{
        navigate(path);
    }

    return(
        <div className="h-10 font-ptReg shadow-sm fixed w-full">
            <div className="w-full h-full backdrop-opacity-90 bg-dark backdrop-blur-xl text-light">
            <div className="py-2 px-6 h-full flex justify-between items-center">
                <div onClick={()=>handleLinkClick('/')} className="cursor-pointer hover:text-secondary">Dulshan</div>
                <div className="flex items-center justify-between gap-4">
                    <div onClick={()=>handleLinkClick('/projects')} className="cursor-pointer hover:text-secondary">Projects</div>
                    <div onClick={()=>handleLinkClick('/articles')} className="cursor-pointer hover:text-secondary">Articles</div>
                    <div onClick={()=>handleLinkClick('/services')} className="cursor-pointer hover:text-secondary">Services</div>
                    <div onClick={()=>handleLinkClick('/about')} className="cursor-pointer hover:text-secondary">About</div>
                </div>
            </div>
            </div>
        </div>
    )
}