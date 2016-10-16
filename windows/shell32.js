// javascript ffi interface for shell32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var shell32 = ffi.Library( 'shell32.dll' ,{} );

// 
// int __stdcall AppCompat_RunDLLW();
// shell32.AppCompat_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocCreateForClasses();
// shell32.AssocCreateForClasses = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssocGetDetailsOfPropKey();
// shell32.AssocGetDetailsOfPropKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CDefFolderMenu_Create2();
// shell32.CDefFolderMenu_Create2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CIDLData_CreateFromIDArray();
// shell32.CIDLData_CreateFromIDArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CStorageItem_GetValidatedStorageItemObject();
// shell32.CStorageItem_GetValidatedStorageItemObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckEscapesW();
// shell32.CheckEscapesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CommandLineToArgvW();
// shell32.CommandLineToArgvW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Control_RunDLL();
// shell32.Control_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Control_RunDLLA();
// shell32.Control_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Control_RunDLLAsUserW();
// shell32.Control_RunDLLAsUserW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Control_RunDLLW();
// shell32.Control_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromPath_FullTrustCaller();
// shell32.CreateStorageItemFromPath_FullTrustCaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromPath_FullTrustCaller_ForPackage();
// shell32.CreateStorageItemFromPath_FullTrustCaller_ForPackage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromPath_PartialTrustCaller();
// shell32.CreateStorageItemFromPath_PartialTrustCaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller();
// shell32.CreateStorageItemFromShellItem_FullTrustCaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_ForPackage();
// shell32.CreateStorageItemFromShellItem_FullTrustCaller_ForPackage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_ForPackage_WithProcessHandle();
// shell32.CreateStorageItemFromShellItem_FullTrustCaller_ForPackage_WithProcessHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateStorageItemFromShellItem_FullTrustCaller_UseImplicitFlagsAndPackage();
// shell32.CreateStorageItemFromShellItem_FullTrustCaller_UseImplicitFlagsAndPackage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_AutoScroll();
// shell32.DAD_AutoScroll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_DragEnterEx();
// shell32.DAD_DragEnterEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_DragEnterEx2();
// shell32.DAD_DragEnterEx2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_DragLeave();
// shell32.DAD_DragLeave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_DragMove();
// shell32.DAD_DragMove = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_SetDragImage();
// shell32.DAD_SetDragImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DAD_ShowDragImage();
// shell32.DAD_ShowDragImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllCanUnloadNow();
// shell32.DllCanUnloadNow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllGetActivationFactory();
// shell32.DllGetActivationFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllGetClassObject();
// shell32.DllGetClassObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllGetVersion();
// shell32.DllGetVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllInstall();
// shell32.DllInstall = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllRegisterServer();
// shell32.DllRegisterServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DllUnregisterServer();
// shell32.DllUnregisterServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DoEnvironmentSubstA();
// shell32.DoEnvironmentSubstA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DoEnvironmentSubstW();
// shell32.DoEnvironmentSubstW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragAcceptFiles();
// shell32.DragAcceptFiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragFinish();
// shell32.DragFinish = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragQueryFile();
// shell32.DragQueryFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragQueryFileA();
// shell32.DragQueryFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragQueryFileAorW();
// shell32.DragQueryFileAorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragQueryFileW();
// shell32.DragQueryFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragQueryPoint();
// shell32.DragQueryPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DriveType();
// shell32.DriveType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateIcon();
// shell32.DuplicateIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractAssociatedIconA();
// shell32.ExtractAssociatedIconA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractAssociatedIconExA();
// shell32.ExtractAssociatedIconExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractAssociatedIconExW();
// shell32.ExtractAssociatedIconExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractAssociatedIconW();
// shell32.ExtractAssociatedIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractIconA();
// shell32.ExtractIconA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractIconEx();
// shell32.ExtractIconEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractIconExA();
// shell32.ExtractIconExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractIconExW();
// shell32.ExtractIconExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtractIconW();
// shell32.ExtractIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindExecutableA();
// shell32.FindExecutableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindExecutableW();
// shell32.FindExecutableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeIconList();
// shell32.FreeIconList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentProcessExplicitAppUserModelID();
// shell32.GetCurrentProcessExplicitAppUserModelID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileNameFromBrowse();
// shell32.GetFileNameFromBrowse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemPersistedStorageItemList();
// shell32.GetSystemPersistedStorageItemList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILAppendID();
// shell32.ILAppendID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILClone();
// shell32.ILClone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILCloneFirst();
// shell32.ILCloneFirst = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILCombine();
// shell32.ILCombine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILCreateFromPath();
// shell32.ILCreateFromPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILCreateFromPathA();
// shell32.ILCreateFromPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILCreateFromPathW();
// shell32.ILCreateFromPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILFindChild();
// shell32.ILFindChild = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILFindLastID();
// shell32.ILFindLastID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILFree();
// shell32.ILFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILGetNext();
// shell32.ILGetNext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILGetSize();
// shell32.ILGetSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILIsEqual();
// shell32.ILIsEqual = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILIsParent();
// shell32.ILIsParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILLoadFromStreamEx();
// shell32.ILLoadFromStreamEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILRemoveLastID();
// shell32.ILRemoveLastID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ILSaveToStream();
// shell32.ILSaveToStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitNetworkAddressControl();
// shell32.InitNetworkAddressControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InternalExtractIconListA();
// shell32.InternalExtractIconListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InternalExtractIconListW();
// shell32.InternalExtractIconListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDesktopExplorerProcess();
// shell32.IsDesktopExplorerProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsLFNDrive();
// shell32.IsLFNDrive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsLFNDriveA();
// shell32.IsLFNDriveA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsLFNDriveW();
// shell32.IsLFNDriveW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsNetDrive();
// shell32.IsNetDrive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsProcessAnExplorer();
// shell32.IsProcessAnExplorer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsUserAnAdmin();
// shell32.IsUserAnAdmin = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LaunchMSHelp_RunDLLW();
// shell32.LaunchMSHelp_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// shell32.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenAs_RunDLL();
// shell32.OpenAs_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenAs_RunDLLA();
// shell32.OpenAs_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenAs_RunDLLW();
// shell32.OpenAs_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenRegStream();
// shell32.OpenRegStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Options_RunDLL();
// shell32.Options_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Options_RunDLLA();
// shell32.Options_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Options_RunDLLW();
// shell32.Options_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathCleanupSpec();
// shell32.PathCleanupSpec = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathGetShortPath();
// shell32.PathGetShortPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsExe();
// shell32.PathIsExe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSlowA();
// shell32.PathIsSlowA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathIsSlowW();
// shell32.PathIsSlowW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathMakeUniqueName();
// shell32.PathMakeUniqueName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathQualify();
// shell32.PathQualify = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathResolve();
// shell32.PathResolve = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathYetAnotherMakeUniqueName();
// shell32.PathYetAnotherMakeUniqueName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PickIconDlg();
// shell32.PickIconDlg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PifMgr_CloseProperties();
// shell32.PifMgr_CloseProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PifMgr_GetProperties();
// shell32.PifMgr_GetProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PifMgr_OpenProperties();
// shell32.PifMgr_OpenProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PifMgr_SetProperties();
// shell32.PifMgr_SetProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrepareDiscForBurnRunDllW();
// shell32.PrepareDiscForBurnRunDllW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrintersGetCommand_RunDLL();
// shell32.PrintersGetCommand_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrintersGetCommand_RunDLLA();
// shell32.PrintersGetCommand_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrintersGetCommand_RunDLLW();
// shell32.PrintersGetCommand_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadCabinetState();
// shell32.ReadCabinetState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealDriveType();
// shell32.RealDriveType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealShellExecuteA();
// shell32.RealShellExecuteA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealShellExecuteExA();
// shell32.RealShellExecuteExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealShellExecuteExW();
// shell32.RealShellExecuteExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealShellExecuteW();
// shell32.RealShellExecuteW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegenerateUserEnvironment();
// shell32.RegenerateUserEnvironment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RestartDialog();
// shell32.RestartDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RestartDialogEx();
// shell32.RestartDialogEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RunAsNewUser_RunDLLW();
// shell32.RunAsNewUser_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAddDefaultPropertiesByExt();
// shell32.SHAddDefaultPropertiesByExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAddFromPropSheetExtArray();
// shell32.SHAddFromPropSheetExtArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAddToRecentDocs();
// shell32.SHAddToRecentDocs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAlloc();
// shell32.SHAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAppBarMessage();
// shell32.SHAppBarMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAssocEnumHandlers();
// shell32.SHAssocEnumHandlers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHAssocEnumHandlersForProtocolByApplication();
// shell32.SHAssocEnumHandlersForProtocolByApplication = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBindToFolderIDListParent();
// shell32.SHBindToFolderIDListParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBindToFolderIDListParentEx();
// shell32.SHBindToFolderIDListParentEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBindToObject();
// shell32.SHBindToObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBindToParent();
// shell32.SHBindToParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBrowseForFolder();
// shell32.SHBrowseForFolder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBrowseForFolderA();
// shell32.SHBrowseForFolderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHBrowseForFolderW();
// shell32.SHBrowseForFolderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCLSIDFromString();
// shell32.SHCLSIDFromString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotification_Lock();
// shell32.SHChangeNotification_Lock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotification_Unlock();
// shell32.SHChangeNotification_Unlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotify();
// shell32.SHChangeNotify = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotifyDeregister();
// shell32.SHChangeNotifyDeregister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotifyRegister();
// shell32.SHChangeNotifyRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotifyRegisterThread();
// shell32.SHChangeNotifyRegisterThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHChangeNotifySuspendResume();
// shell32.SHChangeNotifySuspendResume = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCloneSpecialIDList();
// shell32.SHCloneSpecialIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCoCreateInstance();
// shell32.SHCoCreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCoCreateInstanceWorker();
// shell32.SHCoCreateInstanceWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateAssociationRegistration();
// shell32.SHCreateAssociationRegistration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateCategoryEnum();
// shell32.SHCreateCategoryEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDataObject();
// shell32.SHCreateDataObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDefaultContextMenu();
// shell32.SHCreateDefaultContextMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDefaultExtractIcon();
// shell32.SHCreateDefaultExtractIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDefaultPropertiesOp();
// shell32.SHCreateDefaultPropertiesOp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDirectory();
// shell32.SHCreateDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDirectoryExA();
// shell32.SHCreateDirectoryExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDirectoryExW();
// shell32.SHCreateDirectoryExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateDrvExtIcon();
// shell32.SHCreateDrvExtIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateFileExtractIconW();
// shell32.SHCreateFileExtractIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateItemFromIDList();
// shell32.SHCreateItemFromIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateItemFromParsingName();
// shell32.SHCreateItemFromParsingName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateItemFromRelativeName();
// shell32.SHCreateItemFromRelativeName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateItemInKnownFolder();
// shell32.SHCreateItemInKnownFolder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateItemWithParent();
// shell32.SHCreateItemWithParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateLocalServerRunDll();
// shell32.SHCreateLocalServerRunDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateProcessAsUserW();
// shell32.SHCreateProcessAsUserW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreatePropSheetExtArray();
// shell32.SHCreatePropSheetExtArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateQueryCancelAutoPlayMoniker();
// shell32.SHCreateQueryCancelAutoPlayMoniker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellFolderView();
// shell32.SHCreateShellFolderView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellFolderViewEx();
// shell32.SHCreateShellFolderViewEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellItem();
// shell32.SHCreateShellItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellItemArray();
// shell32.SHCreateShellItemArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellItemArrayFromDataObject();
// shell32.SHCreateShellItemArrayFromDataObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellItemArrayFromIDLists();
// shell32.SHCreateShellItemArrayFromIDLists = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateShellItemArrayFromShellItem();
// shell32.SHCreateShellItemArrayFromShellItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHCreateStdEnumFmtEtc();
// shell32.SHCreateStdEnumFmtEtc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDefExtractIconA();
// shell32.SHDefExtractIconA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDefExtractIconW();
// shell32.SHDefExtractIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDestroyPropSheetExtArray();
// shell32.SHDestroyPropSheetExtArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHDoDragDrop();
// shell32.SHDoDragDrop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_AddToBackIconTable();
// shell32.SHELL32_AddToBackIconTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_AddToFrontIconTable();
// shell32.SHELL32_AddToFrontIconTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_AreAllItemsAvailable();
// shell32.SHELL32_AreAllItemsAvailable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_BindToFilePlaceholderHandler();
// shell32.SHELL32_BindToFilePlaceholderHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CCommonPlacesFolder_CreateInstance();
// shell32.SHELL32_CCommonPlacesFolder_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_CloseSession();
// shell32.SHELL32_CDBurn_CloseSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_DriveSupportedForDataBurn();
// shell32.SHELL32_CDBurn_DriveSupportedForDataBurn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_Erase();
// shell32.SHELL32_CDBurn_Erase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_GetCDInfo();
// shell32.SHELL32_CDBurn_GetCDInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_GetLiveFSDiscInfo();
// shell32.SHELL32_CDBurn_GetLiveFSDiscInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_GetStagingPathOrNormalPath();
// shell32.SHELL32_CDBurn_GetStagingPathOrNormalPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_GetTaskInfo();
// shell32.SHELL32_CDBurn_GetTaskInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_IsBlankDisc();
// shell32.SHELL32_CDBurn_IsBlankDisc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_IsBlankDisc2();
// shell32.SHELL32_CDBurn_IsBlankDisc2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_IsLiveFS();
// shell32.SHELL32_CDBurn_IsLiveFS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_OnDeviceChange();
// shell32.SHELL32_CDBurn_OnDeviceChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_OnEject();
// shell32.SHELL32_CDBurn_OnEject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDBurn_OnMediaChange();
// shell32.SHELL32_CDBurn_OnMediaChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDefFolderMenu_Create2();
// shell32.SHELL32_CDefFolderMenu_Create2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDefFolderMenu_Create2Ex();
// shell32.SHELL32_CDefFolderMenu_Create2Ex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDefFolderMenu_MergeMenu();
// shell32.SHELL32_CDefFolderMenu_MergeMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDrivesContextMenu_Create();
// shell32.SHELL32_CDrivesContextMenu_Create = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDrivesDropTarget_Create();
// shell32.SHELL32_CDrivesDropTarget_Create = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CDrives_CreateSFVCB();
// shell32.SHELL32_CDrives_CreateSFVCB = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CFSDropTarget_CreateInstance();
// shell32.SHELL32_CFSDropTarget_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CFSFolderCallback_Create();
// shell32.SHELL32_CFSFolderCallback_Create = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CFillPropertiesTask_CreateInstance();
// shell32.SHELL32_CFillPropertiesTask_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CLibraryDropTarget_CreateInstance();
// shell32.SHELL32_CLibraryDropTarget_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CLocationContextMenu_Create();
// shell32.SHELL32_CLocationContextMenu_Create = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CLocationFolderUI_CreateInstance();
// shell32.SHELL32_CLocationFolderUI_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_DoAutorun();
// shell32.SHELL32_CMountPoint_DoAutorun = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_DoAutorunPrompt();
// shell32.SHELL32_CMountPoint_DoAutorunPrompt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_IsAutoRunDriveAndEnabledByPolicy();
// shell32.SHELL32_CMountPoint_IsAutoRunDriveAndEnabledByPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_ProcessAutoRunFile();
// shell32.SHELL32_CMountPoint_ProcessAutoRunFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_WantAutorunUI();
// shell32.SHELL32_CMountPoint_WantAutorunUI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CMountPoint_WantAutorunUIGetReady();
// shell32.SHELL32_CMountPoint_WantAutorunUIGetReady = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CPL_CategoryIdArrayFromVariant();
// shell32.SHELL32_CPL_CategoryIdArrayFromVariant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CPL_IsLegacyCanonicalNameListedUnderKey();
// shell32.SHELL32_CPL_IsLegacyCanonicalNameListedUnderKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CPL_ModifyWowDisplayName();
// shell32.SHELL32_CPL_ModifyWowDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CRecentDocsContextMenu_CreateInstance();
// shell32.SHELL32_CRecentDocsContextMenu_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CSyncRootManager_CreateInstance();
// shell32.SHELL32_CSyncRootManager_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CTransferConfirmation_CreateInstance();
// shell32.SHELL32_CTransferConfirmation_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CallFileCopyHooks();
// shell32.SHELL32_CallFileCopyHooks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CanDisplayWin8CopyDialog();
// shell32.SHELL32_CanDisplayWin8CopyDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CloseAutoplayPrompt();
// shell32.SHELL32_CloseAutoplayPrompt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CommandLineFromMsiDescriptor();
// shell32.SHELL32_CommandLineFromMsiDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CopyExtrinsicPropertyStore();
// shell32.SHELL32_CopyExtrinsicPropertyStore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CopyFilePlaceholderToNewFile();
// shell32.SHELL32_CopyFilePlaceholderToNewFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CopySecondaryTiles();
// shell32.SHELL32_CopySecondaryTiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateAlternateStreamFileName();
// shell32.SHELL32_CreateAlternateStreamFileName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateConfirmationInterrupt();
// shell32.SHELL32_CreateConfirmationInterrupt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateConflictInterrupt();
// shell32.SHELL32_CreateConflictInterrupt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateDefaultOperationDataProvider();
// shell32.SHELL32_CreateDefaultOperationDataProvider = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateExtrinsicPropertyStore();
// shell32.SHELL32_CreateExtrinsicPropertyStore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateFileFolderContextMenu();
// shell32.SHELL32_CreateFileFolderContextMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateLinkInfoW();
// shell32.SHELL32_CreateLinkInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreatePlaceholderFile();
// shell32.SHELL32_CreatePlaceholderFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateQosRecorder();
// shell32.SHELL32_CreateQosRecorder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_CreateSharePointView();
// shell32.SHELL32_CreateSharePointView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_Create_IEnumUICommand();
// shell32.SHELL32_Create_IEnumUICommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_DestroyLinkInfo();
// shell32.SHELL32_DestroyLinkInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_EncryptDirectory();
// shell32.SHELL32_EncryptDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_EncryptedFileKeyInfo();
// shell32.SHELL32_EncryptedFileKeyInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_EnumCommonTasks();
// shell32.SHELL32_EnumCommonTasks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_FilePlaceholder_BindToPrimaryStream();
// shell32.SHELL32_FilePlaceholder_BindToPrimaryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_FilePlaceholder_CreateInstance();
// shell32.SHELL32_FilePlaceholder_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_FreeEncryptedFileKeyInfo();
// shell32.SHELL32_FreeEncryptedFileKeyInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GenerateAppID();
// shell32.SHELL32_GenerateAppID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetAppIDRoot();
// shell32.SHELL32_GetAppIDRoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetCommandProviderForFolderType();
// shell32.SHELL32_GetCommandProviderForFolderType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetDPIAdjustedLogicalSize();
// shell32.SHELL32_GetDPIAdjustedLogicalSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetDiskCleanupPath();
// shell32.SHELL32_GetDiskCleanupPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetFileNameFromBrowse();
// shell32.SHELL32_GetFileNameFromBrowse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetIconOverlayManager();
// shell32.SHELL32_GetIconOverlayManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetLinkInfoData();
// shell32.SHELL32_GetLinkInfoData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetPlaceholderStatesFromFileAttributesAndReparsePointTag();
// shell32.SHELL32_GetPlaceholderStatesFromFileAttributesAndReparsePointTag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetRatingBucket();
// shell32.SHELL32_GetRatingBucket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetSkyDriveNetworkStates();
// shell32.SHELL32_GetSkyDriveNetworkStates = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetSqmableFileName();
// shell32.SHELL32_GetSqmableFileName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetThumbnailAdornerFromFactory();
// shell32.SHELL32_GetThumbnailAdornerFromFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_GetThumbnailAdornerFromFactory2();
// shell32.SHELL32_GetThumbnailAdornerFromFactory2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_HandleUnrecognizedFileSystem();
// shell32.SHELL32_HandleUnrecognizedFileSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCacheCreate();
// shell32.SHELL32_IconCacheCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCacheDestroy();
// shell32.SHELL32_IconCacheDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCacheHandleAssociationChanged();
// shell32.SHELL32_IconCacheHandleAssociationChanged = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCacheRestore();
// shell32.SHELL32_IconCacheRestore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCache_AboutToExtractIcons();
// shell32.SHELL32_IconCache_AboutToExtractIcons = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCache_DoneExtractingIcons();
// shell32.SHELL32_IconCache_DoneExtractingIcons = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCache_ExpandEnvAndSearchPath();
// shell32.SHELL32_IconCache_ExpandEnvAndSearchPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconCache_RememberRecentlyExtractedIconsW();
// shell32.SHELL32_IconCache_RememberRecentlyExtractedIconsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IconOverlayManagerInit();
// shell32.SHELL32_IconOverlayManagerInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IsGetKeyboardLayoutPresent();
// shell32.SHELL32_IsGetKeyboardLayoutPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IsSystemUpgradeInProgress();
// shell32.SHELL32_IsSystemUpgradeInProgress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_IsValidLinkInfo();
// shell32.SHELL32_IsValidLinkInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_LegacyEnumSpecialTasksByType();
// shell32.SHELL32_LegacyEnumSpecialTasksByType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_LegacyEnumTasks();
// shell32.SHELL32_LegacyEnumTasks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_LookupBackIconIndex();
// shell32.SHELL32_LookupBackIconIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_LookupFrontIconIndex();
// shell32.SHELL32_LookupFrontIconIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_NormalizeRating();
// shell32.SHELL32_NormalizeRating = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_NotifyLinkTrackingServiceOfMove();
// shell32.SHELL32_NotifyLinkTrackingServiceOfMove = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_PifMgr_CloseProperties();
// shell32.SHELL32_PifMgr_CloseProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_PifMgr_GetProperties();
// shell32.SHELL32_PifMgr_GetProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_PifMgr_OpenProperties();
// shell32.SHELL32_PifMgr_OpenProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_PifMgr_SetProperties();
// shell32.SHELL32_PifMgr_SetProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_Printers_CreateBindInfo();
// shell32.SHELL32_Printers_CreateBindInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_Printjob_GetPidl();
// shell32.SHELL32_Printjob_GetPidl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_PurgeSystemIcon();
// shell32.SHELL32_PurgeSystemIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_RefreshOverlayImages();
// shell32.SHELL32_RefreshOverlayImages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_ResolveLinkInfoW();
// shell32.SHELL32_ResolveLinkInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHAddSparseIcon();
// shell32.SHELL32_SHAddSparseIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHCreateByValueOperationInterrupt();
// shell32.SHELL32_SHCreateByValueOperationInterrupt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHCreateDefaultContextMenu();
// shell32.SHELL32_SHCreateDefaultContextMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHCreateLocalServer();
// shell32.SHELL32_SHCreateLocalServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHCreateShellFolderView();
// shell32.SHELL32_SHCreateShellFolderView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHDuplicateEncryptionInfoFile();
// shell32.SHELL32_SHDuplicateEncryptionInfoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHEncryptFile();
// shell32.SHELL32_SHEncryptFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHFormatDriveAsync();
// shell32.SHELL32_SHFormatDriveAsync = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHGetThreadUndoManager();
// shell32.SHELL32_SHGetThreadUndoManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHGetUserNameW();
// shell32.SHELL32_SHGetUserNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHIsVirtualDevice();
// shell32.SHELL32_SHIsVirtualDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHLaunchPropSheet();
// shell32.SHELL32_SHLaunchPropSheet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHLogILFromFSIL();
// shell32.SHELL32_SHLogILFromFSIL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHOpenWithDialog();
// shell32.SHELL32_SHOpenWithDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHStartNetConnectionDialogW();
// shell32.SHELL32_SHStartNetConnectionDialogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SHUICommandFromGUID();
// shell32.SHELL32_SHUICommandFromGUID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SendToMenu_InvokeTargetedCommand();
// shell32.SHELL32_SendToMenu_InvokeTargetedCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SendToMenu_VerifyTargetedCommand();
// shell32.SHELL32_SendToMenu_VerifyTargetedCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SetPlaceholderReparsePointAttribute();
// shell32.SHELL32_SetPlaceholderReparsePointAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SetPlaceholderReparsePointAttribute2();
// shell32.SHELL32_SetPlaceholderReparsePointAttribute2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_ShowHideIconOnlyOnDesktop();
// shell32.SHELL32_ShowHideIconOnlyOnDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SimpleRatingToFilterCondition();
// shell32.SHELL32_SimpleRatingToFilterCondition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_StampIconForFile();
// shell32.SHELL32_StampIconForFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_SuspendUndo();
// shell32.SHELL32_SuspendUndo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_TryVirtualDiscImageDriveEject();
// shell32.SHELL32_TryVirtualDiscImageDriveEject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_UpdateFilePlaceholderStates();
// shell32.SHELL32_UpdateFilePlaceholderStates = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHELL32_VerifySaferTrust();
// shell32.SHELL32_VerifySaferTrust = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEmptyRecycleBinA();
// shell32.SHEmptyRecycleBinA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEmptyRecycleBinW();
// shell32.SHEmptyRecycleBinW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnableServiceObject();
// shell32.SHEnableServiceObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEnumerateUnreadMailAccountsW();
// shell32.SHEnumerateUnreadMailAccountsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHEvaluateSystemCommandTemplate();
// shell32.SHEvaluateSystemCommandTemplate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHExtractIconsW();
// shell32.SHExtractIconsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFileOperation();
// shell32.SHFileOperation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFileOperationA();
// shell32.SHFileOperationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFileOperationW();
// shell32.SHFileOperationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFindFiles();
// shell32.SHFindFiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFind_InitMenuPopup();
// shell32.SHFind_InitMenuPopup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFlushSFCache();
// shell32.SHFlushSFCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFormatDrive();
// shell32.SHFormatDrive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFree();
// shell32.SHFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHFreeNameMappings();
// shell32.SHFreeNameMappings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetAttributesFromDataObject();
// shell32.SHGetAttributesFromDataObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDataFromIDListA();
// shell32.SHGetDataFromIDListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDataFromIDListW();
// shell32.SHGetDataFromIDListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDesktopFolder();
// shell32.SHGetDesktopFolder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDiskFreeSpaceA();
// shell32.SHGetDiskFreeSpaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDiskFreeSpaceExA();
// shell32.SHGetDiskFreeSpaceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDiskFreeSpaceExW();
// shell32.SHGetDiskFreeSpaceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetDriveMedia();
// shell32.SHGetDriveMedia = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFileInfo();
// shell32.SHGetFileInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFileInfoA();
// shell32.SHGetFileInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFileInfoW();
// shell32.SHGetFileInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderLocation();
// shell32.SHGetFolderLocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderPathA();
// shell32.SHGetFolderPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderPathAndSubDirA();
// shell32.SHGetFolderPathAndSubDirA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderPathAndSubDirW();
// shell32.SHGetFolderPathAndSubDirW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderPathEx();
// shell32.SHGetFolderPathEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetFolderPathW();
// shell32.SHGetFolderPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetIDListFromObject();
// shell32.SHGetIDListFromObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetIconOverlayIndexA();
// shell32.SHGetIconOverlayIndexA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetIconOverlayIndexW();
// shell32.SHGetIconOverlayIndexW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetImageList();
// shell32.SHGetImageList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetInstanceExplorer();
// shell32.SHGetInstanceExplorer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetItemFromDataObject();
// shell32.SHGetItemFromDataObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetItemFromObject();
// shell32.SHGetItemFromObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetKnownFolderIDList();
// shell32.SHGetKnownFolderIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetKnownFolderItem();
// shell32.SHGetKnownFolderItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetKnownFolderPath();
// shell32.SHGetKnownFolderPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetLocalizedName();
// shell32.SHGetLocalizedName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetMalloc();
// shell32.SHGetMalloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetNameFromIDList();
// shell32.SHGetNameFromIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetNewLinkInfo();
// shell32.SHGetNewLinkInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetNewLinkInfoA();
// shell32.SHGetNewLinkInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetNewLinkInfoW();
// shell32.SHGetNewLinkInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPathFromIDList();
// shell32.SHGetPathFromIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPathFromIDListA();
// shell32.SHGetPathFromIDListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPathFromIDListEx();
// shell32.SHGetPathFromIDListEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPathFromIDListW();
// shell32.SHGetPathFromIDListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPropertyStoreForWindow();
// shell32.SHGetPropertyStoreForWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPropertyStoreFromIDList();
// shell32.SHGetPropertyStoreFromIDList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetPropertyStoreFromParsingName();
// shell32.SHGetPropertyStoreFromParsingName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetRealIDL();
// shell32.SHGetRealIDL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSetFolderCustomSettings();
// shell32.SHGetSetFolderCustomSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSetSettings();
// shell32.SHGetSetSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSettings();
// shell32.SHGetSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSpecialFolderLocation();
// shell32.SHGetSpecialFolderLocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSpecialFolderPathA();
// shell32.SHGetSpecialFolderPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetSpecialFolderPathW();
// shell32.SHGetSpecialFolderPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetStockIconInfo();
// shell32.SHGetStockIconInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetTemporaryPropertyForItem();
// shell32.SHGetTemporaryPropertyForItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHGetUnreadMailCountW();
// shell32.SHGetUnreadMailCountW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHHandleUpdateImage();
// shell32.SHHandleUpdateImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHHelpShortcuts_RunDLL();
// shell32.SHHelpShortcuts_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHHelpShortcuts_RunDLLA();
// shell32.SHHelpShortcuts_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHHelpShortcuts_RunDLLW();
// shell32.SHHelpShortcuts_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHILCreateFromPath();
// shell32.SHILCreateFromPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHInvokePrinterCommandA();
// shell32.SHInvokePrinterCommandA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHInvokePrinterCommandW();
// shell32.SHInvokePrinterCommandW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHIsFileAvailableOffline();
// shell32.SHIsFileAvailableOffline = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHLimitInputEdit();
// shell32.SHLimitInputEdit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHLoadInProc();
// shell32.SHLoadInProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHLoadNonloadedIconOverlayIdentifiers();
// shell32.SHLoadNonloadedIconOverlayIdentifiers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHMapPIDLToSystemImageListIndex();
// shell32.SHMapPIDLToSystemImageListIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHMultiFileProperties();
// shell32.SHMultiFileProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHObjectProperties();
// shell32.SHObjectProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenFolderAndSelectItems();
// shell32.SHOpenFolderAndSelectItems = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenPropSheetW();
// shell32.SHOpenPropSheetW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHOpenWithDialog();
// shell32.SHOpenWithDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHParseDisplayName();
// shell32.SHParseDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPathPrepareForWriteA();
// shell32.SHPathPrepareForWriteA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPathPrepareForWriteW();
// shell32.SHPathPrepareForWriteW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPropStgCreate();
// shell32.SHPropStgCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPropStgReadMultiple();
// shell32.SHPropStgReadMultiple = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHPropStgWriteMultiple();
// shell32.SHPropStgWriteMultiple = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryRecycleBinA();
// shell32.SHQueryRecycleBinA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryRecycleBinW();
// shell32.SHQueryRecycleBinW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHQueryUserNotificationState();
// shell32.SHQueryUserNotificationState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRemoveLocalizedName();
// shell32.SHRemoveLocalizedName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHReplaceFromPropSheetExtArray();
// shell32.SHReplaceFromPropSheetExtArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHResolveLibrary();
// shell32.SHResolveLibrary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHRestricted();
// shell32.SHRestricted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetDefaultProperties();
// shell32.SHSetDefaultProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetFolderPathA();
// shell32.SHSetFolderPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetFolderPathW();
// shell32.SHSetFolderPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetInstanceExplorer();
// shell32.SHSetInstanceExplorer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetKnownFolderPath();
// shell32.SHSetKnownFolderPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetLocalizedName();
// shell32.SHSetLocalizedName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetTemporaryPropertyForItem();
// shell32.SHSetTemporaryPropertyForItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSetUnreadMailCountW();
// shell32.SHSetUnreadMailCountW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHShellFolderView_Message();
// shell32.SHShellFolderView_Message = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHShowManageLibraryUI();
// shell32.SHShowManageLibraryUI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHSimpleIDListFromPath();
// shell32.SHSimpleIDListFromPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHStartNetConnectionDialogW();
// shell32.SHStartNetConnectionDialogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHTestTokenMembership();
// shell32.SHTestTokenMembership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUpdateImageA();
// shell32.SHUpdateImageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUpdateImageW();
// shell32.SHUpdateImageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHUpdateRecycleBinIcon();
// shell32.SHUpdateRecycleBinIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SHValidateUNC();
// shell32.SHValidateUNC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCurrentProcessExplicitAppUserModelID();
// shell32.SetCurrentProcessExplicitAppUserModelID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SheChangeDirA();
// shell32.SheChangeDirA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SheChangeDirExW();
// shell32.SheChangeDirExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SheGetDirA();
// shell32.SheGetDirA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SheSetCurDrive();
// shell32.SheSetCurDrive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellAboutA();
// shell32.ShellAboutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellAboutW();
// shell32.ShellAboutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExec_RunDLL();
// shell32.ShellExec_RunDLL = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExec_RunDLLA();
// shell32.ShellExec_RunDLLA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExec_RunDLLW();
// shell32.ShellExec_RunDLLW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExecuteA();
// shell32.ShellExecuteA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExecuteEx();
// shell32.ShellExecuteEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExecuteExA();
// shell32.ShellExecuteExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExecuteExW();
// shell32.ShellExecuteExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellExecuteW();
// shell32.ShellExecuteW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellHookProc();
// shell32.ShellHookProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellMessageBoxA();
// shell32.ShellMessageBoxA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShellMessageBoxW();
// shell32.ShellMessageBoxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_GetCachedImageIndex();
// shell32.Shell_GetCachedImageIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_GetCachedImageIndexA();
// shell32.Shell_GetCachedImageIndexA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_GetCachedImageIndexW();
// shell32.Shell_GetCachedImageIndexW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_GetImageLists();
// shell32.Shell_GetImageLists = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_MergeMenus();
// shell32.Shell_MergeMenus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_NotifyIcon();
// shell32.Shell_NotifyIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_NotifyIconA();
// shell32.Shell_NotifyIconA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_NotifyIconGetRect();
// shell32.Shell_NotifyIconGetRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Shell_NotifyIconW();
// shell32.Shell_NotifyIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SignalFileOpen();
// shell32.SignalFileOpen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StgMakeUniqueName();
// shell32.StgMakeUniqueName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrA();
// shell32.StrChrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrIA();
// shell32.StrChrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrIW();
// shell32.StrChrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrChrW();
// shell32.StrChrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNA();
// shell32.StrCmpNA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNIA();
// shell32.StrCmpNIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNIW();
// shell32.StrCmpNIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrCmpNW();
// shell32.StrCmpNW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCmpA();
// shell32.StrNCmpA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCmpIA();
// shell32.StrNCmpIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCmpIW();
// shell32.StrNCmpIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrNCmpW();
// shell32.StrNCmpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrA();
// shell32.StrRChrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrIA();
// shell32.StrRChrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrIW();
// shell32.StrRChrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRChrW();
// shell32.StrRChrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrA();
// shell32.StrRStrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrIA();
// shell32.StrRStrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrIW();
// shell32.StrRStrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrRStrW();
// shell32.StrRStrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrA();
// shell32.StrStrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrIA();
// shell32.StrStrIA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrIW();
// shell32.StrStrIW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrStrW();
// shell32.StrStrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UsersLibrariesFolderUI_CreateInstance();
// shell32.UsersLibrariesFolderUI_CreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WOWShellExecute();
// shell32.WOWShellExecute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForExplorerRestartW();
// shell32.WaitForExplorerRestartW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Win32DeleteFile();
// shell32.Win32DeleteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteCabinetState();
// shell32.WriteCabinetState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];


// exports
module.exports = shell32;