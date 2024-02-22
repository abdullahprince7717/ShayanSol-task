

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar(props) {

    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 lg:px-10 text-white bg-black'>
            <h1 className='w-full text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold '>Todo App</h1>
            <ul className='hidden sm:flex md:text-xl lg:text-2xl 2xl:text-3xl'>
                <a onClick={() => { props.changeHandler('Todo') }} className='p-4' href='#'>Todo</a>
                <a onClick={() => { props.changeHandler('SignIn') }} className='p-4' href='#'>SignIn</a>
                <a onClick={() => { props.changeHandler('SignUp') }} className='p-4' href='#'>SignUp</a>
            </ul>
            <div onClick={handleMenu} className="sm:hidden">
                {showMenu ? <IoMdClose size={20} /> : <GiHamburgerMenu size={20} />}
            </div>
            <div className={showMenu ? "fixed top-0 w-[60%] h-full ease-in-out duration-500 text-black sm:hidden" : "hidden"}>

                <ul className="flex flex-col pt-24 uppercase">
                    <a onClick={() => { props.changeHandler('Todo') }} className='p-4 border-b border-grey-500' href='#'>Todo</a>
                    <a onClick={() => { props.changeHandler('SignIn') }} className='p-4 border-b border-grey-500' href='#'>SignIn</a>
                    <a onClick={() => { props.changeHandler('SignUp') }} className='p-4 border-b border-grey-500' href='#'>SignUp</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar