import React, { Fragment, useState} from 'react';
import { Tab } from '@headlessui/react';
import TitleSection from '../../components/UserPanel/TitleSection';
import ChangePassword from '../../components/UserPanel/EditProfile/ChangePassword';
import EditProfile from '../../components/UserPanel/EditProfile/EditProfile';
import ProfileImage from '../../components/UserPanel/EditProfile/ProfileImage';
import getProfileInfo from '../../core/services/api/GetData/getProfileInfo';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const ProfileInfoTabs = () => {

  const [categories, setCategories] = useState([
    "ویرایش اطلاعات", "تغییر رمز عبور"
  ]); 

  return (
    <Fragment>
    <TitleSection title={"حساب کاربری"} />   
    <div className="w-full px-2 sm:px-0" dir='rtl'>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-indigo-500/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white dark:bg-indigo-950 text-blue-700 shadow lg:text-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-white/[0.12] hover:text-blue-500'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
            <Tab.Panel
              // className={classNames(
              //   'rounded-xl bg-white p-3',
              //   'ring-white/60 ring-offset-2 ring-offset-red-800 focus:outline-none focus:ring-2'
              // )}
            >
                <ProfileImage/>
                <EditProfile/>
            </Tab.Panel>
            <Tab.Panel>
                <ChangePassword/>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </Fragment>
  )
}
export default ProfileInfoTabs;
