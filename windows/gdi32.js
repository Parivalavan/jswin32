// javascript ffi interface for gdi32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var gdi32 = ffi.Library( 'gdi32.dll' ,{} );

// 
// int __stdcall AbortDoc();
// gdi32.AbortDoc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AbortDocImpl();
// gdi32.AbortDocImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AbortPath();
// gdi32.AbortPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontMemResourceEx();
// gdi32.AddFontMemResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceA();
// gdi32.AddFontResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceAStub();
// gdi32.AddFontResourceAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceExA();
// gdi32.AddFontResourceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceExW();
// gdi32.AddFontResourceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceTracking();
// gdi32.AddFontResourceTracking = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceW();
// gdi32.AddFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddFontResourceWImpl();
// gdi32.AddFontResourceWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AngleArc();
// gdi32.AngleArc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AnimatePalette();
// gdi32.AnimatePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AnimatePaletteStub();
// gdi32.AnimatePaletteStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AnyLinkedFonts();
// gdi32.AnyLinkedFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Arc();
// gdi32.Arc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ArcStub();
// gdi32.ArcStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ArcTo();
// gdi32.ArcTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BRUSHOBJ_hGetColorTransform();
// gdi32.BRUSHOBJ_hGetColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BRUSHOBJ_pvAllocRbrush();
// gdi32.BRUSHOBJ_pvAllocRbrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BRUSHOBJ_pvGetRbrush();
// gdi32.BRUSHOBJ_pvGetRbrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BRUSHOBJ_ulGetBrushColor();
// gdi32.BRUSHOBJ_ulGetBrushColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginGdiRendering();
// gdi32.BeginGdiRendering = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginPath();
// gdi32.BeginPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginPathImpl();
// gdi32.BeginPathImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BitBlt();
// gdi32.BitBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CLIPOBJ_bEnum();
// gdi32.CLIPOBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CLIPOBJ_cEnumStart();
// gdi32.CLIPOBJ_cEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CLIPOBJ_ppoGetPath();
// gdi32.CLIPOBJ_ppoGetPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelDC();
// gdi32.CancelDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckColorsInGamut();
// gdi32.CheckColorsInGamut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChoosePixelFormat();
// gdi32.ChoosePixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Chord();
// gdi32.Chord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearBitmapAttributes();
// gdi32.ClearBitmapAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearBrushAttributes();
// gdi32.ClearBrushAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseEnhMetaFile();
// gdi32.CloseEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseFigure();
// gdi32.CloseFigure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseFigureImpl();
// gdi32.CloseFigureImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseMetaFile();
// gdi32.CloseMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ColorCorrectPalette();
// gdi32.ColorCorrectPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ColorMatchToTarget();
// gdi32.ColorMatchToTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CombineRgn();
// gdi32.CombineRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CombineTransform();
// gdi32.CombineTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConfigureOPMProtectedOutput();
// gdi32.ConfigureOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyEnhMetaFileA();
// gdi32.CopyEnhMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyEnhMetaFileW();
// gdi32.CopyEnhMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyMetaFileA();
// gdi32.CopyMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyMetaFileW();
// gdi32.CopyMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBitmap();
// gdi32.CreateBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBitmapFromDxSurface();
// gdi32.CreateBitmapFromDxSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBitmapFromDxSurface2();
// gdi32.CreateBitmapFromDxSurface2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBitmapIndirect();
// gdi32.CreateBitmapIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBrushIndirect();
// gdi32.CreateBrushIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBrushIndirectStub();
// gdi32.CreateBrushIndirectStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateColorSpaceA();
// gdi32.CreateColorSpaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateColorSpaceW();
// gdi32.CreateColorSpaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateCompatibleBitmap();
// gdi32.CreateCompatibleBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateCompatibleDC();
// gdi32.CreateCompatibleDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDCA();
// gdi32.CreateDCA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDCAImpl();
// gdi32.CreateDCAImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDCExW();
// gdi32.CreateDCExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDCW();
// gdi32.CreateDCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDIBPatternBrush();
// gdi32.CreateDIBPatternBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDIBPatternBrushPt();
// gdi32.CreateDIBPatternBrushPt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDIBSection();
// gdi32.CreateDIBSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDIBitmap();
// gdi32.CreateDIBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDiscardableBitmap();
// gdi32.CreateDiscardableBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEllipticRgn();
// gdi32.CreateEllipticRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEllipticRgnIndirect();
// gdi32.CreateEllipticRgnIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEllipticRgnIndirectStub();
// gdi32.CreateEllipticRgnIndirectStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEnhMetaFileA();
// gdi32.CreateEnhMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEnhMetaFileW();
// gdi32.CreateEnhMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontA();
// gdi32.CreateFontA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontAStub();
// gdi32.CreateFontAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontIndirectA();
// gdi32.CreateFontIndirectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontIndirectExA();
// gdi32.CreateFontIndirectExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontIndirectExW();
// gdi32.CreateFontIndirectExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontIndirectW();
// gdi32.CreateFontIndirectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontIndirectWImpl();
// gdi32.CreateFontIndirectWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFontW();
// gdi32.CreateFontW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHalftonePalette();
// gdi32.CreateHalftonePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHatchBrush();
// gdi32.CreateHatchBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateICA();
// gdi32.CreateICA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateICW();
// gdi32.CreateICW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMetaFileA();
// gdi32.CreateMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMetaFileW();
// gdi32.CreateMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateOPMProtectedOutput();
// gdi32.CreateOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateOPMProtectedOutputs();
// gdi32.CreateOPMProtectedOutputs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePalette();
// gdi32.CreatePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePatternBrush();
// gdi32.CreatePatternBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePen();
// gdi32.CreatePen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePenIndirect();
// gdi32.CreatePenIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePenIndirectStub();
// gdi32.CreatePenIndirectStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePolyPolygonRgn();
// gdi32.CreatePolyPolygonRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePolyPolygonRgnStub();
// gdi32.CreatePolyPolygonRgnStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePolygonRgn();
// gdi32.CreatePolygonRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRectRgn();
// gdi32.CreateRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRectRgnIndirect();
// gdi32.CreateRectRgnIndirect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRoundRectRgn();
// gdi32.CreateRoundRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRoundRectRgnStub();
// gdi32.CreateRoundRectRgnStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateScalableFontResourceA();
// gdi32.CreateScalableFontResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateScalableFontResourceW();
// gdi32.CreateScalableFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateScalableFontResourceWImpl();
// gdi32.CreateScalableFontResourceWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSessionMappedDIBSection();
// gdi32.CreateSessionMappedDIBSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSolidBrush();
// gdi32.CreateSolidBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTAbandonSwapChain();
// gdi32.D3DKMTAbandonSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTAcquireKeyedMutex();
// gdi32.D3DKMTAcquireKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTAcquireKeyedMutex2();
// gdi32.D3DKMTAcquireKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTAcquireSwapChain();
// gdi32.D3DKMTAcquireSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTAdjustFullscreenGamma();
// gdi32.D3DKMTAdjustFullscreenGamma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCacheHybridQueryValue();
// gdi32.D3DKMTCacheHybridQueryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTChangeVideoMemoryReservation();
// gdi32.D3DKMTChangeVideoMemoryReservation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckExclusiveOwnership();
// gdi32.D3DKMTCheckExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckMonitorPowerState();
// gdi32.D3DKMTCheckMonitorPowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport();
// gdi32.D3DKMTCheckMultiPlaneOverlaySupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport2();
// gdi32.D3DKMTCheckMultiPlaneOverlaySupport2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckMultiPlaneOverlaySupport3();
// gdi32.D3DKMTCheckMultiPlaneOverlaySupport3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckOcclusion();
// gdi32.D3DKMTCheckOcclusion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckSharedResourceAccess();
// gdi32.D3DKMTCheckSharedResourceAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCheckVidPnExclusiveOwnership();
// gdi32.D3DKMTCheckVidPnExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCloseAdapter();
// gdi32.D3DKMTCloseAdapter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTConfigureSharedResource();
// gdi32.D3DKMTConfigureSharedResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateAllocation();
// gdi32.D3DKMTCreateAllocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateAllocation2();
// gdi32.D3DKMTCreateAllocation2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateContext();
// gdi32.D3DKMTCreateContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateContextVirtual();
// gdi32.D3DKMTCreateContextVirtual = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateDCFromMemory();
// gdi32.D3DKMTCreateDCFromMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateDevice();
// gdi32.D3DKMTCreateDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateKeyedMutex();
// gdi32.D3DKMTCreateKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateKeyedMutex2();
// gdi32.D3DKMTCreateKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateOutputDupl();
// gdi32.D3DKMTCreateOutputDupl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateOverlay();
// gdi32.D3DKMTCreateOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreatePagingQueue();
// gdi32.D3DKMTCreatePagingQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateSwapChain();
// gdi32.D3DKMTCreateSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateSynchronizationObject();
// gdi32.D3DKMTCreateSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTCreateSynchronizationObject2();
// gdi32.D3DKMTCreateSynchronizationObject2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyAllocation();
// gdi32.D3DKMTDestroyAllocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyAllocation2();
// gdi32.D3DKMTDestroyAllocation2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyContext();
// gdi32.D3DKMTDestroyContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyDCFromMemory();
// gdi32.D3DKMTDestroyDCFromMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyDevice();
// gdi32.D3DKMTDestroyDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyKeyedMutex();
// gdi32.D3DKMTDestroyKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyOutputDupl();
// gdi32.D3DKMTDestroyOutputDupl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyOverlay();
// gdi32.D3DKMTDestroyOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroyPagingQueue();
// gdi32.D3DKMTDestroyPagingQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTDestroySynchronizationObject();
// gdi32.D3DKMTDestroySynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTEnumAdapters();
// gdi32.D3DKMTEnumAdapters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTEnumAdapters2();
// gdi32.D3DKMTEnumAdapters2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTEscape();
// gdi32.D3DKMTEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTEvict();
// gdi32.D3DKMTEvict = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTFlipOverlay();
// gdi32.D3DKMTFlipOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTFlushHeapTransitions();
// gdi32.D3DKMTFlushHeapTransitions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTFreeGpuVirtualAddress();
// gdi32.D3DKMTFreeGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetCachedHybridQueryValue();
// gdi32.D3DKMTGetCachedHybridQueryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetContextInProcessSchedulingPriority();
// gdi32.D3DKMTGetContextInProcessSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetContextSchedulingPriority();
// gdi32.D3DKMTGetContextSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetDWMVerticalBlankEvent();
// gdi32.D3DKMTGetDWMVerticalBlankEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetDeviceState();
// gdi32.D3DKMTGetDeviceState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetDisplayModeList();
// gdi32.D3DKMTGetDisplayModeList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetMultisampleMethodList();
// gdi32.D3DKMTGetMultisampleMethodList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetOverlayState();
// gdi32.D3DKMTGetOverlayState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetPresentHistory();
// gdi32.D3DKMTGetPresentHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetPresentQueueEvent();
// gdi32.D3DKMTGetPresentQueueEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetProcessSchedulingPriorityClass();
// gdi32.D3DKMTGetProcessSchedulingPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetResourcePresentPrivateDriverData();
// gdi32.D3DKMTGetResourcePresentPrivateDriverData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetRuntimeData();
// gdi32.D3DKMTGetRuntimeData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetScanLine();
// gdi32.D3DKMTGetScanLine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetSetSwapChainMetadata();
// gdi32.D3DKMTGetSetSwapChainMetadata = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetSharedPrimaryHandle();
// gdi32.D3DKMTGetSharedPrimaryHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTGetSharedResourceAdapterLuid();
// gdi32.D3DKMTGetSharedResourceAdapterLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTInvalidateActiveVidPn();
// gdi32.D3DKMTInvalidateActiveVidPn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTInvalidateCache();
// gdi32.D3DKMTInvalidateCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTLock();
// gdi32.D3DKMTLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTLock2();
// gdi32.D3DKMTLock2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTMakeResident();
// gdi32.D3DKMTMakeResident = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTMapGpuVirtualAddress();
// gdi32.D3DKMTMapGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTMarkDeviceAsError();
// gdi32.D3DKMTMarkDeviceAsError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispGetNextChunkInfo();
// gdi32.D3DKMTNetDispGetNextChunkInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispQueryMiracastDisplayDeviceStatus();
// gdi32.D3DKMTNetDispQueryMiracastDisplayDeviceStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispQueryMiracastDisplayDeviceSupport();
// gdi32.D3DKMTNetDispQueryMiracastDisplayDeviceSupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispStartMiracastDisplayDevice();
// gdi32.D3DKMTNetDispStartMiracastDisplayDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispStartMiracastDisplayDevice2();
// gdi32.D3DKMTNetDispStartMiracastDisplayDevice2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispStartMiracastDisplayDeviceEx();
// gdi32.D3DKMTNetDispStartMiracastDisplayDeviceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispStopMiracastDisplayDevice();
// gdi32.D3DKMTNetDispStopMiracastDisplayDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTNetDispStopSessions();
// gdi32.D3DKMTNetDispStopSessions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOfferAllocations();
// gdi32.D3DKMTOfferAllocations = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenAdapterFromDeviceName();
// gdi32.D3DKMTOpenAdapterFromDeviceName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenAdapterFromGdiDisplayName();
// gdi32.D3DKMTOpenAdapterFromGdiDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenAdapterFromHdc();
// gdi32.D3DKMTOpenAdapterFromHdc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenAdapterFromLuid();
// gdi32.D3DKMTOpenAdapterFromLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenKeyedMutex();
// gdi32.D3DKMTOpenKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenKeyedMutex2();
// gdi32.D3DKMTOpenKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenNtHandleFromName();
// gdi32.D3DKMTOpenNtHandleFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenResource();
// gdi32.D3DKMTOpenResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenResource2();
// gdi32.D3DKMTOpenResource2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenResourceFromNtHandle();
// gdi32.D3DKMTOpenResourceFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenSwapChain();
// gdi32.D3DKMTOpenSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenSyncObjectFromNtHandle();
// gdi32.D3DKMTOpenSyncObjectFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenSyncObjectFromNtHandle2();
// gdi32.D3DKMTOpenSyncObjectFromNtHandle2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenSyncObjectNtHandleFromName();
// gdi32.D3DKMTOpenSyncObjectNtHandleFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOpenSynchronizationObject();
// gdi32.D3DKMTOpenSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOutputDuplGetFrameInfo();
// gdi32.D3DKMTOutputDuplGetFrameInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOutputDuplGetMetaData();
// gdi32.D3DKMTOutputDuplGetMetaData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOutputDuplGetPointerShapeData();
// gdi32.D3DKMTOutputDuplGetPointerShapeData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOutputDuplPresent();
// gdi32.D3DKMTOutputDuplPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTOutputDuplReleaseFrame();
// gdi32.D3DKMTOutputDuplReleaseFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPinDirectFlipResources();
// gdi32.D3DKMTPinDirectFlipResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPollDisplayChildren();
// gdi32.D3DKMTPollDisplayChildren = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPresent();
// gdi32.D3DKMTPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPresentMultiPlaneOverlay();
// gdi32.D3DKMTPresentMultiPlaneOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPresentMultiPlaneOverlay2();
// gdi32.D3DKMTPresentMultiPlaneOverlay2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTPresentMultiPlaneOverlay3();
// gdi32.D3DKMTPresentMultiPlaneOverlay3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryAdapterInfo();
// gdi32.D3DKMTQueryAdapterInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryAllocationResidency();
// gdi32.D3DKMTQueryAllocationResidency = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryClockCalibration();
// gdi32.D3DKMTQueryClockCalibration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryFSEBlock();
// gdi32.D3DKMTQueryFSEBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryProcessOfferInfo();
// gdi32.D3DKMTQueryProcessOfferInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryRemoteVidPnSourceFromGdiDisplayName();
// gdi32.D3DKMTQueryRemoteVidPnSourceFromGdiDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryResourceInfo();
// gdi32.D3DKMTQueryResourceInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryResourceInfoFromNtHandle();
// gdi32.D3DKMTQueryResourceInfoFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryStatistics();
// gdi32.D3DKMTQueryStatistics = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryVidPnExclusiveOwnership();
// gdi32.D3DKMTQueryVidPnExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTQueryVideoMemoryInfo();
// gdi32.D3DKMTQueryVideoMemoryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReclaimAllocations();
// gdi32.D3DKMTReclaimAllocations = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReclaimAllocations2();
// gdi32.D3DKMTReclaimAllocations2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTRegisterTrimNotification();
// gdi32.D3DKMTRegisterTrimNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReleaseKeyedMutex();
// gdi32.D3DKMTReleaseKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReleaseKeyedMutex2();
// gdi32.D3DKMTReleaseKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReleaseProcessVidPnSourceOwners();
// gdi32.D3DKMTReleaseProcessVidPnSourceOwners = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReleaseSwapChain();
// gdi32.D3DKMTReleaseSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTRender();
// gdi32.D3DKMTRender = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTReserveGpuVirtualAddress();
// gdi32.D3DKMTReserveGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetAllocationPriority();
// gdi32.D3DKMTSetAllocationPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetContextInProcessSchedulingPriority();
// gdi32.D3DKMTSetContextInProcessSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetContextSchedulingPriority();
// gdi32.D3DKMTSetContextSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetDisplayMode();
// gdi32.D3DKMTSetDisplayMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetDisplayPrivateDriverFormat();
// gdi32.D3DKMTSetDisplayPrivateDriverFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetDodIndirectSwapchain();
// gdi32.D3DKMTSetDodIndirectSwapchain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetFSEBlock();
// gdi32.D3DKMTSetFSEBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetGammaRamp();
// gdi32.D3DKMTSetGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetHwProtectionTeardownRecovery();
// gdi32.D3DKMTSetHwProtectionTeardownRecovery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetProcessSchedulingPriorityClass();
// gdi32.D3DKMTSetProcessSchedulingPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetQueuedLimit();
// gdi32.D3DKMTSetQueuedLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetStablePowerState();
// gdi32.D3DKMTSetStablePowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetStereoEnabled();
// gdi32.D3DKMTSetStereoEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetSyncRefreshCountWaitTarget();
// gdi32.D3DKMTSetSyncRefreshCountWaitTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetVidPnSourceHwProtection();
// gdi32.D3DKMTSetVidPnSourceHwProtection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetVidPnSourceOwner();
// gdi32.D3DKMTSetVidPnSourceOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSetVidPnSourceOwner1();
// gdi32.D3DKMTSetVidPnSourceOwner1 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTShareObjects();
// gdi32.D3DKMTShareObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSharedPrimaryLockNotification();
// gdi32.D3DKMTSharedPrimaryLockNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSharedPrimaryUnLockNotification();
// gdi32.D3DKMTSharedPrimaryUnLockNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSignalSynchronizationObject();
// gdi32.D3DKMTSignalSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSignalSynchronizationObject2();
// gdi32.D3DKMTSignalSynchronizationObject2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSignalSynchronizationObjectFromCpu();
// gdi32.D3DKMTSignalSynchronizationObjectFromCpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSignalSynchronizationObjectFromGpu();
// gdi32.D3DKMTSignalSynchronizationObjectFromGpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSignalSynchronizationObjectFromGpu2();
// gdi32.D3DKMTSignalSynchronizationObjectFromGpu2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTSubmitCommand();
// gdi32.D3DKMTSubmitCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTTrimProcessCommitment();
// gdi32.D3DKMTTrimProcessCommitment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUnlock();
// gdi32.D3DKMTUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUnlock2();
// gdi32.D3DKMTUnlock2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUnpinDirectFlipResources();
// gdi32.D3DKMTUnpinDirectFlipResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUnregisterTrimNotification();
// gdi32.D3DKMTUnregisterTrimNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUpdateAllocationProperty();
// gdi32.D3DKMTUpdateAllocationProperty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUpdateGpuVirtualAddress();
// gdi32.D3DKMTUpdateGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTUpdateOverlay();
// gdi32.D3DKMTUpdateOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForIdle();
// gdi32.D3DKMTWaitForIdle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForSynchronizationObject();
// gdi32.D3DKMTWaitForSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForSynchronizationObject2();
// gdi32.D3DKMTWaitForSynchronizationObject2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForSynchronizationObjectFromCpu();
// gdi32.D3DKMTWaitForSynchronizationObjectFromCpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForSynchronizationObjectFromGpu();
// gdi32.D3DKMTWaitForSynchronizationObjectFromGpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForVerticalBlankEvent();
// gdi32.D3DKMTWaitForVerticalBlankEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall D3DKMTWaitForVerticalBlankEvent2();
// gdi32.D3DKMTWaitForVerticalBlankEvent2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCIGetCapabilitiesString();
// gdi32.DDCCIGetCapabilitiesString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCIGetCapabilitiesStringLength();
// gdi32.DDCCIGetCapabilitiesStringLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCIGetTimingReport();
// gdi32.DDCCIGetTimingReport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCIGetVCPFeature();
// gdi32.DDCCIGetVCPFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCISaveCurrentSettings();
// gdi32.DDCCISaveCurrentSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DDCCISetVCPFeature();
// gdi32.DDCCISetVCPFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DPtoLP();
// gdi32.DPtoLP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdCreateFullscreenSprite();
// gdi32.DdCreateFullscreenSprite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdDestroyFullscreenSprite();
// gdi32.DdDestroyFullscreenSprite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry0();
// gdi32.DdEntry0 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry1();
// gdi32.DdEntry1 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry10();
// gdi32.DdEntry10 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry11();
// gdi32.DdEntry11 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry12();
// gdi32.DdEntry12 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry13();
// gdi32.DdEntry13 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry14();
// gdi32.DdEntry14 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry15();
// gdi32.DdEntry15 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry16();
// gdi32.DdEntry16 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry17();
// gdi32.DdEntry17 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry18();
// gdi32.DdEntry18 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry19();
// gdi32.DdEntry19 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry2();
// gdi32.DdEntry2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry20();
// gdi32.DdEntry20 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry21();
// gdi32.DdEntry21 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry22();
// gdi32.DdEntry22 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry23();
// gdi32.DdEntry23 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry24();
// gdi32.DdEntry24 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry25();
// gdi32.DdEntry25 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry26();
// gdi32.DdEntry26 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry27();
// gdi32.DdEntry27 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry28();
// gdi32.DdEntry28 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry29();
// gdi32.DdEntry29 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry3();
// gdi32.DdEntry3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry30();
// gdi32.DdEntry30 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry31();
// gdi32.DdEntry31 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry32();
// gdi32.DdEntry32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry33();
// gdi32.DdEntry33 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry34();
// gdi32.DdEntry34 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry35();
// gdi32.DdEntry35 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry36();
// gdi32.DdEntry36 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry37();
// gdi32.DdEntry37 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry38();
// gdi32.DdEntry38 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry39();
// gdi32.DdEntry39 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry4();
// gdi32.DdEntry4 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry40();
// gdi32.DdEntry40 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry41();
// gdi32.DdEntry41 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry42();
// gdi32.DdEntry42 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry43();
// gdi32.DdEntry43 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry44();
// gdi32.DdEntry44 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry45();
// gdi32.DdEntry45 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry46();
// gdi32.DdEntry46 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry47();
// gdi32.DdEntry47 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry48();
// gdi32.DdEntry48 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry49();
// gdi32.DdEntry49 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry5();
// gdi32.DdEntry5 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry50();
// gdi32.DdEntry50 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry51();
// gdi32.DdEntry51 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry52();
// gdi32.DdEntry52 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry53();
// gdi32.DdEntry53 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry54();
// gdi32.DdEntry54 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry55();
// gdi32.DdEntry55 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry56();
// gdi32.DdEntry56 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry6();
// gdi32.DdEntry6 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry7();
// gdi32.DdEntry7 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry8();
// gdi32.DdEntry8 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdEntry9();
// gdi32.DdEntry9 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdNotifyFullscreenSpriteUpdate();
// gdi32.DdNotifyFullscreenSpriteUpdate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DdQueryVisRgnUniqueness();
// gdi32.DdQueryVisRgnUniqueness = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteColorSpace();
// gdi32.DeleteColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteDC();
// gdi32.DeleteDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteEMFSpoolData();
// gdi32.DeleteEMFSpoolData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteEnhMetaFile();
// gdi32.DeleteEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteMetaFile();
// gdi32.DeleteMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteObject();
// gdi32.DeleteObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DescribePixelFormat();
// gdi32.DescribePixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyOPMProtectedOutput();
// gdi32.DestroyOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyPhysicalMonitorInternal();
// gdi32.DestroyPhysicalMonitorInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeviceCapabilitiesExA();
// gdi32.DeviceCapabilitiesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeviceCapabilitiesExW();
// gdi32.DeviceCapabilitiesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DocumentEventEx();
// gdi32.DocumentEventEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DrawEscape();
// gdi32.DrawEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmCreatedBitmapRemotingOutput();
// gdi32.DwmCreatedBitmapRemotingOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DwmGetDirtyRgnImpl();
// gdi32.DwmGetDirtyRgnImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DxTrimNotificationListHead();
// gdi32.DxTrimNotificationListHead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Ellipse();
// gdi32.Ellipse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EllipseStub();
// gdi32.EllipseStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableEUDC();
// gdi32.EnableEUDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndDoc();
// gdi32.EndDoc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndDocImpl();
// gdi32.EndDocImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndFormPage();
// gdi32.EndFormPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndGdiRendering();
// gdi32.EndGdiRendering = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndPage();
// gdi32.EndPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndPageImpl();
// gdi32.EndPageImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndPath();
// gdi32.EndPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndPathImpl();
// gdi32.EndPathImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngAcquireSemaphore();
// gdi32.EngAcquireSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngAlphaBlend();
// gdi32.EngAlphaBlend = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngAssociateSurface();
// gdi32.EngAssociateSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngBitBlt();
// gdi32.EngBitBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCheckAbort();
// gdi32.EngCheckAbort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngComputeGlyphSet();
// gdi32.EngComputeGlyphSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCopyBits();
// gdi32.EngCopyBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreateBitmap();
// gdi32.EngCreateBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreateClip();
// gdi32.EngCreateClip = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreateDeviceBitmap();
// gdi32.EngCreateDeviceBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreateDeviceSurface();
// gdi32.EngCreateDeviceSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreatePalette();
// gdi32.EngCreatePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngCreateSemaphore();
// gdi32.EngCreateSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngDeleteClip();
// gdi32.EngDeleteClip = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngDeletePalette();
// gdi32.EngDeletePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngDeletePath();
// gdi32.EngDeletePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngDeleteSemaphore();
// gdi32.EngDeleteSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngDeleteSurface();
// gdi32.EngDeleteSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngEraseSurface();
// gdi32.EngEraseSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngFillPath();
// gdi32.EngFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngFindResource();
// gdi32.EngFindResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngFreeModule();
// gdi32.EngFreeModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngGetCurrentCodePage();
// gdi32.EngGetCurrentCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngGetDriverName();
// gdi32.EngGetDriverName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngGetPrinterDataFileName();
// gdi32.EngGetPrinterDataFileName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngGradientFill();
// gdi32.EngGradientFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngLineTo();
// gdi32.EngLineTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngLoadModule();
// gdi32.EngLoadModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngLockSurface();
// gdi32.EngLockSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngMarkBandingSurface();
// gdi32.EngMarkBandingSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngMultiByteToUnicodeN();
// gdi32.EngMultiByteToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngMultiByteToWideChar();
// gdi32.EngMultiByteToWideChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngPaint();
// gdi32.EngPaint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngPlgBlt();
// gdi32.EngPlgBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngQueryEMFInfo();
// gdi32.EngQueryEMFInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngQueryLocalTime();
// gdi32.EngQueryLocalTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngReleaseSemaphore();
// gdi32.EngReleaseSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngStretchBlt();
// gdi32.EngStretchBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngStretchBltROP();
// gdi32.EngStretchBltROP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngStrokeAndFillPath();
// gdi32.EngStrokeAndFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngStrokePath();
// gdi32.EngStrokePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngTextOut();
// gdi32.EngTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngTransparentBlt();
// gdi32.EngTransparentBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngUnicodeToMultiByteN();
// gdi32.EngUnicodeToMultiByteN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngUnlockSurface();
// gdi32.EngUnlockSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EngWideCharToMultiByte();
// gdi32.EngWideCharToMultiByte = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumEnhMetaFile();
// gdi32.EnumEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumEnhMetaFileStub();
// gdi32.EnumEnhMetaFileStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontFamiliesA();
// gdi32.EnumFontFamiliesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontFamiliesExA();
// gdi32.EnumFontFamiliesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontFamiliesExW();
// gdi32.EnumFontFamiliesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontFamiliesW();
// gdi32.EnumFontFamiliesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontsA();
// gdi32.EnumFontsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumFontsW();
// gdi32.EnumFontsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumICMProfilesA();
// gdi32.EnumICMProfilesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumICMProfilesW();
// gdi32.EnumICMProfilesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumMetaFile();
// gdi32.EnumMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumObjects();
// gdi32.EnumObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EqualRgn();
// gdi32.EqualRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Escape();
// gdi32.Escape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EscapeImpl();
// gdi32.EscapeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EudcLoadLinkW();
// gdi32.EudcLoadLinkW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EudcUnloadLinkW();
// gdi32.EudcUnloadLinkW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExcludeClipRect();
// gdi32.ExcludeClipRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtCreatePen();
// gdi32.ExtCreatePen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtCreateRegion();
// gdi32.ExtCreateRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtEscape();
// gdi32.ExtEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtEscapeImpl();
// gdi32.ExtEscapeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtFloodFill();
// gdi32.ExtFloodFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtSelectClipRgn();
// gdi32.ExtSelectClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtSelectClipRgnImpl();
// gdi32.ExtSelectClipRgnImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtTextOutA();
// gdi32.ExtTextOutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtTextOutAImpl();
// gdi32.ExtTextOutAImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtTextOutW();
// gdi32.ExtTextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtTextOutWImpl();
// gdi32.ExtTextOutWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_cGetAllGlyphHandles();
// gdi32.FONTOBJ_cGetAllGlyphHandles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_cGetGlyphs();
// gdi32.FONTOBJ_cGetGlyphs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_pQueryGlyphAttrs();
// gdi32.FONTOBJ_pQueryGlyphAttrs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_pfdg();
// gdi32.FONTOBJ_pfdg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_pifi();
// gdi32.FONTOBJ_pifi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_pvTrueTypeFontFile();
// gdi32.FONTOBJ_pvTrueTypeFontFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_pxoGetXform();
// gdi32.FONTOBJ_pxoGetXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FONTOBJ_vGetInfo();
// gdi32.FONTOBJ_vGetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillPath();
// gdi32.FillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillPathImpl();
// gdi32.FillPathImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillRgn();
// gdi32.FillRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillRgnStub();
// gdi32.FillRgnStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FixBrushOrgEx();
// gdi32.FixBrushOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlattenPath();
// gdi32.FlattenPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FloodFill();
// gdi32.FloodFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FontIsLinked();
// gdi32.FontIsLinked = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FrameRgn();
// gdi32.FrameRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FrameRgnStub();
// gdi32.FrameRgnStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Gdi32DllInitialize();
// gdi32.Gdi32DllInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiAddFontResourceW();
// gdi32.GdiAddFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiAddGlsBounds();
// gdi32.GdiAddGlsBounds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiAddGlsRecord();
// gdi32.GdiAddGlsRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiAlphaBlend();
// gdi32.GdiAlphaBlend = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiArtificialDecrementDriver();
// gdi32.GdiArtificialDecrementDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiBatchLimit();
// gdi32.GdiBatchLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiCleanCacheDC();
// gdi32.GdiCleanCacheDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiComment();
// gdi32.GdiComment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiCommentStub();
// gdi32.GdiCommentStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConsoleTextOut();
// gdi32.GdiConsoleTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertAndCheckDC();
// gdi32.GdiConvertAndCheckDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertBitmap();
// gdi32.GdiConvertBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertBitmapV5();
// gdi32.GdiConvertBitmapV5 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertBrush();
// gdi32.GdiConvertBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertDC();
// gdi32.GdiConvertDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertEnhMetaFile();
// gdi32.GdiConvertEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertFont();
// gdi32.GdiConvertFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertMetaFilePict();
// gdi32.GdiConvertMetaFilePict = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertPalette();
// gdi32.GdiConvertPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertRegion();
// gdi32.GdiConvertRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiConvertToDevmodeW();
// gdi32.GdiConvertToDevmodeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiCreateLocalEnhMetaFile();
// gdi32.GdiCreateLocalEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiCreateLocalMetaFilePict();
// gdi32.GdiCreateLocalMetaFilePict = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDeleteLocalDC();
// gdi32.GdiDeleteLocalDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDeleteSpoolFileHandle();
// gdi32.GdiDeleteSpoolFileHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDescribePixelFormat();
// gdi32.GdiDescribePixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDllInitialize();
// gdi32.GdiDllInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDllInitializeWrapper();
// gdi32.GdiDllInitializeWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiDrawStream();
// gdi32.GdiDrawStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEndDocEMF();
// gdi32.GdiEndDocEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEndPageEMF();
// gdi32.GdiEndPageEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry1();
// gdi32.GdiEntry1 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry10();
// gdi32.GdiEntry10 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry11();
// gdi32.GdiEntry11 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry12();
// gdi32.GdiEntry12 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry13();
// gdi32.GdiEntry13 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry14();
// gdi32.GdiEntry14 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry15();
// gdi32.GdiEntry15 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry16();
// gdi32.GdiEntry16 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry2();
// gdi32.GdiEntry2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry3();
// gdi32.GdiEntry3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry4();
// gdi32.GdiEntry4 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry5();
// gdi32.GdiEntry5 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry6();
// gdi32.GdiEntry6 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry7();
// gdi32.GdiEntry7 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry8();
// gdi32.GdiEntry8 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiEntry9();
// gdi32.GdiEntry9 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiFixUpHandle();
// gdi32.GdiFixUpHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiFlush();
// gdi32.GdiFlush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiFullscreenControl();
// gdi32.GdiFullscreenControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetBatchLimit();
// gdi32.GdiGetBatchLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetBitmapBitsSize();
// gdi32.GdiGetBitmapBitsSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetCharDimensions();
// gdi32.GdiGetCharDimensions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetCodePage();
// gdi32.GdiGetCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetDC();
// gdi32.GdiGetDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetDevmodeForPage();
// gdi32.GdiGetDevmodeForPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetEntry();
// gdi32.GdiGetEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetLocalBrush();
// gdi32.GdiGetLocalBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetLocalDC();
// gdi32.GdiGetLocalDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetLocalFont();
// gdi32.GdiGetLocalFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetPageCount();
// gdi32.GdiGetPageCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetPageHandle();
// gdi32.GdiGetPageHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetSpoolFileHandle();
// gdi32.GdiGetSpoolFileHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGetSpoolMessage();
// gdi32.GdiGetSpoolMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiGradientFill();
// gdi32.GdiGradientFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiInitSpool();
// gdi32.GdiInitSpool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiInitializeLanguagePack();
// gdi32.GdiInitializeLanguagePack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiIsMetaFileDC();
// gdi32.GdiIsMetaFileDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiIsMetaPrintDC();
// gdi32.GdiIsMetaPrintDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiIsPlayMetafileDC();
// gdi32.GdiIsPlayMetafileDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiIsScreenDC();
// gdi32.GdiIsScreenDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiIsUMPDSandboxingEnabled();
// gdi32.GdiIsUMPDSandboxingEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiLoadType1Fonts();
// gdi32.GdiLoadType1Fonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayDCScript();
// gdi32.GdiPlayDCScript = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayEMF();
// gdi32.GdiPlayEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayJournal();
// gdi32.GdiPlayJournal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayPageEMF();
// gdi32.GdiPlayPageEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayPrivatePageEMF();
// gdi32.GdiPlayPrivatePageEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPlayScript();
// gdi32.GdiPlayScript = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiPrinterThunk();
// gdi32.GdiPrinterThunk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiProcessSetup();
// gdi32.GdiProcessSetup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiQueryFonts();
// gdi32.GdiQueryFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiQueryTable();
// gdi32.GdiQueryTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiRealizationInfo();
// gdi32.GdiRealizationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiReleaseDC();
// gdi32.GdiReleaseDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiReleaseLocalDC();
// gdi32.GdiReleaseLocalDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiResetDCEMF();
// gdi32.GdiResetDCEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSetAttrs();
// gdi32.GdiSetAttrs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSetBatchLimit();
// gdi32.GdiSetBatchLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSetLastError();
// gdi32.GdiSetLastError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSetPixelFormat();
// gdi32.GdiSetPixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSetServerAttr();
// gdi32.GdiSetServerAttr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiStartDocEMF();
// gdi32.GdiStartDocEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiStartPageEMF();
// gdi32.GdiStartPageEMF = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSupportsFontChangeEvent();
// gdi32.GdiSupportsFontChangeEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiSwapBuffers();
// gdi32.GdiSwapBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiTransparentBlt();
// gdi32.GdiTransparentBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GdiValidateHandle();
// gdi32.GdiValidateHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetArcDirection();
// gdi32.GetArcDirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAspectRatioFilterEx();
// gdi32.GetAspectRatioFilterEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBitmapAttributes();
// gdi32.GetBitmapAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBitmapBits();
// gdi32.GetBitmapBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBitmapDimensionEx();
// gdi32.GetBitmapDimensionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBkColor();
// gdi32.GetBkColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBkMode();
// gdi32.GetBkMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBoundsRect();
// gdi32.GetBoundsRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBrushAttributes();
// gdi32.GetBrushAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBrushOrgEx();
// gdi32.GetBrushOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCOPPCompatibleOPMInformation();
// gdi32.GetCOPPCompatibleOPMInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCertificate();
// gdi32.GetCertificate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCertificateByHandle();
// gdi32.GetCertificateByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCertificateSize();
// gdi32.GetCertificateSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCertificateSizeByHandle();
// gdi32.GetCertificateSizeByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharABCWidthsA();
// gdi32.GetCharABCWidthsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharABCWidthsFloatA();
// gdi32.GetCharABCWidthsFloatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharABCWidthsFloatW();
// gdi32.GetCharABCWidthsFloatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharABCWidthsI();
// gdi32.GetCharABCWidthsI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharABCWidthsW();
// gdi32.GetCharABCWidthsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidth32A();
// gdi32.GetCharWidth32A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidth32W();
// gdi32.GetCharWidth32W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthA();
// gdi32.GetCharWidthA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthFloatA();
// gdi32.GetCharWidthFloatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthFloatW();
// gdi32.GetCharWidthFloatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthI();
// gdi32.GetCharWidthI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthInfo();
// gdi32.GetCharWidthInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharWidthW();
// gdi32.GetCharWidthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharacterPlacementA();
// gdi32.GetCharacterPlacementA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCharacterPlacementW();
// gdi32.GetCharacterPlacementW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipBox();
// gdi32.GetClipBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipBoxImpl();
// gdi32.GetClipBoxImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetClipRgn();
// gdi32.GetClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCodePage();
// gdi32.GetCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetColorAdjustment();
// gdi32.GetColorAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetColorSpace();
// gdi32.GetColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentDpiInfo();
// gdi32.GetCurrentDpiInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentObject();
// gdi32.GetCurrentObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPositionEx();
// gdi32.GetCurrentPositionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPositionExStub();
// gdi32.GetCurrentPositionExStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDCBrushColor();
// gdi32.GetDCBrushColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDCOrgEx();
// gdi32.GetDCOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDCPenColor();
// gdi32.GetDCPenColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDIBColorTable();
// gdi32.GetDIBColorTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDIBits();
// gdi32.GetDIBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDeviceCaps();
// gdi32.GetDeviceCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDeviceGammaRamp();
// gdi32.GetDeviceGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetETM();
// gdi32.GetETM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEUDCTimeStamp();
// gdi32.GetEUDCTimeStamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEUDCTimeStampExW();
// gdi32.GetEUDCTimeStampExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileA();
// gdi32.GetEnhMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileAStub();
// gdi32.GetEnhMetaFileAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileBits();
// gdi32.GetEnhMetaFileBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileDescriptionA();
// gdi32.GetEnhMetaFileDescriptionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileDescriptionAStub();
// gdi32.GetEnhMetaFileDescriptionAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileDescriptionW();
// gdi32.GetEnhMetaFileDescriptionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileHeader();
// gdi32.GetEnhMetaFileHeader = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFilePaletteEntries();
// gdi32.GetEnhMetaFilePaletteEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFilePixelFormat();
// gdi32.GetEnhMetaFilePixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnhMetaFileW();
// gdi32.GetEnhMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontAssocStatus();
// gdi32.GetFontAssocStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontData();
// gdi32.GetFontData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontDataImpl();
// gdi32.GetFontDataImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontFileData();
// gdi32.GetFontFileData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontFileInfo();
// gdi32.GetFontFileInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontLanguageInfo();
// gdi32.GetFontLanguageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontRealizationInfo();
// gdi32.GetFontRealizationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontResourceInfoW();
// gdi32.GetFontResourceInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFontUnicodeRanges();
// gdi32.GetFontUnicodeRanges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphIndicesA();
// gdi32.GetGlyphIndicesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphIndicesW();
// gdi32.GetGlyphIndicesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphOutline();
// gdi32.GetGlyphOutline = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphOutlineA();
// gdi32.GetGlyphOutlineA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphOutlineAStub();
// gdi32.GetGlyphOutlineAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphOutlineW();
// gdi32.GetGlyphOutlineW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGlyphOutlineWow();
// gdi32.GetGlyphOutlineWow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGraphicsMode();
// gdi32.GetGraphicsMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetHFONT();
// gdi32.GetHFONT = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetICMProfileA();
// gdi32.GetICMProfileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetICMProfileW();
// gdi32.GetICMProfileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKerningPairs();
// gdi32.GetKerningPairs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKerningPairsA();
// gdi32.GetKerningPairsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKerningPairsW();
// gdi32.GetKerningPairsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLayout();
// gdi32.GetLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogColorSpaceA();
// gdi32.GetLogColorSpaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogColorSpaceW();
// gdi32.GetLogColorSpaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMapMode();
// gdi32.GetMapMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMetaFileA();
// gdi32.GetMetaFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMetaFileBitsEx();
// gdi32.GetMetaFileBitsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMetaFileW();
// gdi32.GetMetaFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMetaRgn();
// gdi32.GetMetaRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMiterLimit();
// gdi32.GetMiterLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNearestColor();
// gdi32.GetNearestColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNearestPaletteIndex();
// gdi32.GetNearestPaletteIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberOfPhysicalMonitors();
// gdi32.GetNumberOfPhysicalMonitors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOPMInformation();
// gdi32.GetOPMInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOPMRandomNumber();
// gdi32.GetOPMRandomNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetObjectA();
// gdi32.GetObjectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetObjectType();
// gdi32.GetObjectType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetObjectW();
// gdi32.GetObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOutlineTextMetricsA();
// gdi32.GetOutlineTextMetricsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOutlineTextMetricsW();
// gdi32.GetOutlineTextMetricsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPaletteEntries();
// gdi32.GetPaletteEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPath();
// gdi32.GetPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPhysicalMonitorDescription();
// gdi32.GetPhysicalMonitorDescription = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPhysicalMonitors();
// gdi32.GetPhysicalMonitors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPixel();
// gdi32.GetPixel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPixelFormat();
// gdi32.GetPixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPolyFillMode();
// gdi32.GetPolyFillMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessSessionFonts();
// gdi32.GetProcessSessionFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetROP2();
// gdi32.GetROP2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetROP2Stub();
// gdi32.GetROP2Stub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRandomRgn();
// gdi32.GetRandomRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRasterizerCaps();
// gdi32.GetRasterizerCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRasterizerCapsStub();
// gdi32.GetRasterizerCapsStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRegionData();
// gdi32.GetRegionData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRelAbs();
// gdi32.GetRelAbs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetRgnBox();
// gdi32.GetRgnBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStockObject();
// gdi32.GetStockObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStretchBltMode();
// gdi32.GetStretchBltMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringBitmapA();
// gdi32.GetStringBitmapA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringBitmapW();
// gdi32.GetStringBitmapW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSuggestedOPMProtectedOutputArraySize();
// gdi32.GetSuggestedOPMProtectedOutputArraySize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemPaletteEntries();
// gdi32.GetSystemPaletteEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemPaletteUse();
// gdi32.GetSystemPaletteUse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextAlign();
// gdi32.GetTextAlign = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextCharacterExtra();
// gdi32.GetTextCharacterExtra = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextCharacterExtraStub();
// gdi32.GetTextCharacterExtraStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextCharset();
// gdi32.GetTextCharset = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextCharsetInfo();
// gdi32.GetTextCharsetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextColor();
// gdi32.GetTextColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentExPointA();
// gdi32.GetTextExtentExPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentExPointAStub();
// gdi32.GetTextExtentExPointAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentExPointI();
// gdi32.GetTextExtentExPointI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentExPointW();
// gdi32.GetTextExtentExPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentExPointWPri();
// gdi32.GetTextExtentExPointWPri = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPoint32A();
// gdi32.GetTextExtentPoint32A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPoint32AStub();
// gdi32.GetTextExtentPoint32AStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPoint32W();
// gdi32.GetTextExtentPoint32W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPointA();
// gdi32.GetTextExtentPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPointAStub();
// gdi32.GetTextExtentPointAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPointI();
// gdi32.GetTextExtentPointI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextExtentPointW();
// gdi32.GetTextExtentPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextFaceA();
// gdi32.GetTextFaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextFaceAliasW();
// gdi32.GetTextFaceAliasW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextFaceW();
// gdi32.GetTextFaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextMetricsA();
// gdi32.GetTextMetricsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextMetricsAImpl();
// gdi32.GetTextMetricsAImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTextMetricsW();
// gdi32.GetTextMetricsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTransform();
// gdi32.GetTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetViewportExtEx();
// gdi32.GetViewportExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetViewportOrgEx();
// gdi32.GetViewportOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWinMetaFileBits();
// gdi32.GetWinMetaFileBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowExtEx();
// gdi32.GetWindowExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowOrgEx();
// gdi32.GetWindowOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWorldTransform();
// gdi32.GetWorldTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HT_Get8BPPFormatPalette();
// gdi32.HT_Get8BPPFormatPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HT_Get8BPPMaskPalette();
// gdi32.HT_Get8BPPMaskPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmDeleteLocalDC();
// gdi32.IcmDeleteLocalDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IcmReleaseCachedColorSpace();
// gdi32.IcmReleaseCachedColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InternalDeleteDC();
// gdi32.InternalDeleteDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IntersectClipRect();
// gdi32.IntersectClipRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IntersectClipRectImpl();
// gdi32.IntersectClipRectImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvertRgn();
// gdi32.InvertRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvertRgnStub();
// gdi32.InvertRgnStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidEnhMetaRecord();
// gdi32.IsValidEnhMetaRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidEnhMetaRecordOffExt();
// gdi32.IsValidEnhMetaRecordOffExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LPtoDP();
// gdi32.LPtoDP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LineDDA();
// gdi32.LineDDA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LineTo();
// gdi32.LineTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LineToImpl();
// gdi32.LineToImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkDrawTextEx();
// gdi32.LpkDrawTextEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkEditControl();
// gdi32.LpkEditControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkExtTextOut();
// gdi32.LpkExtTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkGetCharacterPlacement();
// gdi32.LpkGetCharacterPlacement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkGetEditControl();
// gdi32.LpkGetEditControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkGetTextExtentExPoint();
// gdi32.LpkGetTextExtentExPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkInitialize();
// gdi32.LpkInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkPSMTextOut();
// gdi32.LpkPSMTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkPresent();
// gdi32.LpkPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkTabbedTextOut();
// gdi32.LpkTabbedTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkUseGDIWidthCache();
// gdi32.LpkUseGDIWidthCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkpEditControlSize();
// gdi32.LpkpEditControlSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LpkpInitializeEditControl();
// gdi32.LpkpInitializeEditControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MF16_DeleteObject();
// gdi32.MF16_DeleteObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MF_DeleteObject();
// gdi32.MF_DeleteObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MaskBlt();
// gdi32.MaskBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MirrorRgn();
// gdi32.MirrorRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ModerncoreGdiInit();
// gdi32.ModerncoreGdiInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ModifyWorldTransform();
// gdi32.ModifyWorldTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveToEx();
// gdi32.MoveToEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveToExImpl();
// gdi32.MoveToExImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// gdi32.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NamedEscape();
// gdi32.NamedEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAbortDoc();
// gdi32.NtGdiAbortDoc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAbortPath();
// gdi32.NtGdiAbortPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAddEmbFontToDC();
// gdi32.NtGdiAddEmbFontToDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAddFontMemResourceEx();
// gdi32.NtGdiAddFontMemResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAddFontResourceW();
// gdi32.NtGdiAddFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAddRemoteFontToDC();
// gdi32.NtGdiAddRemoteFontToDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAddRemoteMMInstanceToDC();
// gdi32.NtGdiAddRemoteMMInstanceToDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAlphaBlend();
// gdi32.NtGdiAlphaBlend = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAngleArc();
// gdi32.NtGdiAngleArc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiAnyLinkedFonts();
// gdi32.NtGdiAnyLinkedFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiArcInternal();
// gdi32.NtGdiArcInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBRUSHOBJ_DeleteRbrush();
// gdi32.NtGdiBRUSHOBJ_DeleteRbrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBRUSHOBJ_hGetColorTransform();
// gdi32.NtGdiBRUSHOBJ_hGetColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBRUSHOBJ_pvAllocRbrush();
// gdi32.NtGdiBRUSHOBJ_pvAllocRbrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBRUSHOBJ_pvGetRbrush();
// gdi32.NtGdiBRUSHOBJ_pvGetRbrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBRUSHOBJ_ulGetBrushColor();
// gdi32.NtGdiBRUSHOBJ_ulGetBrushColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBeginGdiRendering();
// gdi32.NtGdiBeginGdiRendering = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBeginPath();
// gdi32.NtGdiBeginPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiBitBlt();
// gdi32.NtGdiBitBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCLIPOBJ_bEnum();
// gdi32.NtGdiCLIPOBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCLIPOBJ_cEnumStart();
// gdi32.NtGdiCLIPOBJ_cEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCLIPOBJ_ppoGetPath();
// gdi32.NtGdiCLIPOBJ_ppoGetPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCancelDC();
// gdi32.NtGdiCancelDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiChangeGhostFont();
// gdi32.NtGdiChangeGhostFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCheckBitmapBits();
// gdi32.NtGdiCheckBitmapBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiClearBitmapAttributes();
// gdi32.NtGdiClearBitmapAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiClearBrushAttributes();
// gdi32.NtGdiClearBrushAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCloseFigure();
// gdi32.NtGdiCloseFigure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiColorCorrectPalette();
// gdi32.NtGdiColorCorrectPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCombineRgn();
// gdi32.NtGdiCombineRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCombineTransform();
// gdi32.NtGdiCombineTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiComputeXformCoefficients();
// gdi32.NtGdiComputeXformCoefficients = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiConfigureOPMProtectedOutput();
// gdi32.NtGdiConfigureOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiConvertMetafileRect();
// gdi32.NtGdiConvertMetafileRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateBitmap();
// gdi32.NtGdiCreateBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateBitmapFromDxSurface();
// gdi32.NtGdiCreateBitmapFromDxSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateBitmapFromDxSurface2();
// gdi32.NtGdiCreateBitmapFromDxSurface2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateClientObj();
// gdi32.NtGdiCreateClientObj = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateColorSpace();
// gdi32.NtGdiCreateColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateColorTransform();
// gdi32.NtGdiCreateColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateCompatibleBitmap();
// gdi32.NtGdiCreateCompatibleBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateCompatibleDC();
// gdi32.NtGdiCreateCompatibleDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateDIBBrush();
// gdi32.NtGdiCreateDIBBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateDIBSection();
// gdi32.NtGdiCreateDIBSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateDIBitmapInternal();
// gdi32.NtGdiCreateDIBitmapInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateEllipticRgn();
// gdi32.NtGdiCreateEllipticRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateHalftonePalette();
// gdi32.NtGdiCreateHalftonePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateHatchBrushInternal();
// gdi32.NtGdiCreateHatchBrushInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateMetafileDC();
// gdi32.NtGdiCreateMetafileDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateOPMProtectedOutput();
// gdi32.NtGdiCreateOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateOPMProtectedOutputs();
// gdi32.NtGdiCreateOPMProtectedOutputs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreatePaletteInternal();
// gdi32.NtGdiCreatePaletteInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreatePatternBrushInternal();
// gdi32.NtGdiCreatePatternBrushInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreatePen();
// gdi32.NtGdiCreatePen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateRectRgn();
// gdi32.NtGdiCreateRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateRoundRectRgn();
// gdi32.NtGdiCreateRoundRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateServerMetaFile();
// gdi32.NtGdiCreateServerMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateSessionMappedDIBSection();
// gdi32.NtGdiCreateSessionMappedDIBSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiCreateSolidBrush();
// gdi32.NtGdiCreateSolidBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiD3dContextCreate();
// gdi32.NtGdiD3dContextCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiD3dContextDestroy();
// gdi32.NtGdiD3dContextDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiD3dContextDestroyAll();
// gdi32.NtGdiD3dContextDestroyAll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiD3dDrawPrimitives2();
// gdi32.NtGdiD3dDrawPrimitives2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiD3dValidateTextureStageState();
// gdi32.NtGdiD3dValidateTextureStageState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCIGetCapabilitiesString();
// gdi32.NtGdiDDCCIGetCapabilitiesString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCIGetCapabilitiesStringLength();
// gdi32.NtGdiDDCCIGetCapabilitiesStringLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCIGetTimingReport();
// gdi32.NtGdiDDCCIGetTimingReport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCIGetVCPFeature();
// gdi32.NtGdiDDCCIGetVCPFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCISaveCurrentSettings();
// gdi32.NtGdiDDCCISaveCurrentSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDDCCISetVCPFeature();
// gdi32.NtGdiDDCCISetVCPFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdAddAttachedSurface();
// gdi32.NtGdiDdAddAttachedSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdAlphaBlt();
// gdi32.NtGdiDdAlphaBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdAttachSurface();
// gdi32.NtGdiDdAttachSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdBeginMoCompFrame();
// gdi32.NtGdiDdBeginMoCompFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdBlt();
// gdi32.NtGdiDdBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCanCreateD3DBuffer();
// gdi32.NtGdiDdCanCreateD3DBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCanCreateSurface();
// gdi32.NtGdiDdCanCreateSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdColorControl();
// gdi32.NtGdiDdColorControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateD3DBuffer();
// gdi32.NtGdiDdCreateD3DBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateDirectDrawObject();
// gdi32.NtGdiDdCreateDirectDrawObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateFullscreenSprite();
// gdi32.NtGdiDdCreateFullscreenSprite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateMoComp();
// gdi32.NtGdiDdCreateMoComp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateSurface();
// gdi32.NtGdiDdCreateSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateSurfaceEx();
// gdi32.NtGdiDdCreateSurfaceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdCreateSurfaceObject();
// gdi32.NtGdiDdCreateSurfaceObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIAbandonSwapChain();
// gdi32.NtGdiDdDDIAbandonSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIAcquireKeyedMutex();
// gdi32.NtGdiDdDDIAcquireKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIAcquireKeyedMutex2();
// gdi32.NtGdiDdDDIAcquireKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIAcquireSwapChain();
// gdi32.NtGdiDdDDIAcquireSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIAdjustFullscreenGamma();
// gdi32.NtGdiDdDDIAdjustFullscreenGamma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICacheHybridQueryValue();
// gdi32.NtGdiDdDDICacheHybridQueryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIChangeVideoMemoryReservation();
// gdi32.NtGdiDdDDIChangeVideoMemoryReservation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckExclusiveOwnership();
// gdi32.NtGdiDdDDICheckExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckMonitorPowerState();
// gdi32.NtGdiDdDDICheckMonitorPowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport();
// gdi32.NtGdiDdDDICheckMultiPlaneOverlaySupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport2();
// gdi32.NtGdiDdDDICheckMultiPlaneOverlaySupport2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckMultiPlaneOverlaySupport3();
// gdi32.NtGdiDdDDICheckMultiPlaneOverlaySupport3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckOcclusion();
// gdi32.NtGdiDdDDICheckOcclusion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckSharedResourceAccess();
// gdi32.NtGdiDdDDICheckSharedResourceAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICheckVidPnExclusiveOwnership();
// gdi32.NtGdiDdDDICheckVidPnExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICloseAdapter();
// gdi32.NtGdiDdDDICloseAdapter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIConfigureSharedResource();
// gdi32.NtGdiDdDDIConfigureSharedResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateAllocation();
// gdi32.NtGdiDdDDICreateAllocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateContext();
// gdi32.NtGdiDdDDICreateContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateContextVirtual();
// gdi32.NtGdiDdDDICreateContextVirtual = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateDCFromMemory();
// gdi32.NtGdiDdDDICreateDCFromMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateDevice();
// gdi32.NtGdiDdDDICreateDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateKeyedMutex();
// gdi32.NtGdiDdDDICreateKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateKeyedMutex2();
// gdi32.NtGdiDdDDICreateKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateOutputDupl();
// gdi32.NtGdiDdDDICreateOutputDupl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateOverlay();
// gdi32.NtGdiDdDDICreateOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreatePagingQueue();
// gdi32.NtGdiDdDDICreatePagingQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateSwapChain();
// gdi32.NtGdiDdDDICreateSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDICreateSynchronizationObject();
// gdi32.NtGdiDdDDICreateSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyAllocation();
// gdi32.NtGdiDdDDIDestroyAllocation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyAllocation2();
// gdi32.NtGdiDdDDIDestroyAllocation2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyContext();
// gdi32.NtGdiDdDDIDestroyContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyDCFromMemory();
// gdi32.NtGdiDdDDIDestroyDCFromMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyDevice();
// gdi32.NtGdiDdDDIDestroyDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyKeyedMutex();
// gdi32.NtGdiDdDDIDestroyKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyOutputDupl();
// gdi32.NtGdiDdDDIDestroyOutputDupl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyOverlay();
// gdi32.NtGdiDdDDIDestroyOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroyPagingQueue();
// gdi32.NtGdiDdDDIDestroyPagingQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIDestroySynchronizationObject();
// gdi32.NtGdiDdDDIDestroySynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIEnumAdapters();
// gdi32.NtGdiDdDDIEnumAdapters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIEnumAdapters2();
// gdi32.NtGdiDdDDIEnumAdapters2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIEscape();
// gdi32.NtGdiDdDDIEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIEvict();
// gdi32.NtGdiDdDDIEvict = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIFlipOverlay();
// gdi32.NtGdiDdDDIFlipOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIFlushHeapTransitions();
// gdi32.NtGdiDdDDIFlushHeapTransitions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIFreeGpuVirtualAddress();
// gdi32.NtGdiDdDDIFreeGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetCachedHybridQueryValue();
// gdi32.NtGdiDdDDIGetCachedHybridQueryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetContextInProcessSchedulingPriority();
// gdi32.NtGdiDdDDIGetContextInProcessSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetContextSchedulingPriority();
// gdi32.NtGdiDdDDIGetContextSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetDWMVerticalBlankEvent();
// gdi32.NtGdiDdDDIGetDWMVerticalBlankEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetDeviceState();
// gdi32.NtGdiDdDDIGetDeviceState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetDisplayModeList();
// gdi32.NtGdiDdDDIGetDisplayModeList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetMultisampleMethodList();
// gdi32.NtGdiDdDDIGetMultisampleMethodList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetOverlayState();
// gdi32.NtGdiDdDDIGetOverlayState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetPresentHistory();
// gdi32.NtGdiDdDDIGetPresentHistory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetPresentQueueEvent();
// gdi32.NtGdiDdDDIGetPresentQueueEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetProcessSchedulingPriorityClass();
// gdi32.NtGdiDdDDIGetProcessSchedulingPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetResourcePresentPrivateDriverData();
// gdi32.NtGdiDdDDIGetResourcePresentPrivateDriverData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetRuntimeData();
// gdi32.NtGdiDdDDIGetRuntimeData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetScanLine();
// gdi32.NtGdiDdDDIGetScanLine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetSetSwapChainMetadata();
// gdi32.NtGdiDdDDIGetSetSwapChainMetadata = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetSharedPrimaryHandle();
// gdi32.NtGdiDdDDIGetSharedPrimaryHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIGetSharedResourceAdapterLuid();
// gdi32.NtGdiDdDDIGetSharedResourceAdapterLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIInvalidateActiveVidPn();
// gdi32.NtGdiDdDDIInvalidateActiveVidPn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIInvalidateCache();
// gdi32.NtGdiDdDDIInvalidateCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDILock();
// gdi32.NtGdiDdDDILock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDILock2();
// gdi32.NtGdiDdDDILock2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIMakeResident();
// gdi32.NtGdiDdDDIMakeResident = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIMapGpuVirtualAddress();
// gdi32.NtGdiDdDDIMapGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIMarkDeviceAsError();
// gdi32.NtGdiDdDDIMarkDeviceAsError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispGetNextChunkInfo();
// gdi32.NtGdiDdDDINetDispGetNextChunkInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispQueryMiracastDisplayDeviceStatus();
// gdi32.NtGdiDdDDINetDispQueryMiracastDisplayDeviceStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispQueryMiracastDisplayDeviceSupport();
// gdi32.NtGdiDdDDINetDispQueryMiracastDisplayDeviceSupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispStartMiracastDisplayDevice();
// gdi32.NtGdiDdDDINetDispStartMiracastDisplayDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispStopMiracastDisplayDevice();
// gdi32.NtGdiDdDDINetDispStopMiracastDisplayDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDINetDispStopSessions();
// gdi32.NtGdiDdDDINetDispStopSessions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOfferAllocations();
// gdi32.NtGdiDdDDIOfferAllocations = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenAdapterFromDeviceName();
// gdi32.NtGdiDdDDIOpenAdapterFromDeviceName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenAdapterFromHdc();
// gdi32.NtGdiDdDDIOpenAdapterFromHdc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenAdapterFromLuid();
// gdi32.NtGdiDdDDIOpenAdapterFromLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenKeyedMutex();
// gdi32.NtGdiDdDDIOpenKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenKeyedMutex2();
// gdi32.NtGdiDdDDIOpenKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenNtHandleFromName();
// gdi32.NtGdiDdDDIOpenNtHandleFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenResource();
// gdi32.NtGdiDdDDIOpenResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenResourceFromNtHandle();
// gdi32.NtGdiDdDDIOpenResourceFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenSwapChain();
// gdi32.NtGdiDdDDIOpenSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenSyncObjectFromNtHandle();
// gdi32.NtGdiDdDDIOpenSyncObjectFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenSyncObjectFromNtHandle2();
// gdi32.NtGdiDdDDIOpenSyncObjectFromNtHandle2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenSyncObjectNtHandleFromName();
// gdi32.NtGdiDdDDIOpenSyncObjectNtHandleFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOpenSynchronizationObject();
// gdi32.NtGdiDdDDIOpenSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOutputDuplGetFrameInfo();
// gdi32.NtGdiDdDDIOutputDuplGetFrameInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOutputDuplGetMetaData();
// gdi32.NtGdiDdDDIOutputDuplGetMetaData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOutputDuplGetPointerShapeData();
// gdi32.NtGdiDdDDIOutputDuplGetPointerShapeData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOutputDuplPresent();
// gdi32.NtGdiDdDDIOutputDuplPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIOutputDuplReleaseFrame();
// gdi32.NtGdiDdDDIOutputDuplReleaseFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPinDirectFlipResources();
// gdi32.NtGdiDdDDIPinDirectFlipResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPollDisplayChildren();
// gdi32.NtGdiDdDDIPollDisplayChildren = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPresent();
// gdi32.NtGdiDdDDIPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay();
// gdi32.NtGdiDdDDIPresentMultiPlaneOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay2();
// gdi32.NtGdiDdDDIPresentMultiPlaneOverlay2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIPresentMultiPlaneOverlay3();
// gdi32.NtGdiDdDDIPresentMultiPlaneOverlay3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryAdapterInfo();
// gdi32.NtGdiDdDDIQueryAdapterInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryAllocationResidency();
// gdi32.NtGdiDdDDIQueryAllocationResidency = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryClockCalibration();
// gdi32.NtGdiDdDDIQueryClockCalibration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryFSEBlock();
// gdi32.NtGdiDdDDIQueryFSEBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryProcessOfferInfo();
// gdi32.NtGdiDdDDIQueryProcessOfferInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryRemoteVidPnSourceFromGdiDisplayName();
// gdi32.NtGdiDdDDIQueryRemoteVidPnSourceFromGdiDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryResourceInfo();
// gdi32.NtGdiDdDDIQueryResourceInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryResourceInfoFromNtHandle();
// gdi32.NtGdiDdDDIQueryResourceInfoFromNtHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryStatistics();
// gdi32.NtGdiDdDDIQueryStatistics = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryVidPnExclusiveOwnership();
// gdi32.NtGdiDdDDIQueryVidPnExclusiveOwnership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIQueryVideoMemoryInfo();
// gdi32.NtGdiDdDDIQueryVideoMemoryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReclaimAllocations();
// gdi32.NtGdiDdDDIReclaimAllocations = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReclaimAllocations2();
// gdi32.NtGdiDdDDIReclaimAllocations2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReleaseKeyedMutex();
// gdi32.NtGdiDdDDIReleaseKeyedMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReleaseKeyedMutex2();
// gdi32.NtGdiDdDDIReleaseKeyedMutex2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReleaseProcessVidPnSourceOwners();
// gdi32.NtGdiDdDDIReleaseProcessVidPnSourceOwners = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReleaseSwapChain();
// gdi32.NtGdiDdDDIReleaseSwapChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIRender();
// gdi32.NtGdiDdDDIRender = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIReserveGpuVirtualAddress();
// gdi32.NtGdiDdDDIReserveGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetAllocationPriority();
// gdi32.NtGdiDdDDISetAllocationPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetContextInProcessSchedulingPriority();
// gdi32.NtGdiDdDDISetContextInProcessSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetContextSchedulingPriority();
// gdi32.NtGdiDdDDISetContextSchedulingPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetDisplayMode();
// gdi32.NtGdiDdDDISetDisplayMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetDisplayPrivateDriverFormat();
// gdi32.NtGdiDdDDISetDisplayPrivateDriverFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetDodIndirectSwapchain();
// gdi32.NtGdiDdDDISetDodIndirectSwapchain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetFSEBlock();
// gdi32.NtGdiDdDDISetFSEBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetGammaRamp();
// gdi32.NtGdiDdDDISetGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetHwProtectionTeardownRecovery();
// gdi32.NtGdiDdDDISetHwProtectionTeardownRecovery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetProcessSchedulingPriorityClass();
// gdi32.NtGdiDdDDISetProcessSchedulingPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetQueuedLimit();
// gdi32.NtGdiDdDDISetQueuedLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetStablePowerState();
// gdi32.NtGdiDdDDISetStablePowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetStereoEnabled();
// gdi32.NtGdiDdDDISetStereoEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetSyncRefreshCountWaitTarget();
// gdi32.NtGdiDdDDISetSyncRefreshCountWaitTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetVidPnSourceHwProtection();
// gdi32.NtGdiDdDDISetVidPnSourceHwProtection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetVidPnSourceOwner();
// gdi32.NtGdiDdDDISetVidPnSourceOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISetVidPnSourceOwner1();
// gdi32.NtGdiDdDDISetVidPnSourceOwner1 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIShareObjects();
// gdi32.NtGdiDdDDIShareObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISharedPrimaryLockNotification();
// gdi32.NtGdiDdDDISharedPrimaryLockNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISharedPrimaryUnLockNotification();
// gdi32.NtGdiDdDDISharedPrimaryUnLockNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISignalSynchronizationObject();
// gdi32.NtGdiDdDDISignalSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromCpu();
// gdi32.NtGdiDdDDISignalSynchronizationObjectFromCpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromGpu();
// gdi32.NtGdiDdDDISignalSynchronizationObjectFromGpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISignalSynchronizationObjectFromGpu2();
// gdi32.NtGdiDdDDISignalSynchronizationObjectFromGpu2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDISubmitCommand();
// gdi32.NtGdiDdDDISubmitCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDITrimProcessCommitment();
// gdi32.NtGdiDdDDITrimProcessCommitment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUnlock();
// gdi32.NtGdiDdDDIUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUnlock2();
// gdi32.NtGdiDdDDIUnlock2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUnpinDirectFlipResources();
// gdi32.NtGdiDdDDIUnpinDirectFlipResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUpdateAllocationProperty();
// gdi32.NtGdiDdDDIUpdateAllocationProperty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUpdateGpuVirtualAddress();
// gdi32.NtGdiDdDDIUpdateGpuVirtualAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIUpdateOverlay();
// gdi32.NtGdiDdDDIUpdateOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForIdle();
// gdi32.NtGdiDdDDIWaitForIdle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForSynchronizationObject();
// gdi32.NtGdiDdDDIWaitForSynchronizationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForSynchronizationObjectFromCpu();
// gdi32.NtGdiDdDDIWaitForSynchronizationObjectFromCpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForSynchronizationObjectFromGpu();
// gdi32.NtGdiDdDDIWaitForSynchronizationObjectFromGpu = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForVerticalBlankEvent();
// gdi32.NtGdiDdDDIWaitForVerticalBlankEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDDIWaitForVerticalBlankEvent2();
// gdi32.NtGdiDdDDIWaitForVerticalBlankEvent2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDeleteDirectDrawObject();
// gdi32.NtGdiDdDeleteDirectDrawObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDeleteSurfaceObject();
// gdi32.NtGdiDdDeleteSurfaceObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDestroyD3DBuffer();
// gdi32.NtGdiDdDestroyD3DBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDestroyFullscreenSprite();
// gdi32.NtGdiDdDestroyFullscreenSprite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDestroyMoComp();
// gdi32.NtGdiDdDestroyMoComp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdDestroySurface();
// gdi32.NtGdiDdDestroySurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdEndMoCompFrame();
// gdi32.NtGdiDdEndMoCompFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdFlip();
// gdi32.NtGdiDdFlip = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdFlipToGDISurface();
// gdi32.NtGdiDdFlipToGDISurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetAvailDriverMemory();
// gdi32.NtGdiDdGetAvailDriverMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetBltStatus();
// gdi32.NtGdiDdGetBltStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetDC();
// gdi32.NtGdiDdGetDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetDriverInfo();
// gdi32.NtGdiDdGetDriverInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetDriverState();
// gdi32.NtGdiDdGetDriverState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetDxHandle();
// gdi32.NtGdiDdGetDxHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetFlipStatus();
// gdi32.NtGdiDdGetFlipStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetInternalMoCompInfo();
// gdi32.NtGdiDdGetInternalMoCompInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetMoCompBuffInfo();
// gdi32.NtGdiDdGetMoCompBuffInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetMoCompFormats();
// gdi32.NtGdiDdGetMoCompFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetMoCompGuids();
// gdi32.NtGdiDdGetMoCompGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdGetScanLine();
// gdi32.NtGdiDdGetScanLine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdLock();
// gdi32.NtGdiDdLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdLockD3D();
// gdi32.NtGdiDdLockD3D = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdNotifyFullscreenSpriteUpdate();
// gdi32.NtGdiDdNotifyFullscreenSpriteUpdate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdQueryDirectDrawObject();
// gdi32.NtGdiDdQueryDirectDrawObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdQueryMoCompStatus();
// gdi32.NtGdiDdQueryMoCompStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdQueryVisRgnUniqueness();
// gdi32.NtGdiDdQueryVisRgnUniqueness = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdReenableDirectDrawObject();
// gdi32.NtGdiDdReenableDirectDrawObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdReleaseDC();
// gdi32.NtGdiDdReleaseDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdRenderMoComp();
// gdi32.NtGdiDdRenderMoComp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdResetVisrgn();
// gdi32.NtGdiDdResetVisrgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdSetColorKey();
// gdi32.NtGdiDdSetColorKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdSetExclusiveMode();
// gdi32.NtGdiDdSetExclusiveMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdSetGammaRamp();
// gdi32.NtGdiDdSetGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdSetOverlayPosition();
// gdi32.NtGdiDdSetOverlayPosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdUnattachSurface();
// gdi32.NtGdiDdUnattachSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdUnlock();
// gdi32.NtGdiDdUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdUnlockD3D();
// gdi32.NtGdiDdUnlockD3D = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdUpdateOverlay();
// gdi32.NtGdiDdUpdateOverlay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDdWaitForVerticalBlank();
// gdi32.NtGdiDdWaitForVerticalBlank = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDeleteClientObj();
// gdi32.NtGdiDeleteClientObj = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDeleteColorSpace();
// gdi32.NtGdiDeleteColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDeleteColorTransform();
// gdi32.NtGdiDeleteColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDeleteObjectApp();
// gdi32.NtGdiDeleteObjectApp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDescribePixelFormat();
// gdi32.NtGdiDescribePixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDestroyOPMProtectedOutput();
// gdi32.NtGdiDestroyOPMProtectedOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDestroyPhysicalMonitor();
// gdi32.NtGdiDestroyPhysicalMonitor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDoBanding();
// gdi32.NtGdiDoBanding = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDoPalette();
// gdi32.NtGdiDoPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDrawEscape();
// gdi32.NtGdiDrawEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDrawStream();
// gdi32.NtGdiDrawStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpAcquireNotification();
// gdi32.NtGdiDvpAcquireNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpCanCreateVideoPort();
// gdi32.NtGdiDvpCanCreateVideoPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpColorControl();
// gdi32.NtGdiDvpColorControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpCreateVideoPort();
// gdi32.NtGdiDvpCreateVideoPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpDestroyVideoPort();
// gdi32.NtGdiDvpDestroyVideoPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpFlipVideoPort();
// gdi32.NtGdiDvpFlipVideoPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortBandwidth();
// gdi32.NtGdiDvpGetVideoPortBandwidth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortConnectInfo();
// gdi32.NtGdiDvpGetVideoPortConnectInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortField();
// gdi32.NtGdiDvpGetVideoPortField = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortFlipStatus();
// gdi32.NtGdiDvpGetVideoPortFlipStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortInputFormats();
// gdi32.NtGdiDvpGetVideoPortInputFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortLine();
// gdi32.NtGdiDvpGetVideoPortLine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoPortOutputFormats();
// gdi32.NtGdiDvpGetVideoPortOutputFormats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpGetVideoSignalStatus();
// gdi32.NtGdiDvpGetVideoSignalStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpReleaseNotification();
// gdi32.NtGdiDvpReleaseNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpUpdateVideoPort();
// gdi32.NtGdiDvpUpdateVideoPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDvpWaitForVideoPortSync();
// gdi32.NtGdiDvpWaitForVideoPortSync = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDwmCreatedBitmapRemotingOutput();
// gdi32.NtGdiDwmCreatedBitmapRemotingOutput = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiDxgGenericThunk();
// gdi32.NtGdiDxgGenericThunk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEllipse();
// gdi32.NtGdiEllipse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEnableEudc();
// gdi32.NtGdiEnableEudc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEndDoc();
// gdi32.NtGdiEndDoc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEndGdiRendering();
// gdi32.NtGdiEndGdiRendering = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEndPage();
// gdi32.NtGdiEndPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEndPath();
// gdi32.NtGdiEndPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngAlphaBlend();
// gdi32.NtGdiEngAlphaBlend = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngAssociateSurface();
// gdi32.NtGdiEngAssociateSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngBitBlt();
// gdi32.NtGdiEngBitBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCheckAbort();
// gdi32.NtGdiEngCheckAbort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngComputeGlyphSet();
// gdi32.NtGdiEngComputeGlyphSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCopyBits();
// gdi32.NtGdiEngCopyBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCreateBitmap();
// gdi32.NtGdiEngCreateBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCreateClip();
// gdi32.NtGdiEngCreateClip = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCreateDeviceBitmap();
// gdi32.NtGdiEngCreateDeviceBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCreateDeviceSurface();
// gdi32.NtGdiEngCreateDeviceSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngCreatePalette();
// gdi32.NtGdiEngCreatePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngDeleteClip();
// gdi32.NtGdiEngDeleteClip = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngDeletePalette();
// gdi32.NtGdiEngDeletePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngDeletePath();
// gdi32.NtGdiEngDeletePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngDeleteSurface();
// gdi32.NtGdiEngDeleteSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngEraseSurface();
// gdi32.NtGdiEngEraseSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngFillPath();
// gdi32.NtGdiEngFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngGradientFill();
// gdi32.NtGdiEngGradientFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngLineTo();
// gdi32.NtGdiEngLineTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngLockSurface();
// gdi32.NtGdiEngLockSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngMarkBandingSurface();
// gdi32.NtGdiEngMarkBandingSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngPaint();
// gdi32.NtGdiEngPaint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngPlgBlt();
// gdi32.NtGdiEngPlgBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngStretchBlt();
// gdi32.NtGdiEngStretchBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngStretchBltROP();
// gdi32.NtGdiEngStretchBltROP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngStrokeAndFillPath();
// gdi32.NtGdiEngStrokeAndFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngStrokePath();
// gdi32.NtGdiEngStrokePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngTextOut();
// gdi32.NtGdiEngTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngTransparentBlt();
// gdi32.NtGdiEngTransparentBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEngUnlockSurface();
// gdi32.NtGdiEngUnlockSurface = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEnumFonts();
// gdi32.NtGdiEnumFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEnumObjects();
// gdi32.NtGdiEnumObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEqualRgn();
// gdi32.NtGdiEqualRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiEudcLoadUnloadLink();
// gdi32.NtGdiEudcLoadUnloadLink = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExcludeClipRect();
// gdi32.NtGdiExcludeClipRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtCreatePen();
// gdi32.NtGdiExtCreatePen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtCreateRegion();
// gdi32.NtGdiExtCreateRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtEscape();
// gdi32.NtGdiExtEscape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtFloodFill();
// gdi32.NtGdiExtFloodFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtGetObjectW();
// gdi32.NtGdiExtGetObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtSelectClipRgn();
// gdi32.NtGdiExtSelectClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiExtTextOutW();
// gdi32.NtGdiExtTextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_cGetAllGlyphHandles();
// gdi32.NtGdiFONTOBJ_cGetAllGlyphHandles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_cGetGlyphs();
// gdi32.NtGdiFONTOBJ_cGetGlyphs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_pQueryGlyphAttrs();
// gdi32.NtGdiFONTOBJ_pQueryGlyphAttrs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_pfdg();
// gdi32.NtGdiFONTOBJ_pfdg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_pifi();
// gdi32.NtGdiFONTOBJ_pifi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_pvTrueTypeFontFile();
// gdi32.NtGdiFONTOBJ_pvTrueTypeFontFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_pxoGetXform();
// gdi32.NtGdiFONTOBJ_pxoGetXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFONTOBJ_vGetInfo();
// gdi32.NtGdiFONTOBJ_vGetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFillPath();
// gdi32.NtGdiFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFillRgn();
// gdi32.NtGdiFillRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFlattenPath();
// gdi32.NtGdiFlattenPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFlush();
// gdi32.NtGdiFlush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFontIsLinked();
// gdi32.NtGdiFontIsLinked = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiForceUFIMapping();
// gdi32.NtGdiForceUFIMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFrameRgn();
// gdi32.NtGdiFrameRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiFullscreenControl();
// gdi32.NtGdiFullscreenControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetAndSetDCDword();
// gdi32.NtGdiGetAndSetDCDword = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetAppClipBox();
// gdi32.NtGdiGetAppClipBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetBitmapBits();
// gdi32.NtGdiGetBitmapBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetBitmapDimension();
// gdi32.NtGdiGetBitmapDimension = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetBoundsRect();
// gdi32.NtGdiGetBoundsRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCOPPCompatibleOPMInformation();
// gdi32.NtGdiGetCOPPCompatibleOPMInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCertificate();
// gdi32.NtGdiGetCertificate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCertificateByHandle();
// gdi32.NtGdiGetCertificateByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCertificateSize();
// gdi32.NtGdiGetCertificateSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCertificateSizeByHandle();
// gdi32.NtGdiGetCertificateSizeByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCharABCWidthsW();
// gdi32.NtGdiGetCharABCWidthsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCharSet();
// gdi32.NtGdiGetCharSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCharWidthInfo();
// gdi32.NtGdiGetCharWidthInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCharWidthW();
// gdi32.NtGdiGetCharWidthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCharacterPlacementW();
// gdi32.NtGdiGetCharacterPlacementW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetColorAdjustment();
// gdi32.NtGdiGetColorAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetColorSpaceforBitmap();
// gdi32.NtGdiGetColorSpaceforBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetCurrentDpiInfo();
// gdi32.NtGdiGetCurrentDpiInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDCDword();
// gdi32.NtGdiGetDCDword = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDCObject();
// gdi32.NtGdiGetDCObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDCPoint();
// gdi32.NtGdiGetDCPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDCforBitmap();
// gdi32.NtGdiGetDCforBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDIBitsInternal();
// gdi32.NtGdiGetDIBitsInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDeviceCaps();
// gdi32.NtGdiGetDeviceCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDeviceCapsAll();
// gdi32.NtGdiGetDeviceCapsAll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDeviceGammaRamp();
// gdi32.NtGdiGetDeviceGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDeviceWidth();
// gdi32.NtGdiGetDeviceWidth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetDhpdev();
// gdi32.NtGdiGetDhpdev = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetETM();
// gdi32.NtGdiGetETM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetEmbUFI();
// gdi32.NtGdiGetEmbUFI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetEmbedFonts();
// gdi32.NtGdiGetEmbedFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetEntry();
// gdi32.NtGdiGetEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetEudcTimeStampEx();
// gdi32.NtGdiGetEudcTimeStampEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetFontData();
// gdi32.NtGdiGetFontData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetFontFileData();
// gdi32.NtGdiGetFontFileData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetFontFileInfo();
// gdi32.NtGdiGetFontFileInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetFontResourceInfoInternalW();
// gdi32.NtGdiGetFontResourceInfoInternalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetFontUnicodeRanges();
// gdi32.NtGdiGetFontUnicodeRanges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetGlyphIndicesW();
// gdi32.NtGdiGetGlyphIndicesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetGlyphIndicesWInternal();
// gdi32.NtGdiGetGlyphIndicesWInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetGlyphOutline();
// gdi32.NtGdiGetGlyphOutline = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetKerningPairs();
// gdi32.NtGdiGetKerningPairs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetLinkedUFIs();
// gdi32.NtGdiGetLinkedUFIs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetMiterLimit();
// gdi32.NtGdiGetMiterLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetMonitorID();
// gdi32.NtGdiGetMonitorID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetNearestColor();
// gdi32.NtGdiGetNearestColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetNearestPaletteIndex();
// gdi32.NtGdiGetNearestPaletteIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetNumberOfPhysicalMonitors();
// gdi32.NtGdiGetNumberOfPhysicalMonitors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetOPMInformation();
// gdi32.NtGdiGetOPMInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetOPMRandomNumber();
// gdi32.NtGdiGetOPMRandomNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetObjectBitmapHandle();
// gdi32.NtGdiGetObjectBitmapHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetOutlineTextMetricsInternalW();
// gdi32.NtGdiGetOutlineTextMetricsInternalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetPath();
// gdi32.NtGdiGetPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetPerBandInfo();
// gdi32.NtGdiGetPerBandInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetPhysicalMonitorDescription();
// gdi32.NtGdiGetPhysicalMonitorDescription = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetPhysicalMonitors();
// gdi32.NtGdiGetPhysicalMonitors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetPixel();
// gdi32.NtGdiGetPixel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetRandomRgn();
// gdi32.NtGdiGetRandomRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetRasterizerCaps();
// gdi32.NtGdiGetRasterizerCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetRealizationInfo();
// gdi32.NtGdiGetRealizationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetRegionData();
// gdi32.NtGdiGetRegionData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetRgnBox();
// gdi32.NtGdiGetRgnBox = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetServerMetaFileBits();
// gdi32.NtGdiGetServerMetaFileBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetSpoolMessage();
// gdi32.NtGdiGetSpoolMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetStats();
// gdi32.NtGdiGetStats = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetStringBitmapW();
// gdi32.NtGdiGetStringBitmapW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetSuggestedOPMProtectedOutputArraySize();
// gdi32.NtGdiGetSuggestedOPMProtectedOutputArraySize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetSystemPaletteUse();
// gdi32.NtGdiGetSystemPaletteUse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTextCharsetInfo();
// gdi32.NtGdiGetTextCharsetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTextExtent();
// gdi32.NtGdiGetTextExtent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTextExtentExW();
// gdi32.NtGdiGetTextExtentExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTextFaceW();
// gdi32.NtGdiGetTextFaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTextMetricsW();
// gdi32.NtGdiGetTextMetricsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetTransform();
// gdi32.NtGdiGetTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetUFI();
// gdi32.NtGdiGetUFI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetUFIPathname();
// gdi32.NtGdiGetUFIPathname = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGetWidthTable();
// gdi32.NtGdiGetWidthTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiGradientFill();
// gdi32.NtGdiGradientFill = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiHLSurfGetInformation();
// gdi32.NtGdiHLSurfGetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiHLSurfSetInformation();
// gdi32.NtGdiHLSurfSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiHT_Get8BPPFormatPalette();
// gdi32.NtGdiHT_Get8BPPFormatPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiHT_Get8BPPMaskPalette();
// gdi32.NtGdiHT_Get8BPPMaskPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiHfontCreate();
// gdi32.NtGdiHfontCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiIcmBrushInfo();
// gdi32.NtGdiIcmBrushInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiInit();
// gdi32.NtGdiInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiInitSpool();
// gdi32.NtGdiInitSpool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiIntersectClipRect();
// gdi32.NtGdiIntersectClipRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiInvertRgn();
// gdi32.NtGdiInvertRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiLineTo();
// gdi32.NtGdiLineTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMakeFontDir();
// gdi32.NtGdiMakeFontDir = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMakeInfoDC();
// gdi32.NtGdiMakeInfoDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMakeObjectUnXferable();
// gdi32.NtGdiMakeObjectUnXferable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMakeObjectXferable();
// gdi32.NtGdiMakeObjectXferable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMaskBlt();
// gdi32.NtGdiMaskBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMirrorWindowOrg();
// gdi32.NtGdiMirrorWindowOrg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiModifyWorldTransform();
// gdi32.NtGdiModifyWorldTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMonoBitmap();
// gdi32.NtGdiMonoBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiMoveTo();
// gdi32.NtGdiMoveTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiOffsetClipRgn();
// gdi32.NtGdiOffsetClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiOffsetRgn();
// gdi32.NtGdiOffsetRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiOpenDCW();
// gdi32.NtGdiOpenDCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPATHOBJ_bEnum();
// gdi32.NtGdiPATHOBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPATHOBJ_bEnumClipLines();
// gdi32.NtGdiPATHOBJ_bEnumClipLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPATHOBJ_vEnumStart();
// gdi32.NtGdiPATHOBJ_vEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPATHOBJ_vEnumStartClipLines();
// gdi32.NtGdiPATHOBJ_vEnumStartClipLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPATHOBJ_vGetBounds();
// gdi32.NtGdiPATHOBJ_vGetBounds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPatBlt();
// gdi32.NtGdiPatBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPathToRegion();
// gdi32.NtGdiPathToRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPlgBlt();
// gdi32.NtGdiPlgBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPolyDraw();
// gdi32.NtGdiPolyDraw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPolyPatBlt();
// gdi32.NtGdiPolyPatBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPolyPolyDraw();
// gdi32.NtGdiPolyPolyDraw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPolyTextOutW();
// gdi32.NtGdiPolyTextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPtInRegion();
// gdi32.NtGdiPtInRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiPtVisible();
// gdi32.NtGdiPtVisible = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiQueryFontAssocInfo();
// gdi32.NtGdiQueryFontAssocInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiQueryFonts();
// gdi32.NtGdiQueryFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRectInRegion();
// gdi32.NtGdiRectInRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRectVisible();
// gdi32.NtGdiRectVisible = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRectangle();
// gdi32.NtGdiRectangle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRemoveFontMemResourceEx();
// gdi32.NtGdiRemoveFontMemResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRemoveFontResourceW();
// gdi32.NtGdiRemoveFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRemoveMergeFont();
// gdi32.NtGdiRemoveMergeFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiResetDC();
// gdi32.NtGdiResetDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiResizePalette();
// gdi32.NtGdiResizePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRestoreDC();
// gdi32.NtGdiRestoreDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiRoundRect();
// gdi32.NtGdiRoundRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSTROBJ_bEnum();
// gdi32.NtGdiSTROBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSTROBJ_bEnumPositionsOnly();
// gdi32.NtGdiSTROBJ_bEnumPositionsOnly = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSTROBJ_bGetAdvanceWidths();
// gdi32.NtGdiSTROBJ_bGetAdvanceWidths = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSTROBJ_dwGetCodePage();
// gdi32.NtGdiSTROBJ_dwGetCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSTROBJ_vEnumStart();
// gdi32.NtGdiSTROBJ_vEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSaveDC();
// gdi32.NtGdiSaveDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiScaleViewportExtEx();
// gdi32.NtGdiScaleViewportExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiScaleWindowExtEx();
// gdi32.NtGdiScaleWindowExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSelectBitmap();
// gdi32.NtGdiSelectBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSelectBrush();
// gdi32.NtGdiSelectBrush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSelectClipPath();
// gdi32.NtGdiSelectClipPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSelectFont();
// gdi32.NtGdiSelectFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSelectPen();
// gdi32.NtGdiSelectPen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBitmapAttributes();
// gdi32.NtGdiSetBitmapAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBitmapBits();
// gdi32.NtGdiSetBitmapBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBitmapDimension();
// gdi32.NtGdiSetBitmapDimension = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBoundsRect();
// gdi32.NtGdiSetBoundsRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBrushAttributes();
// gdi32.NtGdiSetBrushAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetBrushOrg();
// gdi32.NtGdiSetBrushOrg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetColorAdjustment();
// gdi32.NtGdiSetColorAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetColorSpace();
// gdi32.NtGdiSetColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetDIBitsToDeviceInternal();
// gdi32.NtGdiSetDIBitsToDeviceInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetDeviceGammaRamp();
// gdi32.NtGdiSetDeviceGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetFontEnumeration();
// gdi32.NtGdiSetFontEnumeration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetFontXform();
// gdi32.NtGdiSetFontXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetIcmMode();
// gdi32.NtGdiSetIcmMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetLayout();
// gdi32.NtGdiSetLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetLinkedUFIs();
// gdi32.NtGdiSetLinkedUFIs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetMagicColors();
// gdi32.NtGdiSetMagicColors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetMetaRgn();
// gdi32.NtGdiSetMetaRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetMiterLimit();
// gdi32.NtGdiSetMiterLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetOPMSigningKeyAndSequenceNumbers();
// gdi32.NtGdiSetOPMSigningKeyAndSequenceNumbers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetPUMPDOBJ();
// gdi32.NtGdiSetPUMPDOBJ = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetPixel();
// gdi32.NtGdiSetPixel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetPixelFormat();
// gdi32.NtGdiSetPixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetRectRgn();
// gdi32.NtGdiSetRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetSizeDevice();
// gdi32.NtGdiSetSizeDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetSystemPaletteUse();
// gdi32.NtGdiSetSystemPaletteUse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetTextJustification();
// gdi32.NtGdiSetTextJustification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetUMPDSandboxState();
// gdi32.NtGdiSetUMPDSandboxState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSetVirtualResolution();
// gdi32.NtGdiSetVirtualResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStartDoc();
// gdi32.NtGdiStartDoc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStartPage();
// gdi32.NtGdiStartPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStretchBlt();
// gdi32.NtGdiStretchBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStretchDIBitsInternal();
// gdi32.NtGdiStretchDIBitsInternal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStrokeAndFillPath();
// gdi32.NtGdiStrokeAndFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiStrokePath();
// gdi32.NtGdiStrokePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiSwapBuffers();
// gdi32.NtGdiSwapBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiTransformPoints();
// gdi32.NtGdiTransformPoints = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiTransparentBlt();
// gdi32.NtGdiTransparentBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUMPDEngFreeUserMem();
// gdi32.NtGdiUMPDEngFreeUserMem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUnloadPrinterDriver();
// gdi32.NtGdiUnloadPrinterDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUnmapMemFont();
// gdi32.NtGdiUnmapMemFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUnrealizeObject();
// gdi32.NtGdiUnrealizeObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUpdateColors();
// gdi32.NtGdiUpdateColors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiUpdateTransform();
// gdi32.NtGdiUpdateTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiWidenPath();
// gdi32.NtGdiWidenPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiXFORMOBJ_bApplyXform();
// gdi32.NtGdiXFORMOBJ_bApplyXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiXFORMOBJ_iGetXform();
// gdi32.NtGdiXFORMOBJ_iGetXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiXLATEOBJ_cGetPalette();
// gdi32.NtGdiXLATEOBJ_cGetPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiXLATEOBJ_hGetColorTransform();
// gdi32.NtGdiXLATEOBJ_hGetColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGdiXLATEOBJ_iXlate();
// gdi32.NtGdiXLATEOBJ_iXlate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OffsetClipRgn();
// gdi32.OffsetClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OffsetRgn();
// gdi32.OffsetRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OffsetViewportOrgEx();
// gdi32.OffsetViewportOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OffsetWindowOrgEx();
// gdi32.OffsetWindowOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PATHOBJ_bEnum();
// gdi32.PATHOBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PATHOBJ_bEnumClipLines();
// gdi32.PATHOBJ_bEnumClipLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PATHOBJ_vEnumStart();
// gdi32.PATHOBJ_vEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PATHOBJ_vEnumStartClipLines();
// gdi32.PATHOBJ_vEnumStartClipLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PATHOBJ_vGetBounds();
// gdi32.PATHOBJ_vGetBounds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PaintRgn();
// gdi32.PaintRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PatBlt();
// gdi32.PatBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PathToRegion();
// gdi32.PathToRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Pie();
// gdi32.Pie = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PieStub();
// gdi32.PieStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PlayEnhMetaFile();
// gdi32.PlayEnhMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PlayEnhMetaFileRecord();
// gdi32.PlayEnhMetaFileRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PlayMetaFile();
// gdi32.PlayMetaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PlayMetaFileRecord();
// gdi32.PlayMetaFileRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PlgBlt();
// gdi32.PlgBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyBezier();
// gdi32.PolyBezier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyBezierStub();
// gdi32.PolyBezierStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyBezierTo();
// gdi32.PolyBezierTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyBezierToImpl();
// gdi32.PolyBezierToImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyDraw();
// gdi32.PolyDraw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyDrawImpl();
// gdi32.PolyDrawImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyPatBlt();
// gdi32.PolyPatBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyPolygon();
// gdi32.PolyPolygon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyPolygonStub();
// gdi32.PolyPolygonStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyPolyline();
// gdi32.PolyPolyline = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyTextOutA();
// gdi32.PolyTextOutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolyTextOutW();
// gdi32.PolyTextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Polygon();
// gdi32.Polygon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolygonStub();
// gdi32.PolygonStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Polyline();
// gdi32.Polyline = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolylineTo();
// gdi32.PolylineTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PolylineToImpl();
// gdi32.PolylineToImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PtInRegion();
// gdi32.PtInRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PtVisible();
// gdi32.PtVisible = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryFontAssocStatus();
// gdi32.QueryFontAssocStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RealizePalette();
// gdi32.RealizePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RectInRegion();
// gdi32.RectInRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RectVisible();
// gdi32.RectVisible = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Rectangle();
// gdi32.Rectangle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RectangleImpl();
// gdi32.RectangleImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontMemResourceEx();
// gdi32.RemoveFontMemResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceA();
// gdi32.RemoveFontResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceAStub();
// gdi32.RemoveFontResourceAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceExA();
// gdi32.RemoveFontResourceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceExW();
// gdi32.RemoveFontResourceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceTracking();
// gdi32.RemoveFontResourceTracking = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceW();
// gdi32.RemoveFontResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveFontResourceWImpl();
// gdi32.RemoveFontResourceWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResetDCA();
// gdi32.ResetDCA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResetDCW();
// gdi32.ResetDCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResetDCWImpl();
// gdi32.ResetDCWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResizePalette();
// gdi32.ResizePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResizePaletteStub();
// gdi32.ResizePaletteStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RestoreDC();
// gdi32.RestoreDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RestoreDCImpl();
// gdi32.RestoreDCImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RoundRect();
// gdi32.RoundRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RoundRectStub();
// gdi32.RoundRectStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall STROBJ_bEnum();
// gdi32.STROBJ_bEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall STROBJ_bEnumPositionsOnly();
// gdi32.STROBJ_bEnumPositionsOnly = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall STROBJ_bGetAdvanceWidths();
// gdi32.STROBJ_bGetAdvanceWidths = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall STROBJ_dwGetCodePage();
// gdi32.STROBJ_dwGetCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall STROBJ_vEnumStart();
// gdi32.STROBJ_vEnumStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaveDC();
// gdi32.SaveDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaveDCImpl();
// gdi32.SaveDCImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScaleViewportExtEx();
// gdi32.ScaleViewportExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScaleWindowExtEx();
// gdi32.ScaleWindowExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptApplyDigitSubstitution();
// gdi32.ScriptApplyDigitSubstitution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptApplyLogicalWidth();
// gdi32.ScriptApplyLogicalWidth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptBreak();
// gdi32.ScriptBreak = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptCPtoX();
// gdi32.ScriptCPtoX = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptCacheGetHeight();
// gdi32.ScriptCacheGetHeight = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptFreeCache();
// gdi32.ScriptFreeCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetCMap();
// gdi32.ScriptGetCMap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetFontAlternateGlyphs();
// gdi32.ScriptGetFontAlternateGlyphs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetFontFeatureTags();
// gdi32.ScriptGetFontFeatureTags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetFontLanguageTags();
// gdi32.ScriptGetFontLanguageTags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetFontProperties();
// gdi32.ScriptGetFontProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetFontScriptTags();
// gdi32.ScriptGetFontScriptTags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetGlyphABCWidth();
// gdi32.ScriptGetGlyphABCWidth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetLogicalWidths();
// gdi32.ScriptGetLogicalWidths = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptGetProperties();
// gdi32.ScriptGetProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptIsComplex();
// gdi32.ScriptIsComplex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptItemize();
// gdi32.ScriptItemize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptItemizeOpenType();
// gdi32.ScriptItemizeOpenType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptJustify();
// gdi32.ScriptJustify = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptLayout();
// gdi32.ScriptLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptPlace();
// gdi32.ScriptPlace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptPlaceOpenType();
// gdi32.ScriptPlaceOpenType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptPositionSingleGlyph();
// gdi32.ScriptPositionSingleGlyph = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptRecordDigitSubstitution();
// gdi32.ScriptRecordDigitSubstitution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptShape();
// gdi32.ScriptShape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptShapeOpenType();
// gdi32.ScriptShapeOpenType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringAnalyse();
// gdi32.ScriptStringAnalyse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringCPtoX();
// gdi32.ScriptStringCPtoX = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringFree();
// gdi32.ScriptStringFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringGetLogicalWidths();
// gdi32.ScriptStringGetLogicalWidths = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringGetOrder();
// gdi32.ScriptStringGetOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringOut();
// gdi32.ScriptStringOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringValidate();
// gdi32.ScriptStringValidate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptStringXtoCP();
// gdi32.ScriptStringXtoCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptString_pLogAttr();
// gdi32.ScriptString_pLogAttr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptString_pSize();
// gdi32.ScriptString_pSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptString_pcOutChars();
// gdi32.ScriptString_pcOutChars = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptSubstituteSingleGlyph();
// gdi32.ScriptSubstituteSingleGlyph = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptTextOut();
// gdi32.ScriptTextOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScriptXtoCP();
// gdi32.ScriptXtoCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectBrushLocal();
// gdi32.SelectBrushLocal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectClipPath();
// gdi32.SelectClipPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectClipPathImpl();
// gdi32.SelectClipPathImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectClipRgn();
// gdi32.SelectClipRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectClipRgnImpl();
// gdi32.SelectClipRgnImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectFontLocal();
// gdi32.SelectFontLocal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectObject();
// gdi32.SelectObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectObjectImpl();
// gdi32.SelectObjectImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SelectPalette();
// gdi32.SelectPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetAbortProc();
// gdi32.SetAbortProc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetArcDirection();
// gdi32.SetArcDirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBitmapAttributes();
// gdi32.SetBitmapAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBitmapBits();
// gdi32.SetBitmapBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBitmapBitsStub();
// gdi32.SetBitmapBitsStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBitmapDimensionEx();
// gdi32.SetBitmapDimensionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBkColor();
// gdi32.SetBkColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBkMode();
// gdi32.SetBkMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBkModeImpl();
// gdi32.SetBkModeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBoundsRect();
// gdi32.SetBoundsRect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBrushAttributes();
// gdi32.SetBrushAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetBrushOrgEx();
// gdi32.SetBrushOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetColorAdjustment();
// gdi32.SetColorAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetColorSpace();
// gdi32.SetColorSpace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDCBrushColor();
// gdi32.SetDCBrushColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDCPenColor();
// gdi32.SetDCPenColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDIBColorTable();
// gdi32.SetDIBColorTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDIBits();
// gdi32.SetDIBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDIBitsToDevice();
// gdi32.SetDIBitsToDevice = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDeviceGammaRamp();
// gdi32.SetDeviceGammaRamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEnhMetaFileBits();
// gdi32.SetEnhMetaFileBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFontEnumeration();
// gdi32.SetFontEnumeration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetGraphicsMode();
// gdi32.SetGraphicsMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetICMMode();
// gdi32.SetICMMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetICMModeImpl();
// gdi32.SetICMModeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetICMProfileA();
// gdi32.SetICMProfileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetICMProfileW();
// gdi32.SetICMProfileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLayout();
// gdi32.SetLayout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLayoutWidth();
// gdi32.SetLayoutWidth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMagicColors();
// gdi32.SetMagicColors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMapMode();
// gdi32.SetMapMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMapperFlags();
// gdi32.SetMapperFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMetaFileBitsEx();
// gdi32.SetMetaFileBitsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMetaRgn();
// gdi32.SetMetaRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMiterLimit();
// gdi32.SetMiterLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMiterLimitImpl();
// gdi32.SetMiterLimitImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetOPMSigningKeyAndSequenceNumbers();
// gdi32.SetOPMSigningKeyAndSequenceNumbers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPaletteEntries();
// gdi32.SetPaletteEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPaletteEntriesStub();
// gdi32.SetPaletteEntriesStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPixel();
// gdi32.SetPixel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPixelFormat();
// gdi32.SetPixelFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPixelV();
// gdi32.SetPixelV = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPolyFillMode();
// gdi32.SetPolyFillMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPolyFillModeImpl();
// gdi32.SetPolyFillModeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetROP2();
// gdi32.SetROP2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetROP2Stub();
// gdi32.SetROP2Stub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetRectRgn();
// gdi32.SetRectRgn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetRelAbs();
// gdi32.SetRelAbs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetStretchBltMode();
// gdi32.SetStretchBltMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetStretchBltModeImpl();
// gdi32.SetStretchBltModeImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemPaletteUse();
// gdi32.SetSystemPaletteUse = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextAlign();
// gdi32.SetTextAlign = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextAlignImpl();
// gdi32.SetTextAlignImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextCharacterExtra();
// gdi32.SetTextCharacterExtra = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextColor();
// gdi32.SetTextColor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextColorImpl();
// gdi32.SetTextColorImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTextJustification();
// gdi32.SetTextJustification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetViewportExtEx();
// gdi32.SetViewportExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetViewportOrgEx();
// gdi32.SetViewportOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVirtualResolution();
// gdi32.SetVirtualResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWinMetaFileBits();
// gdi32.SetWinMetaFileBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowExtEx();
// gdi32.SetWindowExtEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWindowOrgEx();
// gdi32.SetWindowOrgEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWorldTransform();
// gdi32.SetWorldTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWorldTransformImpl();
// gdi32.SetWorldTransformImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartDocA();
// gdi32.StartDocA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartDocW();
// gdi32.StartDocW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartDocWImpl();
// gdi32.StartDocWImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartFormPage();
// gdi32.StartFormPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartPage();
// gdi32.StartPage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartPageImpl();
// gdi32.StartPageImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StretchBlt();
// gdi32.StretchBlt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StretchDIBits();
// gdi32.StretchDIBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StretchDIBitsImpl();
// gdi32.StretchDIBitsImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrokeAndFillPath();
// gdi32.StrokeAndFillPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrokePath();
// gdi32.StrokePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StrokePathImpl();
// gdi32.StrokePathImpl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwapBuffers();
// gdi32.SwapBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TextOutA();
// gdi32.TextOutA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TextOutAStub();
// gdi32.TextOutAStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TextOutW();
// gdi32.TextOutW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TranslateCharsetInfo();
// gdi32.TranslateCharsetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnloadNetworkFonts();
// gdi32.UnloadNetworkFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnloadUserModePrinterDriver();
// gdi32.UnloadUserModePrinterDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnrealizeObject();
// gdi32.UnrealizeObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnrealizeObjectStub();
// gdi32.UnrealizeObjectStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateColors();
// gdi32.UpdateColors = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateColorsStub();
// gdi32.UpdateColorsStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateICMRegKeyA();
// gdi32.UpdateICMRegKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateICMRegKeyW();
// gdi32.UpdateICMRegKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UspAllocCache();
// gdi32.UspAllocCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UspAllocTemp();
// gdi32.UspAllocTemp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UspFreeMem();
// gdi32.UspFreeMem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WidenPath();
// gdi32.WidenPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XFORMOBJ_bApplyXform();
// gdi32.XFORMOBJ_bApplyXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XFORMOBJ_iGetXform();
// gdi32.XFORMOBJ_iGetXform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XLATEOBJ_cGetPalette();
// gdi32.XLATEOBJ_cGetPalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XLATEOBJ_hGetColorTransform();
// gdi32.XLATEOBJ_hGetColorTransform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XLATEOBJ_iXlate();
// gdi32.XLATEOBJ_iXlate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall XLATEOBJ_piVector();
// gdi32.XLATEOBJ_piVector = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall bCreateDCW();
// gdi32.bCreateDCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall bDeleteLDC();
// gdi32.bDeleteLDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall bInitSystemAndFontsDirectoriesW();
// gdi32.bInitSystemAndFontsDirectoriesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall bMakePathNameW();
// gdi32.bMakePathNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall cGetTTFFromFOT();
// gdi32.cGetTTFFromFOT = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall fpClosePrinter();
// gdi32.fpClosePrinter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ftsWordBreak();
// gdi32.ftsWordBreak = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall gMaxGdiHandleCount();
// gdi32.gMaxGdiHandleCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall gW32PID();
// gdi32.gW32PID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall gdiPlaySpoolStream();
// gdi32.gdiPlaySpoolStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ghICM();
// gdi32.ghICM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall hGetPEBHandle();
// gdi32.hGetPEBHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall hdcCreateDCW();
// gdi32.hdcCreateDCW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall pGdiDevCaps();
// gdi32.pGdiDevCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall pGdiSharedHandleTable();
// gdi32.pGdiSharedHandleTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall pGdiSharedMemory();
// gdi32.pGdiSharedMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall pldcGet();
// gdi32.pldcGet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall plinkGet();
// gdi32.plinkGet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall semDxTrimNotification();
// gdi32.semDxTrimNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vDeleteLOCALFONT();
// gdi32.vDeleteLOCALFONT = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vFreeUFIHashTable();
// gdi32.vFreeUFIHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vSetPldc();
// gdi32.vSetPldc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];


// exports
module.exports = gdi32;