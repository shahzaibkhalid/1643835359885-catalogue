const getDevicesByType = async (type) => {
  try {
    const response = await fetch(`http://localhost:8081${type}`);
    const devices = await response.json();
    return devices?.data ?? [];
  } catch (err) {
    throw new Error(err);
  }
}

export { getDevicesByType };
