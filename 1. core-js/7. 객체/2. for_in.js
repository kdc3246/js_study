
var phone = {
    company: '삼성',
    color: '펄 화이트',
    model: '갤럭시 S21',
    price: 1200000
};

for (var data in phone) {
    // 키를 문자열로 참조하려면 []개로 참조를해야한다.
    // 이유는 키가 string을 뽑혀서 오기때문에.
    // 이 for문에서는 점. 참조를 하면 안된다.
    // console.log(data);
    console.log(phone[data]);
}


// 새로운 프로퍼티를 추가하고 싶다!
// 객체 프로퍼티 key 존재 유무 확인

var newKey = 'memory';

console.log("============================");
console.log('model' in phone)
console.log("============================");

// 만약에 newKey에 16GB가 없으면 ! 추가해라
if (!(newKey in phone)) {
    phone[newKey] = '16GB';
}

console.log(phone);