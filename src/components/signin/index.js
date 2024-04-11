import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { Button } from "../ButtonElements";
const Signin = () => {
  const handleSuccess = (response) => {
    // Handle successful authentication response
    // You can access the token and other data here
    console.log('Authentication successful:', response);
  };

  const handleError = () => {
    // Handle authentication error
    console.error('Authentication error');
  };

  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Sign In to your Account</h3>
          <div className="center-align">
            {/* Add the Google Login button */}
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>

        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;

