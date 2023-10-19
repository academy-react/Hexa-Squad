import * as yup from 'yup';
export const validation = yup.object().shape({
    email: yup.string().required('این فیلد الزامیست!'),
    password: yup.string().required('این فیلد الزامیست!'),
    rePassword: yup.string().required('این فیلد الزامیست!').oneOf([yup.ref('password')],'با رمز عبور یکسان نمیباشد') ,
    lastPassword: yup.string().required('این فیلد الزامیست!'),
})