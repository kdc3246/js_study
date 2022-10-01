

//2개의 정수를 전달하면 그 합을 리턴하는 함수
function add(n1, n2) {
    // console.log('hello' + n1 + n2);
    return n1 + n2;
}
// 앞에있는 순서대로 add(5, 7) 1번째, add(7, 9) 2번째, 바깥 쪽 add()가 3번째
// var rs = add(add(5, 7), add(7, 9));

// 2개의 정수를 전달하면 그 곱을 출력하는 함수
function multi(n1, n2) {
    var r = n1 * n2;
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
    return r;
}

multi(multi(5,3), multi(9,7));



var rs = add(add(5, 7), add(7, 9));

console.log(rs);