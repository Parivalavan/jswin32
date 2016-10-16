// javascript ffi interface for user32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var user32 = ffi.Library( 'user32.dll' ,{} );

// 
// int __stdcall ActivateKeyboardLayout();
// user32.ActivateKeyboardLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddClipboardFormatListener();
// user32.AddClipboardFormatListener = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustWindowRect();
// user32.AdjustWindowRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustWindowRectEx();
// user32.AdjustWindowRectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustWindowRectExForDpi();
// user32.AdjustWindowRectExForDpi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlignRects();
// user32.AlignRects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllowForegroundActivation();
// user32.AllowForegroundActivation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllowSetForegroundWindow();
// user32.AllowSetForegroundWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AnimateWindow();
// user32.AnimateWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AnyPopup();
// user32.AnyPopup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppendMenuA();
// user32.AppendMenuA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppendMenuW();
// user32.AppendMenuW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AreDpiAwarenessContextsEqual();
// user32.AreDpiAwarenessContextsEqual = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ArrangeIconicWindows();
// user32.ArrangeIconicWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AttachThreadInput();
// user32.AttachThreadInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginDeferWindowPos();
// user32.BeginDeferWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginPaint();
// user32.BeginPaint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BlockInput();
// user32.BlockInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BringWindowToTop();
// user32.BringWindowToTop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BroadcastSystemMessage();
// user32.BroadcastSystemMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BroadcastSystemMessageA();
// user32.BroadcastSystemMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BroadcastSystemMessageExA();
// user32.BroadcastSystemMessageExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BroadcastSystemMessageExW();
// user32.BroadcastSystemMessageExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BroadcastSystemMessageW();
// user32.BroadcastSystemMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildReasonArray();
// user32.BuildReasonArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CalcMenuBar();
// user32.CalcMenuBar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CalculatePopupWindowPosition();
// user32.CalculatePopupWindowPosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallMsgFilter();
// user32.CallMsgFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallMsgFilterA();
// user32.CallMsgFilterA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallMsgFilterW();
// user32.CallMsgFilterW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallNextHookEx();
// user32.CallNextHookEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallWindowProcA();
// user32.CallWindowProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallWindowProcW();
// user32.CallWindowProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelShutdown();
// user32.CancelShutdown = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CascadeChildWindows();
// user32.CascadeChildWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CascadeWindows();
// user32.CascadeWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeClipboardChain();
// user32.ChangeClipboardChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeDisplaySettingsA();
// user32.ChangeDisplaySettingsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeDisplaySettingsExA();
// user32.ChangeDisplaySettingsExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeDisplaySettingsExW();
// user32.ChangeDisplaySettingsExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeDisplaySettingsW();
// user32.ChangeDisplaySettingsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeMenuA();
// user32.ChangeMenuA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeMenuW();
// user32.ChangeMenuW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeWindowMessageFilter();
// user32.ChangeWindowMessageFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeWindowMessageFilterEx();
// user32.ChangeWindowMessageFilterEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharLowerA();
// user32.CharLowerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharLowerBuffA();
// user32.CharLowerBuffA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharLowerBuffW();
// user32.CharLowerBuffW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharLowerW();
// user32.CharLowerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharNextA();
// user32.CharNextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharNextExA();
// user32.CharNextExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharNextW();
// user32.CharNextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharPrevA();
// user32.CharPrevA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharPrevExA();
// user32.CharPrevExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharPrevW();
// user32.CharPrevW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharToOemA();
// user32.CharToOemA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharToOemBuffA();
// user32.CharToOemBuffA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharToOemBuffW();
// user32.CharToOemBuffW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharToOemW();
// user32.CharToOemW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharUpperA();
// user32.CharUpperA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharUpperBuffA();
// user32.CharUpperBuffA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharUpperBuffW();
// user32.CharUpperBuffW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CharUpperW();
// user32.CharUpperW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckDBCSEnabledExt();
// user32.CheckDBCSEnabledExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckDlgButton();
// user32.CheckDlgButton = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckMenuItem();
// user32.CheckMenuItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckMenuRadioItem();
// user32.CheckMenuRadioItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckProcessForClipboardAccess();
// user32.CheckProcessForClipboardAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckProcessSession();
// user32.CheckProcessSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckRadioButton();
// user32.CheckRadioButton = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckWindowThreadDesktop();
// user32.CheckWindowThreadDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChildWindowFromPoint();
// user32.ChildWindowFromPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChildWindowFromPointEx();
// user32.ChildWindowFromPointEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CliImmSetHotKey();
// user32.CliImmSetHotKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClientThreadSetup();
// user32.ClientThreadSetup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClientToScreen();
// user32.ClientToScreen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClipCursor();
// user32.ClipCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseClipboard();
// user32.CloseClipboard = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseDesktop();
// user32.CloseDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseGestureInfoHandle();
// user32.CloseGestureInfoHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseTouchInputHandle();
// user32.CloseTouchInputHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseWindow();
// user32.CloseWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseWindowStation();
// user32.CloseWindowStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConsoleControl();
// user32.ConsoleControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlMagnification();
// user32.ControlMagnification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyAcceleratorTableA();
// user32.CopyAcceleratorTableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyAcceleratorTableW();
// user32.CopyAcceleratorTableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyIcon();
// user32.CopyIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyImage();
// user32.CopyImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyRect();
// user32.CopyRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CountClipboardFormats();
// user32.CountClipboardFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateAcceleratorTableA();
// user32.CreateAcceleratorTableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateAcceleratorTableW();
// user32.CreateAcceleratorTableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateCaret();
// user32.CreateCaret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateCursor();
// user32.CreateCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDCompositionHwndTarget();
// user32.CreateDCompositionHwndTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDesktopA();
// user32.CreateDesktopA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDesktopExA();
// user32.CreateDesktopExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDesktopExW();
// user32.CreateDesktopExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDesktopW();
// user32.CreateDesktopW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDialogIndirectParamA();
// user32.CreateDialogIndirectParamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDialogIndirectParamAorW();
// user32.CreateDialogIndirectParamAorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDialogIndirectParamW();
// user32.CreateDialogIndirectParamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDialogParamA();
// user32.CreateDialogParamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDialogParamW();
// user32.CreateDialogParamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateIcon();
// user32.CreateIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateIconFromResource();
// user32.CreateIconFromResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateIconFromResourceEx();
// user32.CreateIconFromResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateIconIndirect();
// user32.CreateIconIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMDIWindowA();
// user32.CreateMDIWindowA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMDIWindowW();
// user32.CreateMDIWindowW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMenu();
// user32.CreateMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePopupMenu();
// user32.CreatePopupMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSystemThreads();
// user32.CreateSystemThreads = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowExA();
// user32.CreateWindowExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowExW();
// user32.CreateWindowExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowInBand();
// user32.CreateWindowInBand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowInBandEx();
// user32.CreateWindowInBandEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowIndirect();
// user32.CreateWindowIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowStationA();
// user32.CreateWindowStationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWindowStationW();
// user32.CreateWindowStationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrBroadcastSystemMessageExW();
// user32.CsrBroadcastSystemMessageExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CtxInitUser32();
// user32.CtxInitUser32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeAbandonTransaction();
// user32.DdeAbandonTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeAccessData();
// user32.DdeAccessData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeAddData();
// user32.DdeAddData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeClientTransaction();
// user32.DdeClientTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeCmpStringHandles();
// user32.DdeCmpStringHandles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeConnect();
// user32.DdeConnect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeConnectList();
// user32.DdeConnectList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeCreateDataHandle();
// user32.DdeCreateDataHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeCreateStringHandleA();
// user32.DdeCreateStringHandleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeCreateStringHandleW();
// user32.DdeCreateStringHandleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeDisconnect();
// user32.DdeDisconnect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeDisconnectList();
// user32.DdeDisconnectList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeEnableCallback();
// user32.DdeEnableCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeFreeDataHandle();
// user32.DdeFreeDataHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeFreeStringHandle();
// user32.DdeFreeStringHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeGetData();
// user32.DdeGetData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeGetLastError();
// user32.DdeGetLastError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeGetQualityOfService();
// user32.DdeGetQualityOfService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeImpersonateClient();
// user32.DdeImpersonateClient = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeInitializeA();
// user32.DdeInitializeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeInitializeW();
// user32.DdeInitializeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeKeepStringHandle();
// user32.DdeKeepStringHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeNameService();
// user32.DdeNameService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdePostAdvise();
// user32.DdePostAdvise = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeQueryConvInfo();
// user32.DdeQueryConvInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeQueryNextServer();
// user32.DdeQueryNextServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeQueryStringA();
// user32.DdeQueryStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeQueryStringW();
// user32.DdeQueryStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeReconnect();
// user32.DdeReconnect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeSetQualityOfService();
// user32.DdeSetQualityOfService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeSetUserHandle();
// user32.DdeSetUserHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeUnaccessData();
// user32.DdeUnaccessData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdeUninitialize();
// user32.DdeUninitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefDlgProcA();
// user32.DefDlgProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefDlgProcW();
// user32.DefDlgProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefFrameProcA();
// user32.DefFrameProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefFrameProcW();
// user32.DefFrameProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefMDIChildProcA();
// user32.DefMDIChildProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefMDIChildProcW();
// user32.DefMDIChildProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefRawInputProc();
// user32.DefRawInputProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefWindowProcA();
// user32.DefWindowProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefWindowProcW();
// user32.DefWindowProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeferWindowPos();
// user32.DeferWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeferWindowPosAndBand();
// user32.DeferWindowPosAndBand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteMenu();
// user32.DeleteMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeregisterShellHookWindow();
// user32.DeregisterShellHookWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyAcceleratorTable();
// user32.DestroyAcceleratorTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyCaret();
// user32.DestroyCaret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyCursor();
// user32.DestroyCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyDCompositionHwndTarget();
// user32.DestroyDCompositionHwndTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyIcon();
// user32.DestroyIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyMenu();
// user32.DestroyMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyReasons();
// user32.DestroyReasons = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyWindow();
// user32.DestroyWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DialogBoxIndirectParamA();
// user32.DialogBoxIndirectParamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DialogBoxIndirectParamAorW();
// user32.DialogBoxIndirectParamAorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DialogBoxIndirectParamW();
// user32.DialogBoxIndirectParamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DialogBoxParamA();
// user32.DialogBoxParamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DialogBoxParamW();
// user32.DialogBoxParamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisableProcessWindowsGhosting();
// user32.DisableProcessWindowsGhosting = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DispatchMessageA();
// user32.DispatchMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DispatchMessageW();
// user32.DispatchMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisplayConfigGetDeviceInfo();
// user32.DisplayConfigGetDeviceInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisplayConfigSetDeviceInfo();
// user32.DisplayConfigSetDeviceInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisplayExitWindowsWarnings();
// user32.DisplayExitWindowsWarnings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirListA();
// user32.DlgDirListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirListComboBoxA();
// user32.DlgDirListComboBoxA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirListComboBoxW();
// user32.DlgDirListComboBoxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirListW();
// user32.DlgDirListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirSelectComboBoxExA();
// user32.DlgDirSelectComboBoxExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirSelectComboBoxExW();
// user32.DlgDirSelectComboBoxExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirSelectExA();
// user32.DlgDirSelectExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DlgDirSelectExW();
// user32.DlgDirSelectExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DoSoundConnect();
// user32.DoSoundConnect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DoSoundDisconnect();
// user32.DoSoundDisconnect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragDetect();
// user32.DragDetect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DragObject();
// user32.DragObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawAnimatedRects();
// user32.DrawAnimatedRects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawCaption();
// user32.DrawCaption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawCaptionTempA();
// user32.DrawCaptionTempA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawCaptionTempW();
// user32.DrawCaptionTempW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawEdge();
// user32.DrawEdge = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawFocusRect();
// user32.DrawFocusRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawFrame();
// user32.DrawFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawFrameControl();
// user32.DrawFrameControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawIcon();
// user32.DrawIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawIconEx();
// user32.DrawIconEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawMenuBar();
// user32.DrawMenuBar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawMenuBarTemp();
// user32.DrawMenuBarTemp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawStateA();
// user32.DrawStateA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawStateW();
// user32.DrawStateW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawTextA();
// user32.DrawTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawTextExA();
// user32.DrawTextExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawTextExW();
// user32.DrawTextExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawTextW();
// user32.DrawTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmGetDxSharedSurface();
// user32.DwmGetDxSharedSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmGetRemoteSessionOcclusionEvent();
// user32.DwmGetRemoteSessionOcclusionEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmGetRemoteSessionOcclusionState();
// user32.DwmGetRemoteSessionOcclusionState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmKernelShutdown();
// user32.DwmKernelShutdown = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmKernelStartup();
// user32.DwmKernelStartup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmLockScreenUpdates();
// user32.DwmLockScreenUpdates = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmValidateWindow();
// user32.DwmValidateWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EditWndProc();
// user32.EditWndProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EmptyClipboard();
// user32.EmptyClipboard = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableMenuItem();
// user32.EnableMenuItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableMouseInPointer();
// user32.EnableMouseInPointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableNonClientDpiScaling();
// user32.EnableNonClientDpiScaling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableScrollBar();
// user32.EnableScrollBar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableSessionForMMCSS();
// user32.EnableSessionForMMCSS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableWindow();
// user32.EnableWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndDeferWindowPos();
// user32.EndDeferWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndDeferWindowPosEx();
// user32.EndDeferWindowPosEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndDialog();
// user32.EndDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndMenu();
// user32.EndMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndPaint();
// user32.EndPaint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndTask();
// user32.EndTask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnterReaderModeHelper();
// user32.EnterReaderModeHelper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumChildWindows();
// user32.EnumChildWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumClipboardFormats();
// user32.EnumClipboardFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDesktopWindows();
// user32.EnumDesktopWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDesktopsA();
// user32.EnumDesktopsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDesktopsW();
// user32.EnumDesktopsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplayDevicesA();
// user32.EnumDisplayDevicesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplayDevicesW();
// user32.EnumDisplayDevicesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplayMonitors();
// user32.EnumDisplayMonitors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplaySettingsA();
// user32.EnumDisplaySettingsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplaySettingsExA();
// user32.EnumDisplaySettingsExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplaySettingsExW();
// user32.EnumDisplaySettingsExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDisplaySettingsW();
// user32.EnumDisplaySettingsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumPropsA();
// user32.EnumPropsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumPropsExA();
// user32.EnumPropsExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumPropsExW();
// user32.EnumPropsExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumPropsW();
// user32.EnumPropsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumThreadWindows();
// user32.EnumThreadWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumWindowStationsA();
// user32.EnumWindowStationsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumWindowStationsW();
// user32.EnumWindowStationsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumWindows();
// user32.EnumWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EqualRect();
// user32.EqualRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EvaluateProximityToPolygon();
// user32.EvaluateProximityToPolygon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EvaluateProximityToRect();
// user32.EvaluateProximityToRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExcludeUpdateRgn();
// user32.ExcludeUpdateRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExitWindowsEx();
// user32.ExitWindowsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillRect();
// user32.FillRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindWindowA();
// user32.FindWindowA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindWindowExA();
// user32.FindWindowExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindWindowExW();
// user32.FindWindowExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindWindowW();
// user32.FindWindowW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlashWindow();
// user32.FlashWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlashWindowEx();
// user32.FlashWindowEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FrameRect();
// user32.FrameRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeDDElParam();
// user32.FreeDDElParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FrostCrashedWindow();
// user32.FrostCrashedWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetActiveWindow();
// user32.GetActiveWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAltTabInfo();
// user32.GetAltTabInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAltTabInfoA();
// user32.GetAltTabInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAltTabInfoW();
// user32.GetAltTabInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAncestor();
// user32.GetAncestor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAppCompatFlags();
// user32.GetAppCompatFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAppCompatFlags2();
// user32.GetAppCompatFlags2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAsyncKeyState();
// user32.GetAsyncKeyState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAutoRotationState();
// user32.GetAutoRotationState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAwarenessFromDpiAwarenessContext();
// user32.GetAwarenessFromDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCIMSSM();
// user32.GetCIMSSM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCapture();
// user32.GetCapture = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCaretBlinkTime();
// user32.GetCaretBlinkTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCaretPos();
// user32.GetCaretPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassInfoA();
// user32.GetClassInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassInfoExA();
// user32.GetClassInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassInfoExW();
// user32.GetClassInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassInfoW();
// user32.GetClassInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassLongA();
// user32.GetClassLongA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassLongPtrA();
// user32.GetClassLongPtrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassLongPtrW();
// user32.GetClassLongPtrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassLongW();
// user32.GetClassLongW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassNameA();
// user32.GetClassNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassNameW();
// user32.GetClassNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClassWord();
// user32.GetClassWord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClientRect();
// user32.GetClientRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipCursor();
// user32.GetClipCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardAccessToken();
// user32.GetClipboardAccessToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardData();
// user32.GetClipboardData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardFormatNameA();
// user32.GetClipboardFormatNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardFormatNameW();
// user32.GetClipboardFormatNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardOwner();
// user32.GetClipboardOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardSequenceNumber();
// user32.GetClipboardSequenceNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipboardViewer();
// user32.GetClipboardViewer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComboBoxInfo();
// user32.GetComboBoxInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentInputMessageSource();
// user32.GetCurrentInputMessageSource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCursor();
// user32.GetCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCursorFrameInfo();
// user32.GetCursorFrameInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCursorInfo();
// user32.GetCursorInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCursorPos();
// user32.GetCursorPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDC();
// user32.GetDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDCEx();
// user32.GetDCEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDesktopID();
// user32.GetDesktopID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDesktopWindow();
// user32.GetDesktopWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDialogBaseUnits();
// user32.GetDialogBaseUnits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDisplayAutoRotationPreferences();
// user32.GetDisplayAutoRotationPreferences = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDisplayConfigBufferSizes();
// user32.GetDisplayConfigBufferSizes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDlgCtrlID();
// user32.GetDlgCtrlID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDlgItem();
// user32.GetDlgItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDlgItemInt();
// user32.GetDlgItemInt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDlgItemTextA();
// user32.GetDlgItemTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDlgItemTextW();
// user32.GetDlgItemTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDoubleClickTime();
// user32.GetDoubleClickTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDpiForMonitorInternal();
// user32.GetDpiForMonitorInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDpiForSystem();
// user32.GetDpiForSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDpiForWindow();
// user32.GetDpiForWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFocus();
// user32.GetFocus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetForegroundWindow();
// user32.GetForegroundWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGUIThreadInfo();
// user32.GetGUIThreadInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGestureConfig();
// user32.GetGestureConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGestureExtraArgs();
// user32.GetGestureExtraArgs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGestureInfo();
// user32.GetGestureInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGuiResources();
// user32.GetGuiResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetIconInfo();
// user32.GetIconInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetIconInfoExA();
// user32.GetIconInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetIconInfoExW();
// user32.GetIconInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInputDesktop();
// user32.GetInputDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInputLocaleInfo();
// user32.GetInputLocaleInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInputState();
// user32.GetInputState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInternalWindowPos();
// user32.GetInternalWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKBCodePage();
// user32.GetKBCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyNameTextA();
// user32.GetKeyNameTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyNameTextW();
// user32.GetKeyNameTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyState();
// user32.GetKeyState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardLayout();
// user32.GetKeyboardLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardLayoutList();
// user32.GetKeyboardLayoutList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardLayoutNameA();
// user32.GetKeyboardLayoutNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardLayoutNameW();
// user32.GetKeyboardLayoutNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardState();
// user32.GetKeyboardState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKeyboardType();
// user32.GetKeyboardType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLastActivePopup();
// user32.GetLastActivePopup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLastInputInfo();
// user32.GetLastInputInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLayeredWindowAttributes();
// user32.GetLayeredWindowAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetListBoxInfo();
// user32.GetListBoxInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMagnificationDesktopColorEffect();
// user32.GetMagnificationDesktopColorEffect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMagnificationDesktopMagnification();
// user32.GetMagnificationDesktopMagnification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMagnificationLensCtxInformation();
// user32.GetMagnificationLensCtxInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenu();
// user32.GetMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuBarInfo();
// user32.GetMenuBarInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuCheckMarkDimensions();
// user32.GetMenuCheckMarkDimensions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuContextHelpId();
// user32.GetMenuContextHelpId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuDefaultItem();
// user32.GetMenuDefaultItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuInfo();
// user32.GetMenuInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuItemCount();
// user32.GetMenuItemCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuItemID();
// user32.GetMenuItemID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuItemInfoA();
// user32.GetMenuItemInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuItemInfoW();
// user32.GetMenuItemInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuItemRect();
// user32.GetMenuItemRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuState();
// user32.GetMenuState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuStringA();
// user32.GetMenuStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMenuStringW();
// user32.GetMenuStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMessageA();
// user32.GetMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMessageExtraInfo();
// user32.GetMessageExtraInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMessagePos();
// user32.GetMessagePos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMessageTime();
// user32.GetMessageTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMessageW();
// user32.GetMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMonitorInfoA();
// user32.GetMonitorInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMonitorInfoW();
// user32.GetMonitorInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMouseMovePointsEx();
// user32.GetMouseMovePointsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNextDlgGroupItem();
// user32.GetNextDlgGroupItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNextDlgTabItem();
// user32.GetNextDlgTabItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOpenClipboardWindow();
// user32.GetOpenClipboardWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetParent();
// user32.GetParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPhysicalCursorPos();
// user32.GetPhysicalCursorPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerCursorId();
// user32.GetPointerCursorId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerDevice();
// user32.GetPointerDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerDeviceCursors();
// user32.GetPointerDeviceCursors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerDeviceProperties();
// user32.GetPointerDeviceProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerDeviceRects();
// user32.GetPointerDeviceRects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerDevices();
// user32.GetPointerDevices = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFrameArrivalTimes();
// user32.GetPointerFrameArrivalTimes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFrameInfo();
// user32.GetPointerFrameInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFrameInfoHistory();
// user32.GetPointerFrameInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFramePenInfo();
// user32.GetPointerFramePenInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFramePenInfoHistory();
// user32.GetPointerFramePenInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFrameTouchInfo();
// user32.GetPointerFrameTouchInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerFrameTouchInfoHistory();
// user32.GetPointerFrameTouchInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerInfo();
// user32.GetPointerInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerInfoHistory();
// user32.GetPointerInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerInputTransform();
// user32.GetPointerInputTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerPenInfo();
// user32.GetPointerPenInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerPenInfoHistory();
// user32.GetPointerPenInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerTouchInfo();
// user32.GetPointerTouchInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerTouchInfoHistory();
// user32.GetPointerTouchInfoHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPointerType();
// user32.GetPointerType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPriorityClipboardFormat();
// user32.GetPriorityClipboardFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessDefaultLayout();
// user32.GetProcessDefaultLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessDpiAwarenessInternal();
// user32.GetProcessDpiAwarenessInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessWindowStation();
// user32.GetProcessWindowStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProgmanWindow();
// user32.GetProgmanWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPropA();
// user32.GetPropA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPropW();
// user32.GetPropW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetQueueStatus();
// user32.GetQueueStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawInputBuffer();
// user32.GetRawInputBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawInputData();
// user32.GetRawInputData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawInputDeviceInfoA();
// user32.GetRawInputDeviceInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawInputDeviceInfoW();
// user32.GetRawInputDeviceInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawInputDeviceList();
// user32.GetRawInputDeviceList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRawPointerDeviceData();
// user32.GetRawPointerDeviceData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetReasonTitleFromReasonCode();
// user32.GetReasonTitleFromReasonCode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRegisteredRawInputDevices();
// user32.GetRegisteredRawInputDevices = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetScrollBarInfo();
// user32.GetScrollBarInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetScrollInfo();
// user32.GetScrollInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetScrollPos();
// user32.GetScrollPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetScrollRange();
// user32.GetScrollRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSendMessageReceiver();
// user32.GetSendMessageReceiver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetShellWindow();
// user32.GetShellWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSubMenu();
// user32.GetSubMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSysColor();
// user32.GetSysColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSysColorBrush();
// user32.GetSysColorBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemMenu();
// user32.GetSystemMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemMetrics();
// user32.GetSystemMetrics = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemMetricsForDpi();
// user32.GetSystemMetricsForDpi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTabbedTextExtentA();
// user32.GetTabbedTextExtentA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTabbedTextExtentW();
// user32.GetTabbedTextExtentW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTaskmanWindow();
// user32.GetTaskmanWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadDesktop();
// user32.GetThreadDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadDpiAwarenessContext();
// user32.GetThreadDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTitleBarInfo();
// user32.GetTitleBarInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTopLevelWindow();
// user32.GetTopLevelWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTopWindow();
// user32.GetTopWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTouchInputInfo();
// user32.GetTouchInputInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUnpredictedMessagePos();
// user32.GetUnpredictedMessagePos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUpdateRect();
// user32.GetUpdateRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUpdateRgn();
// user32.GetUpdateRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUpdatedClipboardFormats();
// user32.GetUpdatedClipboardFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserObjectInformationA();
// user32.GetUserObjectInformationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserObjectInformationW();
// user32.GetUserObjectInformationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserObjectSecurity();
// user32.GetUserObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWinStationInfo();
// user32.GetWinStationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindow();
// user32.GetWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowBand();
// user32.GetWindowBand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowCompositionAttribute();
// user32.GetWindowCompositionAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowCompositionInfo();
// user32.GetWindowCompositionInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowContextHelpId();
// user32.GetWindowContextHelpId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowDC();
// user32.GetWindowDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowDisplayAffinity();
// user32.GetWindowDisplayAffinity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowDpiAwarenessContext();
// user32.GetWindowDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowFeedbackSetting();
// user32.GetWindowFeedbackSetting = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowInfo();
// user32.GetWindowInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowLongA();
// user32.GetWindowLongA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowLongPtrA();
// user32.GetWindowLongPtrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowLongPtrW();
// user32.GetWindowLongPtrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowLongW();
// user32.GetWindowLongW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowMinimizeRect();
// user32.GetWindowMinimizeRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowModuleFileName();
// user32.GetWindowModuleFileName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowModuleFileNameA();
// user32.GetWindowModuleFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowModuleFileNameW();
// user32.GetWindowModuleFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowPlacement();
// user32.GetWindowPlacement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowRect();
// user32.GetWindowRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowRgn();
// user32.GetWindowRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowRgnBox();
// user32.GetWindowRgnBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowRgnEx();
// user32.GetWindowRgnEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowTextA();
// user32.GetWindowTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowTextLengthA();
// user32.GetWindowTextLengthA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowTextLengthW();
// user32.GetWindowTextLengthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowTextW();
// user32.GetWindowTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowThreadProcessId();
// user32.GetWindowThreadProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowWord();
// user32.GetWindowWord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GhostWindowFromHungWindow();
// user32.GhostWindowFromHungWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GrayStringA();
// user32.GrayStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GrayStringW();
// user32.GrayStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HideCaret();
// user32.HideCaret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HiliteMenuItem();
// user32.HiliteMenuItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HungWindowFromGhostWindow();
// user32.HungWindowFromGhostWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPGetIMEA();
// user32.IMPGetIMEA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPGetIMEW();
// user32.IMPGetIMEW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPQueryIMEA();
// user32.IMPQueryIMEA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPQueryIMEW();
// user32.IMPQueryIMEW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPSetIMEA();
// user32.IMPSetIMEA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IMPSetIMEW();
// user32.IMPSetIMEW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImpersonateDdeClientWindow();
// user32.ImpersonateDdeClientWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InSendMessage();
// user32.InSendMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InSendMessageEx();
// user32.InSendMessageEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InflateRect();
// user32.InflateRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InheritWindowMonitor();
// user32.InheritWindowMonitor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitDManipHook();
// user32.InitDManipHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeInputDeviceInjection();
// user32.InitializeInputDeviceInjection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeLpkHooks();
// user32.InitializeLpkHooks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializePointerDeviceInjection();
// user32.InitializePointerDeviceInjection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeTouchInjection();
// user32.InitializeTouchInjection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InjectDeviceInput();
// user32.InjectDeviceInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InjectKeyboardInput();
// user32.InjectKeyboardInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InjectMouseInput();
// user32.InjectMouseInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InjectPointerInput();
// user32.InjectPointerInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InjectTouchInput();
// user32.InjectTouchInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InsertMenuA();
// user32.InsertMenuA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InsertMenuItemA();
// user32.InsertMenuItemA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InsertMenuItemW();
// user32.InsertMenuItemW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InsertMenuW();
// user32.InsertMenuW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InternalGetWindowIcon();
// user32.InternalGetWindowIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InternalGetWindowText();
// user32.InternalGetWindowText = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IntersectRect();
// user32.IntersectRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvalidateRect();
// user32.InvalidateRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvalidateRgn();
// user32.InvalidateRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvertRect();
// user32.InvertRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharAlphaA();
// user32.IsCharAlphaA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharAlphaNumericA();
// user32.IsCharAlphaNumericA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharAlphaNumericW();
// user32.IsCharAlphaNumericW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharAlphaW();
// user32.IsCharAlphaW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharLowerA();
// user32.IsCharLowerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharLowerW();
// user32.IsCharLowerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharUpperA();
// user32.IsCharUpperA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCharUpperW();
// user32.IsCharUpperW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsChild();
// user32.IsChild = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsClipboardFormatAvailable();
// user32.IsClipboardFormatAvailable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDialogMessage();
// user32.IsDialogMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDialogMessageA();
// user32.IsDialogMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDialogMessageW();
// user32.IsDialogMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDlgButtonChecked();
// user32.IsDlgButtonChecked = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsGUIThread();
// user32.IsGUIThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsHungAppWindow();
// user32.IsHungAppWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsIconic();
// user32.IsIconic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsImmersiveProcess();
// user32.IsImmersiveProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsInDesktopWindowBand();
// user32.IsInDesktopWindowBand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsMenu();
// user32.IsMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsMouseInPointerEnabled();
// user32.IsMouseInPointerEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsProcessDPIAware();
// user32.IsProcessDPIAware = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsQueueAttached();
// user32.IsQueueAttached = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsRectEmpty();
// user32.IsRectEmpty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsSETEnabled();
// user32.IsSETEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsServerSideWindow();
// user32.IsServerSideWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsThreadDesktopComposited();
// user32.IsThreadDesktopComposited = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsThreadMessageQueueAttached();
// user32.IsThreadMessageQueueAttached = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsTopLevelWindow();
// user32.IsTopLevelWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsTouchWindow();
// user32.IsTouchWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidDpiAwarenessContext();
// user32.IsValidDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWinEventHookInstalled();
// user32.IsWinEventHookInstalled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindow();
// user32.IsWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowArranged();
// user32.IsWindowArranged = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowEnabled();
// user32.IsWindowEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowInDestroy();
// user32.IsWindowInDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowRedirectedForPrint();
// user32.IsWindowRedirectedForPrint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowUnicode();
// user32.IsWindowUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWindowVisible();
// user32.IsWindowVisible = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWow64Message();
// user32.IsWow64Message = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsZoomed();
// user32.IsZoomed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KillTimer();
// user32.KillTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadAcceleratorsA();
// user32.LoadAcceleratorsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadAcceleratorsW();
// user32.LoadAcceleratorsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadBitmapA();
// user32.LoadBitmapA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadBitmapW();
// user32.LoadBitmapW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadCursorA();
// user32.LoadCursorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadCursorFromFileA();
// user32.LoadCursorFromFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadCursorFromFileW();
// user32.LoadCursorFromFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadCursorW();
// user32.LoadCursorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadIconA();
// user32.LoadIconA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadIconW();
// user32.LoadIconW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadImageA();
// user32.LoadImageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadImageW();
// user32.LoadImageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadKeyboardLayoutA();
// user32.LoadKeyboardLayoutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadKeyboardLayoutEx();
// user32.LoadKeyboardLayoutEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadKeyboardLayoutW();
// user32.LoadKeyboardLayoutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadLocalFonts();
// user32.LoadLocalFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadMenuA();
// user32.LoadMenuA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadMenuIndirectA();
// user32.LoadMenuIndirectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadMenuIndirectW();
// user32.LoadMenuIndirectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadMenuW();
// user32.LoadMenuW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadRemoteFonts();
// user32.LoadRemoteFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadStringA();
// user32.LoadStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadStringW();
// user32.LoadStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockSetForegroundWindow();
// user32.LockSetForegroundWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockWindowStation();
// user32.LockWindowStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockWindowUpdate();
// user32.LockWindowUpdate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockWorkStation();
// user32.LockWorkStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogicalToPhysicalPoint();
// user32.LogicalToPhysicalPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogicalToPhysicalPointForPerMonitorDPI();
// user32.LogicalToPhysicalPointForPerMonitorDPI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupIconIdFromDirectory();
// user32.LookupIconIdFromDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupIconIdFromDirectoryEx();
// user32.LookupIconIdFromDirectoryEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MBToWCSEx();
// user32.MBToWCSEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MBToWCSExt();
// user32.MBToWCSExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MB_GetString();
// user32.MB_GetString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapDialogRect();
// user32.MapDialogRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapVirtualKeyA();
// user32.MapVirtualKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapVirtualKeyExA();
// user32.MapVirtualKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapVirtualKeyExW();
// user32.MapVirtualKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapVirtualKeyW();
// user32.MapVirtualKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapWindowPoints();
// user32.MapWindowPoints = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MenuItemFromPoint();
// user32.MenuItemFromPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MenuWindowProcA();
// user32.MenuWindowProcA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MenuWindowProcW();
// user32.MenuWindowProcW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBeep();
// user32.MessageBeep = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxA();
// user32.MessageBoxA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxExA();
// user32.MessageBoxExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxExW();
// user32.MessageBoxExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxIndirectA();
// user32.MessageBoxIndirectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxIndirectW();
// user32.MessageBoxIndirectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxTimeoutA();
// user32.MessageBoxTimeoutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxTimeoutW();
// user32.MessageBoxTimeoutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MessageBoxW();
// user32.MessageBoxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ModifyMenuA();
// user32.ModifyMenuA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ModifyMenuW();
// user32.ModifyMenuW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MonitorFromPoint();
// user32.MonitorFromPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MonitorFromRect();
// user32.MonitorFromRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MonitorFromWindow();
// user32.MonitorFromWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveWindow();
// user32.MoveWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MsgWaitForMultipleObjects();
// user32.MsgWaitForMultipleObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MsgWaitForMultipleObjectsEx();
// user32.MsgWaitForMultipleObjectsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// user32.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyOverlayWindow();
// user32.NotifyOverlayWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyWinEvent();
// user32.NotifyWinEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OemKeyScan();
// user32.OemKeyScan = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OemToCharA();
// user32.OemToCharA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OemToCharBuffA();
// user32.OemToCharBuffA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OemToCharBuffW();
// user32.OemToCharBuffW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OemToCharW();
// user32.OemToCharW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OffsetRect();
// user32.OffsetRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenClipboard();
// user32.OpenClipboard = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenDesktopA();
// user32.OpenDesktopA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenDesktopW();
// user32.OpenDesktopW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenIcon();
// user32.OpenIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenInputDesktop();
// user32.OpenInputDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenThreadDesktop();
// user32.OpenThreadDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenWindowStationA();
// user32.OpenWindowStationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenWindowStationW();
// user32.OpenWindowStationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackDDElParam();
// user32.PackDDElParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackTouchHitTestingProximityEvaluation();
// user32.PackTouchHitTestingProximityEvaluation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PaintDesktop();
// user32.PaintDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PaintMenuBar();
// user32.PaintMenuBar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PaintMonitor();
// user32.PaintMonitor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PeekMessageA();
// user32.PeekMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PeekMessageW();
// user32.PeekMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PhysicalToLogicalPoint();
// user32.PhysicalToLogicalPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PhysicalToLogicalPointForPerMonitorDPI();
// user32.PhysicalToLogicalPointForPerMonitorDPI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostMessageA();
// user32.PostMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostMessageW();
// user32.PostMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostQuitMessage();
// user32.PostQuitMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostThreadMessageA();
// user32.PostThreadMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostThreadMessageW();
// user32.PostThreadMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrintWindow();
// user32.PrintWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivateExtractIconExA();
// user32.PrivateExtractIconExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivateExtractIconExW();
// user32.PrivateExtractIconExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivateExtractIconsA();
// user32.PrivateExtractIconsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivateExtractIconsW();
// user32.PrivateExtractIconsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivateRegisterICSProc();
// user32.PrivateRegisterICSProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PtInRect();
// user32.PtInRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryBSDRWindow();
// user32.QueryBSDRWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryDisplayConfig();
// user32.QueryDisplayConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuerySendMessage();
// user32.QuerySendMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMAddInputObserver();
// user32.RIMAddInputObserver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMAreSiblingDevices();
// user32.RIMAreSiblingDevices = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMDeviceIoControl();
// user32.RIMDeviceIoControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMFreeInputBuffer();
// user32.RIMFreeInputBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMGetDevicePreparsedData();
// user32.RIMGetDevicePreparsedData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMGetDevicePreparsedDataLockfree();
// user32.RIMGetDevicePreparsedDataLockfree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMGetDeviceProperties();
// user32.RIMGetDeviceProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMGetPhysicalDeviceRect();
// user32.RIMGetPhysicalDeviceRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMGetSourceProcessId();
// user32.RIMGetSourceProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMObserveNextInput();
// user32.RIMObserveNextInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMOnPnpNotification();
// user32.RIMOnPnpNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMOnTimerNotification();
// user32.RIMOnTimerNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMReadInput();
// user32.RIMReadInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMRegisterForInput();
// user32.RIMRegisterForInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMRemoveInputObserver();
// user32.RIMRemoveInputObserver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMSetTestModeStatus();
// user32.RIMSetTestModeStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMUnregisterForInput();
// user32.RIMUnregisterForInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RIMUpdateInputObserverRegistration();
// user32.RIMUpdateInputObserverRegistration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealChildWindowFromPoint();
// user32.RealChildWindowFromPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealGetWindowClass();
// user32.RealGetWindowClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealGetWindowClassA();
// user32.RealGetWindowClassA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealGetWindowClassW();
// user32.RealGetWindowClassW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReasonCodeNeedsBugID();
// user32.ReasonCodeNeedsBugID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReasonCodeNeedsComment();
// user32.ReasonCodeNeedsComment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RecordShutdownReason();
// user32.RecordShutdownReason = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RedrawWindow();
// user32.RedrawWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterBSDRWindow();
// user32.RegisterBSDRWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClassA();
// user32.RegisterClassA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClassExA();
// user32.RegisterClassExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClassExW();
// user32.RegisterClassExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClassW();
// user32.RegisterClassW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClipboardFormatA();
// user32.RegisterClipboardFormatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterClipboardFormatW();
// user32.RegisterClipboardFormatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterDManipHook();
// user32.RegisterDManipHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterDeviceNotificationA();
// user32.RegisterDeviceNotificationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterDeviceNotificationW();
// user32.RegisterDeviceNotificationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterErrorReportingDialog();
// user32.RegisterErrorReportingDialog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterFrostWindow();
// user32.RegisterFrostWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterGhostWindow();
// user32.RegisterGhostWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterHotKey();
// user32.RegisterHotKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterLogonProcess();
// user32.RegisterLogonProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterManipulationThread();
// user32.RegisterManipulationThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterMessagePumpHook();
// user32.RegisterMessagePumpHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterPointerDeviceNotifications();
// user32.RegisterPointerDeviceNotifications = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterPointerInputTarget();
// user32.RegisterPointerInputTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterPointerInputTargetEx();
// user32.RegisterPointerInputTargetEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterPowerSettingNotification();
// user32.RegisterPowerSettingNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterRawInputDevices();
// user32.RegisterRawInputDevices = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterServicesProcess();
// user32.RegisterServicesProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterSessionPort();
// user32.RegisterSessionPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterShellHookWindow();
// user32.RegisterShellHookWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterSuspendResumeNotification();
// user32.RegisterSuspendResumeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterSystemThread();
// user32.RegisterSystemThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterTasklist();
// user32.RegisterTasklist = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterTouchHitTestingWindow();
// user32.RegisterTouchHitTestingWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterTouchWindow();
// user32.RegisterTouchWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterUserApiHook();
// user32.RegisterUserApiHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWindowMessageA();
// user32.RegisterWindowMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWindowMessageW();
// user32.RegisterWindowMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseCapture();
// user32.ReleaseCapture = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseDC();
// user32.ReleaseDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseDwmHitTestWaiters();
// user32.ReleaseDwmHitTestWaiters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveClipboardFormatListener();
// user32.RemoveClipboardFormatListener = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveInjectionDevice();
// user32.RemoveInjectionDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveMenu();
// user32.RemoveMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemovePropA();
// user32.RemovePropA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemovePropW();
// user32.RemovePropW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReplyMessage();
// user32.ReplyMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResolveDesktopForWOW();
// user32.ResolveDesktopForWOW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReuseDDElParam();
// user32.ReuseDDElParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScreenToClient();
// user32.ScreenToClient = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollChildren();
// user32.ScrollChildren = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollDC();
// user32.ScrollDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollWindow();
// user32.ScrollWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollWindowEx();
// user32.ScrollWindowEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendDlgItemMessageA();
// user32.SendDlgItemMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendDlgItemMessageW();
// user32.SendDlgItemMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendIMEMessageExA();
// user32.SendIMEMessageExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendIMEMessageExW();
// user32.SendIMEMessageExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendInput();
// user32.SendInput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageA();
// user32.SendMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageCallbackA();
// user32.SendMessageCallbackA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageCallbackW();
// user32.SendMessageCallbackW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageTimeoutA();
// user32.SendMessageTimeoutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageTimeoutW();
// user32.SendMessageTimeoutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendMessageW();
// user32.SendMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendNotifyMessageA();
// user32.SendNotifyMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SendNotifyMessageW();
// user32.SendNotifyMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetActiveWindow();
// user32.SetActiveWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCapture();
// user32.SetCapture = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCaretBlinkTime();
// user32.SetCaretBlinkTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCaretPos();
// user32.SetCaretPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClassLongA();
// user32.SetClassLongA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClassLongPtrA();
// user32.SetClassLongPtrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClassLongPtrW();
// user32.SetClassLongPtrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClassLongW();
// user32.SetClassLongW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClassWord();
// user32.SetClassWord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClipboardData();
// user32.SetClipboardData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetClipboardViewer();
// user32.SetClipboardViewer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCoalescableTimer();
// user32.SetCoalescableTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCursor();
// user32.SetCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCursorContents();
// user32.SetCursorContents = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCursorPos();
// user32.SetCursorPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDebugErrorLevel();
// user32.SetDebugErrorLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDeskWallpaper();
// user32.SetDeskWallpaper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDisplayAutoRotationPreferences();
// user32.SetDisplayAutoRotationPreferences = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDisplayConfig();
// user32.SetDisplayConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDlgItemInt();
// user32.SetDlgItemInt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDlgItemTextA();
// user32.SetDlgItemTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDlgItemTextW();
// user32.SetDlgItemTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDoubleClickTime();
// user32.SetDoubleClickTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFeatureReportResponse();
// user32.SetFeatureReportResponse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFocus();
// user32.SetFocus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetForegroundWindow();
// user32.SetForegroundWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetGestureConfig();
// user32.SetGestureConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetInternalWindowPos();
// user32.SetInternalWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetKeyboardState();
// user32.SetKeyboardState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLastErrorEx();
// user32.SetLastErrorEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLayeredWindowAttributes();
// user32.SetLayeredWindowAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMagnificationDesktopColorEffect();
// user32.SetMagnificationDesktopColorEffect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMagnificationDesktopMagnification();
// user32.SetMagnificationDesktopMagnification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMagnificationLensCtxInformation();
// user32.SetMagnificationLensCtxInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetManipulationInputTarget();
// user32.SetManipulationInputTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenu();
// user32.SetMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuContextHelpId();
// user32.SetMenuContextHelpId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuDefaultItem();
// user32.SetMenuDefaultItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuInfo();
// user32.SetMenuInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuItemBitmaps();
// user32.SetMenuItemBitmaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuItemInfoA();
// user32.SetMenuItemInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMenuItemInfoW();
// user32.SetMenuItemInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMessageExtraInfo();
// user32.SetMessageExtraInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMessageQueue();
// user32.SetMessageQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMirrorRendering();
// user32.SetMirrorRendering = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetParent();
// user32.SetParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPhysicalCursorPos();
// user32.SetPhysicalCursorPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDPIAware();
// user32.SetProcessDPIAware = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDefaultLayout();
// user32.SetProcessDefaultLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDpiAwarenessContext();
// user32.SetProcessDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDpiAwarenessInternal();
// user32.SetProcessDpiAwarenessInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessRestrictionExemption();
// user32.SetProcessRestrictionExemption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessWindowStation();
// user32.SetProcessWindowStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProgmanWindow();
// user32.SetProgmanWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPropA();
// user32.SetPropA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPropW();
// user32.SetPropW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetRect();
// user32.SetRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetRectEmpty();
// user32.SetRectEmpty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetScrollInfo();
// user32.SetScrollInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetScrollPos();
// user32.SetScrollPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetScrollRange();
// user32.SetScrollRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetShellWindow();
// user32.SetShellWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetShellWindowEx();
// user32.SetShellWindowEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSysColors();
// user32.SetSysColors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSysColorsTemp();
// user32.SetSysColorsTemp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemCursor();
// user32.SetSystemCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemMenu();
// user32.SetSystemMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTaskmanWindow();
// user32.SetTaskmanWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadDesktop();
// user32.SetThreadDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadDpiAwarenessContext();
// user32.SetThreadDpiAwarenessContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadInputBlocked();
// user32.SetThreadInputBlocked = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTimer();
// user32.SetTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserObjectInformationA();
// user32.SetUserObjectInformationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserObjectInformationW();
// user32.SetUserObjectInformationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserObjectSecurity();
// user32.SetUserObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWinEventHook();
// user32.SetWinEventHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowBand();
// user32.SetWindowBand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowCompositionAttribute();
// user32.SetWindowCompositionAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowCompositionTransition();
// user32.SetWindowCompositionTransition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowContextHelpId();
// user32.SetWindowContextHelpId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowDisplayAffinity();
// user32.SetWindowDisplayAffinity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowFeedbackSetting();
// user32.SetWindowFeedbackSetting = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowLongA();
// user32.SetWindowLongA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowLongPtrA();
// user32.SetWindowLongPtrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowLongPtrW();
// user32.SetWindowLongPtrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowLongW();
// user32.SetWindowLongW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowPlacement();
// user32.SetWindowPlacement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowPos();
// user32.SetWindowPos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowRgn();
// user32.SetWindowRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowRgnEx();
// user32.SetWindowRgnEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowStationUser();
// user32.SetWindowStationUser = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowTextA();
// user32.SetWindowTextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowTextW();
// user32.SetWindowTextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowWord();
// user32.SetWindowWord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowsHookA();
// user32.SetWindowsHookA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowsHookExA();
// user32.SetWindowsHookExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowsHookExW();
// user32.SetWindowsHookExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowsHookW();
// user32.SetWindowsHookW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowCaret();
// user32.ShowCaret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowCursor();
// user32.ShowCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowOwnedPopups();
// user32.ShowOwnedPopups = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowScrollBar();
// user32.ShowScrollBar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowStartGlass();
// user32.ShowStartGlass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowSystemCursor();
// user32.ShowSystemCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowWindow();
// user32.ShowWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowWindowAsync();
// user32.ShowWindowAsync = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShutdownBlockReasonCreate();
// user32.ShutdownBlockReasonCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShutdownBlockReasonDestroy();
// user32.ShutdownBlockReasonDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShutdownBlockReasonQuery();
// user32.ShutdownBlockReasonQuery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SignalRedirectionStartComplete();
// user32.SignalRedirectionStartComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SkipPointerFrameMessages();
// user32.SkipPointerFrameMessages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SoftModalMessageBox();
// user32.SoftModalMessageBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SoundSentry();
// user32.SoundSentry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SubtractRect();
// user32.SubtractRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwapMouseButton();
// user32.SwapMouseButton = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwitchDesktop();
// user32.SwitchDesktop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwitchDesktopWithFade();
// user32.SwitchDesktopWithFade = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwitchToThisWindow();
// user32.SwitchToThisWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemParametersInfoA();
// user32.SystemParametersInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemParametersInfoForDpi();
// user32.SystemParametersInfoForDpi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemParametersInfoW();
// user32.SystemParametersInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TabbedTextOutA();
// user32.TabbedTextOutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TabbedTextOutW();
// user32.TabbedTextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TileChildWindows();
// user32.TileChildWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TileWindows();
// user32.TileWindows = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ToAscii();
// user32.ToAscii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ToAsciiEx();
// user32.ToAsciiEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ToUnicode();
// user32.ToUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ToUnicodeEx();
// user32.ToUnicodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrackMouseEvent();
// user32.TrackMouseEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrackPopupMenu();
// user32.TrackPopupMenu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrackPopupMenuEx();
// user32.TrackPopupMenuEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateAccelerator();
// user32.TranslateAccelerator = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateAcceleratorA();
// user32.TranslateAcceleratorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateAcceleratorW();
// user32.TranslateAcceleratorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateMDISysAccel();
// user32.TranslateMDISysAccel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateMessage();
// user32.TranslateMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateMessageEx();
// user32.TranslateMessageEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnhookWinEvent();
// user32.UnhookWinEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnhookWindowsHook();
// user32.UnhookWindowsHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnhookWindowsHookEx();
// user32.UnhookWindowsHookEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnionRect();
// user32.UnionRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnloadKeyboardLayout();
// user32.UnloadKeyboardLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnlockWindowStation();
// user32.UnlockWindowStation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnpackDDElParam();
// user32.UnpackDDElParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterClassA();
// user32.UnregisterClassA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterClassW();
// user32.UnregisterClassW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterDeviceNotification();
// user32.UnregisterDeviceNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterHotKey();
// user32.UnregisterHotKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterMessagePumpHook();
// user32.UnregisterMessagePumpHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterPointerInputTarget();
// user32.UnregisterPointerInputTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterPointerInputTargetEx();
// user32.UnregisterPointerInputTargetEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterPowerSettingNotification();
// user32.UnregisterPowerSettingNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterSessionPort();
// user32.UnregisterSessionPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterSuspendResumeNotification();
// user32.UnregisterSuspendResumeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterTouchWindow();
// user32.UnregisterTouchWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterUserApiHook();
// user32.UnregisterUserApiHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateDefaultDesktopThumbnail();
// user32.UpdateDefaultDesktopThumbnail = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateLayeredWindow();
// user32.UpdateLayeredWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateLayeredWindowIndirect();
// user32.UpdateLayeredWindowIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdatePerUserSystemParameters();
// user32.UpdatePerUserSystemParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateWindow();
// user32.UpdateWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateWindowInputSinkHints();
// user32.UpdateWindowInputSinkHints = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateWindowTransform();
// user32.UpdateWindowTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall User32InitializeImmEntryTable();
// user32.User32InitializeImmEntryTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserClientDllInitialize();
// user32.UserClientDllInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserHandleGrantAccess();
// user32.UserHandleGrantAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserLpkPSMTextOut();
// user32.UserLpkPSMTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserLpkTabbedTextOut();
// user32.UserLpkTabbedTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserRealizePalette();
// user32.UserRealizePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UserRegisterWowHandlers();
// user32.UserRegisterWowHandlers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VRipOutput();
// user32.VRipOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VTagOutput();
// user32.VTagOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ValidateRect();
// user32.ValidateRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ValidateRgn();
// user32.ValidateRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VkKeyScanA();
// user32.VkKeyScanA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VkKeyScanExA();
// user32.VkKeyScanExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VkKeyScanExW();
// user32.VkKeyScanExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VkKeyScanW();
// user32.VkKeyScanW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WCSToMBEx();
// user32.WCSToMBEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WINNLSEnableIME();
// user32.WINNLSEnableIME = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WINNLSGetEnableStatus();
// user32.WINNLSGetEnableStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WINNLSGetIMEHotkey();
// user32.WINNLSGetIMEHotkey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForInputIdle();
// user32.WaitForInputIdle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForRedirectionStartComplete();
// user32.WaitForRedirectionStartComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitMessage();
// user32.WaitMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinHelpA();
// user32.WinHelpA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinHelpW();
// user32.WinHelpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WindowFromDC();
// user32.WindowFromDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WindowFromPhysicalPoint();
// user32.WindowFromPhysicalPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WindowFromPoint();
// user32.WindowFromPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _UserTestTokenForInteractive();
// user32._UserTestTokenForInteractive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall gSharedInfo();
// user32.gSharedInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall gapfnScSendMessage();
// user32.gapfnScSendMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall keybd_event();
// user32.keybd_event = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall mouse_event();
// user32.mouse_event = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wsprintfA();
// user32.wsprintfA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wsprintfW();
// user32.wsprintfW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wvsprintfA();
// user32.wvsprintfA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wvsprintfW();
// user32.wvsprintfW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// exports
module.exports = user32;