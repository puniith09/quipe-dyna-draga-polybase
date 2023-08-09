import dynamicSDK from 'dynamic-sdk';

const authenticateUser = async (username, password) => {
  try {
    const response = await dynamicSDK.authenticate(username, password);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Authentication failed');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default authenticateUser;