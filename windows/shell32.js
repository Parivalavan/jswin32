// javascript ffi interface for shell32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

var shell32 = ffi.Library( "shell32.dll" ,
{
	// "AppCompat_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocCreateForClasses" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AssocGetDetailsOfPropKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CDefFolderMenu_Create2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CIDLData_CreateFromIDArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CStorageItem_GetValidatedStorageItemObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckEscapesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CommandLineToArgvW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Control_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Control_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Control_RunDLLAsUserW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Control_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromPath_FullTrustCaller" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromPath_FullTrustCaller_ForPackage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromPath_PartialTrustCaller" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromShellItem_FullTrustCaller" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromShellItem_FullTrustCaller_ForPackage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromShellItem_FullTrustCaller_ForPackage_WithProcessHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateStorageItemFromShellItem_FullTrustCaller_UseImplicitFlagsAndPackage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_AutoScroll" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_DragEnterEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_DragEnterEx2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_DragLeave" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_DragMove" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_SetDragImage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DAD_ShowDragImage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllCanUnloadNow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllGetActivationFactory" : 
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

	// "DllInstall" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllRegisterServer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DllUnregisterServer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DoEnvironmentSubstA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DoEnvironmentSubstW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragAcceptFiles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragFinish" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragQueryFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragQueryFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragQueryFileAorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragQueryFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragQueryPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DriveType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DuplicateIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractAssociatedIconA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractAssociatedIconExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractAssociatedIconExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractAssociatedIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractIconA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractIconEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractIconExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractIconExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtractIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindExecutableA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindExecutableW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeIconList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentProcessExplicitAppUserModelID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFileNameFromBrowse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemPersistedStorageItemList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILAppendID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILClone" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILCloneFirst" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILCombine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILCreateFromPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILCreateFromPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILCreateFromPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILFindChild" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILFindLastID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILFree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILGetNext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILGetSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILIsEqual" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILIsParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILLoadFromStreamEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILRemoveLastID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ILSaveToStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitNetworkAddressControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InternalExtractIconListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InternalExtractIconListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsDesktopExplorerProcess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsLFNDrive" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsLFNDriveA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsLFNDriveW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsNetDrive" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsProcessAnExplorer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsUserAnAdmin" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LaunchMSHelp_RunDLLW" : 
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

	// "OpenAs_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenAs_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenAs_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenRegStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Options_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Options_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Options_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathCleanupSpec" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathGetShortPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsExe" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSlowA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathIsSlowW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathMakeUniqueName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathQualify" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathResolve" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathYetAnotherMakeUniqueName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PickIconDlg" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PifMgr_CloseProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PifMgr_GetProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PifMgr_OpenProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PifMgr_SetProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrepareDiscForBurnRunDllW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrintersGetCommand_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrintersGetCommand_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrintersGetCommand_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReadCabinetState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealDriveType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealShellExecuteA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealShellExecuteExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealShellExecuteExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealShellExecuteW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegenerateUserEnvironment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RestartDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RestartDialogEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RunAsNewUser_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAddDefaultPropertiesByExt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAddFromPropSheetExtArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAddToRecentDocs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAlloc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAppBarMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAssocEnumHandlers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHAssocEnumHandlersForProtocolByApplication" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBindToFolderIDListParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBindToFolderIDListParentEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBindToObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBindToParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBrowseForFolder" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBrowseForFolderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHBrowseForFolderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCLSIDFromString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotification_Lock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotification_Unlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotify" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotifyDeregister" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotifyRegister" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotifyRegisterThread" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHChangeNotifySuspendResume" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCloneSpecialIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCoCreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCoCreateInstanceWorker" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateAssociationRegistration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateCategoryEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDataObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDefaultContextMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDefaultExtractIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDefaultPropertiesOp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDirectory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDirectoryExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDirectoryExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateDrvExtIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateFileExtractIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateItemFromIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateItemFromParsingName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateItemFromRelativeName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateItemInKnownFolder" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateItemWithParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateLocalServerRunDll" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateProcessAsUserW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreatePropSheetExtArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateQueryCancelAutoPlayMoniker" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellFolderView" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellFolderViewEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellItemArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellItemArrayFromDataObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellItemArrayFromIDLists" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateShellItemArrayFromShellItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHCreateStdEnumFmtEtc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDefExtractIconA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDefExtractIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDestroyPropSheetExtArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHDoDragDrop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_AddToBackIconTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_AddToFrontIconTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_AreAllItemsAvailable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_BindToFilePlaceholderHandler" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CCommonPlacesFolder_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_CloseSession" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_DriveSupportedForDataBurn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_Erase" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_GetCDInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_GetLiveFSDiscInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_GetStagingPathOrNormalPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_GetTaskInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_IsBlankDisc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_IsBlankDisc2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_IsLiveFS" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_OnDeviceChange" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_OnEject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDBurn_OnMediaChange" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDefFolderMenu_Create2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDefFolderMenu_Create2Ex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDefFolderMenu_MergeMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDrivesContextMenu_Create" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDrivesDropTarget_Create" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CDrives_CreateSFVCB" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CFSDropTarget_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CFSFolderCallback_Create" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CFillPropertiesTask_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CLibraryDropTarget_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CLocationContextMenu_Create" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CLocationFolderUI_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_DoAutorun" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_DoAutorunPrompt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_IsAutoRunDriveAndEnabledByPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_ProcessAutoRunFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_WantAutorunUI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CMountPoint_WantAutorunUIGetReady" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CPL_CategoryIdArrayFromVariant" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CPL_IsLegacyCanonicalNameListedUnderKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CPL_ModifyWowDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CRecentDocsContextMenu_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CSyncRootManager_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CTransferConfirmation_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CallFileCopyHooks" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CanDisplayWin8CopyDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CloseAutoplayPrompt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CommandLineFromMsiDescriptor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CopyExtrinsicPropertyStore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CopyFilePlaceholderToNewFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CopySecondaryTiles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateAlternateStreamFileName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateConfirmationInterrupt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateConflictInterrupt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateDefaultOperationDataProvider" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateExtrinsicPropertyStore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateFileFolderContextMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateLinkInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreatePlaceholderFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateQosRecorder" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_CreateSharePointView" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_Create_IEnumUICommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_DestroyLinkInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_EncryptDirectory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_EncryptedFileKeyInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_EnumCommonTasks" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_FilePlaceholder_BindToPrimaryStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_FilePlaceholder_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_FreeEncryptedFileKeyInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GenerateAppID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetAppIDRoot" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetCommandProviderForFolderType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetDPIAdjustedLogicalSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetDiskCleanupPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetFileNameFromBrowse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetIconOverlayManager" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetLinkInfoData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetPlaceholderStatesFromFileAttributesAndReparsePointTag" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetRatingBucket" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetSkyDriveNetworkStates" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetSqmableFileName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetThumbnailAdornerFromFactory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_GetThumbnailAdornerFromFactory2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_HandleUnrecognizedFileSystem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCacheCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCacheDestroy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCacheHandleAssociationChanged" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCacheRestore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCache_AboutToExtractIcons" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCache_DoneExtractingIcons" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCache_ExpandEnvAndSearchPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconCache_RememberRecentlyExtractedIconsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IconOverlayManagerInit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IsGetKeyboardLayoutPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IsSystemUpgradeInProgress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_IsValidLinkInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_LegacyEnumSpecialTasksByType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_LegacyEnumTasks" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_LookupBackIconIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_LookupFrontIconIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_NormalizeRating" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_NotifyLinkTrackingServiceOfMove" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_PifMgr_CloseProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_PifMgr_GetProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_PifMgr_OpenProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_PifMgr_SetProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_Printers_CreateBindInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_Printjob_GetPidl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_PurgeSystemIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_RefreshOverlayImages" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_ResolveLinkInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHAddSparseIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHCreateByValueOperationInterrupt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHCreateDefaultContextMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHCreateLocalServer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHCreateShellFolderView" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHDuplicateEncryptionInfoFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHEncryptFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHFormatDriveAsync" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHGetThreadUndoManager" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHGetUserNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHIsVirtualDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHLaunchPropSheet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHLogILFromFSIL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHOpenWithDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHStartNetConnectionDialogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SHUICommandFromGUID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SendToMenu_InvokeTargetedCommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SendToMenu_VerifyTargetedCommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SetPlaceholderReparsePointAttribute" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SetPlaceholderReparsePointAttribute2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_ShowHideIconOnlyOnDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SimpleRatingToFilterCondition" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_StampIconForFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_SuspendUndo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_TryVirtualDiscImageDriveEject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_UpdateFilePlaceholderStates" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHELL32_VerifySaferTrust" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEmptyRecycleBinA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEmptyRecycleBinW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnableServiceObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEnumerateUnreadMailAccountsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHEvaluateSystemCommandTemplate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHExtractIconsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFileOperation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFileOperationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFileOperationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFindFiles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFind_InitMenuPopup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFlushSFCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFormatDrive" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHFreeNameMappings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetAttributesFromDataObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDataFromIDListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDataFromIDListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDesktopFolder" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDiskFreeSpaceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDiskFreeSpaceExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDiskFreeSpaceExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetDriveMedia" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFileInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFileInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFileInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderLocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderPathAndSubDirA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderPathAndSubDirW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderPathEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetFolderPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetIDListFromObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetIconOverlayIndexA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetIconOverlayIndexW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetImageList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetInstanceExplorer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetItemFromDataObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetItemFromObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetKnownFolderIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetKnownFolderItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetKnownFolderPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetLocalizedName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetMalloc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetNameFromIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetNewLinkInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetNewLinkInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetNewLinkInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPathFromIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPathFromIDListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPathFromIDListEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPathFromIDListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPropertyStoreForWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPropertyStoreFromIDList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetPropertyStoreFromParsingName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetRealIDL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSetFolderCustomSettings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSetSettings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSettings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSpecialFolderLocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSpecialFolderPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetSpecialFolderPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetStockIconInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetTemporaryPropertyForItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHGetUnreadMailCountW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHHandleUpdateImage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHHelpShortcuts_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHHelpShortcuts_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHHelpShortcuts_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHILCreateFromPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHInvokePrinterCommandA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHInvokePrinterCommandW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHIsFileAvailableOffline" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHLimitInputEdit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHLoadInProc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHLoadNonloadedIconOverlayIdentifiers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHMapPIDLToSystemImageListIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHMultiFileProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHObjectProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenFolderAndSelectItems" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenPropSheetW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHOpenWithDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHParseDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPathPrepareForWriteA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPathPrepareForWriteW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPropStgCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPropStgReadMultiple" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHPropStgWriteMultiple" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryRecycleBinA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryRecycleBinW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHQueryUserNotificationState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRemoveLocalizedName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHReplaceFromPropSheetExtArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHResolveLibrary" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHRestricted" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetDefaultProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetFolderPathA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetFolderPathW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetInstanceExplorer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetKnownFolderPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetLocalizedName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetTemporaryPropertyForItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSetUnreadMailCountW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHShellFolderView_Message" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHShowManageLibraryUI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHSimpleIDListFromPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHStartNetConnectionDialogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHTestTokenMembership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUpdateImageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUpdateImageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHUpdateRecycleBinIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SHValidateUNC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCurrentProcessExplicitAppUserModelID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SheChangeDirA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SheChangeDirExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SheGetDirA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SheSetCurDrive" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellAboutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellAboutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExec_RunDLL" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExec_RunDLLA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExec_RunDLLW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExecuteA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExecuteEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExecuteExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExecuteExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellExecuteW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShellHookProc" : 
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

	// "Shell_GetCachedImageIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_GetCachedImageIndexA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_GetCachedImageIndexW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_GetImageLists" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_MergeMenus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_NotifyIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_NotifyIconA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_NotifyIconGetRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Shell_NotifyIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SignalFileOpen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StgMakeUniqueName" : 
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

	// "StrChrW" : 
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

	// "StrCmpNIA" : 
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

	// "StrNCmpA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrNCmpIA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrNCmpIW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrNCmpW" : 
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

	// "StrRStrA" : 
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

	// "StrRStrW" : 
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

	// "StrStrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UsersLibrariesFolderUI_CreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WOWShellExecute" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WaitForExplorerRestartW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Win32DeleteFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WriteCabinetState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

});
module.exports = shell32;
