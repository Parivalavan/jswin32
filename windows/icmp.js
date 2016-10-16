// javascript ffi interface for icmp
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var icmp = ffi.Library( 'icmp.dll' ,{} );

// int __stdcall IcmpCloseHandle();
// icmp.IcmpCloseHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmpCreateFile();
// icmp.IcmpCreateFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmpParseReplies();
// icmp.IcmpParseReplies = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmpSendEcho();
// icmp.IcmpSendEcho = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmpSendEcho2();
// icmp.IcmpSendEcho2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall do_echo_rep();
// icmp.do_echo_rep = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall do_echo_req();
// icmp.do_echo_req = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall register_icmp();
// icmp.register_icmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// exports
module.exports = icmp;