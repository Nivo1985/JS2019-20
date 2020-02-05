///1
// var t = 1
// var r = 4

// if(true){console.log(t,r)}

//2
// var r = 4
// console.log('r')

//2,5 no insert

// var x =1;
// var y =5;
// var d  = x + y
// [1,2,3].forEach(e => console.log(e));

// var x =1
// var y =5
// var d  = x + y
// [1].forEach(e => console.log(e));

// var x =1;
// var y =5;
// var d  = x + y
// (function(){
//         console.log('call');
//     })();

// var x = [1,2,3]
// var t = x
// [1].toString()
// console.log(t);

//3

// function semicolonTest() {
//   return
//   {
//     test: 1
//   }
// }
// console.log(semicolonTest());

//4 Curly Braces

// function example()
// {
//     var get = function()
//     {
//         console.log('get');
//     }
//     return
//     {
//         get: get
//     }
// }
// console.log(example());

// function example()
// {
//     var get = function()
//     {
//         console.log('get');
//     }

//     return{
//         get: get
//     }
// }
// var i = example();
// console.log(example());
// example().get();



// function example(){
//     var get = function(){
//         console.log('get');
//     };

//     return{
//         get: get
//     };
// }
// console.log(example());
// example().get();

// 5 exists check

// var x;
// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x=1;
// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x=0;
// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// if(x){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x;
// if(typeof x !== 'undefined'){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x=0;
// if(typeof x !== 'undefined'){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// if(typeof x !== 'undefined'){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }

// var x;
// if(typeof x !== undefined){
//     console.log('X exists');
// }
// else{
//     console.log('X does not exists');
// }
// console.log(typeof x);
// console.log(typeof typeof x);