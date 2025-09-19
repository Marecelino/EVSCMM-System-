import axios from 'axios';

// Hàm này sẽ gọi đến file JSON daw datadata trong thư mục public

export const getServiceCenters = () => {
    return axios.get('/api/service-centers.json'); 
  };
  

  export const getUserVehicles = (userId) => {

    return axios.get('/api/user-vehicles.json');
  };
  
  export const getUserAppointments = (userId) => {
    return axios.get('/api/user-appointments.json');
  };
 
export const getServicePackages = () => {
    return axios.get('/api/service-packages.json');
  };
  
  export const login = (email, password) => {

    if (email === "customer@email.com" && password === "123456") {
      return Promise.resolve({ 
          data: {
              user_id: 1,
              full_name: "Nguyễn Văn An",
              email: "customer@email.com",
              role: "customer",
              token: "fake-jwt-token-string" // Giả lập token
          }
      });
    } else {
      return Promise.reject(new Error("Email hoặc mật khẩu không đúng."));
    }
  };