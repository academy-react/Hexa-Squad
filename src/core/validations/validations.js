import * as yup from 'yup';
export const validation = yup.object().shape({
   gmail:yup.string().email("  ایمیل را به درستی وارد کنید")
   .required("Mail is required").typeError('ایمیل را به درستی وارد کنید').required('این فیلد الزامیست!'),
    password: yup.string().required('این فیلد الزامیست!'),
    rePassword: yup.string().required('این فیلد الزامیست!').oneOf([yup.ref('password')],'با رمز عبور یکسان نمی باشد') ,
    lastPassword: yup.string().required('این فیلد الزامیست!'),
    // firstName: yup.string().required('این فیلد الزامیست!'),
    // lastName: yup.string().required('این فیلد الزامیست!'),
    // idCode: yup.number().typeError('کد ملی باید عدد باشد!').integer("کد ملی نمی تواند شامل عدد اعشاری باشد!").positive('کد ملی باید عدد مثبت باشد!').required('این فیلد الزامیست!'),
    // birthDate: yup.date().required('این فیلد الزامیست!'),
    phoneNumber: yup.number().min(9000000000,"شماره موبایل باید 11 رقم باشد").max(9999999999,"شماره موبایل نباید بیشتر از 11 رقم باشد").required('این فیلد الزامیست!'),
    verificationCode: yup.number().typeError('کد را به درستی وارد کنید').required('این فیلد الزامیست!'),


})