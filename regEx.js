const name = 'kiyv32';
// let myName = /[0-9]/.test(name);
// let myName = /[A-Z]/.test(name);
// let myName = /[a-z]/.test(name);
let myName = /[a-z].*[1-9]/.test(name);
// console.log(myName)


//two special case
let twoSpeacial = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('kievMosko@#')
// console.log(twoSpeacial)


// password length
/* 
criteria :
8 characters length
2 letters in Upper Case
1 Special Character (!@#$&*)
2 numerals (0-9)
3 letters in Lower Case
*/
let passWord = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test('AA#23asd')
// console.log(passWord)


/*........... 
 more info at https://www.sitepoint.com/learn-regex/
 ................ */