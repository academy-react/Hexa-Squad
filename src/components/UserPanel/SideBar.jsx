import React from 'react'
import ProfileImage from '../../assets/icons/default-avatar-profile-icon-of-social-media-user-vector.png'
import ListItem from '../common/ListItem';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = ({profileSrc}) => {
    const [listItem, setListItem] = useState([
        {label: 'داشبورد',classNameIcon:'columns-gap',address:''},
        {label: 'اطلاعات کاربر',classNameIcon:'person-circle',address:''},
        {label: 'دوره های من',classNameIcon:'book',address:''},
        {label: 'تمام دوره ها',classNameIcon:'book',address:'AllCourses/'},
        {label: 'تغییر رمز عبور',classNameIcon:'key rotate-[-220deg]',address:''},
        {label: 'نظرات ثبت شده',classNameIcon:'chat-left-text',address:''},
        {label: 'خروج از حساب',classNameIcon:'power',address:'login'},
    ])
    const mapList = listItem.map((item , index) =>(
        <ListItem title={item.label} classNameIcon={item.classNameIcon} key={index} address={item.address}/>
        ));
  return (
    <div className='h-full md:w-3/12 w-full md:min-w-[210px] bg-[#2E11B7] rounded-3xl px-5 py-3'>
        <div className=" text-center py-8 relative  border-b-[1px] border-[#fff]">
            <img src={ProfileImage} alt=" profile image " className='border-2 text-[#fff] rounded-full w-32 inline-block' />
            <h3 className='mt-3'>{'کاربر سایت'}</h3>
            <NavLink className="bi bi-house-door absolute top-2 text-2xl right-5 text-[#fff]" to={'/'}></NavLink>
        </div>
        <ul>
            
            {mapList}
        </ul>
    </div>
  )
}

export default SideBar