import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                        className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <ul className="list-reset">
                    <li className="relative flex items-center justify-between px-2 py-6 border-b">
                        <div>
                            <input type="checkbox" className="" />
                            <p className="inline-block mt-1 text-gray-600">asdadas</p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center">
                            <MdDeleteOutline size={20} />
                            <FaRegEdit size={20} />
                        </button>
                    </li>
                    <li className="relative flex items-center justify-between px-2 py-6 border-b">
                        <div>
                            <input type="checkbox" className="" />
                            <p className="inline-block mt-1 text-gray-600 line-through">asdadsadsad</p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center">
                            <MdDeleteOutline size={20} />
                            <FaRegEdit size={20} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Todo