export function useGetInfo() {
  const storedAuth = localStorage.getItem("auth");

  if (!storedAuth) {
    return {
      userID: null,
      userName: null,
      isAuth: null,
      userImg: null,
    };
  }

  const auth = JSON.parse(storedAuth);
  return {
    userID: auth.userID,
    userImg: auth.userImg,
    isAuth: auth.isAuth,
    userName: auth.userName,
  };
}

/*

export function useGetInfo() {
  const storedAuth = localStorage.getItem("auth");

  if (!storedAuth) {
    return {
      userID: null,
      userName: null,
      userImg: null,
      isAuth: false,
    };
  }

  const auth = JSON.parse(storedAuth);

  return {
    userID: auth.userID,
    userName: auth.userName,
    userImg: auth.userImg,
    isAuth: auth.isAuth,
  };
}

*/
