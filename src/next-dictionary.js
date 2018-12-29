(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxDictionary = nx.declare('nx.Dictionary', {
    methods: {
      init: function() {
        this.items = {};
      },
      has: function(inKey) {
        return inKey in this.items;
      },
      set: function(inKey, inValue) {
        this.items[inKey] = inValue;
      },
      get: function(inKey) {
        return this.has(inKey) ? this.items[inKey] : null;
      },
      clear: function() {
        this.items = {};
      },
      sets: function(inTarget) {
        nx.mix(this.items, inTarget);
      },
      gets: function() {
        return this.items;
      },
      keys: function() {
        return Object.keys(this.items);
      },
      values: function() {
        var self = this;
        return this.keys().map(function(key) {
          return self.items[key];
        });
      },
      length: function() {
        return this.keys().length;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDictionary;
  }
})();
