export const checkValidPassword = (password, confirmPassword) => {
  if (!password) {
    return `Password is required.`;
  }

  if (password !== password.trim()) {
    return `Password cannot contain leading or trailing spaces.`;
  }

  if (password.length < 6 || password.length > 60) {
    return `Password must be between 6 and 60 characters.`;
  }

  if (confirmPassword !== undefined && password !== confirmPassword) {
    return `Passwords do not match.`;
  }
};

export const checkValidEmail = (email) => {
  if (!email) {
    return `Email is required.`;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return `Please enter a valid email.`;
  }

  return "";
};
