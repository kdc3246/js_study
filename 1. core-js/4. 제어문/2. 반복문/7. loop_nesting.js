
/*
var cnt = 0;
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 2; j++) {
        console.log('안녕' + ++cnt);
    }
}
*/

//단수 저장
// for을 만나면 level = 2 1번, level <= 9가 2번, for 밑에 for가 3번, level++가 4번 순
for (var level = 2; level <= 9; level++) {
    // line = 1가 1번, line <= 9가 2번, console이 3번, line++가 4번 순
    for (var line = 1; line <= 9; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
    console.log('==========================');
}
