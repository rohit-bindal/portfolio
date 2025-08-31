import { BlandWebClient } from 'bland-client-js-sdk';

const AGENT_ID = 'dd9641f1-d387-4299-8284-d89174d9e058';
const API_KEY = 'org_76f400c50461e62ab5995a1ca0aaef2713697c24799a1f5a21ce0dcfbb1eb67f878dc18822194b2ec3b469';

// Function to get session token from agent ID
const getSessionToken = async () => {
  const url = `https://api.bland.ai/v1/agents/${AGENT_ID}/authorize`;
  const options = {
    method: 'POST',
    headers: {
      'Authorization': API_KEY
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error getting session token:', error);
    throw error;
  }
};

// Function to initiate call
export const initiateCall = async () => {
  try {
    console.log('Getting session token...');
    const sessionToken = await getSessionToken();
    
    console.log('Initializing Bland client...');
    const blandClient = new BlandWebClient(AGENT_ID, sessionToken);
    
    console.log('Starting conversation...');
    await blandClient.initConversation({
      sampleRate: 44100,
    });
    
    console.log('Call initiated successfully!');
    return { success: true, client: blandClient };
  } catch (error) {
    console.error('Error initiating call:', error);
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
