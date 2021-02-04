const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection) === true) ? collection.slice() : Object.values(collection);
      const keydicies = (Array.isArray(collection) === true) ? (new Array(collection.length)).map((a, i) => i) : Object.keys(collection);
      for(let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i], keydicies[i], newCollection);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (Array.isArray(collection) === true) ? collection.slice() : Object.values(collection);
      const keydicies = (Array.isArray(collection) === true) ? (new Array(collection.length)).map((a, i) => i) : Object.keys(collection);
      for(let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i], keydicies[i], collection);
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let [value, i] = (acc !== undefined) ? [acc, 0] : [collection[0], 1];
      for (; i < collection.length; i++) {
        value = callback(value, collection[i], collection);
      };
      return value;
    },

    find: function(collection, predicate) {
      const newCollection = (Array.isArray(collection) === true) ? collection.slice() : Object.values(collection);
      const keydicies = (Array.isArray(collection) === true) ? (new Array(collection.length)).map((a, i) => i) : Object.keys(collection);
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i],keydicies[i])) return newCollection[i];
      };
      return undefined;
    },

    filter: function(collection, predicate) {
      const output = []
      const newCollection = (Array.isArray(collection) === true) ? collection.slice() : Object.values(collection);
      const keydicies = (Array.isArray(collection) === true) ? (new Array(collection.length)).map((a, i) => i) : Object.keys(collection);
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i],keydicies[i])) output.push(newCollection[i]);
      };
      return output;
    },

    size: function(collection) {
      const newCollection = (Array.isArray(collection) === true) ? collection.slice() : Object.values(collection);
      return newCollection.length;
    },

    first: function(collection, n = 1) {
      const newCollection = collection.slice(0, n);
      return (newCollection.length === 1) ? newCollection[0] : newCollection;
    },

    last: function(collection, n = 1) {
      const newCollection = collection.slice(collection.length - n);
      return (newCollection.length === 1) ? newCollection[0] : newCollection;
    },

    compact: function(collection) {
      const output = [];
      for (let i = 0; i < collection.length; i++) {
        if (!!collection[i]) output.push(collection[i]);
      };
      return output;
    },

    sortBy: function(collection, callback) {
      const output = [...collection];
      return output.sort((a,b) => callback(a) - callback(b));
    },

    flatten: function(collection, shallow = false, output = []) {
      if (Array.isArray(collection) === false) return output.push(collection);
      if (shallow) {
        for (let el of collection) (Array.isArray(el) === true) ? this.unpack(output, el) : output.push(el);
      } else {
        for (let el of collection) (Array.isArray(el) === true) ? this.flatten(el, false, output) : output.push(el);
      }
      return output;
    },

    unpack: function(collection, arr) {
      for (let el of arr) collection.push(el);
    },

    uniq: function(collection, isSorted = false, callback = false) {
      const output = [];
      const seen = new Set();
      for (let i = 0; i < collection.length; i++) {
        const el = callback ? callback(collection[i]) : collection[i];
        if (seen.has(el) === false) output.push(collection[i]);
        seen.add(el);
      };
      return output;
    },

    keys: function(obj) {
      const keys = [];
      for (let key in obj){
        keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      const values = [];
      for (let key in obj){
        values.push(obj[key]);
      }
      return values;
    },

    functions: function(obj) {
      return this.sortBy(this.filter(this.values(obj), el => typeof el === 'function'),(a,b) => a < b);
    },


  }
})()

fi.libraryMethod()
