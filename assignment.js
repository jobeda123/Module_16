//

function kilometerToMeter(kilo){
    if(kilo>=0){
        var meter= kilo*1000;
        return meter;
    }
    else{
        return "Invalid Input";
    }
    
}


function budgetCalculator(watch,mobile,laptop){
    if(watch>=0 && mobile>=0 && laptop>=0 ){
        var totalBudget = (watch*50) + (mobile*100) + (laptop*500);
        return totalBudget;
    }
    else{
        return "Invalid Input";
    }
}


function hotelCost(days){
    if(days<=10 && days>0){           // days>=0 use to check invalid input control
        var firstPart=days*100;
        return firstPart;
    }
    else if(days>10 && days<=20){
        var firstPart=10*100;
        var remain= days-10;
        var secondPart=remain*80;
        var total= firstPart+secondPart;
        return total;
    }
    else if(days>20){
        var firstPart=10*100;
        var secondPart=10*80;
        var remain= days-20;
        var thirdPart=remain*50;
        var total= firstPart+secondPart+thirdPart;
        return total;
    }
    else{
        return "Invalid Input";
    }
}


function megaFriend(names){
    var nameLen = [];                   //store length of each name
    var invalidCheck=0;                 //check for invalid input
    for (var i = 0; i< names.length; i++) {
        var singleName=names[i];
        if(typeof(singleName)=="string"){
            nameLen.push(singleName.length);
            //console.log(n,n.length);
        }
        else{
            invalidCheck=-1;
        }
    }
    if(invalidCheck==0){            // invalidCheck=0 means no invalid input arrive
        //console.log(nameLen);
        var largeLen=nameLen[0];
        var largeIndex=0;
        for(var i=0;i<nameLen.length;i++){
            if(nameLen[i]>largeLen){
                largeLen=nameLen[i];
                largeIndex=i;
            }
        }
        //console.log(largeIndex,large)
        var finalOutput= names[largeIndex];
        //console.log(names[largeIndex]);
        return finalOutput;
    }
    else{
        return "Invalid Input";
    }
}

