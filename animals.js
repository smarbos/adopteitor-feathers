class Animals {
  constructor() {
    this.animals = [];
    this.currentId = 0;
  }

  async find(params) {
    // Return the list of all animals
    return this.animals;
  }

  async get(id, params) {
    console.log("[GET METHOD]");
    console.log("id", id);
    console.log("params", params);
    console.log("[GET METHOD]");
    // Find the animal by id
    const animal = this.animals.find(animal => animal.id === parseInt(id, 10));

    // Throw an error if it wasn't found
    if(!animal) {
      throw new Error(`animal with id ${id} not found`);
    }

    // Otherwise return the animal
    return animal;
  }

  async create(data, params) {
    // Create a new object with the original data and an id
    // taken from the incrementing `currentId` counter
    const animal = Object.assign({
      id: ++this.currentId
    }, data);

    this.animals.push(animal);

    return animal;
  }

  async patch(id, data, params) {
    // Get the existing animal. Will throw an error if not found
    const animal = await this.get(id);

    // Merge the existing animal with the new data
    // and return the result
    return Object.assign(animal, data);
  }

  async remove(id, params) {
    // Get the animal by id (will throw an error if not found)
    const animal = await this.get(id);
    // Find the index of the animal in our animal array
    const index = this.animals.indexOf(animal);

    // Remove the found animal from our array
    this.animals.splice(index, 1);

    // Return the removed animal
    return animal;
  }
}

module.exports = Animals;
