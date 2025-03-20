import { useState } from "react";

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        age: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile, [name]: value
        }))
    }

  return (
    <div>
        <h2>User Profile</h2>
        <div>
            <label htmlFor="">Name: 
                <input type="text" name="name" value={profile.name} onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label htmlFor="">
                Age: 
                <input type="number"  name="age" value={profile.age} onChange={handleChange}/>
            </label>
        </div>
        <h3>Profile Information</h3>
        <div>Name: {profile.name}</div>
        <div>Age: {profile.age}</div>
    </div>
  )
}

export default Profile