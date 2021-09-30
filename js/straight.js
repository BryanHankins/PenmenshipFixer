




  var CapitalLetters2 = /([A-Z])\w+/g;
  var LowerLetters2 = /([a-z])\w/g;
  var NumberLetters2 = /([0-9])\d/g;
  var renderer = i2d.canvasLayer('#myCanvas', {}, { enableEvents: false
  });
  var Answers = document.getElementById('fname').value;
  var button1 = document.getElementById('buttonlog');

  
//   var CapitalLetters = {
//     "A" : [
//       " v-20 l10,-20 l10,20 v20 v-15 h-20 ",
//      ],
//      "B" : [
//       " v-40  a20,10 0 0 1 0,20   a20,10 0 0 1 0,20 ",
//      ],
//      "C" : [
//        "M40,40 a5,5 0 0 0 0,40 ",
//        // need to redo
//      ],
//      "D" : [
//       " a5,5 0 0 1 0,40  v-40",
//      ],
//      "E" : [
//       " h20 h-20 v20 h20 h-20 v20 h20 h-20 ",
//      ],
//      "F" : [
//       "  h20 h-20 v40 v-20 h20  ",
//      ],
//      "G" : [
//       " h10 v20 a5,5 0 0 1 0,-40 ",
//       // need to redo
//      ],
//      "H" : [
//       " v-40 v20 h20 v20 v-40 ",
//       // need to move down
//      ],
//      "I" : [
//       " h20 h-10 v-40 h10 h-20 ",
//       // need to move down
//      ],
//      "J" : [
//       " a10,10 90 0 0 20,-8 v-20  ",
//       // need to move right
//      ],
//      "K" : [
//       " v40 v-20 h2 l20,20  l-20,-20  l20,-20 ",
//       // Need to center
//      ],
//      "L" : [
//       "  v40  h20  ",
      
//      ],
//      "M" : [
//       " v-40  l10,20   l10,-20 v40 ",
//      ],
//      "N" : [
//        " v-36  l20,40  v-40  ",
//      ],
//      "O" : [
//         " a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40   ",
//      ],
//       "P" : [
//       " v-36 h10 a5,5 0 0 1 5,15 h-15  ",
//      ],
//       "Q" : [
//       "M40,40 a4,4 0 0 1 10,40 a5,5 0 0 1 -10,-40 a4,4 0 0 1 10,40 l10,10   ",
//      ],
//       "R" : [
//       " v-36 h10 a5,5 0 0 1 5,20 h-15 h15 l5,20 ", 
//      ],
//       "S" : [
//       "M40,40  h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
//      ],
//       "T" : [
//        " v-40 h10 h-20 ",
//      ],
//       "U" : [
//        "  a5,20 0 0 0 20,0   ",
//      ],
//       "V" : [
//        "  l10,40 l10,-40 "  ,
//      ],
//       "W" : [
//        "  l10,40 l10,-40  l10,40 l10,-40"  ,
//      ],
//       "X" : [
//        "M40,40 l-10,20 l-10,-20 l10,20 l-10,20 l10,-20 l10,20"  ,  ,
//      ],
//       "Y" : [
//        "M40,40 l-10,20 l-10,-20 l10,20 v20", 
//      ],
//       "Z" : [
//         " h20 l-20,40 h20  ", 
//      ],
//    }
//   var LowerLetters = {
//     "a" : [
//       "M40,40   a5,5 45 0 1 20,0 v20 v-15 a10,4 1 0 0 0,15 ",
//      ],
//      "b" : [
//       " v-30 v15 a3,2 1 0 1 0,16  ",
//      ],
//      "c" : [
//       " a5,5 0 0 0 0,20 ",
//      ],
//      "d" : [
//       " v-30 v15 a3,2 1 0 0 0,16 ",
//      ],
 
//      "e" : [
//       "M20,50 h10 v-10 a5,5 0 0 0 -5,20 h7",
//      ],
//      "f" : [
//       " v-20  a5,5 90 0 1 10,0  a5,5 90 0 00 -10,0 v7 h-10 h20",
//      ],
//      "g" : [
//       " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a10,10 0 0 1 10,10 v-10 v20  a10,15 0 0 1 -5,10 h-15",
//       // have g be placed on the bottom 
//      ],
//      "h" : [
//       " v40  a10,5 90 0 1 20,0 ",
//      ],
//      "i" : [
//       " v-20",
//     //  Have v-20 to find a way to make the dot
//      ],
//      "j" : [
//       " v20 a2,2 90 0 1  -10,1"
//      //  "Have to find a way to make the dot",
//      ],
//      "k" : [
//       " v20 v-10 h2 l20,10  l-20,-10  l20,-10 ",
//      ],
//      "l" : [
//       " v20 ",
//      ],
//      "m" : [
//       " v-20  v20 a1,3 0 0 1 10,0 a1,3 0 0 1 10,0",
//      ],
//      "n" : [
//       " v-23  v23 a1,2 0 0 1 20,0",
//       // possable replacement " v-20  v20 a1,3 0 0 1 10,0"
//      ],
//      "o" : [
//       " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20    ",
//      ],
//       "P" : [
//       "M40,70 v-20  a2.5,5 90 0 1 1,10   "
//      ],
//       "q" : [
//       "M40,70 v-20  a2.5,5 90 0 0 1,10  "
//      ],
//       "r" : [
//       "  v-20 v7 a40,11 90 0 1 10,5   " 
//      ],
//       "s" : [
//       "M40,40 a5,5 45 0 0 -5,10   a5,5 45 0 1 -5,10  "
//      ],
//       "t" : [
//       " v-20 v10 h10 h-20 "
//      ],
//       "u" : [
//       " v15 a10,10 0 0 0 20,-4 v-10"
//      ],
//       "v" : [
//       "  l10,20 l10,-20  "
//      ],
//       "w" : [
//       "  l10,20 l10,-20  l10,20 l10,-20 "
//      ],
//       "x" : [
//       "  l20,-20  l-10,10 l10,10 l-10,-10 l-10,-10 "
//      ],
//       "y" : [
//       "  l10,20 l10,-20  l-10,20  l-10,20 "
//      ],
//       "z" : [
//         " h20 l-20,20 h20 ",
//      ]
//    }
//   var NumberLetters = {
//     0 : [
//       " a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
//      ],
//   1 : [
//    " h20 h-10 v-40 l-10,10 ",
//   ],
//   2 : [
//    "  a5,7 0 0 1 20,0  l-20,33 h20 ",
//   ],
//   3 : [
//    "  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
//   ],
//   4 : [
//    "  v-40 l-20,20 h30",
//   ],
//   5 : [
//    "M40,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
//   ],
//   6 : [
//     " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
//   ],
//   7 : [
//      "  l5,-18 l5,-18 l-2.5,18 l18,15 l-18,-15 l-15,-18 "  ,
//   ],
//   8 : [
//    " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
//   ],
//   9 : [
//     " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
//   ]
// }

var MSamples = {
  "A" : [
    "M20,60 v-20 l10,-20 l10,20 v20 v-20 h-20 h20 v20 ",
   ],
   "B" : [
    "M20,60 v-40  a20,10 0 0 1 0,20   a20,10 0 0 1 0,20 ",
   ],
   "C" : [
    "M40,20 a5,5 0 0 0 0,40 ",
    // need to redo
  ],
  "D" : [
    "M20,20 a5,5 0 0 1 0,40  v-40",
   ],
   "E" : [
    "M20,20  h20 h-20 v20 h20 h-20 v20 h20 h-20 ",
   ],
   "F" : [
    "M20,20  h20 h-20 v40 v-20 h20 h-10 ",
   ],
   "G" : [
    "M30,40 h10 v20 a5,5 0 0 1 0,-40 ",
    // need to redo
  ],
   "H" : [
    "M20,60 v-40 v20 h20 v20 v-40 ",
    // need to move down
   ],
   "I" : [
    "M20,60 h20 h-10 v-40 h10 h-20 ",
    // need to move down
   ],
   "J" : [
    "M20,50 a10,10 90 0 0 20,-8 v-20  ",
    // need to move right
   ],
   "K" : [
    "M20,20  v40 v-20 h2 l20,20  l-20,-20  l20,-20 ",

   ],
   "L" : [
    "M20,20   v40  h20  ",
    
   ],
   "M" : [
    "M20,60 v-40  l10,20   l10,-20 v40 ",
   ],
   "N" : [
    "M20,60 v-36  l20,40  v-40  ",
  ],
  "O" : [
    "M30,20  a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40   ",
],
   "P" : [
    "M20,60 v-36 h10 a5,5 0 0 1 5,15 h-15  ",
   ],
   "Q" : [
    "M10,20  a10,20 0 0 1 0,40 a10,20 0 0 1 0,-40  a10,20 0 0 1 0,40  l10,10 ",
   ],
   "R" : [
    "M20,60 v-36 h10 a5,5 0 0 1 5,20 h-15 h15 l5,20 ", 
   ],
   "S" : [
    "M20,20  h-10 a3,3 0 0 0 0,20  a3,3 0 0 1 0,20 h-10 ",
   ],
   "T" : [
    "M30,60 v-40 h10 h-20 ",
  ],
   "U" : [
    "M20,20  a5,20 0 0 0 20,0   ",
  ],
   "V" : [
    "M20,20  l10,40 l10,-40 "  ,
  ],
   "W" : [
    "M20,20  l10,40 l10,-40  l10,40 l10,-40"  ,
  ],
    "X" : [
     "M20,20 l-10,20 l-10,-20 l10,20 l-10,20 l10,-20 l10,20"  ,  ,
   ],
   "Y" : [
    "M20,20 l-10,20 l-10,-20 l10,20 v20", 
  ],
   "Z" : [
     "M20,20 h20 l-20,40 h20  ", 
  ],
   "a" : [
    "M30,40   a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20   h10 v25  ",
   ],
   "b" : [
    "M20,60 v-30 v15 a3,2 1 0 1 0,16  ",
   ],
   "c" : [
    "M30,40  a5,5 0 0 0 0,20 ",
  ],
   "d" : [
    "M40,60 v-30 v15 a3,2 1 0 0 0,16 ",
   ],
   "e" : [
    "M20,40 h10 v-10 a5,5 0 0 0 -5,20 h7",
   ],
   "f" : [
    " M30,60  v-20 v10 h-10 h20 h-10 v-10  a5,5 90 0 1 10,0   ",
   ],
   "g" : [
    "M30,40  a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a10,10 0 0 1 10,10 v-10 v20  a10,15 0 0 1 -5,10 h-15",
  ],
   "h" : [
    "M20,20 v40  a10,5 90 0 1 20,0 ",
   ],
   "i" : [
    "M30,60 v-20",
  //  Have v-20 to find a way to make the dot
   ],
   "j" : [
    "M30,40  v20 a2,2 90 0 1  -10,1"
  //  "Have to find a way to make the dot",
  ],
   "k" : [
    "M20,40 v40 v-20 h2 l20,15  l-20,-15  l20,-7 ",
   ],
   "l" : [
    "M20,40 v40 ",
   ],
   "m" : [
    "M20,60 v-20  v20 a1,3 0 0 1 10,0 a1,3 0 0 1 10,0",
   ],
   "n" : [
    "M20,60 v-23  v23 a1,2 0 0 1 20,0",
 
   ],
   "o" : [
    "M30,40  a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20    ",
  ],
  "p" : [
    "M30,40  a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20   h-10 v40  "
   ],
    "q" : [
    "M30,40   a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20   h10 v40   "
   ],
   "r" : [
    "M30,60  v-20 v7 a40,11 90 0 1 10,5   " 
   ],
   "s" : [
    "M40,40 a5,5 45 0 0 -5,10   a5,5 45 0 1 -5,10  "
   ],
   "t" : [
    "M30,60 v-30 v30 v-20 h10 h-20"
   ],
   "u" : [
    "M20,40 v15 a10,10 0 0 0 20,-4 v-10"
   ],
    "v" : [
    "M20,40  l10,20 l10,-20  "
   ],
   "w" : [
    "M40,20   l5,20 l5,-20  l5,20 l5,-20"
   ],
   "x" : [
    "M20,60  l20,-20  l-10,10 l10,10 l-10,-10 l-10,-10 "
   ],
   "y" : [
    "M20,40 l10,20 l10,-20  l-10,20  l-10,20 "
   ],
    "z" : [
      "M20,40 h20 l-20,20 h20 ",
   ],
   "0" : [
    "M30,20  a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
  ],
   "1" : [
    "M20,60 h20 h-10 v-40 l-10,10 ",
    ],
    "2" : [
      "M20,40  a5,10 0 0 1 20,0  l-20,20 h20 ",
      ],

"3" : [
 " M20,20  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
],
"4" : [
  "M40,60  v-40 l-20,20 h20",
 ],
 "5" : [
  "M20,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
  ],
  "6" : [
    "M30,40  a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
    ],
"7" : [
  "M20,20   h20 l-20,40"  ,
],
"8": [
  "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
  ],
 "9": [
    "M30,40 a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v30 a10,5 0 0 1 -20,0 ",
  ],
 }

 var MSImage =  new Array();
 MSImage[1] = new Image();
 MSImage[1].src = "img2/A.svg"
 console.log(MSImage[1]);
 MSImage[2] = new Image();
 MSImage[2].src = "img2/B.svg"
 MSImage[3] = new Image();
 MSImage[3].src = "img2/C.svg"
 MSImage[4] = new Image();
 MSImage[4].src = "img2/D.svg"
 MSImage[5] = new Image();
 MSImage[5].src = "img2/E.svg"
 MSImage[6] = new Image();
 MSImage[6].src = "img2/F.svg"
 MSImage[7] = new Image();
 MSImage[7].src = "img2/G.svg"
 MSImage[8] = new Image();
 MSImage[8].src = "img2/H.svg"
 MSImage[9] = new Image();
 MSImage[9].src = "img2/I.svg"
 MSImage[10] = new Image();
 MSImage[10].src = "img2/J.svg"
 MSImage[11] = new Image();
 MSImage[11].src = "img2/K.svg"
 MSImage[12] = new Image();
 MSImage[12].src = "img2/L.svg"
 MSImage[13] = new Image();
 MSImage[13].src = "img2/J.svg"
 MSImage[14] = new Image();
 MSImage[14].src = "img2/K.svg"
 MSImage[15] = new Image();
 MSImage[15].src = "img2/M.svg"
 MSImage[16] = new Image();
 MSImage[16].src = "img2/N.svg"
 MSImage[17] = new Image();
 MSImage[17].src = "img2/O.svg"
 MSImage[18] = new Image();
 MSImage[18].src = "img2/P.svg"
 MSImage[15] = new Image();
 MSImage[15].src = "img2/M.svg"
 MSImage[16] = new Image();
 MSImage[16].src = "img2/N.svg"
 MSImage[17] = new Image();
 MSImage[17].src = "img2/O.svg"
 MSImage[18] = new Image();
 MSImage[18].src = "img2/P.svg"
 MSImage[19] = new Image();
 MSImage[19].src = "img2/Q.svg"
 MSImage[20] = new Image();
 MSImage[20].src = "img2/R.svg"
 MSImage[21] = new Image();
 MSImage[21].src = "img2/S.svg"
 MSImage[22] = new Image();
 MSImage[22].src = "img2/T.svg"
 MSImage[23] = new Image();
 MSImage[23].src = "img2/U.svg"
 MSImage[24] = new Image();
 MSImage[24].src = "img2/V.svg"
 MSImage[25] = new Image();
 MSImage[25].src = "img2/W.svg"
 MSImage[26] = new Image();
 MSImage[26].src = "img2/X.svg"
 MSImage[27] = new Image();
 MSImage[27].src = "img2/Y.svg"
 MSImage[28] = new Image();
 MSImage[28].src = "img2/Z.svg"
 MSImage[29] = new Image();
 MSImage[29].src = "img2/Aa.svg"
 MSImage[30] = new Image();
 MSImage[30].src = "img2/Bb.svg"
 MSImage[31] = new Image();
 MSImage[31].src = "img2/Cc.svg"
 MSImage[32] = new Image();
 MSImage[32].src = "img2/Dd.svg"
 MSImage[33] = new Image();
 MSImage[33].src = "img2/Ee.svg"
 MSImage[34] = new Image();
 MSImage[34].src = "img2/Ff.svg"
 MSImage[35] = new Image();
 MSImage[35].src = "img2/Gg.svg"
 MSImage[36] = new Image();
 MSImage[36].src = "img2/Hh.svg"
 MSImage[37] = new Image();
 MSImage[37].src = "img2/Ii.svg"
 MSImage[38] = new Image();
 MSImage[38].src = "img2/Jj.svg"
 MSImage[39] = new Image();
 MSImage[39].src = "img2/Kk.svg"
 MSImage[40] = new Image();
 MSImage[40].src = "img2/Ll.svg"
 MSImage[41] = new Image();
 MSImage[41].src = "img2/Mm.svg"
 MSImage[42] = new Image();
 MSImage[42].src = "img2/Nn.svg"
 MSImage[40] = new Image();
 MSImage[40].src = "img2/Oo.svg"
 MSImage[41] = new Image();
 MSImage[41].src = "img2/Pp.svg"
 MSImage[42] = new Image();
 MSImage[42].src = "img2/Qq.svg"
 MSImage[43] = new Image();
 MSImage[43].src = "img2/Rr.svg"
 MSImage[44] = new Image();
 MSImage[44].src = "img2/Ss.svg"
 MSImage[45] = new Image();
 MSImage[45].src = "img2/Tt.svg"
 MSImage[46] = new Image();
 MSImage[46].src = "img2/Uu.svg"
 MSImage[47] = new Image();
 MSImage[47].src = "img2/Vv.svg"
 MSImage[48] = new Image();
 MSImage[48].src = "img2/Ww.svg"
 MSImage[49] = new Image();
 MSImage[49].src = "img2/Xx.svg"
 MSImage[50] = new Image();
 MSImage[50].src = "img2/Yy.svg"
 MSImage[51] = new Image();
 MSImage[51].src = "img2/Zz.svg"
 MSImage[52] = new Image();
 MSImage[52].src = "img2/1.svg"
 MSImage[53] = new Image();
 MSImage[53].src = "img2/2.svg"
 MSImage[54] = new Image();
 MSImage[54].src = "img2/3.svg"
 MSImage[55] = new Image();
 MSImage[55].src = "img2/4.svg"
 MSImage[56] = new Image();
 MSImage[56].src = "img2/5.svg"
 MSImage[57] = new Image();
 MSImage[57].src = "img2/6.svg"
 MSImage[58] = new Image();
 MSImage[58].src = "img2/7.svg"
 MSImage[59] = new Image();
 MSImage[59].src = "img2/8.svg"
 MSImage[60] = new Image();
 MSImage[60].src = "img2/9.svg"
 MSImage[61] = new Image();
 MSImage[61].src = "img2/0.svg"
 console.log(MSImage)
 
 let MSImages = {
  "A": ["img2/A.svg"],
  "B": ["img2/B.svg"],
  "C": ["img2/C.svg"],
  "D": ["img2/D.svg"],
  "E": ["img2/E.svg"],
  "F": ["img2/F.svg"],
  "G": ["img2/G.svg"],
  "H": ["img2/H.svg"],
  "I": ["img2/I.svg"],
  "J": ["img2/J.svg"],
  "K": ["img2/K.svg"],
  "L": ["img2/L.svg"],
  "M": ["img2/M.svg"],
  "N": ["img2/N.svg"],
  "O": ["img2/O.svg"],
  "P": ["img2/P.svg"],
  "Q": ["img2/Q.svg"],
  "R": ["img2/R.svg"],
  "S": ["img2/S.svg"],
  "T": ["img2/T.svg"],
  "U": ["img2/U.svg"],
  "V": ["img2/V.svg"],
  "W": ["img2/W.svg"],
  "X": ["img2/X.svg"],
  "Y": ["img2/Y.svg"],
  "Z": ["img2/Z.svg"],
  "a": ["img2/Aa.svg"],
  "b": ["img2/Bb.svg"],
  "c": ["img2/Cc.svg"],
  "d": ["img2/Dd.svg"],
  "e": ["img2/Ee.svg"],
  "f": ["img2/Ff.svg"],
  "g": ["img2/Gg.svg"],
  "h": ["img2/Hh.svg"],
  "i": ["img2/Ii.svg"],
  "j": ["img2/Jj.svg"],
  "k": ["img2/Kk.svg"],
  "l": ["img2/Ll.svg"],
  "m": ["img2/Mm.svg"],
  "n": ["img2/Nn.svg"],
  "o": ["img2/Oo.svg"],
  "p": ["img2/Pp.svg"],
  "q": ["img2/Qq.svg"],
  "r": ["img2/Rr.svg"],
  "s": ["img2/Ss.svg"],
  "t": ["img2/Tt.svg"],
  "u": ["img2/Uu.svg"],
  "v": ["img2/Vv.svg"],
  "w": ["img2/Ww.svg"],
  "x": ["img2/Xx.svg"],
  "y": ["img2/Yy.svg"],
  "z": ["img2/Zz.svg"],
  "1": ["img2/1.svg"],
  "2": ["img2/2.svg"],
  "3": ["img2/3.svg"],
  "4": ["img2/4.svg"],
  "5": ["img2/5.svg"],
  "6": ["img2/6.svg"],
  "7": ["img2/7.svg"],
  "8": ["img2/8.svg"],
  "9": ["img2/9.svg"],
  "0": ["img2/0.svg"],

 };
 
 console.log(Object.keys(MSImages).length);



  $('#fname').each(function() {
    var elem = $(this);
  
    // Save current value of element
    elem.data('oldVal', elem.val());
  
    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function(event){
       // If value has changed...
       if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());
  
  
      }
    });
  });
  
var answers2 = document.getElementById('fname').value;
var input = document.getElementById("buttonlog").value;

function Basics(answers2, NumberLetters) {
  var answers2 = document.getElementById('fname').value;
var input = document.getElementById("buttonlog").value;
var NumberLetters = {
  0 : [
    " a10,20 0 0 1 0,40 a10,20 0 0 1 1,-40  l-3,40",
   ],
1 : [
 " h20 h-10 v-40 l-10,10 ",
],
2 : [
 "  a5,7 0 0 1 20,0  l-20,33 h20 ",
],
3 : [
 "  h10 a4,4 0 0 1 0,20 h-10 h10  a4,4 0 0 1 0,20 h-10  ",
],
4 : [
 "  v-40 l-20,20 h30",
],
5 : [
 "M40,40  h-20 v20 a5,2.5 0 0 1 0,20  ",
],
6 : [
  " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20 a1,1 0 0 1 10,-40    ",
],
7 : [
   "  l5,-18 l5,-18 l-2.5,18 l18,15 l-18,-15 l-15,-18 "  ,
],
8 : [
 " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  ",    
],
9 : [
  " a1,1 0 0 1 0,20 a1,1 0 0 1 1,-20  a1,1 0 0 1 0,20  a10,10 90 0 0 0,-20   h10 v25 a10,5 0 0 1 -20,0 ",
]
}

  if (Number(answers2))  {
    console.log(NumberLetters[1]);
      console.log(answers2);
      console.log(typeof answers2);
       return console.log('It is a number');
  } else if ( answers2 == answers2.toLowerCase()) {
    console.log(LowerLetters['b']);
     return  console.log('It is a lower letter'); 
  } else if ( answers2 == answers2.toUpperCase()) {
    console.log(CapitalLetters['A']);
    return console.log('It is a Capital Letter');
    var nodes = renderer.setAttr('d', answers1)
    
  } else ( answers2 === answers2 ); {
   
    return  console.log('something is wrong');
    var nodes = renderer.setAttr('d', answers1)
}

  function Basic(LowerLetters, answers2) {
    var answers2 = document.getElementById('fname').value;
    var input = document.getElementById("buttonlog").value;
 
  }
}

// if (result22.includes('M40,40')) {
//   let soultion22 = "M" + ((10 + 20 * objloopnumber).toString() + "," + (40 + 00).toString() + " " );
//   console.log(soultion22);
// } else () => {
//   console.log("YES I lost");
// }
