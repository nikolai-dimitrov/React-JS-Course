import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
export const Register = () => {
    const { registerHandler } = useContext(AuthContext);
    const formKeys = {
        email: "email",
        password: "password",
        confirmPassword: "confirmPassword",
    };

    const { formValues, onChangeHandler, onSubmit } = useForm(
        {
            [formKeys["email"]]: "",
            [formKeys["password"]]: "",
            [formKeys["confirmPassword"]]: "",
        },
        registerHandler
    );
    //TODO: Client side form validations
    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={formKeys["email"]}
                        placeholder="maria@email.com"
                        onChange={onChangeHandler}
                        value={formValues.email}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name={formKeys["password"]}
                        id="register-password"
                        onChange={onChangeHandler}
                        value={formValues.password}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name={formKeys["confirmPassword"]}
                        id="confirm-password"
                        onChange={onChangeHandler}
                        value={formValues.confirmPassword}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Register"
                    />
                    <p className="field">
                        <span>
                            If you already have profile click{" "}
                            <Link to="/login">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
