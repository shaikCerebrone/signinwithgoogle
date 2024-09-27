import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation

const SuccessPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user data)
    navigate('/'); // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Success!</h1>
      <p style={styles.message}>You have successfully logged in.</p>
      <button style={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',
  },
  heading: {
    fontSize: '3rem',
    color: '#4caf50',
  },
  message: {
    fontSize: '1.5rem',
    color: '#333',
  },
  button: {
    marginTop: '20px', // Add some space above the button
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SuccessPage;
