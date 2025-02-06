import { useEffect, useState } from "react";
import axios from "axios";

function EmployerProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employer/profile");
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching employer profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Employer Profile</h1>
      {profile ? (
        <div>
          <h3>Company: {profile.companyName}</h3>
          <p>Since: {profile.sinceFrom}</p>
          <p>Location: {profile.location}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default EmployerProfile;
