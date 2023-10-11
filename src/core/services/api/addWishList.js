
export const addWishList = (id , isLogin)=>{
    if (isLogin ==false){
      showLoginModal.click()
    }
    if (isLogin == true){
      showLoginModal.check()
    }
}