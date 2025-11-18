// // //array concept
// // //all returns the value
// // //push ,pop, shift, unshift, changes original value
// // // reverse ,sort ,  changes both(return ra value change garcha)



// // let arr1 = ["nischal", 25, false, "shrestha"];

// // // changing particular index

// // arr1[1] = 28;
// // arr1[2] = true;
// // arr1[0] = "nis";

// // console.log(arr1[0]);
// // console.log(arr1[1]);
// // console.log(arr1[2]);
// // console.log(arr1[3]);

// // console.log(arr1);
// // console.log(`length is ${arr1.length}`);

// // // reverse array

// // let arr2 = arr1.reverse();

// // console.log(arr2); 
// // console.log(arr1);

// // // push pop && unshift && shift
// // arr2.push("new");
// // console.log(arr2);
// // arr2.unshift("new1");
// // console.log(arr2);
// // arr2.pop(arr2);
// // console.log(arr2);
// // arr2.shift(arr2);
// // console.log(arr2);

// // // string and array conversion

// // // split(only in string)
// // let str = "nisachal";

// // let arr = str.split("");
// // console.log(arr);

// // // //join (only in array )
// // let arr3 = [1, 2, 3];

// // let str1 = arr3.join("");
// // console.log(str1);

// // // // //sort

// // let ar1 = ["m", "a", "d", "a", "m", "A", "Z"];

// // let ar2 = ar1.sort(); //ascending
// // console.log(ar2);

// // let ar3 = ar1.reverse();
// // console.log(ar3);

// // // //in JS capital ,are small in order
// // // //how to sort number in JS? number sorting

// // // let ar4 = [4, 2, 6, 1];
// // // console.log(ar4);

// // // console.log(ar4.sort());

// // //array destructuring
// // let [n1 = 5, n2, n3, n4 = 7] = [1, 2, 3,44];
// // console.log(n1);
// // console.log(n2);
// // console.log(n3);
// // console.log(n4);


// //in filter method all element of o/p must be from i/p

// // let ar1 = [1, 2, 3, 4].filter((v, i) => {
// //   if (v === 1 || v === 2) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });

// // console.log(ar1);

// // let ar2 = [1, 9, 11, 15, 3];
// // let ar3 = ar2.filter((item, index) => {
// //   if (item >= 11) return true;
// //   else return false;
// // });
// // console.log(ar3);
// // console.log(ar2);
// // // RETURNS [11, 15]



//  //find is version of filter which gives one output
// // let ar2 = [1, 9, 11, 15, 3, 27].find((v, i) => {
// //   if (v >= 15) return true;
// //   else return false;
// // });
// // console.log(ar2);

// // RETURNS 15




// //map method

// // map method(loop in array) only in array
// // use map method when input array's and output array's length are same

// let ar1 = [10, 11, 12, 13, 14].map((value, index) => {
//   return value * 10;
// });

// console.log(ar1);
// //returns [100, 110, 120, 130, 140]

// let ar2 = [1, 2, 3, 4].map((v, i) => {
//   return v + 2;
// });
// console.log(ar2); //returns [3, 4, 5, 6]

// let ar3 = [`a`, `b`, `c`, `d`].map((v, i) => {
//   let result = `${v}${i}`;
//   return result;
// });

// console.log(ar3);//returns ['a0', 'b1', 'c2', 'd3']

// try {
//   console.log(1);
//   let error = new Error("This is Error");
//   throw error;
//   console.log(2);
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("i am finally");
// }


// let { school, ...otherInfo } = {
//   name: "nis",
//   location: "sanepa",
//   college: "KEC",
//   school: "NAAV",
// };
// console.log(school);
// console.log(otherInfo);

