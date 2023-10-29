import { useEffect } from "react";
import styles from "./Profile.module.css";
export default function Profile({
  //Props destructuring
  _id,
  username,
  email,
  age,
  profileDeleteHandler,
  movieSelectHandler,
  selected,
}) {
  useEffect(() => {
    console.log(`Profile ${username} - Mounted!`);
    return () => {
      console.log(`Profile ${username} - Unmounted!`);
    };
  }, [username]);
  useEffect(() => {
    console.log(`Profile ${username} - Updated!`);
    //If selected is changed or username (select is entity we want to change NOT username) it will trigger this useEffect,
    //Added username in dependency array because we use it in useEffect NOT because we are listening for username change.
    //Add all properties you want to use into useEffect in dependencies.
  }, [selected, username]);
  //   useEffect(() => {
  //     return () => {
  //       console.log(`Profile ${username} - Unmounted!`);
  //     };
  //   }, []);
  return (
    <article className={styles["profile-article"]}>
      <h3>
        {username} , {age}
        {selected && <p>This is selected profile.</p>}
      </h3>
      <main>
        <p>{email}</p>
      </main>
      <footer>
        <button onClick={() => profileDeleteHandler(_id)}>X</button>
        <button onClick={() => movieSelectHandler(_id)}>Select</button>
      </footer>
    </article>
  );
}
