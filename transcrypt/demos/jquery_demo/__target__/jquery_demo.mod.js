"use strict";
import {__nest__, __init__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __Envir__, __envir__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, round, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, __Terminal__, __terminal__, print} from './org.transcrypt.__runtime__.mod.js';
var __name__ = '__main__';
export var start = function () {
	var changeColors = function () {
		for (var div of $divs) {
			$ (div).css (dict ({'color': 'rgb({},{},{})'.format (...(function () {
				var __accu0__ = [];
				for (var i = 0; i < 3; i++) {
					__accu0__.append (int (256 * Math.random ()));
				}
				return __accu0__;
			}) ())}));
		}
	};
	var $divs = $ ('div');
	changeColors ();
	window.setInterval (changeColors, 500);
};