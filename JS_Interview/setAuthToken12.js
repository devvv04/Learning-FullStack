// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInMinutes = 60) {
    const expiresAt = Date.now() + expiresInMinutes * 60 * 1000;
    const tokenData = {
     token:   token,
      expiry:  expiresAt
    };
    localStorage.setItem('authToken', JSON.stringify(tokenData));
    console.log("Token saved! It will expire in", expiresAt, "minutes.");
}


setAuthToken("abc123xyz", 30); // token valid for 30 minutes