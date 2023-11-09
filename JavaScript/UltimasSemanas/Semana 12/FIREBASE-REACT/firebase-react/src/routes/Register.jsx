import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {

    const [email, setEmail] = useState("prueba@mail.com");
    const [password, setPassword] = useState("123456");

    const navigate = useNavigate();

    const { registerUser } = useContext(UserContext);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("procesando form: ", email, password);

        try{
            await registerUser(email, password);

            console.log("Usuario registrado");
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };




    return (
            <>
            <h1>Register</h1>
            <from onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </from>
            </>
            
        )
};

export default Register;