import React from "react";
import Profile from "./Profile";
export default function ProfileList({
  //Props destructuring
  allProfiles,
  profileDeleteHandler,
  movieSelectHandler,
}) {
  //   let profileElements = [];
  //   for (const profile of allProfiles) {
  //Variant 1
  // profileElements.push(React.createElement(Profile, profile));

  //Variant 2
  //   profileElements.push(<li><Profile {...profile} /></li>);

  // Map
  //   let profileList = allProfiles.map((profile) => (
  //     <li>
  //       <Profile {...profile} />
  //     </li>
  //   ));
  return (
    <ul>
      {allProfiles.map((profile, index) => (
        <li key={profile._id}>
          <Profile
            {...profile}
            profileDeleteHandler={profileDeleteHandler}
            movieSelectHandler={movieSelectHandler}
          />
        </li>
      ))}
    </ul>
  );
}
