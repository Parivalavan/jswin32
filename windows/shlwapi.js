// javascript ffi interface for shlwapi
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var shlwapi = ffi.Library( 'shlwapi.dll' ,{} );

// 
// int __stdcall AssocCreate();
// shlwapi.AssocCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocGetPerceivedType();
// shlwapi.AssocGetPerceivedType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocIsDangerous();
// shlwapi.AssocIsDangerous = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryKeyA();
// shlwapi.AssocQueryKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryKeyW();
// shlwapi.AssocQueryKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryStringA();
// shlwapi.AssocQueryStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryStringByKeyA();
// shlwapi.AssocQueryStringByKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryStringByKeyW();
// shlwapi.AssocQueryStringByKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocQueryStringW();
// shlwapi.AssocQueryStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChrCmpIA();
// shlwapi.ChrCmpIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChrCmpIW();
// shlwapi.ChrCmpIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ColorAdjustLuma();
// shlwapi.ColorAdjustLuma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ColorHLSToRGB();
// shlwapi.ColorHLSToRGB = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ColorRGBToHLS();
// shlwapi.ColorRGBToHLS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConnectToConnectionPoint();
// shlwapi.ConnectToConnectionPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DelayLoadFailureHook();
// shlwapi.DelayLoadFailureHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllGetClassObject();
// shlwapi.DllGetClassObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllGetVersion();
// shlwapi.DllGetVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GUIDFromStringW();
// shlwapi.GUIDFromStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAcceptLanguagesA();
// shlwapi.GetAcceptLanguagesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAcceptLanguagesW();
// shlwapi.GetAcceptLanguagesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuPosFromID();
// shlwapi.GetMenuPosFromID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HashData();
// shlwapi.HashData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_Copy();
// shlwapi.IStream_Copy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_Read();
// shlwapi.IStream_Read = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_ReadPidl();
// shlwapi.IStream_ReadPidl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_ReadStr();
// shlwapi.IStream_ReadStr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_Reset();
// shlwapi.IStream_Reset = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_Size();
// shlwapi.IStream_Size = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_Write();
// shlwapi.IStream_Write = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_WritePidl();
// shlwapi.IStream_WritePidl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IStream_WriteStr();
// shlwapi.IStream_WriteStr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_AtomicRelease();
// shlwapi.IUnknown_AtomicRelease = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_Exec();
// shlwapi.IUnknown_Exec = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_GetSite();
// shlwapi.IUnknown_GetSite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_GetWindow();
// shlwapi.IUnknown_GetWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_QueryService();
// shlwapi.IUnknown_QueryService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_QueryStatus();
// shlwapi.IUnknown_QueryStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_Set();
// shlwapi.IUnknown_Set = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IUnknown_SetSite();
// shlwapi.IUnknown_SetSite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IntlStrEqWorkerA();
// shlwapi.IntlStrEqWorkerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IntlStrEqWorkerW();
// shlwapi.IntlStrEqWorkerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharSpaceA();
// shlwapi.IsCharSpaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharSpaceW();
// shlwapi.IsCharSpaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsInternetESCEnabled();
// shlwapi.IsInternetESCEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsOS();
// shlwapi.IsOS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MLLoadLibraryA();
// shlwapi.MLLoadLibraryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MLLoadLibraryW();
// shlwapi.MLLoadLibraryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// shlwapi.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ParseURLA();
// shlwapi.ParseURLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ParseURLW();
// shlwapi.ParseURLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAddBackslashA();
// shlwapi.PathAddBackslashA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAddBackslashW();
// shlwapi.PathAddBackslashW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAddExtensionA();
// shlwapi.PathAddExtensionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAddExtensionW();
// shlwapi.PathAddExtensionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAppendA();
// shlwapi.PathAppendA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathAppendW();
// shlwapi.PathAppendW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathBuildRootA();
// shlwapi.PathBuildRootA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathBuildRootW();
// shlwapi.PathBuildRootW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCanonicalizeA();
// shlwapi.PathCanonicalizeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCanonicalizeW();
// shlwapi.PathCanonicalizeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCombineA();
// shlwapi.PathCombineA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCombineW();
// shlwapi.PathCombineW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCommonPrefixA();
// shlwapi.PathCommonPrefixA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCommonPrefixW();
// shlwapi.PathCommonPrefixW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCompactPathA();
// shlwapi.PathCompactPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCompactPathExA();
// shlwapi.PathCompactPathExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCompactPathExW();
// shlwapi.PathCompactPathExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCompactPathW();
// shlwapi.PathCompactPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCreateFromUrlA();
// shlwapi.PathCreateFromUrlA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCreateFromUrlAlloc();
// shlwapi.PathCreateFromUrlAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCreateFromUrlW();
// shlwapi.PathCreateFromUrlW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFileExistsA();
// shlwapi.PathFileExistsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFileExistsAndAttributesW();
// shlwapi.PathFileExistsAndAttributesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFileExistsW();
// shlwapi.PathFileExistsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindExtensionA();
// shlwapi.PathFindExtensionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindExtensionW();
// shlwapi.PathFindExtensionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindFileNameA();
// shlwapi.PathFindFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindFileNameW();
// shlwapi.PathFindFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindNextComponentA();
// shlwapi.PathFindNextComponentA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindNextComponentW();
// shlwapi.PathFindNextComponentW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindOnPathA();
// shlwapi.PathFindOnPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindOnPathW();
// shlwapi.PathFindOnPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindSuffixArrayA();
// shlwapi.PathFindSuffixArrayA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathFindSuffixArrayW();
// shlwapi.PathFindSuffixArrayW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetArgsA();
// shlwapi.PathGetArgsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetArgsW();
// shlwapi.PathGetArgsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetCharTypeA();
// shlwapi.PathGetCharTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetCharTypeW();
// shlwapi.PathGetCharTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetDriveNumberA();
// shlwapi.PathGetDriveNumberA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetDriveNumberW();
// shlwapi.PathGetDriveNumberW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsContentTypeA();
// shlwapi.PathIsContentTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsContentTypeW();
// shlwapi.PathIsContentTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsDirectoryA();
// shlwapi.PathIsDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsDirectoryEmptyA();
// shlwapi.PathIsDirectoryEmptyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsDirectoryEmptyW();
// shlwapi.PathIsDirectoryEmptyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsDirectoryW();
// shlwapi.PathIsDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsFileSpecA();
// shlwapi.PathIsFileSpecA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsFileSpecW();
// shlwapi.PathIsFileSpecW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsLFNFileSpecA();
// shlwapi.PathIsLFNFileSpecA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsLFNFileSpecW();
// shlwapi.PathIsLFNFileSpecW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsNetworkPathA();
// shlwapi.PathIsNetworkPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsNetworkPathW();
// shlwapi.PathIsNetworkPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsPrefixA();
// shlwapi.PathIsPrefixA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsPrefixW();
// shlwapi.PathIsPrefixW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsRelativeA();
// shlwapi.PathIsRelativeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsRelativeW();
// shlwapi.PathIsRelativeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsRootA();
// shlwapi.PathIsRootA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsRootW();
// shlwapi.PathIsRootW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSameRootA();
// shlwapi.PathIsSameRootA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSameRootW();
// shlwapi.PathIsSameRootW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSystemFolderA();
// shlwapi.PathIsSystemFolderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSystemFolderW();
// shlwapi.PathIsSystemFolderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCA();
// shlwapi.PathIsUNCA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCServerA();
// shlwapi.PathIsUNCServerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCServerShareA();
// shlwapi.PathIsUNCServerShareA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCServerShareW();
// shlwapi.PathIsUNCServerShareW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCServerW();
// shlwapi.PathIsUNCServerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsUNCW();
// shlwapi.PathIsUNCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsURLA();
// shlwapi.PathIsURLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsURLW();
// shlwapi.PathIsURLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMakePrettyA();
// shlwapi.PathMakePrettyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMakePrettyW();
// shlwapi.PathMakePrettyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMakeSystemFolderA();
// shlwapi.PathMakeSystemFolderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMakeSystemFolderW();
// shlwapi.PathMakeSystemFolderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMatchSpecA();
// shlwapi.PathMatchSpecA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMatchSpecExA();
// shlwapi.PathMatchSpecExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMatchSpecExW();
// shlwapi.PathMatchSpecExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMatchSpecW();
// shlwapi.PathMatchSpecW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathParseIconLocationA();
// shlwapi.PathParseIconLocationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathParseIconLocationW();
// shlwapi.PathParseIconLocationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathQuoteSpacesA();
// shlwapi.PathQuoteSpacesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathQuoteSpacesW();
// shlwapi.PathQuoteSpacesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRelativePathToA();
// shlwapi.PathRelativePathToA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRelativePathToW();
// shlwapi.PathRelativePathToW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveArgsA();
// shlwapi.PathRemoveArgsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveArgsW();
// shlwapi.PathRemoveArgsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveBackslashA();
// shlwapi.PathRemoveBackslashA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveBackslashW();
// shlwapi.PathRemoveBackslashW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveBlanksA();
// shlwapi.PathRemoveBlanksA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveBlanksW();
// shlwapi.PathRemoveBlanksW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveExtensionA();
// shlwapi.PathRemoveExtensionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveExtensionW();
// shlwapi.PathRemoveExtensionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveFileSpecA();
// shlwapi.PathRemoveFileSpecA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRemoveFileSpecW();
// shlwapi.PathRemoveFileSpecW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRenameExtensionA();
// shlwapi.PathRenameExtensionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathRenameExtensionW();
// shlwapi.PathRenameExtensionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSearchAndQualifyA();
// shlwapi.PathSearchAndQualifyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSearchAndQualifyW();
// shlwapi.PathSearchAndQualifyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSetDlgItemPathA();
// shlwapi.PathSetDlgItemPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSetDlgItemPathW();
// shlwapi.PathSetDlgItemPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSkipRootA();
// shlwapi.PathSkipRootA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathSkipRootW();
// shlwapi.PathSkipRootW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathStripPathA();
// shlwapi.PathStripPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathStripPathW();
// shlwapi.PathStripPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathStripToRootA();
// shlwapi.PathStripToRootA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathStripToRootW();
// shlwapi.PathStripToRootW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnExpandEnvStringsA();
// shlwapi.PathUnExpandEnvStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnExpandEnvStringsW();
// shlwapi.PathUnExpandEnvStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUndecorateA();
// shlwapi.PathUndecorateA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUndecorateW();
// shlwapi.PathUndecorateW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnmakeSystemFolderA();
// shlwapi.PathUnmakeSystemFolderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnmakeSystemFolderW();
// shlwapi.PathUnmakeSystemFolderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnquoteSpacesA();
// shlwapi.PathUnquoteSpacesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathUnquoteSpacesW();
// shlwapi.PathUnquoteSpacesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QISearch();
// shlwapi.QISearch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAllocShared();
// shlwapi.SHAllocShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAnsiToAnsi();
// shlwapi.SHAnsiToAnsi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAnsiToUnicode();
// shlwapi.SHAnsiToUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAutoComplete();
// shlwapi.SHAutoComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCopyKeyA();
// shlwapi.SHCopyKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCopyKeyW();
// shlwapi.SHCopyKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateMemStream();
// shlwapi.SHCreateMemStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellPalette();
// shlwapi.SHCreateShellPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateStreamOnFileA();
// shlwapi.SHCreateStreamOnFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateStreamOnFileEx();
// shlwapi.SHCreateStreamOnFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateStreamOnFileW();
// shlwapi.SHCreateStreamOnFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateStreamWrapper();
// shlwapi.SHCreateStreamWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateThread();
// shlwapi.SHCreateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateThreadRef();
// shlwapi.SHCreateThreadRef = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateThreadWithHandle();
// shlwapi.SHCreateThreadWithHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateWorkerWindowW();
// shlwapi.SHCreateWorkerWindowW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteEmptyKeyA();
// shlwapi.SHDeleteEmptyKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteEmptyKeyW();
// shlwapi.SHDeleteEmptyKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteKeyA();
// shlwapi.SHDeleteKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteKeyW();
// shlwapi.SHDeleteKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteOrphanKeyA();
// shlwapi.SHDeleteOrphanKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteOrphanKeyW();
// shlwapi.SHDeleteOrphanKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteValueA();
// shlwapi.SHDeleteValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDeleteValueW();
// shlwapi.SHDeleteValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnumKeyExA();
// shlwapi.SHEnumKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnumKeyExW();
// shlwapi.SHEnumKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnumValueA();
// shlwapi.SHEnumValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnumValueW();
// shlwapi.SHEnumValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFormatDateTimeA();
// shlwapi.SHFormatDateTimeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFormatDateTimeW();
// shlwapi.SHFormatDateTimeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFreeShared();
// shlwapi.SHFreeShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetInverseCMAP();
// shlwapi.SHGetInverseCMAP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetThreadRef();
// shlwapi.SHGetThreadRef = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetValueA();
// shlwapi.SHGetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetValueW();
// shlwapi.SHGetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetViewStatePropertyBag();
// shlwapi.SHGetViewStatePropertyBag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHIsChildOrSelf();
// shlwapi.SHIsChildOrSelf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHIsLowMemoryMachine();
// shlwapi.SHIsLowMemoryMachine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHLoadIndirectString();
// shlwapi.SHLoadIndirectString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHLockShared();
// shlwapi.SHLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHMessageBoxCheckA();
// shlwapi.SHMessageBoxCheckA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHMessageBoxCheckW();
// shlwapi.SHMessageBoxCheckW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenRegStream2A();
// shlwapi.SHOpenRegStream2A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenRegStream2W();
// shlwapi.SHOpenRegStream2W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenRegStreamA();
// shlwapi.SHOpenRegStreamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenRegStreamW();
// shlwapi.SHOpenRegStreamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPackDispParamsV();
// shlwapi.SHPackDispParamsV = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPinDllOfCLSID();
// shlwapi.SHPinDllOfCLSID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPropertyBag_ReadStrAlloc();
// shlwapi.SHPropertyBag_ReadStrAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPropertyBag_WriteBSTR();
// shlwapi.SHPropertyBag_WriteBSTR = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryInfoKeyA();
// shlwapi.SHQueryInfoKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryInfoKeyW();
// shlwapi.SHQueryInfoKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryValueExA();
// shlwapi.SHQueryValueExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryValueExW();
// shlwapi.SHQueryValueExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegCloseUSKey();
// shlwapi.SHRegCloseUSKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegCreateUSKeyA();
// shlwapi.SHRegCreateUSKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegCreateUSKeyW();
// shlwapi.SHRegCreateUSKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegDeleteEmptyUSKeyA();
// shlwapi.SHRegDeleteEmptyUSKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegDeleteEmptyUSKeyW();
// shlwapi.SHRegDeleteEmptyUSKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegDeleteUSValueA();
// shlwapi.SHRegDeleteUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegDeleteUSValueW();
// shlwapi.SHRegDeleteUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegDuplicateHKey();
// shlwapi.SHRegDuplicateHKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegEnumUSKeyA();
// shlwapi.SHRegEnumUSKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegEnumUSKeyW();
// shlwapi.SHRegEnumUSKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegEnumUSValueA();
// shlwapi.SHRegEnumUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegEnumUSValueW();
// shlwapi.SHRegEnumUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetBoolUSValueA();
// shlwapi.SHRegGetBoolUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetBoolUSValueW();
// shlwapi.SHRegGetBoolUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetBoolValueFromHKCUHKLM();
// shlwapi.SHRegGetBoolValueFromHKCUHKLM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetIntW();
// shlwapi.SHRegGetIntW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetPathA();
// shlwapi.SHRegGetPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetPathW();
// shlwapi.SHRegGetPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetUSValueA();
// shlwapi.SHRegGetUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetUSValueW();
// shlwapi.SHRegGetUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetValueA();
// shlwapi.SHRegGetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetValueFromHKCUHKLM();
// shlwapi.SHRegGetValueFromHKCUHKLM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegGetValueW();
// shlwapi.SHRegGetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegOpenUSKeyA();
// shlwapi.SHRegOpenUSKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegOpenUSKeyW();
// shlwapi.SHRegOpenUSKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegQueryInfoUSKeyA();
// shlwapi.SHRegQueryInfoUSKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegQueryInfoUSKeyW();
// shlwapi.SHRegQueryInfoUSKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegQueryUSValueA();
// shlwapi.SHRegQueryUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegQueryUSValueW();
// shlwapi.SHRegQueryUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegSetPathA();
// shlwapi.SHRegSetPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegSetPathW();
// shlwapi.SHRegSetPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegSetUSValueA();
// shlwapi.SHRegSetUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegSetUSValueW();
// shlwapi.SHRegSetUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegWriteUSValueA();
// shlwapi.SHRegWriteUSValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegWriteUSValueW();
// shlwapi.SHRegWriteUSValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRegisterValidateTemplate();
// shlwapi.SHRegisterValidateTemplate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHReleaseThreadRef();
// shlwapi.SHReleaseThreadRef = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRunIndirectRegClientCommand();
// shlwapi.SHRunIndirectRegClientCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSendMessageBroadcastA();
// shlwapi.SHSendMessageBroadcastA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSendMessageBroadcastW();
// shlwapi.SHSendMessageBroadcastW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetThreadRef();
// shlwapi.SHSetThreadRef = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetValueA();
// shlwapi.SHSetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetValueW();
// shlwapi.SHSetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSkipJunction();
// shlwapi.SHSkipJunction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHStrDupA();
// shlwapi.SHStrDupA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHStrDupW();
// shlwapi.SHStrDupW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHStripMneumonicA();
// shlwapi.SHStripMneumonicA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHStripMneumonicW();
// shlwapi.SHStripMneumonicW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUnicodeToAnsi();
// shlwapi.SHUnicodeToAnsi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUnicodeToAnsiCP();
// shlwapi.SHUnicodeToAnsiCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUnicodeToUnicode();
// shlwapi.SHUnicodeToUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUnlockShared();
// shlwapi.SHUnlockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellMessageBoxA();
// shlwapi.ShellMessageBoxA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellMessageBoxW();
// shlwapi.ShellMessageBoxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCSpnA();
// shlwapi.StrCSpnA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCSpnIA();
// shlwapi.StrCSpnIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCSpnIW();
// shlwapi.StrCSpnIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCSpnW();
// shlwapi.StrCSpnW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCatBuffA();
// shlwapi.StrCatBuffA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCatBuffW();
// shlwapi.StrCatBuffW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCatChainW();
// shlwapi.StrCatChainW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCatW();
// shlwapi.StrCatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrA();
// shlwapi.StrChrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrIA();
// shlwapi.StrChrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrIW();
// shlwapi.StrChrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrNIW();
// shlwapi.StrChrNIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrNW();
// shlwapi.StrChrNW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrW();
// shlwapi.StrChrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpCA();
// shlwapi.StrCmpCA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpCW();
// shlwapi.StrCmpCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpICA();
// shlwapi.StrCmpICA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpICW();
// shlwapi.StrCmpICW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpIW();
// shlwapi.StrCmpIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpLogicalW();
// shlwapi.StrCmpLogicalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNA();
// shlwapi.StrCmpNA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNCA();
// shlwapi.StrCmpNCA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNCW();
// shlwapi.StrCmpNCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNIA();
// shlwapi.StrCmpNIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNICA();
// shlwapi.StrCmpNICA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNICW();
// shlwapi.StrCmpNICW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNIW();
// shlwapi.StrCmpNIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNW();
// shlwapi.StrCmpNW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpW();
// shlwapi.StrCmpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCpyNW();
// shlwapi.StrCpyNW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCpyW();
// shlwapi.StrCpyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrDupA();
// shlwapi.StrDupA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrDupW();
// shlwapi.StrDupW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatByteSize64A();
// shlwapi.StrFormatByteSize64A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatByteSizeA();
// shlwapi.StrFormatByteSizeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatByteSizeEx();
// shlwapi.StrFormatByteSizeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatByteSizeW();
// shlwapi.StrFormatByteSizeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatKBSizeA();
// shlwapi.StrFormatKBSizeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFormatKBSizeW();
// shlwapi.StrFormatKBSizeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFromTimeIntervalA();
// shlwapi.StrFromTimeIntervalA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrFromTimeIntervalW();
// shlwapi.StrFromTimeIntervalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrIsIntlEqualA();
// shlwapi.StrIsIntlEqualA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrIsIntlEqualW();
// shlwapi.StrIsIntlEqualW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCatA();
// shlwapi.StrNCatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCatW();
// shlwapi.StrNCatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrPBrkA();
// shlwapi.StrPBrkA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrPBrkW();
// shlwapi.StrPBrkW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrA();
// shlwapi.StrRChrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrIA();
// shlwapi.StrRChrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrIW();
// shlwapi.StrRChrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrW();
// shlwapi.StrRChrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrIA();
// shlwapi.StrRStrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrIW();
// shlwapi.StrRStrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRetToBSTR();
// shlwapi.StrRetToBSTR = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRetToBufA();
// shlwapi.StrRetToBufA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRetToBufW();
// shlwapi.StrRetToBufW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRetToStrA();
// shlwapi.StrRetToStrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRetToStrW();
// shlwapi.StrRetToStrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrSpnA();
// shlwapi.StrSpnA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrSpnW();
// shlwapi.StrSpnW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrA();
// shlwapi.StrStrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrIA();
// shlwapi.StrStrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrIW();
// shlwapi.StrStrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrNIW();
// shlwapi.StrStrNIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrNW();
// shlwapi.StrStrNW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrW();
// shlwapi.StrStrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToInt64ExA();
// shlwapi.StrToInt64ExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToInt64ExW();
// shlwapi.StrToInt64ExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToIntA();
// shlwapi.StrToIntA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToIntExA();
// shlwapi.StrToIntExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToIntExW();
// shlwapi.StrToIntExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrToIntW();
// shlwapi.StrToIntW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrTrimA();
// shlwapi.StrTrimA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrTrimW();
// shlwapi.StrTrimW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlApplySchemeA();
// shlwapi.UrlApplySchemeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlApplySchemeW();
// shlwapi.UrlApplySchemeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCanonicalizeA();
// shlwapi.UrlCanonicalizeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCanonicalizeW();
// shlwapi.UrlCanonicalizeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCombineA();
// shlwapi.UrlCombineA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCombineW();
// shlwapi.UrlCombineW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCompareA();
// shlwapi.UrlCompareA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCompareW();
// shlwapi.UrlCompareW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCreateFromPathA();
// shlwapi.UrlCreateFromPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlCreateFromPathW();
// shlwapi.UrlCreateFromPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlEscapeA();
// shlwapi.UrlEscapeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlEscapeW();
// shlwapi.UrlEscapeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlFixupW();
// shlwapi.UrlFixupW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlGetLocationA();
// shlwapi.UrlGetLocationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlGetLocationW();
// shlwapi.UrlGetLocationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlGetPartA();
// shlwapi.UrlGetPartA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlGetPartW();
// shlwapi.UrlGetPartW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlHashA();
// shlwapi.UrlHashA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlHashW();
// shlwapi.UrlHashW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsA();
// shlwapi.UrlIsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsNoHistoryA();
// shlwapi.UrlIsNoHistoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsNoHistoryW();
// shlwapi.UrlIsNoHistoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsOpaqueA();
// shlwapi.UrlIsOpaqueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsOpaqueW();
// shlwapi.UrlIsOpaqueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlIsW();
// shlwapi.UrlIsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlUnescapeA();
// shlwapi.UrlUnescapeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UrlUnescapeW();
// shlwapi.UrlUnescapeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WhichPlatform();
// shlwapi.WhichPlatform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wnsprintfA();
// shlwapi.wnsprintfA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wnsprintfW();
// shlwapi.wnsprintfW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wvnsprintfA();
// shlwapi.wvnsprintfA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wvnsprintfW();
// shlwapi.wvnsprintfW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];


// exports
module.exports = shlwapi;