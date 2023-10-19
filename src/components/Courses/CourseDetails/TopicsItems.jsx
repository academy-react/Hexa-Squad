import React from "react";
import TopicItem from "./TopicItem";

const TopicsItems = () => {
  return (
    <div class="rounded my-1 border border-neutral-200 bg-[#846cf3] dark:border-neutral-600 dark:bg-neutral-800">
      <TopicItem />
      <TopicItem />
    </div>
  );
};

export default TopicsItems;
