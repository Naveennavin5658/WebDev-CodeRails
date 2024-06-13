// Practice Map, filter, reduce


// 1. Map

const original = [1,2,3,4,5]

const map1 = original.map(function double(ele){
    return ele*2;
})
console.log(map1);

//Mapping an array of numbers to an array of square roots
const map2 = original.map(function sqrRoot(ele){
    return ele**0.5; //Math.sqrt(num)
})
console.log(map2);

//Reformatting keys as values and values as keys in a list of objects
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
const map3 = kvArray.map(
    function reformatter({key,value}){
        return {key:value,value:key};
    }
)
console.log(map3);

// parseInt using mapper
const strings = ['1','2','3']
const map4 = strings.map(
    function f(ele){
        return parseInt(ele);
    }
)
console.log(map4);


//2. Filter
const students = ['naveen','nagamma','dinakar','sravan','nikhil','hema']
const filter1 = students.filter(
    function checkLength(ele){
        return ele.length>=6;
    }
)
console.log(filter1);
console.log(students);

//Filtering out all small values
const original_array = [1,2,3,4,5,6,7,8,9]
const big_array = original_array.filter(
    function findGreaterThan5(ele){
        return ele>5;
    }
)
const small_array = original_array.filter(
    function filterLessThan5(ele){
        return ele<=5;
        }
)
console.log(small_array);
console.log(big_array);

//Finding all primes in an array
const normal_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const primes_array = normal_array.filter(
    function findPrime(ele){
        let count = 0;
        for(let i=2; i<ele;i++){
            if(ele%i==0){
                count++;
            }
        }
        if(count==0 && ele!==1){
            return ele;
        }
    }
)
console.log(primes_array);


//Use filter on sparse arrays
console.log([1, , undefined].filter((x) => x !== undefined)); 
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

//3. Reduce

const naveen1 = [9,8,7,6,5,4,3,2,1]
//Sum of elements
function sumUp(accumulator, currentValue){
    return  accumulator+currentValue;
}
let total = naveen1.reduce(sumUp,0)
console.log(total)


// Use of spread or rest operator
const sample1 = [1,2,3,4,5]
const sample2 = [6,7,8,9,10]
console.log([...sample1, ...sample2])

const sampleDict1 = {1:'a',2:'b',3:'c'}
const sampleDict2 = {4:'d',5:'e',6:'f'}
console.log({...sampleDict1,...sampleDict2})