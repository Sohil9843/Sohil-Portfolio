// // var  a = "hello";
// // console.log(a)
// // a = 210;
// // console.log(a)

// // ----------------------------
// // let  a ='hello';

// // console.log(a);
// // a = 210;
// // console.log(a);

// // a = 12;  // declaration;
// // console.log(a);
// // var a; // initalisation.

// // ----------------------------------------

// let  str1 = "Hello JS"
// console.log(str1)

// let  str2 = 'Hello JS'
// console.log(str2)

// let str3 = new String("Hello GLA")
// console.log(str3)

let a = 200;
console.log(a)
const b = undefined;
console.log(b)

let c = null;
console.log(c);

let students = {
    id: 101,
    sname: "Sohail",
    isPassed: true,
    img: "sohil-photo.jpg"
}

// console.log(students);
let show = `
    <div style="text-align:center">
        <img src=${students.img} height="100px" width="100px">
        <h1 style="background:Tomato; color:white;">Student Name : ${students.sname}</h1><hr>
        <h2>ID : ${students.id}</h2>
        <h2>Passed: ${students.isPassed ? "Passed" : "Fail"}
    </div>
`
document.write(show)

