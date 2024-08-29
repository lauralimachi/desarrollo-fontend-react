import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import {motion} from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalLogout from "../../components/ModalLogout";
import { useState } from "react";


const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
         event.preventDefault();
         console.log(values);
         if(values.password === "mod7ReactUSIP"){
             dispatch(saveFormData(values));
         }
         else{
             setShowModalInfo(true);
         }
        
     }

    const hideModalInfo =() =>{
        setShowModalInfo(false);
    }
    const hideModalLogout =() =>{
        setShowModalLogout(false);
    }
    const openModalLogout = (event) =>{
        event.preventDefault();
        setShowModalLogout(true);
    }

    const resetData = (event) => {
        event.preventDefault();
        resetForm();
        dispatch(saveFormData({ username: '', email: '', password: ''}));
        hideModalLogout();

       
    }

    const hidePassword =(event) =>{
        event.preventDefault();
        console.log(showPassword);
        const value = showPassword;
        setShowPassword(!value);
    }

    return (

        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
        <ModalInfo 
            visible={showModalInfo} 
            message="Password Incorrecto"
            onClose={hideModalInfo}
        />
        <ModalLogout 
            visible={showModalLogout} 
            message="¡Estás seguro de que quiere cerrar sesión?"
            onClose={hideModalLogout}
            action={resetData}
        />
        <div className = "container">
           
            <form>
                <h2>Login Form</h2>
                <h5>username: {form.formData.username}</h5>
              
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? "text": "password"}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button onClick={hidePassword}>{showPassword ? "Hide": "Show"}</button>
                </div>
                <div className="button-container">
                    <button onClick={handleSubmit}>Submit</button>
                    <p className="enlace" onClick={openModalLogout}> Logout</p>
                </div>
                

            </form>
        </div>
        </motion.div>
    );
};

export default LoginForm;