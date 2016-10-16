// javascript ffi interface for icmp
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');


// init
var icmp = ffi.Library( 'icmp.dll' ,{} );

var icmp = ffi.Library( "icmp.dll" ,
{
	// int __stdcall IcmpCloseHandle();
	// "IcmpCloseHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmpCreateFile();
	// "IcmpCreateFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmpParseReplies();
	// "IcmpParseReplies" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmpSendEcho();
	// "IcmpSendEcho" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmpSendEcho2();
	// "IcmpSendEcho2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall do_echo_rep();
	// "do_echo_rep" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall do_echo_req();
	// "do_echo_req" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall register_icmp();
	// "register_icmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = icmp;


// exports
module.exports = icmp;