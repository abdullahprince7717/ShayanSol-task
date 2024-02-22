import { useState } from 'react';
import Navbar from './Navbar'
import SignUp from './SignUp';
import SignIn from './SignIn';
import Todo from './Todo';

function Home() {
    const [currentComponent, setCurrentComponent] = useState('Todo');

    const changeHandler = (component, info) => {
        setCurrentComponent(component)
        setProfileInfo(info)
    }
    return (
        <div className='h-screen w-screen'>
            <Navbar changeHandler={changeHandler} />

            {currentComponent == 'SignUp' ? <SignUp changeHandler={changeHandler} /> : currentComponent == 'SignIn' ? <SignIn changeHandler={changeHandler} /> : <Todo />}

        </div>
    )
}

export default Home