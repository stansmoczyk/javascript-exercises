const sumAll = function(...arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);

let sum = 0;
if (isNaN(max) || isNaN(min)){
    return 'ERROR'
}
else if(min >0 && max > 0){
for (let i = min; i <= max; i++){
    sum += i;
}
}else {
    return 'ERROR'
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
