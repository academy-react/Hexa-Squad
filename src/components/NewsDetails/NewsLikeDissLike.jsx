import React, { useState } from "react";
import handleNewsLikeClick from "../../core/services/api/PostData/addNewsLike";
import handleNewsDeleteLike from "../../core/services/api/DeleteData/deleteNewsLike";
import handleNewsDisLike from "../../core/services/api/PostData/addNewsDisLike";
import DeleteNewsDissLike from "../../core/services/api/DeleteData/deleteNewsDissLike";

const NewsLikeDissLike = ({
    data, 
    id,
    newsLikeId,
    currentUserLike,
    currentUserDissLike,
    likeCount,
    dissLikeCount,
    setData
}) => {

    console.log("newsLikeId===",currentUserLike)

    const [changeLikeColor, setChangeLikeColor] = useState(0);
    const [changeDisLikeColor, setChangeDisLikeColor] = useState(0);

    // Afshin
    const [userIsLiked, setUserIsLiked] = useState(currentUserLike); // Initialize with api
    const [like, setLike] = useState(likeCount);
    const [userIsDissLiked, setUserIsDissLiked] = useState(currentUserDissLike); // Initialize with api
    const [dissLike, setDissLike] = useState(dissLikeCount);
    
    function handleLike() {
      if (userIsLiked) {
        //call delete like api
        handleNewsDeleteLike(
            newsLikeId, 
            changeLikeColor, 
            setChangeLikeColor,
            id,
            setData
        )
        
        const response = true;
        if (response) {
          setUserIsLiked(false);
          setLike(like - 1);
          setChangeLikeColor(0);
        } else {
          alert("Can't reach the api");
        }
        return;
      }
      // Call Like api
      handleNewsLikeClick(
        id, 
        currentUserLike, 
        changeLikeColor, 
        setChangeLikeColor,
        setData
      )
  
      const response = true;
      if (response) {
        setUserIsLiked(true);
        setLike(like + 1);
        if (userIsDissLiked) {
          setUserIsDissLiked(false);
          setDissLike(dissLike - 1);
          setChangeDisLikeColor(0)
        }
      } else {
        alert("Can't reach the api");
      }
    }
    function handleDissLike() {
      if (userIsDissLiked) {
        //call delete dissLike api
        DeleteNewsDissLike(
            newsLikeId, 
            changeDisLikeColor, 
            setChangeDisLikeColor,
            id,
            setData
        )
        const response = true;
        if (response) {
          setUserIsDissLiked(false);
          setDissLike(dissLike - 1);
          setChangeDisLikeColor(0)
        } else {
          alert("Can't reach the api");
        }
        return;
      }
  
      // Call DissLike api
      handleNewsDisLike(
        id,
        changeDisLikeColor,
        setChangeDisLikeColor,
        setData
      )
  
      const response = true;
      if (response) {
        setUserIsDissLiked(true);
        setDissLike(dissLike + 1);
        if (userIsLiked) {
          setUserIsLiked(false);
          setLike(like - 1);
          setChangeLikeColor(0);
        }
      } else {
        alert("Can't reach the api");
      }
    }

    return(
        <div className="flex flex-row">
            <h2 className="text-xl mt-1 dark:text-indigo-400 text-[#302064]">
                آیا از این مقاله راضی بودید؟
            </h2>
            <div
                className="course-like-box py-2 mr-4 bg-[#e3deff] "
                onClick={handleLike}
                // onClick={
                //     currentUserIsLike === false
                //     ? () => 
                //     handleNewsLikeClick(
                //         urlParam, 
                //         currentUserIsLike, 
                //         changeLikeColor, 
                //         setChangeLikeColor
                //     )
                //     : () => 
                //     handleNewsDeleteLike(
                //         newsLikeId, 
                //         changeLikeColor, 
                //         setChangeLikeColor
                //     )
                // }
            >
                <span
                    className={` cursor-pointer ${
                        changeLikeColor || currentUserLike|| userIsLiked
                        ? `bbi bi-hand-thumbs-up-fill text-indigo-950 `
                        : `bi bi-hand-thumbs-up text-indigo-950`
                    }`}
                >
                    {" "}
                    {like}
                </span>
            </div>
            <div
                className="course-like-box py-2 mr-4 bg-[#e3deff] "
                onClick={handleDissLike}
                // onClick={() =>
                //     handleNewsDisLike(
                //     urlParam,
                //     changeDisLikeColor,
                //     setChangeDisLikeColor
                //     )
                // }
            >
                <span
                    className={` cursor-pointer ${
                        changeDisLikeColor || currentUserDissLike || userIsDissLiked
                        ? `bbi bi-hand-thumbs-down-fill text-zinc-500 `
                        : `bbi bi-hand-thumbs-down text-zinc-500`
                    }`}
                >
                    {" "}
                    {dissLike}
                </span>
            </div>
        </div>
    )
}
export default NewsLikeDissLike;