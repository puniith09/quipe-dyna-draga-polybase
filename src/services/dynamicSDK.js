import Dynamic from 'dynamic-sdk';

const dynamicSDK = new Dynamic({
  clientId: process.env.DYNAMIC_SDK_CLIENT_ID,
  clientSecret: process.env.DYNAMIC_SDK_CLIENT_SECRET,
  redirectUri: process.env.DYNAMIC_SDK_REDIRECT_URI,
});

export const authenticateUser = async () => {
  try {
    const user = await dynamicSDK.authenticate();
    return user;
  } catch (error) {
    console.error('Failed to authenticate user with Dynamic SDK', error);
    throw error;
  }
};

export default dynamicSDK;