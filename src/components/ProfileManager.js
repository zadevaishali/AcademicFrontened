// ProfileManager.js
import React, { useState } from 'react';
import { createProfile, getProfileById, updateProfileById, deleteProfileById } from './ProfileService';
import '../css/profile.css';
import HeaderWithMenu1 from './HeaderWithMenu1';


const ProfileManager = () => {
    const [profile, setProfile] = useState({
        name: '',
        department: '',
        bio: '',
        contactDetails: ''
    });

    

    const [profileId, setProfileId] = useState('');
    const [fetchedProfile, setFetchedProfile] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleCreateProfile = async () => {
        try {
            const response = await createProfile(profile);
            console.log(response);
            setMessage('Profile created successfully');
        } catch (error) {
            setMessage('Error creating profile');
        }
    };

    const handleFetchProfile = async () => {
        try {
            const response = await getProfileById(profileId);
            setFetchedProfile(response.data);
            setMessage('Profile fetched successfully');
        } catch (error) {
            setMessage('Error fetching profile');
        }
    };

    const handleUpdateProfile = async () => {
        try {
            const response = await updateProfileById(profileId, profile);
            console.log(response);
            setMessage('Profile updated successfully');
        } catch (error) {
            setMessage('Error updating profile');
        }
    };

    const handleDeleteProfile = async () => {
        try {
            await deleteProfileById(profileId);
            setMessage('Profile deleted successfully');
            setFetchedProfile(null);
        } catch (error) {
            setMessage('Error deleting profile');
        }
    };

    return (
        
           
        <div>
             <HeaderWithMenu1/>
            <h1>Profile Manager</h1>

            {/* Create Profile */}
            <h2>Create Profile</h2>
            <form className='form1'>
                <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={profile.department}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bio"
                    placeholder="Bio"
                    value={profile.bio}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="contactDetails"
                    placeholder="ContactDetails"
                    value={profile.contactDetails}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleCreateProfile}>
                    Create Profile
                </button>
            </form>

            {/* Fetch Profile */}
            <h2>Fetch Profile</h2>
            <input
                type="text"
                placeholder="Enter Profile ID"
                value={profileId}
                onChange={(e) => setProfileId(e.target.value)}
            />
            <button onClick={handleFetchProfile}>Fetch Profile</button>

            {fetchedProfile && (
                <div>
                    <h3>Profile Details</h3>
                    <p>ID: {profileId.id}</p>
                    <p>Name: {fetchedProfile.name}</p>
                    <p>Department: {fetchedProfile.department}</p>
                    <p>Bio: {fetchedProfile.bio}</p>
                    <p>ContactDetails: {fetchedProfile.contactDetails}</p>
                </div>
            )}

            {/* Update Profile */}
            <h2 className='h2tag'>Update Profile</h2>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={profile.department}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bio"
                    placeholder="Bio"
                    value={profile.bio}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="contactDetails"
                    placeholder="ContactDetails"
                    value={profile.contactDetails}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleUpdateProfile}>
                    Update Profile
                </button>
            </form>

            {/* Delete Profile */}
            <h2>Delete Profile</h2>
            <input
                type="text"
                placeholder="Enter Profile ID"
                value={profileId}
                onChange={(e) => setProfileId(e.target.value)}
            />
            <button onClick={handleDeleteProfile}>Delete Profile</button>

            {/* Message Section */}
            {message && <p>{message}</p>}
        </div>
        
    );
};

export default ProfileManager;
