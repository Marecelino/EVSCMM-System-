import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

// ===================================
// Authentication
// ===================================
export const login = async (email, password) => {
  const response = await api.get(`/users?email=${email}`);
  const user = response.data[0];

  if (user) {
    // [Giả lập] Bỏ qua kiểm tra password
    return {
      data: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role_id: user.role_id,
        token: "jwt-token-for-" + user.email,
      }
    };
  } else {
    throw new Error("Email hoặc mật khẩu không đúng.");
  }
};

// ===================================
// 1. Users API
// ===================================
export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const patchUser = (id, partialUserData) => api.patch(`/users/${id}`, partialUserData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// ===================================
// 2. Vehicles API
// ===================================
export const getVehicles = () => api.get('/vehicles');
export const getVehicleById = (id) => api.get(`/vehicles/${id}`);
export const createVehicle = (vehicleData) => api.post('/vehicles', vehicleData);
export const updateVehicle = (id, vehicleData) => api.put(`/vehicles/${id}`, vehicleData);
export const deleteVehicle = (id) => api.delete(`/vehicles/${id}`);

// ===================================
// 3. Bookings API
// ===================================
export const getBookings = () => api.get('/bookings?_expand=user&_expand=vehicle&_expand=quotation');
export const getBookingById = (id) => api.get(`/bookings/${id}`);
export const createBooking = (bookingData) => api.post('/bookings', bookingData);
export const updateBooking = (id, bookingData) => api.put(`/bookings/${id}`, bookingData);
export const deleteBooking = (id) => api.delete(`/bookings/${id}`);

// ===================================
// 4. Service Orders API
// ===================================
export const getServiceOrders = () => api.get('/service-orders?_expand=booking');
export const getServiceOrderById = (id) => api.get(`/service-orders/${id}`);
export const createServiceOrder = (orderData) => api.post('/service-orders', orderData);
export const updateServiceOrder = (id, orderData) => api.put(`/service-orders/${id}`, orderData);
export const deleteServiceOrder = (id) => api.delete(`/service-orders/${id}`);

// ===================================
// 5. Parts API
// ===================================
export const getParts = () => api.get('/parts');
export const getPartById = (id) => api.get(`/parts/${id}`);
export const createPart = (partData) => api.post('/parts', partData);
export const updatePart = (id, partData) => api.put(`/parts/${id}`, partData);
export const deletePart = (id) => api.delete(`/parts/${id}`);

// ===================================
// 6. Part Requests API 
// ===================================
export const getPartRequests = () => api.get('/part-requests?_expand=part&_expand=service_order');
export const getPartRequestById = (id) => api.get(`/part-requests/${id}`);
export const createPartRequest = (requestData) => api.post('/part-requests', requestData);
export const updatePartRequest = (id, requestData) => api.put(`/part-requests/${id}`, requestData);
export const deletePartRequest = (id) => api.delete(`/part-requests/${id}`);

// ===================================
// 7. Service Packages API 
// ===================================
export const getServicePackages = () => api.get('/service-packages');
export const getServicePackageById = (id) => api.get(`/service-packages/${id}`);
export const createServicePackage = (packageData) => api.post('/service-packages', packageData);
export const updateServicePackage = (id, packageData) => api.put(`/service-packages/${id}`, packageData);
export const deleteServicePackage = (id) => api.delete(`/service-packages/${id}`);

// ===================================
// 8. Customer Subscriptions API
// ===================================
export const getSubscriptions = () => api.get('/subscriptions');
export const getSubscriptionById = (id) => api.get(`/subscriptions/${id}`);
export const createSubscription = (subData) => api.post('/subscriptions', subData);
export const updateSubscription = (id, subData) => api.put(`/subscriptions/${id}`, subData);
export const deleteSubscription = (id) => api.delete(`/subscriptions/${id}`);

// ===================================
// 9. Checklist Items API (Đổi tên key trong JSON thành "checklist-items")
// ===================================
export const getChecklistItems = () => api.get('/checklist-items');
export const getChecklistItemById = (id) => api.get(`/checklist-items/${id}`);
export const createChecklistItem = (itemData) => api.post('/checklist-items', itemData);
export const updateChecklistItem = (id, itemData) => api.put(`/checklist-items/${id}`, itemData);
export const deleteChecklistItem = (id) => api.delete(`/checklist-items/${id}`);

// ===================================
// 10. Order Checklists API (Đổi tên key trong JSON thành "order-checklists")
// ===================================
export const getOrderChecklists = (orderId) => api.get(`/order-checklists?order_id=${orderId}`);
export const createOrderChecklist = (checklistData) => api.post('/order-checklists', checklistData);
export const updateOrderChecklist = (id, checklistData) => api.put(`/order-checklists/${id}`, checklistData);
export const deleteOrderChecklist = (id) => api.delete(`/order-checklists/${id}`);

// ===================================
// 11. Certificates API
// ===================================
export const getCertificates = () => api.get('/certificates');
export const getCertificateById = (id) => api.get(`/certificates/${id}`);
export const createCertificate = (certData) => api.post('/certificates', certData);
export const updateCertificate = (id, certData) => api.put(`/certificates/${id}`, certData);
export const deleteCertificate = (id) => api.delete(`/certificates/${id}`);

// ===================================
// 12. Conversations API
// ===================================
export const getConversations = () => api.get('/conversations');
export const getConversationById = (id) => api.get(`/conversations/${id}?_embed=messages`);
export const createConversation = (convoData) => api.post('/conversations', convoData);
export const deleteConversation = (id) => api.delete(`/conversations/${id}`);

// ===================================
// 13. Messages API
// ===================================
export const getMessagesByConversation = (conversationId) => api.get(`/messages?conversation_id=${conversationId}`);
export const createMessage = (messageData) => api.post('/messages', messageData);
export const deleteMessage = (id) => api.delete(`/messages/${id}`);