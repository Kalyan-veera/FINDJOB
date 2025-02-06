import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employee/profile");
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching employee profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Employee Profile</h1>
      {profile ? (
        <div>
          <h3>Name: {profile.name}</h3>
          <p>Experience: {profile.experience} years</p>
          <p>Current Company: {profile.currentCompany}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default EmployeeProfile;
