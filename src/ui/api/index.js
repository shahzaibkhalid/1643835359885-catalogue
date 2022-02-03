
const getDevicesByType = async (type) => {
  const response = await fetch(`http://localhost:8081${type}`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const devices = await response.json();
  return devices?.data ?? [];
}

export { getDevicesByType };
