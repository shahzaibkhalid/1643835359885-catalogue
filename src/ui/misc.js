import { routes } from './routes'

const SERVER_URL = 'http://localhost:8081/';

const getDeviceImgByType = (type) => {
  switch (type) {
    case routes.IPHONES:
      return `${SERVER_URL}/images/iphone.jpg`;
    case routes.WATCHES:
      return `${SERVER_URL}/images/watch.jpg`;
    default:
      return SERVER_URL
  }
}

export { getDeviceImgByType }
