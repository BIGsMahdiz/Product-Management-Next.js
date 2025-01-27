const oneMonth = 30 * 24 * 60 * 60;

const setCookie = (token) => {
  document.cookie = `token=${token};expires=${oneMonth};path=/`;
};

const getCookie = () => {
  if (typeof window !== undefined) {
    return document.cookie.split("token=")[1] || null;
  }
};

export { setCookie, getCookie };
