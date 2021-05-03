// Hash map to convert digits into words.
let map=new Map;
map[0]='Zero';
map[1]='One';
map[2]='Two';
map[3]='Three';
map[4]='Four';
map[5]='Five';
map[6]='Six';
map[7]='Seven';
map[8]='Eight';
map[9]='Nine';


//readind inputs from command line and 
//string 's' to store converted digits to words.
//let string=process.argv.slice(2);
let  s='';
let string=['10','300','5];
    
//loops to get each digit in the input array. 
string.forEach(element => {
    for(let i=0;i<element.length;i++){
        var n=element.charAt(i);
        //parsing only if it is a digit.
        if(Number.isInteger(parseInt(n)))
        {
            //append digits that are converted to string.
            s=s+(map[element.charAt(i)]);
        }
        else{
            //if an element in the input appray is not a digit
            //prints 'Not a number'
            console.log("Not a number: "+element)
            return;
        }
    }
    //separate each number with a comma.
    s=s+',';
    
});
//print converted digits to words in a single line.
console.log(s.slice(0,s.length-1));
