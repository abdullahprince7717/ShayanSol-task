import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function Todo() {
    const user = useSelector((state) => state.user);
    const [isUpdateModeOn, setIsUpdateModeOn] = useState(false);
    const [updateId, setUpdateId] = useState("");
    const [todo, setTodo] = useState({
        title: "",
        body: "",

    });
    const [todoList, setTodoList] = useState([]);
    const handleInputChange = (field, value) => {
        setTodo((prevUserInfo) => ({
            ...prevUserInfo,
            [field]: value,
        }));
    };

    const createTodo = async () => {
        await axios
            .post("http://localhost:3000/todo/create", { ...todo, id: user.user._id })
            .then(() => {
                alert("Todo Created successfully");
                setTodo({
                    title: "",
                    body: "",
                });
                getTodo();
                console.log(user)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getTodo = async () => {
        await axios
            .post("http://localhost:3000/todo/get", { id: user?.user?._id })
            .then((res) => {
                console.log("res", res)
                setTodoList(res.data.response)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateTodo = async (id) => {
        await axios
            .put("http://localhost:3000/todo/update", { ...todo, id: id })
            .then((res) => {
                console.log("res", res)
                alert("Todo Updated successfully");
                getTodo();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteTodo = async (todoId) => {
        await axios
            .delete("http://localhost:3000/todo/delete", { id: user.user._id, todoId })
            .then((res) => {
                console.log("res", res)
                alert("Todo deleted successfully");
                getTodo();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateMode = (title, body, todoId) => {
        setTodo({
            title: title,
            body: body,
        });
        setUpdateId(todoId);
        setIsUpdateModeOn(true);

    }

    useEffect(() => {
        getTodo()
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow sm:w-1/3">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <input type="text" placeholder="Title"
                    className="relative w-full px-2 py-3 my-2 border rounded outline-none border-grey-600"
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    value={todo.title}
                />

                <input type="text" placeholder="Body"
                    className="relative w-full px-2 py-3 my-2 border rounded outline-none border-grey-600"
                    onChange={(e) => handleInputChange('body', e.target.value)}
                    value={todo.body}
                />
                <button onClick={() => { isUpdateModeOn ? updateTodo(updateId) : createTodo() }} className="relative w-full text-white px-4 py-2 text-md bg-purple-600">{isUpdateModeOn ? <span>Update Todo</span> : <span>Create Todo</span>}</button>
                <ul className="">{console.log("todoList", todoList)}
                    {todoList?.map((value, index) => (
                        <li className="relative flex items-center justify-between px-2 py-6 border-b" key={index}>
                            <div className="flex flex-col">
                                <p className="inline-block mt-1 text-gray-600"><b>Title:</b> {value.title}</p>
                                <p className="inline-block mt-1 text-gray-600"><b>Body:</b> {value.body}</p>
                            </div>
                            <div className="absolute right-0 flex items-center">
                                <MdDeleteOutline onClick={() => { deleteTodo(value._id) }} size={20} />
                                <FaRegEdit onClick={() => { updateMode(value.title, value.body, value._id) }} size={20} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo