{
let myMap = new Map();
for(let i =0;i<6;i++){
    myMap.set(i+1,0);
}
function check(){
    for(let i =0;i<6;i++){
        if(myMap.get(i+1)==10){
            console.log("Maximum times rolled number is:"+(i+1));
            return true;
        }
    }
    return false;
}

while(true){
    if(check()){
        break;
    }
    else{
        console.log("Rolling");
        let num = Math.floor(Math.random()*10)%6 + 1;
        let val = myMap.get(num);
        myMap.set(num,val+1);
    }

}
let max=100000;
let minRolled=-1;
for(let i=0;i<myMap.size;i++){
    if(max>myMap.get(i+1)){
        max=myMap.get(i+1);
        minRolled=i+1;
    }
}
console.log("Minimum times rolled number is:"+minRolled);
console.log(myMap);
}
{
    let myMap = new Map();
    let monthArr=[];
    for(let i=0;i<12;i++){
        monthArr[i]=0;
    }
    for(let i=0;i<50;i++){
        let month = Math.floor(Math.random()*12) + 1;
        myMap.set(i+1,month);
        monthArr[month-1]++;
    }
    let ans = new Array(12);
    for(let i=0;i<ans.length;i++){
        ans[i]=[];
    }
    for(let i=0;i<50;i++){
        ans[myMap.get(i+1) - 1].push(i+1);
    }
    console.log(monthArr)
    for(let i=0;i<12;i++){
        for(let j=0;j<ans[i].length;j++){
            console.log("person with birthday in:"+(i+1)+" is:"+ans[i][j]);
        }
        console.log("")
    }
}