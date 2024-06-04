import { useNavigate } from "react-router-dom";

interface Category {
    name: string
    path: string
}


interface Functions {
    setOpen: Function
}


const NavCategories: React.FC<Functions> = ({ setOpen }) => {

    const navigate = useNavigate();

    const categories = [
        {
            name: "NEW IN",
            path: "/new-in",
        },
        {
            name: "DESIGNERS",
            path: "/designers",
        },
        {
            name: "WOMEN",
            path: "/women",
        },
        {
            name: "MEN",
            path: "/men",
        },
        {
            name: "KIDS",
            path: "/kids",
        }
    ]

    return (

        <div className="w-full py-5 flex flex-col text-gray-400 gap-y-6 text-lg">
            {
                categories.map((item: Category, index: number) => (
                    <button key={index} onClick={() => { navigate(item.path); setOpen(false) }}
                        className=" px-6 py-2 text-nowrap hover:text-black"
                    >{item.name}</button>
                ))
            }
        </div>

    )
}


export default NavCategories