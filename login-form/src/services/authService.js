import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('https://your-api-url.com/login', {
      email,
      password,
    });

    // Ví dụ API trả về token khi đăng nhập thành công:
    if (response.data.token) {
      // Lưu token vào localStorage (tuỳ nhu cầu)
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
};
export const register = async (email, password) => {
  try {
    const response = await axios.post('https://your-api-url.com/register', {
      email,
      password,
    });

    // Ví dụ API trả về token khi đăng ký thành công:
    if (response.data.token) {
      // Lưu token vào localStorage (tuỳ nhu cầu)
      localStorage.setItem('token', response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Registration failed:', error);
    return false;
  }
};