
// && : AND연산 <그리고> 둘다 true여야함
var t = true, f = false;

console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// || :  OR 연산 둘중에 면접을 잘보거나 투자를 잘하거나 결론: 둘중에 하나만 true면 됨.
console.log('=====================');

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산 (!) : 논리 반전 = not! 
console.log('==========================');

console.log(!t);
console.log(!f);

var money = 10;
if (!money) {
    console.log('나는 그지에요~');
} 