/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nft=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,id,dateOfyear) {
   const NFT={
      "name":name,
      "id":id,
      "dateOfYear":dateOfyear
   }
nft.push(NFT)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
nft.forEach((objects)=> {
   console.log("\n\n\nName:"+objects.name)
   console.log("Id:"+objects.id)
   console.log("Year of Birth:"+objects.dateOfYear)
});
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nNo of NFT minted"+nft.length)
}

// call your functions below this line
mintNFT("danish",16994,2002)
mintNFT("Lewis Hamilton",16995,2001)
mintNFT("Max Verstappen",16992,1996)

listNFTs()
getTotalSupply()
