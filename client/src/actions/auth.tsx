import axios from 'axios';

export const register = async (user: any) =>
  await axios.post(`${process.env.REACT_APP_URL}/register`, user);

export const signinGoogle = async (payload: any) =>
  await axios.post(`${process.env.REACT_APP_URL}/signin-google`, payload);

export const login = async (user: any) =>
  await axios.post(`${process.env.REACT_APP_URL}/login`, user);

// Save user to localStorage
export const authenticate = (data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('track-jobs', JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('track-jobs')) {
    return JSON.parse(localStorage.getItem('track-jobs')!);
  } else {
    return false;
  }
};
