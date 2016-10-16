// javascript ffi interface for gdi32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var gdi32 = ffi.Library( 'gdi32.dll' ,{} );

// 
// gdi32.GetLogicalDrives = [ wtypes.ULONG , [ ] , {abi : ffi.FFI_STDCALL } ];


















































// exports
module.exports = gdi32;