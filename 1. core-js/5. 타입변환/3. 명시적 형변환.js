
//명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();
var result = '' + a + b;

console.log(result);

//명시적 숫자 변환
console.log('=====================');

var m = '10', n = '20';
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseInt(n);
var result2 = +m + +n;

console.log(result2);

//명시적 논리변환
console.log('=========================');

var ex1 = Boolean(null); //false
console.log(ex1);

// 느낌표 !! 2개 원리 : 첫번쨰 !로 논리 false로 바꿔주고 두번째 !를 또 넣어줘서 true로 바꿔준다. 결론 : 메롱은 true이다.
var ex2 = !!'메롱';
console.log(ex2);
