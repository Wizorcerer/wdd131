const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

let search = 'dog';

let filtered = animals.filter(searchList);

function searchList(item){
  return item.name.toLowerCase().includes(search.toLowerCase());
}

console.log(filtered)

let searchTrait = "c"

let filteredTraits = animals.filter(searchTraits);

function searchTraits(item){
  return item.traits.find((trait)=>
  trait.toLowerCase().includes(searchTrait.toLowerCase()))
}

console.log(filteredTraits)