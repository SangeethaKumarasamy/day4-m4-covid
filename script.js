// function foo() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve("hello guvi"),5000);
//     })
// }
// function foo1() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>resolve("hello guvi geek"),3000);
//     })
// }
// async function compute() {
//     var res=await foo();
//     var res1=await foo1();
//     console.log(res);
//     console.log(res1);
// }
// compute();


//eg:4

// function foo(){
//     return new Promise((resolve, reject) =>setTimeout(()=>reject("hello"),3000));
// }

// function foo1(){
//     return new Promise((resolve, reject) =>setTimeout(()=>resolve("hello guvi"),5000));
// }

// async function compute(){
//     try {
//         var res=await foo();
//         var res1=await foo1();
//         console.log(res);
//         console.log(res1);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// compute();

 //eg:
// let temp=fetch('https://jsonplaceholder.typicode.com/posts')
// .then((data)=>{
//     return data.json();
// }).then((v1)=>{
//     console.log(v1);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log(temp);

// let temp=fetch('https://restcountries.com/v3/all')
// .then((value)=>{
//     return value.json();
// }).then((data)=>{
//     let cc=data[0].name;
//     console.log(cc);
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=e425ece2ddd3ff358cf86c41a99a3998`);
// }).then((value1)=>{
//     return value1.json();
// }).then((value2)=>{
//     console.log(value2.main);
// });

// let cc;
// let resturi='https://restcountries.com/v2/all';
// async function foo(){
//     let restcont=await fetch('https://restcountries.com/v2/all');
//     console.log(restcont);
//     let restcontdata=await restcont.json();
//     console.log(restcontdata);
//     cc=restcontdata[102].name;
//     let openweath=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=e425ece2ddd3ff358cf86c41a99a3998`);
//     console.log(openweath);
//     let openweathdata=await openweath.json();
//     console.log(openweathdata);
//     console.log(`${cc}:${openweathdata.main.temp}`);
// }
// foo();

function foo(){
let cc=document.getElementById("cname").value;
console.log(cc);
async function foo1(){
    let covidcase=await fetch(`https://api.covid19api.com/dayone/country/${cc}`);
    console.log(covidcase);
    let covidcasedata=await covidcase.json();
    console.log(covidcasedata);
    for(var i in covidcasedata){
        console.log(`${cc}:${covidcasedata[i].confirmed}:${covidcasedata[i].Death}`);
    }
}

foo1();
}
