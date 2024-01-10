"use client"

import React, {useState} from 'react';
import NextLink from 'next/link';
import Checkbox from '../Components/checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './tailwind.css';
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const SettingsPage = () => {

    const {data: session, update} = useSession(); 

  const [isUsernameEditing, setIsUsernameEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  
  const [initialUsername, setInitialUsername] = useState(session?.user);
  const [initialPassword,  setInitialPassword] = useState('');

  const [editedUsername, setEditedUsername] = useState(initialUsername);
  const [editedPassword, setEditedPassword] = useState(initialPassword);


  const handleSaveChanges = async() => {
    setIsUsernameEditing(false);
    setIsPasswordEditing(false);
    if(!initialUsername){
        setError("Username is necessary");
        return;
    }
    if(!editedPassword && !editedUsername){
        return;
    }
    try{

        const resExists = await fetch("/api/userChange", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username:initialUsername, newUserName: editedUsername, newPassword: editedPassword})
        });

        const {success} = await resExists.json();
        
        if(success){
            console.log("User Updated Successfully");
            update({
              user: editedUsername, 
            });
            setInitialUsername(editedUsername);
        }
    }catch (error){
        console.log(error)
    }
  }


  const handleToggleEdit = (type) => {
    switch (type) {
      case 'username':
        setIsUsernameEditing(!isUsernameEditing);
        break;
      case 'password':
        setIsPasswordEditing(!isPasswordEditing);
        break;
      default:
        break;
    }
  }

  const displayPassword = (password) => {
    return password.split('').map(() => '*').join('');
  }


  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <header className="text-4xl font-bold p-5 text-left rounded-full">GeoGraph</header>
      <div className="flex flex-col items-center justify-center p-5">
          {/* Add the return button */}
        <NextLink href="/" className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl cursor-pointer" />
        </NextLink>
        <div className="bg-gray-700 p-4 rounded-lg w-full max-w-md">
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">Account Details</h2>
            <div className="mb-3">
              <label htmlFor="text" className="block mb-2 text-center text-gray-300">Username</label>
              <div className="flex items-center justify-between">
                {isUsernameEditing ? (
                  <input
                    type="text"
                    value={editedUsername}
                    onChange={(e) => setEditedUsername(e.target.value)}
                    className="bg-gray-600 text-white p-2 rounded"
                  />
                ) : (
                  <span className="mr-2">{editedUsername}</span>
                )}
                <FontAwesomeIcon
                  icon={isUsernameEditing ? faSave : faEdit}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleToggleEdit('username')}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block mb-2 text-center text-gray-300">Password</label>
              <div className="flex items-center justify-between">
                {isPasswordEditing ? (
                  <input
                    type="password"
                    value={editedPassword}
                    onChange={(e) => setEditedPassword(e.target.value)}
                    className="bg-gray-600 text-white p-2 rounded"
                  />
                ) : (
                  <span className="mr-2">{displayPassword(editedPassword)}</span>
                )}
                <FontAwesomeIcon
                  icon={isPasswordEditing ? faSave : faEdit}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleToggleEdit('password')}
                />
              </div>          </div>
              <div>
        </div>
            <button onClick={() => signOut()} className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 transition duration-300">Log out</button>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">Notification Preferences</h2>
            <div className="flex justify-between items-center mb-3">
              <span className='text-md'>Alerts</span>
              {/* <input type="checkbox" className="toggle toggle-accent" /> */}
              <Checkbox />
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className='text-md'>Updates</span>
              {/* <input type="checkbox" className="toggle toggle-accent" checked /> */}
              <Checkbox />
            </div>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-semibold mb-3">Download and Sharing</h2>
            <div className="flex justify-between items-center mb-3">
              <span>Download Format</span>
              <select className="bg-gray-600 text-white p-2 rounded">
                <option value="pdf">PDF</option>
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
              </select>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Download Resolution</span>
              <select className="bg-gray-600 text-white p-2 rounded">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="flex justify-between items-center">
              <span>Share Data</span>
              {/* <input type="checkbox" className="toggle toggle-accent" /> */}  
              <Checkbox />
            </div>
          </section>
          <button className="w-full py-3 rounded bg-green-600 hover:bg-green-700 transition duration-300" onClick={handleSaveChanges}>Save changes</button>
        </div>
        <div className="absolute top-5 right-5 text-5xl rounded-full"><p>{initialUsername}</p></div>
      </div>
    </div>
  );
};

export default SettingsPage;

