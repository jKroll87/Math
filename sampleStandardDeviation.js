let data = [19.5, 23.2, 31.2, 34.5, 41.1, 31.2, 24.7];
let a = 0;
let s_2 = 0;
let s;

for (let i in data) {
    a += data[i];
}
a /= data.length;

for (let i in data) {
    s_2 += (data[i] - a) * (data[i] - a);
}
s_2 /= (data.length - 1);
s = Math.sqrt(s_2);

console.log(a);
console.log(s_2);
console.log(s);