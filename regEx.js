const name = 'kiyv32';
// let myName = /[0-9]/.test(name);
// let myName = /[A-Z]/.test(name);
// let myName = /[a-z]/.test(name);
let myName = /[a-z].*[1-9]/.test(name);
// console.log(myName)


//two special case
let twoSpeacial = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/.test('kievMosko@#')
console.log(twoSpeacial)


/*........... 
 more info at https://www.sitepoint.com/learn-regex/
 ................ */