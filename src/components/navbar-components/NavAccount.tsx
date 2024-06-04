import { useNavigate } from "react-router-dom";

interface UserAction {
    name: string
    path: string
}

interface Functions {
    setOpen: Function
}

const NavAccount: React.FC<Functions> = ({ setOpen }) => {

    const navigate = useNavigate();

    const userActions = [
        {
            name: "Account Details",
            path: "/account-details",
        },
        {
            name: "Order History",
            path: "/order-history",
        },
        {
            name: "Payments",
            path: "/payments",
        },
        {
            name: "Edit Password",
            path: "/edit-password",
        }
    ]

    return (

        <div className="w-full py-5 flex flex-col text-gray-400 gap-y-6 text-lg">
            {
                userActions.map((item: UserAction, index: number) => (
                    <button key={index} onClick={() => { navigate(item.path); setOpen(false) }}
                        className=" px-6 py-2 text-nowrap hover:text-black"
                    >{item.name}</button>
                ))
            }
        </div>

    )
}


export default NavAccount