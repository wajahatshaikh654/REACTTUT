import { useState } from "react";

function Profile() {
  const [loggedIn, setloggedIn] = useState(3);

  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome User1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome user2</h1>
      ) : (
        <h1>Welcome user3</h1>
      )}
    </div>
  );
}
export default Profile;
