import React, { useState, useEffect } from 'react';

const DynamicUseEffectExample = ({ userId }) => {
  const [userData, setUserData] = useState(1);

  // Dynamic useEffect based on the userId prop
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching user data from an API
          // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
          
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Check if userId is provided before fetching data
    if (userId) {
      fetchData();
    }

    // Cleanup function (optional) to handle unmounting or dependencies change
    // return () => {
    //   // Perform cleanup if needed
    // };
  }, [userId]); // Run the effect whenever the userId prop changes

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user details as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default DynamicUseEffectExample;
