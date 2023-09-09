import { getTotalYear } from "~/utils/functions";

export default {
  firstName: "Zubair",
  lastName: "Ahamd",
  phone: "+91 7800887621",
  email: "zaa78692@gmail.com",
  location: {
    address: "707, Jubli Parks, Mumbra",
    city: "Thane",
    country: "Maharashtra",
  },
  position: "Full Stack Developer",
  birthday: "03/04/1997",
  aboutMe: ` ${getTotalYear(
    "1998-04-03"
  )} Year Old Passionate Developer having ${getTotalYear("2020-08-01")} 
  Years of experience in web development technology, Have work experience on JavaScript, TypeScript, VueJs, NuxtJs, Vuetify, PHP, Laravel, MySQL`,
};
