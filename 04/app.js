// 1부터 100까지 출력하기

// for(var i=1; i <= 100; i++){
//   // console.log(i);
//   // document.getElementById('debug').innerHTML += i + "<br>";
//
// }

// 홀수 출력
//for(var i=1; i<=100; i++){
//  if(i%2) {
//    console.log(i)
//  }
//}

//구구단
//for(var i=1; i<=9; i++){
//
//  console.log(i + "단 시작......");
//
//  for(var k=1; k<=9; k++){
//
//    console.log(i +"x"+ k + "=" + (i * k));
//  }
//
//}

//prompt() 문제
/*var num, total = 0;

for(var isEnd = false; isEnd === false; ){

  num = prompt("숫자를 입력하세요");

  if(num === null){
    alert("합은 "+ total +" 입니다");
    isEnd = true;
    // break;
  }
  else {
    total += parseInt(num, 10);
  }
}

alert(total);
*/

var wrap = document.querySelector('.wrap');

var str = '';
for(var i = 1; i <= 4; i++) {
  for(var j = 1; j <= 4; j++) {
      var className = (i + j) % 2 == 1 ? 'b' : 'w'; 
      str += '<div class="'+ className +'"></div>'  
  }
}
wrap.innerHTML = str;
