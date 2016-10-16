// javascript ffi interface for user32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const wchar_t = require('ref-wchar');
const ffi = require('ffi');
const iconv = require('iconv-lite');


// init
var user32 = ffi.Library( "user32.dll" ,
{
	// int __stdcall ActivateKeyboardLayout();
	// "ActivateKeyboardLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddClipboardFormatListener();
	// "AddClipboardFormatListener" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustWindowRect();
	// "AdjustWindowRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustWindowRectEx();
	// "AdjustWindowRectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustWindowRectExForDpi();
	// "AdjustWindowRectExForDpi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlignRects();
	// "AlignRects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllowForegroundActivation();
	// "AllowForegroundActivation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllowSetForegroundWindow();
	// "AllowSetForegroundWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AnimateWindow();
	// "AnimateWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AnyPopup();
	// "AnyPopup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppendMenuA();
	// "AppendMenuA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppendMenuW();
	// "AppendMenuW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AreDpiAwarenessContextsEqual();
	// "AreDpiAwarenessContextsEqual" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ArrangeIconicWindows();
	// "ArrangeIconicWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AttachThreadInput();
	// "AttachThreadInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginDeferWindowPos();
	// "BeginDeferWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginPaint();
	// "BeginPaint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BlockInput();
	// "BlockInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BringWindowToTop();
	// "BringWindowToTop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BroadcastSystemMessage();
	// "BroadcastSystemMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BroadcastSystemMessageA();
	// "BroadcastSystemMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BroadcastSystemMessageExA();
	// "BroadcastSystemMessageExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BroadcastSystemMessageExW();
	// "BroadcastSystemMessageExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BroadcastSystemMessageW();
	// "BroadcastSystemMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildReasonArray();
	// "BuildReasonArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CalcMenuBar();
	// "CalcMenuBar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CalculatePopupWindowPosition();
	// "CalculatePopupWindowPosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallMsgFilter();
	// "CallMsgFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallMsgFilterA();
	// "CallMsgFilterA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallMsgFilterW();
	// "CallMsgFilterW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallNextHookEx();
	// "CallNextHookEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallWindowProcA();
	// "CallWindowProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallWindowProcW();
	// "CallWindowProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelShutdown();
	// "CancelShutdown" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CascadeChildWindows();
	// "CascadeChildWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CascadeWindows();
	// "CascadeWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeClipboardChain();
	// "ChangeClipboardChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeDisplaySettingsA();
	// "ChangeDisplaySettingsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeDisplaySettingsExA();
	// "ChangeDisplaySettingsExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeDisplaySettingsExW();
	// "ChangeDisplaySettingsExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeDisplaySettingsW();
	// "ChangeDisplaySettingsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeMenuA();
	// "ChangeMenuA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeMenuW();
	// "ChangeMenuW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeWindowMessageFilter();
	// "ChangeWindowMessageFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeWindowMessageFilterEx();
	// "ChangeWindowMessageFilterEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharLowerA();
	// "CharLowerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharLowerBuffA();
	// "CharLowerBuffA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharLowerBuffW();
	// "CharLowerBuffW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharLowerW();
	// "CharLowerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharNextA();
	// "CharNextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharNextExA();
	// "CharNextExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharNextW();
	// "CharNextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharPrevA();
	// "CharPrevA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharPrevExA();
	// "CharPrevExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharPrevW();
	// "CharPrevW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharToOemA();
	// "CharToOemA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharToOemBuffA();
	// "CharToOemBuffA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharToOemBuffW();
	// "CharToOemBuffW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharToOemW();
	// "CharToOemW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharUpperA();
	// "CharUpperA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharUpperBuffA();
	// "CharUpperBuffA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharUpperBuffW();
	// "CharUpperBuffW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CharUpperW();
	// "CharUpperW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckDBCSEnabledExt();
	// "CheckDBCSEnabledExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckDlgButton();
	// "CheckDlgButton" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckMenuItem();
	// "CheckMenuItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckMenuRadioItem();
	// "CheckMenuRadioItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckProcessForClipboardAccess();
	// "CheckProcessForClipboardAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckProcessSession();
	// "CheckProcessSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckRadioButton();
	// "CheckRadioButton" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckWindowThreadDesktop();
	// "CheckWindowThreadDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChildWindowFromPoint();
	// "ChildWindowFromPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChildWindowFromPointEx();
	// "ChildWindowFromPointEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CliImmSetHotKey();
	// "CliImmSetHotKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClientThreadSetup();
	// "ClientThreadSetup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClientToScreen();
	// "ClientToScreen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClipCursor();
	// "ClipCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseClipboard();
	// "CloseClipboard" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseDesktop();
	// "CloseDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseGestureInfoHandle();
	// "CloseGestureInfoHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseTouchInputHandle();
	// "CloseTouchInputHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseWindow();
	// "CloseWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseWindowStation();
	// "CloseWindowStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConsoleControl();
	// "ConsoleControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlMagnification();
	// "ControlMagnification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyAcceleratorTableA();
	// "CopyAcceleratorTableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyAcceleratorTableW();
	// "CopyAcceleratorTableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyIcon();
	// "CopyIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyImage();
	// "CopyImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyRect();
	// "CopyRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CountClipboardFormats();
	// "CountClipboardFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateAcceleratorTableA();
	// "CreateAcceleratorTableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateAcceleratorTableW();
	// "CreateAcceleratorTableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateCaret();
	// "CreateCaret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateCursor();
	// "CreateCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDCompositionHwndTarget();
	// "CreateDCompositionHwndTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDesktopA();
	// "CreateDesktopA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDesktopExA();
	// "CreateDesktopExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDesktopExW();
	// "CreateDesktopExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDesktopW();
	// "CreateDesktopW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDialogIndirectParamA();
	// "CreateDialogIndirectParamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDialogIndirectParamAorW();
	// "CreateDialogIndirectParamAorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDialogIndirectParamW();
	// "CreateDialogIndirectParamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDialogParamA();
	// "CreateDialogParamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDialogParamW();
	// "CreateDialogParamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateIcon();
	// "CreateIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateIconFromResource();
	// "CreateIconFromResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateIconFromResourceEx();
	// "CreateIconFromResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateIconIndirect();
	// "CreateIconIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMDIWindowA();
	// "CreateMDIWindowA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMDIWindowW();
	// "CreateMDIWindowW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMenu();
	// "CreateMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePopupMenu();
	// "CreatePopupMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSystemThreads();
	// "CreateSystemThreads" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowExA();
	// "CreateWindowExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowExW();
	// "CreateWindowExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowInBand();
	// "CreateWindowInBand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowInBandEx();
	// "CreateWindowInBandEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowIndirect();
	// "CreateWindowIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowStationA();
	// "CreateWindowStationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWindowStationW();
	// "CreateWindowStationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrBroadcastSystemMessageExW();
	// "CsrBroadcastSystemMessageExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CtxInitUser32();
	// "CtxInitUser32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeAbandonTransaction();
	// "DdeAbandonTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeAccessData();
	// "DdeAccessData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeAddData();
	// "DdeAddData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeClientTransaction();
	// "DdeClientTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeCmpStringHandles();
	// "DdeCmpStringHandles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeConnect();
	// "DdeConnect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeConnectList();
	// "DdeConnectList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeCreateDataHandle();
	// "DdeCreateDataHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeCreateStringHandleA();
	// "DdeCreateStringHandleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeCreateStringHandleW();
	// "DdeCreateStringHandleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeDisconnect();
	// "DdeDisconnect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeDisconnectList();
	// "DdeDisconnectList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeEnableCallback();
	// "DdeEnableCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeFreeDataHandle();
	// "DdeFreeDataHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeFreeStringHandle();
	// "DdeFreeStringHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeGetData();
	// "DdeGetData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeGetLastError();
	// "DdeGetLastError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeGetQualityOfService();
	// "DdeGetQualityOfService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeImpersonateClient();
	// "DdeImpersonateClient" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeInitializeA();
	// "DdeInitializeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeInitializeW();
	// "DdeInitializeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeKeepStringHandle();
	// "DdeKeepStringHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeNameService();
	// "DdeNameService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdePostAdvise();
	// "DdePostAdvise" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeQueryConvInfo();
	// "DdeQueryConvInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeQueryNextServer();
	// "DdeQueryNextServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeQueryStringA();
	// "DdeQueryStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeQueryStringW();
	// "DdeQueryStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeReconnect();
	// "DdeReconnect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeSetQualityOfService();
	// "DdeSetQualityOfService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeSetUserHandle();
	// "DdeSetUserHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeUnaccessData();
	// "DdeUnaccessData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdeUninitialize();
	// "DdeUninitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefDlgProcA();
	// "DefDlgProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefDlgProcW();
	// "DefDlgProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefFrameProcA();
	// "DefFrameProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefFrameProcW();
	// "DefFrameProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefMDIChildProcA();
	// "DefMDIChildProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefMDIChildProcW();
	// "DefMDIChildProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefRawInputProc();
	// "DefRawInputProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefWindowProcA();
	// "DefWindowProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefWindowProcW();
	// "DefWindowProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeferWindowPos();
	// "DeferWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeferWindowPosAndBand();
	// "DeferWindowPosAndBand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteMenu();
	// "DeleteMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeregisterShellHookWindow();
	// "DeregisterShellHookWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyAcceleratorTable();
	// "DestroyAcceleratorTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyCaret();
	// "DestroyCaret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyCursor();
	// "DestroyCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyDCompositionHwndTarget();
	// "DestroyDCompositionHwndTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyIcon();
	// "DestroyIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyMenu();
	// "DestroyMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyReasons();
	// "DestroyReasons" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyWindow();
	// "DestroyWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DialogBoxIndirectParamA();
	// "DialogBoxIndirectParamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DialogBoxIndirectParamAorW();
	// "DialogBoxIndirectParamAorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DialogBoxIndirectParamW();
	// "DialogBoxIndirectParamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DialogBoxParamA();
	// "DialogBoxParamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DialogBoxParamW();
	// "DialogBoxParamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisableProcessWindowsGhosting();
	// "DisableProcessWindowsGhosting" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DispatchMessageA();
	// "DispatchMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DispatchMessageW();
	// "DispatchMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisplayConfigGetDeviceInfo();
	// "DisplayConfigGetDeviceInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisplayConfigSetDeviceInfo();
	// "DisplayConfigSetDeviceInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisplayExitWindowsWarnings();
	// "DisplayExitWindowsWarnings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirListA();
	// "DlgDirListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirListComboBoxA();
	// "DlgDirListComboBoxA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirListComboBoxW();
	// "DlgDirListComboBoxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirListW();
	// "DlgDirListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirSelectComboBoxExA();
	// "DlgDirSelectComboBoxExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirSelectComboBoxExW();
	// "DlgDirSelectComboBoxExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirSelectExA();
	// "DlgDirSelectExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DlgDirSelectExW();
	// "DlgDirSelectExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DoSoundConnect();
	// "DoSoundConnect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DoSoundDisconnect();
	// "DoSoundDisconnect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragDetect();
	// "DragDetect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DragObject();
	// "DragObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawAnimatedRects();
	// "DrawAnimatedRects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawCaption();
	// "DrawCaption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawCaptionTempA();
	// "DrawCaptionTempA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawCaptionTempW();
	// "DrawCaptionTempW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawEdge();
	// "DrawEdge" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawFocusRect();
	// "DrawFocusRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawFrame();
	// "DrawFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawFrameControl();
	// "DrawFrameControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawIcon();
	// "DrawIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawIconEx();
	// "DrawIconEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawMenuBar();
	// "DrawMenuBar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawMenuBarTemp();
	// "DrawMenuBarTemp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawStateA();
	// "DrawStateA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawStateW();
	// "DrawStateW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawTextA();
	// "DrawTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawTextExA();
	// "DrawTextExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawTextExW();
	// "DrawTextExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawTextW();
	// "DrawTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmGetDxSharedSurface();
	// "DwmGetDxSharedSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmGetRemoteSessionOcclusionEvent();
	// "DwmGetRemoteSessionOcclusionEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmGetRemoteSessionOcclusionState();
	// "DwmGetRemoteSessionOcclusionState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmKernelShutdown();
	// "DwmKernelShutdown" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmKernelStartup();
	// "DwmKernelStartup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmLockScreenUpdates();
	// "DwmLockScreenUpdates" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmValidateWindow();
	// "DwmValidateWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EditWndProc();
	// "EditWndProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EmptyClipboard();
	// "EmptyClipboard" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableMenuItem();
	// "EnableMenuItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableMouseInPointer();
	// "EnableMouseInPointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableNonClientDpiScaling();
	// "EnableNonClientDpiScaling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableScrollBar();
	// "EnableScrollBar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableSessionForMMCSS();
	// "EnableSessionForMMCSS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableWindow();
	// "EnableWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndDeferWindowPos();
	// "EndDeferWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndDeferWindowPosEx();
	// "EndDeferWindowPosEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndDialog();
	// "EndDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndMenu();
	// "EndMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndPaint();
	// "EndPaint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndTask();
	// "EndTask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnterReaderModeHelper();
	// "EnterReaderModeHelper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumChildWindows();
	// "EnumChildWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumClipboardFormats();
	// "EnumClipboardFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDesktopWindows();
	// "EnumDesktopWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDesktopsA();
	// "EnumDesktopsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDesktopsW();
	// "EnumDesktopsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplayDevicesA();
	// "EnumDisplayDevicesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplayDevicesW();
	// "EnumDisplayDevicesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplayMonitors();
	// "EnumDisplayMonitors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplaySettingsA();
	// "EnumDisplaySettingsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplaySettingsExA();
	// "EnumDisplaySettingsExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplaySettingsExW();
	// "EnumDisplaySettingsExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDisplaySettingsW();
	// "EnumDisplaySettingsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumPropsA();
	// "EnumPropsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumPropsExA();
	// "EnumPropsExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumPropsExW();
	// "EnumPropsExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumPropsW();
	// "EnumPropsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumThreadWindows();
	// "EnumThreadWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumWindowStationsA();
	// "EnumWindowStationsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumWindowStationsW();
	// "EnumWindowStationsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumWindows();
	// "EnumWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EqualRect();
	// "EqualRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EvaluateProximityToPolygon();
	// "EvaluateProximityToPolygon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EvaluateProximityToRect();
	// "EvaluateProximityToRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExcludeUpdateRgn();
	// "ExcludeUpdateRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExitWindowsEx();
	// "ExitWindowsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillRect();
	// "FillRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindWindowA();
	// "FindWindowA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindWindowExA();
	// "FindWindowExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindWindowExW();
	// "FindWindowExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindWindowW();
	// "FindWindowW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlashWindow();
	// "FlashWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlashWindowEx();
	// "FlashWindowEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FrameRect();
	// "FrameRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeDDElParam();
	// "FreeDDElParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FrostCrashedWindow();
	// "FrostCrashedWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetActiveWindow();
	// "GetActiveWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAltTabInfo();
	// "GetAltTabInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAltTabInfoA();
	// "GetAltTabInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAltTabInfoW();
	// "GetAltTabInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAncestor();
	// "GetAncestor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAppCompatFlags();
	// "GetAppCompatFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAppCompatFlags2();
	// "GetAppCompatFlags2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAsyncKeyState();
	// "GetAsyncKeyState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAutoRotationState();
	// "GetAutoRotationState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAwarenessFromDpiAwarenessContext();
	// "GetAwarenessFromDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCIMSSM();
	// "GetCIMSSM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCapture();
	// "GetCapture" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCaretBlinkTime();
	// "GetCaretBlinkTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCaretPos();
	// "GetCaretPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassInfoA();
	// "GetClassInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassInfoExA();
	// "GetClassInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassInfoExW();
	// "GetClassInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassInfoW();
	// "GetClassInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassLongA();
	// "GetClassLongA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassLongPtrA();
	// "GetClassLongPtrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassLongPtrW();
	// "GetClassLongPtrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassLongW();
	// "GetClassLongW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassNameA();
	// "GetClassNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassNameW();
	// "GetClassNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClassWord();
	// "GetClassWord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClientRect();
	// "GetClientRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipCursor();
	// "GetClipCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardAccessToken();
	// "GetClipboardAccessToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardData();
	// "GetClipboardData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardFormatNameA();
	// "GetClipboardFormatNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardFormatNameW();
	// "GetClipboardFormatNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardOwner();
	// "GetClipboardOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardSequenceNumber();
	// "GetClipboardSequenceNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipboardViewer();
	// "GetClipboardViewer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetComboBoxInfo();
	// "GetComboBoxInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentInputMessageSource();
	// "GetCurrentInputMessageSource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCursor();
	// "GetCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCursorFrameInfo();
	// "GetCursorFrameInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCursorInfo();
	// "GetCursorInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCursorPos();
	// "GetCursorPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDC();
	// "GetDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDCEx();
	// "GetDCEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDesktopID();
	// "GetDesktopID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDesktopWindow();
	// "GetDesktopWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDialogBaseUnits();
	// "GetDialogBaseUnits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDisplayAutoRotationPreferences();
	// "GetDisplayAutoRotationPreferences" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDisplayConfigBufferSizes();
	// "GetDisplayConfigBufferSizes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDlgCtrlID();
	// "GetDlgCtrlID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDlgItem();
	// "GetDlgItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDlgItemInt();
	// "GetDlgItemInt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDlgItemTextA();
	// "GetDlgItemTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDlgItemTextW();
	// "GetDlgItemTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDoubleClickTime();
	// "GetDoubleClickTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDpiForMonitorInternal();
	// "GetDpiForMonitorInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDpiForSystem();
	// "GetDpiForSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDpiForWindow();
	// "GetDpiForWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFocus();
	// "GetFocus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetForegroundWindow();
	// "GetForegroundWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGUIThreadInfo();
	// "GetGUIThreadInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGestureConfig();
	// "GetGestureConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGestureExtraArgs();
	// "GetGestureExtraArgs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGestureInfo();
	// "GetGestureInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGuiResources();
	// "GetGuiResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetIconInfo();
	// "GetIconInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetIconInfoExA();
	// "GetIconInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetIconInfoExW();
	// "GetIconInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInputDesktop();
	// "GetInputDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInputLocaleInfo();
	// "GetInputLocaleInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInputState();
	// "GetInputState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInternalWindowPos();
	// "GetInternalWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKBCodePage();
	// "GetKBCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyNameTextA();
	// "GetKeyNameTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyNameTextW();
	// "GetKeyNameTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyState();
	// "GetKeyState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardLayout();
	// "GetKeyboardLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardLayoutList();
	// "GetKeyboardLayoutList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardLayoutNameA();
	// "GetKeyboardLayoutNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardLayoutNameW();
	// "GetKeyboardLayoutNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardState();
	// "GetKeyboardState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKeyboardType();
	// "GetKeyboardType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLastActivePopup();
	// "GetLastActivePopup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLastInputInfo();
	// "GetLastInputInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLayeredWindowAttributes();
	// "GetLayeredWindowAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetListBoxInfo();
	// "GetListBoxInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMagnificationDesktopColorEffect();
	// "GetMagnificationDesktopColorEffect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMagnificationDesktopMagnification();
	// "GetMagnificationDesktopMagnification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMagnificationLensCtxInformation();
	// "GetMagnificationLensCtxInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenu();
	// "GetMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuBarInfo();
	// "GetMenuBarInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuCheckMarkDimensions();
	// "GetMenuCheckMarkDimensions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuContextHelpId();
	// "GetMenuContextHelpId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuDefaultItem();
	// "GetMenuDefaultItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuInfo();
	// "GetMenuInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuItemCount();
	// "GetMenuItemCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuItemID();
	// "GetMenuItemID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuItemInfoA();
	// "GetMenuItemInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuItemInfoW();
	// "GetMenuItemInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuItemRect();
	// "GetMenuItemRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuState();
	// "GetMenuState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuStringA();
	// "GetMenuStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMenuStringW();
	// "GetMenuStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMessageA();
	// "GetMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMessageExtraInfo();
	// "GetMessageExtraInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMessagePos();
	// "GetMessagePos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMessageTime();
	// "GetMessageTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMessageW();
	// "GetMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMonitorInfoA();
	// "GetMonitorInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMonitorInfoW();
	// "GetMonitorInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMouseMovePointsEx();
	// "GetMouseMovePointsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNextDlgGroupItem();
	// "GetNextDlgGroupItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNextDlgTabItem();
	// "GetNextDlgTabItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOpenClipboardWindow();
	// "GetOpenClipboardWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetParent();
	// "GetParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPhysicalCursorPos();
	// "GetPhysicalCursorPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerCursorId();
	// "GetPointerCursorId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerDevice();
	// "GetPointerDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerDeviceCursors();
	// "GetPointerDeviceCursors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerDeviceProperties();
	// "GetPointerDeviceProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerDeviceRects();
	// "GetPointerDeviceRects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerDevices();
	// "GetPointerDevices" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFrameArrivalTimes();
	// "GetPointerFrameArrivalTimes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFrameInfo();
	// "GetPointerFrameInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFrameInfoHistory();
	// "GetPointerFrameInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFramePenInfo();
	// "GetPointerFramePenInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFramePenInfoHistory();
	// "GetPointerFramePenInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFrameTouchInfo();
	// "GetPointerFrameTouchInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerFrameTouchInfoHistory();
	// "GetPointerFrameTouchInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerInfo();
	// "GetPointerInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerInfoHistory();
	// "GetPointerInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerInputTransform();
	// "GetPointerInputTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerPenInfo();
	// "GetPointerPenInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerPenInfoHistory();
	// "GetPointerPenInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerTouchInfo();
	// "GetPointerTouchInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerTouchInfoHistory();
	// "GetPointerTouchInfoHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPointerType();
	// "GetPointerType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPriorityClipboardFormat();
	// "GetPriorityClipboardFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessDefaultLayout();
	// "GetProcessDefaultLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessDpiAwarenessInternal();
	// "GetProcessDpiAwarenessInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessWindowStation();
	// "GetProcessWindowStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProgmanWindow();
	// "GetProgmanWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPropA();
	// "GetPropA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPropW();
	// "GetPropW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetQueueStatus();
	// "GetQueueStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawInputBuffer();
	// "GetRawInputBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawInputData();
	// "GetRawInputData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawInputDeviceInfoA();
	// "GetRawInputDeviceInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawInputDeviceInfoW();
	// "GetRawInputDeviceInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawInputDeviceList();
	// "GetRawInputDeviceList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRawPointerDeviceData();
	// "GetRawPointerDeviceData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetReasonTitleFromReasonCode();
	// "GetReasonTitleFromReasonCode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRegisteredRawInputDevices();
	// "GetRegisteredRawInputDevices" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetScrollBarInfo();
	// "GetScrollBarInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetScrollInfo();
	// "GetScrollInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetScrollPos();
	// "GetScrollPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetScrollRange();
	// "GetScrollRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSendMessageReceiver();
	// "GetSendMessageReceiver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetShellWindow();
	// "GetShellWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSubMenu();
	// "GetSubMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSysColor();
	// "GetSysColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSysColorBrush();
	// "GetSysColorBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemMenu();
	// "GetSystemMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemMetrics();
	// "GetSystemMetrics" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemMetricsForDpi();
	// "GetSystemMetricsForDpi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTabbedTextExtentA();
	// "GetTabbedTextExtentA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTabbedTextExtentW();
	// "GetTabbedTextExtentW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTaskmanWindow();
	// "GetTaskmanWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadDesktop();
	// "GetThreadDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadDpiAwarenessContext();
	// "GetThreadDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTitleBarInfo();
	// "GetTitleBarInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTopLevelWindow();
	// "GetTopLevelWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTopWindow();
	// "GetTopWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTouchInputInfo();
	// "GetTouchInputInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUnpredictedMessagePos();
	// "GetUnpredictedMessagePos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUpdateRect();
	// "GetUpdateRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUpdateRgn();
	// "GetUpdateRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUpdatedClipboardFormats();
	// "GetUpdatedClipboardFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserObjectInformationA();
	// "GetUserObjectInformationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserObjectInformationW();
	// "GetUserObjectInformationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserObjectSecurity();
	// "GetUserObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWinStationInfo();
	// "GetWinStationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindow();
	// "GetWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowBand();
	// "GetWindowBand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowCompositionAttribute();
	// "GetWindowCompositionAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowCompositionInfo();
	// "GetWindowCompositionInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowContextHelpId();
	// "GetWindowContextHelpId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowDC();
	// "GetWindowDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowDisplayAffinity();
	// "GetWindowDisplayAffinity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowDpiAwarenessContext();
	// "GetWindowDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowFeedbackSetting();
	// "GetWindowFeedbackSetting" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowInfo();
	// "GetWindowInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowLongA();
	// "GetWindowLongA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowLongPtrA();
	// "GetWindowLongPtrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowLongPtrW();
	// "GetWindowLongPtrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowLongW();
	// "GetWindowLongW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowMinimizeRect();
	// "GetWindowMinimizeRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowModuleFileName();
	// "GetWindowModuleFileName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowModuleFileNameA();
	// "GetWindowModuleFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowModuleFileNameW();
	// "GetWindowModuleFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowPlacement();
	// "GetWindowPlacement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowRect();
	// "GetWindowRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowRgn();
	// "GetWindowRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowRgnBox();
	// "GetWindowRgnBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowRgnEx();
	// "GetWindowRgnEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowTextA();
	// "GetWindowTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowTextLengthA();
	// "GetWindowTextLengthA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowTextLengthW();
	// "GetWindowTextLengthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowTextW();
	// "GetWindowTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowThreadProcessId();
	// "GetWindowThreadProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowWord();
	// "GetWindowWord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GhostWindowFromHungWindow();
	// "GhostWindowFromHungWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GrayStringA();
	// "GrayStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GrayStringW();
	// "GrayStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HideCaret();
	// "HideCaret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HiliteMenuItem();
	// "HiliteMenuItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HungWindowFromGhostWindow();
	// "HungWindowFromGhostWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPGetIMEA();
	// "IMPGetIMEA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPGetIMEW();
	// "IMPGetIMEW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPQueryIMEA();
	// "IMPQueryIMEA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPQueryIMEW();
	// "IMPQueryIMEW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPSetIMEA();
	// "IMPSetIMEA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IMPSetIMEW();
	// "IMPSetIMEW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImpersonateDdeClientWindow();
	// "ImpersonateDdeClientWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InSendMessage();
	// "InSendMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InSendMessageEx();
	// "InSendMessageEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InflateRect();
	// "InflateRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InheritWindowMonitor();
	// "InheritWindowMonitor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitDManipHook();
	// "InitDManipHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeInputDeviceInjection();
	// "InitializeInputDeviceInjection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeLpkHooks();
	// "InitializeLpkHooks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializePointerDeviceInjection();
	// "InitializePointerDeviceInjection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeTouchInjection();
	// "InitializeTouchInjection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InjectDeviceInput();
	// "InjectDeviceInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InjectKeyboardInput();
	// "InjectKeyboardInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InjectMouseInput();
	// "InjectMouseInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InjectPointerInput();
	// "InjectPointerInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InjectTouchInput();
	// "InjectTouchInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InsertMenuA();
	// "InsertMenuA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InsertMenuItemA();
	// "InsertMenuItemA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InsertMenuItemW();
	// "InsertMenuItemW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InsertMenuW();
	// "InsertMenuW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InternalGetWindowIcon();
	// "InternalGetWindowIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InternalGetWindowText();
	// "InternalGetWindowText" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IntersectRect();
	// "IntersectRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvalidateRect();
	// "InvalidateRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvalidateRgn();
	// "InvalidateRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvertRect();
	// "InvertRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharAlphaA();
	// "IsCharAlphaA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharAlphaNumericA();
	// "IsCharAlphaNumericA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharAlphaNumericW();
	// "IsCharAlphaNumericW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharAlphaW();
	// "IsCharAlphaW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharLowerA();
	// "IsCharLowerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharLowerW();
	// "IsCharLowerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharUpperA();
	// "IsCharUpperA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCharUpperW();
	// "IsCharUpperW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsChild();
	// "IsChild" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsClipboardFormatAvailable();
	// "IsClipboardFormatAvailable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDialogMessage();
	// "IsDialogMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDialogMessageA();
	// "IsDialogMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDialogMessageW();
	// "IsDialogMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDlgButtonChecked();
	// "IsDlgButtonChecked" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsGUIThread();
	// "IsGUIThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsHungAppWindow();
	// "IsHungAppWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsIconic();
	// "IsIconic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsImmersiveProcess();
	// "IsImmersiveProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsInDesktopWindowBand();
	// "IsInDesktopWindowBand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsMenu();
	// "IsMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsMouseInPointerEnabled();
	// "IsMouseInPointerEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsProcessDPIAware();
	// "IsProcessDPIAware" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsQueueAttached();
	// "IsQueueAttached" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsRectEmpty();
	// "IsRectEmpty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsSETEnabled();
	// "IsSETEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsServerSideWindow();
	// "IsServerSideWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsThreadDesktopComposited();
	// "IsThreadDesktopComposited" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsThreadMessageQueueAttached();
	// "IsThreadMessageQueueAttached" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsTopLevelWindow();
	// "IsTopLevelWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsTouchWindow();
	// "IsTouchWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidDpiAwarenessContext();
	// "IsValidDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWinEventHookInstalled();
	// "IsWinEventHookInstalled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindow();
	// "IsWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowArranged();
	// "IsWindowArranged" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowEnabled();
	// "IsWindowEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowInDestroy();
	// "IsWindowInDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowRedirectedForPrint();
	// "IsWindowRedirectedForPrint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowUnicode();
	// "IsWindowUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWindowVisible();
	// "IsWindowVisible" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWow64Message();
	// "IsWow64Message" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsZoomed();
	// "IsZoomed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KillTimer();
	// "KillTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadAcceleratorsA();
	// "LoadAcceleratorsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadAcceleratorsW();
	// "LoadAcceleratorsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadBitmapA();
	// "LoadBitmapA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadBitmapW();
	// "LoadBitmapW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadCursorA();
	// "LoadCursorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadCursorFromFileA();
	// "LoadCursorFromFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadCursorFromFileW();
	// "LoadCursorFromFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadCursorW();
	// "LoadCursorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadIconA();
	// "LoadIconA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadIconW();
	// "LoadIconW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadImageA();
	// "LoadImageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadImageW();
	// "LoadImageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadKeyboardLayoutA();
	// "LoadKeyboardLayoutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadKeyboardLayoutEx();
	// "LoadKeyboardLayoutEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadKeyboardLayoutW();
	// "LoadKeyboardLayoutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadLocalFonts();
	// "LoadLocalFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadMenuA();
	// "LoadMenuA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadMenuIndirectA();
	// "LoadMenuIndirectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadMenuIndirectW();
	// "LoadMenuIndirectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadMenuW();
	// "LoadMenuW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadRemoteFonts();
	// "LoadRemoteFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadStringA();
	// "LoadStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadStringW();
	// "LoadStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockSetForegroundWindow();
	// "LockSetForegroundWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockWindowStation();
	// "LockWindowStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockWindowUpdate();
	// "LockWindowUpdate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockWorkStation();
	// "LockWorkStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogicalToPhysicalPoint();
	// "LogicalToPhysicalPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogicalToPhysicalPointForPerMonitorDPI();
	// "LogicalToPhysicalPointForPerMonitorDPI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupIconIdFromDirectory();
	// "LookupIconIdFromDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupIconIdFromDirectoryEx();
	// "LookupIconIdFromDirectoryEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MBToWCSEx();
	// "MBToWCSEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MBToWCSExt();
	// "MBToWCSExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MB_GetString();
	// "MB_GetString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapDialogRect();
	// "MapDialogRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapVirtualKeyA();
	// "MapVirtualKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapVirtualKeyExA();
	// "MapVirtualKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapVirtualKeyExW();
	// "MapVirtualKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapVirtualKeyW();
	// "MapVirtualKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapWindowPoints();
	// "MapWindowPoints" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MenuItemFromPoint();
	// "MenuItemFromPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MenuWindowProcA();
	// "MenuWindowProcA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MenuWindowProcW();
	// "MenuWindowProcW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBeep();
	// "MessageBeep" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxA();
	// "MessageBoxA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxExA();
	// "MessageBoxExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxExW();
	// "MessageBoxExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxIndirectA();
	// "MessageBoxIndirectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxIndirectW();
	// "MessageBoxIndirectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxTimeoutA();
	// "MessageBoxTimeoutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxTimeoutW();
	// "MessageBoxTimeoutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MessageBoxW();
	// "MessageBoxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ModifyMenuA();
	// "ModifyMenuA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ModifyMenuW();
	// "ModifyMenuW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MonitorFromPoint();
	// "MonitorFromPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MonitorFromRect();
	// "MonitorFromRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MonitorFromWindow();
	// "MonitorFromWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveWindow();
	// "MoveWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MsgWaitForMultipleObjects();
	// "MsgWaitForMultipleObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MsgWaitForMultipleObjectsEx();
	// "MsgWaitForMultipleObjectsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyOverlayWindow();
	// "NotifyOverlayWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyWinEvent();
	// "NotifyWinEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OemKeyScan();
	// "OemKeyScan" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OemToCharA();
	// "OemToCharA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OemToCharBuffA();
	// "OemToCharBuffA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OemToCharBuffW();
	// "OemToCharBuffW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OemToCharW();
	// "OemToCharW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OffsetRect();
	// "OffsetRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenClipboard();
	// "OpenClipboard" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenDesktopA();
	// "OpenDesktopA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenDesktopW();
	// "OpenDesktopW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenIcon();
	// "OpenIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenInputDesktop();
	// "OpenInputDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenThreadDesktop();
	// "OpenThreadDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenWindowStationA();
	// "OpenWindowStationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenWindowStationW();
	// "OpenWindowStationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackDDElParam();
	// "PackDDElParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackTouchHitTestingProximityEvaluation();
	// "PackTouchHitTestingProximityEvaluation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PaintDesktop();
	// "PaintDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PaintMenuBar();
	// "PaintMenuBar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PaintMonitor();
	// "PaintMonitor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PeekMessageA();
	// "PeekMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PeekMessageW();
	// "PeekMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PhysicalToLogicalPoint();
	// "PhysicalToLogicalPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PhysicalToLogicalPointForPerMonitorDPI();
	// "PhysicalToLogicalPointForPerMonitorDPI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostMessageA();
	// "PostMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostMessageW();
	// "PostMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostQuitMessage();
	// "PostQuitMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostThreadMessageA();
	// "PostThreadMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostThreadMessageW();
	// "PostThreadMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrintWindow();
	// "PrintWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivateExtractIconExA();
	// "PrivateExtractIconExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivateExtractIconExW();
	// "PrivateExtractIconExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivateExtractIconsA();
	// "PrivateExtractIconsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivateExtractIconsW();
	// "PrivateExtractIconsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivateRegisterICSProc();
	// "PrivateRegisterICSProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PtInRect();
	// "PtInRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryBSDRWindow();
	// "QueryBSDRWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryDisplayConfig();
	// "QueryDisplayConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuerySendMessage();
	// "QuerySendMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMAddInputObserver();
	// "RIMAddInputObserver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMAreSiblingDevices();
	// "RIMAreSiblingDevices" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMDeviceIoControl();
	// "RIMDeviceIoControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMFreeInputBuffer();
	// "RIMFreeInputBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMGetDevicePreparsedData();
	// "RIMGetDevicePreparsedData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMGetDevicePreparsedDataLockfree();
	// "RIMGetDevicePreparsedDataLockfree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMGetDeviceProperties();
	// "RIMGetDeviceProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMGetPhysicalDeviceRect();
	// "RIMGetPhysicalDeviceRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMGetSourceProcessId();
	// "RIMGetSourceProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMObserveNextInput();
	// "RIMObserveNextInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMOnPnpNotification();
	// "RIMOnPnpNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMOnTimerNotification();
	// "RIMOnTimerNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMReadInput();
	// "RIMReadInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMRegisterForInput();
	// "RIMRegisterForInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMRemoveInputObserver();
	// "RIMRemoveInputObserver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMSetTestModeStatus();
	// "RIMSetTestModeStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMUnregisterForInput();
	// "RIMUnregisterForInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RIMUpdateInputObserverRegistration();
	// "RIMUpdateInputObserverRegistration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealChildWindowFromPoint();
	// "RealChildWindowFromPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealGetWindowClass();
	// "RealGetWindowClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealGetWindowClassA();
	// "RealGetWindowClassA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealGetWindowClassW();
	// "RealGetWindowClassW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReasonCodeNeedsBugID();
	// "ReasonCodeNeedsBugID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReasonCodeNeedsComment();
	// "ReasonCodeNeedsComment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RecordShutdownReason();
	// "RecordShutdownReason" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RedrawWindow();
	// "RedrawWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterBSDRWindow();
	// "RegisterBSDRWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClassA();
	// "RegisterClassA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClassExA();
	// "RegisterClassExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClassExW();
	// "RegisterClassExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClassW();
	// "RegisterClassW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClipboardFormatA();
	// "RegisterClipboardFormatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterClipboardFormatW();
	// "RegisterClipboardFormatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterDManipHook();
	// "RegisterDManipHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterDeviceNotificationA();
	// "RegisterDeviceNotificationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterDeviceNotificationW();
	// "RegisterDeviceNotificationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterErrorReportingDialog();
	// "RegisterErrorReportingDialog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterFrostWindow();
	// "RegisterFrostWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterGhostWindow();
	// "RegisterGhostWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterHotKey();
	// "RegisterHotKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterLogonProcess();
	// "RegisterLogonProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterManipulationThread();
	// "RegisterManipulationThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterMessagePumpHook();
	// "RegisterMessagePumpHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterPointerDeviceNotifications();
	// "RegisterPointerDeviceNotifications" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterPointerInputTarget();
	// "RegisterPointerInputTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterPointerInputTargetEx();
	// "RegisterPointerInputTargetEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterPowerSettingNotification();
	// "RegisterPowerSettingNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterRawInputDevices();
	// "RegisterRawInputDevices" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterServicesProcess();
	// "RegisterServicesProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterSessionPort();
	// "RegisterSessionPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterShellHookWindow();
	// "RegisterShellHookWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterSuspendResumeNotification();
	// "RegisterSuspendResumeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterSystemThread();
	// "RegisterSystemThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterTasklist();
	// "RegisterTasklist" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterTouchHitTestingWindow();
	// "RegisterTouchHitTestingWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterTouchWindow();
	// "RegisterTouchWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterUserApiHook();
	// "RegisterUserApiHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWindowMessageA();
	// "RegisterWindowMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWindowMessageW();
	// "RegisterWindowMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseCapture();
	// "ReleaseCapture" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseDC();
	// "ReleaseDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseDwmHitTestWaiters();
	// "ReleaseDwmHitTestWaiters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveClipboardFormatListener();
	// "RemoveClipboardFormatListener" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveInjectionDevice();
	// "RemoveInjectionDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveMenu();
	// "RemoveMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemovePropA();
	// "RemovePropA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemovePropW();
	// "RemovePropW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReplyMessage();
	// "ReplyMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResolveDesktopForWOW();
	// "ResolveDesktopForWOW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReuseDDElParam();
	// "ReuseDDElParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScreenToClient();
	// "ScreenToClient" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollChildren();
	// "ScrollChildren" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollDC();
	// "ScrollDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollWindow();
	// "ScrollWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollWindowEx();
	// "ScrollWindowEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendDlgItemMessageA();
	// "SendDlgItemMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendDlgItemMessageW();
	// "SendDlgItemMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendIMEMessageExA();
	// "SendIMEMessageExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendIMEMessageExW();
	// "SendIMEMessageExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendInput();
	// "SendInput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageA();
	// "SendMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageCallbackA();
	// "SendMessageCallbackA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageCallbackW();
	// "SendMessageCallbackW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageTimeoutA();
	// "SendMessageTimeoutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageTimeoutW();
	// "SendMessageTimeoutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendMessageW();
	// "SendMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendNotifyMessageA();
	// "SendNotifyMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SendNotifyMessageW();
	// "SendNotifyMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetActiveWindow();
	// "SetActiveWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCapture();
	// "SetCapture" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCaretBlinkTime();
	// "SetCaretBlinkTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCaretPos();
	// "SetCaretPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClassLongA();
	// "SetClassLongA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClassLongPtrA();
	// "SetClassLongPtrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClassLongPtrW();
	// "SetClassLongPtrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClassLongW();
	// "SetClassLongW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClassWord();
	// "SetClassWord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClipboardData();
	// "SetClipboardData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetClipboardViewer();
	// "SetClipboardViewer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCoalescableTimer();
	// "SetCoalescableTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCursor();
	// "SetCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCursorContents();
	// "SetCursorContents" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCursorPos();
	// "SetCursorPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDebugErrorLevel();
	// "SetDebugErrorLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDeskWallpaper();
	// "SetDeskWallpaper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDisplayAutoRotationPreferences();
	// "SetDisplayAutoRotationPreferences" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDisplayConfig();
	// "SetDisplayConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDlgItemInt();
	// "SetDlgItemInt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDlgItemTextA();
	// "SetDlgItemTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDlgItemTextW();
	// "SetDlgItemTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDoubleClickTime();
	// "SetDoubleClickTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFeatureReportResponse();
	// "SetFeatureReportResponse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFocus();
	// "SetFocus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetForegroundWindow();
	// "SetForegroundWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetGestureConfig();
	// "SetGestureConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetInternalWindowPos();
	// "SetInternalWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetKeyboardState();
	// "SetKeyboardState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLastErrorEx();
	// "SetLastErrorEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLayeredWindowAttributes();
	// "SetLayeredWindowAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMagnificationDesktopColorEffect();
	// "SetMagnificationDesktopColorEffect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMagnificationDesktopMagnification();
	// "SetMagnificationDesktopMagnification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMagnificationLensCtxInformation();
	// "SetMagnificationLensCtxInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetManipulationInputTarget();
	// "SetManipulationInputTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenu();
	// "SetMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuContextHelpId();
	// "SetMenuContextHelpId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuDefaultItem();
	// "SetMenuDefaultItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuInfo();
	// "SetMenuInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuItemBitmaps();
	// "SetMenuItemBitmaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuItemInfoA();
	// "SetMenuItemInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMenuItemInfoW();
	// "SetMenuItemInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMessageExtraInfo();
	// "SetMessageExtraInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMessageQueue();
	// "SetMessageQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMirrorRendering();
	// "SetMirrorRendering" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetParent();
	// "SetParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPhysicalCursorPos();
	// "SetPhysicalCursorPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDPIAware();
	// "SetProcessDPIAware" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDefaultLayout();
	// "SetProcessDefaultLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDpiAwarenessContext();
	// "SetProcessDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDpiAwarenessInternal();
	// "SetProcessDpiAwarenessInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessRestrictionExemption();
	// "SetProcessRestrictionExemption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessWindowStation();
	// "SetProcessWindowStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProgmanWindow();
	// "SetProgmanWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPropA();
	// "SetPropA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPropW();
	// "SetPropW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetRect();
	// "SetRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetRectEmpty();
	// "SetRectEmpty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetScrollInfo();
	// "SetScrollInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetScrollPos();
	// "SetScrollPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetScrollRange();
	// "SetScrollRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetShellWindow();
	// "SetShellWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetShellWindowEx();
	// "SetShellWindowEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSysColors();
	// "SetSysColors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSysColorsTemp();
	// "SetSysColorsTemp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemCursor();
	// "SetSystemCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemMenu();
	// "SetSystemMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTaskmanWindow();
	// "SetTaskmanWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadDesktop();
	// "SetThreadDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadDpiAwarenessContext();
	// "SetThreadDpiAwarenessContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadInputBlocked();
	// "SetThreadInputBlocked" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTimer();
	// "SetTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserObjectInformationA();
	// "SetUserObjectInformationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserObjectInformationW();
	// "SetUserObjectInformationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserObjectSecurity();
	// "SetUserObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWinEventHook();
	// "SetWinEventHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowBand();
	// "SetWindowBand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowCompositionAttribute();
	// "SetWindowCompositionAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowCompositionTransition();
	// "SetWindowCompositionTransition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowContextHelpId();
	// "SetWindowContextHelpId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowDisplayAffinity();
	// "SetWindowDisplayAffinity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowFeedbackSetting();
	// "SetWindowFeedbackSetting" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowLongA();
	// "SetWindowLongA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowLongPtrA();
	// "SetWindowLongPtrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowLongPtrW();
	// "SetWindowLongPtrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowLongW();
	// "SetWindowLongW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowPlacement();
	// "SetWindowPlacement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowPos();
	// "SetWindowPos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowRgn();
	// "SetWindowRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowRgnEx();
	// "SetWindowRgnEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowStationUser();
	// "SetWindowStationUser" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowTextA();
	// "SetWindowTextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowTextW();
	// "SetWindowTextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowWord();
	// "SetWindowWord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowsHookA();
	// "SetWindowsHookA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowsHookExA();
	// "SetWindowsHookExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowsHookExW();
	// "SetWindowsHookExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowsHookW();
	// "SetWindowsHookW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowCaret();
	// "ShowCaret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowCursor();
	// "ShowCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowOwnedPopups();
	// "ShowOwnedPopups" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowScrollBar();
	// "ShowScrollBar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowStartGlass();
	// "ShowStartGlass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowSystemCursor();
	// "ShowSystemCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowWindow();
	// "ShowWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowWindowAsync();
	// "ShowWindowAsync" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShutdownBlockReasonCreate();
	// "ShutdownBlockReasonCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShutdownBlockReasonDestroy();
	// "ShutdownBlockReasonDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShutdownBlockReasonQuery();
	// "ShutdownBlockReasonQuery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SignalRedirectionStartComplete();
	// "SignalRedirectionStartComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SkipPointerFrameMessages();
	// "SkipPointerFrameMessages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SoftModalMessageBox();
	// "SoftModalMessageBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SoundSentry();
	// "SoundSentry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SubtractRect();
	// "SubtractRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwapMouseButton();
	// "SwapMouseButton" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwitchDesktop();
	// "SwitchDesktop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwitchDesktopWithFade();
	// "SwitchDesktopWithFade" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwitchToThisWindow();
	// "SwitchToThisWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemParametersInfoA();
	// "SystemParametersInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemParametersInfoForDpi();
	// "SystemParametersInfoForDpi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemParametersInfoW();
	// "SystemParametersInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TabbedTextOutA();
	// "TabbedTextOutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TabbedTextOutW();
	// "TabbedTextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TileChildWindows();
	// "TileChildWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TileWindows();
	// "TileWindows" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ToAscii();
	// "ToAscii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ToAsciiEx();
	// "ToAsciiEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ToUnicode();
	// "ToUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ToUnicodeEx();
	// "ToUnicodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrackMouseEvent();
	// "TrackMouseEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrackPopupMenu();
	// "TrackPopupMenu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrackPopupMenuEx();
	// "TrackPopupMenuEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateAccelerator();
	// "TranslateAccelerator" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateAcceleratorA();
	// "TranslateAcceleratorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateAcceleratorW();
	// "TranslateAcceleratorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateMDISysAccel();
	// "TranslateMDISysAccel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateMessage();
	// "TranslateMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateMessageEx();
	// "TranslateMessageEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnhookWinEvent();
	// "UnhookWinEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnhookWindowsHook();
	// "UnhookWindowsHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnhookWindowsHookEx();
	// "UnhookWindowsHookEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnionRect();
	// "UnionRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnloadKeyboardLayout();
	// "UnloadKeyboardLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnlockWindowStation();
	// "UnlockWindowStation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnpackDDElParam();
	// "UnpackDDElParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterClassA();
	// "UnregisterClassA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterClassW();
	// "UnregisterClassW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterDeviceNotification();
	// "UnregisterDeviceNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterHotKey();
	// "UnregisterHotKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterMessagePumpHook();
	// "UnregisterMessagePumpHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterPointerInputTarget();
	// "UnregisterPointerInputTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterPointerInputTargetEx();
	// "UnregisterPointerInputTargetEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterPowerSettingNotification();
	// "UnregisterPowerSettingNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterSessionPort();
	// "UnregisterSessionPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterSuspendResumeNotification();
	// "UnregisterSuspendResumeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterTouchWindow();
	// "UnregisterTouchWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterUserApiHook();
	// "UnregisterUserApiHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateDefaultDesktopThumbnail();
	// "UpdateDefaultDesktopThumbnail" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateLayeredWindow();
	// "UpdateLayeredWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateLayeredWindowIndirect();
	// "UpdateLayeredWindowIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdatePerUserSystemParameters();
	// "UpdatePerUserSystemParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateWindow();
	// "UpdateWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateWindowInputSinkHints();
	// "UpdateWindowInputSinkHints" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateWindowTransform();
	// "UpdateWindowTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall User32InitializeImmEntryTable();
	// "User32InitializeImmEntryTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserClientDllInitialize();
	// "UserClientDllInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserHandleGrantAccess();
	// "UserHandleGrantAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserLpkPSMTextOut();
	// "UserLpkPSMTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserLpkTabbedTextOut();
	// "UserLpkTabbedTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserRealizePalette();
	// "UserRealizePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UserRegisterWowHandlers();
	// "UserRegisterWowHandlers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VRipOutput();
	// "VRipOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VTagOutput();
	// "VTagOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ValidateRect();
	// "ValidateRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ValidateRgn();
	// "ValidateRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VkKeyScanA();
	// "VkKeyScanA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VkKeyScanExA();
	// "VkKeyScanExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VkKeyScanExW();
	// "VkKeyScanExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VkKeyScanW();
	// "VkKeyScanW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WCSToMBEx();
	// "WCSToMBEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WINNLSEnableIME();
	// "WINNLSEnableIME" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WINNLSGetEnableStatus();
	// "WINNLSGetEnableStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WINNLSGetIMEHotkey();
	// "WINNLSGetIMEHotkey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForInputIdle();
	// "WaitForInputIdle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForRedirectionStartComplete();
	// "WaitForRedirectionStartComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitMessage();
	// "WaitMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinHelpA();
	// "WinHelpA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinHelpW();
	// "WinHelpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WindowFromDC();
	// "WindowFromDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WindowFromPhysicalPoint();
	// "WindowFromPhysicalPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WindowFromPoint();
	// "WindowFromPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _UserTestTokenForInteractive();
	// "_UserTestTokenForInteractive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall gSharedInfo();
	// "gSharedInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall gapfnScSendMessage();
	// "gapfnScSendMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall keybd_event();
	// "keybd_event" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall mouse_event();
	// "mouse_event" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wsprintfA();
	// "wsprintfA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wsprintfW();
	// "wsprintfW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wvsprintfA();
	// "wvsprintfA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wvsprintfW();
	// "wvsprintfW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = user32;

// exports
module.exports = user32;