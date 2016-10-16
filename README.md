# jswin32
javascript ffi interface for windows api



```javascript
const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');
var win32 = require('jswin32');

// test out char*
function test_GetComputerNameA()
{
	var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
	win32.kernel32.GetComputerNameA( ref.NULL , lpnSize );
		
	var nSize = lpnSize.deref();

	var lpBuffer = new Buffer( nSize * 1 );

	win32.kernel32.GetComputerNameA( lpBuffer , lpnSize );

	var strName = lpBuffer.toString();
		
	printf( strName );
}

// test out wchar*
function test_GetComputerNameW()
{
	var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
	win32.kernel32.GetComputerNameW( ref.NULL , lpnSize );
		
	var nSize = lpnSize.deref();

	var lpBuffer = new Buffer( nSize * 2 );

	win32.kernel32.GetComputerNameW( lpBuffer , lpnSize );

	var strName = iconv.decode( lpBuffer , 'ucs2' );
		
	printf( strName );
}

```


