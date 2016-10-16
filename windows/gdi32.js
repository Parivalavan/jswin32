// javascript ffi interface for gdi32
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
var gdi32 = ffi.Library( 'gdi32.dll' ,{} );

var gdi32 = ffi.Library( "gdi32.dll" ,
{
	// int __stdcall AbortDoc();
	// "AbortDoc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AbortDocImpl();
	// "AbortDocImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AbortPath();
	// "AbortPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontMemResourceEx();
	// "AddFontMemResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceA();
	// "AddFontResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceAStub();
	// "AddFontResourceAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceExA();
	// "AddFontResourceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceExW();
	// "AddFontResourceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceTracking();
	// "AddFontResourceTracking" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceW();
	// "AddFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddFontResourceWImpl();
	// "AddFontResourceWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AngleArc();
	// "AngleArc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AnimatePalette();
	// "AnimatePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AnimatePaletteStub();
	// "AnimatePaletteStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AnyLinkedFonts();
	// "AnyLinkedFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Arc();
	// "Arc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ArcStub();
	// "ArcStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ArcTo();
	// "ArcTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BRUSHOBJ_hGetColorTransform();
	// "BRUSHOBJ_hGetColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BRUSHOBJ_pvAllocRbrush();
	// "BRUSHOBJ_pvAllocRbrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BRUSHOBJ_pvGetRbrush();
	// "BRUSHOBJ_pvGetRbrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BRUSHOBJ_ulGetBrushColor();
	// "BRUSHOBJ_ulGetBrushColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginGdiRendering();
	// "BeginGdiRendering" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginPath();
	// "BeginPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginPathImpl();
	// "BeginPathImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BitBlt();
	// "BitBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CLIPOBJ_bEnum();
	// "CLIPOBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CLIPOBJ_cEnumStart();
	// "CLIPOBJ_cEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CLIPOBJ_ppoGetPath();
	// "CLIPOBJ_ppoGetPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelDC();
	// "CancelDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckColorsInGamut();
	// "CheckColorsInGamut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChoosePixelFormat();
	// "ChoosePixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Chord();
	// "Chord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearBitmapAttributes();
	// "ClearBitmapAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearBrushAttributes();
	// "ClearBrushAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseEnhMetaFile();
	// "CloseEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseFigure();
	// "CloseFigure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseFigureImpl();
	// "CloseFigureImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseMetaFile();
	// "CloseMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ColorCorrectPalette();
	// "ColorCorrectPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ColorMatchToTarget();
	// "ColorMatchToTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CombineRgn();
	// "CombineRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CombineTransform();
	// "CombineTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConfigureOPMProtectedOutput();
	// "ConfigureOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyEnhMetaFileA();
	// "CopyEnhMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyEnhMetaFileW();
	// "CopyEnhMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyMetaFileA();
	// "CopyMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyMetaFileW();
	// "CopyMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBitmap();
	// "CreateBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBitmapFromDxSurface();
	// "CreateBitmapFromDxSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBitmapFromDxSurface2();
	// "CreateBitmapFromDxSurface2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBitmapIndirect();
	// "CreateBitmapIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBrushIndirect();
	// "CreateBrushIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBrushIndirectStub();
	// "CreateBrushIndirectStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateColorSpaceA();
	// "CreateColorSpaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateColorSpaceW();
	// "CreateColorSpaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateCompatibleBitmap();
	// "CreateCompatibleBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateCompatibleDC();
	// "CreateCompatibleDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDCA();
	// "CreateDCA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDCAImpl();
	// "CreateDCAImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDCExW();
	// "CreateDCExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDCW();
	// "CreateDCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDIBPatternBrush();
	// "CreateDIBPatternBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDIBPatternBrushPt();
	// "CreateDIBPatternBrushPt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDIBSection();
	// "CreateDIBSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDIBitmap();
	// "CreateDIBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDiscardableBitmap();
	// "CreateDiscardableBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEllipticRgn();
	// "CreateEllipticRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEllipticRgnIndirect();
	// "CreateEllipticRgnIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEllipticRgnIndirectStub();
	// "CreateEllipticRgnIndirectStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEnhMetaFileA();
	// "CreateEnhMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEnhMetaFileW();
	// "CreateEnhMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontA();
	// "CreateFontA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontAStub();
	// "CreateFontAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontIndirectA();
	// "CreateFontIndirectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontIndirectExA();
	// "CreateFontIndirectExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontIndirectExW();
	// "CreateFontIndirectExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontIndirectW();
	// "CreateFontIndirectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontIndirectWImpl();
	// "CreateFontIndirectWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFontW();
	// "CreateFontW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateHalftonePalette();
	// "CreateHalftonePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateHatchBrush();
	// "CreateHatchBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateICA();
	// "CreateICA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateICW();
	// "CreateICW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMetaFileA();
	// "CreateMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMetaFileW();
	// "CreateMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateOPMProtectedOutput();
	// "CreateOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateOPMProtectedOutputs();
	// "CreateOPMProtectedOutputs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePalette();
	// "CreatePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePatternBrush();
	// "CreatePatternBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePen();
	// "CreatePen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePenIndirect();
	// "CreatePenIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePenIndirectStub();
	// "CreatePenIndirectStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePolyPolygonRgn();
	// "CreatePolyPolygonRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePolyPolygonRgnStub();
	// "CreatePolyPolygonRgnStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePolygonRgn();
	// "CreatePolygonRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRectRgn();
	// "CreateRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRectRgnIndirect();
	// "CreateRectRgnIndirect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRoundRectRgn();
	// "CreateRoundRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRoundRectRgnStub();
	// "CreateRoundRectRgnStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateScalableFontResourceA();
	// "CreateScalableFontResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateScalableFontResourceW();
	// "CreateScalableFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateScalableFontResourceWImpl();
	// "CreateScalableFontResourceWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSessionMappedDIBSection();
	// "CreateSessionMappedDIBSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSolidBrush();
	// "CreateSolidBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTAbandonSwapChain();
	// "D3DKMTAbandonSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTAcquireKeyedMutex();
	// "D3DKMTAcquireKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTAcquireKeyedMutex2();
	// "D3DKMTAcquireKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTAcquireSwapChain();
	// "D3DKMTAcquireSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTAdjustFullscreenGamma();
	// "D3DKMTAdjustFullscreenGamma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCacheHybridQueryValue();
	// "D3DKMTCacheHybridQueryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTChangeVideoMemoryReservation();
	// "D3DKMTChangeVideoMemoryReservation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckExclusiveOwnership();
	// "D3DKMTCheckExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckMonitorPowerState();
	// "D3DKMTCheckMonitorPowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport();
	// "D3DKMTCheckMultiPlaneOverlaySupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport2();
	// "D3DKMTCheckMultiPlaneOverlaySupport2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport3();
	// "D3DKMTCheckMultiPlaneOverlaySupport3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckOcclusion();
	// "D3DKMTCheckOcclusion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckSharedResourceAccess();
	// "D3DKMTCheckSharedResourceAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCheckVidPnExclusiveOwnership();
	// "D3DKMTCheckVidPnExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCloseAdapter();
	// "D3DKMTCloseAdapter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTConfigureSharedResource();
	// "D3DKMTConfigureSharedResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateAllocation();
	// "D3DKMTCreateAllocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateAllocation2();
	// "D3DKMTCreateAllocation2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateContext();
	// "D3DKMTCreateContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateContextVirtual();
	// "D3DKMTCreateContextVirtual" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateDCFromMemory();
	// "D3DKMTCreateDCFromMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateDevice();
	// "D3DKMTCreateDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateKeyedMutex();
	// "D3DKMTCreateKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateKeyedMutex2();
	// "D3DKMTCreateKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateOutputDupl();
	// "D3DKMTCreateOutputDupl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateOverlay();
	// "D3DKMTCreateOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreatePagingQueue();
	// "D3DKMTCreatePagingQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateSwapChain();
	// "D3DKMTCreateSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateSynchronizationObject();
	// "D3DKMTCreateSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTCreateSynchronizationObject2();
	// "D3DKMTCreateSynchronizationObject2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyAllocation();
	// "D3DKMTDestroyAllocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyAllocation2();
	// "D3DKMTDestroyAllocation2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyContext();
	// "D3DKMTDestroyContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyDCFromMemory();
	// "D3DKMTDestroyDCFromMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyDevice();
	// "D3DKMTDestroyDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyKeyedMutex();
	// "D3DKMTDestroyKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyOutputDupl();
	// "D3DKMTDestroyOutputDupl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyOverlay();
	// "D3DKMTDestroyOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroyPagingQueue();
	// "D3DKMTDestroyPagingQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTDestroySynchronizationObject();
	// "D3DKMTDestroySynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTEnumAdapters();
	// "D3DKMTEnumAdapters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTEnumAdapters2();
	// "D3DKMTEnumAdapters2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTEscape();
	// "D3DKMTEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTEvict();
	// "D3DKMTEvict" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTFlipOverlay();
	// "D3DKMTFlipOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTFlushHeapTransitions();
	// "D3DKMTFlushHeapTransitions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTFreeGpuVirtualAddress();
	// "D3DKMTFreeGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetCachedHybridQueryValue();
	// "D3DKMTGetCachedHybridQueryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetContextInProcessSchedulingPriority();
	// "D3DKMTGetContextInProcessSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetContextSchedulingPriority();
	// "D3DKMTGetContextSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetDWMVerticalBlankEvent();
	// "D3DKMTGetDWMVerticalBlankEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetDeviceState();
	// "D3DKMTGetDeviceState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetDisplayModeList();
	// "D3DKMTGetDisplayModeList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetMultisampleMethodList();
	// "D3DKMTGetMultisampleMethodList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetOverlayState();
	// "D3DKMTGetOverlayState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetPresentHistory();
	// "D3DKMTGetPresentHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetPresentQueueEvent();
	// "D3DKMTGetPresentQueueEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetProcessSchedulingPriorityClass();
	// "D3DKMTGetProcessSchedulingPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetResourcePresentPrivateDriverData();
	// "D3DKMTGetResourcePresentPrivateDriverData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetRuntimeData();
	// "D3DKMTGetRuntimeData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetScanLine();
	// "D3DKMTGetScanLine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetSetSwapChainMetadata();
	// "D3DKMTGetSetSwapChainMetadata" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetSharedPrimaryHandle();
	// "D3DKMTGetSharedPrimaryHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTGetSharedResourceAdapterLuid();
	// "D3DKMTGetSharedResourceAdapterLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTInvalidateActiveVidPn();
	// "D3DKMTInvalidateActiveVidPn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTInvalidateCache();
	// "D3DKMTInvalidateCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTLock();
	// "D3DKMTLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTLock2();
	// "D3DKMTLock2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTMakeResident();
	// "D3DKMTMakeResident" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTMapGpuVirtualAddress();
	// "D3DKMTMapGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTMarkDeviceAsError();
	// "D3DKMTMarkDeviceAsError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispGetNextChunkInfo();
	// "D3DKMTNetDispGetNextChunkInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispQueryMiracastDisplayDeviceStatus();
	// "D3DKMTNetDispQueryMiracastDisplayDeviceStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispQueryMiracastDisplayDeviceSupport();
	// "D3DKMTNetDispQueryMiracastDisplayDeviceSupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispStartMiracastDisplayDevice();
	// "D3DKMTNetDispStartMiracastDisplayDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispStartMiracastDisplayDevice2();
	// "D3DKMTNetDispStartMiracastDisplayDevice2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispStartMiracastDisplayDeviceEx();
	// "D3DKMTNetDispStartMiracastDisplayDeviceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispStopMiracastDisplayDevice();
	// "D3DKMTNetDispStopMiracastDisplayDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTNetDispStopSessions();
	// "D3DKMTNetDispStopSessions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOfferAllocations();
	// "D3DKMTOfferAllocations" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenAdapterFromDeviceName();
	// "D3DKMTOpenAdapterFromDeviceName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenAdapterFromGdiDisplayName();
	// "D3DKMTOpenAdapterFromGdiDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenAdapterFromHdc();
	// "D3DKMTOpenAdapterFromHdc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenAdapterFromLuid();
	// "D3DKMTOpenAdapterFromLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenKeyedMutex();
	// "D3DKMTOpenKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenKeyedMutex2();
	// "D3DKMTOpenKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenNtHandleFromName();
	// "D3DKMTOpenNtHandleFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenResource();
	// "D3DKMTOpenResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenResource2();
	// "D3DKMTOpenResource2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenResourceFromNtHandle();
	// "D3DKMTOpenResourceFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenSwapChain();
	// "D3DKMTOpenSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenSyncObjectFromNtHandle();
	// "D3DKMTOpenSyncObjectFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenSyncObjectFromNtHandle2();
	// "D3DKMTOpenSyncObjectFromNtHandle2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenSyncObjectNtHandleFromName();
	// "D3DKMTOpenSyncObjectNtHandleFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOpenSynchronizationObject();
	// "D3DKMTOpenSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOutputDuplGetFrameInfo();
	// "D3DKMTOutputDuplGetFrameInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOutputDuplGetMetaData();
	// "D3DKMTOutputDuplGetMetaData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOutputDuplGetPointerShapeData();
	// "D3DKMTOutputDuplGetPointerShapeData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOutputDuplPresent();
	// "D3DKMTOutputDuplPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTOutputDuplReleaseFrame();
	// "D3DKMTOutputDuplReleaseFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPinDirectFlipResources();
	// "D3DKMTPinDirectFlipResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPollDisplayChildren();
	// "D3DKMTPollDisplayChildren" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPresent();
	// "D3DKMTPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPresentMultiPlaneOverlay();
	// "D3DKMTPresentMultiPlaneOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPresentMultiPlaneOverlay2();
	// "D3DKMTPresentMultiPlaneOverlay2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTPresentMultiPlaneOverlay3();
	// "D3DKMTPresentMultiPlaneOverlay3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryAdapterInfo();
	// "D3DKMTQueryAdapterInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryAllocationResidency();
	// "D3DKMTQueryAllocationResidency" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryClockCalibration();
	// "D3DKMTQueryClockCalibration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryFSEBlock();
	// "D3DKMTQueryFSEBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryProcessOfferInfo();
	// "D3DKMTQueryProcessOfferInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryRemoteVidPnSourceFromGdiDisplayName();
	// "D3DKMTQueryRemoteVidPnSourceFromGdiDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryResourceInfo();
	// "D3DKMTQueryResourceInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryResourceInfoFromNtHandle();
	// "D3DKMTQueryResourceInfoFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryStatistics();
	// "D3DKMTQueryStatistics" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryVidPnExclusiveOwnership();
	// "D3DKMTQueryVidPnExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTQueryVideoMemoryInfo();
	// "D3DKMTQueryVideoMemoryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReclaimAllocations();
	// "D3DKMTReclaimAllocations" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReclaimAllocations2();
	// "D3DKMTReclaimAllocations2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTRegisterTrimNotification();
	// "D3DKMTRegisterTrimNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReleaseKeyedMutex();
	// "D3DKMTReleaseKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReleaseKeyedMutex2();
	// "D3DKMTReleaseKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReleaseProcessVidPnSourceOwners();
	// "D3DKMTReleaseProcessVidPnSourceOwners" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReleaseSwapChain();
	// "D3DKMTReleaseSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTRender();
	// "D3DKMTRender" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTReserveGpuVirtualAddress();
	// "D3DKMTReserveGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetAllocationPriority();
	// "D3DKMTSetAllocationPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetContextInProcessSchedulingPriority();
	// "D3DKMTSetContextInProcessSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetContextSchedulingPriority();
	// "D3DKMTSetContextSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetDisplayMode();
	// "D3DKMTSetDisplayMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetDisplayPrivateDriverFormat();
	// "D3DKMTSetDisplayPrivateDriverFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetDodIndirectSwapchain();
	// "D3DKMTSetDodIndirectSwapchain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetFSEBlock();
	// "D3DKMTSetFSEBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetGammaRamp();
	// "D3DKMTSetGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetHwProtectionTeardownRecovery();
	// "D3DKMTSetHwProtectionTeardownRecovery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetProcessSchedulingPriorityClass();
	// "D3DKMTSetProcessSchedulingPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetQueuedLimit();
	// "D3DKMTSetQueuedLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetStablePowerState();
	// "D3DKMTSetStablePowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetStereoEnabled();
	// "D3DKMTSetStereoEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetSyncRefreshCountWaitTarget();
	// "D3DKMTSetSyncRefreshCountWaitTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetVidPnSourceHwProtection();
	// "D3DKMTSetVidPnSourceHwProtection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetVidPnSourceOwner();
	// "D3DKMTSetVidPnSourceOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSetVidPnSourceOwner1();
	// "D3DKMTSetVidPnSourceOwner1" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTShareObjects();
	// "D3DKMTShareObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSharedPrimaryLockNotification();
	// "D3DKMTSharedPrimaryLockNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSharedPrimaryUnLockNotification();
	// "D3DKMTSharedPrimaryUnLockNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSignalSynchronizationObject();
	// "D3DKMTSignalSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSignalSynchronizationObject2();
	// "D3DKMTSignalSynchronizationObject2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSignalSynchronizationObjectFromCpu();
	// "D3DKMTSignalSynchronizationObjectFromCpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSignalSynchronizationObjectFromGpu();
	// "D3DKMTSignalSynchronizationObjectFromGpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSignalSynchronizationObjectFromGpu2();
	// "D3DKMTSignalSynchronizationObjectFromGpu2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTSubmitCommand();
	// "D3DKMTSubmitCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTTrimProcessCommitment();
	// "D3DKMTTrimProcessCommitment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUnlock();
	// "D3DKMTUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUnlock2();
	// "D3DKMTUnlock2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUnpinDirectFlipResources();
	// "D3DKMTUnpinDirectFlipResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUnregisterTrimNotification();
	// "D3DKMTUnregisterTrimNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUpdateAllocationProperty();
	// "D3DKMTUpdateAllocationProperty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUpdateGpuVirtualAddress();
	// "D3DKMTUpdateGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTUpdateOverlay();
	// "D3DKMTUpdateOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForIdle();
	// "D3DKMTWaitForIdle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForSynchronizationObject();
	// "D3DKMTWaitForSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForSynchronizationObject2();
	// "D3DKMTWaitForSynchronizationObject2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForSynchronizationObjectFromCpu();
	// "D3DKMTWaitForSynchronizationObjectFromCpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForSynchronizationObjectFromGpu();
	// "D3DKMTWaitForSynchronizationObjectFromGpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForVerticalBlankEvent();
	// "D3DKMTWaitForVerticalBlankEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall D3DKMTWaitForVerticalBlankEvent2();
	// "D3DKMTWaitForVerticalBlankEvent2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCIGetCapabilitiesString();
	// "DDCCIGetCapabilitiesString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCIGetCapabilitiesStringLength();
	// "DDCCIGetCapabilitiesStringLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCIGetTimingReport();
	// "DDCCIGetTimingReport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCIGetVCPFeature();
	// "DDCCIGetVCPFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCISaveCurrentSettings();
	// "DDCCISaveCurrentSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DDCCISetVCPFeature();
	// "DDCCISetVCPFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DPtoLP();
	// "DPtoLP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdCreateFullscreenSprite();
	// "DdCreateFullscreenSprite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdDestroyFullscreenSprite();
	// "DdDestroyFullscreenSprite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry0();
	// "DdEntry0" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry1();
	// "DdEntry1" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry10();
	// "DdEntry10" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry11();
	// "DdEntry11" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry12();
	// "DdEntry12" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry13();
	// "DdEntry13" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry14();
	// "DdEntry14" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry15();
	// "DdEntry15" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry16();
	// "DdEntry16" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry17();
	// "DdEntry17" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry18();
	// "DdEntry18" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry19();
	// "DdEntry19" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry2();
	// "DdEntry2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry20();
	// "DdEntry20" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry21();
	// "DdEntry21" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry22();
	// "DdEntry22" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry23();
	// "DdEntry23" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry24();
	// "DdEntry24" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry25();
	// "DdEntry25" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry26();
	// "DdEntry26" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry27();
	// "DdEntry27" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry28();
	// "DdEntry28" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry29();
	// "DdEntry29" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry3();
	// "DdEntry3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry30();
	// "DdEntry30" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry31();
	// "DdEntry31" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry32();
	// "DdEntry32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry33();
	// "DdEntry33" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry34();
	// "DdEntry34" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry35();
	// "DdEntry35" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry36();
	// "DdEntry36" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry37();
	// "DdEntry37" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry38();
	// "DdEntry38" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry39();
	// "DdEntry39" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry4();
	// "DdEntry4" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry40();
	// "DdEntry40" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry41();
	// "DdEntry41" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry42();
	// "DdEntry42" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry43();
	// "DdEntry43" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry44();
	// "DdEntry44" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry45();
	// "DdEntry45" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry46();
	// "DdEntry46" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry47();
	// "DdEntry47" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry48();
	// "DdEntry48" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry49();
	// "DdEntry49" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry5();
	// "DdEntry5" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry50();
	// "DdEntry50" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry51();
	// "DdEntry51" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry52();
	// "DdEntry52" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry53();
	// "DdEntry53" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry54();
	// "DdEntry54" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry55();
	// "DdEntry55" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry56();
	// "DdEntry56" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry6();
	// "DdEntry6" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry7();
	// "DdEntry7" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry8();
	// "DdEntry8" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdEntry9();
	// "DdEntry9" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdNotifyFullscreenSpriteUpdate();
	// "DdNotifyFullscreenSpriteUpdate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DdQueryVisRgnUniqueness();
	// "DdQueryVisRgnUniqueness" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteColorSpace();
	// "DeleteColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteDC();
	// "DeleteDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteEMFSpoolData();
	// "DeleteEMFSpoolData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteEnhMetaFile();
	// "DeleteEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteMetaFile();
	// "DeleteMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteObject();
	// "DeleteObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DescribePixelFormat();
	// "DescribePixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyOPMProtectedOutput();
	// "DestroyOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyPhysicalMonitorInternal();
	// "DestroyPhysicalMonitorInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeviceCapabilitiesExA();
	// "DeviceCapabilitiesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeviceCapabilitiesExW();
	// "DeviceCapabilitiesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DocumentEventEx();
	// "DocumentEventEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DrawEscape();
	// "DrawEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmCreatedBitmapRemotingOutput();
	// "DwmCreatedBitmapRemotingOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DwmGetDirtyRgnImpl();
	// "DwmGetDirtyRgnImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DxTrimNotificationListHead();
	// "DxTrimNotificationListHead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Ellipse();
	// "Ellipse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EllipseStub();
	// "EllipseStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableEUDC();
	// "EnableEUDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndDoc();
	// "EndDoc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndDocImpl();
	// "EndDocImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndFormPage();
	// "EndFormPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndGdiRendering();
	// "EndGdiRendering" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndPage();
	// "EndPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndPageImpl();
	// "EndPageImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndPath();
	// "EndPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndPathImpl();
	// "EndPathImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngAcquireSemaphore();
	// "EngAcquireSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngAlphaBlend();
	// "EngAlphaBlend" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngAssociateSurface();
	// "EngAssociateSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngBitBlt();
	// "EngBitBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCheckAbort();
	// "EngCheckAbort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngComputeGlyphSet();
	// "EngComputeGlyphSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCopyBits();
	// "EngCopyBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreateBitmap();
	// "EngCreateBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreateClip();
	// "EngCreateClip" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreateDeviceBitmap();
	// "EngCreateDeviceBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreateDeviceSurface();
	// "EngCreateDeviceSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreatePalette();
	// "EngCreatePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngCreateSemaphore();
	// "EngCreateSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngDeleteClip();
	// "EngDeleteClip" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngDeletePalette();
	// "EngDeletePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngDeletePath();
	// "EngDeletePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngDeleteSemaphore();
	// "EngDeleteSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngDeleteSurface();
	// "EngDeleteSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngEraseSurface();
	// "EngEraseSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngFillPath();
	// "EngFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngFindResource();
	// "EngFindResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngFreeModule();
	// "EngFreeModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngGetCurrentCodePage();
	// "EngGetCurrentCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngGetDriverName();
	// "EngGetDriverName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngGetPrinterDataFileName();
	// "EngGetPrinterDataFileName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngGradientFill();
	// "EngGradientFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngLineTo();
	// "EngLineTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngLoadModule();
	// "EngLoadModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngLockSurface();
	// "EngLockSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngMarkBandingSurface();
	// "EngMarkBandingSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngMultiByteToUnicodeN();
	// "EngMultiByteToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngMultiByteToWideChar();
	// "EngMultiByteToWideChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngPaint();
	// "EngPaint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngPlgBlt();
	// "EngPlgBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngQueryEMFInfo();
	// "EngQueryEMFInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngQueryLocalTime();
	// "EngQueryLocalTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngReleaseSemaphore();
	// "EngReleaseSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngStretchBlt();
	// "EngStretchBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngStretchBltROP();
	// "EngStretchBltROP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngStrokeAndFillPath();
	// "EngStrokeAndFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngStrokePath();
	// "EngStrokePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngTextOut();
	// "EngTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngTransparentBlt();
	// "EngTransparentBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngUnicodeToMultiByteN();
	// "EngUnicodeToMultiByteN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngUnlockSurface();
	// "EngUnlockSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EngWideCharToMultiByte();
	// "EngWideCharToMultiByte" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumEnhMetaFile();
	// "EnumEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumEnhMetaFileStub();
	// "EnumEnhMetaFileStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontFamiliesA();
	// "EnumFontFamiliesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontFamiliesExA();
	// "EnumFontFamiliesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontFamiliesExW();
	// "EnumFontFamiliesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontFamiliesW();
	// "EnumFontFamiliesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontsA();
	// "EnumFontsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumFontsW();
	// "EnumFontsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumICMProfilesA();
	// "EnumICMProfilesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumICMProfilesW();
	// "EnumICMProfilesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumMetaFile();
	// "EnumMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumObjects();
	// "EnumObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EqualRgn();
	// "EqualRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Escape();
	// "Escape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EscapeImpl();
	// "EscapeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EudcLoadLinkW();
	// "EudcLoadLinkW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EudcUnloadLinkW();
	// "EudcUnloadLinkW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExcludeClipRect();
	// "ExcludeClipRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtCreatePen();
	// "ExtCreatePen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtCreateRegion();
	// "ExtCreateRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtEscape();
	// "ExtEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtEscapeImpl();
	// "ExtEscapeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtFloodFill();
	// "ExtFloodFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtSelectClipRgn();
	// "ExtSelectClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtSelectClipRgnImpl();
	// "ExtSelectClipRgnImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtTextOutA();
	// "ExtTextOutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtTextOutAImpl();
	// "ExtTextOutAImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtTextOutW();
	// "ExtTextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtTextOutWImpl();
	// "ExtTextOutWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_cGetAllGlyphHandles();
	// "FONTOBJ_cGetAllGlyphHandles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_cGetGlyphs();
	// "FONTOBJ_cGetGlyphs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_pQueryGlyphAttrs();
	// "FONTOBJ_pQueryGlyphAttrs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_pfdg();
	// "FONTOBJ_pfdg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_pifi();
	// "FONTOBJ_pifi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_pvTrueTypeFontFile();
	// "FONTOBJ_pvTrueTypeFontFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_pxoGetXform();
	// "FONTOBJ_pxoGetXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FONTOBJ_vGetInfo();
	// "FONTOBJ_vGetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillPath();
	// "FillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillPathImpl();
	// "FillPathImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillRgn();
	// "FillRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillRgnStub();
	// "FillRgnStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FixBrushOrgEx();
	// "FixBrushOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlattenPath();
	// "FlattenPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FloodFill();
	// "FloodFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FontIsLinked();
	// "FontIsLinked" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FrameRgn();
	// "FrameRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FrameRgnStub();
	// "FrameRgnStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Gdi32DllInitialize();
	// "Gdi32DllInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiAddFontResourceW();
	// "GdiAddFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiAddGlsBounds();
	// "GdiAddGlsBounds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiAddGlsRecord();
	// "GdiAddGlsRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiAlphaBlend();
	// "GdiAlphaBlend" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiArtificialDecrementDriver();
	// "GdiArtificialDecrementDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiBatchLimit();
	// "GdiBatchLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiCleanCacheDC();
	// "GdiCleanCacheDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiComment();
	// "GdiComment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiCommentStub();
	// "GdiCommentStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConsoleTextOut();
	// "GdiConsoleTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertAndCheckDC();
	// "GdiConvertAndCheckDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertBitmap();
	// "GdiConvertBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertBitmapV5();
	// "GdiConvertBitmapV5" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertBrush();
	// "GdiConvertBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertDC();
	// "GdiConvertDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertEnhMetaFile();
	// "GdiConvertEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertFont();
	// "GdiConvertFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertMetaFilePict();
	// "GdiConvertMetaFilePict" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertPalette();
	// "GdiConvertPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertRegion();
	// "GdiConvertRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiConvertToDevmodeW();
	// "GdiConvertToDevmodeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiCreateLocalEnhMetaFile();
	// "GdiCreateLocalEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiCreateLocalMetaFilePict();
	// "GdiCreateLocalMetaFilePict" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDeleteLocalDC();
	// "GdiDeleteLocalDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDeleteSpoolFileHandle();
	// "GdiDeleteSpoolFileHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDescribePixelFormat();
	// "GdiDescribePixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDllInitialize();
	// "GdiDllInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDllInitializeWrapper();
	// "GdiDllInitializeWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiDrawStream();
	// "GdiDrawStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEndDocEMF();
	// "GdiEndDocEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEndPageEMF();
	// "GdiEndPageEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry1();
	// "GdiEntry1" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry10();
	// "GdiEntry10" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry11();
	// "GdiEntry11" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry12();
	// "GdiEntry12" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry13();
	// "GdiEntry13" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry14();
	// "GdiEntry14" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry15();
	// "GdiEntry15" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry16();
	// "GdiEntry16" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry2();
	// "GdiEntry2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry3();
	// "GdiEntry3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry4();
	// "GdiEntry4" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry5();
	// "GdiEntry5" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry6();
	// "GdiEntry6" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry7();
	// "GdiEntry7" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry8();
	// "GdiEntry8" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiEntry9();
	// "GdiEntry9" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiFixUpHandle();
	// "GdiFixUpHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiFlush();
	// "GdiFlush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiFullscreenControl();
	// "GdiFullscreenControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetBatchLimit();
	// "GdiGetBatchLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetBitmapBitsSize();
	// "GdiGetBitmapBitsSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetCharDimensions();
	// "GdiGetCharDimensions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetCodePage();
	// "GdiGetCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetDC();
	// "GdiGetDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetDevmodeForPage();
	// "GdiGetDevmodeForPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetEntry();
	// "GdiGetEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetLocalBrush();
	// "GdiGetLocalBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetLocalDC();
	// "GdiGetLocalDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetLocalFont();
	// "GdiGetLocalFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetPageCount();
	// "GdiGetPageCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetPageHandle();
	// "GdiGetPageHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetSpoolFileHandle();
	// "GdiGetSpoolFileHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGetSpoolMessage();
	// "GdiGetSpoolMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiGradientFill();
	// "GdiGradientFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiInitSpool();
	// "GdiInitSpool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiInitializeLanguagePack();
	// "GdiInitializeLanguagePack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiIsMetaFileDC();
	// "GdiIsMetaFileDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiIsMetaPrintDC();
	// "GdiIsMetaPrintDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiIsPlayMetafileDC();
	// "GdiIsPlayMetafileDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiIsScreenDC();
	// "GdiIsScreenDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiIsUMPDSandboxingEnabled();
	// "GdiIsUMPDSandboxingEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiLoadType1Fonts();
	// "GdiLoadType1Fonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayDCScript();
	// "GdiPlayDCScript" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayEMF();
	// "GdiPlayEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayJournal();
	// "GdiPlayJournal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayPageEMF();
	// "GdiPlayPageEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayPrivatePageEMF();
	// "GdiPlayPrivatePageEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPlayScript();
	// "GdiPlayScript" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiPrinterThunk();
	// "GdiPrinterThunk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiProcessSetup();
	// "GdiProcessSetup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiQueryFonts();
	// "GdiQueryFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiQueryTable();
	// "GdiQueryTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiRealizationInfo();
	// "GdiRealizationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiReleaseDC();
	// "GdiReleaseDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiReleaseLocalDC();
	// "GdiReleaseLocalDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiResetDCEMF();
	// "GdiResetDCEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSetAttrs();
	// "GdiSetAttrs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSetBatchLimit();
	// "GdiSetBatchLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSetLastError();
	// "GdiSetLastError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSetPixelFormat();
	// "GdiSetPixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSetServerAttr();
	// "GdiSetServerAttr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiStartDocEMF();
	// "GdiStartDocEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiStartPageEMF();
	// "GdiStartPageEMF" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSupportsFontChangeEvent();
	// "GdiSupportsFontChangeEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiSwapBuffers();
	// "GdiSwapBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiTransparentBlt();
	// "GdiTransparentBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GdiValidateHandle();
	// "GdiValidateHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetArcDirection();
	// "GetArcDirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAspectRatioFilterEx();
	// "GetAspectRatioFilterEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBitmapAttributes();
	// "GetBitmapAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBitmapBits();
	// "GetBitmapBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBitmapDimensionEx();
	// "GetBitmapDimensionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBkColor();
	// "GetBkColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBkMode();
	// "GetBkMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBoundsRect();
	// "GetBoundsRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBrushAttributes();
	// "GetBrushAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBrushOrgEx();
	// "GetBrushOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCOPPCompatibleOPMInformation();
	// "GetCOPPCompatibleOPMInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCertificate();
	// "GetCertificate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCertificateByHandle();
	// "GetCertificateByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCertificateSize();
	// "GetCertificateSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCertificateSizeByHandle();
	// "GetCertificateSizeByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharABCWidthsA();
	// "GetCharABCWidthsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharABCWidthsFloatA();
	// "GetCharABCWidthsFloatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharABCWidthsFloatW();
	// "GetCharABCWidthsFloatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharABCWidthsI();
	// "GetCharABCWidthsI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharABCWidthsW();
	// "GetCharABCWidthsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidth32A();
	// "GetCharWidth32A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidth32W();
	// "GetCharWidth32W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthA();
	// "GetCharWidthA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthFloatA();
	// "GetCharWidthFloatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthFloatW();
	// "GetCharWidthFloatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthI();
	// "GetCharWidthI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthInfo();
	// "GetCharWidthInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharWidthW();
	// "GetCharWidthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharacterPlacementA();
	// "GetCharacterPlacementA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCharacterPlacementW();
	// "GetCharacterPlacementW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipBox();
	// "GetClipBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipBoxImpl();
	// "GetClipBoxImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetClipRgn();
	// "GetClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCodePage();
	// "GetCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetColorAdjustment();
	// "GetColorAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetColorSpace();
	// "GetColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentDpiInfo();
	// "GetCurrentDpiInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentObject();
	// "GetCurrentObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPositionEx();
	// "GetCurrentPositionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPositionExStub();
	// "GetCurrentPositionExStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDCBrushColor();
	// "GetDCBrushColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDCOrgEx();
	// "GetDCOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDCPenColor();
	// "GetDCPenColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDIBColorTable();
	// "GetDIBColorTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDIBits();
	// "GetDIBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDeviceCaps();
	// "GetDeviceCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDeviceGammaRamp();
	// "GetDeviceGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetETM();
	// "GetETM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEUDCTimeStamp();
	// "GetEUDCTimeStamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEUDCTimeStampExW();
	// "GetEUDCTimeStampExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileA();
	// "GetEnhMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileAStub();
	// "GetEnhMetaFileAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileBits();
	// "GetEnhMetaFileBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileDescriptionA();
	// "GetEnhMetaFileDescriptionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileDescriptionAStub();
	// "GetEnhMetaFileDescriptionAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileDescriptionW();
	// "GetEnhMetaFileDescriptionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileHeader();
	// "GetEnhMetaFileHeader" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFilePaletteEntries();
	// "GetEnhMetaFilePaletteEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFilePixelFormat();
	// "GetEnhMetaFilePixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnhMetaFileW();
	// "GetEnhMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontAssocStatus();
	// "GetFontAssocStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontData();
	// "GetFontData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontDataImpl();
	// "GetFontDataImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontFileData();
	// "GetFontFileData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontFileInfo();
	// "GetFontFileInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontLanguageInfo();
	// "GetFontLanguageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontRealizationInfo();
	// "GetFontRealizationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontResourceInfoW();
	// "GetFontResourceInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFontUnicodeRanges();
	// "GetFontUnicodeRanges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphIndicesA();
	// "GetGlyphIndicesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphIndicesW();
	// "GetGlyphIndicesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphOutline();
	// "GetGlyphOutline" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphOutlineA();
	// "GetGlyphOutlineA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphOutlineAStub();
	// "GetGlyphOutlineAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphOutlineW();
	// "GetGlyphOutlineW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGlyphOutlineWow();
	// "GetGlyphOutlineWow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGraphicsMode();
	// "GetGraphicsMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetHFONT();
	// "GetHFONT" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetICMProfileA();
	// "GetICMProfileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetICMProfileW();
	// "GetICMProfileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKerningPairs();
	// "GetKerningPairs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKerningPairsA();
	// "GetKerningPairsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKerningPairsW();
	// "GetKerningPairsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLayout();
	// "GetLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogColorSpaceA();
	// "GetLogColorSpaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogColorSpaceW();
	// "GetLogColorSpaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMapMode();
	// "GetMapMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMetaFileA();
	// "GetMetaFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMetaFileBitsEx();
	// "GetMetaFileBitsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMetaFileW();
	// "GetMetaFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMetaRgn();
	// "GetMetaRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMiterLimit();
	// "GetMiterLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNearestColor();
	// "GetNearestColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNearestPaletteIndex();
	// "GetNearestPaletteIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberOfPhysicalMonitors();
	// "GetNumberOfPhysicalMonitors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOPMInformation();
	// "GetOPMInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOPMRandomNumber();
	// "GetOPMRandomNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetObjectA();
	// "GetObjectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetObjectType();
	// "GetObjectType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetObjectW();
	// "GetObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOutlineTextMetricsA();
	// "GetOutlineTextMetricsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOutlineTextMetricsW();
	// "GetOutlineTextMetricsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPaletteEntries();
	// "GetPaletteEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPath();
	// "GetPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPhysicalMonitorDescription();
	// "GetPhysicalMonitorDescription" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPhysicalMonitors();
	// "GetPhysicalMonitors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPixel();
	// "GetPixel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPixelFormat();
	// "GetPixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPolyFillMode();
	// "GetPolyFillMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessSessionFonts();
	// "GetProcessSessionFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetROP2();
	// "GetROP2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetROP2Stub();
	// "GetROP2Stub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRandomRgn();
	// "GetRandomRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRasterizerCaps();
	// "GetRasterizerCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRasterizerCapsStub();
	// "GetRasterizerCapsStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRegionData();
	// "GetRegionData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRelAbs();
	// "GetRelAbs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetRgnBox();
	// "GetRgnBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStockObject();
	// "GetStockObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStretchBltMode();
	// "GetStretchBltMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringBitmapA();
	// "GetStringBitmapA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringBitmapW();
	// "GetStringBitmapW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSuggestedOPMProtectedOutputArraySize();
	// "GetSuggestedOPMProtectedOutputArraySize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemPaletteEntries();
	// "GetSystemPaletteEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemPaletteUse();
	// "GetSystemPaletteUse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextAlign();
	// "GetTextAlign" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextCharacterExtra();
	// "GetTextCharacterExtra" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextCharacterExtraStub();
	// "GetTextCharacterExtraStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextCharset();
	// "GetTextCharset" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextCharsetInfo();
	// "GetTextCharsetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextColor();
	// "GetTextColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentExPointA();
	// "GetTextExtentExPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentExPointAStub();
	// "GetTextExtentExPointAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentExPointI();
	// "GetTextExtentExPointI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentExPointW();
	// "GetTextExtentExPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentExPointWPri();
	// "GetTextExtentExPointWPri" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPoint32A();
	// "GetTextExtentPoint32A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPoint32AStub();
	// "GetTextExtentPoint32AStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPoint32W();
	// "GetTextExtentPoint32W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPointA();
	// "GetTextExtentPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPointAStub();
	// "GetTextExtentPointAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPointI();
	// "GetTextExtentPointI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextExtentPointW();
	// "GetTextExtentPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextFaceA();
	// "GetTextFaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextFaceAliasW();
	// "GetTextFaceAliasW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextFaceW();
	// "GetTextFaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextMetricsA();
	// "GetTextMetricsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextMetricsAImpl();
	// "GetTextMetricsAImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTextMetricsW();
	// "GetTextMetricsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTransform();
	// "GetTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetViewportExtEx();
	// "GetViewportExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetViewportOrgEx();
	// "GetViewportOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWinMetaFileBits();
	// "GetWinMetaFileBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowExtEx();
	// "GetWindowExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowOrgEx();
	// "GetWindowOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWorldTransform();
	// "GetWorldTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HT_Get8BPPFormatPalette();
	// "HT_Get8BPPFormatPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HT_Get8BPPMaskPalette();
	// "HT_Get8BPPMaskPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmDeleteLocalDC();
	// "IcmDeleteLocalDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IcmReleaseCachedColorSpace();
	// "IcmReleaseCachedColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InternalDeleteDC();
	// "InternalDeleteDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IntersectClipRect();
	// "IntersectClipRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IntersectClipRectImpl();
	// "IntersectClipRectImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvertRgn();
	// "InvertRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvertRgnStub();
	// "InvertRgnStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidEnhMetaRecord();
	// "IsValidEnhMetaRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidEnhMetaRecordOffExt();
	// "IsValidEnhMetaRecordOffExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LPtoDP();
	// "LPtoDP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LineDDA();
	// "LineDDA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LineTo();
	// "LineTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LineToImpl();
	// "LineToImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkDrawTextEx();
	// "LpkDrawTextEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkEditControl();
	// "LpkEditControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkExtTextOut();
	// "LpkExtTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkGetCharacterPlacement();
	// "LpkGetCharacterPlacement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkGetEditControl();
	// "LpkGetEditControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkGetTextExtentExPoint();
	// "LpkGetTextExtentExPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkInitialize();
	// "LpkInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkPSMTextOut();
	// "LpkPSMTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkPresent();
	// "LpkPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkTabbedTextOut();
	// "LpkTabbedTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkUseGDIWidthCache();
	// "LpkUseGDIWidthCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkpEditControlSize();
	// "LpkpEditControlSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LpkpInitializeEditControl();
	// "LpkpInitializeEditControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MF16_DeleteObject();
	// "MF16_DeleteObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MF_DeleteObject();
	// "MF_DeleteObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MaskBlt();
	// "MaskBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MirrorRgn();
	// "MirrorRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ModerncoreGdiInit();
	// "ModerncoreGdiInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ModifyWorldTransform();
	// "ModifyWorldTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveToEx();
	// "MoveToEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveToExImpl();
	// "MoveToExImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NamedEscape();
	// "NamedEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAbortDoc();
	// "NtGdiAbortDoc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAbortPath();
	// "NtGdiAbortPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAddEmbFontToDC();
	// "NtGdiAddEmbFontToDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAddFontMemResourceEx();
	// "NtGdiAddFontMemResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAddFontResourceW();
	// "NtGdiAddFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAddRemoteFontToDC();
	// "NtGdiAddRemoteFontToDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAddRemoteMMInstanceToDC();
	// "NtGdiAddRemoteMMInstanceToDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAlphaBlend();
	// "NtGdiAlphaBlend" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAngleArc();
	// "NtGdiAngleArc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiAnyLinkedFonts();
	// "NtGdiAnyLinkedFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiArcInternal();
	// "NtGdiArcInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBRUSHOBJ_DeleteRbrush();
	// "NtGdiBRUSHOBJ_DeleteRbrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBRUSHOBJ_hGetColorTransform();
	// "NtGdiBRUSHOBJ_hGetColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBRUSHOBJ_pvAllocRbrush();
	// "NtGdiBRUSHOBJ_pvAllocRbrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBRUSHOBJ_pvGetRbrush();
	// "NtGdiBRUSHOBJ_pvGetRbrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBRUSHOBJ_ulGetBrushColor();
	// "NtGdiBRUSHOBJ_ulGetBrushColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBeginGdiRendering();
	// "NtGdiBeginGdiRendering" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBeginPath();
	// "NtGdiBeginPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiBitBlt();
	// "NtGdiBitBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCLIPOBJ_bEnum();
	// "NtGdiCLIPOBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCLIPOBJ_cEnumStart();
	// "NtGdiCLIPOBJ_cEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCLIPOBJ_ppoGetPath();
	// "NtGdiCLIPOBJ_ppoGetPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCancelDC();
	// "NtGdiCancelDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiChangeGhostFont();
	// "NtGdiChangeGhostFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCheckBitmapBits();
	// "NtGdiCheckBitmapBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiClearBitmapAttributes();
	// "NtGdiClearBitmapAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiClearBrushAttributes();
	// "NtGdiClearBrushAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCloseFigure();
	// "NtGdiCloseFigure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiColorCorrectPalette();
	// "NtGdiColorCorrectPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCombineRgn();
	// "NtGdiCombineRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCombineTransform();
	// "NtGdiCombineTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiComputeXformCoefficients();
	// "NtGdiComputeXformCoefficients" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiConfigureOPMProtectedOutput();
	// "NtGdiConfigureOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiConvertMetafileRect();
	// "NtGdiConvertMetafileRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateBitmap();
	// "NtGdiCreateBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateBitmapFromDxSurface();
	// "NtGdiCreateBitmapFromDxSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateBitmapFromDxSurface2();
	// "NtGdiCreateBitmapFromDxSurface2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateClientObj();
	// "NtGdiCreateClientObj" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateColorSpace();
	// "NtGdiCreateColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateColorTransform();
	// "NtGdiCreateColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateCompatibleBitmap();
	// "NtGdiCreateCompatibleBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateCompatibleDC();
	// "NtGdiCreateCompatibleDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateDIBBrush();
	// "NtGdiCreateDIBBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateDIBSection();
	// "NtGdiCreateDIBSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateDIBitmapInternal();
	// "NtGdiCreateDIBitmapInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateEllipticRgn();
	// "NtGdiCreateEllipticRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateHalftonePalette();
	// "NtGdiCreateHalftonePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateHatchBrushInternal();
	// "NtGdiCreateHatchBrushInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateMetafileDC();
	// "NtGdiCreateMetafileDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateOPMProtectedOutput();
	// "NtGdiCreateOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateOPMProtectedOutputs();
	// "NtGdiCreateOPMProtectedOutputs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreatePaletteInternal();
	// "NtGdiCreatePaletteInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreatePatternBrushInternal();
	// "NtGdiCreatePatternBrushInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreatePen();
	// "NtGdiCreatePen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateRectRgn();
	// "NtGdiCreateRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateRoundRectRgn();
	// "NtGdiCreateRoundRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateServerMetaFile();
	// "NtGdiCreateServerMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateSessionMappedDIBSection();
	// "NtGdiCreateSessionMappedDIBSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiCreateSolidBrush();
	// "NtGdiCreateSolidBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiD3dContextCreate();
	// "NtGdiD3dContextCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiD3dContextDestroy();
	// "NtGdiD3dContextDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiD3dContextDestroyAll();
	// "NtGdiD3dContextDestroyAll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiD3dDrawPrimitives2();
	// "NtGdiD3dDrawPrimitives2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiD3dValidateTextureStageState();
	// "NtGdiD3dValidateTextureStageState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCIGetCapabilitiesString();
	// "NtGdiDDCCIGetCapabilitiesString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCIGetCapabilitiesStringLength();
	// "NtGdiDDCCIGetCapabilitiesStringLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCIGetTimingReport();
	// "NtGdiDDCCIGetTimingReport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCIGetVCPFeature();
	// "NtGdiDDCCIGetVCPFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCISaveCurrentSettings();
	// "NtGdiDDCCISaveCurrentSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDDCCISetVCPFeature();
	// "NtGdiDDCCISetVCPFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdAddAttachedSurface();
	// "NtGdiDdAddAttachedSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdAlphaBlt();
	// "NtGdiDdAlphaBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdAttachSurface();
	// "NtGdiDdAttachSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdBeginMoCompFrame();
	// "NtGdiDdBeginMoCompFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdBlt();
	// "NtGdiDdBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCanCreateD3DBuffer();
	// "NtGdiDdCanCreateD3DBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCanCreateSurface();
	// "NtGdiDdCanCreateSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdColorControl();
	// "NtGdiDdColorControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateD3DBuffer();
	// "NtGdiDdCreateD3DBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateDirectDrawObject();
	// "NtGdiDdCreateDirectDrawObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateFullscreenSprite();
	// "NtGdiDdCreateFullscreenSprite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateMoComp();
	// "NtGdiDdCreateMoComp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateSurface();
	// "NtGdiDdCreateSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateSurfaceEx();
	// "NtGdiDdCreateSurfaceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdCreateSurfaceObject();
	// "NtGdiDdCreateSurfaceObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIAbandonSwapChain();
	// "NtGdiDdDDIAbandonSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIAcquireKeyedMutex();
	// "NtGdiDdDDIAcquireKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIAcquireKeyedMutex2();
	// "NtGdiDdDDIAcquireKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIAcquireSwapChain();
	// "NtGdiDdDDIAcquireSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIAdjustFullscreenGamma();
	// "NtGdiDdDDIAdjustFullscreenGamma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICacheHybridQueryValue();
	// "NtGdiDdDDICacheHybridQueryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIChangeVideoMemoryReservation();
	// "NtGdiDdDDIChangeVideoMemoryReservation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckExclusiveOwnership();
	// "NtGdiDdDDICheckExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckMonitorPowerState();
	// "NtGdiDdDDICheckMonitorPowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport();
	// "NtGdiDdDDICheckMultiPlaneOverlaySupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport2();
	// "NtGdiDdDDICheckMultiPlaneOverlaySupport2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport3();
	// "NtGdiDdDDICheckMultiPlaneOverlaySupport3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckOcclusion();
	// "NtGdiDdDDICheckOcclusion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckSharedResourceAccess();
	// "NtGdiDdDDICheckSharedResourceAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICheckVidPnExclusiveOwnership();
	// "NtGdiDdDDICheckVidPnExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICloseAdapter();
	// "NtGdiDdDDICloseAdapter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIConfigureSharedResource();
	// "NtGdiDdDDIConfigureSharedResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateAllocation();
	// "NtGdiDdDDICreateAllocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateContext();
	// "NtGdiDdDDICreateContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateContextVirtual();
	// "NtGdiDdDDICreateContextVirtual" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateDCFromMemory();
	// "NtGdiDdDDICreateDCFromMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateDevice();
	// "NtGdiDdDDICreateDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateKeyedMutex();
	// "NtGdiDdDDICreateKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateKeyedMutex2();
	// "NtGdiDdDDICreateKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateOutputDupl();
	// "NtGdiDdDDICreateOutputDupl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateOverlay();
	// "NtGdiDdDDICreateOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreatePagingQueue();
	// "NtGdiDdDDICreatePagingQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateSwapChain();
	// "NtGdiDdDDICreateSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDICreateSynchronizationObject();
	// "NtGdiDdDDICreateSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyAllocation();
	// "NtGdiDdDDIDestroyAllocation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyAllocation2();
	// "NtGdiDdDDIDestroyAllocation2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyContext();
	// "NtGdiDdDDIDestroyContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyDCFromMemory();
	// "NtGdiDdDDIDestroyDCFromMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyDevice();
	// "NtGdiDdDDIDestroyDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyKeyedMutex();
	// "NtGdiDdDDIDestroyKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyOutputDupl();
	// "NtGdiDdDDIDestroyOutputDupl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyOverlay();
	// "NtGdiDdDDIDestroyOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroyPagingQueue();
	// "NtGdiDdDDIDestroyPagingQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIDestroySynchronizationObject();
	// "NtGdiDdDDIDestroySynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIEnumAdapters();
	// "NtGdiDdDDIEnumAdapters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIEnumAdapters2();
	// "NtGdiDdDDIEnumAdapters2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIEscape();
	// "NtGdiDdDDIEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIEvict();
	// "NtGdiDdDDIEvict" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIFlipOverlay();
	// "NtGdiDdDDIFlipOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIFlushHeapTransitions();
	// "NtGdiDdDDIFlushHeapTransitions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIFreeGpuVirtualAddress();
	// "NtGdiDdDDIFreeGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetCachedHybridQueryValue();
	// "NtGdiDdDDIGetCachedHybridQueryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetContextInProcessSchedulingPriority();
	// "NtGdiDdDDIGetContextInProcessSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetContextSchedulingPriority();
	// "NtGdiDdDDIGetContextSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetDWMVerticalBlankEvent();
	// "NtGdiDdDDIGetDWMVerticalBlankEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetDeviceState();
	// "NtGdiDdDDIGetDeviceState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetDisplayModeList();
	// "NtGdiDdDDIGetDisplayModeList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetMultisampleMethodList();
	// "NtGdiDdDDIGetMultisampleMethodList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetOverlayState();
	// "NtGdiDdDDIGetOverlayState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetPresentHistory();
	// "NtGdiDdDDIGetPresentHistory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetPresentQueueEvent();
	// "NtGdiDdDDIGetPresentQueueEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetProcessSchedulingPriorityClass();
	// "NtGdiDdDDIGetProcessSchedulingPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetResourcePresentPrivateDriverData();
	// "NtGdiDdDDIGetResourcePresentPrivateDriverData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetRuntimeData();
	// "NtGdiDdDDIGetRuntimeData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetScanLine();
	// "NtGdiDdDDIGetScanLine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetSetSwapChainMetadata();
	// "NtGdiDdDDIGetSetSwapChainMetadata" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetSharedPrimaryHandle();
	// "NtGdiDdDDIGetSharedPrimaryHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIGetSharedResourceAdapterLuid();
	// "NtGdiDdDDIGetSharedResourceAdapterLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIInvalidateActiveVidPn();
	// "NtGdiDdDDIInvalidateActiveVidPn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIInvalidateCache();
	// "NtGdiDdDDIInvalidateCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDILock();
	// "NtGdiDdDDILock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDILock2();
	// "NtGdiDdDDILock2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIMakeResident();
	// "NtGdiDdDDIMakeResident" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIMapGpuVirtualAddress();
	// "NtGdiDdDDIMapGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIMarkDeviceAsError();
	// "NtGdiDdDDIMarkDeviceAsError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispGetNextChunkInfo();
	// "NtGdiDdDDINetDispGetNextChunkInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispQueryMiracastDisplayDeviceStatus();
	// "NtGdiDdDDINetDispQueryMiracastDisplayDeviceStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispQueryMiracastDisplayDeviceSupport();
	// "NtGdiDdDDINetDispQueryMiracastDisplayDeviceSupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispStartMiracastDisplayDevice();
	// "NtGdiDdDDINetDispStartMiracastDisplayDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispStopMiracastDisplayDevice();
	// "NtGdiDdDDINetDispStopMiracastDisplayDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDINetDispStopSessions();
	// "NtGdiDdDDINetDispStopSessions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOfferAllocations();
	// "NtGdiDdDDIOfferAllocations" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenAdapterFromDeviceName();
	// "NtGdiDdDDIOpenAdapterFromDeviceName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenAdapterFromHdc();
	// "NtGdiDdDDIOpenAdapterFromHdc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenAdapterFromLuid();
	// "NtGdiDdDDIOpenAdapterFromLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenKeyedMutex();
	// "NtGdiDdDDIOpenKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenKeyedMutex2();
	// "NtGdiDdDDIOpenKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenNtHandleFromName();
	// "NtGdiDdDDIOpenNtHandleFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenResource();
	// "NtGdiDdDDIOpenResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenResourceFromNtHandle();
	// "NtGdiDdDDIOpenResourceFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenSwapChain();
	// "NtGdiDdDDIOpenSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenSyncObjectFromNtHandle();
	// "NtGdiDdDDIOpenSyncObjectFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenSyncObjectFromNtHandle2();
	// "NtGdiDdDDIOpenSyncObjectFromNtHandle2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenSyncObjectNtHandleFromName();
	// "NtGdiDdDDIOpenSyncObjectNtHandleFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOpenSynchronizationObject();
	// "NtGdiDdDDIOpenSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOutputDuplGetFrameInfo();
	// "NtGdiDdDDIOutputDuplGetFrameInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOutputDuplGetMetaData();
	// "NtGdiDdDDIOutputDuplGetMetaData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOutputDuplGetPointerShapeData();
	// "NtGdiDdDDIOutputDuplGetPointerShapeData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOutputDuplPresent();
	// "NtGdiDdDDIOutputDuplPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIOutputDuplReleaseFrame();
	// "NtGdiDdDDIOutputDuplReleaseFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPinDirectFlipResources();
	// "NtGdiDdDDIPinDirectFlipResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPollDisplayChildren();
	// "NtGdiDdDDIPollDisplayChildren" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPresent();
	// "NtGdiDdDDIPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay();
	// "NtGdiDdDDIPresentMultiPlaneOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay2();
	// "NtGdiDdDDIPresentMultiPlaneOverlay2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay3();
	// "NtGdiDdDDIPresentMultiPlaneOverlay3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryAdapterInfo();
	// "NtGdiDdDDIQueryAdapterInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryAllocationResidency();
	// "NtGdiDdDDIQueryAllocationResidency" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryClockCalibration();
	// "NtGdiDdDDIQueryClockCalibration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryFSEBlock();
	// "NtGdiDdDDIQueryFSEBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryProcessOfferInfo();
	// "NtGdiDdDDIQueryProcessOfferInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryRemoteVidPnSourceFromGdiDisplayName();
	// "NtGdiDdDDIQueryRemoteVidPnSourceFromGdiDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryResourceInfo();
	// "NtGdiDdDDIQueryResourceInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryResourceInfoFromNtHandle();
	// "NtGdiDdDDIQueryResourceInfoFromNtHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryStatistics();
	// "NtGdiDdDDIQueryStatistics" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryVidPnExclusiveOwnership();
	// "NtGdiDdDDIQueryVidPnExclusiveOwnership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIQueryVideoMemoryInfo();
	// "NtGdiDdDDIQueryVideoMemoryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReclaimAllocations();
	// "NtGdiDdDDIReclaimAllocations" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReclaimAllocations2();
	// "NtGdiDdDDIReclaimAllocations2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReleaseKeyedMutex();
	// "NtGdiDdDDIReleaseKeyedMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReleaseKeyedMutex2();
	// "NtGdiDdDDIReleaseKeyedMutex2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReleaseProcessVidPnSourceOwners();
	// "NtGdiDdDDIReleaseProcessVidPnSourceOwners" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReleaseSwapChain();
	// "NtGdiDdDDIReleaseSwapChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIRender();
	// "NtGdiDdDDIRender" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIReserveGpuVirtualAddress();
	// "NtGdiDdDDIReserveGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetAllocationPriority();
	// "NtGdiDdDDISetAllocationPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetContextInProcessSchedulingPriority();
	// "NtGdiDdDDISetContextInProcessSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetContextSchedulingPriority();
	// "NtGdiDdDDISetContextSchedulingPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetDisplayMode();
	// "NtGdiDdDDISetDisplayMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetDisplayPrivateDriverFormat();
	// "NtGdiDdDDISetDisplayPrivateDriverFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetDodIndirectSwapchain();
	// "NtGdiDdDDISetDodIndirectSwapchain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetFSEBlock();
	// "NtGdiDdDDISetFSEBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetGammaRamp();
	// "NtGdiDdDDISetGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetHwProtectionTeardownRecovery();
	// "NtGdiDdDDISetHwProtectionTeardownRecovery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetProcessSchedulingPriorityClass();
	// "NtGdiDdDDISetProcessSchedulingPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetQueuedLimit();
	// "NtGdiDdDDISetQueuedLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetStablePowerState();
	// "NtGdiDdDDISetStablePowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetStereoEnabled();
	// "NtGdiDdDDISetStereoEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetSyncRefreshCountWaitTarget();
	// "NtGdiDdDDISetSyncRefreshCountWaitTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetVidPnSourceHwProtection();
	// "NtGdiDdDDISetVidPnSourceHwProtection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetVidPnSourceOwner();
	// "NtGdiDdDDISetVidPnSourceOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISetVidPnSourceOwner1();
	// "NtGdiDdDDISetVidPnSourceOwner1" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIShareObjects();
	// "NtGdiDdDDIShareObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISharedPrimaryLockNotification();
	// "NtGdiDdDDISharedPrimaryLockNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISharedPrimaryUnLockNotification();
	// "NtGdiDdDDISharedPrimaryUnLockNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISignalSynchronizationObject();
	// "NtGdiDdDDISignalSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromCpu();
	// "NtGdiDdDDISignalSynchronizationObjectFromCpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromGpu();
	// "NtGdiDdDDISignalSynchronizationObjectFromGpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromGpu2();
	// "NtGdiDdDDISignalSynchronizationObjectFromGpu2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDISubmitCommand();
	// "NtGdiDdDDISubmitCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDITrimProcessCommitment();
	// "NtGdiDdDDITrimProcessCommitment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUnlock();
	// "NtGdiDdDDIUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUnlock2();
	// "NtGdiDdDDIUnlock2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUnpinDirectFlipResources();
	// "NtGdiDdDDIUnpinDirectFlipResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUpdateAllocationProperty();
	// "NtGdiDdDDIUpdateAllocationProperty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUpdateGpuVirtualAddress();
	// "NtGdiDdDDIUpdateGpuVirtualAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIUpdateOverlay();
	// "NtGdiDdDDIUpdateOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForIdle();
	// "NtGdiDdDDIWaitForIdle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForSynchronizationObject();
	// "NtGdiDdDDIWaitForSynchronizationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForSynchronizationObjectFromCpu();
	// "NtGdiDdDDIWaitForSynchronizationObjectFromCpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForSynchronizationObjectFromGpu();
	// "NtGdiDdDDIWaitForSynchronizationObjectFromGpu" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForVerticalBlankEvent();
	// "NtGdiDdDDIWaitForVerticalBlankEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDDIWaitForVerticalBlankEvent2();
	// "NtGdiDdDDIWaitForVerticalBlankEvent2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDeleteDirectDrawObject();
	// "NtGdiDdDeleteDirectDrawObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDeleteSurfaceObject();
	// "NtGdiDdDeleteSurfaceObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDestroyD3DBuffer();
	// "NtGdiDdDestroyD3DBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDestroyFullscreenSprite();
	// "NtGdiDdDestroyFullscreenSprite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDestroyMoComp();
	// "NtGdiDdDestroyMoComp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdDestroySurface();
	// "NtGdiDdDestroySurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdEndMoCompFrame();
	// "NtGdiDdEndMoCompFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdFlip();
	// "NtGdiDdFlip" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdFlipToGDISurface();
	// "NtGdiDdFlipToGDISurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetAvailDriverMemory();
	// "NtGdiDdGetAvailDriverMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetBltStatus();
	// "NtGdiDdGetBltStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetDC();
	// "NtGdiDdGetDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetDriverInfo();
	// "NtGdiDdGetDriverInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetDriverState();
	// "NtGdiDdGetDriverState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetDxHandle();
	// "NtGdiDdGetDxHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetFlipStatus();
	// "NtGdiDdGetFlipStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetInternalMoCompInfo();
	// "NtGdiDdGetInternalMoCompInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetMoCompBuffInfo();
	// "NtGdiDdGetMoCompBuffInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetMoCompFormats();
	// "NtGdiDdGetMoCompFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetMoCompGuids();
	// "NtGdiDdGetMoCompGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdGetScanLine();
	// "NtGdiDdGetScanLine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdLock();
	// "NtGdiDdLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdLockD3D();
	// "NtGdiDdLockD3D" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdNotifyFullscreenSpriteUpdate();
	// "NtGdiDdNotifyFullscreenSpriteUpdate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdQueryDirectDrawObject();
	// "NtGdiDdQueryDirectDrawObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdQueryMoCompStatus();
	// "NtGdiDdQueryMoCompStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdQueryVisRgnUniqueness();
	// "NtGdiDdQueryVisRgnUniqueness" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdReenableDirectDrawObject();
	// "NtGdiDdReenableDirectDrawObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdReleaseDC();
	// "NtGdiDdReleaseDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdRenderMoComp();
	// "NtGdiDdRenderMoComp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdResetVisrgn();
	// "NtGdiDdResetVisrgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdSetColorKey();
	// "NtGdiDdSetColorKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdSetExclusiveMode();
	// "NtGdiDdSetExclusiveMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdSetGammaRamp();
	// "NtGdiDdSetGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdSetOverlayPosition();
	// "NtGdiDdSetOverlayPosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdUnattachSurface();
	// "NtGdiDdUnattachSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdUnlock();
	// "NtGdiDdUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdUnlockD3D();
	// "NtGdiDdUnlockD3D" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdUpdateOverlay();
	// "NtGdiDdUpdateOverlay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDdWaitForVerticalBlank();
	// "NtGdiDdWaitForVerticalBlank" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDeleteClientObj();
	// "NtGdiDeleteClientObj" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDeleteColorSpace();
	// "NtGdiDeleteColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDeleteColorTransform();
	// "NtGdiDeleteColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDeleteObjectApp();
	// "NtGdiDeleteObjectApp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDescribePixelFormat();
	// "NtGdiDescribePixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDestroyOPMProtectedOutput();
	// "NtGdiDestroyOPMProtectedOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDestroyPhysicalMonitor();
	// "NtGdiDestroyPhysicalMonitor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDoBanding();
	// "NtGdiDoBanding" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDoPalette();
	// "NtGdiDoPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDrawEscape();
	// "NtGdiDrawEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDrawStream();
	// "NtGdiDrawStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpAcquireNotification();
	// "NtGdiDvpAcquireNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpCanCreateVideoPort();
	// "NtGdiDvpCanCreateVideoPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpColorControl();
	// "NtGdiDvpColorControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpCreateVideoPort();
	// "NtGdiDvpCreateVideoPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpDestroyVideoPort();
	// "NtGdiDvpDestroyVideoPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpFlipVideoPort();
	// "NtGdiDvpFlipVideoPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortBandwidth();
	// "NtGdiDvpGetVideoPortBandwidth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortConnectInfo();
	// "NtGdiDvpGetVideoPortConnectInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortField();
	// "NtGdiDvpGetVideoPortField" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortFlipStatus();
	// "NtGdiDvpGetVideoPortFlipStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortInputFormats();
	// "NtGdiDvpGetVideoPortInputFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortLine();
	// "NtGdiDvpGetVideoPortLine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoPortOutputFormats();
	// "NtGdiDvpGetVideoPortOutputFormats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpGetVideoSignalStatus();
	// "NtGdiDvpGetVideoSignalStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpReleaseNotification();
	// "NtGdiDvpReleaseNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpUpdateVideoPort();
	// "NtGdiDvpUpdateVideoPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDvpWaitForVideoPortSync();
	// "NtGdiDvpWaitForVideoPortSync" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDwmCreatedBitmapRemotingOutput();
	// "NtGdiDwmCreatedBitmapRemotingOutput" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiDxgGenericThunk();
	// "NtGdiDxgGenericThunk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEllipse();
	// "NtGdiEllipse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEnableEudc();
	// "NtGdiEnableEudc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEndDoc();
	// "NtGdiEndDoc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEndGdiRendering();
	// "NtGdiEndGdiRendering" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEndPage();
	// "NtGdiEndPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEndPath();
	// "NtGdiEndPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngAlphaBlend();
	// "NtGdiEngAlphaBlend" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngAssociateSurface();
	// "NtGdiEngAssociateSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngBitBlt();
	// "NtGdiEngBitBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCheckAbort();
	// "NtGdiEngCheckAbort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngComputeGlyphSet();
	// "NtGdiEngComputeGlyphSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCopyBits();
	// "NtGdiEngCopyBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCreateBitmap();
	// "NtGdiEngCreateBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCreateClip();
	// "NtGdiEngCreateClip" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCreateDeviceBitmap();
	// "NtGdiEngCreateDeviceBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCreateDeviceSurface();
	// "NtGdiEngCreateDeviceSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngCreatePalette();
	// "NtGdiEngCreatePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngDeleteClip();
	// "NtGdiEngDeleteClip" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngDeletePalette();
	// "NtGdiEngDeletePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngDeletePath();
	// "NtGdiEngDeletePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngDeleteSurface();
	// "NtGdiEngDeleteSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngEraseSurface();
	// "NtGdiEngEraseSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngFillPath();
	// "NtGdiEngFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngGradientFill();
	// "NtGdiEngGradientFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngLineTo();
	// "NtGdiEngLineTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngLockSurface();
	// "NtGdiEngLockSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngMarkBandingSurface();
	// "NtGdiEngMarkBandingSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngPaint();
	// "NtGdiEngPaint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngPlgBlt();
	// "NtGdiEngPlgBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngStretchBlt();
	// "NtGdiEngStretchBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngStretchBltROP();
	// "NtGdiEngStretchBltROP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngStrokeAndFillPath();
	// "NtGdiEngStrokeAndFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngStrokePath();
	// "NtGdiEngStrokePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngTextOut();
	// "NtGdiEngTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngTransparentBlt();
	// "NtGdiEngTransparentBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEngUnlockSurface();
	// "NtGdiEngUnlockSurface" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEnumFonts();
	// "NtGdiEnumFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEnumObjects();
	// "NtGdiEnumObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEqualRgn();
	// "NtGdiEqualRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiEudcLoadUnloadLink();
	// "NtGdiEudcLoadUnloadLink" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExcludeClipRect();
	// "NtGdiExcludeClipRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtCreatePen();
	// "NtGdiExtCreatePen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtCreateRegion();
	// "NtGdiExtCreateRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtEscape();
	// "NtGdiExtEscape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtFloodFill();
	// "NtGdiExtFloodFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtGetObjectW();
	// "NtGdiExtGetObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtSelectClipRgn();
	// "NtGdiExtSelectClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiExtTextOutW();
	// "NtGdiExtTextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_cGetAllGlyphHandles();
	// "NtGdiFONTOBJ_cGetAllGlyphHandles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_cGetGlyphs();
	// "NtGdiFONTOBJ_cGetGlyphs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_pQueryGlyphAttrs();
	// "NtGdiFONTOBJ_pQueryGlyphAttrs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_pfdg();
	// "NtGdiFONTOBJ_pfdg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_pifi();
	// "NtGdiFONTOBJ_pifi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_pvTrueTypeFontFile();
	// "NtGdiFONTOBJ_pvTrueTypeFontFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_pxoGetXform();
	// "NtGdiFONTOBJ_pxoGetXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFONTOBJ_vGetInfo();
	// "NtGdiFONTOBJ_vGetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFillPath();
	// "NtGdiFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFillRgn();
	// "NtGdiFillRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFlattenPath();
	// "NtGdiFlattenPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFlush();
	// "NtGdiFlush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFontIsLinked();
	// "NtGdiFontIsLinked" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiForceUFIMapping();
	// "NtGdiForceUFIMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFrameRgn();
	// "NtGdiFrameRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiFullscreenControl();
	// "NtGdiFullscreenControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetAndSetDCDword();
	// "NtGdiGetAndSetDCDword" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetAppClipBox();
	// "NtGdiGetAppClipBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetBitmapBits();
	// "NtGdiGetBitmapBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetBitmapDimension();
	// "NtGdiGetBitmapDimension" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetBoundsRect();
	// "NtGdiGetBoundsRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCOPPCompatibleOPMInformation();
	// "NtGdiGetCOPPCompatibleOPMInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCertificate();
	// "NtGdiGetCertificate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCertificateByHandle();
	// "NtGdiGetCertificateByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCertificateSize();
	// "NtGdiGetCertificateSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCertificateSizeByHandle();
	// "NtGdiGetCertificateSizeByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCharABCWidthsW();
	// "NtGdiGetCharABCWidthsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCharSet();
	// "NtGdiGetCharSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCharWidthInfo();
	// "NtGdiGetCharWidthInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCharWidthW();
	// "NtGdiGetCharWidthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCharacterPlacementW();
	// "NtGdiGetCharacterPlacementW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetColorAdjustment();
	// "NtGdiGetColorAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetColorSpaceforBitmap();
	// "NtGdiGetColorSpaceforBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetCurrentDpiInfo();
	// "NtGdiGetCurrentDpiInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDCDword();
	// "NtGdiGetDCDword" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDCObject();
	// "NtGdiGetDCObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDCPoint();
	// "NtGdiGetDCPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDCforBitmap();
	// "NtGdiGetDCforBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDIBitsInternal();
	// "NtGdiGetDIBitsInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDeviceCaps();
	// "NtGdiGetDeviceCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDeviceCapsAll();
	// "NtGdiGetDeviceCapsAll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDeviceGammaRamp();
	// "NtGdiGetDeviceGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDeviceWidth();
	// "NtGdiGetDeviceWidth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetDhpdev();
	// "NtGdiGetDhpdev" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetETM();
	// "NtGdiGetETM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetEmbUFI();
	// "NtGdiGetEmbUFI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetEmbedFonts();
	// "NtGdiGetEmbedFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetEntry();
	// "NtGdiGetEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetEudcTimeStampEx();
	// "NtGdiGetEudcTimeStampEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetFontData();
	// "NtGdiGetFontData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetFontFileData();
	// "NtGdiGetFontFileData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetFontFileInfo();
	// "NtGdiGetFontFileInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetFontResourceInfoInternalW();
	// "NtGdiGetFontResourceInfoInternalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetFontUnicodeRanges();
	// "NtGdiGetFontUnicodeRanges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetGlyphIndicesW();
	// "NtGdiGetGlyphIndicesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetGlyphIndicesWInternal();
	// "NtGdiGetGlyphIndicesWInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetGlyphOutline();
	// "NtGdiGetGlyphOutline" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetKerningPairs();
	// "NtGdiGetKerningPairs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetLinkedUFIs();
	// "NtGdiGetLinkedUFIs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetMiterLimit();
	// "NtGdiGetMiterLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetMonitorID();
	// "NtGdiGetMonitorID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetNearestColor();
	// "NtGdiGetNearestColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetNearestPaletteIndex();
	// "NtGdiGetNearestPaletteIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetNumberOfPhysicalMonitors();
	// "NtGdiGetNumberOfPhysicalMonitors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetOPMInformation();
	// "NtGdiGetOPMInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetOPMRandomNumber();
	// "NtGdiGetOPMRandomNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetObjectBitmapHandle();
	// "NtGdiGetObjectBitmapHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetOutlineTextMetricsInternalW();
	// "NtGdiGetOutlineTextMetricsInternalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetPath();
	// "NtGdiGetPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetPerBandInfo();
	// "NtGdiGetPerBandInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetPhysicalMonitorDescription();
	// "NtGdiGetPhysicalMonitorDescription" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetPhysicalMonitors();
	// "NtGdiGetPhysicalMonitors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetPixel();
	// "NtGdiGetPixel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetRandomRgn();
	// "NtGdiGetRandomRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetRasterizerCaps();
	// "NtGdiGetRasterizerCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetRealizationInfo();
	// "NtGdiGetRealizationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetRegionData();
	// "NtGdiGetRegionData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetRgnBox();
	// "NtGdiGetRgnBox" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetServerMetaFileBits();
	// "NtGdiGetServerMetaFileBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetSpoolMessage();
	// "NtGdiGetSpoolMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetStats();
	// "NtGdiGetStats" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetStringBitmapW();
	// "NtGdiGetStringBitmapW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetSuggestedOPMProtectedOutputArraySize();
	// "NtGdiGetSuggestedOPMProtectedOutputArraySize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetSystemPaletteUse();
	// "NtGdiGetSystemPaletteUse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTextCharsetInfo();
	// "NtGdiGetTextCharsetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTextExtent();
	// "NtGdiGetTextExtent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTextExtentExW();
	// "NtGdiGetTextExtentExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTextFaceW();
	// "NtGdiGetTextFaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTextMetricsW();
	// "NtGdiGetTextMetricsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetTransform();
	// "NtGdiGetTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetUFI();
	// "NtGdiGetUFI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetUFIPathname();
	// "NtGdiGetUFIPathname" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGetWidthTable();
	// "NtGdiGetWidthTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiGradientFill();
	// "NtGdiGradientFill" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiHLSurfGetInformation();
	// "NtGdiHLSurfGetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiHLSurfSetInformation();
	// "NtGdiHLSurfSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiHT_Get8BPPFormatPalette();
	// "NtGdiHT_Get8BPPFormatPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiHT_Get8BPPMaskPalette();
	// "NtGdiHT_Get8BPPMaskPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiHfontCreate();
	// "NtGdiHfontCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiIcmBrushInfo();
	// "NtGdiIcmBrushInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiInit();
	// "NtGdiInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiInitSpool();
	// "NtGdiInitSpool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiIntersectClipRect();
	// "NtGdiIntersectClipRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiInvertRgn();
	// "NtGdiInvertRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiLineTo();
	// "NtGdiLineTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMakeFontDir();
	// "NtGdiMakeFontDir" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMakeInfoDC();
	// "NtGdiMakeInfoDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMakeObjectUnXferable();
	// "NtGdiMakeObjectUnXferable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMakeObjectXferable();
	// "NtGdiMakeObjectXferable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMaskBlt();
	// "NtGdiMaskBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMirrorWindowOrg();
	// "NtGdiMirrorWindowOrg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiModifyWorldTransform();
	// "NtGdiModifyWorldTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMonoBitmap();
	// "NtGdiMonoBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiMoveTo();
	// "NtGdiMoveTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiOffsetClipRgn();
	// "NtGdiOffsetClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiOffsetRgn();
	// "NtGdiOffsetRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiOpenDCW();
	// "NtGdiOpenDCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPATHOBJ_bEnum();
	// "NtGdiPATHOBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPATHOBJ_bEnumClipLines();
	// "NtGdiPATHOBJ_bEnumClipLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPATHOBJ_vEnumStart();
	// "NtGdiPATHOBJ_vEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPATHOBJ_vEnumStartClipLines();
	// "NtGdiPATHOBJ_vEnumStartClipLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPATHOBJ_vGetBounds();
	// "NtGdiPATHOBJ_vGetBounds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPatBlt();
	// "NtGdiPatBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPathToRegion();
	// "NtGdiPathToRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPlgBlt();
	// "NtGdiPlgBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPolyDraw();
	// "NtGdiPolyDraw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPolyPatBlt();
	// "NtGdiPolyPatBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPolyPolyDraw();
	// "NtGdiPolyPolyDraw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPolyTextOutW();
	// "NtGdiPolyTextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPtInRegion();
	// "NtGdiPtInRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiPtVisible();
	// "NtGdiPtVisible" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiQueryFontAssocInfo();
	// "NtGdiQueryFontAssocInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiQueryFonts();
	// "NtGdiQueryFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRectInRegion();
	// "NtGdiRectInRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRectVisible();
	// "NtGdiRectVisible" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRectangle();
	// "NtGdiRectangle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRemoveFontMemResourceEx();
	// "NtGdiRemoveFontMemResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRemoveFontResourceW();
	// "NtGdiRemoveFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRemoveMergeFont();
	// "NtGdiRemoveMergeFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiResetDC();
	// "NtGdiResetDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiResizePalette();
	// "NtGdiResizePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRestoreDC();
	// "NtGdiRestoreDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiRoundRect();
	// "NtGdiRoundRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSTROBJ_bEnum();
	// "NtGdiSTROBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSTROBJ_bEnumPositionsOnly();
	// "NtGdiSTROBJ_bEnumPositionsOnly" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSTROBJ_bGetAdvanceWidths();
	// "NtGdiSTROBJ_bGetAdvanceWidths" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSTROBJ_dwGetCodePage();
	// "NtGdiSTROBJ_dwGetCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSTROBJ_vEnumStart();
	// "NtGdiSTROBJ_vEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSaveDC();
	// "NtGdiSaveDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiScaleViewportExtEx();
	// "NtGdiScaleViewportExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiScaleWindowExtEx();
	// "NtGdiScaleWindowExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSelectBitmap();
	// "NtGdiSelectBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSelectBrush();
	// "NtGdiSelectBrush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSelectClipPath();
	// "NtGdiSelectClipPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSelectFont();
	// "NtGdiSelectFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSelectPen();
	// "NtGdiSelectPen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBitmapAttributes();
	// "NtGdiSetBitmapAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBitmapBits();
	// "NtGdiSetBitmapBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBitmapDimension();
	// "NtGdiSetBitmapDimension" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBoundsRect();
	// "NtGdiSetBoundsRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBrushAttributes();
	// "NtGdiSetBrushAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetBrushOrg();
	// "NtGdiSetBrushOrg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetColorAdjustment();
	// "NtGdiSetColorAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetColorSpace();
	// "NtGdiSetColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetDIBitsToDeviceInternal();
	// "NtGdiSetDIBitsToDeviceInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetDeviceGammaRamp();
	// "NtGdiSetDeviceGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetFontEnumeration();
	// "NtGdiSetFontEnumeration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetFontXform();
	// "NtGdiSetFontXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetIcmMode();
	// "NtGdiSetIcmMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetLayout();
	// "NtGdiSetLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetLinkedUFIs();
	// "NtGdiSetLinkedUFIs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetMagicColors();
	// "NtGdiSetMagicColors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetMetaRgn();
	// "NtGdiSetMetaRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetMiterLimit();
	// "NtGdiSetMiterLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetOPMSigningKeyAndSequenceNumbers();
	// "NtGdiSetOPMSigningKeyAndSequenceNumbers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetPUMPDOBJ();
	// "NtGdiSetPUMPDOBJ" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetPixel();
	// "NtGdiSetPixel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetPixelFormat();
	// "NtGdiSetPixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetRectRgn();
	// "NtGdiSetRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetSizeDevice();
	// "NtGdiSetSizeDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetSystemPaletteUse();
	// "NtGdiSetSystemPaletteUse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetTextJustification();
	// "NtGdiSetTextJustification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetUMPDSandboxState();
	// "NtGdiSetUMPDSandboxState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSetVirtualResolution();
	// "NtGdiSetVirtualResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStartDoc();
	// "NtGdiStartDoc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStartPage();
	// "NtGdiStartPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStretchBlt();
	// "NtGdiStretchBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStretchDIBitsInternal();
	// "NtGdiStretchDIBitsInternal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStrokeAndFillPath();
	// "NtGdiStrokeAndFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiStrokePath();
	// "NtGdiStrokePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiSwapBuffers();
	// "NtGdiSwapBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiTransformPoints();
	// "NtGdiTransformPoints" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiTransparentBlt();
	// "NtGdiTransparentBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUMPDEngFreeUserMem();
	// "NtGdiUMPDEngFreeUserMem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUnloadPrinterDriver();
	// "NtGdiUnloadPrinterDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUnmapMemFont();
	// "NtGdiUnmapMemFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUnrealizeObject();
	// "NtGdiUnrealizeObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUpdateColors();
	// "NtGdiUpdateColors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiUpdateTransform();
	// "NtGdiUpdateTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiWidenPath();
	// "NtGdiWidenPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiXFORMOBJ_bApplyXform();
	// "NtGdiXFORMOBJ_bApplyXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiXFORMOBJ_iGetXform();
	// "NtGdiXFORMOBJ_iGetXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiXLATEOBJ_cGetPalette();
	// "NtGdiXLATEOBJ_cGetPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiXLATEOBJ_hGetColorTransform();
	// "NtGdiXLATEOBJ_hGetColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGdiXLATEOBJ_iXlate();
	// "NtGdiXLATEOBJ_iXlate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OffsetClipRgn();
	// "OffsetClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OffsetRgn();
	// "OffsetRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OffsetViewportOrgEx();
	// "OffsetViewportOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OffsetWindowOrgEx();
	// "OffsetWindowOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PATHOBJ_bEnum();
	// "PATHOBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PATHOBJ_bEnumClipLines();
	// "PATHOBJ_bEnumClipLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PATHOBJ_vEnumStart();
	// "PATHOBJ_vEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PATHOBJ_vEnumStartClipLines();
	// "PATHOBJ_vEnumStartClipLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PATHOBJ_vGetBounds();
	// "PATHOBJ_vGetBounds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PaintRgn();
	// "PaintRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PatBlt();
	// "PatBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PathToRegion();
	// "PathToRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Pie();
	// "Pie" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PieStub();
	// "PieStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PlayEnhMetaFile();
	// "PlayEnhMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PlayEnhMetaFileRecord();
	// "PlayEnhMetaFileRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PlayMetaFile();
	// "PlayMetaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PlayMetaFileRecord();
	// "PlayMetaFileRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PlgBlt();
	// "PlgBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyBezier();
	// "PolyBezier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyBezierStub();
	// "PolyBezierStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyBezierTo();
	// "PolyBezierTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyBezierToImpl();
	// "PolyBezierToImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyDraw();
	// "PolyDraw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyDrawImpl();
	// "PolyDrawImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyPatBlt();
	// "PolyPatBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyPolygon();
	// "PolyPolygon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyPolygonStub();
	// "PolyPolygonStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyPolyline();
	// "PolyPolyline" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyTextOutA();
	// "PolyTextOutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolyTextOutW();
	// "PolyTextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Polygon();
	// "Polygon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolygonStub();
	// "PolygonStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Polyline();
	// "Polyline" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolylineTo();
	// "PolylineTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PolylineToImpl();
	// "PolylineToImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PtInRegion();
	// "PtInRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PtVisible();
	// "PtVisible" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryFontAssocStatus();
	// "QueryFontAssocStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RealizePalette();
	// "RealizePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RectInRegion();
	// "RectInRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RectVisible();
	// "RectVisible" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Rectangle();
	// "Rectangle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RectangleImpl();
	// "RectangleImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontMemResourceEx();
	// "RemoveFontMemResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceA();
	// "RemoveFontResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceAStub();
	// "RemoveFontResourceAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceExA();
	// "RemoveFontResourceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceExW();
	// "RemoveFontResourceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceTracking();
	// "RemoveFontResourceTracking" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceW();
	// "RemoveFontResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveFontResourceWImpl();
	// "RemoveFontResourceWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResetDCA();
	// "ResetDCA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResetDCW();
	// "ResetDCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResetDCWImpl();
	// "ResetDCWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResizePalette();
	// "ResizePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResizePaletteStub();
	// "ResizePaletteStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RestoreDC();
	// "RestoreDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RestoreDCImpl();
	// "RestoreDCImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RoundRect();
	// "RoundRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RoundRectStub();
	// "RoundRectStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall STROBJ_bEnum();
	// "STROBJ_bEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall STROBJ_bEnumPositionsOnly();
	// "STROBJ_bEnumPositionsOnly" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall STROBJ_bGetAdvanceWidths();
	// "STROBJ_bGetAdvanceWidths" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall STROBJ_dwGetCodePage();
	// "STROBJ_dwGetCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall STROBJ_vEnumStart();
	// "STROBJ_vEnumStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaveDC();
	// "SaveDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaveDCImpl();
	// "SaveDCImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScaleViewportExtEx();
	// "ScaleViewportExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScaleWindowExtEx();
	// "ScaleWindowExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptApplyDigitSubstitution();
	// "ScriptApplyDigitSubstitution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptApplyLogicalWidth();
	// "ScriptApplyLogicalWidth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptBreak();
	// "ScriptBreak" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptCPtoX();
	// "ScriptCPtoX" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptCacheGetHeight();
	// "ScriptCacheGetHeight" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptFreeCache();
	// "ScriptFreeCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetCMap();
	// "ScriptGetCMap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetFontAlternateGlyphs();
	// "ScriptGetFontAlternateGlyphs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetFontFeatureTags();
	// "ScriptGetFontFeatureTags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetFontLanguageTags();
	// "ScriptGetFontLanguageTags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetFontProperties();
	// "ScriptGetFontProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetFontScriptTags();
	// "ScriptGetFontScriptTags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetGlyphABCWidth();
	// "ScriptGetGlyphABCWidth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetLogicalWidths();
	// "ScriptGetLogicalWidths" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptGetProperties();
	// "ScriptGetProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptIsComplex();
	// "ScriptIsComplex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptItemize();
	// "ScriptItemize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptItemizeOpenType();
	// "ScriptItemizeOpenType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptJustify();
	// "ScriptJustify" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptLayout();
	// "ScriptLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptPlace();
	// "ScriptPlace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptPlaceOpenType();
	// "ScriptPlaceOpenType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptPositionSingleGlyph();
	// "ScriptPositionSingleGlyph" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptRecordDigitSubstitution();
	// "ScriptRecordDigitSubstitution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptShape();
	// "ScriptShape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptShapeOpenType();
	// "ScriptShapeOpenType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringAnalyse();
	// "ScriptStringAnalyse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringCPtoX();
	// "ScriptStringCPtoX" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringFree();
	// "ScriptStringFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringGetLogicalWidths();
	// "ScriptStringGetLogicalWidths" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringGetOrder();
	// "ScriptStringGetOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringOut();
	// "ScriptStringOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringValidate();
	// "ScriptStringValidate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptStringXtoCP();
	// "ScriptStringXtoCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptString_pLogAttr();
	// "ScriptString_pLogAttr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptString_pSize();
	// "ScriptString_pSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptString_pcOutChars();
	// "ScriptString_pcOutChars" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptSubstituteSingleGlyph();
	// "ScriptSubstituteSingleGlyph" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptTextOut();
	// "ScriptTextOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScriptXtoCP();
	// "ScriptXtoCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectBrushLocal();
	// "SelectBrushLocal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectClipPath();
	// "SelectClipPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectClipPathImpl();
	// "SelectClipPathImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectClipRgn();
	// "SelectClipRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectClipRgnImpl();
	// "SelectClipRgnImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectFontLocal();
	// "SelectFontLocal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectObject();
	// "SelectObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectObjectImpl();
	// "SelectObjectImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SelectPalette();
	// "SelectPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetAbortProc();
	// "SetAbortProc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetArcDirection();
	// "SetArcDirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBitmapAttributes();
	// "SetBitmapAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBitmapBits();
	// "SetBitmapBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBitmapBitsStub();
	// "SetBitmapBitsStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBitmapDimensionEx();
	// "SetBitmapDimensionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBkColor();
	// "SetBkColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBkMode();
	// "SetBkMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBkModeImpl();
	// "SetBkModeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBoundsRect();
	// "SetBoundsRect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBrushAttributes();
	// "SetBrushAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetBrushOrgEx();
	// "SetBrushOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetColorAdjustment();
	// "SetColorAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetColorSpace();
	// "SetColorSpace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDCBrushColor();
	// "SetDCBrushColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDCPenColor();
	// "SetDCPenColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDIBColorTable();
	// "SetDIBColorTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDIBits();
	// "SetDIBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDIBitsToDevice();
	// "SetDIBitsToDevice" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDeviceGammaRamp();
	// "SetDeviceGammaRamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEnhMetaFileBits();
	// "SetEnhMetaFileBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFontEnumeration();
	// "SetFontEnumeration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetGraphicsMode();
	// "SetGraphicsMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetICMMode();
	// "SetICMMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetICMModeImpl();
	// "SetICMModeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetICMProfileA();
	// "SetICMProfileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetICMProfileW();
	// "SetICMProfileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLayout();
	// "SetLayout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLayoutWidth();
	// "SetLayoutWidth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMagicColors();
	// "SetMagicColors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMapMode();
	// "SetMapMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMapperFlags();
	// "SetMapperFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMetaFileBitsEx();
	// "SetMetaFileBitsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMetaRgn();
	// "SetMetaRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMiterLimit();
	// "SetMiterLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMiterLimitImpl();
	// "SetMiterLimitImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetOPMSigningKeyAndSequenceNumbers();
	// "SetOPMSigningKeyAndSequenceNumbers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPaletteEntries();
	// "SetPaletteEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPaletteEntriesStub();
	// "SetPaletteEntriesStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPixel();
	// "SetPixel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPixelFormat();
	// "SetPixelFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPixelV();
	// "SetPixelV" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPolyFillMode();
	// "SetPolyFillMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPolyFillModeImpl();
	// "SetPolyFillModeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetROP2();
	// "SetROP2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetROP2Stub();
	// "SetROP2Stub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetRectRgn();
	// "SetRectRgn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetRelAbs();
	// "SetRelAbs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetStretchBltMode();
	// "SetStretchBltMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetStretchBltModeImpl();
	// "SetStretchBltModeImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemPaletteUse();
	// "SetSystemPaletteUse" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextAlign();
	// "SetTextAlign" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextAlignImpl();
	// "SetTextAlignImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextCharacterExtra();
	// "SetTextCharacterExtra" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextColor();
	// "SetTextColor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextColorImpl();
	// "SetTextColorImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTextJustification();
	// "SetTextJustification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetViewportExtEx();
	// "SetViewportExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetViewportOrgEx();
	// "SetViewportOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVirtualResolution();
	// "SetVirtualResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWinMetaFileBits();
	// "SetWinMetaFileBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowExtEx();
	// "SetWindowExtEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWindowOrgEx();
	// "SetWindowOrgEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWorldTransform();
	// "SetWorldTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWorldTransformImpl();
	// "SetWorldTransformImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartDocA();
	// "StartDocA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartDocW();
	// "StartDocW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartDocWImpl();
	// "StartDocWImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartFormPage();
	// "StartFormPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartPage();
	// "StartPage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartPageImpl();
	// "StartPageImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StretchBlt();
	// "StretchBlt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StretchDIBits();
	// "StretchDIBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StretchDIBitsImpl();
	// "StretchDIBitsImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrokeAndFillPath();
	// "StrokeAndFillPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrokePath();
	// "StrokePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StrokePathImpl();
	// "StrokePathImpl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwapBuffers();
	// "SwapBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TextOutA();
	// "TextOutA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TextOutAStub();
	// "TextOutAStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TextOutW();
	// "TextOutW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TranslateCharsetInfo();
	// "TranslateCharsetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnloadNetworkFonts();
	// "UnloadNetworkFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnloadUserModePrinterDriver();
	// "UnloadUserModePrinterDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnrealizeObject();
	// "UnrealizeObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnrealizeObjectStub();
	// "UnrealizeObjectStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateColors();
	// "UpdateColors" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateColorsStub();
	// "UpdateColorsStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateICMRegKeyA();
	// "UpdateICMRegKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateICMRegKeyW();
	// "UpdateICMRegKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UspAllocCache();
	// "UspAllocCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UspAllocTemp();
	// "UspAllocTemp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UspFreeMem();
	// "UspFreeMem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WidenPath();
	// "WidenPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XFORMOBJ_bApplyXform();
	// "XFORMOBJ_bApplyXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XFORMOBJ_iGetXform();
	// "XFORMOBJ_iGetXform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XLATEOBJ_cGetPalette();
	// "XLATEOBJ_cGetPalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XLATEOBJ_hGetColorTransform();
	// "XLATEOBJ_hGetColorTransform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XLATEOBJ_iXlate();
	// "XLATEOBJ_iXlate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall XLATEOBJ_piVector();
	// "XLATEOBJ_piVector" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall bCreateDCW();
	// "bCreateDCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall bDeleteLDC();
	// "bDeleteLDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall bInitSystemAndFontsDirectoriesW();
	// "bInitSystemAndFontsDirectoriesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall bMakePathNameW();
	// "bMakePathNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall cGetTTFFromFOT();
	// "cGetTTFFromFOT" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall fpClosePrinter();
	// "fpClosePrinter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ftsWordBreak();
	// "ftsWordBreak" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall gMaxGdiHandleCount();
	// "gMaxGdiHandleCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall gW32PID();
	// "gW32PID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall gdiPlaySpoolStream();
	// "gdiPlaySpoolStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ghICM();
	// "ghICM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall hGetPEBHandle();
	// "hGetPEBHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall hdcCreateDCW();
	// "hdcCreateDCW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall pGdiDevCaps();
	// "pGdiDevCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall pGdiSharedHandleTable();
	// "pGdiSharedHandleTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall pGdiSharedMemory();
	// "pGdiSharedMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall pldcGet();
	// "pldcGet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall plinkGet();
	// "plinkGet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall semDxTrimNotification();
	// "semDxTrimNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vDeleteLOCALFONT();
	// "vDeleteLOCALFONT" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vFreeUFIHashTable();
	// "vFreeUFIHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vSetPldc();
	// "vSetPldc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = gdi32;


// exports
module.exports = gdi32;