class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
      // console.log(key)
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    if (this.count / this.capacity > 0.5) this.resize(); //load factor
    const index = this.hashMod(key);
    let pair = this.data[index];

    while (pair && pair.key !== key) {
      pair = pair.next
    }

    if (pair) {
      pair.value = value;
    } else {
      const keyVal = new KeyValuePair(key, value);
      if (this.data[index]) {
        keyVal.next = this.data[index];
        this.data[index] = keyVal;
      } else {
        this.data[index] = keyVal;
      }
      this.count++;
    }
  }


  read(key) {
  const index = this.hashMod(key);
  let pair = this.data [index]
  while(pair) {
    if (pair.key === key) {
      return pair.value
    }
    pair = pair.next
    }
  }


  resize() {
   //save the old data
   //double the capacity
   //need to refill new empty space with null
   //reset your count

   const oldData = this.data;
   this.capacity *= 2;
   this.data = new Array(this.capacity).fill(null);
   this.count = 0;
    let pair = null;
   for (let i = 0; i < oldData.length; i++) {
    pair = oldData[i];
    while (pair) {
      this.insert(pair.key, pair.value);
      pair = pair.next;
    }
   }
  }


  delete(key) {
   const index = this.hashMod(key); //get index of buc
   let pair = this.data[index]; //get keyval at idx
   let last = null; //creating new keyval
   while(pair && pair.key !== key) { //while there is a keyval
    last = pair; //save the last keyval pair
    pair = last.next; //move to the next key val pair
   }
   if (!pair) { //if no key val pair return string
    return "Key not found"
   } else {
    if (!last) { //if in the front
      this.data[index] = pair.next; //update bucket to point the next keyval
    } else { //if not in the front
      last.next = pair.next // update to previous pair to point to the next pair
    }
    this.count -- //decrement count
   }

  }
}



module.exports = HashTable;
