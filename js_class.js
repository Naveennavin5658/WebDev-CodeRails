//ans 1
console.log("I am Naveen");

//ans 2
let username, admin ;
username="Naveen";
admin = username;
console.log(admin); 

//ans 3
let a,b;
b=null;
console.log(a,b);
console.log(null=== undefined);


//ans 4
let p,q;
p=10
q="20"
console.log(typeof(p),typeof(q),typeof(p-q));
console.log(p-q);

//ans 5
let s = "my" + "name";
console.log(s)
console.log(6-'2')
console.log(6*'3')
console.log(6/'4')

//ans 6
x=-100
if(x>0){
    console.log(1)
}
else if(x==0){
    console.log(0);
}
else{
    console.log(-1);
}

//ans 7
id = 100
console.log(id > 0 ? 1 : (x === 0 ? 0 : -1))
console.log("PRINTING NATURAL NUMBERS");
// ans 8
for(i=1;i<=10;i++){
    console.log(i)
}
console.log("PRINTING EVENS");
//ans 9
for(i=0; i<=11;i++){
    if(i%2==0){
        console.log(i)
    }
}

//ans 10

console.log("Calci using switch")

// switch(number){
//     case1:
// }

//ans 11

function greet(name){
    console.log(`Hello ${name}! Namaskaram`);
}
let name_ = "Naveen"
greet(name_);

//ans 12

function get_age(age){
    if(age>=18){
        return true;
    }
    return false;
}
age = 19
if(get_age(age)){
    console.log("Eligible");
}
else{
    console.log("Nibba");
}

// ans 13
let response = function(age){
    if(age>=18){
        return true;
    }
    return false;
}
console.log(response(10))
//arrow functions
const isEligible = (age)=>{
    if(age>=18){
        return true;
    }
    return false;
}
console.log(isEligible(9))


//ans 14
details={
    "name":"Naveen",
    "age": 23
}
console.log(details.name);
console.log(details.age);


//ans 15
let num = 10;
const new_num = num.toString();
console.log(new_num);

let decimal = 10.75585;
console.log(Math.floor(decimal));
console.log(Math.ceil(decimal));
console.log(decimal.toFixed(2))
console.log(Math.random()*1000)


//ans 16
let dummy = "javascript  is awesome   ";
console.log(dummy.length);
for(let i=0; i<dummy.length; i++){
    console.log(dummy[i]);
}
console.log(dummy.toUpperCase().toLowerCase());
console.log(dummy.indexOf("ascri"));
console.log(dummy.includes("scrit"));
console.log(dummy.slice(1,4));
console.log(dummy.substring(1,4));
console.log(dummy.trim());
console.log(dummy.split(" "));


//ans 17 = array methods practice

sample_list = [1,2,3,4,5]
console.log(sample_list.length)
console.log(sample_list[sample_list.length-1])
console.log(sample_list.push(6))
console.log(sample_list)
sample_list.pop()
console.log(sample_list)
dummy_list =  Array(1,2,"3")
console.log(dummy_list)
dummy_list.splice(0,2)
console.log(dummy_list)
new_list = sample_list.concat(dummy_list)
console.log(new_list)

//ans 17
naveen = [1,2,3,4,5,6]
praveen = []
naveen.forEach(function square(ele){
    praveen.push(ele*2);
});
console.log(praveen);
const vamsi = naveen.filter(
    function filterEven(ele){
        return ele%2==0;
    }
)
console.log("VAMSI",vamsi);

mapped_array = map()