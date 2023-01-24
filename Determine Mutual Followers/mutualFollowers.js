//Variables for 2 accounts and who they follow
//Variable that is empty to determine Mutual Followers
let raysFollowers = ['Jake', 'Ryan', 'Scott', 'Will']
let miasFollowers = ['Jake', 'Sam', 'Scott']
let mutualFollowers = []

//for statement to help determine who rays and mias mutual followers are
for (let raysIndex = 0; raysIndex<raysFollowers.length; raysIndex++) {
  for (let miasIndex = 0; miasIndex<miasFollowers.length; miasIndex++) {
    
    //This will add the mutual followers from Ray and Mia into the mutualFollowers Variable
    if (raysFollowers[raysIndex] === miasFollowers[miasIndex]) {
      mutualFollowers.push(raysFollowers[raysIndex])
      console.log(mutualFollowers)
    }
  }
};
