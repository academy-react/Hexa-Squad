import * as yup from 'yup';
export const EditProfileValidation = yup.object().shape({
    fName: yup.string().required('این فیلد الزامیست!'),
    lName: yup.string().required('این فیلد الزامیست!'),
    linkdinProfile: yup.string().url().required('این فیلد الزامیست!'),
    telegramLink: yup.string().url().required('این فیلد الزامیست!'),
    homeAdderess: yup.string().required('این فیلد الزامیست!'),
    userAbout: yup.string().required('این فیلد الزامیست!'),
    nationalCode: yup.number().typeError('کد ملی را به درستی وارد کنید!').integer("کد ملی نمی تواند شامل عدد اعشاری باشد!").positive('کد ملی باید عدد مثبت باشد!').required('این فیلد الزامیست!'),
    birthDay: yup.date().required('این فیلد الزامیست!'),
    gender: yup.boolean().required("لطفا نوع جنسیت را انتخاب کنید"),
})