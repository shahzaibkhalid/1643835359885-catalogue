import fetch from 'cross-fetch';
import { SERVER_URL } from '../misc'

const getDevicesByType = async (type, abortController) => {
  try {
    const response = await fetch(
      SERVER_URL + type,
      { signal: abortController.signal }
    );
    const devices = await response.json();
    return devices?.data ?? [];
  } catch (err) {
    throw new Error(err);
  }
}

export { getDevicesByType };
