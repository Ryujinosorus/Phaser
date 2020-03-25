window.onload = function () {
    var context = new AudioContext();
}
const map1 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [1211, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 3211, 3121, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3121, 3121, 3121, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 2112],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 4112, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121],
    [2211, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4112, 4112, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121, 3121],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444],
    [4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444, 4444]

];

const map2 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777],
    [7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 1211, 1121, 1121, 1121, 1121],
    [1211, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3211, 3211, 3211, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 1121, 1121, 1121],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 1211, 1121, 1121, 1121, 1121, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 3211, 3121, 3112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 1121, 1121, 1121],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 3211, 3121, 3112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 1211, 1121, 1121],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 3211, 3121, 3121],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 7777, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121, 1121],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112],
    [2211, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3211, 3121, 3112, 2112, 7777, 7777, 7777, 7777, 7777, 7777, 2211, 3112, 3112, 3112, 2112, 7777, 7777, 7777, 2211, 4444, 4444, 4444, 2112]
];
const map3 = [[]];
const State = {
    run: 'run',
    fall: 'fall',
    idle: 'idle',
    jump: 'jump'
}

var Player = {
    'lookR': true,
    'State': null,
    'sprite': null,
    'nbCoin': null,
    anim: {
        'idle ': null,
        'run': null,
        'jump': null,
        'fall': null,
        'curent': null
    },
    'flip': function () {
        Player['lookR'] = (!Player['lookR'])
        Player['sprite'].scale.x *= -1;
    },
    'speed': {
        'run': 300,
        'jump': 450
    },
    'hitGestion': {
        'lastHitTime': 0,
        'invinsibleTime': 2000
    },
    'demence': {
        'actual': null,
        'background': null,
        'lastUpdate': 0
    }
};
var cursors;

var scale = [37, 37];

var coinMap1 = [[2100, 800], [1800, 800], [1150, 520]];
var coinMap2 = [[2100, 800], [1800, 800], [1150, 520]];
var coinMap3 = [[2100, 800], [1800, 800], [1150, 520]];

var spikeMap1 = [[2000, 825], [1950, 825], [2050, 825], [2150, 825]];
var spikeMap2 = [[2000, 970], [1950, 970], [2050, 970], [2150, 970]];
var spikeMap3 = [[2000, 825], [1950, 825], [2050, 825], [2150, 825]];

var ennemyMap1 = [];
var ennemyMap2 = [];
var ennemyMap3 = [];

var mapCollisionGroup;
var mapEnnemyGroup;
var mapCoinGroup;
var mapSpikeGroup;
var portal = {
    'sprite': null,
    'position': [[2500, 805], [10,10], []],
    'text': null
}; 















//COMMUN PART  !!! 
function communLoad() {

    //Terrain TOP 1
    game.load.image('1211', './assets/sprites/terrain_top_left.png');
    game.load.image('1121', './assets/sprites/terrain_top_center.png');
    game.load.image('1112', './assets/sprites/terrain_top_right.png');

    //Terrain SIDE 2 

    game.load.image('2211', './assets/sprites/terrain_center_left.png');
    game.load.image('2121', './assets/sprites/terrain_top_center.png');
    game.load.image('2112', './assets/sprites/terrain_center_right.png');

    //Terrain FILL TOP 3
    game.load.image('3211', './assets/sprites/terrain_fill_top_left.png');
    game.load.image('3121', './assets/sprites/terrain_fill_top_center.png');
    game.load.image('3112', './assets/sprites/terrain_fill_top_right.png');

    //Terrain FILL SIDE 4
    game.load.image('4211', './assets/sprites/terrain_fill_center_left.png');
    game.load.image('4444', './assets/sprites/terrain_fill_center_center.png');
    game.load.image('4112', './assets/sprites/terrain_fill_top_right.png');
    game.load.image('4121', './assets/sprites/terrain_bottom_center.png');

    //Player
    game.load.spritesheet('playerRun', './assets/Player/Furry_Jump_11_256_1024.png', 250, 250);

    //Ennemy
    game.load.spritesheet('ennemy4', './assets/enemy04_sheet', 35, 62);

    //Coin
    game.load.image('coin', './assets/coin.png');

    //Demence
    game.load.image('rectangle', './assets/rectangle.png');
    game.load.image('bar', './assets/bar.jpeg');

    //Background
    game.load.image('back', './assets/back.gif');

    //Spike
    game.load.image('spike', './assets/spike.png');

    //Portail
    game.load.spritesheet('portal', './assets/portail.png', 128, 128);

    game.load.audio('back', ['assets/sounds/back.mp3', 'assets/sounds/back.ogg']);
    game.load.audio('mood', ['assets/sounds/mood.mp3', 'assets/sounds/mood.ogg']);
    game.load.audio('pick', ['assets/sounds/pick.mp3', 'assets/sounds/pick.ogg']);
    game.load.audio('jump', ['assets/sounds/jump.mp3', 'assets/sounds/jump.ogg']);
    game.load.audio('hit', ['assets/sounds/hit.mp3', 'assets/sounds/hit.ogg']);
    game.load.audio('landing', ['assets/sounds/landing.mp3', 'assets/sounds/langing.ogg']);
    game.load.audio('die', ['assets/sounds/die.mp3', 'assets/sounds/die.ogg']);
}

function initializeGroups() {
    mapCollisionGroup = game.add.physicsGroup();
    mapCoinGroup = game.add.physicsGroup();
    mapEnnemyGroup = game.add.physicsGroup();
    mapSpikeGroup = game.add.physicsGroup();
}

//           GENERATE !

function generatePlayer() {
    Player['sprite'] = game.add.sprite(0, 300, 'playerRun')
    Player['sprite'].scale.set(0.2, 0.2);
    Player['sprite'].smoothed = false;

    //Camera follow the player
    game.camera.follow(Player['sprite']);

    //Physics of the player
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.enable(Player['sprite'], Phaser.Physics.ARCADE);
    Player["sprite"].body.gravity.y = 800;

    //Collision of the player
    Player['sprite'].body.collideWorldBounds = true;
    Player['sprite'].body.setSize(200, 180, 50, 25);
    Player['sprite'].anchor.setTo(.5, .5);

    //Make animations
    Player['anim']['run'] = Player["sprite"].animations.add('run', [5, 6, 7, 8, 9, 10, 11, 12], 15, true);
    Player['anim']['idle'] = Player["sprite"].animations.add('idle', [1, 2, 3], 5, true);
    Player['anim']['jump'] = Player["sprite"].animations.add('jump', [5, 6, 7, 8], 5, false);
    Player['anim']['fall'] = Player["sprite"].animations.add('fall', [14, 15, 16], 5, true);

    //AUDIO
    let music = game.add.audio('back');
    music.play();
    music.volume = 0.1;
    let mood = game.add.audio('mood');
    mood.play();
    mood.volume = 0.15;
}
function generateEnnemy(ennemyMap) {
    for (let i = 0; i < ennemyMap.length; i++) {
        let a = ennemyMap[i][0];
        let b = ennemyMap[i][1];
        let y = ennemyMap[i][2];
        let sprite = mapEnnemyGroup.create(a, y, 'ennemy4')
        sprite.anchor.set(0.5, 0.5);
        sprite.scale.set(3);
        let run = sprite.animations.add('run', [18, 19, 20, 21, 22, 23, 24, 25], 5, true);
        let attack = sprite.animations.add('attack', [14, 15, 16], 5, true);
        let death = sprite.animations.add('death', [25, 26, 27], 5, true);
        let e = new Ennemy(sprite, b, run, attack, death);
        e.start();
    }
}

function generatePortal(pos) {
    portal['sprite'] = game.add.sprite(pos[0], pos[1], 'portal');
    game.physics.enable(portal['sprite'], Phaser.Physics.ARCADE);
    portal['sprite'].body.immovable = true;
    portal['sprite'].anchor.set(0.5, 0.5);
    portal['sprite'].body.setSize(70, 100, 25, 25);
    let anim = portal['sprite'].animations.add('effect', [26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 12, true);
    anim.play(true);
}
function generateMap(map) {
    for (let y = 0; y < map.length; y++)
        for (let x = 0; x < map[y].length; x++)
            if (map[y][x] != 7777)
                mapCollisionGroup.create(x * scale[0], y * scale[1], (map[y][x]).toString());
    mapCollisionGroup.setAll('body.immovable', true);
    mapCollisionGroup.forEachAlive(scaleMe, this, 2.5);
}

function generateCoin(coinMap) {
    for (let x = 0; x < coinMap.length; x++)
        mapCoinGroup.create(coinMap[x][0], coinMap[x][1], 'coin').anchor.set(0.5, 0.5);

    mapCoinGroup.forEachAlive(scaleMe, this, 0.1);
}

function generateSpike(spikeMap) {
    for (let x = 0; x < spikeMap.length; x++)
        mapSpikeGroup.create(spikeMap[x][0], spikeMap[x][1], 'spike').anchor.set(0.5, 0.5);
    mapSpikeGroup.setAll('body.immovable', true);
    mapSpikeGroup.forEachAlive(scaleMe, this, 0.1);
}

//        GAME !
function makeAth() {
    let coinLogo = game.add.sprite(50, 75, 'coin');
    coinLogo.anchor.set(0.5, 0.5);
    coinLogo.scale.set(0.05, 0.05);
    coinLogo.fixedToCamera = true;

    Player['nbCoin'] = game.add.text(100, 60, "0", { font: "26px Arial", fill: "#ffffff", align: "center" });
    Player['nbCoin'].fixedToCamera = true;

    Player['demence']['actual'] = game.add.sprite(175, 50, 'bar');
    Player['demence']['actual'].scale.set(0.01, 0.2);
    Player['demence']['actual'].fixedToCamera = true;

    Player['demence']['background'] = game.add.sprite(430, 75, 'rectangle');
    Player['demence']['background'].anchor.set(0.5, 0.5);
    Player['demence']['background'].scale.set(1, 0.2);
    Player['demence']['background'].fixedToCamera = true;
}

function moovePlayer() {
    //Moovement of the player
    if (cursors.up.isDown && Player['sprite'].body.velocity.y == 0) {
        let music = game.add.audio('jump');
        music.play();
        //If he is grounded
        while (Player['sprite'].body.velocity.y > -Player['speed']['jump'])
            Player['sprite'].body.velocity.y -= 10
    }

    else if (cursors.right.isDown)
        Player['sprite'].body.velocity.x = Player['speed']['run'];
    else if (cursors.left.isDown)
        Player['sprite'].body.velocity.x = -Player['speed']['run']
    else if (Player['hitGestion']['lastHitTime'] < Date.now() + 1000)
        Player['sprite'].body.velocity.x = 0
    animGestion();
}

function animGestion() {
    //Anim State
    if (Player['sprite'].body.velocity.y < 0)
        Play(State.jump);
    else if (Player['sprite'].body.velocity.y > 0)
        Play(State.fall)
    else if (Player['sprite'].body.velocity.x != 0)
        Play(State.run)
    else Play(State.idle)

    //Flip statement

    if (Player['sprite'].body.velocity.x > 0 && !Player['lookR'])
        Player.flip();
    else if (Player['sprite'].body.velocity.x < 0 && Player['lookR'])
        Player.flip();
}

function Play(curentState) {
    //Change state and play anim
    if (Player['State'] == State.fall && (curentState == State.run || curentState == State.id))
        game.add.audio('landing').play();
    Player['State'] = curentState
    let animToPlay = Player['anim'][curentState];
    if (Player['anim']['curent'] == animToPlay)
        return
    else {
        animToPlay.play();
        Player['anim']['curent'] = animToPlay;
    }
}

function gofull() {
    if (game.scale.isFullScreen)
        game.scale.stopFullScreen();
    else
        game.scale.startFullScreen(false);
}

//             COLLISION 


function collisionOnCoin(player, member) {
    //Add a coin and destroy the one hitted
    let s = game.add.audio('pick');
    s.volume = 5;
    s.play();
    Player['nbCoin'].setText(parseInt(Player['nbCoin'].text) + 1)
    member.kill();
}

function collisionOnEnnemy(player, member) {
    //Check if we can dmg him
    if (Date.now() > Player['hitGestion']['lastHitTime'] + Player['hitGestion']['invinsibleTime']) {

        //Hit
        game.add.audio('hit').play();       

        Player['demence']['actual'].scale.set(Player['demence']['actual'].scale.x + 0.2, 0.14);
        if (Player['demence']['actual'].scale.x > 0.753)
            Player['demence']['actual'].scale.x = 0.755;
        Player['hitGestion']['lastHitTime'] = Date.now();
        Player['sprite'].alpha = 0.1;
        game.add.tween(Player['sprite']).to({ alpha: 0.5 }, 1000, "Linear", true);
        game.add.tween(Player['sprite']).to({ alpha: 1 }, 2000, "Linear", true);
        while (Player['sprite'].body.velocity.y > -300)
            Player['sprite'].body.velocity.y -= 40;
    }
}

function returnTrue(player, member) {
    return true;
}







function scaleMe(member, size) {
    member.scale.set(size);
}
function render() {
    game.debug.body(portal['sprite']);
    mapCollisionGroup.forEachAlive(renderGroup, this);
}
function renderGroup(member) {
    //game.debug.body(member);
}

class Ennemy {
    constructor(sprite, b, run, attack, death) {
        this.sprite = sprite;
        this.b = b;
        this.run = run;
        this.attack = attack;
        this.death = death;
        this.start = function () {
            run.play();
            game.add.tween(this.sprite).to({ x: this.b }, 4000, Phaser.Easing.Linear.None, true, 200, 1000, true);
        }

    }

}


function preparePath(path) {
    if (globalConfig.i18n) {
        return path.replace("LANG", globalConfig.i18n.current);
    } else {
        return path;
    }
}
