let s = 'Vinayaka';

let ns = '';

for (let x of s){
    console.log(x);
}

console.log('======================');

for (let y in s)
{
    console.log(s[y]);
}

for (var i = 0; i < s.length; i++) {

    if (ns.indexOf(s.charAt(i))==-1)
    {
        ns = ns + s.charAt(i);
    }

}

console.log(ns);