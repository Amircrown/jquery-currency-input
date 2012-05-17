// Generated by CoffeeScript 1.3.3

/*
jquery-currency-input
Copyright (c) 2012 Greg Leaver

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


(function() {
  var $, format, isNumber, left, right, toNumber;

  $ = jQuery;

  isNumber = function(obj) {
    return (toString.call(obj)) === '[object Number]' && isFinite(obj);
  };

  toNumber = function(str) {
    var num;
    str = str.toString().replace(/[$,\s]/g, '');
    num = parseFloat(str);
    if (isNumber(num)) {
      return num;
    } else {
      return 0.00;
    }
  };

  left = function(num) {
    var digits, grouped, i, str, _i, _j, _len;
    str = (Math.floor(num)).toFixed().toString();
    digits = (str.split('')).reverse();
    grouped = [];
    while (digits.length > 3) {
      for (i = _i = 1; _i <= 3; i = ++_i) {
        grouped.push(digits.shift());
      }
      grouped.push(',');
    }
    for (_j = 0, _len = digits.length; _j < _len; _j++) {
      i = digits[_j];
      grouped.push(i);
    }
    return grouped.reverse().join('');
  };

  right = function(num) {
    return (num - (Math.floor(num))).toFixed(2).replace(/\d*\./, '');
  };

  format = function(num) {
    if (!isNumber(num)) {
      return format(toNumber(num));
    } else {
      return "$ " + (left(num)) + "." + (right(num));
    }
  };

  $(function() {
    return $('input[type="currency"]').each(function() {
      var _this = this;
      $(this).closest('form').submit(function() {
        _this.value = toNumber(_this.value);
        return true;
      });
      return $(this).blur(function() {
        return _this.value = format(_this.value);
      });
    });
  });

}).call(this);
