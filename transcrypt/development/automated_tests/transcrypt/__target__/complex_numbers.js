// Transcrypt'ed from Python, 2018-04-09 10:23:46
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __conj__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __globals__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __merge__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setProperty__, __setitem__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, complex, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'complex_numbers';
export var run = function (autoTester) {
	var x = 567;
	var y = -(3);
	var z = 5 * x + 2 * y;
	autoTester.check (__conj__ (x).real, __conj__ (x).imag);
	autoTester.check (x, y, z);
	var a = __add__ (234, complex (0, 3.0));
	var b = __sub__ (4, complex (0, 5.0));
	var c = __call__ (complex, null, __neg__ (6), 7);
	var d = 1;
	__call__ (autoTester.check, autoTester, a, b, c);
	__call__ (autoTester.check, autoTester, __call__ (__conj__, null, d).real, __call__ (__conj__, null, d).imag);
	var t = __add__ (__sub__ (__mul__ (6, x), __mul__ (3, y)), 7);
	__call__ (autoTester.check, autoTester, t);
	var d = __mul__ (2, a);
	var e = __mul__ (x, b);
	var f = __add__ (__add__ (z, d), e);
	var g = __truediv__ (a, b);
	var h = __sub__ (a, b);
	var i = __sub__ (x, c);
	var j = __sub__ (a, x);
	var k = __add__ (b, y);
	__call__ (autoTester.check, autoTester, d, e, f, __call__ (round, null, g.real, 2), __call__ (round, null, g.imag, 2), h, i, j, k);
};
export {};

//# sourceMappingURL=complex_numbers.map