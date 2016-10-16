// javascript ffi interface for ntdll
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var ntdll = ffi.Library( 'ntdll.dll' ,{} );

// 
// int __stdcall A_SHAFinal();
// ntdll.A_SHAFinal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall A_SHAInit();
// ntdll.A_SHAInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall A_SHAUpdate();
// ntdll.A_SHAUpdate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcAdjustCompletionListConcurrencyCount();
// ntdll.AlpcAdjustCompletionListConcurrencyCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcFreeCompletionListMessage();
// ntdll.AlpcFreeCompletionListMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetCompletionListLastMessageInformation();
// ntdll.AlpcGetCompletionListLastMessageInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetCompletionListMessageAttributes();
// ntdll.AlpcGetCompletionListMessageAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetHeaderSize();
// ntdll.AlpcGetHeaderSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetMessageAttribute();
// ntdll.AlpcGetMessageAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetMessageFromCompletionList();
// ntdll.AlpcGetMessageFromCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcGetOutstandingCompletionListMessageCount();
// ntdll.AlpcGetOutstandingCompletionListMessageCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcInitializeMessageAttribute();
// ntdll.AlpcInitializeMessageAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcMaxAllowedMessageLength();
// ntdll.AlpcMaxAllowedMessageLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcRegisterCompletionList();
// ntdll.AlpcRegisterCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcRegisterCompletionListWorkerThread();
// ntdll.AlpcRegisterCompletionListWorkerThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcRundownCompletionList();
// ntdll.AlpcRundownCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcUnregisterCompletionList();
// ntdll.AlpcUnregisterCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AlpcUnregisterCompletionListWorkerThread();
// ntdll.AlpcUnregisterCompletionListWorkerThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ApiSetQueryApiSetPresence();
// ntdll.ApiSetQueryApiSetPresence = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrAllocateCaptureBuffer();
// ntdll.CsrAllocateCaptureBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrAllocateMessagePointer();
// ntdll.CsrAllocateMessagePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrCaptureMessageBuffer();
// ntdll.CsrCaptureMessageBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrCaptureMessageMultiUnicodeStringsInPlace();
// ntdll.CsrCaptureMessageMultiUnicodeStringsInPlace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrCaptureMessageString();
// ntdll.CsrCaptureMessageString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrCaptureTimeout();
// ntdll.CsrCaptureTimeout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrClientCallServer();
// ntdll.CsrClientCallServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrClientConnectToServer();
// ntdll.CsrClientConnectToServer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrFreeCaptureBuffer();
// ntdll.CsrFreeCaptureBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrGetProcessId();
// ntdll.CsrGetProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrIdentifyAlertableThread();
// ntdll.CsrIdentifyAlertableThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrSetPriorityClass();
// ntdll.CsrSetPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CsrVerifyRegion();
// ntdll.CsrVerifyRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgBreakPoint();
// ntdll.DbgBreakPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgPrint();
// ntdll.DbgPrint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgPrintEx();
// ntdll.DbgPrintEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgPrintReturnControlC();
// ntdll.DbgPrintReturnControlC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgPrompt();
// ntdll.DbgPrompt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgQueryDebugFilterState();
// ntdll.DbgQueryDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgSetDebugFilterState();
// ntdll.DbgSetDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiConnectToDbg();
// ntdll.DbgUiConnectToDbg = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiContinue();
// ntdll.DbgUiContinue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiConvertStateChangeStructure();
// ntdll.DbgUiConvertStateChangeStructure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiConvertStateChangeStructureEx();
// ntdll.DbgUiConvertStateChangeStructureEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiDebugActiveProcess();
// ntdll.DbgUiDebugActiveProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiGetThreadDebugObject();
// ntdll.DbgUiGetThreadDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiIssueRemoteBreakin();
// ntdll.DbgUiIssueRemoteBreakin = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiRemoteBreakin();
// ntdll.DbgUiRemoteBreakin = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiSetThreadDebugObject();
// ntdll.DbgUiSetThreadDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiStopDebugging();
// ntdll.DbgUiStopDebugging = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUiWaitStateChange();
// ntdll.DbgUiWaitStateChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DbgUserBreakPoint();
// ntdll.DbgUserBreakPoint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwCreateTraceInstanceId();
// ntdll.EtwCreateTraceInstanceId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwDeliverDataBlock();
// ntdll.EtwDeliverDataBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEnumerateProcessRegGuids();
// ntdll.EtwEnumerateProcessRegGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventActivityIdControl();
// ntdll.EtwEventActivityIdControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventEnabled();
// ntdll.EtwEventEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventProviderEnabled();
// ntdll.EtwEventProviderEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventRegister();
// ntdll.EtwEventRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventSetInformation();
// ntdll.EtwEventSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventUnregister();
// ntdll.EtwEventUnregister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWrite();
// ntdll.EtwEventWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteEndScenario();
// ntdll.EtwEventWriteEndScenario = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteEx();
// ntdll.EtwEventWriteEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteFull();
// ntdll.EtwEventWriteFull = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteNoRegistration();
// ntdll.EtwEventWriteNoRegistration = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteStartScenario();
// ntdll.EtwEventWriteStartScenario = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteString();
// ntdll.EtwEventWriteString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwEventWriteTransfer();
// ntdll.EtwEventWriteTransfer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwGetTraceEnableFlags();
// ntdll.EtwGetTraceEnableFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwGetTraceEnableLevel();
// ntdll.EtwGetTraceEnableLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwGetTraceLoggerHandle();
// ntdll.EtwGetTraceLoggerHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwLogTraceEvent();
// ntdll.EtwLogTraceEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwNotificationRegister();
// ntdll.EtwNotificationRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwNotificationUnregister();
// ntdll.EtwNotificationUnregister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwProcessPrivateLoggerRequest();
// ntdll.EtwProcessPrivateLoggerRequest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwRegisterSecurityProvider();
// ntdll.EtwRegisterSecurityProvider = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwRegisterTraceGuidsA();
// ntdll.EtwRegisterTraceGuidsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwRegisterTraceGuidsW();
// ntdll.EtwRegisterTraceGuidsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwReplyNotification();
// ntdll.EtwReplyNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwSendNotification();
// ntdll.EtwSendNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwSetMark();
// ntdll.EtwSetMark = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwTraceEventInstance();
// ntdll.EtwTraceEventInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwTraceMessage();
// ntdll.EtwTraceMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwTraceMessageVa();
// ntdll.EtwTraceMessageVa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwUnregisterTraceGuids();
// ntdll.EtwUnregisterTraceGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwWriteUMSecurityEvent();
// ntdll.EtwWriteUMSecurityEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwpCreateEtwThread();
// ntdll.EtwpCreateEtwThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EtwpGetCpuSpeed();
// ntdll.EtwpGetCpuSpeed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EvtIntReportAuthzEventAndSourceAsync();
// ntdll.EvtIntReportAuthzEventAndSourceAsync = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EvtIntReportEventAndSourceAsync();
// ntdll.EvtIntReportEventAndSourceAsync = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpInterlockedPopEntrySListEnd();
// ntdll.ExpInterlockedPopEntrySListEnd = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpInterlockedPopEntrySListFault();
// ntdll.ExpInterlockedPopEntrySListFault = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpInterlockedPopEntrySListResume();
// ntdll.ExpInterlockedPopEntrySListResume = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KiRaiseUserExceptionDispatcher();
// ntdll.KiRaiseUserExceptionDispatcher = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KiUserApcDispatcher();
// ntdll.KiUserApcDispatcher = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KiUserCallbackDispatcher();
// ntdll.KiUserCallbackDispatcher = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KiUserExceptionDispatcher();
// ntdll.KiUserExceptionDispatcher = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall KiUserInvertedFunctionTable();
// ntdll.KiUserInvertedFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrAccessResource();
// ntdll.LdrAccessResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrAddDllDirectory();
// ntdll.LdrAddDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrAddLoadAsDataTable();
// ntdll.LdrAddLoadAsDataTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrAddRefDll();
// ntdll.LdrAddRefDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrAppxHandleIntegrityFailure();
// ntdll.LdrAppxHandleIntegrityFailure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrDisableThreadCalloutsForDll();
// ntdll.LdrDisableThreadCalloutsForDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrEnumResources();
// ntdll.LdrEnumResources = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrEnumerateLoadedModules();
// ntdll.LdrEnumerateLoadedModules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFastFailInLoaderCallout();
// ntdll.LdrFastFailInLoaderCallout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFindEntryForAddress();
// ntdll.LdrFindEntryForAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFindResourceDirectory_U();
// ntdll.LdrFindResourceDirectory_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFindResourceEx_U();
// ntdll.LdrFindResourceEx_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFindResource_U();
// ntdll.LdrFindResource_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrFlushAlternateResourceModules();
// ntdll.LdrFlushAlternateResourceModules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllDirectory();
// ntdll.LdrGetDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllFullName();
// ntdll.LdrGetDllFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllHandle();
// ntdll.LdrGetDllHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllHandleByMapping();
// ntdll.LdrGetDllHandleByMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllHandleByName();
// ntdll.LdrGetDllHandleByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllHandleEx();
// ntdll.LdrGetDllHandleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetDllPath();
// ntdll.LdrGetDllPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetFailureData();
// ntdll.LdrGetFailureData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetFileNameFromLoadAsDataTable();
// ntdll.LdrGetFileNameFromLoadAsDataTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetKnownDllSectionHandle();
// ntdll.LdrGetKnownDllSectionHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetProcedureAddress();
// ntdll.LdrGetProcedureAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetProcedureAddressEx();
// ntdll.LdrGetProcedureAddressEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrGetProcedureAddressForCaller();
// ntdll.LdrGetProcedureAddressForCaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrInitShimEngineDynamic();
// ntdll.LdrInitShimEngineDynamic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrInitializeThunk();
// ntdll.LdrInitializeThunk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrLoadAlternateResourceModule();
// ntdll.LdrLoadAlternateResourceModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrLoadAlternateResourceModuleEx();
// ntdll.LdrLoadAlternateResourceModuleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrLoadDll();
// ntdll.LdrLoadDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrLockLoaderLock();
// ntdll.LdrLockLoaderLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrOpenImageFileOptionsKey();
// ntdll.LdrOpenImageFileOptionsKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrProcessInitializationComplete();
// ntdll.LdrProcessInitializationComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrProcessRelocationBlock();
// ntdll.LdrProcessRelocationBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrProcessRelocationBlockEx();
// ntdll.LdrProcessRelocationBlockEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryImageFileExecutionOptions();
// ntdll.LdrQueryImageFileExecutionOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryImageFileExecutionOptionsEx();
// ntdll.LdrQueryImageFileExecutionOptionsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryImageFileKeyOption();
// ntdll.LdrQueryImageFileKeyOption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryModuleServiceTags();
// ntdll.LdrQueryModuleServiceTags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryOptionalDelayLoadedAPI();
// ntdll.LdrQueryOptionalDelayLoadedAPI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrQueryProcessModuleInformation();
// ntdll.LdrQueryProcessModuleInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrRegisterDllNotification();
// ntdll.LdrRegisterDllNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrRemoveDllDirectory();
// ntdll.LdrRemoveDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrRemoveLoadAsDataTable();
// ntdll.LdrRemoveLoadAsDataTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResFindResource();
// ntdll.LdrResFindResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResFindResourceDirectory();
// ntdll.LdrResFindResourceDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResGetRCConfig();
// ntdll.LdrResGetRCConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResRelease();
// ntdll.LdrResRelease = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResSearchResource();
// ntdll.LdrResSearchResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResolveDelayLoadedAPI();
// ntdll.LdrResolveDelayLoadedAPI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrResolveDelayLoadsFromDll();
// ntdll.LdrResolveDelayLoadsFromDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrRscIsTypeExist();
// ntdll.LdrRscIsTypeExist = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetAppCompatDllRedirectionCallback();
// ntdll.LdrSetAppCompatDllRedirectionCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetDefaultDllDirectories();
// ntdll.LdrSetDefaultDllDirectories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetDllDirectory();
// ntdll.LdrSetDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetDllManifestProber();
// ntdll.LdrSetDllManifestProber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetImplicitPathOptions();
// ntdll.LdrSetImplicitPathOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSetMUICacheType();
// ntdll.LdrSetMUICacheType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrShutdownProcess();
// ntdll.LdrShutdownProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrShutdownThread();
// ntdll.LdrShutdownThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrStandardizeSystemPath();
// ntdll.LdrStandardizeSystemPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrSystemDllInitBlock();
// ntdll.LdrSystemDllInitBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrUnloadAlternateResourceModule();
// ntdll.LdrUnloadAlternateResourceModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrUnloadAlternateResourceModuleEx();
// ntdll.LdrUnloadAlternateResourceModuleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrUnloadDll();
// ntdll.LdrUnloadDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrUnlockLoaderLock();
// ntdll.LdrUnlockLoaderLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrUnregisterDllNotification();
// ntdll.LdrUnregisterDllNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrVerifyImageMatchesChecksum();
// ntdll.LdrVerifyImageMatchesChecksum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrVerifyImageMatchesChecksumEx();
// ntdll.LdrVerifyImageMatchesChecksumEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrpResGetMappingSize();
// ntdll.LdrpResGetMappingSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LdrpResGetResourceDirectory();
// ntdll.LdrpResGetResourceDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Final();
// ntdll.MD4Final = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Init();
// ntdll.MD4Init = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Update();
// ntdll.MD4Update = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Final();
// ntdll.MD5Final = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Init();
// ntdll.MD5Init = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Update();
// ntdll.MD5Update = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// ntdll.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsAnsiCodePage();
// ntdll.NlsAnsiCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsMbCodePageTag();
// ntdll.NlsMbCodePageTag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsMbOemCodePageTag();
// ntdll.NlsMbOemCodePageTag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAcceptConnectPort();
// ntdll.NtAcceptConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheck();
// ntdll.NtAccessCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckAndAuditAlarm();
// ntdll.NtAccessCheckAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckByType();
// ntdll.NtAccessCheckByType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckByTypeAndAuditAlarm();
// ntdll.NtAccessCheckByTypeAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckByTypeResultList();
// ntdll.NtAccessCheckByTypeResultList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckByTypeResultListAndAuditAlarm();
// ntdll.NtAccessCheckByTypeResultListAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAccessCheckByTypeResultListAndAuditAlarmByHandle();
// ntdll.NtAccessCheckByTypeResultListAndAuditAlarmByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAddAtom();
// ntdll.NtAddAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAddAtomEx();
// ntdll.NtAddAtomEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAddBootEntry();
// ntdll.NtAddBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAddDriverEntry();
// ntdll.NtAddDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAdjustGroupsToken();
// ntdll.NtAdjustGroupsToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAdjustPrivilegesToken();
// ntdll.NtAdjustPrivilegesToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAdjustTokenClaimsAndDeviceGroups();
// ntdll.NtAdjustTokenClaimsAndDeviceGroups = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlertResumeThread();
// ntdll.NtAlertResumeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlertThread();
// ntdll.NtAlertThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlertThreadByThreadId();
// ntdll.NtAlertThreadByThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAllocateLocallyUniqueId();
// ntdll.NtAllocateLocallyUniqueId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAllocateReserveObject();
// ntdll.NtAllocateReserveObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAllocateUserPhysicalPages();
// ntdll.NtAllocateUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAllocateUuids();
// ntdll.NtAllocateUuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAllocateVirtualMemory();
// ntdll.NtAllocateVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcAcceptConnectPort();
// ntdll.NtAlpcAcceptConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCancelMessage();
// ntdll.NtAlpcCancelMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcConnectPort();
// ntdll.NtAlpcConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcConnectPortEx();
// ntdll.NtAlpcConnectPortEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCreatePort();
// ntdll.NtAlpcCreatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCreatePortSection();
// ntdll.NtAlpcCreatePortSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCreateResourceReserve();
// ntdll.NtAlpcCreateResourceReserve = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCreateSectionView();
// ntdll.NtAlpcCreateSectionView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcCreateSecurityContext();
// ntdll.NtAlpcCreateSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcDeletePortSection();
// ntdll.NtAlpcDeletePortSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcDeleteResourceReserve();
// ntdll.NtAlpcDeleteResourceReserve = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcDeleteSectionView();
// ntdll.NtAlpcDeleteSectionView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcDeleteSecurityContext();
// ntdll.NtAlpcDeleteSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcDisconnectPort();
// ntdll.NtAlpcDisconnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcImpersonateClientContainerOfPort();
// ntdll.NtAlpcImpersonateClientContainerOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcImpersonateClientOfPort();
// ntdll.NtAlpcImpersonateClientOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcOpenSenderProcess();
// ntdll.NtAlpcOpenSenderProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcOpenSenderThread();
// ntdll.NtAlpcOpenSenderThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcQueryInformation();
// ntdll.NtAlpcQueryInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcQueryInformationMessage();
// ntdll.NtAlpcQueryInformationMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcRevokeSecurityContext();
// ntdll.NtAlpcRevokeSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcSendWaitReceivePort();
// ntdll.NtAlpcSendWaitReceivePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAlpcSetInformation();
// ntdll.NtAlpcSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtApphelpCacheControl();
// ntdll.NtApphelpCacheControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAreMappedFilesTheSame();
// ntdll.NtAreMappedFilesTheSame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAssignProcessToJobObject();
// ntdll.NtAssignProcessToJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtAssociateWaitCompletionPacket();
// ntdll.NtAssociateWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCallbackReturn();
// ntdll.NtCallbackReturn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelIoFile();
// ntdll.NtCancelIoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelIoFileEx();
// ntdll.NtCancelIoFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelSynchronousIoFile();
// ntdll.NtCancelSynchronousIoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelTimer();
// ntdll.NtCancelTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelTimer2();
// ntdll.NtCancelTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCancelWaitCompletionPacket();
// ntdll.NtCancelWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtClearEvent();
// ntdll.NtClearEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtClose();
// ntdll.NtClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCloseObjectAuditAlarm();
// ntdll.NtCloseObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCommitComplete();
// ntdll.NtCommitComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCommitEnlistment();
// ntdll.NtCommitEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCommitRegistryTransaction();
// ntdll.NtCommitRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCommitTransaction();
// ntdll.NtCommitTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCompactKeys();
// ntdll.NtCompactKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCompareObjects();
// ntdll.NtCompareObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCompareTokens();
// ntdll.NtCompareTokens = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCompleteConnectPort();
// ntdll.NtCompleteConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCompressKey();
// ntdll.NtCompressKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtConnectPort();
// ntdll.NtConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtContinue();
// ntdll.NtContinue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateDebugObject();
// ntdll.NtCreateDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateDirectoryObject();
// ntdll.NtCreateDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateDirectoryObjectEx();
// ntdll.NtCreateDirectoryObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateEnclave();
// ntdll.NtCreateEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateEnlistment();
// ntdll.NtCreateEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateEvent();
// ntdll.NtCreateEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateEventPair();
// ntdll.NtCreateEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateFile();
// ntdll.NtCreateFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateIRTimer();
// ntdll.NtCreateIRTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateIoCompletion();
// ntdll.NtCreateIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateJobObject();
// ntdll.NtCreateJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateJobSet();
// ntdll.NtCreateJobSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateKey();
// ntdll.NtCreateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateKeyTransacted();
// ntdll.NtCreateKeyTransacted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateKeyedEvent();
// ntdll.NtCreateKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateLowBoxToken();
// ntdll.NtCreateLowBoxToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateMailslotFile();
// ntdll.NtCreateMailslotFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateMutant();
// ntdll.NtCreateMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateNamedPipeFile();
// ntdll.NtCreateNamedPipeFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreatePagingFile();
// ntdll.NtCreatePagingFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreatePartition();
// ntdll.NtCreatePartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreatePort();
// ntdll.NtCreatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreatePrivateNamespace();
// ntdll.NtCreatePrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateProcess();
// ntdll.NtCreateProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateProcessEx();
// ntdll.NtCreateProcessEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateProfile();
// ntdll.NtCreateProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateProfileEx();
// ntdll.NtCreateProfileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateRegistryTransaction();
// ntdll.NtCreateRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateResourceManager();
// ntdll.NtCreateResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateSection();
// ntdll.NtCreateSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateSemaphore();
// ntdll.NtCreateSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateSymbolicLinkObject();
// ntdll.NtCreateSymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateThread();
// ntdll.NtCreateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateThreadEx();
// ntdll.NtCreateThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateTimer();
// ntdll.NtCreateTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateTimer2();
// ntdll.NtCreateTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateToken();
// ntdll.NtCreateToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateTokenEx();
// ntdll.NtCreateTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateTransaction();
// ntdll.NtCreateTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateTransactionManager();
// ntdll.NtCreateTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateUserProcess();
// ntdll.NtCreateUserProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateWaitCompletionPacket();
// ntdll.NtCreateWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateWaitablePort();
// ntdll.NtCreateWaitablePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateWnfStateName();
// ntdll.NtCreateWnfStateName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtCreateWorkerFactory();
// ntdll.NtCreateWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDebugActiveProcess();
// ntdll.NtDebugActiveProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDebugContinue();
// ntdll.NtDebugContinue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDelayExecution();
// ntdll.NtDelayExecution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteAtom();
// ntdll.NtDeleteAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteBootEntry();
// ntdll.NtDeleteBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteDriverEntry();
// ntdll.NtDeleteDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteFile();
// ntdll.NtDeleteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteKey();
// ntdll.NtDeleteKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteObjectAuditAlarm();
// ntdll.NtDeleteObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeletePrivateNamespace();
// ntdll.NtDeletePrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteValueKey();
// ntdll.NtDeleteValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteWnfStateData();
// ntdll.NtDeleteWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeleteWnfStateName();
// ntdll.NtDeleteWnfStateName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDeviceIoControlFile();
// ntdll.NtDeviceIoControlFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDisableLastKnownGood();
// ntdll.NtDisableLastKnownGood = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDisplayString();
// ntdll.NtDisplayString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDrawText();
// ntdll.NtDrawText = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDuplicateObject();
// ntdll.NtDuplicateObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtDuplicateToken();
// ntdll.NtDuplicateToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnableLastKnownGood();
// ntdll.NtEnableLastKnownGood = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateBootEntries();
// ntdll.NtEnumerateBootEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateDriverEntries();
// ntdll.NtEnumerateDriverEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateKey();
// ntdll.NtEnumerateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateSystemEnvironmentValuesEx();
// ntdll.NtEnumerateSystemEnvironmentValuesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateTransactionObject();
// ntdll.NtEnumerateTransactionObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtEnumerateValueKey();
// ntdll.NtEnumerateValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtExtendSection();
// ntdll.NtExtendSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFilterBootOption();
// ntdll.NtFilterBootOption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFilterToken();
// ntdll.NtFilterToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFilterTokenEx();
// ntdll.NtFilterTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFindAtom();
// ntdll.NtFindAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushBuffersFile();
// ntdll.NtFlushBuffersFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushBuffersFileEx();
// ntdll.NtFlushBuffersFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushInstallUILanguage();
// ntdll.NtFlushInstallUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushInstructionCache();
// ntdll.NtFlushInstructionCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushKey();
// ntdll.NtFlushKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushProcessWriteBuffers();
// ntdll.NtFlushProcessWriteBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushVirtualMemory();
// ntdll.NtFlushVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFlushWriteBuffer();
// ntdll.NtFlushWriteBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFreeUserPhysicalPages();
// ntdll.NtFreeUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFreeVirtualMemory();
// ntdll.NtFreeVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFreezeRegistry();
// ntdll.NtFreezeRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFreezeTransactions();
// ntdll.NtFreezeTransactions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtFsControlFile();
// ntdll.NtFsControlFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetCachedSigningLevel();
// ntdll.NtGetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetCompleteWnfStateSubscription();
// ntdll.NtGetCompleteWnfStateSubscription = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetContextThread();
// ntdll.NtGetContextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetCurrentProcessorNumber();
// ntdll.NtGetCurrentProcessorNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetCurrentProcessorNumberEx();
// ntdll.NtGetCurrentProcessorNumberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetDevicePowerState();
// ntdll.NtGetDevicePowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetMUIRegistryInfo();
// ntdll.NtGetMUIRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetNextProcess();
// ntdll.NtGetNextProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetNextThread();
// ntdll.NtGetNextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetNlsSectionPtr();
// ntdll.NtGetNlsSectionPtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetNotificationResourceManager();
// ntdll.NtGetNotificationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetTickCount();
// ntdll.NtGetTickCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtGetWriteWatch();
// ntdll.NtGetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtImpersonateAnonymousToken();
// ntdll.NtImpersonateAnonymousToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtImpersonateClientOfPort();
// ntdll.NtImpersonateClientOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtImpersonateThread();
// ntdll.NtImpersonateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtInitializeEnclave();
// ntdll.NtInitializeEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtInitializeNlsFiles();
// ntdll.NtInitializeNlsFiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtInitializeRegistry();
// ntdll.NtInitializeRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtInitiatePowerAction();
// ntdll.NtInitiatePowerAction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtIsProcessInJob();
// ntdll.NtIsProcessInJob = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtIsSystemResumeAutomatic();
// ntdll.NtIsSystemResumeAutomatic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtIsUILanguageComitted();
// ntdll.NtIsUILanguageComitted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtListenPort();
// ntdll.NtListenPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLoadDriver();
// ntdll.NtLoadDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLoadEnclaveData();
// ntdll.NtLoadEnclaveData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLoadKey();
// ntdll.NtLoadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLoadKey2();
// ntdll.NtLoadKey2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLoadKeyEx();
// ntdll.NtLoadKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLockFile();
// ntdll.NtLockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLockProductActivationKeys();
// ntdll.NtLockProductActivationKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLockRegistryKey();
// ntdll.NtLockRegistryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtLockVirtualMemory();
// ntdll.NtLockVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMakePermanentObject();
// ntdll.NtMakePermanentObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMakeTemporaryObject();
// ntdll.NtMakeTemporaryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtManagePartition();
// ntdll.NtManagePartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMapCMFModule();
// ntdll.NtMapCMFModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMapUserPhysicalPages();
// ntdll.NtMapUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMapUserPhysicalPagesScatter();
// ntdll.NtMapUserPhysicalPagesScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtMapViewOfSection();
// ntdll.NtMapViewOfSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtModifyBootEntry();
// ntdll.NtModifyBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtModifyDriverEntry();
// ntdll.NtModifyDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtNotifyChangeDirectoryFile();
// ntdll.NtNotifyChangeDirectoryFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtNotifyChangeKey();
// ntdll.NtNotifyChangeKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtNotifyChangeMultipleKeys();
// ntdll.NtNotifyChangeMultipleKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtNotifyChangeSession();
// ntdll.NtNotifyChangeSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenDirectoryObject();
// ntdll.NtOpenDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenEnlistment();
// ntdll.NtOpenEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenEvent();
// ntdll.NtOpenEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenEventPair();
// ntdll.NtOpenEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenFile();
// ntdll.NtOpenFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenIoCompletion();
// ntdll.NtOpenIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenJobObject();
// ntdll.NtOpenJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenKey();
// ntdll.NtOpenKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenKeyEx();
// ntdll.NtOpenKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenKeyTransacted();
// ntdll.NtOpenKeyTransacted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenKeyTransactedEx();
// ntdll.NtOpenKeyTransactedEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenKeyedEvent();
// ntdll.NtOpenKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenMutant();
// ntdll.NtOpenMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenObjectAuditAlarm();
// ntdll.NtOpenObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenPartition();
// ntdll.NtOpenPartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenPrivateNamespace();
// ntdll.NtOpenPrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenProcess();
// ntdll.NtOpenProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenProcessToken();
// ntdll.NtOpenProcessToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenProcessTokenEx();
// ntdll.NtOpenProcessTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenRegistryTransaction();
// ntdll.NtOpenRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenResourceManager();
// ntdll.NtOpenResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenSection();
// ntdll.NtOpenSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenSemaphore();
// ntdll.NtOpenSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenSession();
// ntdll.NtOpenSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenSymbolicLinkObject();
// ntdll.NtOpenSymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenThread();
// ntdll.NtOpenThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenThreadToken();
// ntdll.NtOpenThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenThreadTokenEx();
// ntdll.NtOpenThreadTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenTimer();
// ntdll.NtOpenTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenTransaction();
// ntdll.NtOpenTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtOpenTransactionManager();
// ntdll.NtOpenTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPlugPlayControl();
// ntdll.NtPlugPlayControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPowerInformation();
// ntdll.NtPowerInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrePrepareComplete();
// ntdll.NtPrePrepareComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrePrepareEnlistment();
// ntdll.NtPrePrepareEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrepareComplete();
// ntdll.NtPrepareComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrepareEnlistment();
// ntdll.NtPrepareEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrivilegeCheck();
// ntdll.NtPrivilegeCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrivilegeObjectAuditAlarm();
// ntdll.NtPrivilegeObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPrivilegedServiceAuditAlarm();
// ntdll.NtPrivilegedServiceAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPropagationComplete();
// ntdll.NtPropagationComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPropagationFailed();
// ntdll.NtPropagationFailed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtProtectVirtualMemory();
// ntdll.NtProtectVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtPulseEvent();
// ntdll.NtPulseEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryAttributesFile();
// ntdll.NtQueryAttributesFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryBootEntryOrder();
// ntdll.NtQueryBootEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryBootOptions();
// ntdll.NtQueryBootOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDebugFilterState();
// ntdll.NtQueryDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDefaultLocale();
// ntdll.NtQueryDefaultLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDefaultUILanguage();
// ntdll.NtQueryDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDirectoryFile();
// ntdll.NtQueryDirectoryFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDirectoryObject();
// ntdll.NtQueryDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryDriverEntryOrder();
// ntdll.NtQueryDriverEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryEaFile();
// ntdll.NtQueryEaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryEvent();
// ntdll.NtQueryEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryFullAttributesFile();
// ntdll.NtQueryFullAttributesFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationAtom();
// ntdll.NtQueryInformationAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationEnlistment();
// ntdll.NtQueryInformationEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationFile();
// ntdll.NtQueryInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationJobObject();
// ntdll.NtQueryInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationPort();
// ntdll.NtQueryInformationPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationProcess();
// ntdll.NtQueryInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationResourceManager();
// ntdll.NtQueryInformationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationThread();
// ntdll.NtQueryInformationThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationToken();
// ntdll.NtQueryInformationToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationTransaction();
// ntdll.NtQueryInformationTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationTransactionManager();
// ntdll.NtQueryInformationTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInformationWorkerFactory();
// ntdll.NtQueryInformationWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryInstallUILanguage();
// ntdll.NtQueryInstallUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryIntervalProfile();
// ntdll.NtQueryIntervalProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryIoCompletion();
// ntdll.NtQueryIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryKey();
// ntdll.NtQueryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryLicenseValue();
// ntdll.NtQueryLicenseValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryMultipleValueKey();
// ntdll.NtQueryMultipleValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryMutant();
// ntdll.NtQueryMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryObject();
// ntdll.NtQueryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryOpenSubKeys();
// ntdll.NtQueryOpenSubKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryOpenSubKeysEx();
// ntdll.NtQueryOpenSubKeysEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryPerformanceCounter();
// ntdll.NtQueryPerformanceCounter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryPortInformationProcess();
// ntdll.NtQueryPortInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryQuotaInformationFile();
// ntdll.NtQueryQuotaInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySection();
// ntdll.NtQuerySection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySecurityAttributesToken();
// ntdll.NtQuerySecurityAttributesToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySecurityObject();
// ntdll.NtQuerySecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySecurityPolicy();
// ntdll.NtQuerySecurityPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySemaphore();
// ntdll.NtQuerySemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySymbolicLinkObject();
// ntdll.NtQuerySymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySystemEnvironmentValue();
// ntdll.NtQuerySystemEnvironmentValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySystemEnvironmentValueEx();
// ntdll.NtQuerySystemEnvironmentValueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySystemInformation();
// ntdll.NtQuerySystemInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySystemInformationEx();
// ntdll.NtQuerySystemInformationEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQuerySystemTime();
// ntdll.NtQuerySystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryTimer();
// ntdll.NtQueryTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryTimerResolution();
// ntdll.NtQueryTimerResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryValueKey();
// ntdll.NtQueryValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryVirtualMemory();
// ntdll.NtQueryVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryVolumeInformationFile();
// ntdll.NtQueryVolumeInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryWnfStateData();
// ntdll.NtQueryWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueryWnfStateNameInformation();
// ntdll.NtQueryWnfStateNameInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueueApcThread();
// ntdll.NtQueueApcThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtQueueApcThreadEx();
// ntdll.NtQueueApcThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRaiseException();
// ntdll.NtRaiseException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRaiseHardError();
// ntdll.NtRaiseHardError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReadFile();
// ntdll.NtReadFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReadFileScatter();
// ntdll.NtReadFileScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReadOnlyEnlistment();
// ntdll.NtReadOnlyEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReadRequestData();
// ntdll.NtReadRequestData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReadVirtualMemory();
// ntdll.NtReadVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRecoverEnlistment();
// ntdll.NtRecoverEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRecoverResourceManager();
// ntdll.NtRecoverResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRecoverTransactionManager();
// ntdll.NtRecoverTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRegisterProtocolAddressInformation();
// ntdll.NtRegisterProtocolAddressInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRegisterThreadTerminatePort();
// ntdll.NtRegisterThreadTerminatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReleaseKeyedEvent();
// ntdll.NtReleaseKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReleaseMutant();
// ntdll.NtReleaseMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReleaseSemaphore();
// ntdll.NtReleaseSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReleaseWorkerFactoryWorker();
// ntdll.NtReleaseWorkerFactoryWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRemoveIoCompletion();
// ntdll.NtRemoveIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRemoveIoCompletionEx();
// ntdll.NtRemoveIoCompletionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRemoveProcessDebug();
// ntdll.NtRemoveProcessDebug = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRenameKey();
// ntdll.NtRenameKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRenameTransactionManager();
// ntdll.NtRenameTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplaceKey();
// ntdll.NtReplaceKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplacePartitionUnit();
// ntdll.NtReplacePartitionUnit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplyPort();
// ntdll.NtReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplyWaitReceivePort();
// ntdll.NtReplyWaitReceivePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplyWaitReceivePortEx();
// ntdll.NtReplyWaitReceivePortEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtReplyWaitReplyPort();
// ntdll.NtReplyWaitReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRequestPort();
// ntdll.NtRequestPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRequestWaitReplyPort();
// ntdll.NtRequestWaitReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtResetEvent();
// ntdll.NtResetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtResetWriteWatch();
// ntdll.NtResetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRestoreKey();
// ntdll.NtRestoreKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtResumeProcess();
// ntdll.NtResumeProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtResumeThread();
// ntdll.NtResumeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRevertContainerImpersonation();
// ntdll.NtRevertContainerImpersonation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRollbackComplete();
// ntdll.NtRollbackComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRollbackEnlistment();
// ntdll.NtRollbackEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRollbackRegistryTransaction();
// ntdll.NtRollbackRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRollbackTransaction();
// ntdll.NtRollbackTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtRollforwardTransactionManager();
// ntdll.NtRollforwardTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSaveKey();
// ntdll.NtSaveKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSaveKeyEx();
// ntdll.NtSaveKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSaveMergedKeys();
// ntdll.NtSaveMergedKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSecureConnectPort();
// ntdll.NtSecureConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSerializeBoot();
// ntdll.NtSerializeBoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetBootEntryOrder();
// ntdll.NtSetBootEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetBootOptions();
// ntdll.NtSetBootOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetCachedSigningLevel();
// ntdll.NtSetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetCachedSigningLevel2();
// ntdll.NtSetCachedSigningLevel2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetContextThread();
// ntdll.NtSetContextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetDebugFilterState();
// ntdll.NtSetDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetDefaultHardErrorPort();
// ntdll.NtSetDefaultHardErrorPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetDefaultLocale();
// ntdll.NtSetDefaultLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetDefaultUILanguage();
// ntdll.NtSetDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetDriverEntryOrder();
// ntdll.NtSetDriverEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetEaFile();
// ntdll.NtSetEaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetEvent();
// ntdll.NtSetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetEventBoostPriority();
// ntdll.NtSetEventBoostPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetHighEventPair();
// ntdll.NtSetHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetHighWaitLowEventPair();
// ntdll.NtSetHighWaitLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetIRTimer();
// ntdll.NtSetIRTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationDebugObject();
// ntdll.NtSetInformationDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationEnlistment();
// ntdll.NtSetInformationEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationFile();
// ntdll.NtSetInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationJobObject();
// ntdll.NtSetInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationKey();
// ntdll.NtSetInformationKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationObject();
// ntdll.NtSetInformationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationProcess();
// ntdll.NtSetInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationResourceManager();
// ntdll.NtSetInformationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationSymbolicLink();
// ntdll.NtSetInformationSymbolicLink = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationThread();
// ntdll.NtSetInformationThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationToken();
// ntdll.NtSetInformationToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationTransaction();
// ntdll.NtSetInformationTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationTransactionManager();
// ntdll.NtSetInformationTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationVirtualMemory();
// ntdll.NtSetInformationVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetInformationWorkerFactory();
// ntdll.NtSetInformationWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetIntervalProfile();
// ntdll.NtSetIntervalProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetIoCompletion();
// ntdll.NtSetIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetIoCompletionEx();
// ntdll.NtSetIoCompletionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetLdtEntries();
// ntdll.NtSetLdtEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetLowEventPair();
// ntdll.NtSetLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetLowWaitHighEventPair();
// ntdll.NtSetLowWaitHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetQuotaInformationFile();
// ntdll.NtSetQuotaInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSecurityObject();
// ntdll.NtSetSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSystemEnvironmentValue();
// ntdll.NtSetSystemEnvironmentValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSystemEnvironmentValueEx();
// ntdll.NtSetSystemEnvironmentValueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSystemInformation();
// ntdll.NtSetSystemInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSystemPowerState();
// ntdll.NtSetSystemPowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetSystemTime();
// ntdll.NtSetSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetThreadExecutionState();
// ntdll.NtSetThreadExecutionState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetTimer();
// ntdll.NtSetTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetTimer2();
// ntdll.NtSetTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetTimerEx();
// ntdll.NtSetTimerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetTimerResolution();
// ntdll.NtSetTimerResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetUuidSeed();
// ntdll.NtSetUuidSeed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetValueKey();
// ntdll.NtSetValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetVolumeInformationFile();
// ntdll.NtSetVolumeInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSetWnfProcessNotificationEvent();
// ntdll.NtSetWnfProcessNotificationEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtShutdownSystem();
// ntdll.NtShutdownSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtShutdownWorkerFactory();
// ntdll.NtShutdownWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSignalAndWaitForSingleObject();
// ntdll.NtSignalAndWaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSinglePhaseReject();
// ntdll.NtSinglePhaseReject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtStartProfile();
// ntdll.NtStartProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtStopProfile();
// ntdll.NtStopProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSubscribeWnfStateChange();
// ntdll.NtSubscribeWnfStateChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSuspendProcess();
// ntdll.NtSuspendProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSuspendThread();
// ntdll.NtSuspendThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtSystemDebugControl();
// ntdll.NtSystemDebugControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTerminateJobObject();
// ntdll.NtTerminateJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTerminateProcess();
// ntdll.NtTerminateProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTerminateThread();
// ntdll.NtTerminateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTestAlert();
// ntdll.NtTestAlert = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtThawRegistry();
// ntdll.NtThawRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtThawTransactions();
// ntdll.NtThawTransactions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTraceControl();
// ntdll.NtTraceControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTraceEvent();
// ntdll.NtTraceEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtTranslateFilePath();
// ntdll.NtTranslateFilePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUmsThreadYield();
// ntdll.NtUmsThreadYield = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnloadDriver();
// ntdll.NtUnloadDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnloadKey();
// ntdll.NtUnloadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnloadKey2();
// ntdll.NtUnloadKey2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnloadKeyEx();
// ntdll.NtUnloadKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnlockFile();
// ntdll.NtUnlockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnlockVirtualMemory();
// ntdll.NtUnlockVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnmapViewOfSection();
// ntdll.NtUnmapViewOfSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnmapViewOfSectionEx();
// ntdll.NtUnmapViewOfSectionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUnsubscribeWnfStateChange();
// ntdll.NtUnsubscribeWnfStateChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtUpdateWnfStateData();
// ntdll.NtUpdateWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtVdmControl();
// ntdll.NtVdmControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForAlertByThreadId();
// ntdll.NtWaitForAlertByThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForDebugEvent();
// ntdll.NtWaitForDebugEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForKeyedEvent();
// ntdll.NtWaitForKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForMultipleObjects();
// ntdll.NtWaitForMultipleObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForMultipleObjects32();
// ntdll.NtWaitForMultipleObjects32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForSingleObject();
// ntdll.NtWaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitForWorkViaWorkerFactory();
// ntdll.NtWaitForWorkViaWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitHighEventPair();
// ntdll.NtWaitHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWaitLowEventPair();
// ntdll.NtWaitLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWorkerFactoryWorkerReady();
// ntdll.NtWorkerFactoryWorkerReady = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWriteFile();
// ntdll.NtWriteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWriteFileGather();
// ntdll.NtWriteFileGather = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWriteRequestData();
// ntdll.NtWriteRequestData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtWriteVirtualMemory();
// ntdll.NtWriteVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtYieldExecution();
// ntdll.NtYieldExecution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtdllDefWindowProc_A();
// ntdll.NtdllDefWindowProc_A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtdllDefWindowProc_W();
// ntdll.NtdllDefWindowProc_W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtdllDialogWndProc_A();
// ntdll.NtdllDialogWndProc_A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtdllDialogWndProc_W();
// ntdll.NtdllDialogWndProc_W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PfxFindPrefix();
// ntdll.PfxFindPrefix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PfxInitialize();
// ntdll.PfxInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PfxInsertPrefix();
// ntdll.PfxInsertPrefix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PfxRemovePrefix();
// ntdll.PfxRemovePrefix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtCaptureSnapshot();
// ntdll.PssNtCaptureSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtDuplicateSnapshot();
// ntdll.PssNtDuplicateSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtFreeRemoteSnapshot();
// ntdll.PssNtFreeRemoteSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtFreeSnapshot();
// ntdll.PssNtFreeSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtFreeWalkMarker();
// ntdll.PssNtFreeWalkMarker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtQuerySnapshot();
// ntdll.PssNtQuerySnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtValidateDescriptor();
// ntdll.PssNtValidateDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssNtWalkSnapshot();
// ntdll.PssNtWalkSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAbortRXact();
// ntdll.RtlAbortRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAbsoluteToSelfRelativeSD();
// ntdll.RtlAbsoluteToSelfRelativeSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquirePebLock();
// ntdll.RtlAcquirePebLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquirePrivilege();
// ntdll.RtlAcquirePrivilege = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquireReleaseSRWLockExclusive();
// ntdll.RtlAcquireReleaseSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquireResourceExclusive();
// ntdll.RtlAcquireResourceExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquireResourceShared();
// ntdll.RtlAcquireResourceShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquireSRWLockExclusive();
// ntdll.RtlAcquireSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAcquireSRWLockShared();
// ntdll.RtlAcquireSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlActivateActivationContext();
// ntdll.RtlActivateActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlActivateActivationContextEx();
// ntdll.RtlActivateActivationContextEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlActivateActivationContextUnsafeFast();
// ntdll.RtlActivateActivationContextUnsafeFast = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessAllowedAce();
// ntdll.RtlAddAccessAllowedAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessAllowedAceEx();
// ntdll.RtlAddAccessAllowedAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessAllowedObjectAce();
// ntdll.RtlAddAccessAllowedObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessDeniedAce();
// ntdll.RtlAddAccessDeniedAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessDeniedAceEx();
// ntdll.RtlAddAccessDeniedAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAccessDeniedObjectAce();
// ntdll.RtlAddAccessDeniedObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAce();
// ntdll.RtlAddAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddActionToRXact();
// ntdll.RtlAddActionToRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAtomToAtomTable();
// ntdll.RtlAddAtomToAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAttributeActionToRXact();
// ntdll.RtlAddAttributeActionToRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAuditAccessAce();
// ntdll.RtlAddAuditAccessAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAuditAccessAceEx();
// ntdll.RtlAddAuditAccessAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddAuditAccessObjectAce();
// ntdll.RtlAddAuditAccessObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddCompoundAce();
// ntdll.RtlAddCompoundAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddFunctionTable();
// ntdll.RtlAddFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddGrowableFunctionTable();
// ntdll.RtlAddGrowableFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddIntegrityLabelToBoundaryDescriptor();
// ntdll.RtlAddIntegrityLabelToBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddMandatoryAce();
// ntdll.RtlAddMandatoryAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddProcessTrustLabelAce();
// ntdll.RtlAddProcessTrustLabelAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddRefActivationContext();
// ntdll.RtlAddRefActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddRefMemoryStream();
// ntdll.RtlAddRefMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddResourceAttributeAce();
// ntdll.RtlAddResourceAttributeAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddSIDToBoundaryDescriptor();
// ntdll.RtlAddSIDToBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddScopedPolicyIDAce();
// ntdll.RtlAddScopedPolicyIDAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddVectoredContinueHandler();
// ntdll.RtlAddVectoredContinueHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddVectoredExceptionHandler();
// ntdll.RtlAddVectoredExceptionHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddressInSectionTable();
// ntdll.RtlAddressInSectionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAdjustPrivilege();
// ntdll.RtlAdjustPrivilege = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateActivationContextStack();
// ntdll.RtlAllocateActivationContextStack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateAndInitializeSid();
// ntdll.RtlAllocateAndInitializeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateAndInitializeSidEx();
// ntdll.RtlAllocateAndInitializeSidEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateHandle();
// ntdll.RtlAllocateHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateHeap();
// ntdll.RtlAllocateHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateMemoryBlockLookaside();
// ntdll.RtlAllocateMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateMemoryZone();
// ntdll.RtlAllocateMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAllocateWnfSerializationGroup();
// ntdll.RtlAllocateWnfSerializationGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAnsiCharToUnicodeChar();
// ntdll.RtlAnsiCharToUnicodeChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAnsiStringToUnicodeSize();
// ntdll.RtlAnsiStringToUnicodeSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAnsiStringToUnicodeString();
// ntdll.RtlAnsiStringToUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppendAsciizToString();
// ntdll.RtlAppendAsciizToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppendPathElement();
// ntdll.RtlAppendPathElement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppendStringToString();
// ntdll.RtlAppendStringToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppendUnicodeStringToString();
// ntdll.RtlAppendUnicodeStringToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppendUnicodeToString();
// ntdll.RtlAppendUnicodeToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlApplicationVerifierStop();
// ntdll.RtlApplicationVerifierStop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlApplyRXact();
// ntdll.RtlApplyRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlApplyRXactNoFlush();
// ntdll.RtlApplyRXactNoFlush = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAppxIsFileOwnedByTrustedInstaller();
// ntdll.RtlAppxIsFileOwnedByTrustedInstaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAreAllAccessesGranted();
// ntdll.RtlAreAllAccessesGranted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAreAnyAccessesGranted();
// ntdll.RtlAreAnyAccessesGranted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAreBitsClear();
// ntdll.RtlAreBitsClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAreBitsSet();
// ntdll.RtlAreBitsSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAreLongPathsEnabled();
// ntdll.RtlAreLongPathsEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAssert();
// ntdll.RtlAssert = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAvlInsertNodeEx();
// ntdll.RtlAvlInsertNodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAvlRemoveNode();
// ntdll.RtlAvlRemoveNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlBarrier();
// ntdll.RtlBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlBarrierForDelete();
// ntdll.RtlBarrierForDelete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCancelTimer();
// ntdll.RtlCancelTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCanonicalizeDomainName();
// ntdll.RtlCanonicalizeDomainName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCapabilityCheck();
// ntdll.RtlCapabilityCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCaptureContext();
// ntdll.RtlCaptureContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCaptureStackBackTrace();
// ntdll.RtlCaptureStackBackTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCharToInteger();
// ntdll.RtlCharToInteger = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckBootStatusIntegrity();
// ntdll.RtlCheckBootStatusIntegrity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckForOrphanedCriticalSections();
// ntdll.RtlCheckForOrphanedCriticalSections = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckPortableOperatingSystem();
// ntdll.RtlCheckPortableOperatingSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckRegistryKey();
// ntdll.RtlCheckRegistryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckSandboxedToken();
// ntdll.RtlCheckSandboxedToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckTokenCapability();
// ntdll.RtlCheckTokenCapability = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckTokenMembership();
// ntdll.RtlCheckTokenMembership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCheckTokenMembershipEx();
// ntdll.RtlCheckTokenMembershipEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCleanUpTEBLangLists();
// ntdll.RtlCleanUpTEBLangLists = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlClearAllBits();
// ntdll.RtlClearAllBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlClearBit();
// ntdll.RtlClearBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlClearBits();
// ntdll.RtlClearBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlClearThreadWorkOnBehalfTicket();
// ntdll.RtlClearThreadWorkOnBehalfTicket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCloneMemoryStream();
// ntdll.RtlCloneMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCloneUserProcess();
// ntdll.RtlCloneUserProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCmDecodeMemIoResource();
// ntdll.RtlCmDecodeMemIoResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCmEncodeMemIoResource();
// ntdll.RtlCmEncodeMemIoResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCommitDebugInfo();
// ntdll.RtlCommitDebugInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCommitMemoryStream();
// ntdll.RtlCommitMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompactHeap();
// ntdll.RtlCompactHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareAltitudes();
// ntdll.RtlCompareAltitudes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareMemory();
// ntdll.RtlCompareMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareMemoryUlong();
// ntdll.RtlCompareMemoryUlong = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareString();
// ntdll.RtlCompareString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareUnicodeString();
// ntdll.RtlCompareUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareUnicodeStrings();
// ntdll.RtlCompareUnicodeStrings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompleteProcessCloning();
// ntdll.RtlCompleteProcessCloning = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompressBuffer();
// ntdll.RtlCompressBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlComputeCrc32();
// ntdll.RtlComputeCrc32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlComputeImportTableHash();
// ntdll.RtlComputeImportTableHash = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlComputePrivatizedDllName_U();
// ntdll.RtlComputePrivatizedDllName_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConnectToSm();
// ntdll.RtlConnectToSm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConsoleMultiByteToUnicodeN();
// ntdll.RtlConsoleMultiByteToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlContractHashTable();
// ntdll.RtlContractHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertDeviceFamilyInfoToString();
// ntdll.RtlConvertDeviceFamilyInfoToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertExclusiveToShared();
// ntdll.RtlConvertExclusiveToShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertLCIDToString();
// ntdll.RtlConvertLCIDToString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertSRWLockExclusiveToShared();
// ntdll.RtlConvertSRWLockExclusiveToShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertSharedToExclusive();
// ntdll.RtlConvertSharedToExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertSidToUnicodeString();
// ntdll.RtlConvertSidToUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlConvertToAutoInheritSecurityObject();
// ntdll.RtlConvertToAutoInheritSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyBitMap();
// ntdll.RtlCopyBitMap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyContext();
// ntdll.RtlCopyContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyExtendedContext();
// ntdll.RtlCopyExtendedContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyLuid();
// ntdll.RtlCopyLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyLuidAndAttributesArray();
// ntdll.RtlCopyLuidAndAttributesArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyMappedMemory();
// ntdll.RtlCopyMappedMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyMemory();
// ntdll.RtlCopyMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyMemoryNonTemporal();
// ntdll.RtlCopyMemoryNonTemporal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyMemoryStreamTo();
// ntdll.RtlCopyMemoryStreamTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyOutOfProcessMemoryStreamTo();
// ntdll.RtlCopyOutOfProcessMemoryStreamTo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopySecurityDescriptor();
// ntdll.RtlCopySecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopySid();
// ntdll.RtlCopySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopySidAndAttributesArray();
// ntdll.RtlCopySidAndAttributesArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyString();
// ntdll.RtlCopyString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyUnicodeString();
// ntdll.RtlCopyUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCrc32();
// ntdll.RtlCrc32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCrc64();
// ntdll.RtlCrc64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateAcl();
// ntdll.RtlCreateAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateActivationContext();
// ntdll.RtlCreateActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateAndSetSD();
// ntdll.RtlCreateAndSetSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateAtomTable();
// ntdll.RtlCreateAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateBootStatusDataFile();
// ntdll.RtlCreateBootStatusDataFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateBoundaryDescriptor();
// ntdll.RtlCreateBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateEnvironment();
// ntdll.RtlCreateEnvironment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateEnvironmentEx();
// ntdll.RtlCreateEnvironmentEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateHashTable();
// ntdll.RtlCreateHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateHashTableEx();
// ntdll.RtlCreateHashTableEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateHeap();
// ntdll.RtlCreateHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateMemoryBlockLookaside();
// ntdll.RtlCreateMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateMemoryZone();
// ntdll.RtlCreateMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateProcessParameters();
// ntdll.RtlCreateProcessParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateProcessParametersEx();
// ntdll.RtlCreateProcessParametersEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateProcessReflection();
// ntdll.RtlCreateProcessReflection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateQueryDebugBuffer();
// ntdll.RtlCreateQueryDebugBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateRegistryKey();
// ntdll.RtlCreateRegistryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateSecurityDescriptor();
// ntdll.RtlCreateSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateServiceSid();
// ntdll.RtlCreateServiceSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateSystemVolumeInformationFolder();
// ntdll.RtlCreateSystemVolumeInformationFolder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateTagHeap();
// ntdll.RtlCreateTagHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateTimer();
// ntdll.RtlCreateTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateTimerQueue();
// ntdll.RtlCreateTimerQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUmsCompletionList();
// ntdll.RtlCreateUmsCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUmsThreadContext();
// ntdll.RtlCreateUmsThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUnicodeString();
// ntdll.RtlCreateUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUnicodeStringFromAsciiz();
// ntdll.RtlCreateUnicodeStringFromAsciiz = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUserProcess();
// ntdll.RtlCreateUserProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUserSecurityObject();
// ntdll.RtlCreateUserSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUserStack();
// ntdll.RtlCreateUserStack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateUserThread();
// ntdll.RtlCreateUserThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCreateVirtualAccountSid();
// ntdll.RtlCreateVirtualAccountSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCultureNameToLCID();
// ntdll.RtlCultureNameToLCID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCustomCPToUnicodeN();
// ntdll.RtlCustomCPToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCutoverTimeToSystemTime();
// ntdll.RtlCutoverTimeToSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeCommitDebugInfo();
// ntdll.RtlDeCommitDebugInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeNormalizeProcessParams();
// ntdll.RtlDeNormalizeProcessParams = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeactivateActivationContext();
// ntdll.RtlDeactivateActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeactivateActivationContextUnsafeFast();
// ntdll.RtlDeactivateActivationContextUnsafeFast = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDebugPrintTimes();
// ntdll.RtlDebugPrintTimes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecodePointer();
// ntdll.RtlDecodePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecodeRemotePointer();
// ntdll.RtlDecodeRemotePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecodeSystemPointer();
// ntdll.RtlDecodeSystemPointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecompressBuffer();
// ntdll.RtlDecompressBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecompressBufferEx();
// ntdll.RtlDecompressBufferEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDecompressFragment();
// ntdll.RtlDecompressFragment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDefaultNpAcl();
// ntdll.RtlDefaultNpAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDelete();
// ntdll.RtlDelete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteAce();
// ntdll.RtlDeleteAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteAtomFromAtomTable();
// ntdll.RtlDeleteAtomFromAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteBarrier();
// ntdll.RtlDeleteBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteBoundaryDescriptor();
// ntdll.RtlDeleteBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteCriticalSection();
// ntdll.RtlDeleteCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteElementGenericTable();
// ntdll.RtlDeleteElementGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteElementGenericTableAvl();
// ntdll.RtlDeleteElementGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteElementGenericTableAvlEx();
// ntdll.RtlDeleteElementGenericTableAvlEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteFunctionTable();
// ntdll.RtlDeleteFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteGrowableFunctionTable();
// ntdll.RtlDeleteGrowableFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteHashTable();
// ntdll.RtlDeleteHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteNoSplay();
// ntdll.RtlDeleteNoSplay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteRegistryValue();
// ntdll.RtlDeleteRegistryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteResource();
// ntdll.RtlDeleteResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteSecurityObject();
// ntdll.RtlDeleteSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteTimer();
// ntdll.RtlDeleteTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteTimerQueue();
// ntdll.RtlDeleteTimerQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteTimerQueueEx();
// ntdll.RtlDeleteTimerQueueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteUmsCompletionList();
// ntdll.RtlDeleteUmsCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteUmsThreadContext();
// ntdll.RtlDeleteUmsThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDequeueUmsCompletionListItems();
// ntdll.RtlDequeueUmsCompletionListItems = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeregisterSecureMemoryCacheCallback();
// ntdll.RtlDeregisterSecureMemoryCacheCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeregisterWait();
// ntdll.RtlDeregisterWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeregisterWaitEx();
// ntdll.RtlDeregisterWaitEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeriveCapabilitySidsFromName();
// ntdll.RtlDeriveCapabilitySidsFromName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyAtomTable();
// ntdll.RtlDestroyAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyEnvironment();
// ntdll.RtlDestroyEnvironment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyHandleTable();
// ntdll.RtlDestroyHandleTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyHeap();
// ntdll.RtlDestroyHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyMemoryBlockLookaside();
// ntdll.RtlDestroyMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyMemoryZone();
// ntdll.RtlDestroyMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyProcessParameters();
// ntdll.RtlDestroyProcessParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDestroyQueryDebugBuffer();
// ntdll.RtlDestroyQueryDebugBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDetectHeapLeaks();
// ntdll.RtlDetectHeapLeaks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDetermineDosPathNameType_U();
// ntdll.RtlDetermineDosPathNameType_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDisableThreadProfiling();
// ntdll.RtlDisableThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDllShutdownInProgress();
// ntdll.RtlDllShutdownInProgress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDnsHostNameToComputerName();
// ntdll.RtlDnsHostNameToComputerName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDoesFileExists_U();
// ntdll.RtlDoesFileExists_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosApplyFileIsolationRedirection_Ustr();
// ntdll.RtlDosApplyFileIsolationRedirection_Ustr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosPathNameToNtPathName_U();
// ntdll.RtlDosPathNameToNtPathName_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosPathNameToNtPathName_U_WithStatus();
// ntdll.RtlDosPathNameToNtPathName_U_WithStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosPathNameToRelativeNtPathName_U();
// ntdll.RtlDosPathNameToRelativeNtPathName_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosPathNameToRelativeNtPathName_U_WithStatus();
// ntdll.RtlDosPathNameToRelativeNtPathName_U_WithStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosSearchPath_U();
// ntdll.RtlDosSearchPath_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDosSearchPath_Ustr();
// ntdll.RtlDosSearchPath_Ustr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDowncaseUnicodeChar();
// ntdll.RtlDowncaseUnicodeChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDowncaseUnicodeString();
// ntdll.RtlDowncaseUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDumpResource();
// ntdll.RtlDumpResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDuplicateUnicodeString();
// ntdll.RtlDuplicateUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEmptyAtomTable();
// ntdll.RtlEmptyAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnableEarlyCriticalSectionEventCreation();
// ntdll.RtlEnableEarlyCriticalSectionEventCreation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnableThreadProfiling();
// ntdll.RtlEnableThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEncodePointer();
// ntdll.RtlEncodePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEncodeRemotePointer();
// ntdll.RtlEncodeRemotePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEncodeSystemPointer();
// ntdll.RtlEncodeSystemPointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEndEnumerationHashTable();
// ntdll.RtlEndEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEndStrongEnumerationHashTable();
// ntdll.RtlEndStrongEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEndWeakEnumerationHashTable();
// ntdll.RtlEndWeakEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnterCriticalSection();
// ntdll.RtlEnterCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnterUmsSchedulingMode();
// ntdll.RtlEnterUmsSchedulingMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumProcessHeaps();
// ntdll.RtlEnumProcessHeaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateEntryHashTable();
// ntdll.RtlEnumerateEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateGenericTable();
// ntdll.RtlEnumerateGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateGenericTableAvl();
// ntdll.RtlEnumerateGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateGenericTableLikeADirectory();
// ntdll.RtlEnumerateGenericTableLikeADirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateGenericTableWithoutSplaying();
// ntdll.RtlEnumerateGenericTableWithoutSplaying = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEnumerateGenericTableWithoutSplayingAvl();
// ntdll.RtlEnumerateGenericTableWithoutSplayingAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualComputerName();
// ntdll.RtlEqualComputerName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualDomainName();
// ntdll.RtlEqualDomainName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualLuid();
// ntdll.RtlEqualLuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualPrefixSid();
// ntdll.RtlEqualPrefixSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualSid();
// ntdll.RtlEqualSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualString();
// ntdll.RtlEqualString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualUnicodeString();
// ntdll.RtlEqualUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEqualWnfChangeStamps();
// ntdll.RtlEqualWnfChangeStamps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEraseUnicodeString();
// ntdll.RtlEraseUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEthernetAddressToStringA();
// ntdll.RtlEthernetAddressToStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEthernetAddressToStringW();
// ntdll.RtlEthernetAddressToStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEthernetStringToAddressA();
// ntdll.RtlEthernetStringToAddressA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlEthernetStringToAddressW();
// ntdll.RtlEthernetStringToAddressW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExecuteUmsThread();
// ntdll.RtlExecuteUmsThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExitUserProcess();
// ntdll.RtlExitUserProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExitUserThread();
// ntdll.RtlExitUserThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExpandEnvironmentStrings();
// ntdll.RtlExpandEnvironmentStrings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExpandEnvironmentStrings_U();
// ntdll.RtlExpandEnvironmentStrings_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExpandHashTable();
// ntdll.RtlExpandHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExtendMemoryBlockLookaside();
// ntdll.RtlExtendMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExtendMemoryZone();
// ntdll.RtlExtendMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlExtractBitMap();
// ntdll.RtlExtractBitMap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFillMemory();
// ntdll.RtlFillMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFinalReleaseOutOfProcessMemoryStream();
// ntdll.RtlFinalReleaseOutOfProcessMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindAceByType();
// ntdll.RtlFindAceByType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindActivationContextSectionGuid();
// ntdll.RtlFindActivationContextSectionGuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindActivationContextSectionString();
// ntdll.RtlFindActivationContextSectionString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindCharInUnicodeString();
// ntdll.RtlFindCharInUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindClearBits();
// ntdll.RtlFindClearBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindClearBitsAndSet();
// ntdll.RtlFindClearBitsAndSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindClearRuns();
// ntdll.RtlFindClearRuns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindClosestEncodableLength();
// ntdll.RtlFindClosestEncodableLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindExportedRoutineByName();
// ntdll.RtlFindExportedRoutineByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindLastBackwardRunClear();
// ntdll.RtlFindLastBackwardRunClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindLeastSignificantBit();
// ntdll.RtlFindLeastSignificantBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindLongestRunClear();
// ntdll.RtlFindLongestRunClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindMessage();
// ntdll.RtlFindMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindMostSignificantBit();
// ntdll.RtlFindMostSignificantBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindNextForwardRunClear();
// ntdll.RtlFindNextForwardRunClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindSetBits();
// ntdll.RtlFindSetBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindSetBitsAndClear();
// ntdll.RtlFindSetBitsAndClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFindUnicodeSubstring();
// ntdll.RtlFindUnicodeSubstring = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFirstEntrySList();
// ntdll.RtlFirstEntrySList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFirstFreeAce();
// ntdll.RtlFirstFreeAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFlsAlloc();
// ntdll.RtlFlsAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFlsFree();
// ntdll.RtlFlsFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFlushHeaps();
// ntdll.RtlFlushHeaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFlushSecureMemoryCache();
// ntdll.RtlFlushSecureMemoryCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFormatCurrentUserKeyPath();
// ntdll.RtlFormatCurrentUserKeyPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFormatMessage();
// ntdll.RtlFormatMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFormatMessageEx();
// ntdll.RtlFormatMessageEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeActivationContextStack();
// ntdll.RtlFreeActivationContextStack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeAnsiString();
// ntdll.RtlFreeAnsiString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeHandle();
// ntdll.RtlFreeHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeHeap();
// ntdll.RtlFreeHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeMemoryBlockLookaside();
// ntdll.RtlFreeMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeOemString();
// ntdll.RtlFreeOemString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeSid();
// ntdll.RtlFreeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeThreadActivationContextStack();
// ntdll.RtlFreeThreadActivationContextStack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeUnicodeString();
// ntdll.RtlFreeUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFreeUserStack();
// ntdll.RtlFreeUserStack = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGUIDFromString();
// ntdll.RtlGUIDFromString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGenerate8dot3Name();
// ntdll.RtlGenerate8dot3Name = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetAce();
// ntdll.RtlGetAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetActiveActivationContext();
// ntdll.RtlGetActiveActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetActiveConsoleId();
// ntdll.RtlGetActiveConsoleId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetAppContainerNamedObjectPath();
// ntdll.RtlGetAppContainerNamedObjectPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetAppContainerParent();
// ntdll.RtlGetAppContainerParent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetAppContainerSidType();
// ntdll.RtlGetAppContainerSidType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCallersAddress();
// ntdll.RtlGetCallersAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCompressionWorkSpaceSize();
// ntdll.RtlGetCompressionWorkSpaceSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetConsoleSessionForegroundProcessId();
// ntdll.RtlGetConsoleSessionForegroundProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetControlSecurityDescriptor();
// ntdll.RtlGetControlSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCriticalSectionRecursionCount();
// ntdll.RtlGetCriticalSectionRecursionCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentDirectory_U();
// ntdll.RtlGetCurrentDirectory_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentPeb();
// ntdll.RtlGetCurrentPeb = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentProcessorNumber();
// ntdll.RtlGetCurrentProcessorNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentProcessorNumberEx();
// ntdll.RtlGetCurrentProcessorNumberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentServiceSessionId();
// ntdll.RtlGetCurrentServiceSessionId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentTransaction();
// ntdll.RtlGetCurrentTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetCurrentUmsThread();
// ntdll.RtlGetCurrentUmsThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetDaclSecurityDescriptor();
// ntdll.RtlGetDaclSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetDeviceFamilyInfoEnum();
// ntdll.RtlGetDeviceFamilyInfoEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetElementGenericTable();
// ntdll.RtlGetElementGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetElementGenericTableAvl();
// ntdll.RtlGetElementGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetEnabledExtendedFeatures();
// ntdll.RtlGetEnabledExtendedFeatures = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetExePath();
// ntdll.RtlGetExePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetExtendedContextLength();
// ntdll.RtlGetExtendedContextLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetExtendedFeaturesMask();
// ntdll.RtlGetExtendedFeaturesMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFileMUIPath();
// ntdll.RtlGetFileMUIPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFrame();
// ntdll.RtlGetFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFullPathName_U();
// ntdll.RtlGetFullPathName_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFullPathName_UEx();
// ntdll.RtlGetFullPathName_UEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFullPathName_UstrEx();
// ntdll.RtlGetFullPathName_UstrEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetFunctionTableListHead();
// ntdll.RtlGetFunctionTableListHead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetGroupSecurityDescriptor();
// ntdll.RtlGetGroupSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetIntegerAtom();
// ntdll.RtlGetIntegerAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetInterruptTimePrecise();
// ntdll.RtlGetInterruptTimePrecise = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLastNtStatus();
// ntdll.RtlGetLastNtStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLastWin32Error();
// ntdll.RtlGetLastWin32Error = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLengthWithoutLastFullDosOrNtPathElement();
// ntdll.RtlGetLengthWithoutLastFullDosOrNtPathElement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLengthWithoutTrailingPathSeperators();
// ntdll.RtlGetLengthWithoutTrailingPathSeperators = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLocaleFileMappingAddress();
// ntdll.RtlGetLocaleFileMappingAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetLongestNtPathLength();
// ntdll.RtlGetLongestNtPathLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNativeSystemInformation();
// ntdll.RtlGetNativeSystemInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNextEntryHashTable();
// ntdll.RtlGetNextEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNextUmsListItem();
// ntdll.RtlGetNextUmsListItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNtGlobalFlags();
// ntdll.RtlGetNtGlobalFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNtProductType();
// ntdll.RtlGetNtProductType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetNtVersionNumbers();
// ntdll.RtlGetNtVersionNumbers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetOwnerSecurityDescriptor();
// ntdll.RtlGetOwnerSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetParentLocaleName();
// ntdll.RtlGetParentLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetProcessHeaps();
// ntdll.RtlGetProcessHeaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetProcessPreferredUILanguages();
// ntdll.RtlGetProcessPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetProductInfo();
// ntdll.RtlGetProductInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSaclSecurityDescriptor();
// ntdll.RtlGetSaclSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSearchPath();
// ntdll.RtlGetSearchPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSecurityDescriptorRMControl();
// ntdll.RtlGetSecurityDescriptorRMControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSetBootStatusData();
// ntdll.RtlGetSetBootStatusData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSuiteMask();
// ntdll.RtlGetSuiteMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSystemPreferredUILanguages();
// ntdll.RtlGetSystemPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetSystemTimePrecise();
// ntdll.RtlGetSystemTimePrecise = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetThreadErrorMode();
// ntdll.RtlGetThreadErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetThreadLangIdByIndex();
// ntdll.RtlGetThreadLangIdByIndex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetThreadPreferredUILanguages();
// ntdll.RtlGetThreadPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetThreadWorkOnBehalfTicket();
// ntdll.RtlGetThreadWorkOnBehalfTicket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUILanguageInfo();
// ntdll.RtlGetUILanguageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUmsCompletionListEvent();
// ntdll.RtlGetUmsCompletionListEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUnloadEventTrace();
// ntdll.RtlGetUnloadEventTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUnloadEventTraceEx();
// ntdll.RtlGetUnloadEventTraceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUserInfoHeap();
// ntdll.RtlGetUserInfoHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetUserPreferredUILanguages();
// ntdll.RtlGetUserPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGetVersion();
// ntdll.RtlGetVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGrowFunctionTable();
// ntdll.RtlGrowFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlGuardCheckLongJumpTarget();
// ntdll.RtlGuardCheckLongJumpTarget = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlHashUnicodeString();
// ntdll.RtlHashUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlHeapTrkInitialize();
// ntdll.RtlHeapTrkInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIdentifierAuthoritySid();
// ntdll.RtlIdentifierAuthoritySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIdnToAscii();
// ntdll.RtlIdnToAscii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIdnToNameprepUnicode();
// ntdll.RtlIdnToNameprepUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIdnToUnicode();
// ntdll.RtlIdnToUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImageDirectoryEntryToData();
// ntdll.RtlImageDirectoryEntryToData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImageNtHeader();
// ntdll.RtlImageNtHeader = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImageNtHeaderEx();
// ntdll.RtlImageNtHeaderEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImageRvaToSection();
// ntdll.RtlImageRvaToSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImageRvaToVa();
// ntdll.RtlImageRvaToVa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImpersonateSelf();
// ntdll.RtlImpersonateSelf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlImpersonateSelfEx();
// ntdll.RtlImpersonateSelfEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitAnsiString();
// ntdll.RtlInitAnsiString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitAnsiStringEx();
// ntdll.RtlInitAnsiStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitBarrier();
// ntdll.RtlInitBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitCodePageTable();
// ntdll.RtlInitCodePageTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitEnumerationHashTable();
// ntdll.RtlInitEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitMemoryStream();
// ntdll.RtlInitMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitNlsTables();
// ntdll.RtlInitNlsTables = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitOutOfProcessMemoryStream();
// ntdll.RtlInitOutOfProcessMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitString();
// ntdll.RtlInitString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitStringEx();
// ntdll.RtlInitStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitStrongEnumerationHashTable();
// ntdll.RtlInitStrongEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitUnicodeString();
// ntdll.RtlInitUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitUnicodeStringEx();
// ntdll.RtlInitUnicodeStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitWeakEnumerationHashTable();
// ntdll.RtlInitWeakEnumerationHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeAtomPackage();
// ntdll.RtlInitializeAtomPackage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeBitMap();
// ntdll.RtlInitializeBitMap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeConditionVariable();
// ntdll.RtlInitializeConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeContext();
// ntdll.RtlInitializeContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeCriticalSection();
// ntdll.RtlInitializeCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeCriticalSectionAndSpinCount();
// ntdll.RtlInitializeCriticalSectionAndSpinCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeCriticalSectionEx();
// ntdll.RtlInitializeCriticalSectionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeExtendedContext();
// ntdll.RtlInitializeExtendedContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeGenericTable();
// ntdll.RtlInitializeGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeGenericTableAvl();
// ntdll.RtlInitializeGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeHandleTable();
// ntdll.RtlInitializeHandleTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeNtUserPfn();
// ntdll.RtlInitializeNtUserPfn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeRXact();
// ntdll.RtlInitializeRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeResource();
// ntdll.RtlInitializeResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeSListHead();
// ntdll.RtlInitializeSListHead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeSRWLock();
// ntdll.RtlInitializeSRWLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeSid();
// ntdll.RtlInitializeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInitializeSidEx();
// ntdll.RtlInitializeSidEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInsertElementGenericTable();
// ntdll.RtlInsertElementGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInsertElementGenericTableAvl();
// ntdll.RtlInsertElementGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInsertElementGenericTableFull();
// ntdll.RtlInsertElementGenericTableFull = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInsertElementGenericTableFullAvl();
// ntdll.RtlInsertElementGenericTableFullAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInsertEntryHashTable();
// ntdll.RtlInsertEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInstallFunctionTableCallback();
// ntdll.RtlInstallFunctionTableCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInt64ToUnicodeString();
// ntdll.RtlInt64ToUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIntegerToChar();
// ntdll.RtlIntegerToChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIntegerToUnicodeString();
// ntdll.RtlIntegerToUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedClearBitRun();
// ntdll.RtlInterlockedClearBitRun = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedFlushSList();
// ntdll.RtlInterlockedFlushSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedPopEntrySList();
// ntdll.RtlInterlockedPopEntrySList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedPushEntrySList();
// ntdll.RtlInterlockedPushEntrySList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedPushListSList();
// ntdll.RtlInterlockedPushListSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedPushListSListEx();
// ntdll.RtlInterlockedPushListSListEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInterlockedSetBitRun();
// ntdll.RtlInterlockedSetBitRun = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIoDecodeMemIoResource();
// ntdll.RtlIoDecodeMemIoResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIoEncodeMemIoResource();
// ntdll.RtlIoEncodeMemIoResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4AddressToStringA();
// ntdll.RtlIpv4AddressToStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4AddressToStringExA();
// ntdll.RtlIpv4AddressToStringExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4AddressToStringExW();
// ntdll.RtlIpv4AddressToStringExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4AddressToStringW();
// ntdll.RtlIpv4AddressToStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4StringToAddressA();
// ntdll.RtlIpv4StringToAddressA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4StringToAddressExA();
// ntdll.RtlIpv4StringToAddressExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4StringToAddressExW();
// ntdll.RtlIpv4StringToAddressExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv4StringToAddressW();
// ntdll.RtlIpv4StringToAddressW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6AddressToStringA();
// ntdll.RtlIpv6AddressToStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6AddressToStringExA();
// ntdll.RtlIpv6AddressToStringExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6AddressToStringExW();
// ntdll.RtlIpv6AddressToStringExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6AddressToStringW();
// ntdll.RtlIpv6AddressToStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6StringToAddressA();
// ntdll.RtlIpv6StringToAddressA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6StringToAddressExA();
// ntdll.RtlIpv6StringToAddressExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6StringToAddressExW();
// ntdll.RtlIpv6StringToAddressExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIpv6StringToAddressW();
// ntdll.RtlIpv6StringToAddressW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsActivationContextActive();
// ntdll.RtlIsActivationContextActive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsCapabilitySid();
// ntdll.RtlIsCapabilitySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsCriticalSectionLocked();
// ntdll.RtlIsCriticalSectionLocked = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsCriticalSectionLockedByThread();
// ntdll.RtlIsCriticalSectionLockedByThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsCurrentThreadAttachExempt();
// ntdll.RtlIsCurrentThreadAttachExempt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsDosDeviceName_U();
// ntdll.RtlIsDosDeviceName_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsGenericTableEmpty();
// ntdll.RtlIsGenericTableEmpty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsGenericTableEmptyAvl();
// ntdll.RtlIsGenericTableEmptyAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsLongPathAwareProcessByManifest();
// ntdll.RtlIsLongPathAwareProcessByManifest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsMultiSessionSku();
// ntdll.RtlIsMultiSessionSku = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsMultiUsersInSessionSku();
// ntdll.RtlIsMultiUsersInSessionSku = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsNameInExpression();
// ntdll.RtlIsNameInExpression = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsNameLegalDOS8Dot3();
// ntdll.RtlIsNameLegalDOS8Dot3 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsNormalizedString();
// ntdll.RtlIsNormalizedString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsPackageSid();
// ntdll.RtlIsPackageSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsParentOfChildAppContainer();
// ntdll.RtlIsParentOfChildAppContainer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsProcessorFeaturePresent();
// ntdll.RtlIsProcessorFeaturePresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsTextUnicode();
// ntdll.RtlIsTextUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsThreadWithinLoaderCallout();
// ntdll.RtlIsThreadWithinLoaderCallout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsUntrustedObject();
// ntdll.RtlIsUntrustedObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsValidHandle();
// ntdll.RtlIsValidHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsValidIndexHandle();
// ntdll.RtlIsValidIndexHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsValidLocaleName();
// ntdll.RtlIsValidLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlIsValidProcessTrustLabelSid();
// ntdll.RtlIsValidProcessTrustLabelSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlKnownExceptionFilter();
// ntdll.RtlKnownExceptionFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLCIDToCultureName();
// ntdll.RtlLCIDToCultureName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLargeIntegerToChar();
// ntdll.RtlLargeIntegerToChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLcidToLocaleName();
// ntdll.RtlLcidToLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLeaveCriticalSection();
// ntdll.RtlLeaveCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLengthRequiredSid();
// ntdll.RtlLengthRequiredSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLengthSecurityDescriptor();
// ntdll.RtlLengthSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLengthSid();
// ntdll.RtlLengthSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLengthSidAsUnicodeString();
// ntdll.RtlLengthSidAsUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLoadString();
// ntdll.RtlLoadString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLocalTimeToSystemTime();
// ntdll.RtlLocalTimeToSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLocaleNameToLcid();
// ntdll.RtlLocaleNameToLcid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLocateExtendedFeature();
// ntdll.RtlLocateExtendedFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLocateExtendedFeature2();
// ntdll.RtlLocateExtendedFeature2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLocateLegacyContext();
// ntdll.RtlLocateLegacyContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockBootStatusData();
// ntdll.RtlLockBootStatusData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockCurrentThread();
// ntdll.RtlLockCurrentThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockHeap();
// ntdll.RtlLockHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockMemoryBlockLookaside();
// ntdll.RtlLockMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockMemoryStreamRegion();
// ntdll.RtlLockMemoryStreamRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockMemoryZone();
// ntdll.RtlLockMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLockModuleSection();
// ntdll.RtlLockModuleSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLogStackBackTrace();
// ntdll.RtlLogStackBackTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupAtomInAtomTable();
// ntdll.RtlLookupAtomInAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupElementGenericTable();
// ntdll.RtlLookupElementGenericTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupElementGenericTableAvl();
// ntdll.RtlLookupElementGenericTableAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupElementGenericTableFull();
// ntdll.RtlLookupElementGenericTableFull = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupElementGenericTableFullAvl();
// ntdll.RtlLookupElementGenericTableFullAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupEntryHashTable();
// ntdll.RtlLookupEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupFunctionEntry();
// ntdll.RtlLookupFunctionEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupFunctionTable();
// ntdll.RtlLookupFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMakeSelfRelativeSD();
// ntdll.RtlMakeSelfRelativeSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMapGenericMask();
// ntdll.RtlMapGenericMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMapSecurityErrorToNtStatus();
// ntdll.RtlMapSecurityErrorToNtStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMoveMemory();
// ntdll.RtlMoveMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMultiAppendUnicodeStringBuffer();
// ntdll.RtlMultiAppendUnicodeStringBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMultiByteToUnicodeN();
// ntdll.RtlMultiByteToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMultiByteToUnicodeSize();
// ntdll.RtlMultiByteToUnicodeSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMultipleAllocateHeap();
// ntdll.RtlMultipleAllocateHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMultipleFreeHeap();
// ntdll.RtlMultipleFreeHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNewInstanceSecurityObject();
// ntdll.RtlNewInstanceSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNewSecurityGrantedAccess();
// ntdll.RtlNewSecurityGrantedAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNewSecurityObject();
// ntdll.RtlNewSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNewSecurityObjectEx();
// ntdll.RtlNewSecurityObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNewSecurityObjectWithMultipleInheritance();
// ntdll.RtlNewSecurityObjectWithMultipleInheritance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNormalizeProcessParams();
// ntdll.RtlNormalizeProcessParams = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNormalizeString();
// ntdll.RtlNormalizeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNtPathNameToDosPathName();
// ntdll.RtlNtPathNameToDosPathName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNtStatusToDosError();
// ntdll.RtlNtStatusToDosError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNtStatusToDosErrorNoTeb();
// ntdll.RtlNtStatusToDosErrorNoTeb = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNtdllName();
// ntdll.RtlNtdllName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberGenericTableElements();
// ntdll.RtlNumberGenericTableElements = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberGenericTableElementsAvl();
// ntdll.RtlNumberGenericTableElementsAvl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberOfClearBits();
// ntdll.RtlNumberOfClearBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberOfClearBitsInRange();
// ntdll.RtlNumberOfClearBitsInRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberOfSetBits();
// ntdll.RtlNumberOfSetBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberOfSetBitsInRange();
// ntdll.RtlNumberOfSetBitsInRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlNumberOfSetBitsUlongPtr();
// ntdll.RtlNumberOfSetBitsUlongPtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOemStringToUnicodeSize();
// ntdll.RtlOemStringToUnicodeSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOemStringToUnicodeString();
// ntdll.RtlOemStringToUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOemToUnicodeN();
// ntdll.RtlOemToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOpenCurrentUser();
// ntdll.RtlOpenCurrentUser = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOsDeploymentState();
// ntdll.RtlOsDeploymentState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlOwnerAcesPresent();
// ntdll.RtlOwnerAcesPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPcToFileHeader();
// ntdll.RtlPcToFileHeader = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPinAtomInAtomTable();
// ntdll.RtlPinAtomInAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPopFrame();
// ntdll.RtlPopFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPrefixString();
// ntdll.RtlPrefixString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPrefixUnicodeString();
// ntdll.RtlPrefixUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPrepareForProcessCloning();
// ntdll.RtlPrepareForProcessCloning = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlProcessFlsData();
// ntdll.RtlProcessFlsData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlProtectHeap();
// ntdll.RtlProtectHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPublishWnfStateData();
// ntdll.RtlPublishWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPushFrame();
// ntdll.RtlPushFrame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryActivationContextApplicationSettings();
// ntdll.RtlQueryActivationContextApplicationSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryAtomInAtomTable();
// ntdll.RtlQueryAtomInAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryCriticalSectionOwner();
// ntdll.RtlQueryCriticalSectionOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryDepthSList();
// ntdll.RtlQueryDepthSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryDynamicTimeZoneInformation();
// ntdll.RtlQueryDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryElevationFlags();
// ntdll.RtlQueryElevationFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryEnvironmentVariable();
// ntdll.RtlQueryEnvironmentVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryEnvironmentVariable_U();
// ntdll.RtlQueryEnvironmentVariable_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryHeapInformation();
// ntdll.RtlQueryHeapInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryInformationAcl();
// ntdll.RtlQueryInformationAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryInformationActivationContext();
// ntdll.RtlQueryInformationActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryInformationActiveActivationContext();
// ntdll.RtlQueryInformationActiveActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryInterfaceMemoryStream();
// ntdll.RtlQueryInterfaceMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryModuleInformation();
// ntdll.RtlQueryModuleInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryPackageClaims();
// ntdll.RtlQueryPackageClaims = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryPackageIdentity();
// ntdll.RtlQueryPackageIdentity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryPackageIdentityEx();
// ntdll.RtlQueryPackageIdentityEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryPerformanceCounter();
// ntdll.RtlQueryPerformanceCounter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryPerformanceFrequency();
// ntdll.RtlQueryPerformanceFrequency = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryProcessBackTraceInformation();
// ntdll.RtlQueryProcessBackTraceInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryProcessDebugInformation();
// ntdll.RtlQueryProcessDebugInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryProcessHeapInformation();
// ntdll.RtlQueryProcessHeapInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryProcessLockInformation();
// ntdll.RtlQueryProcessLockInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryProtectedPolicy();
// ntdll.RtlQueryProtectedPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryRegistryValues();
// ntdll.RtlQueryRegistryValues = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryRegistryValuesEx();
// ntdll.RtlQueryRegistryValuesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryResourcePolicy();
// ntdll.RtlQueryResourcePolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQuerySecurityObject();
// ntdll.RtlQuerySecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryTagHeap();
// ntdll.RtlQueryTagHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryThreadProfiling();
// ntdll.RtlQueryThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryTimeZoneInformation();
// ntdll.RtlQueryTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryUmsThreadInformation();
// ntdll.RtlQueryUmsThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryUnbiasedInterruptTime();
// ntdll.RtlQueryUnbiasedInterruptTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryValidationRunlevel();
// ntdll.RtlQueryValidationRunlevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryWnfMetaNotification();
// ntdll.RtlQueryWnfMetaNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryWnfStateData();
// ntdll.RtlQueryWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueryWnfStateDataWithExplicitScope();
// ntdll.RtlQueryWnfStateDataWithExplicitScope = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueueApcWow64Thread();
// ntdll.RtlQueueApcWow64Thread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlQueueWorkItem();
// ntdll.RtlQueueWorkItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRaiseException();
// ntdll.RtlRaiseException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRaiseStatus();
// ntdll.RtlRaiseStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRandom();
// ntdll.RtlRandom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRandomEx();
// ntdll.RtlRandomEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRbInsertNodeEx();
// ntdll.RtlRbInsertNodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRbRemoveNode();
// ntdll.RtlRbRemoveNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReAllocateHeap();
// ntdll.RtlReAllocateHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReadMemoryStream();
// ntdll.RtlReadMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReadOutOfProcessMemoryStream();
// ntdll.RtlReadOutOfProcessMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReadThreadProfilingData();
// ntdll.RtlReadThreadProfilingData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRealPredecessor();
// ntdll.RtlRealPredecessor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRealSuccessor();
// ntdll.RtlRealSuccessor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRegisterForWnfMetaNotification();
// ntdll.RtlRegisterForWnfMetaNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRegisterSecureMemoryCacheCallback();
// ntdll.RtlRegisterSecureMemoryCacheCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRegisterThreadWithCsrss();
// ntdll.RtlRegisterThreadWithCsrss = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRegisterWait();
// ntdll.RtlRegisterWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseActivationContext();
// ntdll.RtlReleaseActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseMemoryStream();
// ntdll.RtlReleaseMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleasePath();
// ntdll.RtlReleasePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleasePebLock();
// ntdll.RtlReleasePebLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleasePrivilege();
// ntdll.RtlReleasePrivilege = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseRelativeName();
// ntdll.RtlReleaseRelativeName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseResource();
// ntdll.RtlReleaseResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseSRWLockExclusive();
// ntdll.RtlReleaseSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReleaseSRWLockShared();
// ntdll.RtlReleaseSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRemoteCall();
// ntdll.RtlRemoteCall = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRemoveEntryHashTable();
// ntdll.RtlRemoveEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRemovePrivileges();
// ntdll.RtlRemovePrivileges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRemoveVectoredContinueHandler();
// ntdll.RtlRemoveVectoredContinueHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRemoveVectoredExceptionHandler();
// ntdll.RtlRemoveVectoredExceptionHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReplaceSidInSd();
// ntdll.RtlReplaceSidInSd = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReplaceSystemDirectoryInPath();
// ntdll.RtlReplaceSystemDirectoryInPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReportException();
// ntdll.RtlReportException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReportExceptionEx();
// ntdll.RtlReportExceptionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReportSilentProcessExit();
// ntdll.RtlReportSilentProcessExit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlReportSqmEscalation();
// ntdll.RtlReportSqmEscalation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlResetMemoryBlockLookaside();
// ntdll.RtlResetMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlResetMemoryZone();
// ntdll.RtlResetMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlResetNtUserPfn();
// ntdll.RtlResetNtUserPfn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlResetRtlTranslations();
// ntdll.RtlResetRtlTranslations = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRestoreBootStatusDefaults();
// ntdll.RtlRestoreBootStatusDefaults = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRestoreContext();
// ntdll.RtlRestoreContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRestoreLastWin32Error();
// ntdll.RtlRestoreLastWin32Error = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRetrieveNtUserPfn();
// ntdll.RtlRetrieveNtUserPfn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRevertMemoryStream();
// ntdll.RtlRevertMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunDecodeUnicodeString();
// ntdll.RtlRunDecodeUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunEncodeUnicodeString();
// ntdll.RtlRunEncodeUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunOnceBeginInitialize();
// ntdll.RtlRunOnceBeginInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunOnceComplete();
// ntdll.RtlRunOnceComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunOnceExecuteOnce();
// ntdll.RtlRunOnceExecuteOnce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRunOnceInitialize();
// ntdll.RtlRunOnceInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSecondsSince1970ToTime();
// ntdll.RtlSecondsSince1970ToTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSecondsSince1980ToTime();
// ntdll.RtlSecondsSince1980ToTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSeekMemoryStream();
// ntdll.RtlSeekMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSelfRelativeToAbsoluteSD();
// ntdll.RtlSelfRelativeToAbsoluteSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSelfRelativeToAbsoluteSD2();
// ntdll.RtlSelfRelativeToAbsoluteSD2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSendMsgToSm();
// ntdll.RtlSendMsgToSm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetAllBits();
// ntdll.RtlSetAllBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetAttributesSecurityDescriptor();
// ntdll.RtlSetAttributesSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetBit();
// ntdll.RtlSetBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetBits();
// ntdll.RtlSetBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetControlSecurityDescriptor();
// ntdll.RtlSetControlSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetCriticalSectionSpinCount();
// ntdll.RtlSetCriticalSectionSpinCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetCurrentDirectory_U();
// ntdll.RtlSetCurrentDirectory_U = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetCurrentEnvironment();
// ntdll.RtlSetCurrentEnvironment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetCurrentTransaction();
// ntdll.RtlSetCurrentTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetDaclSecurityDescriptor();
// ntdll.RtlSetDaclSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetDynamicTimeZoneInformation();
// ntdll.RtlSetDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetEnvironmentStrings();
// ntdll.RtlSetEnvironmentStrings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetEnvironmentVar();
// ntdll.RtlSetEnvironmentVar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetEnvironmentVariable();
// ntdll.RtlSetEnvironmentVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetExtendedFeaturesMask();
// ntdll.RtlSetExtendedFeaturesMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetGroupSecurityDescriptor();
// ntdll.RtlSetGroupSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetHeapInformation();
// ntdll.RtlSetHeapInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetInformationAcl();
// ntdll.RtlSetInformationAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetIoCompletionCallback();
// ntdll.RtlSetIoCompletionCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetLastWin32Error();
// ntdll.RtlSetLastWin32Error = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetLastWin32ErrorAndNtStatusFromNtStatus();
// ntdll.RtlSetLastWin32ErrorAndNtStatusFromNtStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetMemoryStreamSize();
// ntdll.RtlSetMemoryStreamSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetOwnerSecurityDescriptor();
// ntdll.RtlSetOwnerSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetPortableOperatingSystem();
// ntdll.RtlSetPortableOperatingSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetProcessDebugInformation();
// ntdll.RtlSetProcessDebugInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetProcessIsCritical();
// ntdll.RtlSetProcessIsCritical = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetProcessPreferredUILanguages();
// ntdll.RtlSetProcessPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetProtectedPolicy();
// ntdll.RtlSetProtectedPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetSaclSecurityDescriptor();
// ntdll.RtlSetSaclSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetSearchPathMode();
// ntdll.RtlSetSearchPathMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetSecurityDescriptorRMControl();
// ntdll.RtlSetSecurityDescriptorRMControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetSecurityObject();
// ntdll.RtlSetSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetSecurityObjectEx();
// ntdll.RtlSetSecurityObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadErrorMode();
// ntdll.RtlSetThreadErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadIsCritical();
// ntdll.RtlSetThreadIsCritical = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadPoolStartFunc();
// ntdll.RtlSetThreadPoolStartFunc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadPreferredUILanguages();
// ntdll.RtlSetThreadPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadSubProcessTag();
// ntdll.RtlSetThreadSubProcessTag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetThreadWorkOnBehalfTicket();
// ntdll.RtlSetThreadWorkOnBehalfTicket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetTimeZoneInformation();
// ntdll.RtlSetTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetTimer();
// ntdll.RtlSetTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetUmsThreadInformation();
// ntdll.RtlSetUmsThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetUnhandledExceptionFilter();
// ntdll.RtlSetUnhandledExceptionFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetUserFlagsHeap();
// ntdll.RtlSetUserFlagsHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSetUserValueHeap();
// ntdll.RtlSetUserValueHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidDominates();
// ntdll.RtlSidDominates = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidDominatesForTrust();
// ntdll.RtlSidDominatesForTrust = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidEqualLevel();
// ntdll.RtlSidEqualLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidHashInitialize();
// ntdll.RtlSidHashInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidHashLookup();
// ntdll.RtlSidHashLookup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSidIsHigherLevel();
// ntdll.RtlSidIsHigherLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSizeHeap();
// ntdll.RtlSizeHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSleepConditionVariableCS();
// ntdll.RtlSleepConditionVariableCS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSleepConditionVariableSRW();
// ntdll.RtlSleepConditionVariableSRW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxAreAllClear();
// ntdll.RtlSparseBitmapCtxAreAllClear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxAreAllSet();
// ntdll.RtlSparseBitmapCtxAreAllSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxCheckBit();
// ntdll.RtlSparseBitmapCtxCheckBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxCleanup();
// ntdll.RtlSparseBitmapCtxCleanup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxClearBits();
// ntdll.RtlSparseBitmapCtxClearBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxClearBitsEx();
// ntdll.RtlSparseBitmapCtxClearBitsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxCountBitsSet();
// ntdll.RtlSparseBitmapCtxCountBitsSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxFindNextBitSet();
// ntdll.RtlSparseBitmapCtxFindNextBitSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxFindSetRuns();
// ntdll.RtlSparseBitmapCtxFindSetRuns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxInitialize();
// ntdll.RtlSparseBitmapCtxInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxMetadataForBit();
// ntdll.RtlSparseBitmapCtxMetadataForBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxOrBitmap();
// ntdll.RtlSparseBitmapCtxOrBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxPrepareBits();
// ntdll.RtlSparseBitmapCtxPrepareBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxSetBits();
// ntdll.RtlSparseBitmapCtxSetBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxSetBitsEx();
// ntdll.RtlSparseBitmapCtxSetBitsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxStart();
// ntdll.RtlSparseBitmapCtxStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapCtxSubtractBitmap();
// ntdll.RtlSparseBitmapCtxSubtractBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSparseBitmapEnumerateBitmap();
// ntdll.RtlSparseBitmapEnumerateBitmap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSplay();
// ntdll.RtlSplay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlStartRXact();
// ntdll.RtlStartRXact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlStatMemoryStream();
// ntdll.RtlStatMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlStringFromGUID();
// ntdll.RtlStringFromGUID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlStringFromGUIDEx();
// ntdll.RtlStringFromGUIDEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlStronglyEnumerateEntryHashTable();
// ntdll.RtlStronglyEnumerateEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSubAuthorityCountSid();
// ntdll.RtlSubAuthorityCountSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSubAuthoritySid();
// ntdll.RtlSubAuthoritySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSubscribeWnfStateChangeNotification();
// ntdll.RtlSubscribeWnfStateChangeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSubtreePredecessor();
// ntdll.RtlSubtreePredecessor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSubtreeSuccessor();
// ntdll.RtlSubtreeSuccessor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSwitchedVVI();
// ntdll.RtlSwitchedVVI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlSystemTimeToLocalTime();
// ntdll.RtlSystemTimeToLocalTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTestAndPublishWnfStateData();
// ntdll.RtlTestAndPublishWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTestBit();
// ntdll.RtlTestBit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTestProtectedAccess();
// ntdll.RtlTestProtectedAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTimeFieldsToTime();
// ntdll.RtlTimeFieldsToTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTimeToElapsedTimeFields();
// ntdll.RtlTimeToElapsedTimeFields = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTimeToSecondsSince1970();
// ntdll.RtlTimeToSecondsSince1970 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTimeToSecondsSince1980();
// ntdll.RtlTimeToSecondsSince1980 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTimeToTimeFields();
// ntdll.RtlTimeToTimeFields = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseAdd();
// ntdll.RtlTraceDatabaseAdd = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseCreate();
// ntdll.RtlTraceDatabaseCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseDestroy();
// ntdll.RtlTraceDatabaseDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseEnumerate();
// ntdll.RtlTraceDatabaseEnumerate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseFind();
// ntdll.RtlTraceDatabaseFind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseLock();
// ntdll.RtlTraceDatabaseLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseUnlock();
// ntdll.RtlTraceDatabaseUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTraceDatabaseValidate();
// ntdll.RtlTraceDatabaseValidate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTryAcquirePebLock();
// ntdll.RtlTryAcquirePebLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTryAcquireSRWLockExclusive();
// ntdll.RtlTryAcquireSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTryAcquireSRWLockShared();
// ntdll.RtlTryAcquireSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTryConvertSRWLockSharedToExclusiveOrRelease();
// ntdll.RtlTryConvertSRWLockSharedToExclusiveOrRelease = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlTryEnterCriticalSection();
// ntdll.RtlTryEnterCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUTF8ToUnicodeN();
// ntdll.RtlUTF8ToUnicodeN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUmsThreadYield();
// ntdll.RtlUmsThreadYield = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnhandledExceptionFilter();
// ntdll.RtlUnhandledExceptionFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnhandledExceptionFilter2();
// ntdll.RtlUnhandledExceptionFilter2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToAnsiSize();
// ntdll.RtlUnicodeStringToAnsiSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToAnsiString();
// ntdll.RtlUnicodeStringToAnsiString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToCountedOemString();
// ntdll.RtlUnicodeStringToCountedOemString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToInteger();
// ntdll.RtlUnicodeStringToInteger = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToOemSize();
// ntdll.RtlUnicodeStringToOemSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeStringToOemString();
// ntdll.RtlUnicodeStringToOemString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeToCustomCPN();
// ntdll.RtlUnicodeToCustomCPN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeToMultiByteN();
// ntdll.RtlUnicodeToMultiByteN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeToMultiByteSize();
// ntdll.RtlUnicodeToMultiByteSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeToOemN();
// ntdll.RtlUnicodeToOemN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnicodeToUTF8N();
// ntdll.RtlUnicodeToUTF8N = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUniform();
// ntdll.RtlUniform = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockBootStatusData();
// ntdll.RtlUnlockBootStatusData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockCurrentThread();
// ntdll.RtlUnlockCurrentThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockHeap();
// ntdll.RtlUnlockHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockMemoryBlockLookaside();
// ntdll.RtlUnlockMemoryBlockLookaside = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockMemoryStreamRegion();
// ntdll.RtlUnlockMemoryStreamRegion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockMemoryZone();
// ntdll.RtlUnlockMemoryZone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnlockModuleSection();
// ntdll.RtlUnlockModuleSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnsubscribeWnfNotificationWaitForCompletion();
// ntdll.RtlUnsubscribeWnfNotificationWaitForCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnsubscribeWnfNotificationWithCompletionCallback();
// ntdll.RtlUnsubscribeWnfNotificationWithCompletionCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnsubscribeWnfStateChangeNotification();
// ntdll.RtlUnsubscribeWnfStateChangeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnwind();
// ntdll.RtlUnwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnwindEx();
// ntdll.RtlUnwindEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeChar();
// ntdll.RtlUpcaseUnicodeChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeString();
// ntdll.RtlUpcaseUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeStringToAnsiString();
// ntdll.RtlUpcaseUnicodeStringToAnsiString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeStringToCountedOemString();
// ntdll.RtlUpcaseUnicodeStringToCountedOemString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeStringToOemString();
// ntdll.RtlUpcaseUnicodeStringToOemString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeToCustomCPN();
// ntdll.RtlUpcaseUnicodeToCustomCPN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeToMultiByteN();
// ntdll.RtlUpcaseUnicodeToMultiByteN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpcaseUnicodeToOemN();
// ntdll.RtlUpcaseUnicodeToOemN = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpdateClonedCriticalSection();
// ntdll.RtlUpdateClonedCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpdateClonedSRWLock();
// ntdll.RtlUpdateClonedSRWLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpdateTimer();
// ntdll.RtlUpdateTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpperChar();
// ntdll.RtlUpperChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUpperString();
// ntdll.RtlUpperString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUserThreadStart();
// ntdll.RtlUserThreadStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidAcl();
// ntdll.RtlValidAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidProcessProtection();
// ntdll.RtlValidProcessProtection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidRelativeSecurityDescriptor();
// ntdll.RtlValidRelativeSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidSecurityDescriptor();
// ntdll.RtlValidSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidSid();
// ntdll.RtlValidSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidateHeap();
// ntdll.RtlValidateHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidateProcessHeaps();
// ntdll.RtlValidateProcessHeaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlValidateUnicodeString();
// ntdll.RtlValidateUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlVerifyVersionInfo();
// ntdll.RtlVerifyVersionInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlVirtualUnwind();
// ntdll.RtlVirtualUnwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWaitForWnfMetaNotification();
// ntdll.RtlWaitForWnfMetaNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWaitOnAddress();
// ntdll.RtlWaitOnAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeAddressAll();
// ntdll.RtlWakeAddressAll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeAddressAllNoFence();
// ntdll.RtlWakeAddressAllNoFence = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeAddressSingle();
// ntdll.RtlWakeAddressSingle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeAddressSingleNoFence();
// ntdll.RtlWakeAddressSingleNoFence = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeAllConditionVariable();
// ntdll.RtlWakeAllConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWakeConditionVariable();
// ntdll.RtlWakeConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWalkFrameChain();
// ntdll.RtlWalkFrameChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWalkHeap();
// ntdll.RtlWalkHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWeaklyEnumerateEntryHashTable();
// ntdll.RtlWeaklyEnumerateEntryHashTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWerpReportException();
// ntdll.RtlWerpReportException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWnfCompareChangeStamp();
// ntdll.RtlWnfCompareChangeStamp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWnfDllUnloadCallback();
// ntdll.RtlWnfDllUnloadCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64CallFunction64();
// ntdll.RtlWow64CallFunction64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64EnableFsRedirection();
// ntdll.RtlWow64EnableFsRedirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64EnableFsRedirectionEx();
// ntdll.RtlWow64EnableFsRedirectionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetCpuAreaInfo();
// ntdll.RtlWow64GetCpuAreaInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetCurrentCpuArea();
// ntdll.RtlWow64GetCurrentCpuArea = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetCurrentMachine();
// ntdll.RtlWow64GetCurrentMachine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetProcessMachines();
// ntdll.RtlWow64GetProcessMachines = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetThreadContext();
// ntdll.RtlWow64GetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64GetThreadSelectorEntry();
// ntdll.RtlWow64GetThreadSelectorEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64IsWowGuestMachineSupported();
// ntdll.RtlWow64IsWowGuestMachineSupported = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64LogMessageInEventLogger();
// ntdll.RtlWow64LogMessageInEventLogger = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64SetThreadContext();
// ntdll.RtlWow64SetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64SuspendThread();
// ntdll.RtlWow64SuspendThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWow64SuspendThreadEx();
// ntdll.RtlWow64SuspendThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWriteMemoryStream();
// ntdll.RtlWriteMemoryStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlWriteRegistryValue();
// ntdll.RtlWriteRegistryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlZeroHeap();
// ntdll.RtlZeroHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlZeroMemory();
// ntdll.RtlZeroMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlZombifyActivationContext();
// ntdll.RtlZombifyActivationContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpApplyLengthFunction();
// ntdll.RtlpApplyLengthFunction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpCheckDynamicTimeZoneInformation();
// ntdll.RtlpCheckDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpCleanupRegistryKeys();
// ntdll.RtlpCleanupRegistryKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpConvertAbsoluteToRelativeSecurityAttribute();
// ntdll.RtlpConvertAbsoluteToRelativeSecurityAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpConvertCultureNamesToLCIDs();
// ntdll.RtlpConvertCultureNamesToLCIDs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpConvertLCIDsToCultureNames();
// ntdll.RtlpConvertLCIDsToCultureNames = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpConvertRelativeToAbsoluteSecurityAttribute();
// ntdll.RtlpConvertRelativeToAbsoluteSecurityAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpCreateProcessRegistryInfo();
// ntdll.RtlpCreateProcessRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpEnsureBufferSize();
// ntdll.RtlpEnsureBufferSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpExecuteUmsThread();
// ntdll.RtlpExecuteUmsThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpFreezeTimeBias();
// ntdll.RtlpFreezeTimeBias = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpGetDeviceFamilyInfoEnum();
// ntdll.RtlpGetDeviceFamilyInfoEnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpGetLCIDFromLangInfoNode();
// ntdll.RtlpGetLCIDFromLangInfoNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpGetNameFromLangInfoNode();
// ntdll.RtlpGetNameFromLangInfoNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpGetSystemDefaultUILanguage();
// ntdll.RtlpGetSystemDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpGetUserOrMachineUILanguage4NLS();
// ntdll.RtlpGetUserOrMachineUILanguage4NLS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpInitializeLangRegistryInfo();
// ntdll.RtlpInitializeLangRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpIsQualifiedLanguage();
// ntdll.RtlpIsQualifiedLanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpLoadMachineUIByPolicy();
// ntdll.RtlpLoadMachineUIByPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpLoadUserUIByPolicy();
// ntdll.RtlpLoadUserUIByPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpMergeSecurityAttributeInformation();
// ntdll.RtlpMergeSecurityAttributeInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpMuiFreeLangRegistryInfo();
// ntdll.RtlpMuiFreeLangRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpMuiRegCreateRegistryInfo();
// ntdll.RtlpMuiRegCreateRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpMuiRegFreeRegistryInfo();
// ntdll.RtlpMuiRegFreeRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpMuiRegLoadRegistryInfo();
// ntdll.RtlpMuiRegLoadRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNotOwnerCriticalSection();
// ntdll.RtlpNotOwnerCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtCreateKey();
// ntdll.RtlpNtCreateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtEnumerateSubKey();
// ntdll.RtlpNtEnumerateSubKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtMakeTemporaryKey();
// ntdll.RtlpNtMakeTemporaryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtOpenKey();
// ntdll.RtlpNtOpenKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtQueryValueKey();
// ntdll.RtlpNtQueryValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpNtSetValueKey();
// ntdll.RtlpNtSetValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpQueryDefaultUILanguage();
// ntdll.RtlpQueryDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpQueryProcessDebugInformationFromWow64();
// ntdll.RtlpQueryProcessDebugInformationFromWow64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpRefreshCachedUILanguage();
// ntdll.RtlpRefreshCachedUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpSetInstallLanguage();
// ntdll.RtlpSetInstallLanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpSetPreferredUILanguages();
// ntdll.RtlpSetPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpSetUserPreferredUILanguages();
// ntdll.RtlpSetUserPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpUmsExecuteYieldThreadEnd();
// ntdll.RtlpUmsExecuteYieldThreadEnd = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpUmsThreadYield();
// ntdll.RtlpUmsThreadYield = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpUnWaitCriticalSection();
// ntdll.RtlpUnWaitCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpVerifyAndCommitUILanguageSettings();
// ntdll.RtlpVerifyAndCommitUILanguageSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlpWaitForCriticalSection();
// ntdll.RtlpWaitForCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlxAnsiStringToUnicodeSize();
// ntdll.RtlxAnsiStringToUnicodeSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlxOemStringToUnicodeSize();
// ntdll.RtlxOemStringToUnicodeSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlxUnicodeStringToAnsiSize();
// ntdll.RtlxUnicodeStringToAnsiSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlxUnicodeStringToOemSize();
// ntdll.RtlxUnicodeStringToOemSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SbExecuteProcedure();
// ntdll.SbExecuteProcedure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SbSelectProcedure();
// ntdll.SbSelectProcedure = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShipAssert();
// ntdll.ShipAssert = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShipAssertGetBufferInfo();
// ntdll.ShipAssertGetBufferInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShipAssertMsgA();
// ntdll.ShipAssertMsgA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShipAssertMsgW();
// ntdll.ShipAssertMsgW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocAlpcCompletion();
// ntdll.TpAllocAlpcCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocAlpcCompletionEx();
// ntdll.TpAllocAlpcCompletionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocCleanupGroup();
// ntdll.TpAllocCleanupGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocIoCompletion();
// ntdll.TpAllocIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocJobNotification();
// ntdll.TpAllocJobNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocPool();
// ntdll.TpAllocPool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocTimer();
// ntdll.TpAllocTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocWait();
// ntdll.TpAllocWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAllocWork();
// ntdll.TpAllocWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAlpcRegisterCompletionList();
// ntdll.TpAlpcRegisterCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpAlpcUnregisterCompletionList();
// ntdll.TpAlpcUnregisterCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackDetectedUnrecoverableError();
// ntdll.TpCallbackDetectedUnrecoverableError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackIndependent();
// ntdll.TpCallbackIndependent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackLeaveCriticalSectionOnCompletion();
// ntdll.TpCallbackLeaveCriticalSectionOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackMayRunLong();
// ntdll.TpCallbackMayRunLong = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackReleaseMutexOnCompletion();
// ntdll.TpCallbackReleaseMutexOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackReleaseSemaphoreOnCompletion();
// ntdll.TpCallbackReleaseSemaphoreOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackSendAlpcMessageOnCompletion();
// ntdll.TpCallbackSendAlpcMessageOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackSendPendingAlpcMessage();
// ntdll.TpCallbackSendPendingAlpcMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackSetEventOnCompletion();
// ntdll.TpCallbackSetEventOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCallbackUnloadDllOnCompletion();
// ntdll.TpCallbackUnloadDllOnCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCancelAsyncIoOperation();
// ntdll.TpCancelAsyncIoOperation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCaptureCaller();
// ntdll.TpCaptureCaller = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpCheckTerminateWorker();
// ntdll.TpCheckTerminateWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpDbgDumpHeapUsage();
// ntdll.TpDbgDumpHeapUsage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpDbgSetLogRoutine();
// ntdll.TpDbgSetLogRoutine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpDisablePoolCallbackChecks();
// ntdll.TpDisablePoolCallbackChecks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpDisassociateCallback();
// ntdll.TpDisassociateCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpIsTimerSet();
// ntdll.TpIsTimerSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpPostWork();
// ntdll.TpPostWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpQueryPoolStackInformation();
// ntdll.TpQueryPoolStackInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseAlpcCompletion();
// ntdll.TpReleaseAlpcCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseCleanupGroup();
// ntdll.TpReleaseCleanupGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseCleanupGroupMembers();
// ntdll.TpReleaseCleanupGroupMembers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseIoCompletion();
// ntdll.TpReleaseIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseJobNotification();
// ntdll.TpReleaseJobNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleasePool();
// ntdll.TpReleasePool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseTimer();
// ntdll.TpReleaseTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseWait();
// ntdll.TpReleaseWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpReleaseWork();
// ntdll.TpReleaseWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetDefaultPoolMaxThreads();
// ntdll.TpSetDefaultPoolMaxThreads = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetDefaultPoolStackInformation();
// ntdll.TpSetDefaultPoolStackInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolMaxThreads();
// ntdll.TpSetPoolMaxThreads = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolMaxThreadsSoftLimit();
// ntdll.TpSetPoolMaxThreadsSoftLimit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolMinThreads();
// ntdll.TpSetPoolMinThreads = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolStackInformation();
// ntdll.TpSetPoolStackInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolThreadBasePriority();
// ntdll.TpSetPoolThreadBasePriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetPoolWorkerThreadIdleTimeout();
// ntdll.TpSetPoolWorkerThreadIdleTimeout = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetTimer();
// ntdll.TpSetTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetTimerEx();
// ntdll.TpSetTimerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetWait();
// ntdll.TpSetWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSetWaitEx();
// ntdll.TpSetWaitEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpSimpleTryPost();
// ntdll.TpSimpleTryPost = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpStartAsyncIoOperation();
// ntdll.TpStartAsyncIoOperation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpTimerOutstandingCallbackCount();
// ntdll.TpTimerOutstandingCallbackCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpTrimPools();
// ntdll.TpTrimPools = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForAlpcCompletion();
// ntdll.TpWaitForAlpcCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForIoCompletion();
// ntdll.TpWaitForIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForJobNotification();
// ntdll.TpWaitForJobNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForTimer();
// ntdll.TpWaitForTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForWait();
// ntdll.TpWaitForWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TpWaitForWork();
// ntdll.TpWaitForWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerSetConditionMask();
// ntdll.VerSetConditionMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerReportSQMEvent();
// ntdll.WerReportSQMEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmAddToAverageDWORD();
// ntdll.WinSqmAddToAverageDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmAddToStream();
// ntdll.WinSqmAddToStream = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmAddToStreamEx();
// ntdll.WinSqmAddToStreamEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCheckEscalationAddToStreamEx();
// ntdll.WinSqmCheckEscalationAddToStreamEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCheckEscalationSetDWORD();
// ntdll.WinSqmCheckEscalationSetDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCheckEscalationSetDWORD64();
// ntdll.WinSqmCheckEscalationSetDWORD64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCheckEscalationSetString();
// ntdll.WinSqmCheckEscalationSetString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCommonDatapointDelete();
// ntdll.WinSqmCommonDatapointDelete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCommonDatapointSetDWORD();
// ntdll.WinSqmCommonDatapointSetDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCommonDatapointSetDWORD64();
// ntdll.WinSqmCommonDatapointSetDWORD64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCommonDatapointSetStreamEx();
// ntdll.WinSqmCommonDatapointSetStreamEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmCommonDatapointSetString();
// ntdll.WinSqmCommonDatapointSetString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmEndSession();
// ntdll.WinSqmEndSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmEventEnabled();
// ntdll.WinSqmEventEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmEventWrite();
// ntdll.WinSqmEventWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmGetEscalationRuleStatus();
// ntdll.WinSqmGetEscalationRuleStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmGetInstrumentationProperty();
// ntdll.WinSqmGetInstrumentationProperty = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmIncrementDWORD();
// ntdll.WinSqmIncrementDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmIsOptedIn();
// ntdll.WinSqmIsOptedIn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmIsOptedInEx();
// ntdll.WinSqmIsOptedInEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmIsSessionDisabled();
// ntdll.WinSqmIsSessionDisabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetDWORD();
// ntdll.WinSqmSetDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetDWORD64();
// ntdll.WinSqmSetDWORD64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetEscalationInfo();
// ntdll.WinSqmSetEscalationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetIfMaxDWORD();
// ntdll.WinSqmSetIfMaxDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetIfMinDWORD();
// ntdll.WinSqmSetIfMinDWORD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmSetString();
// ntdll.WinSqmSetString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmStartSession();
// ntdll.WinSqmStartSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmStartSessionForPartner();
// ntdll.WinSqmStartSessionForPartner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinSqmStartSqmOptinListener();
// ntdll.WinSqmStartSqmOptinListener = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAcceptConnectPort();
// ntdll.ZwAcceptConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheck();
// ntdll.ZwAccessCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckAndAuditAlarm();
// ntdll.ZwAccessCheckAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckByType();
// ntdll.ZwAccessCheckByType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckByTypeAndAuditAlarm();
// ntdll.ZwAccessCheckByTypeAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckByTypeResultList();
// ntdll.ZwAccessCheckByTypeResultList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckByTypeResultListAndAuditAlarm();
// ntdll.ZwAccessCheckByTypeResultListAndAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAccessCheckByTypeResultListAndAuditAlarmByHandle();
// ntdll.ZwAccessCheckByTypeResultListAndAuditAlarmByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAddAtom();
// ntdll.ZwAddAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAddAtomEx();
// ntdll.ZwAddAtomEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAddBootEntry();
// ntdll.ZwAddBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAddDriverEntry();
// ntdll.ZwAddDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAdjustGroupsToken();
// ntdll.ZwAdjustGroupsToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAdjustPrivilegesToken();
// ntdll.ZwAdjustPrivilegesToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAdjustTokenClaimsAndDeviceGroups();
// ntdll.ZwAdjustTokenClaimsAndDeviceGroups = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlertResumeThread();
// ntdll.ZwAlertResumeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlertThread();
// ntdll.ZwAlertThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlertThreadByThreadId();
// ntdll.ZwAlertThreadByThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAllocateLocallyUniqueId();
// ntdll.ZwAllocateLocallyUniqueId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAllocateReserveObject();
// ntdll.ZwAllocateReserveObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAllocateUserPhysicalPages();
// ntdll.ZwAllocateUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAllocateUuids();
// ntdll.ZwAllocateUuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAllocateVirtualMemory();
// ntdll.ZwAllocateVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcAcceptConnectPort();
// ntdll.ZwAlpcAcceptConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCancelMessage();
// ntdll.ZwAlpcCancelMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcConnectPort();
// ntdll.ZwAlpcConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcConnectPortEx();
// ntdll.ZwAlpcConnectPortEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCreatePort();
// ntdll.ZwAlpcCreatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCreatePortSection();
// ntdll.ZwAlpcCreatePortSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCreateResourceReserve();
// ntdll.ZwAlpcCreateResourceReserve = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCreateSectionView();
// ntdll.ZwAlpcCreateSectionView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcCreateSecurityContext();
// ntdll.ZwAlpcCreateSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcDeletePortSection();
// ntdll.ZwAlpcDeletePortSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcDeleteResourceReserve();
// ntdll.ZwAlpcDeleteResourceReserve = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcDeleteSectionView();
// ntdll.ZwAlpcDeleteSectionView = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcDeleteSecurityContext();
// ntdll.ZwAlpcDeleteSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcDisconnectPort();
// ntdll.ZwAlpcDisconnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcImpersonateClientContainerOfPort();
// ntdll.ZwAlpcImpersonateClientContainerOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcImpersonateClientOfPort();
// ntdll.ZwAlpcImpersonateClientOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcOpenSenderProcess();
// ntdll.ZwAlpcOpenSenderProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcOpenSenderThread();
// ntdll.ZwAlpcOpenSenderThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcQueryInformation();
// ntdll.ZwAlpcQueryInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcQueryInformationMessage();
// ntdll.ZwAlpcQueryInformationMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcRevokeSecurityContext();
// ntdll.ZwAlpcRevokeSecurityContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcSendWaitReceivePort();
// ntdll.ZwAlpcSendWaitReceivePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAlpcSetInformation();
// ntdll.ZwAlpcSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwApphelpCacheControl();
// ntdll.ZwApphelpCacheControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAreMappedFilesTheSame();
// ntdll.ZwAreMappedFilesTheSame = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAssignProcessToJobObject();
// ntdll.ZwAssignProcessToJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwAssociateWaitCompletionPacket();
// ntdll.ZwAssociateWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCallbackReturn();
// ntdll.ZwCallbackReturn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelIoFile();
// ntdll.ZwCancelIoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelIoFileEx();
// ntdll.ZwCancelIoFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelSynchronousIoFile();
// ntdll.ZwCancelSynchronousIoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelTimer();
// ntdll.ZwCancelTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelTimer2();
// ntdll.ZwCancelTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCancelWaitCompletionPacket();
// ntdll.ZwCancelWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwClearEvent();
// ntdll.ZwClearEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwClose();
// ntdll.ZwClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCloseObjectAuditAlarm();
// ntdll.ZwCloseObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCommitComplete();
// ntdll.ZwCommitComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCommitEnlistment();
// ntdll.ZwCommitEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCommitRegistryTransaction();
// ntdll.ZwCommitRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCommitTransaction();
// ntdll.ZwCommitTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCompactKeys();
// ntdll.ZwCompactKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCompareObjects();
// ntdll.ZwCompareObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCompareTokens();
// ntdll.ZwCompareTokens = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCompleteConnectPort();
// ntdll.ZwCompleteConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCompressKey();
// ntdll.ZwCompressKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwConnectPort();
// ntdll.ZwConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwContinue();
// ntdll.ZwContinue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateDebugObject();
// ntdll.ZwCreateDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateDirectoryObject();
// ntdll.ZwCreateDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateDirectoryObjectEx();
// ntdll.ZwCreateDirectoryObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateEnclave();
// ntdll.ZwCreateEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateEnlistment();
// ntdll.ZwCreateEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateEvent();
// ntdll.ZwCreateEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateEventPair();
// ntdll.ZwCreateEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateFile();
// ntdll.ZwCreateFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateIRTimer();
// ntdll.ZwCreateIRTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateIoCompletion();
// ntdll.ZwCreateIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateJobObject();
// ntdll.ZwCreateJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateJobSet();
// ntdll.ZwCreateJobSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateKey();
// ntdll.ZwCreateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateKeyTransacted();
// ntdll.ZwCreateKeyTransacted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateKeyedEvent();
// ntdll.ZwCreateKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateLowBoxToken();
// ntdll.ZwCreateLowBoxToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateMailslotFile();
// ntdll.ZwCreateMailslotFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateMutant();
// ntdll.ZwCreateMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateNamedPipeFile();
// ntdll.ZwCreateNamedPipeFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreatePagingFile();
// ntdll.ZwCreatePagingFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreatePartition();
// ntdll.ZwCreatePartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreatePort();
// ntdll.ZwCreatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreatePrivateNamespace();
// ntdll.ZwCreatePrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateProcess();
// ntdll.ZwCreateProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateProcessEx();
// ntdll.ZwCreateProcessEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateProfile();
// ntdll.ZwCreateProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateProfileEx();
// ntdll.ZwCreateProfileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateRegistryTransaction();
// ntdll.ZwCreateRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateResourceManager();
// ntdll.ZwCreateResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateSection();
// ntdll.ZwCreateSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateSemaphore();
// ntdll.ZwCreateSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateSymbolicLinkObject();
// ntdll.ZwCreateSymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateThread();
// ntdll.ZwCreateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateThreadEx();
// ntdll.ZwCreateThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateTimer();
// ntdll.ZwCreateTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateTimer2();
// ntdll.ZwCreateTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateToken();
// ntdll.ZwCreateToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateTokenEx();
// ntdll.ZwCreateTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateTransaction();
// ntdll.ZwCreateTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateTransactionManager();
// ntdll.ZwCreateTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateUserProcess();
// ntdll.ZwCreateUserProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateWaitCompletionPacket();
// ntdll.ZwCreateWaitCompletionPacket = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateWaitablePort();
// ntdll.ZwCreateWaitablePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateWnfStateName();
// ntdll.ZwCreateWnfStateName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwCreateWorkerFactory();
// ntdll.ZwCreateWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDebugActiveProcess();
// ntdll.ZwDebugActiveProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDebugContinue();
// ntdll.ZwDebugContinue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDelayExecution();
// ntdll.ZwDelayExecution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteAtom();
// ntdll.ZwDeleteAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteBootEntry();
// ntdll.ZwDeleteBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteDriverEntry();
// ntdll.ZwDeleteDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteFile();
// ntdll.ZwDeleteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteKey();
// ntdll.ZwDeleteKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteObjectAuditAlarm();
// ntdll.ZwDeleteObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeletePrivateNamespace();
// ntdll.ZwDeletePrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteValueKey();
// ntdll.ZwDeleteValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteWnfStateData();
// ntdll.ZwDeleteWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeleteWnfStateName();
// ntdll.ZwDeleteWnfStateName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDeviceIoControlFile();
// ntdll.ZwDeviceIoControlFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDisableLastKnownGood();
// ntdll.ZwDisableLastKnownGood = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDisplayString();
// ntdll.ZwDisplayString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDrawText();
// ntdll.ZwDrawText = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDuplicateObject();
// ntdll.ZwDuplicateObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwDuplicateToken();
// ntdll.ZwDuplicateToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnableLastKnownGood();
// ntdll.ZwEnableLastKnownGood = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateBootEntries();
// ntdll.ZwEnumerateBootEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateDriverEntries();
// ntdll.ZwEnumerateDriverEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateKey();
// ntdll.ZwEnumerateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateSystemEnvironmentValuesEx();
// ntdll.ZwEnumerateSystemEnvironmentValuesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateTransactionObject();
// ntdll.ZwEnumerateTransactionObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwEnumerateValueKey();
// ntdll.ZwEnumerateValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwExtendSection();
// ntdll.ZwExtendSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFilterBootOption();
// ntdll.ZwFilterBootOption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFilterToken();
// ntdll.ZwFilterToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFilterTokenEx();
// ntdll.ZwFilterTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFindAtom();
// ntdll.ZwFindAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushBuffersFile();
// ntdll.ZwFlushBuffersFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushBuffersFileEx();
// ntdll.ZwFlushBuffersFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushInstallUILanguage();
// ntdll.ZwFlushInstallUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushInstructionCache();
// ntdll.ZwFlushInstructionCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushKey();
// ntdll.ZwFlushKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushProcessWriteBuffers();
// ntdll.ZwFlushProcessWriteBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushVirtualMemory();
// ntdll.ZwFlushVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFlushWriteBuffer();
// ntdll.ZwFlushWriteBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFreeUserPhysicalPages();
// ntdll.ZwFreeUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFreeVirtualMemory();
// ntdll.ZwFreeVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFreezeRegistry();
// ntdll.ZwFreezeRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFreezeTransactions();
// ntdll.ZwFreezeTransactions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwFsControlFile();
// ntdll.ZwFsControlFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetCachedSigningLevel();
// ntdll.ZwGetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetCompleteWnfStateSubscription();
// ntdll.ZwGetCompleteWnfStateSubscription = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetContextThread();
// ntdll.ZwGetContextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetCurrentProcessorNumber();
// ntdll.ZwGetCurrentProcessorNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetCurrentProcessorNumberEx();
// ntdll.ZwGetCurrentProcessorNumberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetDevicePowerState();
// ntdll.ZwGetDevicePowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetMUIRegistryInfo();
// ntdll.ZwGetMUIRegistryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetNextProcess();
// ntdll.ZwGetNextProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetNextThread();
// ntdll.ZwGetNextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetNlsSectionPtr();
// ntdll.ZwGetNlsSectionPtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetNotificationResourceManager();
// ntdll.ZwGetNotificationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwGetWriteWatch();
// ntdll.ZwGetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwImpersonateAnonymousToken();
// ntdll.ZwImpersonateAnonymousToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwImpersonateClientOfPort();
// ntdll.ZwImpersonateClientOfPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwImpersonateThread();
// ntdll.ZwImpersonateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwInitializeEnclave();
// ntdll.ZwInitializeEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwInitializeNlsFiles();
// ntdll.ZwInitializeNlsFiles = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwInitializeRegistry();
// ntdll.ZwInitializeRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwInitiatePowerAction();
// ntdll.ZwInitiatePowerAction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwIsProcessInJob();
// ntdll.ZwIsProcessInJob = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwIsSystemResumeAutomatic();
// ntdll.ZwIsSystemResumeAutomatic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwIsUILanguageComitted();
// ntdll.ZwIsUILanguageComitted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwListenPort();
// ntdll.ZwListenPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLoadDriver();
// ntdll.ZwLoadDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLoadEnclaveData();
// ntdll.ZwLoadEnclaveData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLoadKey();
// ntdll.ZwLoadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLoadKey2();
// ntdll.ZwLoadKey2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLoadKeyEx();
// ntdll.ZwLoadKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLockFile();
// ntdll.ZwLockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLockProductActivationKeys();
// ntdll.ZwLockProductActivationKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLockRegistryKey();
// ntdll.ZwLockRegistryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwLockVirtualMemory();
// ntdll.ZwLockVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMakePermanentObject();
// ntdll.ZwMakePermanentObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMakeTemporaryObject();
// ntdll.ZwMakeTemporaryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwManagePartition();
// ntdll.ZwManagePartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMapCMFModule();
// ntdll.ZwMapCMFModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMapUserPhysicalPages();
// ntdll.ZwMapUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMapUserPhysicalPagesScatter();
// ntdll.ZwMapUserPhysicalPagesScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwMapViewOfSection();
// ntdll.ZwMapViewOfSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwModifyBootEntry();
// ntdll.ZwModifyBootEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwModifyDriverEntry();
// ntdll.ZwModifyDriverEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwNotifyChangeDirectoryFile();
// ntdll.ZwNotifyChangeDirectoryFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwNotifyChangeKey();
// ntdll.ZwNotifyChangeKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwNotifyChangeMultipleKeys();
// ntdll.ZwNotifyChangeMultipleKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwNotifyChangeSession();
// ntdll.ZwNotifyChangeSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenDirectoryObject();
// ntdll.ZwOpenDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenEnlistment();
// ntdll.ZwOpenEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenEvent();
// ntdll.ZwOpenEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenEventPair();
// ntdll.ZwOpenEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenFile();
// ntdll.ZwOpenFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenIoCompletion();
// ntdll.ZwOpenIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenJobObject();
// ntdll.ZwOpenJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenKey();
// ntdll.ZwOpenKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenKeyEx();
// ntdll.ZwOpenKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenKeyTransacted();
// ntdll.ZwOpenKeyTransacted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenKeyTransactedEx();
// ntdll.ZwOpenKeyTransactedEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenKeyedEvent();
// ntdll.ZwOpenKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenMutant();
// ntdll.ZwOpenMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenObjectAuditAlarm();
// ntdll.ZwOpenObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenPartition();
// ntdll.ZwOpenPartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenPrivateNamespace();
// ntdll.ZwOpenPrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenProcess();
// ntdll.ZwOpenProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenProcessToken();
// ntdll.ZwOpenProcessToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenProcessTokenEx();
// ntdll.ZwOpenProcessTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenRegistryTransaction();
// ntdll.ZwOpenRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenResourceManager();
// ntdll.ZwOpenResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenSection();
// ntdll.ZwOpenSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenSemaphore();
// ntdll.ZwOpenSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenSession();
// ntdll.ZwOpenSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenSymbolicLinkObject();
// ntdll.ZwOpenSymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenThread();
// ntdll.ZwOpenThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenThreadToken();
// ntdll.ZwOpenThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenThreadTokenEx();
// ntdll.ZwOpenThreadTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenTimer();
// ntdll.ZwOpenTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenTransaction();
// ntdll.ZwOpenTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwOpenTransactionManager();
// ntdll.ZwOpenTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPlugPlayControl();
// ntdll.ZwPlugPlayControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPowerInformation();
// ntdll.ZwPowerInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrePrepareComplete();
// ntdll.ZwPrePrepareComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrePrepareEnlistment();
// ntdll.ZwPrePrepareEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrepareComplete();
// ntdll.ZwPrepareComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrepareEnlistment();
// ntdll.ZwPrepareEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrivilegeCheck();
// ntdll.ZwPrivilegeCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrivilegeObjectAuditAlarm();
// ntdll.ZwPrivilegeObjectAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPrivilegedServiceAuditAlarm();
// ntdll.ZwPrivilegedServiceAuditAlarm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPropagationComplete();
// ntdll.ZwPropagationComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPropagationFailed();
// ntdll.ZwPropagationFailed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwProtectVirtualMemory();
// ntdll.ZwProtectVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwPulseEvent();
// ntdll.ZwPulseEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryAttributesFile();
// ntdll.ZwQueryAttributesFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryBootEntryOrder();
// ntdll.ZwQueryBootEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryBootOptions();
// ntdll.ZwQueryBootOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDebugFilterState();
// ntdll.ZwQueryDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDefaultLocale();
// ntdll.ZwQueryDefaultLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDefaultUILanguage();
// ntdll.ZwQueryDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDirectoryFile();
// ntdll.ZwQueryDirectoryFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDirectoryObject();
// ntdll.ZwQueryDirectoryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryDriverEntryOrder();
// ntdll.ZwQueryDriverEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryEaFile();
// ntdll.ZwQueryEaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryEvent();
// ntdll.ZwQueryEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryFullAttributesFile();
// ntdll.ZwQueryFullAttributesFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationAtom();
// ntdll.ZwQueryInformationAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationEnlistment();
// ntdll.ZwQueryInformationEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationFile();
// ntdll.ZwQueryInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationJobObject();
// ntdll.ZwQueryInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationPort();
// ntdll.ZwQueryInformationPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationProcess();
// ntdll.ZwQueryInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationResourceManager();
// ntdll.ZwQueryInformationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationThread();
// ntdll.ZwQueryInformationThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationToken();
// ntdll.ZwQueryInformationToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationTransaction();
// ntdll.ZwQueryInformationTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationTransactionManager();
// ntdll.ZwQueryInformationTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInformationWorkerFactory();
// ntdll.ZwQueryInformationWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryInstallUILanguage();
// ntdll.ZwQueryInstallUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryIntervalProfile();
// ntdll.ZwQueryIntervalProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryIoCompletion();
// ntdll.ZwQueryIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryKey();
// ntdll.ZwQueryKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryLicenseValue();
// ntdll.ZwQueryLicenseValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryMultipleValueKey();
// ntdll.ZwQueryMultipleValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryMutant();
// ntdll.ZwQueryMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryObject();
// ntdll.ZwQueryObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryOpenSubKeys();
// ntdll.ZwQueryOpenSubKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryOpenSubKeysEx();
// ntdll.ZwQueryOpenSubKeysEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryPerformanceCounter();
// ntdll.ZwQueryPerformanceCounter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryPortInformationProcess();
// ntdll.ZwQueryPortInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryQuotaInformationFile();
// ntdll.ZwQueryQuotaInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySection();
// ntdll.ZwQuerySection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySecurityAttributesToken();
// ntdll.ZwQuerySecurityAttributesToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySecurityObject();
// ntdll.ZwQuerySecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySecurityPolicy();
// ntdll.ZwQuerySecurityPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySemaphore();
// ntdll.ZwQuerySemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySymbolicLinkObject();
// ntdll.ZwQuerySymbolicLinkObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySystemEnvironmentValue();
// ntdll.ZwQuerySystemEnvironmentValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySystemEnvironmentValueEx();
// ntdll.ZwQuerySystemEnvironmentValueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySystemInformation();
// ntdll.ZwQuerySystemInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySystemInformationEx();
// ntdll.ZwQuerySystemInformationEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQuerySystemTime();
// ntdll.ZwQuerySystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryTimer();
// ntdll.ZwQueryTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryTimerResolution();
// ntdll.ZwQueryTimerResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryValueKey();
// ntdll.ZwQueryValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryVirtualMemory();
// ntdll.ZwQueryVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryVolumeInformationFile();
// ntdll.ZwQueryVolumeInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryWnfStateData();
// ntdll.ZwQueryWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueryWnfStateNameInformation();
// ntdll.ZwQueryWnfStateNameInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueueApcThread();
// ntdll.ZwQueueApcThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwQueueApcThreadEx();
// ntdll.ZwQueueApcThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRaiseException();
// ntdll.ZwRaiseException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRaiseHardError();
// ntdll.ZwRaiseHardError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReadFile();
// ntdll.ZwReadFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReadFileScatter();
// ntdll.ZwReadFileScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReadOnlyEnlistment();
// ntdll.ZwReadOnlyEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReadRequestData();
// ntdll.ZwReadRequestData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReadVirtualMemory();
// ntdll.ZwReadVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRecoverEnlistment();
// ntdll.ZwRecoverEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRecoverResourceManager();
// ntdll.ZwRecoverResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRecoverTransactionManager();
// ntdll.ZwRecoverTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRegisterProtocolAddressInformation();
// ntdll.ZwRegisterProtocolAddressInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRegisterThreadTerminatePort();
// ntdll.ZwRegisterThreadTerminatePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReleaseKeyedEvent();
// ntdll.ZwReleaseKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReleaseMutant();
// ntdll.ZwReleaseMutant = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReleaseSemaphore();
// ntdll.ZwReleaseSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReleaseWorkerFactoryWorker();
// ntdll.ZwReleaseWorkerFactoryWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRemoveIoCompletion();
// ntdll.ZwRemoveIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRemoveIoCompletionEx();
// ntdll.ZwRemoveIoCompletionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRemoveProcessDebug();
// ntdll.ZwRemoveProcessDebug = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRenameKey();
// ntdll.ZwRenameKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRenameTransactionManager();
// ntdll.ZwRenameTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplaceKey();
// ntdll.ZwReplaceKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplacePartitionUnit();
// ntdll.ZwReplacePartitionUnit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplyPort();
// ntdll.ZwReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplyWaitReceivePort();
// ntdll.ZwReplyWaitReceivePort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplyWaitReceivePortEx();
// ntdll.ZwReplyWaitReceivePortEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwReplyWaitReplyPort();
// ntdll.ZwReplyWaitReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRequestPort();
// ntdll.ZwRequestPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRequestWaitReplyPort();
// ntdll.ZwRequestWaitReplyPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwResetEvent();
// ntdll.ZwResetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwResetWriteWatch();
// ntdll.ZwResetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRestoreKey();
// ntdll.ZwRestoreKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwResumeProcess();
// ntdll.ZwResumeProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwResumeThread();
// ntdll.ZwResumeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRevertContainerImpersonation();
// ntdll.ZwRevertContainerImpersonation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRollbackComplete();
// ntdll.ZwRollbackComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRollbackEnlistment();
// ntdll.ZwRollbackEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRollbackRegistryTransaction();
// ntdll.ZwRollbackRegistryTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRollbackTransaction();
// ntdll.ZwRollbackTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwRollforwardTransactionManager();
// ntdll.ZwRollforwardTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSaveKey();
// ntdll.ZwSaveKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSaveKeyEx();
// ntdll.ZwSaveKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSaveMergedKeys();
// ntdll.ZwSaveMergedKeys = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSecureConnectPort();
// ntdll.ZwSecureConnectPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSerializeBoot();
// ntdll.ZwSerializeBoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetBootEntryOrder();
// ntdll.ZwSetBootEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetBootOptions();
// ntdll.ZwSetBootOptions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetCachedSigningLevel();
// ntdll.ZwSetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetCachedSigningLevel2();
// ntdll.ZwSetCachedSigningLevel2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetContextThread();
// ntdll.ZwSetContextThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetDebugFilterState();
// ntdll.ZwSetDebugFilterState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetDefaultHardErrorPort();
// ntdll.ZwSetDefaultHardErrorPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetDefaultLocale();
// ntdll.ZwSetDefaultLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetDefaultUILanguage();
// ntdll.ZwSetDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetDriverEntryOrder();
// ntdll.ZwSetDriverEntryOrder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetEaFile();
// ntdll.ZwSetEaFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetEvent();
// ntdll.ZwSetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetEventBoostPriority();
// ntdll.ZwSetEventBoostPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetHighEventPair();
// ntdll.ZwSetHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetHighWaitLowEventPair();
// ntdll.ZwSetHighWaitLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetIRTimer();
// ntdll.ZwSetIRTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationDebugObject();
// ntdll.ZwSetInformationDebugObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationEnlistment();
// ntdll.ZwSetInformationEnlistment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationFile();
// ntdll.ZwSetInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationJobObject();
// ntdll.ZwSetInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationKey();
// ntdll.ZwSetInformationKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationObject();
// ntdll.ZwSetInformationObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationProcess();
// ntdll.ZwSetInformationProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationResourceManager();
// ntdll.ZwSetInformationResourceManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationSymbolicLink();
// ntdll.ZwSetInformationSymbolicLink = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationThread();
// ntdll.ZwSetInformationThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationToken();
// ntdll.ZwSetInformationToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationTransaction();
// ntdll.ZwSetInformationTransaction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationTransactionManager();
// ntdll.ZwSetInformationTransactionManager = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationVirtualMemory();
// ntdll.ZwSetInformationVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetInformationWorkerFactory();
// ntdll.ZwSetInformationWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetIntervalProfile();
// ntdll.ZwSetIntervalProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetIoCompletion();
// ntdll.ZwSetIoCompletion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetIoCompletionEx();
// ntdll.ZwSetIoCompletionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetLdtEntries();
// ntdll.ZwSetLdtEntries = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetLowEventPair();
// ntdll.ZwSetLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetLowWaitHighEventPair();
// ntdll.ZwSetLowWaitHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetQuotaInformationFile();
// ntdll.ZwSetQuotaInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSecurityObject();
// ntdll.ZwSetSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSystemEnvironmentValue();
// ntdll.ZwSetSystemEnvironmentValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSystemEnvironmentValueEx();
// ntdll.ZwSetSystemEnvironmentValueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSystemInformation();
// ntdll.ZwSetSystemInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSystemPowerState();
// ntdll.ZwSetSystemPowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetSystemTime();
// ntdll.ZwSetSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetThreadExecutionState();
// ntdll.ZwSetThreadExecutionState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetTimer();
// ntdll.ZwSetTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetTimer2();
// ntdll.ZwSetTimer2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetTimerEx();
// ntdll.ZwSetTimerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetTimerResolution();
// ntdll.ZwSetTimerResolution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetUuidSeed();
// ntdll.ZwSetUuidSeed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetValueKey();
// ntdll.ZwSetValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetVolumeInformationFile();
// ntdll.ZwSetVolumeInformationFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSetWnfProcessNotificationEvent();
// ntdll.ZwSetWnfProcessNotificationEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwShutdownSystem();
// ntdll.ZwShutdownSystem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwShutdownWorkerFactory();
// ntdll.ZwShutdownWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSignalAndWaitForSingleObject();
// ntdll.ZwSignalAndWaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSinglePhaseReject();
// ntdll.ZwSinglePhaseReject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwStartProfile();
// ntdll.ZwStartProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwStopProfile();
// ntdll.ZwStopProfile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSubscribeWnfStateChange();
// ntdll.ZwSubscribeWnfStateChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSuspendProcess();
// ntdll.ZwSuspendProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSuspendThread();
// ntdll.ZwSuspendThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwSystemDebugControl();
// ntdll.ZwSystemDebugControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTerminateJobObject();
// ntdll.ZwTerminateJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTerminateProcess();
// ntdll.ZwTerminateProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTerminateThread();
// ntdll.ZwTerminateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTestAlert();
// ntdll.ZwTestAlert = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwThawRegistry();
// ntdll.ZwThawRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwThawTransactions();
// ntdll.ZwThawTransactions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTraceControl();
// ntdll.ZwTraceControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTraceEvent();
// ntdll.ZwTraceEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwTranslateFilePath();
// ntdll.ZwTranslateFilePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUmsThreadYield();
// ntdll.ZwUmsThreadYield = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnloadDriver();
// ntdll.ZwUnloadDriver = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnloadKey();
// ntdll.ZwUnloadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnloadKey2();
// ntdll.ZwUnloadKey2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnloadKeyEx();
// ntdll.ZwUnloadKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnlockFile();
// ntdll.ZwUnlockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnlockVirtualMemory();
// ntdll.ZwUnlockVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnmapViewOfSection();
// ntdll.ZwUnmapViewOfSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnmapViewOfSectionEx();
// ntdll.ZwUnmapViewOfSectionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUnsubscribeWnfStateChange();
// ntdll.ZwUnsubscribeWnfStateChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwUpdateWnfStateData();
// ntdll.ZwUpdateWnfStateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwVdmControl();
// ntdll.ZwVdmControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForAlertByThreadId();
// ntdll.ZwWaitForAlertByThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForDebugEvent();
// ntdll.ZwWaitForDebugEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForKeyedEvent();
// ntdll.ZwWaitForKeyedEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForMultipleObjects();
// ntdll.ZwWaitForMultipleObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForMultipleObjects32();
// ntdll.ZwWaitForMultipleObjects32 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForSingleObject();
// ntdll.ZwWaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitForWorkViaWorkerFactory();
// ntdll.ZwWaitForWorkViaWorkerFactory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitHighEventPair();
// ntdll.ZwWaitHighEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWaitLowEventPair();
// ntdll.ZwWaitLowEventPair = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWorkerFactoryWorkerReady();
// ntdll.ZwWorkerFactoryWorkerReady = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWriteFile();
// ntdll.ZwWriteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWriteFileGather();
// ntdll.ZwWriteFileGather = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWriteRequestData();
// ntdll.ZwWriteRequestData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwWriteVirtualMemory();
// ntdll.ZwWriteVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZwYieldExecution();
// ntdll.ZwYieldExecution = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __C_specific_handler();
// ntdll.__C_specific_handler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __chkstk();
// ntdll.__chkstk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __isascii();
// ntdll.__isascii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __iscsym();
// ntdll.__iscsym = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __iscsymf();
// ntdll.__iscsymf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __misaligned_access();
// ntdll.__misaligned_access = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __toascii();
// ntdll.__toascii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _atoi64();
// ntdll._atoi64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _errno();
// ntdll._errno = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _fltused();
// ntdll._fltused = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _i64toa();
// ntdll._i64toa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _i64toa_s();
// ntdll._i64toa_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _i64tow();
// ntdll._i64tow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _i64tow_s();
// ntdll._i64tow_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _itoa();
// ntdll._itoa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _itoa_s();
// ntdll._itoa_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _itow();
// ntdll._itow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _itow_s();
// ntdll._itow_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lfind();
// ntdll._lfind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _local_unwind();
// ntdll._local_unwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ltoa();
// ntdll._ltoa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ltoa_s();
// ntdll._ltoa_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ltow();
// ntdll._ltow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ltow_s();
// ntdll._ltow_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _makepath_s();
// ntdll._makepath_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _memccpy();
// ntdll._memccpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _memicmp();
// ntdll._memicmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _setjmp();
// ntdll._setjmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _setjmpex();
// ntdll._setjmpex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snprintf();
// ntdll._snprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snprintf_s();
// ntdll._snprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snscanf_s();
// ntdll._snscanf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snwprintf();
// ntdll._snwprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snwprintf_s();
// ntdll._snwprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _snwscanf_s();
// ntdll._snwscanf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _splitpath();
// ntdll._splitpath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _splitpath_s();
// ntdll._splitpath_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strcmpi();
// ntdll._strcmpi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _stricmp();
// ntdll._stricmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strlwr();
// ntdll._strlwr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strlwr_s();
// ntdll._strlwr_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strnicmp();
// ntdll._strnicmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strnset_s();
// ntdll._strnset_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strset_s();
// ntdll._strset_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strupr();
// ntdll._strupr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _strupr_s();
// ntdll._strupr_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _swprintf();
// ntdll._swprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ui64toa();
// ntdll._ui64toa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ui64toa_s();
// ntdll._ui64toa_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ui64tow();
// ntdll._ui64tow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ui64tow_s();
// ntdll._ui64tow_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ultoa();
// ntdll._ultoa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ultoa_s();
// ntdll._ultoa_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ultow();
// ntdll._ultow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _ultow_s();
// ntdll._ultow_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vscwprintf();
// ntdll._vscwprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vsnprintf();
// ntdll._vsnprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vsnprintf_s();
// ntdll._vsnprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vsnwprintf();
// ntdll._vsnwprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vsnwprintf_s();
// ntdll._vsnwprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _vswprintf();
// ntdll._vswprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsicmp();
// ntdll._wcsicmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcslwr();
// ntdll._wcslwr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcslwr_s();
// ntdll._wcslwr_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsnicmp();
// ntdll._wcsnicmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsnset_s();
// ntdll._wcsnset_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsset_s();
// ntdll._wcsset_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcstoi64();
// ntdll._wcstoi64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcstoui64();
// ntdll._wcstoui64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsupr();
// ntdll._wcsupr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wcsupr_s();
// ntdll._wcsupr_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wmakepath_s();
// ntdll._wmakepath_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wsplitpath_s();
// ntdll._wsplitpath_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wtoi();
// ntdll._wtoi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wtoi64();
// ntdll._wtoi64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _wtol();
// ntdll._wtol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall abs();
// ntdll.abs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall atan();
// ntdll.atan = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall atan2();
// ntdll.atan2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall atoi();
// ntdll.atoi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall atol();
// ntdll.atol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall bsearch();
// ntdll.bsearch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ceil();
// ntdll.ceil = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall cos();
// ntdll.cos = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall fabs();
// ntdll.fabs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall floor();
// ntdll.floor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isalnum();
// ntdll.isalnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isalpha();
// ntdll.isalpha = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iscntrl();
// ntdll.iscntrl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isdigit();
// ntdll.isdigit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isgraph();
// ntdll.isgraph = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall islower();
// ntdll.islower = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isprint();
// ntdll.isprint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ispunct();
// ntdll.ispunct = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isspace();
// ntdll.isspace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isupper();
// ntdll.isupper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswalnum();
// ntdll.iswalnum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswalpha();
// ntdll.iswalpha = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswascii();
// ntdll.iswascii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswctype();
// ntdll.iswctype = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswdigit();
// ntdll.iswdigit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswgraph();
// ntdll.iswgraph = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswlower();
// ntdll.iswlower = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswprint();
// ntdll.iswprint = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswspace();
// ntdll.iswspace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall iswxdigit();
// ntdll.iswxdigit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall isxdigit();
// ntdll.isxdigit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall labs();
// ntdll.labs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall log();
// ntdll.log = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall longjmp();
// ntdll.longjmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall mbstowcs();
// ntdll.mbstowcs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memchr();
// ntdll.memchr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memcmp();
// ntdll.memcmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memcpy();
// ntdll.memcpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memcpy_s();
// ntdll.memcpy_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memmove();
// ntdll.memmove = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memmove_s();
// ntdll.memmove_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall memset();
// ntdll.memset = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall pow();
// ntdll.pow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall qsort();
// ntdll.qsort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall qsort_s();
// ntdll.qsort_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sin();
// ntdll.sin = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sprintf();
// ntdll.sprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sprintf_s();
// ntdll.sprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sqrt();
// ntdll.sqrt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sscanf();
// ntdll.sscanf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall sscanf_s();
// ntdll.sscanf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcat();
// ntdll.strcat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcat_s();
// ntdll.strcat_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strchr();
// ntdll.strchr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcmp();
// ntdll.strcmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcpy();
// ntdll.strcpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcpy_s();
// ntdll.strcpy_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strcspn();
// ntdll.strcspn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strlen();
// ntdll.strlen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strncat();
// ntdll.strncat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strncat_s();
// ntdll.strncat_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strncmp();
// ntdll.strncmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strncpy();
// ntdll.strncpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strncpy_s();
// ntdll.strncpy_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strnlen();
// ntdll.strnlen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strpbrk();
// ntdll.strpbrk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strrchr();
// ntdll.strrchr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strspn();
// ntdll.strspn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strstr();
// ntdll.strstr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strtok_s();
// ntdll.strtok_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strtol();
// ntdll.strtol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall strtoul();
// ntdll.strtoul = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall swprintf();
// ntdll.swprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall swprintf_s();
// ntdll.swprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall swscanf_s();
// ntdll.swscanf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall tan();
// ntdll.tan = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall tolower();
// ntdll.tolower = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall toupper();
// ntdll.toupper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall towlower();
// ntdll.towlower = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall towupper();
// ntdll.towupper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vDbgPrintEx();
// ntdll.vDbgPrintEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vDbgPrintExWithPrefix();
// ntdll.vDbgPrintExWithPrefix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vsprintf();
// ntdll.vsprintf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vsprintf_s();
// ntdll.vsprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall vswprintf_s();
// ntdll.vswprintf_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscat();
// ntdll.wcscat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscat_s();
// ntdll.wcscat_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcschr();
// ntdll.wcschr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscmp();
// ntdll.wcscmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscpy();
// ntdll.wcscpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscpy_s();
// ntdll.wcscpy_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcscspn();
// ntdll.wcscspn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcslen();
// ntdll.wcslen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsncat();
// ntdll.wcsncat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsncat_s();
// ntdll.wcsncat_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsncmp();
// ntdll.wcsncmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsncpy();
// ntdll.wcsncpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsncpy_s();
// ntdll.wcsncpy_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsnlen();
// ntdll.wcsnlen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcspbrk();
// ntdll.wcspbrk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsrchr();
// ntdll.wcsrchr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsspn();
// ntdll.wcsspn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcsstr();
// ntdll.wcsstr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcstok_s();
// ntdll.wcstok_s = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcstol();
// ntdll.wcstol = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcstombs();
// ntdll.wcstombs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall wcstoul();
// ntdll.wcstoul = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// exports
module.exports = ntdll;