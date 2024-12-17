<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>36</title>
</head>
<body>
    <script>
        x=["pen","pencile","book","eraser","scale","bag","book","desk","chair","table"]
        y=[1,2,3,4,5,6,7,8,9]
        l=[1,2,3,4,5,6,7,8,9]
        console.log(x.slice(1,3))
        const z1=y.findIndex(n=>n%2===0);
        console.log(z1);
        const z2=y.find(n=>n%2===0);
        console.log(z2);
        const z3=y.map(n=>n**2);
        console.log(z3);
        const sum=y.reduce((p,q)=>p+q);
        console.log(sum)
        const z4=y.some(n=>n%2===0)
        console.log(z4);



        const z5=x.every(n=>n%2===0)
        console.log(z5);

        const z6=l.splice(1,2)
        console.log(z6)
        console.log(l)

        const A=x.keys()
        const B=x.values()
        const C=x.entries()
        console.log([...A])
        console.log([...B])
        console.log([...C])




        const s='hello';
        const k=Array.from(s);
        console.log(k);
         



        i=[3,2,5,4,7,8,9]
        console.log(i)
        console.log("......")
        const j=i.shift()
        console.log(j)
        console.log("..........")
        i.unshift(0)
        console.log(i)



        nestedArray=[1,[2,3],[4,[5]]]
        flattenedArray=nestedArray.flat();
        console.log(flattenedArray);



        const nestedArray1 = [1, [2], [3], [4, [5]]];
const doubledFlattened = nestedArray1.flatMap(num => [num, num * 2]);
console.log(doubledFlattened);



        number=[2,4,6,8,10];
        arrayAsString=number.toString();
        console.log(arrayAsString);


        const numbers=[2,3,4,5,6,7,8,9];
        const firstIndex=numbers.indexOf(3);
        console.log(firstIndex);



        no=[2,3,6,5,8,7,9]
        lastIndex=no.lastIndexOf(3);
        console.log(lastIndex);


        const letters = new Set(["a", "b", "c", "c"]);
console.log(letters);




const fruits = new Map([["apple", 500], ["banana", 300], ["orange", 200]]);
console.log(fruits);






    </script>
</body>
</html>