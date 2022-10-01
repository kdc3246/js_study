// 아주 중요함~!!!!
// Falsy : 0, ''(빈문자열), undefined, null, NaN 이 다섯개 꼭 외우기 논리로 취급할때 false이다. 나머지는 다 true
if (undefined) console.log('ok1');  //false
if (null) console.log('ok2');       //false
if (0) console.log('ok3');          //false
if ("") console.log('ok4');         //false
if (NaN) console.log('ok5');        //false
// Truthy
if (1) console.log('ok6');          //true
if (-100.55) console.log('ok7');    //true
if ('   ') console.log('ok8');      //true
if ('hello!!!!') console.log('ok9');//true
if ([]) console.log('ok10');        //true

console.log('=====================');

var num = 9;
if (num % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

var apple = 0;
if (apple) {
    console.log('사과가 하나도 없습니다.');
} else {
    console.log(`사과가 ${apple}개 있습니다.`);
}



