// javascript ffi interface public util
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

function is_INVALID_HANDLE_VALUE( hHandle )
{
	var bFlag = false;

	do
	{
		if ( 'object' !== typeof hHandle )
		{
			break;
		} 

		if ( 'function' !== typeof hHandle.hexAddress )
		{
			break;
		} 

		if ( 'x64' == process.arch )
		{
			if ( 'FFFFFFFFFFFFFFFF' == hHandle.hexAddress() )
			{
				bFlag = true;
			}
		}
		else
		{
			if ( 'FFFFFFFF' == hHandle.hexAddress() )
			{
				bFlag = true;
			}
		}

	}while(false);

	return bFlag;
}
exports.is_INVALID_HANDLE_VALUE = is_INVALID_HANDLE_VALUE;

