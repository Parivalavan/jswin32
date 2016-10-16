// javascript ffi interface for shell32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');


// init
var shell32 = ffi.Library( 'shell32.dll' ,{} );

var shell32 = ffi.Library( "shell32.dll" ,
{
	// int __stdcall AppCompat_RunDLLW();
	// "AppCompat_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocCreateForClasses();
	// "AssocCreateForClasses" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssocGetDetailsOfPropKey();
	// "AssocGetDetailsOfPropKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CDefFolderMenu_Create2();
	// "CDefFolderMenu_Create2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CIDLData_CreateFromIDArray();
	// "CIDLData_CreateFromIDArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CStorageItem_GetValidatedStorageItemObject();
	// "CStorageItem_GetValidatedStorageItemObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckEscapesW();
	// "CheckEscapesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CommandLineToArgvW();
	// "CommandLineToArgvW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Control_RunDLL();
	// "Control_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Control_RunDLLA();
	// "Control_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Control_RunDLLAsUserW();
	// "Control_RunDLLAsUserW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Control_RunDLLW();
	// "Control_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromPath_FullTrustCaller();
	// "CreateStorageItemFromPath_FullTrustCaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromPath_FullTrustCaller_ForPackage();
	// "CreateStorageItemFromPath_FullTrustCaller_ForPackage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromPath_PartialTrustCaller();
	// "CreateStorageItemFromPath_PartialTrustCaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller();
	// "CreateStorageItemFromShellItem_FullTrustCaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_ForPackage();
	// "CreateStorageItemFromShellItem_FullTrustCaller_ForPackage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_ForPackage_WithProcessHandle();
	// "CreateStorageItemFromShellItem_FullTrustCaller_ForPackage_WithProcessHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_UseImplicitFlagsAndPackage();
	// "CreateStorageItemFromShellItem_FullTrustCaller_UseImplicitFlagsAndPackage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_AutoScroll();
	// "DAD_AutoScroll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_DragEnterEx();
	// "DAD_DragEnterEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_DragEnterEx2();
	// "DAD_DragEnterEx2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_DragLeave();
	// "DAD_DragLeave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_DragMove();
	// "DAD_DragMove" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_SetDragImage();
	// "DAD_SetDragImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DAD_ShowDragImage();
	// "DAD_ShowDragImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllCanUnloadNow();
	// "DllCanUnloadNow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllGetActivationFactory();
	// "DllGetActivationFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllGetClassObject();
	// "DllGetClassObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllGetVersion();
	// "DllGetVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllInstall();
	// "DllInstall" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllRegisterServer();
	// "DllRegisterServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DllUnregisterServer();
	// "DllUnregisterServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DoEnvironmentSubstA();
	// "DoEnvironmentSubstA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DoEnvironmentSubstW();
	// "DoEnvironmentSubstW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragAcceptFiles();
	// "DragAcceptFiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragFinish();
	// "DragFinish" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragQueryFile();
	// "DragQueryFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragQueryFileA();
	// "DragQueryFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragQueryFileAorW();
	// "DragQueryFileAorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragQueryFileW();
	// "DragQueryFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragQueryPoint();
	// "DragQueryPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DriveType();
	// "DriveType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateIcon();
	// "DuplicateIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractAssociatedIconA();
	// "ExtractAssociatedIconA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractAssociatedIconExA();
	// "ExtractAssociatedIconExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractAssociatedIconExW();
	// "ExtractAssociatedIconExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractAssociatedIconW();
	// "ExtractAssociatedIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractIconA();
	// "ExtractIconA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractIconEx();
	// "ExtractIconEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractIconExA();
	// "ExtractIconExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractIconExW();
	// "ExtractIconExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtractIconW();
	// "ExtractIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindExecutableA();
	// "FindExecutableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindExecutableW();
	// "FindExecutableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeIconList();
	// "FreeIconList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentProcessExplicitAppUserModelID();
	// "GetCurrentProcessExplicitAppUserModelID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileNameFromBrowse();
	// "GetFileNameFromBrowse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemPersistedStorageItemList();
	// "GetSystemPersistedStorageItemList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILAppendID();
	// "ILAppendID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILClone();
	// "ILClone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILCloneFirst();
	// "ILCloneFirst" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILCombine();
	// "ILCombine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILCreateFromPath();
	// "ILCreateFromPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILCreateFromPathA();
	// "ILCreateFromPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILCreateFromPathW();
	// "ILCreateFromPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILFindChild();
	// "ILFindChild" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILFindLastID();
	// "ILFindLastID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILFree();
	// "ILFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILGetNext();
	// "ILGetNext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILGetSize();
	// "ILGetSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILIsEqual();
	// "ILIsEqual" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILIsParent();
	// "ILIsParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILLoadFromStreamEx();
	// "ILLoadFromStreamEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILRemoveLastID();
	// "ILRemoveLastID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ILSaveToStream();
	// "ILSaveToStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitNetworkAddressControl();
	// "InitNetworkAddressControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InternalExtractIconListA();
	// "InternalExtractIconListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InternalExtractIconListW();
	// "InternalExtractIconListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDesktopExplorerProcess();
	// "IsDesktopExplorerProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsLFNDrive();
	// "IsLFNDrive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsLFNDriveA();
	// "IsLFNDriveA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsLFNDriveW();
	// "IsLFNDriveW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsNetDrive();
	// "IsNetDrive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsProcessAnExplorer();
	// "IsProcessAnExplorer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsUserAnAdmin();
	// "IsUserAnAdmin" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LaunchMSHelp_RunDLLW();
	// "LaunchMSHelp_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenAs_RunDLL();
	// "OpenAs_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenAs_RunDLLA();
	// "OpenAs_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenAs_RunDLLW();
	// "OpenAs_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenRegStream();
	// "OpenRegStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Options_RunDLL();
	// "Options_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Options_RunDLLA();
	// "Options_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Options_RunDLLW();
	// "Options_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathCleanupSpec();
	// "PathCleanupSpec" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathGetShortPath();
	// "PathGetShortPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsExe();
	// "PathIsExe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSlowA();
	// "PathIsSlowA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathIsSlowW();
	// "PathIsSlowW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathMakeUniqueName();
	// "PathMakeUniqueName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathQualify();
	// "PathQualify" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathResolve();
	// "PathResolve" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathYetAnotherMakeUniqueName();
	// "PathYetAnotherMakeUniqueName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PickIconDlg();
	// "PickIconDlg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PifMgr_CloseProperties();
	// "PifMgr_CloseProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PifMgr_GetProperties();
	// "PifMgr_GetProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PifMgr_OpenProperties();
	// "PifMgr_OpenProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PifMgr_SetProperties();
	// "PifMgr_SetProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrepareDiscForBurnRunDllW();
	// "PrepareDiscForBurnRunDllW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrintersGetCommand_RunDLL();
	// "PrintersGetCommand_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrintersGetCommand_RunDLLA();
	// "PrintersGetCommand_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrintersGetCommand_RunDLLW();
	// "PrintersGetCommand_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadCabinetState();
	// "ReadCabinetState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealDriveType();
	// "RealDriveType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealShellExecuteA();
	// "RealShellExecuteA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealShellExecuteExA();
	// "RealShellExecuteExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealShellExecuteExW();
	// "RealShellExecuteExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealShellExecuteW();
	// "RealShellExecuteW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegenerateUserEnvironment();
	// "RegenerateUserEnvironment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RestartDialog();
	// "RestartDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RestartDialogEx();
	// "RestartDialogEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RunAsNewUser_RunDLLW();
	// "RunAsNewUser_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAddDefaultPropertiesByExt();
	// "SHAddDefaultPropertiesByExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAddFromPropSheetExtArray();
	// "SHAddFromPropSheetExtArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAddToRecentDocs();
	// "SHAddToRecentDocs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAlloc();
	// "SHAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAppBarMessage();
	// "SHAppBarMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAssocEnumHandlers();
	// "SHAssocEnumHandlers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHAssocEnumHandlersForProtocolByApplication();
	// "SHAssocEnumHandlersForProtocolByApplication" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBindToFolderIDListParent();
	// "SHBindToFolderIDListParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBindToFolderIDListParentEx();
	// "SHBindToFolderIDListParentEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBindToObject();
	// "SHBindToObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBindToParent();
	// "SHBindToParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBrowseForFolder();
	// "SHBrowseForFolder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBrowseForFolderA();
	// "SHBrowseForFolderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHBrowseForFolderW();
	// "SHBrowseForFolderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCLSIDFromString();
	// "SHCLSIDFromString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotification_Lock();
	// "SHChangeNotification_Lock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotification_Unlock();
	// "SHChangeNotification_Unlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotify();
	// "SHChangeNotify" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotifyDeregister();
	// "SHChangeNotifyDeregister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotifyRegister();
	// "SHChangeNotifyRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotifyRegisterThread();
	// "SHChangeNotifyRegisterThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHChangeNotifySuspendResume();
	// "SHChangeNotifySuspendResume" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCloneSpecialIDList();
	// "SHCloneSpecialIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCoCreateInstance();
	// "SHCoCreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCoCreateInstanceWorker();
	// "SHCoCreateInstanceWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateAssociationRegistration();
	// "SHCreateAssociationRegistration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateCategoryEnum();
	// "SHCreateCategoryEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDataObject();
	// "SHCreateDataObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDefaultContextMenu();
	// "SHCreateDefaultContextMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDefaultExtractIcon();
	// "SHCreateDefaultExtractIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDefaultPropertiesOp();
	// "SHCreateDefaultPropertiesOp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDirectory();
	// "SHCreateDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDirectoryExA();
	// "SHCreateDirectoryExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDirectoryExW();
	// "SHCreateDirectoryExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateDrvExtIcon();
	// "SHCreateDrvExtIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateFileExtractIconW();
	// "SHCreateFileExtractIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateItemFromIDList();
	// "SHCreateItemFromIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateItemFromParsingName();
	// "SHCreateItemFromParsingName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateItemFromRelativeName();
	// "SHCreateItemFromRelativeName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateItemInKnownFolder();
	// "SHCreateItemInKnownFolder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateItemWithParent();
	// "SHCreateItemWithParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateLocalServerRunDll();
	// "SHCreateLocalServerRunDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateProcessAsUserW();
	// "SHCreateProcessAsUserW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreatePropSheetExtArray();
	// "SHCreatePropSheetExtArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateQueryCancelAutoPlayMoniker();
	// "SHCreateQueryCancelAutoPlayMoniker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellFolderView();
	// "SHCreateShellFolderView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellFolderViewEx();
	// "SHCreateShellFolderViewEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellItem();
	// "SHCreateShellItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellItemArray();
	// "SHCreateShellItemArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellItemArrayFromDataObject();
	// "SHCreateShellItemArrayFromDataObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellItemArrayFromIDLists();
	// "SHCreateShellItemArrayFromIDLists" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateShellItemArrayFromShellItem();
	// "SHCreateShellItemArrayFromShellItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHCreateStdEnumFmtEtc();
	// "SHCreateStdEnumFmtEtc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDefExtractIconA();
	// "SHDefExtractIconA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDefExtractIconW();
	// "SHDefExtractIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDestroyPropSheetExtArray();
	// "SHDestroyPropSheetExtArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHDoDragDrop();
	// "SHDoDragDrop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_AddToBackIconTable();
	// "SHELL32_AddToBackIconTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_AddToFrontIconTable();
	// "SHELL32_AddToFrontIconTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_AreAllItemsAvailable();
	// "SHELL32_AreAllItemsAvailable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_BindToFilePlaceholderHandler();
	// "SHELL32_BindToFilePlaceholderHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CCommonPlacesFolder_CreateInstance();
	// "SHELL32_CCommonPlacesFolder_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_CloseSession();
	// "SHELL32_CDBurn_CloseSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_DriveSupportedForDataBurn();
	// "SHELL32_CDBurn_DriveSupportedForDataBurn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_Erase();
	// "SHELL32_CDBurn_Erase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_GetCDInfo();
	// "SHELL32_CDBurn_GetCDInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_GetLiveFSDiscInfo();
	// "SHELL32_CDBurn_GetLiveFSDiscInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_GetStagingPathOrNormalPath();
	// "SHELL32_CDBurn_GetStagingPathOrNormalPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_GetTaskInfo();
	// "SHELL32_CDBurn_GetTaskInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_IsBlankDisc();
	// "SHELL32_CDBurn_IsBlankDisc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_IsBlankDisc2();
	// "SHELL32_CDBurn_IsBlankDisc2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_IsLiveFS();
	// "SHELL32_CDBurn_IsLiveFS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_OnDeviceChange();
	// "SHELL32_CDBurn_OnDeviceChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_OnEject();
	// "SHELL32_CDBurn_OnEject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDBurn_OnMediaChange();
	// "SHELL32_CDBurn_OnMediaChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDefFolderMenu_Create2();
	// "SHELL32_CDefFolderMenu_Create2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDefFolderMenu_Create2Ex();
	// "SHELL32_CDefFolderMenu_Create2Ex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDefFolderMenu_MergeMenu();
	// "SHELL32_CDefFolderMenu_MergeMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDrivesContextMenu_Create();
	// "SHELL32_CDrivesContextMenu_Create" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDrivesDropTarget_Create();
	// "SHELL32_CDrivesDropTarget_Create" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CDrives_CreateSFVCB();
	// "SHELL32_CDrives_CreateSFVCB" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CFSDropTarget_CreateInstance();
	// "SHELL32_CFSDropTarget_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CFSFolderCallback_Create();
	// "SHELL32_CFSFolderCallback_Create" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CFillPropertiesTask_CreateInstance();
	// "SHELL32_CFillPropertiesTask_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CLibraryDropTarget_CreateInstance();
	// "SHELL32_CLibraryDropTarget_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CLocationContextMenu_Create();
	// "SHELL32_CLocationContextMenu_Create" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CLocationFolderUI_CreateInstance();
	// "SHELL32_CLocationFolderUI_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_DoAutorun();
	// "SHELL32_CMountPoint_DoAutorun" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_DoAutorunPrompt();
	// "SHELL32_CMountPoint_DoAutorunPrompt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_IsAutoRunDriveAndEnabledByPolicy();
	// "SHELL32_CMountPoint_IsAutoRunDriveAndEnabledByPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_ProcessAutoRunFile();
	// "SHELL32_CMountPoint_ProcessAutoRunFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_WantAutorunUI();
	// "SHELL32_CMountPoint_WantAutorunUI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CMountPoint_WantAutorunUIGetReady();
	// "SHELL32_CMountPoint_WantAutorunUIGetReady" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CPL_CategoryIdArrayFromVariant();
	// "SHELL32_CPL_CategoryIdArrayFromVariant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CPL_IsLegacyCanonicalNameListedUnderKey();
	// "SHELL32_CPL_IsLegacyCanonicalNameListedUnderKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CPL_ModifyWowDisplayName();
	// "SHELL32_CPL_ModifyWowDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CRecentDocsContextMenu_CreateInstance();
	// "SHELL32_CRecentDocsContextMenu_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CSyncRootManager_CreateInstance();
	// "SHELL32_CSyncRootManager_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CTransferConfirmation_CreateInstance();
	// "SHELL32_CTransferConfirmation_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CallFileCopyHooks();
	// "SHELL32_CallFileCopyHooks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CanDisplayWin8CopyDialog();
	// "SHELL32_CanDisplayWin8CopyDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CloseAutoplayPrompt();
	// "SHELL32_CloseAutoplayPrompt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CommandLineFromMsiDescriptor();
	// "SHELL32_CommandLineFromMsiDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CopyExtrinsicPropertyStore();
	// "SHELL32_CopyExtrinsicPropertyStore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CopyFilePlaceholderToNewFile();
	// "SHELL32_CopyFilePlaceholderToNewFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CopySecondaryTiles();
	// "SHELL32_CopySecondaryTiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateAlternateStreamFileName();
	// "SHELL32_CreateAlternateStreamFileName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateConfirmationInterrupt();
	// "SHELL32_CreateConfirmationInterrupt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateConflictInterrupt();
	// "SHELL32_CreateConflictInterrupt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateDefaultOperationDataProvider();
	// "SHELL32_CreateDefaultOperationDataProvider" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateExtrinsicPropertyStore();
	// "SHELL32_CreateExtrinsicPropertyStore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateFileFolderContextMenu();
	// "SHELL32_CreateFileFolderContextMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateLinkInfoW();
	// "SHELL32_CreateLinkInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreatePlaceholderFile();
	// "SHELL32_CreatePlaceholderFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateQosRecorder();
	// "SHELL32_CreateQosRecorder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_CreateSharePointView();
	// "SHELL32_CreateSharePointView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_Create_IEnumUICommand();
	// "SHELL32_Create_IEnumUICommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_DestroyLinkInfo();
	// "SHELL32_DestroyLinkInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_EncryptDirectory();
	// "SHELL32_EncryptDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_EncryptedFileKeyInfo();
	// "SHELL32_EncryptedFileKeyInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_EnumCommonTasks();
	// "SHELL32_EnumCommonTasks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_FilePlaceholder_BindToPrimaryStream();
	// "SHELL32_FilePlaceholder_BindToPrimaryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_FilePlaceholder_CreateInstance();
	// "SHELL32_FilePlaceholder_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_FreeEncryptedFileKeyInfo();
	// "SHELL32_FreeEncryptedFileKeyInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GenerateAppID();
	// "SHELL32_GenerateAppID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetAppIDRoot();
	// "SHELL32_GetAppIDRoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetCommandProviderForFolderType();
	// "SHELL32_GetCommandProviderForFolderType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetDPIAdjustedLogicalSize();
	// "SHELL32_GetDPIAdjustedLogicalSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetDiskCleanupPath();
	// "SHELL32_GetDiskCleanupPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetFileNameFromBrowse();
	// "SHELL32_GetFileNameFromBrowse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetIconOverlayManager();
	// "SHELL32_GetIconOverlayManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetLinkInfoData();
	// "SHELL32_GetLinkInfoData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetPlaceholderStatesFromFileAttributesAndReparsePointTag();
	// "SHELL32_GetPlaceholderStatesFromFileAttributesAndReparsePointTag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetRatingBucket();
	// "SHELL32_GetRatingBucket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetSkyDriveNetworkStates();
	// "SHELL32_GetSkyDriveNetworkStates" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetSqmableFileName();
	// "SHELL32_GetSqmableFileName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetThumbnailAdornerFromFactory();
	// "SHELL32_GetThumbnailAdornerFromFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_GetThumbnailAdornerFromFactory2();
	// "SHELL32_GetThumbnailAdornerFromFactory2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_HandleUnrecognizedFileSystem();
	// "SHELL32_HandleUnrecognizedFileSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCacheCreate();
	// "SHELL32_IconCacheCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCacheDestroy();
	// "SHELL32_IconCacheDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCacheHandleAssociationChanged();
	// "SHELL32_IconCacheHandleAssociationChanged" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCacheRestore();
	// "SHELL32_IconCacheRestore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCache_AboutToExtractIcons();
	// "SHELL32_IconCache_AboutToExtractIcons" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCache_DoneExtractingIcons();
	// "SHELL32_IconCache_DoneExtractingIcons" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCache_ExpandEnvAndSearchPath();
	// "SHELL32_IconCache_ExpandEnvAndSearchPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconCache_RememberRecentlyExtractedIconsW();
	// "SHELL32_IconCache_RememberRecentlyExtractedIconsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IconOverlayManagerInit();
	// "SHELL32_IconOverlayManagerInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IsGetKeyboardLayoutPresent();
	// "SHELL32_IsGetKeyboardLayoutPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IsSystemUpgradeInProgress();
	// "SHELL32_IsSystemUpgradeInProgress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_IsValidLinkInfo();
	// "SHELL32_IsValidLinkInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_LegacyEnumSpecialTasksByType();
	// "SHELL32_LegacyEnumSpecialTasksByType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_LegacyEnumTasks();
	// "SHELL32_LegacyEnumTasks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_LookupBackIconIndex();
	// "SHELL32_LookupBackIconIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_LookupFrontIconIndex();
	// "SHELL32_LookupFrontIconIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_NormalizeRating();
	// "SHELL32_NormalizeRating" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_NotifyLinkTrackingServiceOfMove();
	// "SHELL32_NotifyLinkTrackingServiceOfMove" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_PifMgr_CloseProperties();
	// "SHELL32_PifMgr_CloseProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_PifMgr_GetProperties();
	// "SHELL32_PifMgr_GetProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_PifMgr_OpenProperties();
	// "SHELL32_PifMgr_OpenProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_PifMgr_SetProperties();
	// "SHELL32_PifMgr_SetProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_Printers_CreateBindInfo();
	// "SHELL32_Printers_CreateBindInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_Printjob_GetPidl();
	// "SHELL32_Printjob_GetPidl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_PurgeSystemIcon();
	// "SHELL32_PurgeSystemIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_RefreshOverlayImages();
	// "SHELL32_RefreshOverlayImages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_ResolveLinkInfoW();
	// "SHELL32_ResolveLinkInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHAddSparseIcon();
	// "SHELL32_SHAddSparseIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHCreateByValueOperationInterrupt();
	// "SHELL32_SHCreateByValueOperationInterrupt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHCreateDefaultContextMenu();
	// "SHELL32_SHCreateDefaultContextMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHCreateLocalServer();
	// "SHELL32_SHCreateLocalServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHCreateShellFolderView();
	// "SHELL32_SHCreateShellFolderView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHDuplicateEncryptionInfoFile();
	// "SHELL32_SHDuplicateEncryptionInfoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHEncryptFile();
	// "SHELL32_SHEncryptFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHFormatDriveAsync();
	// "SHELL32_SHFormatDriveAsync" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHGetThreadUndoManager();
	// "SHELL32_SHGetThreadUndoManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHGetUserNameW();
	// "SHELL32_SHGetUserNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHIsVirtualDevice();
	// "SHELL32_SHIsVirtualDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHLaunchPropSheet();
	// "SHELL32_SHLaunchPropSheet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHLogILFromFSIL();
	// "SHELL32_SHLogILFromFSIL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHOpenWithDialog();
	// "SHELL32_SHOpenWithDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHStartNetConnectionDialogW();
	// "SHELL32_SHStartNetConnectionDialogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SHUICommandFromGUID();
	// "SHELL32_SHUICommandFromGUID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SendToMenu_InvokeTargetedCommand();
	// "SHELL32_SendToMenu_InvokeTargetedCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SendToMenu_VerifyTargetedCommand();
	// "SHELL32_SendToMenu_VerifyTargetedCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SetPlaceholderReparsePointAttribute();
	// "SHELL32_SetPlaceholderReparsePointAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SetPlaceholderReparsePointAttribute2();
	// "SHELL32_SetPlaceholderReparsePointAttribute2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_ShowHideIconOnlyOnDesktop();
	// "SHELL32_ShowHideIconOnlyOnDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SimpleRatingToFilterCondition();
	// "SHELL32_SimpleRatingToFilterCondition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_StampIconForFile();
	// "SHELL32_StampIconForFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_SuspendUndo();
	// "SHELL32_SuspendUndo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_TryVirtualDiscImageDriveEject();
	// "SHELL32_TryVirtualDiscImageDriveEject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_UpdateFilePlaceholderStates();
	// "SHELL32_UpdateFilePlaceholderStates" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHELL32_VerifySaferTrust();
	// "SHELL32_VerifySaferTrust" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEmptyRecycleBinA();
	// "SHEmptyRecycleBinA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEmptyRecycleBinW();
	// "SHEmptyRecycleBinW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnableServiceObject();
	// "SHEnableServiceObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEnumerateUnreadMailAccountsW();
	// "SHEnumerateUnreadMailAccountsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHEvaluateSystemCommandTemplate();
	// "SHEvaluateSystemCommandTemplate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHExtractIconsW();
	// "SHExtractIconsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFileOperation();
	// "SHFileOperation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFileOperationA();
	// "SHFileOperationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFileOperationW();
	// "SHFileOperationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFindFiles();
	// "SHFindFiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFind_InitMenuPopup();
	// "SHFind_InitMenuPopup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFlushSFCache();
	// "SHFlushSFCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFormatDrive();
	// "SHFormatDrive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFree();
	// "SHFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHFreeNameMappings();
	// "SHFreeNameMappings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetAttributesFromDataObject();
	// "SHGetAttributesFromDataObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDataFromIDListA();
	// "SHGetDataFromIDListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDataFromIDListW();
	// "SHGetDataFromIDListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDesktopFolder();
	// "SHGetDesktopFolder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDiskFreeSpaceA();
	// "SHGetDiskFreeSpaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDiskFreeSpaceExA();
	// "SHGetDiskFreeSpaceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDiskFreeSpaceExW();
	// "SHGetDiskFreeSpaceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetDriveMedia();
	// "SHGetDriveMedia" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFileInfo();
	// "SHGetFileInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFileInfoA();
	// "SHGetFileInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFileInfoW();
	// "SHGetFileInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderLocation();
	// "SHGetFolderLocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderPathA();
	// "SHGetFolderPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderPathAndSubDirA();
	// "SHGetFolderPathAndSubDirA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderPathAndSubDirW();
	// "SHGetFolderPathAndSubDirW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderPathEx();
	// "SHGetFolderPathEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetFolderPathW();
	// "SHGetFolderPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetIDListFromObject();
	// "SHGetIDListFromObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetIconOverlayIndexA();
	// "SHGetIconOverlayIndexA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetIconOverlayIndexW();
	// "SHGetIconOverlayIndexW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetImageList();
	// "SHGetImageList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetInstanceExplorer();
	// "SHGetInstanceExplorer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetItemFromDataObject();
	// "SHGetItemFromDataObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetItemFromObject();
	// "SHGetItemFromObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetKnownFolderIDList();
	// "SHGetKnownFolderIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetKnownFolderItem();
	// "SHGetKnownFolderItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetKnownFolderPath();
	// "SHGetKnownFolderPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetLocalizedName();
	// "SHGetLocalizedName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetMalloc();
	// "SHGetMalloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetNameFromIDList();
	// "SHGetNameFromIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetNewLinkInfo();
	// "SHGetNewLinkInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetNewLinkInfoA();
	// "SHGetNewLinkInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetNewLinkInfoW();
	// "SHGetNewLinkInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPathFromIDList();
	// "SHGetPathFromIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPathFromIDListA();
	// "SHGetPathFromIDListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPathFromIDListEx();
	// "SHGetPathFromIDListEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPathFromIDListW();
	// "SHGetPathFromIDListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPropertyStoreForWindow();
	// "SHGetPropertyStoreForWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPropertyStoreFromIDList();
	// "SHGetPropertyStoreFromIDList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetPropertyStoreFromParsingName();
	// "SHGetPropertyStoreFromParsingName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetRealIDL();
	// "SHGetRealIDL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSetFolderCustomSettings();
	// "SHGetSetFolderCustomSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSetSettings();
	// "SHGetSetSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSettings();
	// "SHGetSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSpecialFolderLocation();
	// "SHGetSpecialFolderLocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSpecialFolderPathA();
	// "SHGetSpecialFolderPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetSpecialFolderPathW();
	// "SHGetSpecialFolderPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetStockIconInfo();
	// "SHGetStockIconInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetTemporaryPropertyForItem();
	// "SHGetTemporaryPropertyForItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHGetUnreadMailCountW();
	// "SHGetUnreadMailCountW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHHandleUpdateImage();
	// "SHHandleUpdateImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHHelpShortcuts_RunDLL();
	// "SHHelpShortcuts_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHHelpShortcuts_RunDLLA();
	// "SHHelpShortcuts_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHHelpShortcuts_RunDLLW();
	// "SHHelpShortcuts_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHILCreateFromPath();
	// "SHILCreateFromPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHInvokePrinterCommandA();
	// "SHInvokePrinterCommandA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHInvokePrinterCommandW();
	// "SHInvokePrinterCommandW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHIsFileAvailableOffline();
	// "SHIsFileAvailableOffline" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHLimitInputEdit();
	// "SHLimitInputEdit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHLoadInProc();
	// "SHLoadInProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHLoadNonloadedIconOverlayIdentifiers();
	// "SHLoadNonloadedIconOverlayIdentifiers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHMapPIDLToSystemImageListIndex();
	// "SHMapPIDLToSystemImageListIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHMultiFileProperties();
	// "SHMultiFileProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHObjectProperties();
	// "SHObjectProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenFolderAndSelectItems();
	// "SHOpenFolderAndSelectItems" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenPropSheetW();
	// "SHOpenPropSheetW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHOpenWithDialog();
	// "SHOpenWithDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHParseDisplayName();
	// "SHParseDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPathPrepareForWriteA();
	// "SHPathPrepareForWriteA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPathPrepareForWriteW();
	// "SHPathPrepareForWriteW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPropStgCreate();
	// "SHPropStgCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPropStgReadMultiple();
	// "SHPropStgReadMultiple" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHPropStgWriteMultiple();
	// "SHPropStgWriteMultiple" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryRecycleBinA();
	// "SHQueryRecycleBinA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryRecycleBinW();
	// "SHQueryRecycleBinW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHQueryUserNotificationState();
	// "SHQueryUserNotificationState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRemoveLocalizedName();
	// "SHRemoveLocalizedName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHReplaceFromPropSheetExtArray();
	// "SHReplaceFromPropSheetExtArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHResolveLibrary();
	// "SHResolveLibrary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHRestricted();
	// "SHRestricted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetDefaultProperties();
	// "SHSetDefaultProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetFolderPathA();
	// "SHSetFolderPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetFolderPathW();
	// "SHSetFolderPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetInstanceExplorer();
	// "SHSetInstanceExplorer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetKnownFolderPath();
	// "SHSetKnownFolderPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetLocalizedName();
	// "SHSetLocalizedName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetTemporaryPropertyForItem();
	// "SHSetTemporaryPropertyForItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSetUnreadMailCountW();
	// "SHSetUnreadMailCountW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHShellFolderView_Message();
	// "SHShellFolderView_Message" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHShowManageLibraryUI();
	// "SHShowManageLibraryUI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHSimpleIDListFromPath();
	// "SHSimpleIDListFromPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHStartNetConnectionDialogW();
	// "SHStartNetConnectionDialogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHTestTokenMembership();
	// "SHTestTokenMembership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUpdateImageA();
	// "SHUpdateImageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUpdateImageW();
	// "SHUpdateImageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHUpdateRecycleBinIcon();
	// "SHUpdateRecycleBinIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SHValidateUNC();
	// "SHValidateUNC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCurrentProcessExplicitAppUserModelID();
	// "SetCurrentProcessExplicitAppUserModelID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SheChangeDirA();
	// "SheChangeDirA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SheChangeDirExW();
	// "SheChangeDirExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SheGetDirA();
	// "SheGetDirA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SheSetCurDrive();
	// "SheSetCurDrive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellAboutA();
	// "ShellAboutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellAboutW();
	// "ShellAboutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExec_RunDLL();
	// "ShellExec_RunDLL" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExec_RunDLLA();
	// "ShellExec_RunDLLA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExec_RunDLLW();
	// "ShellExec_RunDLLW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExecuteA();
	// "ShellExecuteA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExecuteEx();
	// "ShellExecuteEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExecuteExA();
	// "ShellExecuteExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExecuteExW();
	// "ShellExecuteExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellExecuteW();
	// "ShellExecuteW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellHookProc();
	// "ShellHookProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellMessageBoxA();
	// "ShellMessageBoxA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShellMessageBoxW();
	// "ShellMessageBoxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_GetCachedImageIndex();
	// "Shell_GetCachedImageIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_GetCachedImageIndexA();
	// "Shell_GetCachedImageIndexA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_GetCachedImageIndexW();
	// "Shell_GetCachedImageIndexW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_GetImageLists();
	// "Shell_GetImageLists" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_MergeMenus();
	// "Shell_MergeMenus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_NotifyIcon();
	// "Shell_NotifyIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_NotifyIconA();
	// "Shell_NotifyIconA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_NotifyIconGetRect();
	// "Shell_NotifyIconGetRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Shell_NotifyIconW();
	// "Shell_NotifyIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SignalFileOpen();
	// "SignalFileOpen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StgMakeUniqueName();
	// "StgMakeUniqueName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrA();
	// "StrChrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrIA();
	// "StrChrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrIW();
	// "StrChrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrChrW();
	// "StrChrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNA();
	// "StrCmpNA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNIA();
	// "StrCmpNIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNIW();
	// "StrCmpNIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrCmpNW();
	// "StrCmpNW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCmpA();
	// "StrNCmpA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCmpIA();
	// "StrNCmpIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCmpIW();
	// "StrNCmpIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrNCmpW();
	// "StrNCmpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrA();
	// "StrRChrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrIA();
	// "StrRChrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrIW();
	// "StrRChrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRChrW();
	// "StrRChrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrA();
	// "StrRStrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrIA();
	// "StrRStrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrIW();
	// "StrRStrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrRStrW();
	// "StrRStrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrA();
	// "StrStrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrIA();
	// "StrStrIA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrIW();
	// "StrStrIW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrStrW();
	// "StrStrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UsersLibrariesFolderUI_CreateInstance();
	// "UsersLibrariesFolderUI_CreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WOWShellExecute();
	// "WOWShellExecute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForExplorerRestartW();
	// "WaitForExplorerRestartW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Win32DeleteFile();
	// "Win32DeleteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteCabinetState();
	// "WriteCabinetState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = shell32;


// exports
module.exports = shell32;