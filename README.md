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

var kernel32 = win32.kernel32;
var util = win32.util;

// test out char*
function test_GetComputerNameA()
{
	do
	{
		// alloc a DWORD -> DWORD* lpnSize = malloc( sizeof(DWORD) );
		var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
		kernel32.GetComputerNameA( ref.NULL , lpnSize );
			
		// read the result of lpnSize
		var nSize = lpnSize.deref();

		// alloc lpBuffer -> char* lpBuffer = (char*)malloc( nSize * sizeof(char) );
		var lpBuffer = new Buffer( nSize * wtypes.sizeof( wtypes.CHAR ) );

		kernel32.GetComputerNameA( lpBuffer , lpnSize );

		// covert buffer to ansi string
		var strName = lpBuffer.toString();
			
		printf( strName );

	}while(false);
}

// test out wchar*
function test_GetComputerNameW()
{
	do
	{
		// alloc a DWORD -> DWORD* lpnSize = malloc( sizeof(DWORD) );
		var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
		kernel32.GetComputerNameW( ref.NULL , lpnSize );
			
		// read the result of lpnSize
		var nSize = lpnSize.deref();

		// alloc lpBuffer -> WCHAR* lpBuffer = (WCHAR*)malloc( nSize * sizeof(WCHAR) );
		var lpBuffer = new Buffer( nSize * wtypes.sizeof( wtypes.WCHAR ) );

		kernel32.GetComputerNameW( lpBuffer , lpnSize );

		// covert buffer to wide string
		var strName = iconv.decode( lpBuffer , 'ucs2' );
			
		printf( strName );
		
	}while(false);

	return 0;
}

// test return HANDLE
function test_CreateFileW()
{
	var hFile = null;

	var lpFileName = null; 
	var dwDesiredAccess = 0;
	var dwShareMode = 0x00000001; // FILE_SHARE_READ
	var lpSecurityAttributes = ref.NULL;
	var dwCreationDisposition = 3; // OPEN_EXISTING
	var dwFlagsAndAttributes = 0; // FILE_ATTRIBUTE_NORMAL 
	var hTemplateFile = ref.NULL;
	
	do
	{
		lpFileName = Buffer.from( __filename , 'ucs2');
	
		hFile = kernel32.CreateFileW(
			lpFileName ,
			dwDesiredAccess ,
			dwShareMode ,
			lpSecurityAttributes ,
			dwCreationDisposition ,
			dwFlagsAndAttributes ,
			hTemplateFile
		);

		printf('hFile handle value = %s\n' , hFile.hexAddress() );

	}while(false);

	if ( ! util.is_INVALID_HANDLE_VALUE( hFile ) )
	{
		kernel32.CloseHandle( hFile );
		hFile = null;
	}	

	return 0;
}

```


