import { getProfile } from "../GetData/profile";

export const addCart = async (id, isLogin) => {
  const userInfo = await getProfile();
  if (userInfo == false) {
    showLoginModal.click();
  }
  else{
  }
};
