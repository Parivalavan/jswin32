// javascript ffi interface for shlwapi
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');


// init
var shlwapi = ffi.Library( "shlwapi.dll" ,
{
	// int __stdcall AssocCreate();
	// "AssocCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocGetPerceivedType();
	// "AssocGetPerceivedType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocIsDangerous();
	// "AssocIsDangerous" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryKeyA();
	// "AssocQueryKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryKeyW();
	// "AssocQueryKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryStringA();
	// "AssocQueryStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryStringByKeyA();
	// "AssocQueryStringByKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryStringByKeyW();
	// "AssocQueryStringByKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocQueryStringW();
	// "AssocQueryStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChrCmpIA();
	// "ChrCmpIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChrCmpIW();
	// "ChrCmpIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ColorAdjustLuma();
	// "ColorAdjustLuma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ColorHLSToRGB();
	// "ColorHLSToRGB" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ColorRGBToHLS();
	// "ColorRGBToHLS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConnectToConnectionPoint();
	// "ConnectToConnectionPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DelayLoadFailureHook();
	// "DelayLoadFailureHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllGetClassObject();
	// "DllGetClassObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllGetVersion();
	// "DllGetVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GUIDFromStringW();
	// "GUIDFromStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAcceptLanguagesA();
	// "GetAcceptLanguagesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAcceptLanguagesW();
	// "GetAcceptLanguagesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuPosFromID();
	// "GetMenuPosFromID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HashData();
	// "HashData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_Copy();
	// "IStream_Copy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_Read();
	// "IStream_Read" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_ReadPidl();
	// "IStream_ReadPidl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_ReadStr();
	// "IStream_ReadStr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_Reset();
	// "IStream_Reset" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_Size();
	// "IStream_Size" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_Write();
	// "IStream_Write" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_WritePidl();
	// "IStream_WritePidl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IStream_WriteStr();
	// "IStream_WriteStr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_AtomicRelease();
	// "IUnknown_AtomicRelease" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_Exec();
	// "IUnknown_Exec" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_GetSite();
	// "IUnknown_GetSite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_GetWindow();
	// "IUnknown_GetWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_QueryService();
	// "IUnknown_QueryService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_QueryStatus();
	// "IUnknown_QueryStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_Set();
	// "IUnknown_Set" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IUnknown_SetSite();
	// "IUnknown_SetSite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IntlStrEqWorkerA();
	// "IntlStrEqWorkerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IntlStrEqWorkerW();
	// "IntlStrEqWorkerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharSpaceA();
	// "IsCharSpaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharSpaceW();
	// "IsCharSpaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsInternetESCEnabled();
	// "IsInternetESCEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsOS();
	// "IsOS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MLLoadLibraryA();
	// "MLLoadLibraryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MLLoadLibraryW();
	// "MLLoadLibraryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ParseURLA();
	// "ParseURLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ParseURLW();
	// "ParseURLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAddBackslashA();
	// "PathAddBackslashA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAddBackslashW();
	// "PathAddBackslashW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAddExtensionA();
	// "PathAddExtensionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAddExtensionW();
	// "PathAddExtensionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAppendA();
	// "PathAppendA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathAppendW();
	// "PathAppendW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathBuildRootA();
	// "PathBuildRootA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathBuildRootW();
	// "PathBuildRootW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCanonicalizeA();
	// "PathCanonicalizeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCanonicalizeW();
	// "PathCanonicalizeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCombineA();
	// "PathCombineA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCombineW();
	// "PathCombineW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCommonPrefixA();
	// "PathCommonPrefixA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCommonPrefixW();
	// "PathCommonPrefixW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCompactPathA();
	// "PathCompactPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCompactPathExA();
	// "PathCompactPathExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCompactPathExW();
	// "PathCompactPathExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCompactPathW();
	// "PathCompactPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCreateFromUrlA();
	// "PathCreateFromUrlA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCreateFromUrlAlloc();
	// "PathCreateFromUrlAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCreateFromUrlW();
	// "PathCreateFromUrlW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFileExistsA();
	// "PathFileExistsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFileExistsAndAttributesW();
	// "PathFileExistsAndAttributesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFileExistsW();
	// "PathFileExistsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindExtensionA();
	// "PathFindExtensionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindExtensionW();
	// "PathFindExtensionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindFileNameA();
	// "PathFindFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindFileNameW();
	// "PathFindFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindNextComponentA();
	// "PathFindNextComponentA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindNextComponentW();
	// "PathFindNextComponentW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindOnPathA();
	// "PathFindOnPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindOnPathW();
	// "PathFindOnPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindSuffixArrayA();
	// "PathFindSuffixArrayA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathFindSuffixArrayW();
	// "PathFindSuffixArrayW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetArgsA();
	// "PathGetArgsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetArgsW();
	// "PathGetArgsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetCharTypeA();
	// "PathGetCharTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetCharTypeW();
	// "PathGetCharTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetDriveNumberA();
	// "PathGetDriveNumberA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetDriveNumberW();
	// "PathGetDriveNumberW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsContentTypeA();
	// "PathIsContentTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsContentTypeW();
	// "PathIsContentTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsDirectoryA();
	// "PathIsDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsDirectoryEmptyA();
	// "PathIsDirectoryEmptyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsDirectoryEmptyW();
	// "PathIsDirectoryEmptyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsDirectoryW();
	// "PathIsDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsFileSpecA();
	// "PathIsFileSpecA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsFileSpecW();
	// "PathIsFileSpecW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsLFNFileSpecA();
	// "PathIsLFNFileSpecA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsLFNFileSpecW();
	// "PathIsLFNFileSpecW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsNetworkPathA();
	// "PathIsNetworkPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsNetworkPathW();
	// "PathIsNetworkPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsPrefixA();
	// "PathIsPrefixA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsPrefixW();
	// "PathIsPrefixW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsRelativeA();
	// "PathIsRelativeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsRelativeW();
	// "PathIsRelativeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsRootA();
	// "PathIsRootA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsRootW();
	// "PathIsRootW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSameRootA();
	// "PathIsSameRootA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSameRootW();
	// "PathIsSameRootW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSystemFolderA();
	// "PathIsSystemFolderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSystemFolderW();
	// "PathIsSystemFolderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCA();
	// "PathIsUNCA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCServerA();
	// "PathIsUNCServerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCServerShareA();
	// "PathIsUNCServerShareA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCServerShareW();
	// "PathIsUNCServerShareW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCServerW();
	// "PathIsUNCServerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsUNCW();
	// "PathIsUNCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsURLA();
	// "PathIsURLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsURLW();
	// "PathIsURLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMakePrettyA();
	// "PathMakePrettyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMakePrettyW();
	// "PathMakePrettyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMakeSystemFolderA();
	// "PathMakeSystemFolderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMakeSystemFolderW();
	// "PathMakeSystemFolderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMatchSpecA();
	// "PathMatchSpecA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMatchSpecExA();
	// "PathMatchSpecExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMatchSpecExW();
	// "PathMatchSpecExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMatchSpecW();
	// "PathMatchSpecW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathParseIconLocationA();
	// "PathParseIconLocationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathParseIconLocationW();
	// "PathParseIconLocationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathQuoteSpacesA();
	// "PathQuoteSpacesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathQuoteSpacesW();
	// "PathQuoteSpacesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRelativePathToA();
	// "PathRelativePathToA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRelativePathToW();
	// "PathRelativePathToW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveArgsA();
	// "PathRemoveArgsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveArgsW();
	// "PathRemoveArgsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveBackslashA();
	// "PathRemoveBackslashA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveBackslashW();
	// "PathRemoveBackslashW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveBlanksA();
	// "PathRemoveBlanksA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveBlanksW();
	// "PathRemoveBlanksW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveExtensionA();
	// "PathRemoveExtensionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveExtensionW();
	// "PathRemoveExtensionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveFileSpecA();
	// "PathRemoveFileSpecA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRemoveFileSpecW();
	// "PathRemoveFileSpecW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRenameExtensionA();
	// "PathRenameExtensionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathRenameExtensionW();
	// "PathRenameExtensionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSearchAndQualifyA();
	// "PathSearchAndQualifyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSearchAndQualifyW();
	// "PathSearchAndQualifyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSetDlgItemPathA();
	// "PathSetDlgItemPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSetDlgItemPathW();
	// "PathSetDlgItemPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSkipRootA();
	// "PathSkipRootA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathSkipRootW();
	// "PathSkipRootW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathStripPathA();
	// "PathStripPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathStripPathW();
	// "PathStripPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathStripToRootA();
	// "PathStripToRootA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathStripToRootW();
	// "PathStripToRootW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnExpandEnvStringsA();
	// "PathUnExpandEnvStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnExpandEnvStringsW();
	// "PathUnExpandEnvStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUndecorateA();
	// "PathUndecorateA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUndecorateW();
	// "PathUndecorateW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnmakeSystemFolderA();
	// "PathUnmakeSystemFolderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnmakeSystemFolderW();
	// "PathUnmakeSystemFolderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnquoteSpacesA();
	// "PathUnquoteSpacesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathUnquoteSpacesW();
	// "PathUnquoteSpacesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QISearch();
	// "QISearch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAllocShared();
	// "SHAllocShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAnsiToAnsi();
	// "SHAnsiToAnsi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAnsiToUnicode();
	// "SHAnsiToUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAutoComplete();
	// "SHAutoComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCopyKeyA();
	// "SHCopyKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCopyKeyW();
	// "SHCopyKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateMemStream();
	// "SHCreateMemStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellPalette();
	// "SHCreateShellPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateStreamOnFileA();
	// "SHCreateStreamOnFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateStreamOnFileEx();
	// "SHCreateStreamOnFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateStreamOnFileW();
	// "SHCreateStreamOnFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateStreamWrapper();
	// "SHCreateStreamWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateThread();
	// "SHCreateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateThreadRef();
	// "SHCreateThreadRef" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateThreadWithHandle();
	// "SHCreateThreadWithHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateWorkerWindowW();
	// "SHCreateWorkerWindowW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteEmptyKeyA();
	// "SHDeleteEmptyKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteEmptyKeyW();
	// "SHDeleteEmptyKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteKeyA();
	// "SHDeleteKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteKeyW();
	// "SHDeleteKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteOrphanKeyA();
	// "SHDeleteOrphanKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteOrphanKeyW();
	// "SHDeleteOrphanKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteValueA();
	// "SHDeleteValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDeleteValueW();
	// "SHDeleteValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnumKeyExA();
	// "SHEnumKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnumKeyExW();
	// "SHEnumKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnumValueA();
	// "SHEnumValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnumValueW();
	// "SHEnumValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFormatDateTimeA();
	// "SHFormatDateTimeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFormatDateTimeW();
	// "SHFormatDateTimeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFreeShared();
	// "SHFreeShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetInverseCMAP();
	// "SHGetInverseCMAP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetThreadRef();
	// "SHGetThreadRef" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetValueA();
	// "SHGetValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetValueW();
	// "SHGetValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetViewStatePropertyBag();
	// "SHGetViewStatePropertyBag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHIsChildOrSelf();
	// "SHIsChildOrSelf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHIsLowMemoryMachine();
	// "SHIsLowMemoryMachine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHLoadIndirectString();
	// "SHLoadIndirectString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHLockShared();
	// "SHLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHMessageBoxCheckA();
	// "SHMessageBoxCheckA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHMessageBoxCheckW();
	// "SHMessageBoxCheckW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenRegStream2A();
	// "SHOpenRegStream2A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenRegStream2W();
	// "SHOpenRegStream2W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenRegStreamA();
	// "SHOpenRegStreamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenRegStreamW();
	// "SHOpenRegStreamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPackDispParamsV();
	// "SHPackDispParamsV" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPinDllOfCLSID();
	// "SHPinDllOfCLSID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPropertyBag_ReadStrAlloc();
	// "SHPropertyBag_ReadStrAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPropertyBag_WriteBSTR();
	// "SHPropertyBag_WriteBSTR" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryInfoKeyA();
	// "SHQueryInfoKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryInfoKeyW();
	// "SHQueryInfoKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryValueExA();
	// "SHQueryValueExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryValueExW();
	// "SHQueryValueExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegCloseUSKey();
	// "SHRegCloseUSKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegCreateUSKeyA();
	// "SHRegCreateUSKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegCreateUSKeyW();
	// "SHRegCreateUSKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegDeleteEmptyUSKeyA();
	// "SHRegDeleteEmptyUSKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegDeleteEmptyUSKeyW();
	// "SHRegDeleteEmptyUSKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegDeleteUSValueA();
	// "SHRegDeleteUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegDeleteUSValueW();
	// "SHRegDeleteUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegDuplicateHKey();
	// "SHRegDuplicateHKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegEnumUSKeyA();
	// "SHRegEnumUSKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegEnumUSKeyW();
	// "SHRegEnumUSKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegEnumUSValueA();
	// "SHRegEnumUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegEnumUSValueW();
	// "SHRegEnumUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetBoolUSValueA();
	// "SHRegGetBoolUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetBoolUSValueW();
	// "SHRegGetBoolUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetBoolValueFromHKCUHKLM();
	// "SHRegGetBoolValueFromHKCUHKLM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetIntW();
	// "SHRegGetIntW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetPathA();
	// "SHRegGetPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetPathW();
	// "SHRegGetPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetUSValueA();
	// "SHRegGetUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetUSValueW();
	// "SHRegGetUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetValueA();
	// "SHRegGetValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetValueFromHKCUHKLM();
	// "SHRegGetValueFromHKCUHKLM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegGetValueW();
	// "SHRegGetValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegOpenUSKeyA();
	// "SHRegOpenUSKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegOpenUSKeyW();
	// "SHRegOpenUSKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegQueryInfoUSKeyA();
	// "SHRegQueryInfoUSKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegQueryInfoUSKeyW();
	// "SHRegQueryInfoUSKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegQueryUSValueA();
	// "SHRegQueryUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegQueryUSValueW();
	// "SHRegQueryUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegSetPathA();
	// "SHRegSetPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegSetPathW();
	// "SHRegSetPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegSetUSValueA();
	// "SHRegSetUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegSetUSValueW();
	// "SHRegSetUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegWriteUSValueA();
	// "SHRegWriteUSValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegWriteUSValueW();
	// "SHRegWriteUSValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRegisterValidateTemplate();
	// "SHRegisterValidateTemplate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHReleaseThreadRef();
	// "SHReleaseThreadRef" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRunIndirectRegClientCommand();
	// "SHRunIndirectRegClientCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSendMessageBroadcastA();
	// "SHSendMessageBroadcastA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSendMessageBroadcastW();
	// "SHSendMessageBroadcastW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetThreadRef();
	// "SHSetThreadRef" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetValueA();
	// "SHSetValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetValueW();
	// "SHSetValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSkipJunction();
	// "SHSkipJunction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHStrDupA();
	// "SHStrDupA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHStrDupW();
	// "SHStrDupW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHStripMneumonicA();
	// "SHStripMneumonicA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHStripMneumonicW();
	// "SHStripMneumonicW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUnicodeToAnsi();
	// "SHUnicodeToAnsi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUnicodeToAnsiCP();
	// "SHUnicodeToAnsiCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUnicodeToUnicode();
	// "SHUnicodeToUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUnlockShared();
	// "SHUnlockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellMessageBoxA();
	// "ShellMessageBoxA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellMessageBoxW();
	// "ShellMessageBoxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCSpnA();
	// "StrCSpnA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCSpnIA();
	// "StrCSpnIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCSpnIW();
	// "StrCSpnIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCSpnW();
	// "StrCSpnW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCatBuffA();
	// "StrCatBuffA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCatBuffW();
	// "StrCatBuffW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCatChainW();
	// "StrCatChainW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCatW();
	// "StrCatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrA();
	// "StrChrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrIA();
	// "StrChrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrIW();
	// "StrChrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrNIW();
	// "StrChrNIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrNW();
	// "StrChrNW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrW();
	// "StrChrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpCA();
	// "StrCmpCA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpCW();
	// "StrCmpCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpICA();
	// "StrCmpICA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpICW();
	// "StrCmpICW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpIW();
	// "StrCmpIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpLogicalW();
	// "StrCmpLogicalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNA();
	// "StrCmpNA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNCA();
	// "StrCmpNCA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNCW();
	// "StrCmpNCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNIA();
	// "StrCmpNIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNICA();
	// "StrCmpNICA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNICW();
	// "StrCmpNICW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNIW();
	// "StrCmpNIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNW();
	// "StrCmpNW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpW();
	// "StrCmpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCpyNW();
	// "StrCpyNW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCpyW();
	// "StrCpyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrDupA();
	// "StrDupA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrDupW();
	// "StrDupW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatByteSize64A();
	// "StrFormatByteSize64A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatByteSizeA();
	// "StrFormatByteSizeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatByteSizeEx();
	// "StrFormatByteSizeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatByteSizeW();
	// "StrFormatByteSizeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatKBSizeA();
	// "StrFormatKBSizeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFormatKBSizeW();
	// "StrFormatKBSizeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFromTimeIntervalA();
	// "StrFromTimeIntervalA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrFromTimeIntervalW();
	// "StrFromTimeIntervalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrIsIntlEqualA();
	// "StrIsIntlEqualA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrIsIntlEqualW();
	// "StrIsIntlEqualW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCatA();
	// "StrNCatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCatW();
	// "StrNCatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrPBrkA();
	// "StrPBrkA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrPBrkW();
	// "StrPBrkW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrA();
	// "StrRChrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrIA();
	// "StrRChrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrIW();
	// "StrRChrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrW();
	// "StrRChrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrIA();
	// "StrRStrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrIW();
	// "StrRStrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRetToBSTR();
	// "StrRetToBSTR" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRetToBufA();
	// "StrRetToBufA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRetToBufW();
	// "StrRetToBufW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRetToStrA();
	// "StrRetToStrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRetToStrW();
	// "StrRetToStrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrSpnA();
	// "StrSpnA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrSpnW();
	// "StrSpnW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrA();
	// "StrStrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrIA();
	// "StrStrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrIW();
	// "StrStrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrNIW();
	// "StrStrNIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrNW();
	// "StrStrNW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrW();
	// "StrStrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToInt64ExA();
	// "StrToInt64ExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToInt64ExW();
	// "StrToInt64ExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToIntA();
	// "StrToIntA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToIntExA();
	// "StrToIntExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToIntExW();
	// "StrToIntExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrToIntW();
	// "StrToIntW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrTrimA();
	// "StrTrimA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrTrimW();
	// "StrTrimW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlApplySchemeA();
	// "UrlApplySchemeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlApplySchemeW();
	// "UrlApplySchemeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCanonicalizeA();
	// "UrlCanonicalizeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCanonicalizeW();
	// "UrlCanonicalizeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCombineA();
	// "UrlCombineA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCombineW();
	// "UrlCombineW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCompareA();
	// "UrlCompareA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCompareW();
	// "UrlCompareW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCreateFromPathA();
	// "UrlCreateFromPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlCreateFromPathW();
	// "UrlCreateFromPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlEscapeA();
	// "UrlEscapeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlEscapeW();
	// "UrlEscapeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlFixupW();
	// "UrlFixupW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlGetLocationA();
	// "UrlGetLocationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlGetLocationW();
	// "UrlGetLocationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlGetPartA();
	// "UrlGetPartA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlGetPartW();
	// "UrlGetPartW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlHashA();
	// "UrlHashA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlHashW();
	// "UrlHashW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsA();
	// "UrlIsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsNoHistoryA();
	// "UrlIsNoHistoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsNoHistoryW();
	// "UrlIsNoHistoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsOpaqueA();
	// "UrlIsOpaqueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsOpaqueW();
	// "UrlIsOpaqueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlIsW();
	// "UrlIsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlUnescapeA();
	// "UrlUnescapeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UrlUnescapeW();
	// "UrlUnescapeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WhichPlatform();
	// "WhichPlatform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wnsprintfA();
	// "wnsprintfA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wnsprintfW();
	// "wnsprintfW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wvnsprintfA();
	// "wvnsprintfA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wvnsprintfW();
	// "wvnsprintfW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = shlwapi;
