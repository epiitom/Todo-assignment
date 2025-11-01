import { Platform } from 'react-native';

// Returns a sensible default API URL depending on platform.
// - Android emulator (default) should use 10.0.2.2 to reach host localhost
// - iOS simulator / web can use localhost
// - Physical devices must set the API_HOST_MANUAL env or edit this file to point
//   at the host machine's IP (e.g. http://192.168.1.100:3000/api)
//
// TO USE ON PHYSICAL DEVICE:
// 1. Find your computer's IP address (ipconfig on Windows, ifconfig on Mac/Linux)
// 2. Replace the MANUAL_HOST below with your IP (e.g., 'http://192.168.1.100:3000')
// 3. Make sure your phone and computer are on the same Wi-Fi network
// 4. Ensure Windows Firewall allows connections on port 3000

// IMPORTANT: Replace this with your computer's IP address when using a physical device
// Example: 'http://192.168.1.100:3000'
// Your IP address: 192.168.1.73
const MANUAL_HOST: string = 'http://192.168.1.73:3000';

export const API_URL = (() => {
  if (MANUAL_HOST) {
    const cleanHost = MANUAL_HOST.replace(/\/+$/, '');
    return cleanHost + '/api';
  }

  if (Platform.OS === 'android') {
    // Android emulator hosts map localhost -> 10.0.2.2
    // For physical devices, you MUST set MANUAL_HOST above
    return 'http://10.0.2.2:3000/api';
  }

  // Default (iOS simulator, web, or running on desktop)
  return 'http://localhost:3000/api';
})();

export default API_URL;
