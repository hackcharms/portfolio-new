export function getTotalYear(dateMMDDYY: string): string {
  var d1 = new Date();
  var d2 = new Date(dateMMDDYY);
  var diff = d1?.getTime() - d2?.getTime();
  return (diff / (1000 * 60 * 60 * 24 * 365))?.toFixed(1);
}
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
  // birthday: "03/04/1997",
  aboutMe: ` ${getTotalYear(
    "04/03/1998"
  )} Year Old Passionate Developer having ${getTotalYear("08/01/2020")} 
  Years of experience in web development technology, Have work experience on JavaScript, TypeScript, VueJs, NuxtJs, Vuetify, PHP, Laravel, MySQL`,
};
