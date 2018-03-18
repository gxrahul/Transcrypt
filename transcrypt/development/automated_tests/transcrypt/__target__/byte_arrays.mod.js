"use strict";
import {__nest__, __init__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __Envir__, __envir__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, complex, __conj__, __Terminal__, __terminal__, print} from './org.transcrypt.__runtime__.mod.js';
var __name__ = 'byte_arrays';
export var run = function (autoTester) {
	var b = bytes ('bike');
	var s = bytes ('shop', 'utf8');
	var e = bytes ('');
	var bb = bytearray (list ([0, 1, 2, 3, 4]));
	var bc = bytes (tuple ([5, 6, 7, 8, 9]));
	var bps = __add__ (__add__ (b, bytes ('pump')), s);
	var bps3 = __add__ (__mul__ (3, bps), bytes (' '));
	var aBps3 = __add__ (__mul__ (bps, 3), bytes (' '));
	var l = __add__ (list ([1, 2, 3]), list ([4, 5, 6]));
	var formatCheck = function (aBytes) {
		autoTester.check ((function () {
			var __accu0__ = [];
			for (var aByte of aBytes) {
				__accu0__.append (int (aByte));
			}
			return __accu0__;
		}) ());
	};
	formatCheck (b);
	formatCheck (s);
	formatCheck (e);
	formatCheck (bb);
	formatCheck (bc);
	formatCheck (bps);
	formatCheck (bps3);
	formatCheck (aBps3);
	__call__ (formatCheck, null, __add__ (bb, bc));
	__call__ (formatCheck, null, __add__ (__add__ (__call__ (bytearray, null, 'ding', 'utf8'), bytes ('dang')), __call__ (bytes, null, 'dong', 'utf8')));
	formatCheck (l);
};