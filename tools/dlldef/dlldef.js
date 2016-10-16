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
var strBaseName = path.basename( strTxtFile , '.txt' );

var strResultFile = path.join( 
    path.dirname(strTxtFile) , 
    sprintf( '../defs/%s.txt' , strBaseName )
);

fs.access( path.dirname(strResultFile)  , function(error)
{
    if ( error )
    {
        fs.mkdirSync( path.dirname(strResultFile) );
        Work();
    } 
    else
    {
        Work();
    }
}
);

function Work()
{
    try
    {
        fs.unlinkSync( strResultFile );
    }
    catch(error)
    {

    }
    

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
}

function _Unique( SrcArray )
{
    var nIndex = 0;
    var NewArray = [];

    do
    {
        for ( nIndex = 0; nIndex < SrcArray.length; nIndex++ )
        {
            if ( -1 === NewArray.indexOf( SrcArray[nIndex] ) )
            {
                NewArray.push( SrcArray[nIndex] );
            }
        }

    }while(false);

    return NewArray;
}

function OnReadComplete( error , filedata)
{
    var LineArray = null;
    var nLine = 0;
    var strText = '';

    do
    {

        LineArray = filedata.toString().split('\r\n');
        if ( !LineArray )
        {
            break;
        }
        
        LineArray = LineArray.filter(  
            function( element , index , arr )
            {
                return ( 0 !== element.trim().length );
            } 
        );

        LineArray.sort();

        // remove repeat
        LineArray = _Unique( LineArray );

        // var kernel32 = ffi.Library( "kernel32.dll" ,
        strText = sprintf(
                'var %s = ffi.Library( "%s.dll" ,\r\n' , 
                strBaseName , strBaseName , LineArray[nLine] 
        );
        fs.appendFileSync( strResultFile , strText );

        fs.appendFileSync( strResultFile , '{\r\n' );

        for ( nLine = 0; nLine < LineArray.length; nLine++ )
        {
            strText = sprintf('\t// int __stdcall %s();\r\n' , LineArray[nLine] );

            strText += sprintf(
                '\t// "%s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,\r\n\r\n' ,
                LineArray[nLine] 
            );

            fs.appendFileSync( strResultFile , strText );
        }

        fs.appendFileSync( strResultFile , '});\r\n' );

        strText = sprintf( 'module.exports = %s;\r\n' , strBaseName  );
        fs.appendFileSync( strResultFile , strText );

        printf('[+] done.\n');
        process.exit(0);
        
    }while(false);

    return 0;
}