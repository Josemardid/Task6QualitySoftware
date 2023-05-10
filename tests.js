
test("ExampleTests", function(assert) {

  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-1R");
  assert.propEqual(convertRomanToInteger("762"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-2R");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-3R");
  assert.propEqual(convertRomanToInteger("ADC"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-5R");
  assert.propEqual(convertRomanToInteger("XCC@I"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6R");
  assert.propEqual(convertRomanToInteger("MMMDCCCXX"), {value: 3820, message: '', result: true}, "TC-7R");
  assert.propEqual(convertRomanToInteger("CLXII"), {value: 162, message: '', result: true}, "TC-8R");
  assert.propEqual(convertRomanToInteger("CDXXIX"), {value: 429, message: '', result: true}, "TC-9R");
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-11R");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-12R");
  assert.propEqual(convertRomanToInteger("vii"), {value: 7, message: '', result: true}, "TC-13R");


  //===============================================================//

  assert.propEqual(convertIntegerToRoman("XC"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-1I");
  assert.propEqual(convertIntegerToRoman("45"), {value: "XLV", message: '', result: true}, "TC-2I");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-3I");
  assert.propEqual(convertIntegerToRoman(-17), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4I");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-5I");
  assert.propEqual(convertIntegerToRoman(6700), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6I");
  assert.propEqual(convertIntegerToRoman(359), {value: "CCCLIX", message: '', result: true}, "TC-7I");
  assert.propEqual(convertIntegerToRoman(2678), {value: 'MMDCLXXVIII', message: "" , result: true}, "TC-8I");
  assert.propEqual(convertIntegerToRoman(2.75), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9I");
  assert.propEqual(convertIntegerToRoman(3999), {value: 'MMMCMXCIX', message: '', result: true}, "TC-10I");
  assert.propEqual(convertIntegerToRoman(34.0), {value: "XXXIV", message: '', result: true}, "TC-11I");
  assert.propEqual(convertIntegerToRoman("3.14159"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-12I");
  assert.propEqual(convertIntegerToRoman("12/4"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-13I");
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-14I");



  //This two last test I have placed it here becaus I think we have to test if a integer is placed as a parameter
  //but if I do it the tests break all the process so I have placed it the last
  assert.propEqual(convertRomanToInteger(97), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4R");
  assert.propEqual(convertRomanToInteger(917), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10R");
});

