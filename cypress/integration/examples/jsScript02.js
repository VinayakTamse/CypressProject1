let arr = [67,89,23,12,78,99,356,8,5]
let L = arr.length;
//console.log(L);
let flag = false;

for (let i=0; i<L-1; i++)
{
    let temp;

    for (let j=0; j<L-i-1; j++)
    {
        if (arr[j]>arr[j+1])
    
        {
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            flag = true;
        }
    }

    if (flag==false)
    {
        break;
    }

 }

 for (var k=0; k<arr.length; k++)
 {
     console.log(arr[k]);
 }

