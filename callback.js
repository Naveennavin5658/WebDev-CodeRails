// Callbacks in JS
//Function that takes onbe more function as the argument!
function displayResult(result) {
    console.log("The final result is ", result);
}
function addNumbers(a, b, callback) {
    const resp = a + b;
    callback(resp)
}
addNumbers(5, 7, displayResult);
console.log("Practicing setTimeOut function ");
function dummyCallbackFunction() {
    console.log("This is a dummy callback function")
}
setTimeout(dummyCallbackFunction, 2000);

console.log("Practice callbacks using settimeout");
function fetchData(callback) {
    const data = "This string is a response from an API";
    callback(data);
}
function executeCallBack(data) {
    setTimeout(function () {
        console.log(data)
    }, 3000);
}

fetchData(executeCallBack)

//Implementing callback hell!!

function firstOperation(callback) {
    console.log("This is the first operation");
    callback();
}

function secondOperation(callback) {
    console.log("This is the second operation");
    callback();
}

function thirdOperation(callback) {
    console.log("This is the third operation");
    callback();
}

//Nesting callbacks
firstOperation(function () {
    secondOperation(function () {
        thirdOperation(function () {
            console.log("Lets end this")
        });
    });
});

//Practice Questions:

/*
1)Write a function getData that takes a callback and fetches data (use setTimeout to simulate a delay).
2)Write a function processData that takes data and a callback, processes the data, and then calls the callback with the processed data.
3)Create a chain of three functions (step1, step2, step3) that each take a callback and call the next function after a delay.
4)Write a function fetchUser that takes a user ID and a callback, simulates fetching user data, and then calls the callback with the user data.
5)Write a function saveData that takes data and a callback, simulates saving the data, and then calls the callback after a delay.
6)Create a function loadImages that takes an array of image URLs and a callback, simulates loading each image, and then calls the callback when all images are loaded.
7)Write a function authenticateUser that takes credentials and a callback, simulates authentication, and then calls the callback with the authentication result.
8)Create a function sendEmail that takes an email message and a callback, simulates sending the email, and then calls the callback when the email is sent.
*/ 

//ans1
function getData1(callback1){
    const fetchedData = "DUMMY API RESPONSE";
    callback1(fetchedData);
}
function f1(data){
    console.log(data);
}
getData1(f1)

//ans2
function processData(data2,callback2){
    console.log("Before processing the data",data2)
    const processedData2 = data2.trim();
    callback2(processedData2);
}
function f2(data){
    console.log("After processing the data",data);
}
processData("   I am Naveen from OpsConsole Team    ",f2);

//ans3
// Function to simulate step1
function step1(callback) {
    setTimeout(function() {
        console.log("Step 1 complete");
        callback();
    }, 1000); // 1 second delay
}

// Function to simulate step2
function step2(callback) {
    setTimeout(function() {
        console.log("Step 2 complete");
        callback();
    }, 1000); // 1 second delay
}

// Function to simulate step3
function step3(callback) {
    setTimeout(function() {
        console.log("Step 3 complete");
        callback();
    }, 1000); // 1 second delay
}

// Function to be called when all steps are complete
function allStepsComplete() {
    console.log("All steps complete!");
}

// Start the chain of functions
step1(function() {
    step2(function() {
        step3(allStepsComplete);
    });
});



//ans4
function fetchUser(userId,callback4){
    const userData = {
        "id":userId,
        "password":userId+"**"+  (Math.random()*100).toString() 
    }
    callback4(userData);
}
function callback4(data){
    console.log("User Data",data);
}
fetchUser("18B91A05L2",callback4);

//ans5
function saveData(data,callback5){
    console.log("Saving the data......");
    console.log("This might take a few seconds...");
    callback5(data);
}
function f5(data){
    setTimeout(function x(){
        console.log("This data is saved");
    },3000)
}

saveData({
    'id':"18B91A05L2",
    'Name':"Naveen"
},f5)



//ans6
function loadImages(imageUrls, callback) {
    console.log("Loading the images...");
    function loadImage(url, cb) {
        setTimeout(function() {
            console.log("Loaded image from", url);
            cb();
        }, 2000);
    }

    let loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === imageUrls.length) {
            callback();
        }
    }
    imageUrls.forEach(function(url) {
        loadImage(url, imageLoaded);
    });
}

function allImagesLoaded() {
    console.log("All images loaded!");
}
let imageUrls = [
    "https://api.placid.app/u/1",
    "https://api.placid.app/u/2",
    "https://api.placid.app/u/3",
    "https://api.placid.app/u/4",
    "https://api.placid.app/u/5",
    "https://api.placid.app/u/6"
];

loadImages(imageUrls, allImagesLoaded);



//ans7
function authenticateUser(usrname,password,callback){
    let authResponse ="Failed";
    let statusCode = 401
    if(usrname!==null && (password.length<6 ||password.trim()==password)){
        authResponse = "Success";
        statusCode = 200;
    }
    callback({'message':authResponse,'code':statusCode});
}
function f7(data){
    console.log("User Authentication Status: ",data.code);
    console.log("User Authentication Message:", data.message)
}

authenticateUser("Naveen","123455676",f7)



//ans8
function sendEmail(receipientId, message, callback){
    if(receipientId!==null & message!==null){
        console.log("Receipient Id: ",receipientId);
        console.log("Content to be sent: ", message);
        console.log("SENDING THE MAIL....")
        callback();
    }
}
function f8(){
    setTimeout(function(){
        console.log("Email sent successfully!!")
    },5000)
}
sendEmail("naveen@gmail.com","Hello Naveen, this is a test mail",f8)

