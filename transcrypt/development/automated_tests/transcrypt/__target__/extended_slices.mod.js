"use strict";
import {__nest__, __init__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __Envir__, __envir__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, complex, __conj__, __Terminal__, __terminal__, print} from './org.transcrypt.__runtime__.mod.js';
var __name__ = 'extended_slices';
export var indices = function (key) {
	if (__envir__.executor_name == __envir__.transpiler_name) {
		return (py_typeof (key) == list ? tuple (key) : key);
	}
	else {
		try {
			return key.indices (1000000000);
		}
		catch (__except0__) {
			try {
				return tuple ((function () {
					var __accu0__ = [];
					for (var subkey of key) {
						__accu0__.append (indices (subkey));
					}
					return __accu0__;
				}) ());
			}
			catch (__except1__) {
				return key;
			}
		}
	}
};
export var Test =  __class__ ('Test', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, autoTester) {
		self.autoTester = autoTester;
	});},
	get __getitem__ () {return __get__ (this, function (self, key) {
		self.autoTester.check ('getitem (', indices (key), ')');
		return 1234567;
	});},
	get __setitem__ () {return __get__ (this, function (self, key, value) {
		self.autoTester.check ('setitem (', indices (key), ')', value);
	});}
});
export var run = function (autoTester) {
	var __left0__ = Test (autoTester);
	var a = __left0__;
	var b = __left0__;
	var c = __left0__;
	var d = __left0__;
	var e = __left0__;
	var f = __left0__;
	var g = __left0__;
	var h = __left0__;
	var i = __left0__;
	var j = __left0__;
	var k = __left0__;
	var l = __left0__;
	a.__setitem__ ([tuple ([1, 2, 3]), tuple ([4, 5, 6])], __getslice__ (b, 7, 8, 9));
	__setslice__ (c, 1, 2, 3, d.__getitem__ ([tuple ([4, 5, 6]), tuple ([7, 8, 9])]));
	e.__setitem__ ([1, tuple ([1, 2, 3]), 3], f.__getitem__ ([4, tuple ([4, 5, 6]), 6]));
	g.__setitem__ ([1, 2, 3], h.__getitem__ ([1, 2, 3]));
	__setitem__ (i, 1, __getitem__ (j, 1));
	__setslice__ (k, 1, 2, 3, __getslice__ (l, 1, 2, 3));
};