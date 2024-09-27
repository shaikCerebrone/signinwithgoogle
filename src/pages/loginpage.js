// src/pages/loginpage.js
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared'; // Now fixed, it is from this library
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();

  // Check authentication status and navigate to success if already signed in
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        navigate('/success'); // Navigate to success page if logged in
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Intern-image-uploader</h1>
        <Auth
          supabaseClient={supabase}
          providers={['google']}
          appearance={{ theme: ThemeSupa }} // Optional for theming
          theme="dark"
        />
      </header>
    </div>
  );
}

export default Login;
