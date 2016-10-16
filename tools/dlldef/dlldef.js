// javascript ffi interface for icmp
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const path = require('path');
const fs = require('fs');


if ( process.argv.length <= 2 )
{
    printf('usage:' );
    printf('node dlldef.js ./txt/kernel32.txt \n' );
    process.exit(0);
}

var strTxtFile = path.resolve( process.argv[2] );

var strResultFile = path.join( 
    path.dirname(strTxtFile) , 
    sprintf( '../defs/%s.txt' , path.basename( strTxtFile ) )
);

fs.access( strTxtFile , function( error)
{
    if ( error )
    {
        printf('[-] Not Found %s\n' , process.argv[2] );
        process.exit(0);
    }
    else
    {
        fs.readFile( strTxtFile , OnReadComplete );
    }
});

function _RemoveBlankLine( element , index , arr )
{
    return ( 0 !== element.trim().length );
}

function OnReadComplete( error , filedata)
{
    var LineArray = null;
    var nLine = 0;

    do
    {

        LineArray = filedata.toString().split('\r\n');
        if ( !LineArray )
        {
            break;
        }
        
        LineArray = LineArray.filter(  _RemoveBlankLine );

        printf( LineArray );

    }while(false);

    return 0;
}