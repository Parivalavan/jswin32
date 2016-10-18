// javascript ffi interface for shlwapi
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

var shlwapi = ffi.Library( "shlwapi.dll" ,
{
	// "AssocCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocGetPerceivedType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocIsDangerous" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryStringByKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryStringByKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocQueryStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChrCmpIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChrCmpIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ColorAdjustLuma" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ColorHLSToRGB" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ColorRGBToHLS" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConnectToConnectionPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DelayLoadFailureHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllGetClassObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllGetVersion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GUIDFromStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAcceptLanguagesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAcceptLanguagesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuPosFromID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HashData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_Copy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_Read" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_ReadPidl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_ReadStr" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_Reset" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_Size" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_Write" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_WritePidl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IStream_WriteStr" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_AtomicRelease" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_Exec" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_GetSite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_GetWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_QueryService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_QueryStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_Set" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IUnknown_SetSite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IntlStrEqWorkerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IntlStrEqWorkerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharSpaceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharSpaceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsInternetESCEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsOS" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MLLoadLibraryA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MLLoadLibraryW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "N/A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ParseURLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ParseURLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAddBackslashA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAddBackslashW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAddExtensionA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAddExtensionW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAppendA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathAppendW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathBuildRootA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathBuildRootW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCanonicalizeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCanonicalizeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCombineA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCombineW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCommonPrefixA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCommonPrefixW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCompactPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCompactPathExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCompactPathExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCompactPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCreateFromUrlA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCreateFromUrlAlloc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCreateFromUrlW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFileExistsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFileExistsAndAttributesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFileExistsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindExtensionA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindExtensionW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindFileNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindFileNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindNextComponentA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindNextComponentW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindOnPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindOnPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindSuffixArrayA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathFindSuffixArrayW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetArgsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetArgsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetCharTypeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetCharTypeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetDriveNumberA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetDriveNumberW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsContentTypeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsContentTypeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsDirectoryA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsDirectoryEmptyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsDirectoryEmptyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsDirectoryW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsFileSpecA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsFileSpecW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsLFNFileSpecA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsLFNFileSpecW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsNetworkPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsNetworkPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsPrefixA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsPrefixW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsRelativeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsRelativeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsRootA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsRootW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSameRootA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSameRootW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSystemFolderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSystemFolderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCServerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCServerShareA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCServerShareW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCServerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsUNCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsURLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsURLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMakePrettyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMakePrettyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMakeSystemFolderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMakeSystemFolderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMatchSpecA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMatchSpecExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMatchSpecExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMatchSpecW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathParseIconLocationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathParseIconLocationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathQuoteSpacesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathQuoteSpacesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRelativePathToA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRelativePathToW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveArgsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveArgsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveBackslashA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveBackslashW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveBlanksA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveBlanksW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveExtensionA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveExtensionW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveFileSpecA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRemoveFileSpecW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRenameExtensionA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathRenameExtensionW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSearchAndQualifyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSearchAndQualifyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSetDlgItemPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSetDlgItemPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSkipRootA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathSkipRootW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathStripPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathStripPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathStripToRootA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathStripToRootW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnExpandEnvStringsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnExpandEnvStringsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUndecorateA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUndecorateW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnmakeSystemFolderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnmakeSystemFolderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnquoteSpacesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathUnquoteSpacesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QISearch" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAllocShared" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAnsiToAnsi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAnsiToUnicode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAutoComplete" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCopyKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCopyKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateMemStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateStreamOnFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateStreamOnFileEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateStreamOnFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateStreamWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateThread" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateThreadRef" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateThreadWithHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateWorkerWindowW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteEmptyKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteEmptyKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteOrphanKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteOrphanKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDeleteValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnumKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnumKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnumValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnumValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFormatDateTimeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFormatDateTimeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFreeShared" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetInverseCMAP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetThreadRef" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetViewStatePropertyBag" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHIsChildOrSelf" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHIsLowMemoryMachine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHLoadIndirectString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHLockShared" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHMessageBoxCheckA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHMessageBoxCheckW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenRegStream2A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenRegStream2W" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenRegStreamA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenRegStreamW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPackDispParamsV" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPinDllOfCLSID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPropertyBag_ReadStrAlloc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPropertyBag_WriteBSTR" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryInfoKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryInfoKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryValueExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryValueExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegCloseUSKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegCreateUSKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegCreateUSKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegDeleteEmptyUSKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegDeleteEmptyUSKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegDeleteUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegDeleteUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegDuplicateHKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegEnumUSKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegEnumUSKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegEnumUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegEnumUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetBoolUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetBoolUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetBoolValueFromHKCUHKLM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetIntW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetValueFromHKCUHKLM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegGetValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegOpenUSKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegOpenUSKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegQueryInfoUSKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegQueryInfoUSKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegQueryUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegQueryUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegSetPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegSetPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegSetUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegSetUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegWriteUSValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegWriteUSValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRegisterValidateTemplate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHReleaseThreadRef" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRunIndirectRegClientCommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSendMessageBroadcastA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSendMessageBroadcastW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetThreadRef" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSkipJunction" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHStrDupA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHStrDupW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHStripMneumonicA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHStripMneumonicW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUnicodeToAnsi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUnicodeToAnsiCP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUnicodeToUnicode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUnlockShared" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellMessageBoxA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellMessageBoxW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCSpnA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCSpnIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCSpnIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCSpnW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCatBuffA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCatBuffW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCatChainW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCatW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrNIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrNW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrChrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpCA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpICA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpICW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpLogicalW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNCA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNICA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNICW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpNW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCmpW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCpyNW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrCpyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrDupA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrDupW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatByteSize64A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatByteSizeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatByteSizeEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatByteSizeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatKBSizeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFormatKBSizeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFromTimeIntervalA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrFromTimeIntervalW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrIsIntlEqualA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrIsIntlEqualW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrNCatA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrNCatW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrPBrkA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrPBrkW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRChrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRChrIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRChrIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRChrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRStrIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRStrIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRetToBSTR" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRetToBufA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRetToBufW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRetToStrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrRetToStrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrSpnA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrSpnW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrNIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrNW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrStrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToInt64ExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToInt64ExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToIntA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToIntExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToIntExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrToIntW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrTrimA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrTrimW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlApplySchemeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlApplySchemeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCanonicalizeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCanonicalizeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCombineA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCombineW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCompareA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCompareW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCreateFromPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlCreateFromPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlEscapeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlEscapeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlFixupW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlGetLocationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlGetLocationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlGetPartA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlGetPartW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlHashA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlHashW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsNoHistoryA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsNoHistoryW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsOpaqueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsOpaqueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlIsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlUnescapeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UrlUnescapeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WhichPlatform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wnsprintfA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wnsprintfW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wvnsprintfA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wvnsprintfW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

});
module.exports = shlwapi;
