/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userActions';
function SignIn(props) {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",

    });
    const handleInputChange = (field, value) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [field]: value,
        }));
    };
    const SignIn = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:3000/auth/signIn", userInfo)
            .then((response) => {
                alert("User signed In successfully");
                dispatch(setUser(response.data.response));
                setUserInfo({
                    email: "",
                    password: "",
                });
                setUser(userInfo);
                props.changeHandler('Todo');

            })
            .catch((error) => {
                console.log("error", error);
                alert("error", error);
            });
    };
    return (

        <div className="min-w-20 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-5">Sign In</h1>

            <form className="">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input
                        type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        value={userInfo.email}
                        placeholder="name123"
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input
                        type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        value={userInfo.password}
                        placeholder="name123"
                    />
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={SignIn}>SignIn</button>
            </form>
        </div>

    )
}

export default SignIn