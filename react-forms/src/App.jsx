import { useState, useRef, useEffect } from "react";

function App() {
    const ref = useRef();
    const [username, setUsername] = useState("");
    const [creditCard, setCredit] = useState(null);
    const [occupation, setOccupation] = useState("engineering");
    const [gender, setGender] = useState("male");
    const [bio, setBio] = useState("");

    const [age, setAge] = useState(null);
    const [hobbies, setHobbies] = useState({
        //
    });
    const [formValues, setFormValues] = useState({
        username: "",
        credit: null,
        occupation: "engineering",
        gender: "male",
        bio: "",
        age: "",
        // hobbies: {},
    });
    //Controlled form (component)
    //Set user input onChange in state

    //Demo
    useEffect(() => {
        ref.current.value = formValues.username;
    }, [formValues.username]);

    const hobbiesChangeHandler = (event) => {
        setHobbies((oldState) => ({
            ...oldState,
            [event.target.value]: event.target.checked, // hiking:true or false then replace old property into state
        }));
    };

    const onChangeHandler = (event) => {
        //Change uncontrolled component value by changing ref value (Demo)
        // if (event.target.name === "username") {
        //     ref.current.value = event.target.value;
        // }

        setFormValues((oldState) => ({
            ...oldState,
            [event.target.name]: event.target.value, //Create property and replace old property into state
        }));
    };

    //Submit form
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(age);
    };
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={onChangeHandler}
                        value={formValues.username}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        name="age"
                        id="age"
                        onChange={onChangeHandler}
                        value={formValues.age} // if age falsy value -> ""
                    />
                </div>
                {Number(formValues.age) >= 18 && (
                    <div>
                        <label htmlFor="credit">Credit</label>
                        <input
                            type="text"
                            name="credit"
                            id="credit"
                            onChange={onChangeHandler}
                            value={formValues.credit || ""}
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="Occupation">Occupation</label>
                    <select
                        name="Occupation"
                        id="Occupation"
                        value={formValues.occupation}
                        onChange={onChangeHandler}
                    >
                        <option value="it">IT</option>
                        <option value="engineering">Engineering</option>
                        <option value="medicine">Medicine</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={onChangeHandler}
                        checked={formValues.gender === "male"}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        // Name must be same because we want to change between two or more choices.
                        name="gender"
                        id="female"
                        value="female"
                        onChange={onChangeHandler}
                        checked={formValues.gender === "female"}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        cols="30"
                        rows="10"
                        value={formValues.bio}
                        onChange={onChangeHandler}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="hiking">Hiking</label>
                    <input
                        type="checkbox"
                        name="hobbies"
                        id="hiking"
                        value="hiking"
                        onChange={hobbiesChangeHandler}
                        // value={hobbies["hiking"] ?? false} // if age undefined or null -> ""
                        checked={hobbies["hiking"] || false} //When undefined -> false
                        //Remove || and initialize in state hiking:false...
                    />
                    <label htmlFor="reading">Reading</label>

                    <input
                        type="checkbox"
                        name="hobbies"
                        id="reading"
                        value="reading"
                        onChange={hobbiesChangeHandler}
                        checked={hobbies["reading"] || false}
                    />
                    <label htmlFor="swimming">Swimming</label>

                    <input
                        type="checkbox"
                        name="hobbies"
                        id="swimming"
                        value="swimming"
                        onChange={hobbiesChangeHandler}
                        checked={hobbies["swimming"] || false}
                    />
                    <label htmlFor="gaming">Gaming</label>

                    <input
                        type="checkbox"
                        name="hobbies"
                        id="gaming"
                        value="gaming"
                        onChange={hobbiesChangeHandler}
                        checked={hobbies["gaming"] || false}
                    />
                </div>
                <div>
                    <label htmlFor="uncontrolled">Uncontrolled </label>
                    <input
                        type="text"
                        name="uncontrolled"
                        id="uncontrolled"
                        ref={ref}
                    />
                </div>

                <button>Submit</button>
            </form>
        </>
    );
}

export default App;
