import { BlandWebClient } from 'bland-client-js-sdk';

// Function to get session token from our serverless API
const getSessionToken = async () => {
  try {
    const response = await fetch('/api/bland-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { token: data.token, agentId: data.agentId };
  } catch (error) {
    console.error('Error getting session token:', error);
    throw error;
  }
};

// Function to initiate call
export const initiateCall = async () => {
  try {
    const { token, agentId } = await getSessionToken();
    
    const blandClient = new BlandWebClient(agentId, token);
    
    await blandClient.initConversation({
      sampleRate: 44100,
    });
    
    return { success: true, client: blandClient };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to end call
export const endCall = async (blandClient) => {
  try {
    if (blandClient) {
      await blandClient.stopConversation();
      console.log('Call ended successfully');
    }
  } catch (error) {
    console.error('Error ending call:', error);
  }
};
