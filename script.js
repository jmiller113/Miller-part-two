
let yourName = prompt ("Welcome to GC Mini Golf! What's your name?");
console.log(yourName);

let  play = prompt ( "Hi,"  +  yourName +   "! Would you like to play 3 or 6 holes?");
console.log(play);

let  par = play * 3;
let putts = 0;

for ( let i = 0; i < play; i++)  {
    let hole = Number (prompt(`How many putts for Hole ${i + 1}? (Par is 3)`))
    putts += hole;
}

let finalscore = par - putts; 

if (finalscore === 0) {
    console.log(`Good game, ${yourName}. Your total par was: 0`)
} 
else if (finalscore < 0) {
    console.log(`Nice try ${yourName}... Your total par was: ${finalscore * -1}`)
}
else if (finalscore > 0) {
    console.log(`Great job, ${yourName}! Your total par was: ${finalscore}`)
}