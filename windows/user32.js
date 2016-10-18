// javascript ffi interface for user32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

var user32 = ffi.Library( "user32.dll" ,
{
	// "ActivateKeyboardLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddClipboardFormatListener" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AdjustWindowRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AdjustWindowRectEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AdjustWindowRectExForDpi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AlignRects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AllowForegroundActivation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AllowSetForegroundWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AnimateWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AnyPopup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AppendMenuA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AppendMenuW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AreDpiAwarenessContextsEqual" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ArrangeIconicWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AttachThreadInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BeginDeferWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BeginPaint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BlockInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BringWindowToTop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BroadcastSystemMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BroadcastSystemMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BroadcastSystemMessageExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BroadcastSystemMessageExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BroadcastSystemMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildReasonArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CalcMenuBar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CalculatePopupWindowPosition" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallMsgFilter" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallMsgFilterA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallMsgFilterW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallNextHookEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallWindowProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CallWindowProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CancelShutdown" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CascadeChildWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CascadeWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeClipboardChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeDisplaySettingsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeDisplaySettingsExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeDisplaySettingsExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeDisplaySettingsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeMenuA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeMenuW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeWindowMessageFilter" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeWindowMessageFilterEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharLowerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharLowerBuffA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharLowerBuffW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharLowerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharNextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharNextExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharNextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharPrevA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharPrevExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharPrevW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharToOemA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharToOemBuffA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharToOemBuffW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharToOemW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharUpperA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharUpperBuffA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharUpperBuffW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CharUpperW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckDBCSEnabledExt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckDlgButton" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckMenuItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckMenuRadioItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckProcessForClipboardAccess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckProcessSession" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckRadioButton" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckWindowThreadDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChildWindowFromPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChildWindowFromPointEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CliImmSetHotKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClientThreadSetup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClientToScreen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClipCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseClipboard" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseGestureInfoHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseTouchInputHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseWindowStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConsoleControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlMagnification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyAcceleratorTableA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyAcceleratorTableW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyImage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CountClipboardFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateAcceleratorTableA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateAcceleratorTableW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateCaret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDCompositionHwndTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDesktopA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDesktopExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDesktopExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDesktopW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDialogIndirectParamA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDialogIndirectParamAorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDialogIndirectParamW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDialogParamA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDialogParamW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateIconFromResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateIconFromResourceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateIconIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateMDIWindowA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateMDIWindowW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePopupMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateSystemThreads" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowInBand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowInBandEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowStationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWindowStationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CsrBroadcastSystemMessageExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CtxInitUser32" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeAbandonTransaction" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeAccessData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeAddData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeClientTransaction" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeCmpStringHandles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeConnect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeConnectList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeCreateDataHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeCreateStringHandleA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeCreateStringHandleW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeDisconnect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeDisconnectList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeEnableCallback" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeFreeDataHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeFreeStringHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeGetData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeGetLastError" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeGetQualityOfService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeImpersonateClient" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeInitializeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeInitializeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeKeepStringHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeNameService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdePostAdvise" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeQueryConvInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeQueryNextServer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeQueryStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeQueryStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeReconnect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeSetQualityOfService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeSetUserHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeUnaccessData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdeUninitialize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefDlgProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefDlgProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefFrameProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefFrameProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefMDIChildProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefMDIChildProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefRawInputProc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefWindowProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DefWindowProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeferWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeferWindowPosAndBand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeregisterShellHookWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyAcceleratorTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyCaret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyDCompositionHwndTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyReasons" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DialogBoxIndirectParamA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DialogBoxIndirectParamAorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DialogBoxIndirectParamW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DialogBoxParamA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DialogBoxParamW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DisableProcessWindowsGhosting" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DispatchMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DispatchMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DisplayConfigGetDeviceInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DisplayConfigSetDeviceInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DisplayExitWindowsWarnings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirListComboBoxA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirListComboBoxW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirSelectComboBoxExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirSelectComboBoxExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirSelectExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DlgDirSelectExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DoSoundConnect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DoSoundDisconnect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragDetect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DragObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawAnimatedRects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawCaption" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawCaptionTempA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawCaptionTempW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawEdge" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawFocusRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawFrame" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawFrameControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawIconEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawMenuBar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawMenuBarTemp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawStateA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawStateW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawTextExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawTextExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmGetDxSharedSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmGetRemoteSessionOcclusionEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmGetRemoteSessionOcclusionState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmKernelShutdown" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmKernelStartup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmLockScreenUpdates" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmValidateWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EditWndProc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EmptyClipboard" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableMenuItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableMouseInPointer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableNonClientDpiScaling" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableScrollBar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableSessionForMMCSS" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndDeferWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndDeferWindowPosEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndPaint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndTask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnterReaderModeHelper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumChildWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumClipboardFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDesktopWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDesktopsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDesktopsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplayDevicesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplayDevicesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplayMonitors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplaySettingsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplaySettingsExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplaySettingsExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDisplaySettingsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumPropsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumPropsExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumPropsExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumPropsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumThreadWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumWindowStationsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumWindowStationsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EqualRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EvaluateProximityToPolygon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EvaluateProximityToRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExcludeUpdateRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExitWindowsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FillRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindWindowA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindWindowExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindWindowExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindWindowW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlashWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlashWindowEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FrameRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeDDElParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FrostCrashedWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetActiveWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAltTabInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAltTabInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAltTabInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAncestor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAppCompatFlags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAppCompatFlags2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAsyncKeyState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAutoRotationState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAwarenessFromDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCIMSSM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCapture" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCaretBlinkTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCaretPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassLongA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassLongPtrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassLongPtrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassLongW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClassWord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClientRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardAccessToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardFormatNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardFormatNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardOwner" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardSequenceNumber" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipboardViewer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetComboBoxInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentInputMessageSource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCursorFrameInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCursorInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCursorPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDCEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDesktopID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDesktopWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDialogBaseUnits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDisplayAutoRotationPreferences" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDisplayConfigBufferSizes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDlgCtrlID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDlgItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDlgItemInt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDlgItemTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDlgItemTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDoubleClickTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDpiForMonitorInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDpiForSystem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDpiForWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFocus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetForegroundWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGUIThreadInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGestureConfig" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGestureExtraArgs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGestureInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGuiResources" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetIconInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetIconInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetIconInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInputDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInputLocaleInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInputState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInternalWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKBCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyNameTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyNameTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardLayoutList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardLayoutNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardLayoutNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKeyboardType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLastActivePopup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLastInputInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLayeredWindowAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetListBoxInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMagnificationDesktopColorEffect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMagnificationDesktopMagnification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMagnificationLensCtxInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuBarInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuCheckMarkDimensions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuContextHelpId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuDefaultItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuItemCount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuItemID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuItemInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuItemInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuItemRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMenuStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMessageExtraInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMessagePos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMessageTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMonitorInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMonitorInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMouseMovePointsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNextDlgGroupItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNextDlgTabItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOpenClipboardWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPhysicalCursorPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerCursorId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerDeviceCursors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerDeviceProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerDeviceRects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerDevices" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFrameArrivalTimes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFrameInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFrameInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFramePenInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFramePenInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFrameTouchInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerFrameTouchInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerInputTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerPenInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerPenInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerTouchInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerTouchInfoHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPointerType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPriorityClipboardFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetProcessDefaultLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetProcessDpiAwarenessInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetProcessWindowStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetProgmanWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPropA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPropW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetQueueStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawInputBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawInputData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawInputDeviceInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawInputDeviceInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawInputDeviceList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRawPointerDeviceData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetReasonTitleFromReasonCode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRegisteredRawInputDevices" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetScrollBarInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetScrollInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetScrollPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetScrollRange" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSendMessageReceiver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetShellWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSubMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSysColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSysColorBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemMetrics" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemMetricsForDpi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTabbedTextExtentA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTabbedTextExtentW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTaskmanWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetThreadDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetThreadDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTitleBarInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTopLevelWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTopWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTouchInputInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUnpredictedMessagePos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUpdateRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUpdateRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUpdatedClipboardFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUserObjectInformationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUserObjectInformationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUserObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWinStationInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowBand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowCompositionAttribute" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowCompositionInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowContextHelpId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowDisplayAffinity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowFeedbackSetting" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowLongA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowLongPtrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowLongPtrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowLongW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowMinimizeRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowModuleFileName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowModuleFileNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowModuleFileNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowPlacement" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowRgnBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowRgnEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowTextLengthA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowTextLengthW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowThreadProcessId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowWord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GhostWindowFromHungWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GrayStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GrayStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HideCaret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HiliteMenuItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HungWindowFromGhostWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPGetIMEA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPGetIMEW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPQueryIMEA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPQueryIMEW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPSetIMEA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IMPSetIMEW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ImpersonateDdeClientWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InSendMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InSendMessageEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InflateRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InheritWindowMonitor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitDManipHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeInputDeviceInjection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeLpkHooks" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializePointerDeviceInjection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeTouchInjection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InjectDeviceInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InjectKeyboardInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InjectMouseInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InjectPointerInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InjectTouchInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InsertMenuA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InsertMenuItemA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InsertMenuItemW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InsertMenuW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InternalGetWindowIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InternalGetWindowText" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IntersectRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InvalidateRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InvalidateRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InvertRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharAlphaA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharAlphaNumericA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharAlphaNumericW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharAlphaW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharLowerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharLowerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharUpperA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsCharUpperW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsChild" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsClipboardFormatAvailable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsDialogMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsDialogMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsDialogMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsDlgButtonChecked" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsGUIThread" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsHungAppWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsIconic" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsImmersiveProcess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsInDesktopWindowBand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsMouseInPointerEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsProcessDPIAware" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsQueueAttached" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsRectEmpty" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsSETEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsServerSideWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsThreadDesktopComposited" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsThreadMessageQueueAttached" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsTopLevelWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsTouchWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWinEventHookInstalled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowArranged" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowInDestroy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowRedirectedForPrint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowUnicode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWindowVisible" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWow64Message" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsZoomed" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "KillTimer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadAcceleratorsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadAcceleratorsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadBitmapA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadBitmapW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadCursorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadCursorFromFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadCursorFromFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadCursorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadIconA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadIconW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadImageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadImageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadKeyboardLayoutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadKeyboardLayoutEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadKeyboardLayoutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadLocalFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadMenuA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadMenuIndirectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadMenuIndirectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadMenuW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadRemoteFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LoadStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LockSetForegroundWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LockWindowStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LockWindowUpdate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LockWorkStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogicalToPhysicalPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogicalToPhysicalPointForPerMonitorDPI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupIconIdFromDirectory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupIconIdFromDirectoryEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MBToWCSEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MBToWCSExt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MB_GetString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapDialogRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapVirtualKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapVirtualKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapVirtualKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapVirtualKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapWindowPoints" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MenuItemFromPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MenuWindowProcA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MenuWindowProcW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBeep" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxIndirectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxIndirectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxTimeoutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxTimeoutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MessageBoxW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ModifyMenuA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ModifyMenuW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MonitorFromPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MonitorFromRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MonitorFromWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MoveWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MsgWaitForMultipleObjects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MsgWaitForMultipleObjectsEx" : 
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

	// "NotifyOverlayWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyWinEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OemKeyScan" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OemToCharA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OemToCharBuffA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OemToCharBuffW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OemToCharW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OffsetRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenClipboard" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenDesktopA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenDesktopW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenIcon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenInputDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenThreadDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenWindowStationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenWindowStationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PackDDElParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PackTouchHitTestingProximityEvaluation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PaintDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PaintMenuBar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PaintMonitor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PeekMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PeekMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PhysicalToLogicalPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PhysicalToLogicalPointForPerMonitorDPI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PostMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PostMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PostQuitMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PostThreadMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PostThreadMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrintWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivateExtractIconExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivateExtractIconExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivateExtractIconsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivateExtractIconsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivateRegisterICSProc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PtInRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryBSDRWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryDisplayConfig" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QuerySendMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMAddInputObserver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMAreSiblingDevices" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMDeviceIoControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMFreeInputBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMGetDevicePreparsedData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMGetDevicePreparsedDataLockfree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMGetDeviceProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMGetPhysicalDeviceRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMGetSourceProcessId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMObserveNextInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMOnPnpNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMOnTimerNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMReadInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMRegisterForInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMRemoveInputObserver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMSetTestModeStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMUnregisterForInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RIMUpdateInputObserverRegistration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealChildWindowFromPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealGetWindowClass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealGetWindowClassA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealGetWindowClassW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReasonCodeNeedsBugID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReasonCodeNeedsComment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RecordShutdownReason" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RedrawWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterBSDRWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClassA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClassExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClassExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClassW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClipboardFormatA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterClipboardFormatW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterDManipHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterDeviceNotificationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterDeviceNotificationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterErrorReportingDialog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterFrostWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterGhostWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterHotKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterLogonProcess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterManipulationThread" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterMessagePumpHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterPointerDeviceNotifications" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterPointerInputTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterPointerInputTargetEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterPowerSettingNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterRawInputDevices" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterServicesProcess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterSessionPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterShellHookWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterSuspendResumeNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterSystemThread" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterTasklist" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterTouchHitTestingWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterTouchWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterUserApiHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterWindowMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterWindowMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReleaseCapture" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReleaseDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReleaseDwmHitTestWaiters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveClipboardFormatListener" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveInjectionDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemovePropA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemovePropW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReplyMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResolveDesktopForWOW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReuseDDElParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScreenToClient" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScrollChildren" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScrollDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScrollWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScrollWindowEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendDlgItemMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendDlgItemMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendIMEMessageExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendIMEMessageExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendInput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageCallbackA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageCallbackW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageTimeoutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageTimeoutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendNotifyMessageA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SendNotifyMessageW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetActiveWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCapture" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCaretBlinkTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCaretPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClassLongA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClassLongPtrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClassLongPtrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClassLongW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClassWord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClipboardData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetClipboardViewer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCoalescableTimer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCursorContents" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetCursorPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDebugErrorLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDeskWallpaper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDisplayAutoRotationPreferences" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDisplayConfig" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDlgItemInt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDlgItemTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDlgItemTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDoubleClickTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetFeatureReportResponse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetFocus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetForegroundWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetGestureConfig" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetInternalWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetKeyboardState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetLastErrorEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetLayeredWindowAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMagnificationDesktopColorEffect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMagnificationDesktopMagnification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMagnificationLensCtxInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetManipulationInputTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuContextHelpId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuDefaultItem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuItemBitmaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuItemInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMenuItemInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMessageExtraInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMessageQueue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMirrorRendering" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetParent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPhysicalCursorPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessDPIAware" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessDefaultLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessDpiAwarenessInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessRestrictionExemption" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProcessWindowStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetProgmanWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPropA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPropW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetRectEmpty" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetScrollInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetScrollPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetScrollRange" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetShellWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetShellWindowEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSysColors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSysColorsTemp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSystemCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSystemMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTaskmanWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetThreadDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetThreadDpiAwarenessContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetThreadInputBlocked" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTimer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetUserObjectInformationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetUserObjectInformationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetUserObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWinEventHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowBand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowCompositionAttribute" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowCompositionTransition" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowContextHelpId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowDisplayAffinity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowFeedbackSetting" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowLongA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowLongPtrA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowLongPtrW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowLongW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowPlacement" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowPos" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowRgnEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowStationUser" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowTextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowTextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowWord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowsHookA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowsHookExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowsHookExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowsHookW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowCaret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowOwnedPopups" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowScrollBar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowStartGlass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowSystemCursor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShowWindowAsync" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShutdownBlockReasonCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShutdownBlockReasonDestroy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ShutdownBlockReasonQuery" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SignalRedirectionStartComplete" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SkipPointerFrameMessages" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SoftModalMessageBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SoundSentry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SubtractRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SwapMouseButton" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SwitchDesktop" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SwitchDesktopWithFade" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SwitchToThisWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemParametersInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemParametersInfoForDpi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemParametersInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TabbedTextOutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TabbedTextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TileChildWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TileWindows" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ToAscii" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ToAsciiEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ToUnicode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ToUnicodeEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TrackMouseEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TrackPopupMenu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TrackPopupMenuEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateAccelerator" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateAcceleratorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateAcceleratorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateMDISysAccel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateMessageEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnhookWinEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnhookWindowsHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnhookWindowsHookEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnionRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnloadKeyboardLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnlockWindowStation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnpackDDElParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterClassA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterClassW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterDeviceNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterHotKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterMessagePumpHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterPointerInputTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterPointerInputTargetEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterPowerSettingNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterSessionPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterSuspendResumeNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterTouchWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterUserApiHook" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateDefaultDesktopThumbnail" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateLayeredWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateLayeredWindowIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdatePerUserSystemParameters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateWindow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateWindowInputSinkHints" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateWindowTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "User32InitializeImmEntryTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserClientDllInitialize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserHandleGrantAccess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserLpkPSMTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserLpkTabbedTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserRealizePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UserRegisterWowHandlers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VRipOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VTagOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ValidateRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ValidateRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VkKeyScanA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VkKeyScanExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VkKeyScanExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "VkKeyScanW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WCSToMBEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WINNLSEnableIME" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WINNLSGetEnableStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WINNLSGetIMEHotkey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WaitForInputIdle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WaitForRedirectionStartComplete" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WaitMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WinHelpA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WinHelpW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WindowFromDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WindowFromPhysicalPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WindowFromPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "_UserTestTokenForInteractive" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "gSharedInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "gapfnScSendMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "keybd_event" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "mouse_event" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wsprintfA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wsprintfW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wvsprintfA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "wvsprintfW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

});
module.exports = user32;
