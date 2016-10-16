// javascript ffi interface for dbghelp
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var dbghelp = ffi.Library( 'dbghelp.dll' ,{} );

// int __stdcall DbgHelpCreateUserDump();
// dbghelp.DbgHelpCreateUserDump = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgHelpCreateUserDumpW();
// dbghelp.DbgHelpCreateUserDumpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDirTree();
// dbghelp.EnumDirTree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDirTreeW();
// dbghelp.EnumDirTreeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLoadedModules();
// dbghelp.EnumerateLoadedModules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLoadedModules64();
// dbghelp.EnumerateLoadedModules64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLoadedModulesEx();
// dbghelp.EnumerateLoadedModulesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLoadedModulesExW();
// dbghelp.EnumerateLoadedModulesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLoadedModulesW64();
// dbghelp.EnumerateLoadedModulesW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExtensionApiVersion();
// dbghelp.ExtensionApiVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindDebugInfoFile();
// dbghelp.FindDebugInfoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindDebugInfoFileEx();
// dbghelp.FindDebugInfoFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindDebugInfoFileExW();
// dbghelp.FindDebugInfoFileExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindExecutableImage();
// dbghelp.FindExecutableImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindExecutableImageEx();
// dbghelp.FindExecutableImageEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindExecutableImageExW();
// dbghelp.FindExecutableImageExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFileInPath();
// dbghelp.FindFileInPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFileInSearchPath();
// dbghelp.FindFileInSearchPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSymLoadError();
// dbghelp.GetSymLoadError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimestampForLoadedLibrary();
// dbghelp.GetTimestampForLoadedLibrary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImageDirectoryEntryToData();
// dbghelp.ImageDirectoryEntryToData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImageDirectoryEntryToDataEx();
// dbghelp.ImageDirectoryEntryToDataEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImageNtHeader();
// dbghelp.ImageNtHeader = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImageRvaToSection();
// dbghelp.ImageRvaToSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImageRvaToVa();
// dbghelp.ImageRvaToVa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImagehlpApiVersion();
// dbghelp.ImagehlpApiVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImagehlpApiVersionEx();
// dbghelp.ImagehlpApiVersionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MakeSureDirectoryPathExists();
// dbghelp.MakeSureDirectoryPathExists = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MiniDumpReadDumpStream();
// dbghelp.MiniDumpReadDumpStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MiniDumpWriteDump();
// dbghelp.MiniDumpWriteDump = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// dbghelp.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapAddPeImageSections();
// dbghelp.RangeMapAddPeImageSections = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapCreate();
// dbghelp.RangeMapCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapFree();
// dbghelp.RangeMapFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapRead();
// dbghelp.RangeMapRead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapRemove();
// dbghelp.RangeMapRemove = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RangeMapWrite();
// dbghelp.RangeMapWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveInvalidModuleList();
// dbghelp.RemoveInvalidModuleList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReportSymbolLoadSummary();
// dbghelp.ReportSymbolLoadSummary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SearchTreeForFile();
// dbghelp.SearchTreeForFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SearchTreeForFileW();
// dbghelp.SearchTreeForFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCheckUserInterruptShared();
// dbghelp.SetCheckUserInterruptShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSymLoadError();
// dbghelp.SetSymLoadError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StackWalk();
// dbghelp.StackWalk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StackWalk64();
// dbghelp.StackWalk64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StackWalkEx();
// dbghelp.StackWalkEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddSourceStream();
// dbghelp.SymAddSourceStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddSourceStreamA();
// dbghelp.SymAddSourceStreamA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddSourceStreamW();
// dbghelp.SymAddSourceStreamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddSymbol();
// dbghelp.SymAddSymbol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddSymbolW();
// dbghelp.SymAddSymbolW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymAddrIncludeInlineTrace();
// dbghelp.SymAddrIncludeInlineTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymCleanup();
// dbghelp.SymCleanup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymCompareInlineTrace();
// dbghelp.SymCompareInlineTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymDeleteSymbol();
// dbghelp.SymDeleteSymbol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymDeleteSymbolW();
// dbghelp.SymDeleteSymbolW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumLines();
// dbghelp.SymEnumLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumLinesW();
// dbghelp.SymEnumLinesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumProcesses();
// dbghelp.SymEnumProcesses = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSourceFileTokens();
// dbghelp.SymEnumSourceFileTokens = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSourceFiles();
// dbghelp.SymEnumSourceFiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSourceFilesW();
// dbghelp.SymEnumSourceFilesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSourceLines();
// dbghelp.SymEnumSourceLines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSourceLinesW();
// dbghelp.SymEnumSourceLinesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSym();
// dbghelp.SymEnumSym = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbols();
// dbghelp.SymEnumSymbols = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbolsEx();
// dbghelp.SymEnumSymbolsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbolsExW();
// dbghelp.SymEnumSymbolsExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbolsForAddr();
// dbghelp.SymEnumSymbolsForAddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbolsForAddrW();
// dbghelp.SymEnumSymbolsForAddrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumSymbolsW();
// dbghelp.SymEnumSymbolsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumTypes();
// dbghelp.SymEnumTypes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumTypesByName();
// dbghelp.SymEnumTypesByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumTypesByNameW();
// dbghelp.SymEnumTypesByNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumTypesW();
// dbghelp.SymEnumTypesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateModules();
// dbghelp.SymEnumerateModules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateModules64();
// dbghelp.SymEnumerateModules64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateModulesW64();
// dbghelp.SymEnumerateModulesW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateSymbols();
// dbghelp.SymEnumerateSymbols = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateSymbols64();
// dbghelp.SymEnumerateSymbols64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateSymbolsW();
// dbghelp.SymEnumerateSymbolsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymEnumerateSymbolsW64();
// dbghelp.SymEnumerateSymbolsW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindDebugInfoFile();
// dbghelp.SymFindDebugInfoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindDebugInfoFileW();
// dbghelp.SymFindDebugInfoFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindExecutableImage();
// dbghelp.SymFindExecutableImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindExecutableImageW();
// dbghelp.SymFindExecutableImageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindFileInPath();
// dbghelp.SymFindFileInPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFindFileInPathW();
// dbghelp.SymFindFileInPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFreeDiaString();
// dbghelp.SymFreeDiaString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromAddr();
// dbghelp.SymFromAddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromAddrW();
// dbghelp.SymFromAddrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromIndex();
// dbghelp.SymFromIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromIndexW();
// dbghelp.SymFromIndexW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromInlineContext();
// dbghelp.SymFromInlineContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromInlineContextW();
// dbghelp.SymFromInlineContextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromName();
// dbghelp.SymFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromNameW();
// dbghelp.SymFromNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromToken();
// dbghelp.SymFromToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFromTokenW();
// dbghelp.SymFromTokenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFunctionTableAccess();
// dbghelp.SymFunctionTableAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFunctionTableAccess64();
// dbghelp.SymFunctionTableAccess64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymFunctionTableAccess64AccessRoutines();
// dbghelp.SymFunctionTableAccess64AccessRoutines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetDiaSession();
// dbghelp.SymGetDiaSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetFileLineOffsets64();
// dbghelp.SymGetFileLineOffsets64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetHomeDirectory();
// dbghelp.SymGetHomeDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetHomeDirectoryW();
// dbghelp.SymGetHomeDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromAddr();
// dbghelp.SymGetLineFromAddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromAddr64();
// dbghelp.SymGetLineFromAddr64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromAddrEx();
// dbghelp.SymGetLineFromAddrEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromAddrW64();
// dbghelp.SymGetLineFromAddrW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromInlineContext();
// dbghelp.SymGetLineFromInlineContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromInlineContextW();
// dbghelp.SymGetLineFromInlineContextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromName();
// dbghelp.SymGetLineFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromName64();
// dbghelp.SymGetLineFromName64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromNameEx();
// dbghelp.SymGetLineFromNameEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineFromNameW64();
// dbghelp.SymGetLineFromNameW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineNext();
// dbghelp.SymGetLineNext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineNext64();
// dbghelp.SymGetLineNext64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineNextEx();
// dbghelp.SymGetLineNextEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLineNextW64();
// dbghelp.SymGetLineNextW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLinePrev();
// dbghelp.SymGetLinePrev = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLinePrev64();
// dbghelp.SymGetLinePrev64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLinePrevEx();
// dbghelp.SymGetLinePrevEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetLinePrevW64();
// dbghelp.SymGetLinePrevW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleBase();
// dbghelp.SymGetModuleBase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleBase64();
// dbghelp.SymGetModuleBase64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleInfo();
// dbghelp.SymGetModuleInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleInfo64();
// dbghelp.SymGetModuleInfo64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleInfoW();
// dbghelp.SymGetModuleInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetModuleInfoW64();
// dbghelp.SymGetModuleInfoW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetOmapBlockBase();
// dbghelp.SymGetOmapBlockBase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetOmaps();
// dbghelp.SymGetOmaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetOptions();
// dbghelp.SymGetOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetScope();
// dbghelp.SymGetScope = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetScopeW();
// dbghelp.SymGetScopeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSearchPath();
// dbghelp.SymGetSearchPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSearchPathW();
// dbghelp.SymGetSearchPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFile();
// dbghelp.SymGetSourceFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFileFromToken();
// dbghelp.SymGetSourceFileFromToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFileFromTokenW();
// dbghelp.SymGetSourceFileFromTokenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFileToken();
// dbghelp.SymGetSourceFileToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFileTokenW();
// dbghelp.SymGetSourceFileTokenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceFileW();
// dbghelp.SymGetSourceFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceVarFromToken();
// dbghelp.SymGetSourceVarFromToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSourceVarFromTokenW();
// dbghelp.SymGetSourceVarFromTokenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymFromAddr();
// dbghelp.SymGetSymFromAddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymFromAddr64();
// dbghelp.SymGetSymFromAddr64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymFromName();
// dbghelp.SymGetSymFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymFromName64();
// dbghelp.SymGetSymFromName64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymNext();
// dbghelp.SymGetSymNext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymNext64();
// dbghelp.SymGetSymNext64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymPrev();
// dbghelp.SymGetSymPrev = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymPrev64();
// dbghelp.SymGetSymPrev64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymbolFile();
// dbghelp.SymGetSymbolFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetSymbolFileW();
// dbghelp.SymGetSymbolFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetTypeFromName();
// dbghelp.SymGetTypeFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetTypeFromNameW();
// dbghelp.SymGetTypeFromNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetTypeInfo();
// dbghelp.SymGetTypeInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetTypeInfoEx();
// dbghelp.SymGetTypeInfoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymGetUnwindInfo();
// dbghelp.SymGetUnwindInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymInitialize();
// dbghelp.SymInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymInitializeW();
// dbghelp.SymInitializeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymLoadModule();
// dbghelp.SymLoadModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymLoadModule64();
// dbghelp.SymLoadModule64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymLoadModuleEx();
// dbghelp.SymLoadModuleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymLoadModuleExW();
// dbghelp.SymLoadModuleExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymMatchFileName();
// dbghelp.SymMatchFileName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymMatchFileNameW();
// dbghelp.SymMatchFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymMatchString();
// dbghelp.SymMatchString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymMatchStringA();
// dbghelp.SymMatchStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymMatchStringW();
// dbghelp.SymMatchStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymNext();
// dbghelp.SymNext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymNextW();
// dbghelp.SymNextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymPrev();
// dbghelp.SymPrev = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymPrevW();
// dbghelp.SymPrevW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymQueryInlineTrace();
// dbghelp.SymQueryInlineTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRefreshModuleList();
// dbghelp.SymRefreshModuleList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRegisterCallback();
// dbghelp.SymRegisterCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRegisterCallback64();
// dbghelp.SymRegisterCallback64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRegisterCallbackW64();
// dbghelp.SymRegisterCallbackW64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRegisterFunctionEntryCallback();
// dbghelp.SymRegisterFunctionEntryCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymRegisterFunctionEntryCallback64();
// dbghelp.SymRegisterFunctionEntryCallback64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSearch();
// dbghelp.SymSearch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSearchW();
// dbghelp.SymSearchW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetContext();
// dbghelp.SymSetContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetHomeDirectory();
// dbghelp.SymSetHomeDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetHomeDirectoryW();
// dbghelp.SymSetHomeDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetOptions();
// dbghelp.SymSetOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetParentWindow();
// dbghelp.SymSetParentWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetScopeFromAddr();
// dbghelp.SymSetScopeFromAddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetScopeFromIndex();
// dbghelp.SymSetScopeFromIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetScopeFromInlineContext();
// dbghelp.SymSetScopeFromInlineContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetSearchPath();
// dbghelp.SymSetSearchPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSetSearchPathW();
// dbghelp.SymSetSearchPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvDeltaName();
// dbghelp.SymSrvDeltaName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvDeltaNameW();
// dbghelp.SymSrvDeltaNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexInfo();
// dbghelp.SymSrvGetFileIndexInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexInfoW();
// dbghelp.SymSrvGetFileIndexInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexString();
// dbghelp.SymSrvGetFileIndexString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexStringW();
// dbghelp.SymSrvGetFileIndexStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexes();
// dbghelp.SymSrvGetFileIndexes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetFileIndexesW();
// dbghelp.SymSrvGetFileIndexesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetSupplement();
// dbghelp.SymSrvGetSupplement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvGetSupplementW();
// dbghelp.SymSrvGetSupplementW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvIsStore();
// dbghelp.SymSrvIsStore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvIsStoreW();
// dbghelp.SymSrvIsStoreW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvStoreFile();
// dbghelp.SymSrvStoreFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvStoreFileW();
// dbghelp.SymSrvStoreFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvStoreSupplement();
// dbghelp.SymSrvStoreSupplement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymSrvStoreSupplementW();
// dbghelp.SymSrvStoreSupplementW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymUnDName();
// dbghelp.SymUnDName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymUnDName64();
// dbghelp.SymUnDName64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymUnloadModule();
// dbghelp.SymUnloadModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SymUnloadModule64();
// dbghelp.SymUnloadModule64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnDecorateSymbolName();
// dbghelp.UnDecorateSymbolName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnDecorateSymbolNameW();
// dbghelp.UnDecorateSymbolNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinDbgExtensionDllInit();
// dbghelp.WinDbgExtensionDllInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _EFN_DumpImage();
// dbghelp._EFN_DumpImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall block();
// dbghelp.block = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall chksym();
// dbghelp.chksym = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall dbghelp();
// dbghelp.dbghelp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall dh();
// dbghelp.dh = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall fptr();
// dbghelp.fptr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall homedir();
// dbghelp.homedir = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall inlinedbg();
// dbghelp.inlinedbg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall itoldyouso();
// dbghelp.itoldyouso = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lmi();
// dbghelp.lmi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lminfo();
// dbghelp.lminfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall omap();
// dbghelp.omap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall optdbgdump();
// dbghelp.optdbgdump = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall optdbgdumpaddr();
// dbghelp.optdbgdumpaddr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall srcfiles();
// dbghelp.srcfiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall stack_force_ebp();
// dbghelp.stack_force_ebp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall stackdbg();
// dbghelp.stackdbg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sym();
// dbghelp.sym = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall symsrv();
// dbghelp.symsrv = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vc7fpo();
// dbghelp.vc7fpo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// exports
module.exports = dbghelp;