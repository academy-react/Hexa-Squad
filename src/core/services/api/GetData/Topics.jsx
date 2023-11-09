import React from "react";
import { useState } from "react";
const arr = ["url1", "url2", "url3", "url4", "url5"];
const Accordions = [
  {
    id: 1,
    title: " 1. مقدمات html",
    desc: "مقدمه",
    title2: "بخش اول توضیحات",
  },
  {
    id: 2,
    title: " 2. تگ های Text Formatting",
    desc: "نصب و راه اندازی",
    title2: " بررسی محیط",
  },
  {
    id: 3,
    title: "3. عکس ها در صفحه ی وب ",
    desc: "کامپوننت ها",
    title2: "پلاگین ها",

  },
  {
    id: 4,
    title: " 4. تگ div",
    desc: " مدیریت پروژه",
    title2: "پروژه",
  },
];
export default Accordions;
