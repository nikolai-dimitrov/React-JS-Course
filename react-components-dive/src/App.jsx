import { profiles as profilesData } from "../profiles.js";
import ProfileList from "./components/ProfileList";
import { useState } from "react";
function App() {
  let [profile, setProfile] = useState(profilesData);
  const profileDeleteHandler = (id) => {
    setProfile((oldProfiles) => oldProfiles.filter((p) => p._id !== id));
  };
  //Iterate through all profiles ,check if clicked profile id === current profile
  // If true ,create new object with all current profile properties and add SELECTED:TRUE
  //If false return same object WITHOUT selected property.
  const movieSelectHandler = (id) => {
    // setProfile((oldProfile) =>
    //   oldProfile.map((x) =>
    //     x._id === id
    //       ? {
    //           ...x,
    //           selected: true,
    //         }
    //       : x
    //   )
    // );

    setProfile((oldProfile) =>
      oldProfile.map((x) => ({ ...x, selected: x._id === id }))
    );
  };

  return (
    <div>
      <h1>Profiles collection</h1>
      <ProfileList
        allProfiles={profile}
        profileDeleteHandler={profileDeleteHandler}
        movieSelectHandler={movieSelectHandler}
      />
    </div>
  );
}

export default App;
