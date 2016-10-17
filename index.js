// javascript ffi interface for windows api
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.
'use strict';

module.exports = {
    "ntdll" : require('./windows/ntdll.js') ,
    "kernel32" : require('./windows/kernel32.js') ,
    "user32" : require('./windows/user32.js') ,
    "gdi32" : require('./windows/gdi32.js') ,
    "shell32" : require('./windows/shell32.js') ,
    "shlwapi" : require('./windows/shlwapi.js') ,
    "advapi32" : require('./windows/advapi32.js') ,
    "dbghelp" : require('./windows/dbghelp.js') ,
    "icmp" : require('./windows/icmp.js') ,
    "util" : require('./util.js') ,
};