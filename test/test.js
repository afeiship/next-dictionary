var nx = require('next-js-core2');
var NxDictionary = require('../src/next-dictionary');

/**
 关于 delete/remove 的区别：
 * delete是删除,东西不在任何一个区。
 * remove是移除,你可以将东西从A区移到B区,但东西仍还在
 */

test('test: has/set/get', () => {
  var dic = new NxDictionary();
  dic.set('k1', 'value1');

  expect(dic.has('k1')).toBe(true);
  expect(dic.get('k1')).toBe('value1');
});

/**
 * delete 什么情况下会返回 false
 * var obj = { name: 'fei'}
 * delete obj ===> false
 * delete obj.name ==> true
 * delete obj.xxx ===> true
 */

test('test: delete an exist element', () => {
  var dic = new NxDictionary();
  dic.set('k1', 'value1');

  expect(dic.delete('k1')).toBe(true);
  expect(dic.get('k1')).toBeUndefined();

  expect(dic.delete('k2')).toBe(false);
  expect(dic.get('k2')).toBeUndefined();
});

test('test: clear {}', () => {
  var dic = new NxDictionary();
  dic.set('k1', 'value1');
  dic.clear();
  expect(dic.gets()).toEqual({});
});

test('test: clear []', () => {
  var dic = new NxDictionary();
  dic.set('k1', 'value1');
  dic.set('k2', 'value2');
  expect(dic.keys()).toEqual(['k1', 'k2']);
  dic.clear();
  expect(dic.keys()).toEqual([]);
});

test('test: keys/values/size', () => {
  var dic = new NxDictionary();
  dic.set('k1', 'value1');
  dic.set('k2', 'value2');
  expect(dic.keys()).toEqual(['k1', 'k2']);
  expect(dic.values()).toEqual(['value1', 'value2']);
  expect(dic.length).toBe(2);
});

test('test: global.delete ', () => {
  /**
   * Deleting local variable in strict mode
   */
  var obj = { name: 'fei' };

  function testDelObj() {
    // Deleting local variable in strict mode (51:4)
    // delete obj;
  }

  // expect(testDelObj).toThrow();
  expect(delete obj.name).toBe(true);
  expect(delete obj.xxx).toBe(true);
});
