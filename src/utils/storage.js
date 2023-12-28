// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faMapMarker, faHeart, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// library.add(faMapMarker, faHeart, faPhone, faEnvelope);

export const GetToken = () => {
  return localStorage.getItem("token");
};

export const SetToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    return token;
  } else {
    console.error("Token is undefined or null");
    return null;
  }
};

export const DelToken = () => {
  localStorage.removeItem("token");
};
