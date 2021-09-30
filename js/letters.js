function test() {
  

  

  // let numberOfIterations = 5; // number of uses 
  // // I will have to have the number of iterations detect the amount of letters/numbers the user puts in 
  // let i = 0;
  // let sum = 0;
  // while(i++ < answersSplit.length) {
  //   sum += i === 0 ? 40 : 20 ;
  // }

  var answers2 = document.getElementById('fname').value;
  console.log(answers2);
var input = document.getElementById("buttonlog").value;
var renderer = i2d.canvasLayer("#myCanvas", {}, {});
const timer = ms => new Promise(res => setTimeout(res, ms))

let answersString = Object.entries(answers2);

console.log(answersString);
console.log(typeof answersString);


// var answersObject = _.invert(answersString);
// console.log(answersObject);
// console.log(Object.values(answersString));
// let answers5 = Object.values(answersString);


let result  = Object.fromEntries(
  Object.entries(answers2).map(([k, v]) => [k, MSamples[v] ])
);
let resultImage = Object.fromEntries(
  Object.entries(answers2).map(([k, v]) => [k, MSImages[v] ])
);
console.log(Object.keys(resultImage));
console.log(result);
console.log(Object.keys(result).length);
let numbersahkj = Object.keys(result);

// console.log(Object.values(MSamples));
// console.log(typeof result);
// console.log(result.includes('M20,60'))

// Bellow is a way how I can turn an array to a string then back into a array
// const fruits = ["Banana", "Orange", "Apple", "Mango"] 
// let text = fruits.toString();
// console.log(text);
// let MyFruits = text.split(",")
// console.log(MyFruits);
// if ("A".includes('M20,60')) {
//   console.log('YES')
// }
newArrays = new Array();
// for (let i = 0; i < Object.keys(resultImage).length; i++) { setTimeout(function () {
    
//   console.log(resultImage);
//   console.log(resultImage[i]);
//   console.log(resultImage[i].join([]));
//   let result25 = resultImage[i].join([]);
//   console.log(result25);
//   var newImage = new Image();

// newImage.src = result25;
// newImage.classList.add('imageletters')

// console.log(newImage.src);
// console.log(newImage);
// if (newImage === newImage) { 

//   document.getElementById('myCanvas').appendChild(newImage);
// }


// }, i  * 2800);
// } 

  for (let i = 0; i < Object.keys(result).length; i++) { 
    
  if (result === result) {
    console.log(result[i].join());
    // let soultion1 = "M" + ((20 + 20).toString() + "," + (60 + 00).toString() + " " + M2060[answersString]); 
    console.log(Object.keys(result).length);
    console.log(result);
    console.log(Object.keys([i]));
    let objloopnumber = Object.values([i]);
    let objloopcode = Object.values([i]);
    console.log(objloopcode);
    console.log(objloopnumber);
    console.log(typeof objloopnumber)
    console.log(Number(objloopnumber));
    let sss = Number(objloopnumber);
    console.log(sss + 1)
    let objloopnumbers = sss + 1;
    console.log(objloopnumbers);
    console.log(result[i]);
    console.log(result[i].join());
    console.log(JSON.stringify(result[i]));

 let result2 = result[i].join();
 let result22 = JSON.stringify(result[i]);
 console.log(result22);
 console.log(result2);


 let soultion2 = "M" + ((80 + 20).toString() + "," + (40 + 00).toString() + " " ); 
 console.log(soultion2);

// console.log(result22.includes('M40,40'))
console.log(result22);
if (result22.includes('M40,40'))  {

  
  let soultion22 = "M" + ((40 + 20 * objloopnumbers).toString() + "," + (40 + 00).toString() + " " );
  console.log(soultion22);

  console.log('This is M40,40');
  console.log(result22.replace('M40,40', soultion22));
  var answers1 = result22.replace('M40,40', soultion22) ;

   console.log(answers1)

   // answers2 is the full d=" " script
    console.log(typeof answers1)

   
    var objectS = String(answers1); 
    result[0] = objectS;
    console.log(JSON.parse(objectS));
    console.log(result[i]);
    let answer7 = JSON.parse(objectS);
    console.log(answer7);
    
    newArrays.push(answer7);
    console.log(newArrays);
    // console.log(objectS.join("'"))
   console.log(objectS);
   console.log(typeof objectS);
   console.log(typeof nodes.attr.d);
   console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);



} else if (result22.includes('M40,60')) {
  let soultion22 = "M" + ((40 + 20 * objloopnumbers).toString() + "," + (60 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M40,60');
  console.log(result22.replace('M40,60', soultion22));
  var answers1 = result22.replace('M40,60', soultion22) ;

   console.log(answers1)
   // answers2 is the full d=" " script
   console.log(typeof answers1)

   
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   console.log(answer7);
   
   newArrays.push(answer7);
   console.log(newArrays);
   // console.log(objectS.join("'"))
  console.log(objectS);
  console.log(typeof objectS);
  console.log(typeof nodes.attr.d);
  console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);




} else if (result22.includes('M20,60')) {
  let soultion22 = "M" + ((20 + 20 * objloopnumbers).toString() + "," + (60 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,60');
  console.log(result22.replace('M20,60', soultion22));
  var answers1 = result22.replace('M20,60', soultion22) ;

   console.log(answers1)
   // answers2 is the full d=" " script
   console.log(typeof answers1)

   
    var objectS = String(answers1); 
    result[0] = objectS;
    console.log(JSON.parse(objectS));
    console.log(result[i]);
    let answer7 = JSON.parse(objectS);
    console.log(answer7);
    
    newArrays.push(answer7);
    console.log(newArrays);
    // console.log(objectS.join("'"))
   console.log(objectS);
   console.log(typeof objectS);
   console.log(typeof nodes.attr.d);
   console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);



}  else if (result22.includes('M20,40')) {
  let soultion22 = "M" + ((20 + 20 * objloopnumbers).toString() + "," + (40 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,40');
  console.log(result22.replace('M20,40', soultion22));
  var answers1 = result22.replace('M20,40', soultion22) ;

   console.log(answers1)
   // answers2 is the full d=" " script
   console.log(typeof answers1)

   
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   console.log(answer7);
   
   newArrays.push(answer7);
   console.log(newArrays);
   // console.log(objectS.join("'"))
  console.log(objectS);
  console.log(typeof objectS);
  console.log(typeof nodes.attr.d);
  console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);



} else if (result22.includes('M30,40')) {
  let soultion22 = "M" + ((30 + 20 * objloopnumbers).toString() + "," + (40 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M30,40');
  console.log(result22.replace('M30,40', soultion22));
  var answers1 = result22.replace('M30,40', soultion22) ;

   console.log(answers1)
   // answers2 is the full d=" " script
   console.log(typeof answers1)

   
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   console.log(answer7);
   
   newArrays.push(answer7);
   console.log(newArrays);
   // console.log(objectS.join("'"))
  console.log(objectS);
  console.log(typeof objectS);
  console.log(typeof nodes.attr.d);
  console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);



} else if (result22.includes('M30,60')) {
  let soultion22 = "M" + ((30 + 20 * objloopnumbers).toString() + "," + (60 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M30,60');
  console.log(result22.replace('M30,60', soultion22));
  var answers1 = result22.replace('M30,60', soultion22) ;

   console.log(answers1)
   // answers2 is the full d=" " script
   console.log(typeof answers1)

   
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   console.log(answer7);
   
   newArrays.push(answer7);
   console.log(newArrays);
   // console.log(objectS.join("'"))
  console.log(objectS);
  console.log(typeof objectS);
  console.log(typeof nodes.attr.d);
  console.log(nodes.attr.d)

//  let answers3 = nodes.setAttr('d', objectS);



} else if  (result22.includes('M20,70')) {
  let soultion22 = "M" + ((20 + 20 * objloopnumbers).toString() + "," + (70 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,70');
  console.log(result22.replace('M20,70', soultion22));
  var answers1 = result22.replace('M20,70', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   let answer7 = JSON.parse(objectS);
   console.log(answer7);
   
   newArrays.push(answer7);
   console.log(newArrays);
   // console.log(objectS.join("'"))
  console.log(objectS);
  console.log(typeof objectS);
  console.log(typeof nodes.attr.d);
  console.log(nodes.attr.d) 
} else if (result22.includes('M20,50')) {
  let soultion22 = "M" + ((20 + 20 * objloopnumbers).toString() + "," + (50 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,50');
  console.log(result22.replace('M20,50', soultion22));
  var answers1 = result22.replace('M20,50', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
}  else if (result22.includes('M10,20')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (20 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,20');
  console.log(result22.replace('M10,20', soultion22));
  var answers1 = result22.replace('M10,20', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
}   else if (result22.includes('M10,20')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (20 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,20');
  console.log(result22.replace('M10,20', soultion22));
  var answers1 = result22.replace('M10,20', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} else if (result22.includes('M20,20')) {
  let soultion22 = "M" + ((20 + 20 * objloopnumbers).toString() + "," + (20 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,20');
  console.log(result22.replace('M20,20', soultion22));
  var answers1 = result22.replace('M20,20', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} else if (result22.includes('M10,30')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (30 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,30');
  console.log(result22.replace('M10,30', soultion22));
  var answers1 = result22.replace('M10,30', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} else if (result22.includes('M10,30')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (30 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,30');
  console.log(result22.replace('M10,30', soultion22));
  var answers1 = result22.replace('M10,30', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} 
else if (result22.includes('M10,60')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (60 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,60');
  console.log(result22.replace('M10,60', soultion22));
  var answers1 = result22.replace('M10,60', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} else if (result22.includes('M10,40')) {
  let soultion22 = "M" + ((10 + 20 * objloopnumbers).toString() + "," + (40 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M10,40');
  console.log(result22.replace('M10,40', soultion22));
  var answers1 = result22.replace('M10,40', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
}  else if (result22.includes('M30,20')) {
  let soultion22 = "M" + ((30 + 20 * objloopnumbers).toString() + "," + (20 + 00).toString() + " " );
  console.log(soultion22);
  console.log('This is M20,20');
  console.log(result22.replace('M30,20', soultion22));
  var answers1 = result22.replace('M30,20', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
}   else if (result22.includes('M40,70')) {
  let soultion22 = "M" + ((40 + 20 * objloopnumbers).toString() + "," + (70 + 0).toString() + " " );
  console.log(soultion22);
  console.log('This is M40,70');
  console.log(result22.replace('M40,70', soultion22));
  var answers1 = result22.replace('M40,70', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} else if (result22.includes('M40,20')) {
  let soultion22 = "M" + ((40 + 20 * objloopnumbers).toString() + "," + (20 + 0).toString() + " " );
  console.log(soultion22);
  console.log('This is M40,20');
  console.log(result22.replace('M40,20', soultion22));
  var answers1 = result22.replace('M40,20', soultion22) ;
   var objectS = String(answers1); 
   result[0] = objectS;
   console.log(JSON.parse(objectS));
   console.log(result[i]);
   let answer7 = JSON.parse(objectS);
   newArrays.push(answer7);
} 
else () => {
  console.log('Something is wrong');
}
console.log(newArrays);
ChainInstance.start();
//  let result3 = soultion2.split("''");
 

//  console.log(typeof result3);
//  console.log(typeof result)
//     result3.push(i);
//     console.log(result);


  //   result3.push(result);
  // console.log(result3.push(result));

    // check if what number in the order it is
//   } else if (result.includes('M40,40') ) {
//     let soultion2 = "M" + ((40 + 20).toString() + "," + (40 + 00).toString() + " " + M4040[answersString]); 
//     console.log('this is M40,40');
// console.log(soultion2);
//   } else if (result.includes('M40,60') ) {
   
//     console.log('this is M40,60');
//     console.log(soultion);
//     return soultion;
//     // check if what number in the order it is

//     // check if what number in the order it is
//   } else if (result.includes('M20,40') ) {
//     let soultion = "M" + ((20 + 20).toString() + "," + (40 + 00).toString() + " " + M2040[answersString]); 
//     console.log('this is M20,40');
//     console.log(soultion);
//     console.log(typeof soultion);
//     return soultion;
//     // check if what number in the order it is
//   } else if (result.includes('M30,40')) {
//     let soultion = "M" + ((30 + 20).toString() + "," + (40 + 00).toString() + " " + M3040[answersString]); 
//     console.log('this is M30,40');
//     console.log(soultion);
//     console.log(typeof soultion);
//     return soultion;
//     // check if what number in the order it is
//   }
//   else if (result.includes('M30,60')) {
//     let soultion = "M" + ((30 + 20).toString() + "," + (60 + 00).toString() + " " + M3060[answersString]); 
//     console.log('this is M30,60');
//     console.log(soultion);
//     console.log(typeof soultion);
//     // check if what number in the order it is
//     return soultion;
  // }
  // else if (result.includes('M20,70') ) {
  //   let soultion = "M" + ((20 + 20).toString() + "," + (70 + 00).toString() + " " + M2070[answersString]); 
  //   console.log('this is M20,70');
  //   console.log(soultion);
  //   console.log(typeof soultion);
  //   return soultion;[p]
    // check if what number in the order it is

  } else () => {
  console.log('something is wrong');
 }
  // else if (Space[answers2]) {
  //   let soultion = "M" + ((20 + 20).toString() + "," + (00 + 00).toString() + " " + space); 
  //   console.log('this is a space');
  //   console.log(soultion);
  //   console.log(typeof soultion)
  //   // check if what number in the order it is
//  if (answers2 === answers2) {
//   let answers3 = nodes.setAttr('d', objectS)
//   i++;
//  }
  ChainInstance.start();
  }
  console.log(newArrays.length);
  // Bellow is the the implementation
  

  
  for (let i = 0; i < newArrays.length; i++) { setTimeout(function () {
    
  
    console.log(newArrays[i]);
    let result22 = JSON.stringify(newArrays[i]);
    let result2 = newArrays[i].join();    
    console.log(result2);
  
   let answer7 = JSON.parse(objectS);
   let objloopnumber = Object.values([i]);

   console.log(objloopnumber);
   console.log(typeof objloopnumber)
   console.log(Number(objloopnumber));
   let sss = Number(objloopnumber);
   ChainInstance.start();
   let answers3 = nodes.setAttr('d', result2);
   answers3.animatePathTo({
    duration: 3000,
    loop: 1,
    ease: "linear",
    direction: "alternate",
})

// HAVE A WAY TO CREATE A IMAGE tab <img src=""> </img>
// and have it be created with an added class="imageletters"
//    var answers4 = renderer.createEls(data, {
//     el:'path',
//     attr:{
//         d = answers3
//     }
    
// }).animatePathTo({
//   duration: 1000,
//   loop: 1,
//   ease: "linear",
//   direction: "alternate",
// })

  //  newArrays.forEach(( sss) => {
  //   setTimeout(() => {
  //     let answers3 = nodes.setAttr('d', result2);
      
  //   },  2000);
    
  //   });
    // newArrays.forEach((answers3, i) => {
    //   setTimeout(() => {
    //     let answers3 = nodes.setAttr('d', result2);
    //   }, i * 4000);  // one sec interval
    //  });

     console.log(result2);

    // let start = 1
    // setTimeout(function(){
    //   let interval = setInterval(function(){
    //     if(start == 10) clearInterval(interval)
    //     start++
    //     let answers3 = nodes.setAttr('d', result2);
    //   }, 3000)
    // }, 3000)

}, i * 3500);
ChainInstance.start();
}
for (let i = 0; i < Object.keys(resultImage).length; i++) { setTimeout(function () {
  let result25 = resultImage[i].join([]);
  var newImage = new Image();
newImage.src = result25;
newImage.classList.add('imageletters')
if (newImage === newImage) { 
  document.getElementById('myCanvas').appendChild(newImage);
}
}, i  * 3500);
} 
  // function result2() {
  //   setTimeout(function() {
  //     let answers3 = nodes.setAttr('d', result2);
  // }, 2000000 * i);
  // }
  ChainInstance.start();
  console.log(newImage);

//   console.log(M2060[answersString] || M4040[answersString]  || M4060[answersString] || M2040[answersString] || M3040[answersString] || M3060[answersString] || M2070[answersString] );
// console.log(answersString);
}



  // var Answers = document.getElementById('fname').value;
  // var answers2 = document.getElementById('fname').value;
  // var input = document.getElementById("buttonlog").value;
  // var renderer = i2d.canvasLayer("#myCanvas", {}, {});
  // // console.log(CapitalLetters.hasOwnProperty('A'));


  // let result  = Object.fromEntries(
  //   Object.entries(answers2).map(([k, v]) => [k, MSamples[v] ])
  // );
  // let result2 = result[i].join();
  // if(MSamples.hasOwnProperty(result2) ) {
  //   console.log('yes')
  //   console.log(MSamples[result] );
  //   var answers1 = MSamples[result] ;
  //   // I could switch answers1 with soultion
  //  console.log(answers1)
  //  // answers2 is the full d=" " script
  //   console.log(typeof answers1)
  //  console.log(answers1.join());
   
  //   var objectS = String(answers1); 
  //  console.log(objectS);
  //  console.log(typeof nodes.attr.d);
  //  console.log(typeof soultion)
  //  let answers3 = nodes.getAttr('d', objectS);
  //  console.log(nodes.setAttr('d', objectS ));
  //  console.log(answers3);
  //  console.log( typeof soultion)
  // } else {
  //   console.log('no')
  //   console.log(answers2);
  // }
  // ChainInstance.start();

  //   var answers1 = CapitalLetters[answers2] || LowerLetters[answers2] || NumberLetters[answers2]



  //     for (Answers in CapitalLetters || A in LowerLetters || key in NumberLetters) {
  //       if (answers2 === CapitalLetters['A'][0]) {
  //         console.log('something')
  //         break;
  //     }
        


function bobds(nodes,  renderer , answers3) {    
  let ChainInstance = (selectedtype === 'sequence' ? i2d.chain.parallelChain() : i2d.chain.sequenceChain());
        nodes.createEl( {
            el: "path",
           attr: {
            d: 'M20,40  l10,16 l10,-16',

            },
            style: {
                lineWidth: 5,
                strokeStyle: "#f00000",
                shadowColor: "red",
                lineCap: "round",
            },
        }).forEach(function chains(da){
            nodes.add(this.animateExe({
                duration:1000,
                ease: 'linear',
                attr: {
                    d: 'M40,50  l10,16 l10,-16',
                    // x2: da.x,

                },
            end: function (d) {
          nodes.createEl({
              el: 'linear ',
              attr: {
                d: 'M20,40  a4,4 0 0 1 5,35   a4,4 0 0 1 5,35  a4,4 0 0 1 -5,-35 a4,4 0 0 1 -5,-35',
              },
              style: { lineWidth: 5,
                strokeStyle: "#f00000",
                shadowColor: "red",
                lineCap: "round", }
         });
         
         console.log(bobs);
         bobs(d);
            }
          }))
          });
            ChainInstance.start();
        }
   
Mvariables = {
  M2060:[ 'M20,60'],
  M4040: ['M40,40'],
  M2040:["20,40"],
  M3040:[ 'M30,40'],
  M3060: ['M30,60'],
  M2070:[ 'M20,70'],
}


// I am also going to have tp figure out a way to make it so letters and numers equal these variables

// }
function testss () {
        
  let ChainInstance = i2d.chain.sequenceChain();
 var nodes = renderer.createEl({ 
          el: "path",
         attr: {
          d:   "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v30 a10,5 0 0 1 -20,0  "
          // v- = up  v+ = down h+ = right h- = left
          },
          style: {
              lineWidth: 5,
              strokeStyle: "#f00000",
              shadowColor: "red",
              lineCap: "round",
          },
        }).forEach(function (da) {
        // every line animation executable is being added to the chain instance.
        chain.add(this.animateExe({
          duration: 1000,
          ease: 'linear',
          direction: "alternate",
          attr: {
            d : result2
          }
        }))
      });
      
      ChainInstance.start();
  ChainInstance.start();        

  // For a given object, it creates Chain instance and for given childrens it creates Elements and adds the animateExe executables to the chain instance.
// and Triggers the chain execution. On completion of ever child transition, render method will be invoked recursively for the subsequent childrens.
function render (d) {
  console.log(d);
  // Based on selectedType, chain instance will be created.
  var chain = (selectedtype === 'sequence' ? i2d.chain.parallelChain() : i2d.chain.sequenceChain());
  
  // Creating Lines for childrens.
  g.createEls(d.children, {
    el: 'line',
    attr: {
      x1: d.x, y1: d.y,
      x2: d.x, y2: d.y
    },
    style: {
      lineWidth: 4,
      strokeStyle: '#ff3679'
    }
  }).forEach(function (da) {
    // every line animation executable is being added to the chain instance.
    chain.add(this.animateExe({
      duration: 1000,
      ease: 'easeInOutSin',
      attr: {
        x2: da.x,
        y2: da.y
      },
      
      end: function (d) {
         g.createEl({
              el: 'circle',
              attr: {
                cx: d.x, cy: d.y, r: 3
              },
              style: { fillStyle: 'white' }
         });
         console.log(d);
         // on end to the animation, trigger render method recursively to perform subsequent children animations.
         render(d);
      }
    }))
  });
  console.log(d);
  // chain execution starts.
  chain.start();
}


}