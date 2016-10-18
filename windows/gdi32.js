// javascript ffi interface for gdi32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

var gdi32 = ffi.Library( "gdi32.dll" ,
{
	// "AbortDoc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AbortDocImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AbortPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontMemResourceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceTracking" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddFontResourceWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AngleArc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AnimatePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AnimatePaletteStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AnyLinkedFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Arc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ArcStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ArcTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BRUSHOBJ_hGetColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BRUSHOBJ_pvAllocRbrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BRUSHOBJ_pvGetRbrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BRUSHOBJ_ulGetBrushColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BeginGdiRendering" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BeginPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BeginPathImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BitBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CLIPOBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CLIPOBJ_cEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CLIPOBJ_ppoGetPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CancelDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckColorsInGamut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChoosePixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Chord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClearBitmapAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClearBrushAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseFigure" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseFigureImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ColorCorrectPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ColorMatchToTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CombineRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CombineTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConfigureOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyEnhMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyEnhMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopyMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBitmapFromDxSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBitmapFromDxSurface2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBitmapIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBrushIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateBrushIndirectStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateColorSpaceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateColorSpaceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateCompatibleBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateCompatibleDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDCA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDCAImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDCExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDIBPatternBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDIBPatternBrushPt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDIBSection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDIBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateDiscardableBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateEllipticRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateEllipticRgnIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateEllipticRgnIndirectStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateEnhMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateEnhMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontIndirectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontIndirectExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontIndirectExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontIndirectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontIndirectWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateFontW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateHalftonePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateHatchBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateICA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateICW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateOPMProtectedOutputs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePatternBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePenIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePenIndirectStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePolyPolygonRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePolyPolygonRgnStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePolygonRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateRectRgnIndirect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateRoundRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateRoundRectRgnStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateScalableFontResourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateScalableFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateScalableFontResourceWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateSessionMappedDIBSection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateSolidBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTAbandonSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTAcquireKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTAcquireKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTAcquireSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTAdjustFullscreenGamma" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCacheHybridQueryValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTChangeVideoMemoryReservation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckMonitorPowerState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckMultiPlaneOverlaySupport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckMultiPlaneOverlaySupport2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckMultiPlaneOverlaySupport3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckOcclusion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckSharedResourceAccess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCheckVidPnExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCloseAdapter" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTConfigureSharedResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateAllocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateAllocation2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateContextVirtual" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateDCFromMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateOutputDupl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreatePagingQueue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTCreateSynchronizationObject2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyAllocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyAllocation2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyDCFromMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyOutputDupl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroyPagingQueue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTDestroySynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTEnumAdapters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTEnumAdapters2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTEvict" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTFlipOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTFlushHeapTransitions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTFreeGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetCachedHybridQueryValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetContextInProcessSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetContextSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetDWMVerticalBlankEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetDeviceState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetDisplayModeList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetMultisampleMethodList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetOverlayState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetPresentHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetPresentQueueEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetProcessSchedulingPriorityClass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetResourcePresentPrivateDriverData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetRuntimeData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetScanLine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetSetSwapChainMetadata" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetSharedPrimaryHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTGetSharedResourceAdapterLuid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTInvalidateActiveVidPn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTInvalidateCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTLock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTLock2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTMakeResident" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTMapGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTMarkDeviceAsError" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispGetNextChunkInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispQueryMiracastDisplayDeviceStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispQueryMiracastDisplayDeviceSupport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispStartMiracastDisplayDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispStartMiracastDisplayDevice2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispStartMiracastDisplayDeviceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispStopMiracastDisplayDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTNetDispStopSessions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOfferAllocations" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenAdapterFromDeviceName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenAdapterFromGdiDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenAdapterFromHdc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenAdapterFromLuid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenNtHandleFromName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenResource2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenResourceFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenSyncObjectFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenSyncObjectFromNtHandle2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenSyncObjectNtHandleFromName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOpenSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOutputDuplGetFrameInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOutputDuplGetMetaData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOutputDuplGetPointerShapeData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOutputDuplPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTOutputDuplReleaseFrame" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPinDirectFlipResources" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPollDisplayChildren" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPresentMultiPlaneOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPresentMultiPlaneOverlay2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTPresentMultiPlaneOverlay3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryAdapterInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryAllocationResidency" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryClockCalibration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryFSEBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryProcessOfferInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryRemoteVidPnSourceFromGdiDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryResourceInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryResourceInfoFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryStatistics" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryVidPnExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTQueryVideoMemoryInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReclaimAllocations" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReclaimAllocations2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTRegisterTrimNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReleaseKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReleaseKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReleaseProcessVidPnSourceOwners" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReleaseSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTRender" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTReserveGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetAllocationPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetContextInProcessSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetContextSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetDisplayMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetDisplayPrivateDriverFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetDodIndirectSwapchain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetFSEBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetHwProtectionTeardownRecovery" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetProcessSchedulingPriorityClass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetQueuedLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetStablePowerState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetStereoEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetSyncRefreshCountWaitTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetVidPnSourceHwProtection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetVidPnSourceOwner" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSetVidPnSourceOwner1" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTShareObjects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSharedPrimaryLockNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSharedPrimaryUnLockNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSignalSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSignalSynchronizationObject2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSignalSynchronizationObjectFromCpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSignalSynchronizationObjectFromGpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSignalSynchronizationObjectFromGpu2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTSubmitCommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTTrimProcessCommitment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUnlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUnlock2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUnpinDirectFlipResources" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUnregisterTrimNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUpdateAllocationProperty" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUpdateGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTUpdateOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForIdle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForSynchronizationObject2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForSynchronizationObjectFromCpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForSynchronizationObjectFromGpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForVerticalBlankEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "D3DKMTWaitForVerticalBlankEvent2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCIGetCapabilitiesString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCIGetCapabilitiesStringLength" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCIGetTimingReport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCIGetVCPFeature" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCISaveCurrentSettings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DDCCISetVCPFeature" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DPtoLP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdCreateFullscreenSprite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdDestroyFullscreenSprite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry0" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry1" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry10" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry11" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry12" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry13" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry14" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry15" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry16" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry17" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry18" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry19" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry20" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry21" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry22" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry23" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry24" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry25" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry26" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry27" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry28" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry29" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry30" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry31" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry32" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry33" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry34" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry35" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry36" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry37" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry38" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry39" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry4" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry40" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry41" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry42" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry43" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry44" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry45" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry46" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry47" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry48" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry49" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry5" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry50" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry51" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry52" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry53" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry54" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry55" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry56" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry6" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry7" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry8" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdEntry9" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdNotifyFullscreenSpriteUpdate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DdQueryVisRgnUniqueness" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteEMFSpoolData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DescribePixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyPhysicalMonitorInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeviceCapabilitiesExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeviceCapabilitiesExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DocumentEventEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DrawEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmCreatedBitmapRemotingOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DwmGetDirtyRgnImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DxTrimNotificationListHead" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Ellipse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EllipseStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableEUDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndDoc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndDocImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndFormPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndGdiRendering" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndPageImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EndPathImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngAcquireSemaphore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngAlphaBlend" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngAssociateSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngBitBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCheckAbort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngComputeGlyphSet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCopyBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreateBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreateClip" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreateDeviceBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreateDeviceSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreatePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngCreateSemaphore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngDeleteClip" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngDeletePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngDeletePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngDeleteSemaphore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngDeleteSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngEraseSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngFindResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngFreeModule" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngGetCurrentCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngGetDriverName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngGetPrinterDataFileName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngGradientFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngLineTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngLoadModule" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngLockSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngMarkBandingSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngMultiByteToUnicodeN" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngMultiByteToWideChar" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngPaint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngPlgBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngQueryEMFInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngQueryLocalTime" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngReleaseSemaphore" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngStretchBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngStretchBltROP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngStrokeAndFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngStrokePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngTransparentBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngUnicodeToMultiByteN" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngUnlockSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EngWideCharToMultiByte" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumEnhMetaFileStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontFamiliesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontFamiliesExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontFamiliesExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontFamiliesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumFontsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumICMProfilesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumICMProfilesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumObjects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EqualRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Escape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EscapeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EudcLoadLinkW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EudcUnloadLinkW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExcludeClipRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtCreatePen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtCreateRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtEscapeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtFloodFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtSelectClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtSelectClipRgnImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtTextOutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtTextOutAImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtTextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ExtTextOutWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_cGetAllGlyphHandles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_cGetGlyphs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_pQueryGlyphAttrs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_pfdg" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_pifi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_pvTrueTypeFontFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_pxoGetXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FONTOBJ_vGetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FillPathImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FillRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FillRgnStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FixBrushOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlattenPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FloodFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FontIsLinked" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FrameRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FrameRgnStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Gdi32DllInitialize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiAddFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiAddGlsBounds" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiAddGlsRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiAlphaBlend" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiArtificialDecrementDriver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiBatchLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiCleanCacheDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiComment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiCommentStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConsoleTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertAndCheckDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertBitmapV5" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertMetaFilePict" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiConvertToDevmodeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiCreateLocalEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiCreateLocalMetaFilePict" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDeleteLocalDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDeleteSpoolFileHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDescribePixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDllInitialize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDllInitializeWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiDrawStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEndDocEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEndPageEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry1" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry10" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry11" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry12" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry13" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry14" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry15" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry16" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry4" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry5" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry6" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry7" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry8" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiEntry9" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiFixUpHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiFlush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiFullscreenControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetBatchLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetBitmapBitsSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetCharDimensions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetDevmodeForPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetEntry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetLocalBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetLocalDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetLocalFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetPageCount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetPageHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetSpoolFileHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGetSpoolMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiGradientFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiInitSpool" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiInitializeLanguagePack" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiIsMetaFileDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiIsMetaPrintDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiIsPlayMetafileDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiIsScreenDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiIsUMPDSandboxingEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiLoadType1Fonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayDCScript" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayJournal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayPageEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayPrivatePageEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPlayScript" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiPrinterThunk" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiProcessSetup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiQueryFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiQueryTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiRealizationInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiReleaseDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiReleaseLocalDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiResetDCEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSetAttrs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSetBatchLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSetLastError" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSetPixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSetServerAttr" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiStartDocEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiStartPageEMF" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSupportsFontChangeEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiSwapBuffers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiTransparentBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GdiValidateHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetArcDirection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAspectRatioFilterEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBitmapAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBitmapBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBitmapDimensionEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBkColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBkMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBoundsRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBrushAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetBrushOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCOPPCompatibleOPMInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCertificate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCertificateByHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCertificateSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCertificateSizeByHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharABCWidthsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharABCWidthsFloatA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharABCWidthsFloatW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharABCWidthsI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharABCWidthsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidth32A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidth32W" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthFloatA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthFloatW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharWidthW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharacterPlacementA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCharacterPlacementW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipBoxImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetColorAdjustment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentDpiInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentPositionEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentPositionExStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDCBrushColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDCOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDCPenColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDIBColorTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDIBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDeviceCaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDeviceGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetETM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEUDCTimeStamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEUDCTimeStampExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileDescriptionA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileDescriptionAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileDescriptionW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileHeader" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFilePaletteEntries" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFilePixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEnhMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontAssocStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontDataImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontFileData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontFileInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontLanguageInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontRealizationInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontResourceInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFontUnicodeRanges" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphIndicesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphIndicesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphOutline" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphOutlineA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphOutlineAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphOutlineW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGlyphOutlineWow" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetGraphicsMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetHFONT" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetICMProfileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetICMProfileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKerningPairs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKerningPairsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKerningPairsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLogColorSpaceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLogColorSpaceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMapMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMetaFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMetaFileBitsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMetaFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMetaRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMiterLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNearestColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNearestPaletteIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNumberOfPhysicalMonitors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOPMInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOPMRandomNumber" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetObjectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetObjectType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetObjectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOutlineTextMetricsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOutlineTextMetricsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPaletteEntries" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPhysicalMonitorDescription" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPhysicalMonitors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPixel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPolyFillMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetProcessSessionFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetROP2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetROP2Stub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRandomRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRasterizerCaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRasterizerCapsStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRegionData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRelAbs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetRgnBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetStockObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetStretchBltMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetStringBitmapA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetStringBitmapW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSuggestedOPMProtectedOutputArraySize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemPaletteEntries" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSystemPaletteUse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextAlign" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextCharacterExtra" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextCharacterExtraStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextCharset" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextCharsetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentExPointA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentExPointAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentExPointI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentExPointW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentExPointWPri" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPoint32A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPoint32AStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPoint32W" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPointA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPointAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPointI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextExtentPointW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextFaceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextFaceAliasW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextFaceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextMetricsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextMetricsAImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTextMetricsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetViewportExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetViewportOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWinMetaFileBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWorldTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HT_Get8BPPFormatPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "HT_Get8BPPMaskPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IcmDeleteLocalDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IcmReleaseCachedColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InternalDeleteDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IntersectClipRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IntersectClipRectImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InvertRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InvertRgnStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidEnhMetaRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidEnhMetaRecordOffExt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LPtoDP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LineDDA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LineTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LineToImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkDrawTextEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkEditControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkExtTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkGetCharacterPlacement" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkGetEditControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkGetTextExtentExPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkInitialize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkPSMTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkTabbedTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkUseGDIWidthCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkpEditControlSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LpkpInitializeEditControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MF16_DeleteObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MF_DeleteObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MaskBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MirrorRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ModerncoreGdiInit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ModifyWorldTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MoveToEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MoveToExImpl" : 
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

	// "NamedEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAbortDoc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAbortPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAddEmbFontToDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAddFontMemResourceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAddFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAddRemoteFontToDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAddRemoteMMInstanceToDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAlphaBlend" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAngleArc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiAnyLinkedFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiArcInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBRUSHOBJ_DeleteRbrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBRUSHOBJ_hGetColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBRUSHOBJ_pvAllocRbrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBRUSHOBJ_pvGetRbrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBRUSHOBJ_ulGetBrushColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBeginGdiRendering" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBeginPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiBitBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCLIPOBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCLIPOBJ_cEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCLIPOBJ_ppoGetPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCancelDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiChangeGhostFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCheckBitmapBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiClearBitmapAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiClearBrushAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCloseFigure" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiColorCorrectPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCombineRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCombineTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiComputeXformCoefficients" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiConfigureOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiConvertMetafileRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateBitmapFromDxSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateBitmapFromDxSurface2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateClientObj" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateCompatibleBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateCompatibleDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateDIBBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateDIBSection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateDIBitmapInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateEllipticRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateHalftonePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateHatchBrushInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateMetafileDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateOPMProtectedOutputs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreatePaletteInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreatePatternBrushInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreatePen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateRoundRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateServerMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateSessionMappedDIBSection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiCreateSolidBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiD3dContextCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiD3dContextDestroy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiD3dContextDestroyAll" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiD3dDrawPrimitives2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiD3dValidateTextureStageState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCIGetCapabilitiesString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCIGetCapabilitiesStringLength" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCIGetTimingReport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCIGetVCPFeature" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCISaveCurrentSettings" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDDCCISetVCPFeature" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdAddAttachedSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdAlphaBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdAttachSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdBeginMoCompFrame" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCanCreateD3DBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCanCreateSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdColorControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateD3DBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateDirectDrawObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateFullscreenSprite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateMoComp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateSurfaceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdCreateSurfaceObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIAbandonSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIAcquireKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIAcquireKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIAcquireSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIAdjustFullscreenGamma" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICacheHybridQueryValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIChangeVideoMemoryReservation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckMonitorPowerState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckMultiPlaneOverlaySupport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckMultiPlaneOverlaySupport2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckMultiPlaneOverlaySupport3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckOcclusion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckSharedResourceAccess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICheckVidPnExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICloseAdapter" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIConfigureSharedResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateAllocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateContextVirtual" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateDCFromMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateOutputDupl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreatePagingQueue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDICreateSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyAllocation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyAllocation2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyDCFromMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyOutputDupl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroyPagingQueue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIDestroySynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIEnumAdapters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIEnumAdapters2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIEvict" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIFlipOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIFlushHeapTransitions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIFreeGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetCachedHybridQueryValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetContextInProcessSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetContextSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetDWMVerticalBlankEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetDeviceState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetDisplayModeList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetMultisampleMethodList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetOverlayState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetPresentHistory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetPresentQueueEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetProcessSchedulingPriorityClass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetResourcePresentPrivateDriverData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetRuntimeData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetScanLine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetSetSwapChainMetadata" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetSharedPrimaryHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIGetSharedResourceAdapterLuid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIInvalidateActiveVidPn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIInvalidateCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDILock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDILock2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIMakeResident" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIMapGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIMarkDeviceAsError" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispGetNextChunkInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispQueryMiracastDisplayDeviceStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispQueryMiracastDisplayDeviceSupport" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispStartMiracastDisplayDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispStopMiracastDisplayDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDINetDispStopSessions" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOfferAllocations" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenAdapterFromDeviceName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenAdapterFromHdc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenAdapterFromLuid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenNtHandleFromName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenResource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenResourceFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenSyncObjectFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenSyncObjectFromNtHandle2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenSyncObjectNtHandleFromName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOpenSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOutputDuplGetFrameInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOutputDuplGetMetaData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOutputDuplGetPointerShapeData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOutputDuplPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIOutputDuplReleaseFrame" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPinDirectFlipResources" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPollDisplayChildren" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPresent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPresentMultiPlaneOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPresentMultiPlaneOverlay2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIPresentMultiPlaneOverlay3" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryAdapterInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryAllocationResidency" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryClockCalibration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryFSEBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryProcessOfferInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryRemoteVidPnSourceFromGdiDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryResourceInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryResourceInfoFromNtHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryStatistics" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryVidPnExclusiveOwnership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIQueryVideoMemoryInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReclaimAllocations" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReclaimAllocations2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReleaseKeyedMutex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReleaseKeyedMutex2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReleaseProcessVidPnSourceOwners" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReleaseSwapChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIRender" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIReserveGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetAllocationPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetContextInProcessSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetContextSchedulingPriority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetDisplayMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetDisplayPrivateDriverFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetDodIndirectSwapchain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetFSEBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetHwProtectionTeardownRecovery" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetProcessSchedulingPriorityClass" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetQueuedLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetStablePowerState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetStereoEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetSyncRefreshCountWaitTarget" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetVidPnSourceHwProtection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetVidPnSourceOwner" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISetVidPnSourceOwner1" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIShareObjects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISharedPrimaryLockNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISharedPrimaryUnLockNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISignalSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISignalSynchronizationObjectFromCpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISignalSynchronizationObjectFromGpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISignalSynchronizationObjectFromGpu2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDISubmitCommand" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDITrimProcessCommitment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUnlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUnlock2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUnpinDirectFlipResources" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUpdateAllocationProperty" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUpdateGpuVirtualAddress" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIUpdateOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForIdle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForSynchronizationObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForSynchronizationObjectFromCpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForSynchronizationObjectFromGpu" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForVerticalBlankEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDDIWaitForVerticalBlankEvent2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDeleteDirectDrawObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDeleteSurfaceObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDestroyD3DBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDestroyFullscreenSprite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDestroyMoComp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdDestroySurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdEndMoCompFrame" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdFlip" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdFlipToGDISurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetAvailDriverMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetBltStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetDriverInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetDriverState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetDxHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetFlipStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetInternalMoCompInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetMoCompBuffInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetMoCompFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetMoCompGuids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdGetScanLine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdLock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdLockD3D" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdNotifyFullscreenSpriteUpdate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdQueryDirectDrawObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdQueryMoCompStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdQueryVisRgnUniqueness" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdReenableDirectDrawObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdReleaseDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdRenderMoComp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdResetVisrgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdSetColorKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdSetExclusiveMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdSetGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdSetOverlayPosition" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdUnattachSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdUnlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdUnlockD3D" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdUpdateOverlay" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDdWaitForVerticalBlank" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDeleteClientObj" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDeleteColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDeleteColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDeleteObjectApp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDescribePixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDestroyOPMProtectedOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDestroyPhysicalMonitor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDoBanding" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDoPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDrawEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDrawStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpAcquireNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpCanCreateVideoPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpColorControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpCreateVideoPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpDestroyVideoPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpFlipVideoPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortBandwidth" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortConnectInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortField" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortFlipStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortInputFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortLine" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoPortOutputFormats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpGetVideoSignalStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpReleaseNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpUpdateVideoPort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDvpWaitForVideoPortSync" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDwmCreatedBitmapRemotingOutput" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiDxgGenericThunk" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEllipse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEnableEudc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEndDoc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEndGdiRendering" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEndPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEndPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngAlphaBlend" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngAssociateSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngBitBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCheckAbort" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngComputeGlyphSet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCopyBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCreateBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCreateClip" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCreateDeviceBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCreateDeviceSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngCreatePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngDeleteClip" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngDeletePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngDeletePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngDeleteSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngEraseSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngGradientFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngLineTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngLockSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngMarkBandingSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngPaint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngPlgBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngStretchBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngStretchBltROP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngStrokeAndFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngStrokePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngTransparentBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEngUnlockSurface" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEnumFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEnumObjects" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEqualRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiEudcLoadUnloadLink" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExcludeClipRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtCreatePen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtCreateRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtEscape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtFloodFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtGetObjectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtSelectClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiExtTextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_cGetAllGlyphHandles" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_cGetGlyphs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_pQueryGlyphAttrs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_pfdg" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_pifi" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_pvTrueTypeFontFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_pxoGetXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFONTOBJ_vGetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFillRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFlattenPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFlush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFontIsLinked" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiForceUFIMapping" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFrameRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiFullscreenControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetAndSetDCDword" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetAppClipBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetBitmapBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetBitmapDimension" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetBoundsRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCOPPCompatibleOPMInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCertificate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCertificateByHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCertificateSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCertificateSizeByHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCharABCWidthsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCharSet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCharWidthInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCharWidthW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCharacterPlacementW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetColorAdjustment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetColorSpaceforBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetCurrentDpiInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDCDword" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDCObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDCPoint" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDCforBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDIBitsInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDeviceCaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDeviceCapsAll" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDeviceGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDeviceWidth" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetDhpdev" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetETM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetEmbUFI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetEmbedFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetEntry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetEudcTimeStampEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetFontData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetFontFileData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetFontFileInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetFontResourceInfoInternalW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetFontUnicodeRanges" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetGlyphIndicesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetGlyphIndicesWInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetGlyphOutline" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetKerningPairs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetLinkedUFIs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetMiterLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetMonitorID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetNearestColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetNearestPaletteIndex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetNumberOfPhysicalMonitors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetOPMInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetOPMRandomNumber" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetObjectBitmapHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetOutlineTextMetricsInternalW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetPerBandInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetPhysicalMonitorDescription" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetPhysicalMonitors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetPixel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetRandomRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetRasterizerCaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetRealizationInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetRegionData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetRgnBox" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetServerMetaFileBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetSpoolMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetStats" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetStringBitmapW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetSuggestedOPMProtectedOutputArraySize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetSystemPaletteUse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTextCharsetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTextExtent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTextExtentExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTextFaceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTextMetricsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetUFI" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetUFIPathname" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGetWidthTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiGradientFill" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiHLSurfGetInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiHLSurfSetInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiHT_Get8BPPFormatPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiHT_Get8BPPMaskPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiHfontCreate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiIcmBrushInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiInit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiInitSpool" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiIntersectClipRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiInvertRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiLineTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMakeFontDir" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMakeInfoDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMakeObjectUnXferable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMakeObjectXferable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMaskBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMirrorWindowOrg" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiModifyWorldTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMonoBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiMoveTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiOffsetClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiOffsetRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiOpenDCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPATHOBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPATHOBJ_bEnumClipLines" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPATHOBJ_vEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPATHOBJ_vEnumStartClipLines" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPATHOBJ_vGetBounds" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPatBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPathToRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPlgBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPolyDraw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPolyPatBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPolyPolyDraw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPolyTextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPtInRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiPtVisible" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiQueryFontAssocInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiQueryFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRectInRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRectVisible" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRectangle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRemoveFontMemResourceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRemoveFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRemoveMergeFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiResetDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiResizePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRestoreDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiRoundRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSTROBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSTROBJ_bEnumPositionsOnly" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSTROBJ_bGetAdvanceWidths" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSTROBJ_dwGetCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSTROBJ_vEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSaveDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiScaleViewportExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiScaleWindowExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSelectBitmap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSelectBrush" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSelectClipPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSelectFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSelectPen" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBitmapAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBitmapBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBitmapDimension" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBoundsRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBrushAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetBrushOrg" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetColorAdjustment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetDIBitsToDeviceInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetDeviceGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetFontEnumeration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetFontXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetIcmMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetLinkedUFIs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetMagicColors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetMetaRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetMiterLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetOPMSigningKeyAndSequenceNumbers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetPUMPDOBJ" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetPixel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetPixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetSizeDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetSystemPaletteUse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetTextJustification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetUMPDSandboxState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSetVirtualResolution" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStartDoc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStartPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStretchBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStretchDIBitsInternal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStrokeAndFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiStrokePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiSwapBuffers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiTransformPoints" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiTransparentBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUMPDEngFreeUserMem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUnloadPrinterDriver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUnmapMemFont" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUnrealizeObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUpdateColors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiUpdateTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiWidenPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiXFORMOBJ_bApplyXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiXFORMOBJ_iGetXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiXLATEOBJ_cGetPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiXLATEOBJ_hGetColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NtGdiXLATEOBJ_iXlate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OffsetClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OffsetRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OffsetViewportOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OffsetWindowOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PATHOBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PATHOBJ_bEnumClipLines" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PATHOBJ_vEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PATHOBJ_vEnumStartClipLines" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PATHOBJ_vGetBounds" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PaintRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PatBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PathToRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Pie" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PieStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PlayEnhMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PlayEnhMetaFileRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PlayMetaFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PlayMetaFileRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PlgBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyBezier" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyBezierStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyBezierTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyBezierToImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyDraw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyDrawImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyPatBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyPolygon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyPolygonStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyPolyline" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyTextOutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolyTextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Polygon" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolygonStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Polyline" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolylineTo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PolylineToImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PtInRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PtVisible" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryFontAssocStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RealizePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RectInRegion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RectVisible" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "Rectangle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RectangleImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontMemResourceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceTracking" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveFontResourceWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResetDCA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResetDCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResetDCWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResizePalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ResizePaletteStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RestoreDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RestoreDCImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RoundRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RoundRectStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "STROBJ_bEnum" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "STROBJ_bEnumPositionsOnly" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "STROBJ_bGetAdvanceWidths" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "STROBJ_dwGetCodePage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "STROBJ_vEnumStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaveDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaveDCImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScaleViewportExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScaleWindowExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptApplyDigitSubstitution" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptApplyLogicalWidth" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptBreak" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptCPtoX" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptCacheGetHeight" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptFreeCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetCMap" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetFontAlternateGlyphs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetFontFeatureTags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetFontLanguageTags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetFontProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetFontScriptTags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetGlyphABCWidth" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetLogicalWidths" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptGetProperties" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptIsComplex" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptItemize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptItemizeOpenType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptJustify" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptPlace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptPlaceOpenType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptPositionSingleGlyph" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptRecordDigitSubstitution" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptShape" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptShapeOpenType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringAnalyse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringCPtoX" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringFree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringGetLogicalWidths" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringGetOrder" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringValidate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptStringXtoCP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptString_pLogAttr" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptString_pSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptString_pcOutChars" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptSubstituteSingleGlyph" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptTextOut" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ScriptXtoCP" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectBrushLocal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectClipPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectClipPathImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectClipRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectClipRgnImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectFontLocal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectObjectImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SelectPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetAbortProc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetArcDirection" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBitmapAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBitmapBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBitmapBitsStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBitmapDimensionEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBkColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBkMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBkModeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBoundsRect" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBrushAttributes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetBrushOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetColorAdjustment" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetColorSpace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDCBrushColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDCPenColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDIBColorTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDIBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDIBitsToDevice" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetDeviceGammaRamp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEnhMetaFileBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetFontEnumeration" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetGraphicsMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetICMMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetICMModeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetICMProfileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetICMProfileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetLayout" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetLayoutWidth" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMagicColors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMapMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMapperFlags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMetaFileBitsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMetaRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMiterLimit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetMiterLimitImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetOPMSigningKeyAndSequenceNumbers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPaletteEntries" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPaletteEntriesStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPixel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPixelFormat" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPixelV" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPolyFillMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPolyFillModeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetROP2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetROP2Stub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetRectRgn" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetRelAbs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetStretchBltMode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetStretchBltModeImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSystemPaletteUse" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextAlign" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextAlignImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextCharacterExtra" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextColor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextColorImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTextJustification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetViewportExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetViewportOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetVirtualResolution" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWinMetaFileBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowExtEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWindowOrgEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWorldTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetWorldTransformImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartDocA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartDocW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartDocWImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartFormPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartPage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartPageImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StretchBlt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StretchDIBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StretchDIBitsImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrokeAndFillPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrokePath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StrokePathImpl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SwapBuffers" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TextOutA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TextOutAStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TextOutW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TranslateCharsetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnloadNetworkFonts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnloadUserModePrinterDriver" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnrealizeObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnrealizeObjectStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateColors" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateColorsStub" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateICMRegKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateICMRegKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UspAllocCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UspAllocTemp" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UspFreeMem" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WidenPath" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XFORMOBJ_bApplyXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XFORMOBJ_iGetXform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XLATEOBJ_cGetPalette" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XLATEOBJ_hGetColorTransform" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XLATEOBJ_iXlate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "XLATEOBJ_piVector" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "bCreateDCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "bDeleteLDC" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "bInitSystemAndFontsDirectoriesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "bMakePathNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "cGetTTFFromFOT" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "fpClosePrinter" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ftsWordBreak" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "gMaxGdiHandleCount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "gW32PID" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "gdiPlaySpoolStream" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ghICM" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "hGetPEBHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "hdcCreateDCW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "pGdiDevCaps" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "pGdiSharedHandleTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "pGdiSharedMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "pldcGet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "plinkGet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "semDxTrimNotification" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "vDeleteLOCALFONT" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "vFreeUFIHashTable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "vSetPldc" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

});
module.exports = gdi32;
