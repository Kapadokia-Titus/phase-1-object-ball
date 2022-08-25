console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()


function numPointsScored(playerName){
  return Object.key(playerName).number
}

function shoeSize(playerName){
  return Object.key(playerName).shoe
}

function teamColors(teamName){
  return teamName.colors
}

function teamNames(game){
 // loop through the object
  for(let item of game){
    return Object.values(item).teamName
  }
 
}

function teamNames(game){
  let teams =[];
  // loop through the object
   for(let item of game){
    let teamName =  Object.values(item).teamName
     teams.push(teamName);
   }
  
   return teams;
 }

 function playerNumbers(teamName){
  let jerseyNumber =[];
  // loop through the object
   for(let item of teamName){
    let num =  Object.values(item).number
    jerseyNumber.push(num);
   }
  
   return jerseyNumber;
 }

 function playerStats(playerName){
 
   return Object.values(playerName);
 }