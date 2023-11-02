import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);
    const [credit, setCredit] = useState(null);
    const [occupation, setOccupation] = useState("engineering");
    const [gender, setGender] = useState("male");
    const [bio, setBio] = useState("");
    const [hobbies, setHobbies] = useState({
        //
    });
    //Controlled form (component)
    //Set user input onChange in state
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value, "Username");
    };
    const ageChangeHandler = (event) => {
        setAge(event.target.value);
        console.log(event.target.value, "Age");
    };
    const creditChangeHandler = (event) => {
        setCredit(event.target.value);
        console.log(event.target.value, "Credit");
    };
    const occupationChangeHandler = (event) => {
        setOccupation(event.target.value);
        console.log(event.target.value, "Occupation");
    };
    const genderChangeHandler = (event) => {
        setGender(event.target.value);
        console.log(event.target.value, "Gender");
    };
    const bioChangeHandler = (event) => {
        setBio(event.target.value);
        console.log(event.target.value, "BioF");
    };
    const hobbiesChangeHandler = (event) => {
        console.log(event.target.checked, "Hobbies");
        setHobbies((oldState) => ({
            ...oldState,
            [event.target.value]: event.target.checked, // hiking:true or false then add into state
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
                        onChange={usernameChangeHandler}
                        value={username}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="text"
                        name="age"
                        id="age"
                        onChange={ageChangeHandler}
                        // value={age ?? ""} // if age undefined or null -> ""
                        value={age || ""} // if age falsy value -> ""
                    />
                </div>
                {age >= 18 && (
                    <div>
                        <label htmlFor="credit-card">Credit</label>
                        <input
                            type="text"
                            name="credit-card"
                            id="credit-card"
                            onChange={creditChangeHandler}
                            value={credit || ""}
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="Occupation">Occupation</label>
                    <select
                        name="Occupation"
                        id="Occupation"
                        value={occupation}
                        onChange={occupationChangeHandler}
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
                        onChange={genderChangeHandler}
                        checked={gender === "male"}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        // Name must be same because we want to change between two or more choices.
                        name="gender"
                        id="female"
                        value="female"
                        onChange={genderChangeHandler}
                        checked={gender === "female"}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        cols="30"
                        rows="10"
                        value={bio}
                        onChange={bioChangeHandler}
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

                <button>Submit</button>
            </form>
        </>
    );
}

export default App;
