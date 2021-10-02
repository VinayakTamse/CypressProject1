let a = [9,2,7,10,3,1];

let temp, j;

for (let i=1; i<a.length; i++)
{
    temp = a[i];
    j = i;

    while(j>0 && temp<a[j-1])
    {
        a[j] = a[j-1];
        j = j - 1; 
    }

    a[j] = temp;

    
}

for (let k=0; k<a.length; k++)
    {
        console.log(a[k]+"  ");
    }