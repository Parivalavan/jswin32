// javascript ffi interface for dbghelp
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');


// init
var dbghelp = ffi.Library( "dbghelp.dll" ,
{
	// int __stdcall DbgHelpCreateUserDump();
	// "DbgHelpCreateUserDump" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgHelpCreateUserDumpW();
	// "DbgHelpCreateUserDumpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDirTree();
	// "EnumDirTree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDirTreeW();
	// "EnumDirTreeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLoadedModules();
	// "EnumerateLoadedModules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLoadedModules64();
	// "EnumerateLoadedModules64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLoadedModulesEx();
	// "EnumerateLoadedModulesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLoadedModulesExW();
	// "EnumerateLoadedModulesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLoadedModulesW64();
	// "EnumerateLoadedModulesW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExtensionApiVersion();
	// "ExtensionApiVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindDebugInfoFile();
	// "FindDebugInfoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindDebugInfoFileEx();
	// "FindDebugInfoFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindDebugInfoFileExW();
	// "FindDebugInfoFileExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindExecutableImage();
	// "FindExecutableImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindExecutableImageEx();
	// "FindExecutableImageEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindExecutableImageExW();
	// "FindExecutableImageExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFileInPath();
	// "FindFileInPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFileInSearchPath();
	// "FindFileInSearchPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSymLoadError();
	// "GetSymLoadError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimestampForLoadedLibrary();
	// "GetTimestampForLoadedLibrary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImageDirectoryEntryToData();
	// "ImageDirectoryEntryToData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImageDirectoryEntryToDataEx();
	// "ImageDirectoryEntryToDataEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImageNtHeader();
	// "ImageNtHeader" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImageRvaToSection();
	// "ImageRvaToSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImageRvaToVa();
	// "ImageRvaToVa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImagehlpApiVersion();
	// "ImagehlpApiVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImagehlpApiVersionEx();
	// "ImagehlpApiVersionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MakeSureDirectoryPathExists();
	// "MakeSureDirectoryPathExists" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MiniDumpReadDumpStream();
	// "MiniDumpReadDumpStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MiniDumpWriteDump();
	// "MiniDumpWriteDump" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapAddPeImageSections();
	// "RangeMapAddPeImageSections" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapCreate();
	// "RangeMapCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapFree();
	// "RangeMapFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapRead();
	// "RangeMapRead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapRemove();
	// "RangeMapRemove" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RangeMapWrite();
	// "RangeMapWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveInvalidModuleList();
	// "RemoveInvalidModuleList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReportSymbolLoadSummary();
	// "ReportSymbolLoadSummary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SearchTreeForFile();
	// "SearchTreeForFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SearchTreeForFileW();
	// "SearchTreeForFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCheckUserInterruptShared();
	// "SetCheckUserInterruptShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSymLoadError();
	// "SetSymLoadError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StackWalk();
	// "StackWalk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StackWalk64();
	// "StackWalk64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StackWalkEx();
	// "StackWalkEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddSourceStream();
	// "SymAddSourceStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddSourceStreamA();
	// "SymAddSourceStreamA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddSourceStreamW();
	// "SymAddSourceStreamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddSymbol();
	// "SymAddSymbol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddSymbolW();
	// "SymAddSymbolW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymAddrIncludeInlineTrace();
	// "SymAddrIncludeInlineTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymCleanup();
	// "SymCleanup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymCompareInlineTrace();
	// "SymCompareInlineTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymDeleteSymbol();
	// "SymDeleteSymbol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymDeleteSymbolW();
	// "SymDeleteSymbolW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumLines();
	// "SymEnumLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumLinesW();
	// "SymEnumLinesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumProcesses();
	// "SymEnumProcesses" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSourceFileTokens();
	// "SymEnumSourceFileTokens" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSourceFiles();
	// "SymEnumSourceFiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSourceFilesW();
	// "SymEnumSourceFilesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSourceLines();
	// "SymEnumSourceLines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSourceLinesW();
	// "SymEnumSourceLinesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSym();
	// "SymEnumSym" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbols();
	// "SymEnumSymbols" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbolsEx();
	// "SymEnumSymbolsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbolsExW();
	// "SymEnumSymbolsExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbolsForAddr();
	// "SymEnumSymbolsForAddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbolsForAddrW();
	// "SymEnumSymbolsForAddrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumSymbolsW();
	// "SymEnumSymbolsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumTypes();
	// "SymEnumTypes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumTypesByName();
	// "SymEnumTypesByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumTypesByNameW();
	// "SymEnumTypesByNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumTypesW();
	// "SymEnumTypesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateModules();
	// "SymEnumerateModules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateModules64();
	// "SymEnumerateModules64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateModulesW64();
	// "SymEnumerateModulesW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateSymbols();
	// "SymEnumerateSymbols" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateSymbols64();
	// "SymEnumerateSymbols64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateSymbolsW();
	// "SymEnumerateSymbolsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymEnumerateSymbolsW64();
	// "SymEnumerateSymbolsW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindDebugInfoFile();
	// "SymFindDebugInfoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindDebugInfoFileW();
	// "SymFindDebugInfoFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindExecutableImage();
	// "SymFindExecutableImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindExecutableImageW();
	// "SymFindExecutableImageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindFileInPath();
	// "SymFindFileInPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFindFileInPathW();
	// "SymFindFileInPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFreeDiaString();
	// "SymFreeDiaString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromAddr();
	// "SymFromAddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromAddrW();
	// "SymFromAddrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromIndex();
	// "SymFromIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromIndexW();
	// "SymFromIndexW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromInlineContext();
	// "SymFromInlineContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromInlineContextW();
	// "SymFromInlineContextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromName();
	// "SymFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromNameW();
	// "SymFromNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromToken();
	// "SymFromToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFromTokenW();
	// "SymFromTokenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFunctionTableAccess();
	// "SymFunctionTableAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFunctionTableAccess64();
	// "SymFunctionTableAccess64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymFunctionTableAccess64AccessRoutines();
	// "SymFunctionTableAccess64AccessRoutines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetDiaSession();
	// "SymGetDiaSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetFileLineOffsets64();
	// "SymGetFileLineOffsets64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetHomeDirectory();
	// "SymGetHomeDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetHomeDirectoryW();
	// "SymGetHomeDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromAddr();
	// "SymGetLineFromAddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromAddr64();
	// "SymGetLineFromAddr64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromAddrEx();
	// "SymGetLineFromAddrEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromAddrW64();
	// "SymGetLineFromAddrW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromInlineContext();
	// "SymGetLineFromInlineContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromInlineContextW();
	// "SymGetLineFromInlineContextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromName();
	// "SymGetLineFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromName64();
	// "SymGetLineFromName64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromNameEx();
	// "SymGetLineFromNameEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineFromNameW64();
	// "SymGetLineFromNameW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineNext();
	// "SymGetLineNext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineNext64();
	// "SymGetLineNext64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineNextEx();
	// "SymGetLineNextEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLineNextW64();
	// "SymGetLineNextW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLinePrev();
	// "SymGetLinePrev" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLinePrev64();
	// "SymGetLinePrev64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLinePrevEx();
	// "SymGetLinePrevEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetLinePrevW64();
	// "SymGetLinePrevW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleBase();
	// "SymGetModuleBase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleBase64();
	// "SymGetModuleBase64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleInfo();
	// "SymGetModuleInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleInfo64();
	// "SymGetModuleInfo64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleInfoW();
	// "SymGetModuleInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetModuleInfoW64();
	// "SymGetModuleInfoW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetOmapBlockBase();
	// "SymGetOmapBlockBase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetOmaps();
	// "SymGetOmaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetOptions();
	// "SymGetOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetScope();
	// "SymGetScope" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetScopeW();
	// "SymGetScopeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSearchPath();
	// "SymGetSearchPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSearchPathW();
	// "SymGetSearchPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFile();
	// "SymGetSourceFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFileFromToken();
	// "SymGetSourceFileFromToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFileFromTokenW();
	// "SymGetSourceFileFromTokenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFileToken();
	// "SymGetSourceFileToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFileTokenW();
	// "SymGetSourceFileTokenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceFileW();
	// "SymGetSourceFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceVarFromToken();
	// "SymGetSourceVarFromToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSourceVarFromTokenW();
	// "SymGetSourceVarFromTokenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymFromAddr();
	// "SymGetSymFromAddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymFromAddr64();
	// "SymGetSymFromAddr64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymFromName();
	// "SymGetSymFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymFromName64();
	// "SymGetSymFromName64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymNext();
	// "SymGetSymNext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymNext64();
	// "SymGetSymNext64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymPrev();
	// "SymGetSymPrev" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymPrev64();
	// "SymGetSymPrev64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymbolFile();
	// "SymGetSymbolFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetSymbolFileW();
	// "SymGetSymbolFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetTypeFromName();
	// "SymGetTypeFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetTypeFromNameW();
	// "SymGetTypeFromNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetTypeInfo();
	// "SymGetTypeInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetTypeInfoEx();
	// "SymGetTypeInfoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymGetUnwindInfo();
	// "SymGetUnwindInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymInitialize();
	// "SymInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymInitializeW();
	// "SymInitializeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymLoadModule();
	// "SymLoadModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymLoadModule64();
	// "SymLoadModule64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymLoadModuleEx();
	// "SymLoadModuleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymLoadModuleExW();
	// "SymLoadModuleExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymMatchFileName();
	// "SymMatchFileName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymMatchFileNameW();
	// "SymMatchFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymMatchString();
	// "SymMatchString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymMatchStringA();
	// "SymMatchStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymMatchStringW();
	// "SymMatchStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymNext();
	// "SymNext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymNextW();
	// "SymNextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymPrev();
	// "SymPrev" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymPrevW();
	// "SymPrevW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymQueryInlineTrace();
	// "SymQueryInlineTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRefreshModuleList();
	// "SymRefreshModuleList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRegisterCallback();
	// "SymRegisterCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRegisterCallback64();
	// "SymRegisterCallback64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRegisterCallbackW64();
	// "SymRegisterCallbackW64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRegisterFunctionEntryCallback();
	// "SymRegisterFunctionEntryCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymRegisterFunctionEntryCallback64();
	// "SymRegisterFunctionEntryCallback64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSearch();
	// "SymSearch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSearchW();
	// "SymSearchW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetContext();
	// "SymSetContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetHomeDirectory();
	// "SymSetHomeDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetHomeDirectoryW();
	// "SymSetHomeDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetOptions();
	// "SymSetOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetParentWindow();
	// "SymSetParentWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetScopeFromAddr();
	// "SymSetScopeFromAddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetScopeFromIndex();
	// "SymSetScopeFromIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetScopeFromInlineContext();
	// "SymSetScopeFromInlineContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetSearchPath();
	// "SymSetSearchPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSetSearchPathW();
	// "SymSetSearchPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvDeltaName();
	// "SymSrvDeltaName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvDeltaNameW();
	// "SymSrvDeltaNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexInfo();
	// "SymSrvGetFileIndexInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexInfoW();
	// "SymSrvGetFileIndexInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexString();
	// "SymSrvGetFileIndexString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexStringW();
	// "SymSrvGetFileIndexStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexes();
	// "SymSrvGetFileIndexes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetFileIndexesW();
	// "SymSrvGetFileIndexesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetSupplement();
	// "SymSrvGetSupplement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvGetSupplementW();
	// "SymSrvGetSupplementW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvIsStore();
	// "SymSrvIsStore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvIsStoreW();
	// "SymSrvIsStoreW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvStoreFile();
	// "SymSrvStoreFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvStoreFileW();
	// "SymSrvStoreFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvStoreSupplement();
	// "SymSrvStoreSupplement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymSrvStoreSupplementW();
	// "SymSrvStoreSupplementW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymUnDName();
	// "SymUnDName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymUnDName64();
	// "SymUnDName64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymUnloadModule();
	// "SymUnloadModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SymUnloadModule64();
	// "SymUnloadModule64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnDecorateSymbolName();
	// "UnDecorateSymbolName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnDecorateSymbolNameW();
	// "UnDecorateSymbolNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinDbgExtensionDllInit();
	// "WinDbgExtensionDllInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _EFN_DumpImage();
	// "_EFN_DumpImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall block();
	// "block" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall chksym();
	// "chksym" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall dbghelp();
	// "dbghelp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall dh();
	// "dh" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall fptr();
	// "fptr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall homedir();
	// "homedir" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall inlinedbg();
	// "inlinedbg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall itoldyouso();
	// "itoldyouso" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lmi();
	// "lmi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lminfo();
	// "lminfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall omap();
	// "omap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall optdbgdump();
	// "optdbgdump" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall optdbgdumpaddr();
	// "optdbgdumpaddr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall srcfiles();
	// "srcfiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall stack_force_ebp();
	// "stack_force_ebp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall stackdbg();
	// "stackdbg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sym();
	// "sym" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall symsrv();
	// "symsrv" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vc7fpo();
	// "vc7fpo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = dbghelp;


// exports
module.exports = dbghelp;