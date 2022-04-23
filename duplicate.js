

function getUnique(arr){
 // creating an empty array   
    let dupArr = [];
    
    
    for(let i of arr) {
        if(dupArr.indexOf(i) === -1) {
// pushing elements to array            
            dupArr.push(i);
        }
    }
// ouput    
    console.log(dupArr);
}

const array = [1,2,3,1,2];

getUnique(array);