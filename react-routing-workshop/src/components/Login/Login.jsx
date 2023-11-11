import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export const Login = () => {
    const { loginHandler } = useContext(AuthContext);

    const formKeys = {
        email: "email",
        password: "password",
    };

    const { formValues, onChangeHandler, onSubmit } = useForm(
        {
            [formKeys["email"]]: "",
            [formKeys["password"]]: "",
        },
        loginHandler
    );
    //TODO: Client side form validations
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={formKeys.email}
                        placeholder="Sokka@gmail.com"
                        value={formValues.email}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={formKeys.password}
                        value={formValues.password}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        defaultValue="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click{" "}
                            <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
