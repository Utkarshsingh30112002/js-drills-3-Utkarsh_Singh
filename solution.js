// // ==== Problem #1 ====
//   // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
//   ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
function infoId33(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].id==33)return `Car 33 is a ${arr[i].car_year} ${arr[i].car_make} ${arr[i].car_make}`;
    }
}

  
//   // ==== Problem #2 ====
//   // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//   ("Last car is a *car make goes here* *car model goes here*");
function lastCar(arr){
    
        return `Last car is a ${arr[arr.length-1].car_make} ${arr[arr.length-1].car_model}`;
    
}
  
//   // ==== Problem #3 ====
//   // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
function sortCarModels(arr){
    let models=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].car_model==undefined||arr[i].car_model.trim().length==0)continue;
        models.push(arr[i].car_model);
    }
    models.sort((a,b)=>{
        if(a<b)return -1;
        else if(a>b) return 1;
        else return 0;
    });
    return models;
}  

//   // ==== Problem #4 ====
//   // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function allTheYears(arr){
    let years=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].car_year==undefined)continue;
        else years.push(arr[i].car_year);
    }
    return years;
}  

//   // ==== Problem #5 ====
//   // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
function olderThan3000(arr){

    for(let i=0;i<arr.length;i++){
        if(arr[i]>2000)return arr.slice(i,arr.length);
    }
}  

//   // ==== Problem #6 ====
//   // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
function bmwAndAudi(arr){
    let ans=[];
    let reg=/(bmw)|(audi)/i;
    for(let i=0;i<arr.length;i++){
        if(reg.test(arr[i].car_make))ans.push(arr[i]);
    }
    return ans;
}
  export{infoId33,lastCar,sortCarModels,allTheYears,olderThan3000,bmwAndAudi};