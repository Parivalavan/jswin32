// javascript ffi interface for ntdll
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');


// init
var ntdll = ffi.Library( "ntdll.dll" ,
{
	// int __stdcall A_SHAFinal();
	// "A_SHAFinal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall A_SHAInit();
	// "A_SHAInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall A_SHAUpdate();
	// "A_SHAUpdate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcAdjustCompletionListConcurrencyCount();
	// "AlpcAdjustCompletionListConcurrencyCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcFreeCompletionListMessage();
	// "AlpcFreeCompletionListMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetCompletionListLastMessageInformation();
	// "AlpcGetCompletionListLastMessageInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetCompletionListMessageAttributes();
	// "AlpcGetCompletionListMessageAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetHeaderSize();
	// "AlpcGetHeaderSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetMessageAttribute();
	// "AlpcGetMessageAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetMessageFromCompletionList();
	// "AlpcGetMessageFromCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcGetOutstandingCompletionListMessageCount();
	// "AlpcGetOutstandingCompletionListMessageCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcInitializeMessageAttribute();
	// "AlpcInitializeMessageAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcMaxAllowedMessageLength();
	// "AlpcMaxAllowedMessageLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcRegisterCompletionList();
	// "AlpcRegisterCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcRegisterCompletionListWorkerThread();
	// "AlpcRegisterCompletionListWorkerThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcRundownCompletionList();
	// "AlpcRundownCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcUnregisterCompletionList();
	// "AlpcUnregisterCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AlpcUnregisterCompletionListWorkerThread();
	// "AlpcUnregisterCompletionListWorkerThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ApiSetQueryApiSetPresence();
	// "ApiSetQueryApiSetPresence" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrAllocateCaptureBuffer();
	// "CsrAllocateCaptureBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrAllocateMessagePointer();
	// "CsrAllocateMessagePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrCaptureMessageBuffer();
	// "CsrCaptureMessageBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrCaptureMessageMultiUnicodeStringsInPlace();
	// "CsrCaptureMessageMultiUnicodeStringsInPlace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrCaptureMessageString();
	// "CsrCaptureMessageString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrCaptureTimeout();
	// "CsrCaptureTimeout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrClientCallServer();
	// "CsrClientCallServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrClientConnectToServer();
	// "CsrClientConnectToServer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrFreeCaptureBuffer();
	// "CsrFreeCaptureBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrGetProcessId();
	// "CsrGetProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrIdentifyAlertableThread();
	// "CsrIdentifyAlertableThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrSetPriorityClass();
	// "CsrSetPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CsrVerifyRegion();
	// "CsrVerifyRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgBreakPoint();
	// "DbgBreakPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgPrint();
	// "DbgPrint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgPrintEx();
	// "DbgPrintEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgPrintReturnControlC();
	// "DbgPrintReturnControlC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgPrompt();
	// "DbgPrompt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgQueryDebugFilterState();
	// "DbgQueryDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgSetDebugFilterState();
	// "DbgSetDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiConnectToDbg();
	// "DbgUiConnectToDbg" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiContinue();
	// "DbgUiContinue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiConvertStateChangeStructure();
	// "DbgUiConvertStateChangeStructure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiConvertStateChangeStructureEx();
	// "DbgUiConvertStateChangeStructureEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiDebugActiveProcess();
	// "DbgUiDebugActiveProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiGetThreadDebugObject();
	// "DbgUiGetThreadDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiIssueRemoteBreakin();
	// "DbgUiIssueRemoteBreakin" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiRemoteBreakin();
	// "DbgUiRemoteBreakin" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiSetThreadDebugObject();
	// "DbgUiSetThreadDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiStopDebugging();
	// "DbgUiStopDebugging" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUiWaitStateChange();
	// "DbgUiWaitStateChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DbgUserBreakPoint();
	// "DbgUserBreakPoint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwCreateTraceInstanceId();
	// "EtwCreateTraceInstanceId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwDeliverDataBlock();
	// "EtwDeliverDataBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEnumerateProcessRegGuids();
	// "EtwEnumerateProcessRegGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventActivityIdControl();
	// "EtwEventActivityIdControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventEnabled();
	// "EtwEventEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventProviderEnabled();
	// "EtwEventProviderEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventRegister();
	// "EtwEventRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventSetInformation();
	// "EtwEventSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventUnregister();
	// "EtwEventUnregister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWrite();
	// "EtwEventWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteEndScenario();
	// "EtwEventWriteEndScenario" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteEx();
	// "EtwEventWriteEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteFull();
	// "EtwEventWriteFull" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteNoRegistration();
	// "EtwEventWriteNoRegistration" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteStartScenario();
	// "EtwEventWriteStartScenario" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteString();
	// "EtwEventWriteString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwEventWriteTransfer();
	// "EtwEventWriteTransfer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwGetTraceEnableFlags();
	// "EtwGetTraceEnableFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwGetTraceEnableLevel();
	// "EtwGetTraceEnableLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwGetTraceLoggerHandle();
	// "EtwGetTraceLoggerHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwLogTraceEvent();
	// "EtwLogTraceEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwNotificationRegister();
	// "EtwNotificationRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwNotificationUnregister();
	// "EtwNotificationUnregister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwProcessPrivateLoggerRequest();
	// "EtwProcessPrivateLoggerRequest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwRegisterSecurityProvider();
	// "EtwRegisterSecurityProvider" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwRegisterTraceGuidsA();
	// "EtwRegisterTraceGuidsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwRegisterTraceGuidsW();
	// "EtwRegisterTraceGuidsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwReplyNotification();
	// "EtwReplyNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwSendNotification();
	// "EtwSendNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwSetMark();
	// "EtwSetMark" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwTraceEventInstance();
	// "EtwTraceEventInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwTraceMessage();
	// "EtwTraceMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwTraceMessageVa();
	// "EtwTraceMessageVa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwUnregisterTraceGuids();
	// "EtwUnregisterTraceGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwWriteUMSecurityEvent();
	// "EtwWriteUMSecurityEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwpCreateEtwThread();
	// "EtwpCreateEtwThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EtwpGetCpuSpeed();
	// "EtwpGetCpuSpeed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EvtIntReportAuthzEventAndSourceAsync();
	// "EvtIntReportAuthzEventAndSourceAsync" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EvtIntReportEventAndSourceAsync();
	// "EvtIntReportEventAndSourceAsync" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpInterlockedPopEntrySListEnd();
	// "ExpInterlockedPopEntrySListEnd" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpInterlockedPopEntrySListFault();
	// "ExpInterlockedPopEntrySListFault" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpInterlockedPopEntrySListResume();
	// "ExpInterlockedPopEntrySListResume" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KiRaiseUserExceptionDispatcher();
	// "KiRaiseUserExceptionDispatcher" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KiUserApcDispatcher();
	// "KiUserApcDispatcher" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KiUserCallbackDispatcher();
	// "KiUserCallbackDispatcher" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KiUserExceptionDispatcher();
	// "KiUserExceptionDispatcher" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall KiUserInvertedFunctionTable();
	// "KiUserInvertedFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrAccessResource();
	// "LdrAccessResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrAddDllDirectory();
	// "LdrAddDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrAddLoadAsDataTable();
	// "LdrAddLoadAsDataTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrAddRefDll();
	// "LdrAddRefDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrAppxHandleIntegrityFailure();
	// "LdrAppxHandleIntegrityFailure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrDisableThreadCalloutsForDll();
	// "LdrDisableThreadCalloutsForDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrEnumResources();
	// "LdrEnumResources" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrEnumerateLoadedModules();
	// "LdrEnumerateLoadedModules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFastFailInLoaderCallout();
	// "LdrFastFailInLoaderCallout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFindEntryForAddress();
	// "LdrFindEntryForAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFindResourceDirectory_U();
	// "LdrFindResourceDirectory_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFindResourceEx_U();
	// "LdrFindResourceEx_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFindResource_U();
	// "LdrFindResource_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrFlushAlternateResourceModules();
	// "LdrFlushAlternateResourceModules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllDirectory();
	// "LdrGetDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllFullName();
	// "LdrGetDllFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllHandle();
	// "LdrGetDllHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllHandleByMapping();
	// "LdrGetDllHandleByMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllHandleByName();
	// "LdrGetDllHandleByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllHandleEx();
	// "LdrGetDllHandleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetDllPath();
	// "LdrGetDllPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetFailureData();
	// "LdrGetFailureData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetFileNameFromLoadAsDataTable();
	// "LdrGetFileNameFromLoadAsDataTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetKnownDllSectionHandle();
	// "LdrGetKnownDllSectionHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetProcedureAddress();
	// "LdrGetProcedureAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetProcedureAddressEx();
	// "LdrGetProcedureAddressEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrGetProcedureAddressForCaller();
	// "LdrGetProcedureAddressForCaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrInitShimEngineDynamic();
	// "LdrInitShimEngineDynamic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrInitializeThunk();
	// "LdrInitializeThunk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrLoadAlternateResourceModule();
	// "LdrLoadAlternateResourceModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrLoadAlternateResourceModuleEx();
	// "LdrLoadAlternateResourceModuleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrLoadDll();
	// "LdrLoadDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrLockLoaderLock();
	// "LdrLockLoaderLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrOpenImageFileOptionsKey();
	// "LdrOpenImageFileOptionsKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrProcessInitializationComplete();
	// "LdrProcessInitializationComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrProcessRelocationBlock();
	// "LdrProcessRelocationBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrProcessRelocationBlockEx();
	// "LdrProcessRelocationBlockEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryImageFileExecutionOptions();
	// "LdrQueryImageFileExecutionOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryImageFileExecutionOptionsEx();
	// "LdrQueryImageFileExecutionOptionsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryImageFileKeyOption();
	// "LdrQueryImageFileKeyOption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryModuleServiceTags();
	// "LdrQueryModuleServiceTags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryOptionalDelayLoadedAPI();
	// "LdrQueryOptionalDelayLoadedAPI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrQueryProcessModuleInformation();
	// "LdrQueryProcessModuleInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrRegisterDllNotification();
	// "LdrRegisterDllNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrRemoveDllDirectory();
	// "LdrRemoveDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrRemoveLoadAsDataTable();
	// "LdrRemoveLoadAsDataTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResFindResource();
	// "LdrResFindResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResFindResourceDirectory();
	// "LdrResFindResourceDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResGetRCConfig();
	// "LdrResGetRCConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResRelease();
	// "LdrResRelease" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResSearchResource();
	// "LdrResSearchResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResolveDelayLoadedAPI();
	// "LdrResolveDelayLoadedAPI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrResolveDelayLoadsFromDll();
	// "LdrResolveDelayLoadsFromDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrRscIsTypeExist();
	// "LdrRscIsTypeExist" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetAppCompatDllRedirectionCallback();
	// "LdrSetAppCompatDllRedirectionCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetDefaultDllDirectories();
	// "LdrSetDefaultDllDirectories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetDllDirectory();
	// "LdrSetDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetDllManifestProber();
	// "LdrSetDllManifestProber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetImplicitPathOptions();
	// "LdrSetImplicitPathOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSetMUICacheType();
	// "LdrSetMUICacheType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrShutdownProcess();
	// "LdrShutdownProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrShutdownThread();
	// "LdrShutdownThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrStandardizeSystemPath();
	// "LdrStandardizeSystemPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrSystemDllInitBlock();
	// "LdrSystemDllInitBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrUnloadAlternateResourceModule();
	// "LdrUnloadAlternateResourceModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrUnloadAlternateResourceModuleEx();
	// "LdrUnloadAlternateResourceModuleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrUnloadDll();
	// "LdrUnloadDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrUnlockLoaderLock();
	// "LdrUnlockLoaderLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrUnregisterDllNotification();
	// "LdrUnregisterDllNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrVerifyImageMatchesChecksum();
	// "LdrVerifyImageMatchesChecksum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrVerifyImageMatchesChecksumEx();
	// "LdrVerifyImageMatchesChecksumEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrpResGetMappingSize();
	// "LdrpResGetMappingSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LdrpResGetResourceDirectory();
	// "LdrpResGetResourceDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD4Final();
	// "MD4Final" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD4Init();
	// "MD4Init" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD4Update();
	// "MD4Update" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD5Final();
	// "MD5Final" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD5Init();
	// "MD5Init" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MD5Update();
	// "MD5Update" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsAnsiCodePage();
	// "NlsAnsiCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsMbCodePageTag();
	// "NlsMbCodePageTag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsMbOemCodePageTag();
	// "NlsMbOemCodePageTag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAcceptConnectPort();
	// "NtAcceptConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheck();
	// "NtAccessCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckAndAuditAlarm();
	// "NtAccessCheckAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckByType();
	// "NtAccessCheckByType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckByTypeAndAuditAlarm();
	// "NtAccessCheckByTypeAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckByTypeResultList();
	// "NtAccessCheckByTypeResultList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckByTypeResultListAndAuditAlarm();
	// "NtAccessCheckByTypeResultListAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAccessCheckByTypeResultListAndAuditAlarmByHandle();
	// "NtAccessCheckByTypeResultListAndAuditAlarmByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAddAtom();
	// "NtAddAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAddAtomEx();
	// "NtAddAtomEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAddBootEntry();
	// "NtAddBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAddDriverEntry();
	// "NtAddDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAdjustGroupsToken();
	// "NtAdjustGroupsToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAdjustPrivilegesToken();
	// "NtAdjustPrivilegesToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAdjustTokenClaimsAndDeviceGroups();
	// "NtAdjustTokenClaimsAndDeviceGroups" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlertResumeThread();
	// "NtAlertResumeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlertThread();
	// "NtAlertThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlertThreadByThreadId();
	// "NtAlertThreadByThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAllocateLocallyUniqueId();
	// "NtAllocateLocallyUniqueId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAllocateReserveObject();
	// "NtAllocateReserveObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAllocateUserPhysicalPages();
	// "NtAllocateUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAllocateUuids();
	// "NtAllocateUuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAllocateVirtualMemory();
	// "NtAllocateVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcAcceptConnectPort();
	// "NtAlpcAcceptConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCancelMessage();
	// "NtAlpcCancelMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcConnectPort();
	// "NtAlpcConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcConnectPortEx();
	// "NtAlpcConnectPortEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCreatePort();
	// "NtAlpcCreatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCreatePortSection();
	// "NtAlpcCreatePortSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCreateResourceReserve();
	// "NtAlpcCreateResourceReserve" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCreateSectionView();
	// "NtAlpcCreateSectionView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcCreateSecurityContext();
	// "NtAlpcCreateSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcDeletePortSection();
	// "NtAlpcDeletePortSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcDeleteResourceReserve();
	// "NtAlpcDeleteResourceReserve" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcDeleteSectionView();
	// "NtAlpcDeleteSectionView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcDeleteSecurityContext();
	// "NtAlpcDeleteSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcDisconnectPort();
	// "NtAlpcDisconnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcImpersonateClientContainerOfPort();
	// "NtAlpcImpersonateClientContainerOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcImpersonateClientOfPort();
	// "NtAlpcImpersonateClientOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcOpenSenderProcess();
	// "NtAlpcOpenSenderProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcOpenSenderThread();
	// "NtAlpcOpenSenderThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcQueryInformation();
	// "NtAlpcQueryInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcQueryInformationMessage();
	// "NtAlpcQueryInformationMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcRevokeSecurityContext();
	// "NtAlpcRevokeSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcSendWaitReceivePort();
	// "NtAlpcSendWaitReceivePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAlpcSetInformation();
	// "NtAlpcSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtApphelpCacheControl();
	// "NtApphelpCacheControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAreMappedFilesTheSame();
	// "NtAreMappedFilesTheSame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAssignProcessToJobObject();
	// "NtAssignProcessToJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtAssociateWaitCompletionPacket();
	// "NtAssociateWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCallbackReturn();
	// "NtCallbackReturn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelIoFile();
	// "NtCancelIoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelIoFileEx();
	// "NtCancelIoFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelSynchronousIoFile();
	// "NtCancelSynchronousIoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelTimer();
	// "NtCancelTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelTimer2();
	// "NtCancelTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCancelWaitCompletionPacket();
	// "NtCancelWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtClearEvent();
	// "NtClearEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtClose();
	// "NtClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCloseObjectAuditAlarm();
	// "NtCloseObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCommitComplete();
	// "NtCommitComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCommitEnlistment();
	// "NtCommitEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCommitRegistryTransaction();
	// "NtCommitRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCommitTransaction();
	// "NtCommitTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCompactKeys();
	// "NtCompactKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCompareObjects();
	// "NtCompareObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCompareTokens();
	// "NtCompareTokens" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCompleteConnectPort();
	// "NtCompleteConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCompressKey();
	// "NtCompressKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtConnectPort();
	// "NtConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtContinue();
	// "NtContinue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateDebugObject();
	// "NtCreateDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateDirectoryObject();
	// "NtCreateDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateDirectoryObjectEx();
	// "NtCreateDirectoryObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateEnclave();
	// "NtCreateEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateEnlistment();
	// "NtCreateEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateEvent();
	// "NtCreateEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateEventPair();
	// "NtCreateEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateFile();
	// "NtCreateFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateIRTimer();
	// "NtCreateIRTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateIoCompletion();
	// "NtCreateIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateJobObject();
	// "NtCreateJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateJobSet();
	// "NtCreateJobSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateKey();
	// "NtCreateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateKeyTransacted();
	// "NtCreateKeyTransacted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateKeyedEvent();
	// "NtCreateKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateLowBoxToken();
	// "NtCreateLowBoxToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateMailslotFile();
	// "NtCreateMailslotFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateMutant();
	// "NtCreateMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateNamedPipeFile();
	// "NtCreateNamedPipeFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreatePagingFile();
	// "NtCreatePagingFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreatePartition();
	// "NtCreatePartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreatePort();
	// "NtCreatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreatePrivateNamespace();
	// "NtCreatePrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateProcess();
	// "NtCreateProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateProcessEx();
	// "NtCreateProcessEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateProfile();
	// "NtCreateProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateProfileEx();
	// "NtCreateProfileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateRegistryTransaction();
	// "NtCreateRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateResourceManager();
	// "NtCreateResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateSection();
	// "NtCreateSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateSemaphore();
	// "NtCreateSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateSymbolicLinkObject();
	// "NtCreateSymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateThread();
	// "NtCreateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateThreadEx();
	// "NtCreateThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateTimer();
	// "NtCreateTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateTimer2();
	// "NtCreateTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateToken();
	// "NtCreateToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateTokenEx();
	// "NtCreateTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateTransaction();
	// "NtCreateTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateTransactionManager();
	// "NtCreateTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateUserProcess();
	// "NtCreateUserProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateWaitCompletionPacket();
	// "NtCreateWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateWaitablePort();
	// "NtCreateWaitablePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateWnfStateName();
	// "NtCreateWnfStateName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtCreateWorkerFactory();
	// "NtCreateWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDebugActiveProcess();
	// "NtDebugActiveProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDebugContinue();
	// "NtDebugContinue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDelayExecution();
	// "NtDelayExecution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteAtom();
	// "NtDeleteAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteBootEntry();
	// "NtDeleteBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteDriverEntry();
	// "NtDeleteDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteFile();
	// "NtDeleteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteKey();
	// "NtDeleteKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteObjectAuditAlarm();
	// "NtDeleteObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeletePrivateNamespace();
	// "NtDeletePrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteValueKey();
	// "NtDeleteValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteWnfStateData();
	// "NtDeleteWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeleteWnfStateName();
	// "NtDeleteWnfStateName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDeviceIoControlFile();
	// "NtDeviceIoControlFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDisableLastKnownGood();
	// "NtDisableLastKnownGood" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDisplayString();
	// "NtDisplayString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDrawText();
	// "NtDrawText" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDuplicateObject();
	// "NtDuplicateObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtDuplicateToken();
	// "NtDuplicateToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnableLastKnownGood();
	// "NtEnableLastKnownGood" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateBootEntries();
	// "NtEnumerateBootEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateDriverEntries();
	// "NtEnumerateDriverEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateKey();
	// "NtEnumerateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateSystemEnvironmentValuesEx();
	// "NtEnumerateSystemEnvironmentValuesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateTransactionObject();
	// "NtEnumerateTransactionObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtEnumerateValueKey();
	// "NtEnumerateValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtExtendSection();
	// "NtExtendSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFilterBootOption();
	// "NtFilterBootOption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFilterToken();
	// "NtFilterToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFilterTokenEx();
	// "NtFilterTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFindAtom();
	// "NtFindAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushBuffersFile();
	// "NtFlushBuffersFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushBuffersFileEx();
	// "NtFlushBuffersFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushInstallUILanguage();
	// "NtFlushInstallUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushInstructionCache();
	// "NtFlushInstructionCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushKey();
	// "NtFlushKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushProcessWriteBuffers();
	// "NtFlushProcessWriteBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushVirtualMemory();
	// "NtFlushVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFlushWriteBuffer();
	// "NtFlushWriteBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFreeUserPhysicalPages();
	// "NtFreeUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFreeVirtualMemory();
	// "NtFreeVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFreezeRegistry();
	// "NtFreezeRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFreezeTransactions();
	// "NtFreezeTransactions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtFsControlFile();
	// "NtFsControlFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetCachedSigningLevel();
	// "NtGetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetCompleteWnfStateSubscription();
	// "NtGetCompleteWnfStateSubscription" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetContextThread();
	// "NtGetContextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetCurrentProcessorNumber();
	// "NtGetCurrentProcessorNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetCurrentProcessorNumberEx();
	// "NtGetCurrentProcessorNumberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetDevicePowerState();
	// "NtGetDevicePowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetMUIRegistryInfo();
	// "NtGetMUIRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetNextProcess();
	// "NtGetNextProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetNextThread();
	// "NtGetNextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetNlsSectionPtr();
	// "NtGetNlsSectionPtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetNotificationResourceManager();
	// "NtGetNotificationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetTickCount();
	// "NtGetTickCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtGetWriteWatch();
	// "NtGetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtImpersonateAnonymousToken();
	// "NtImpersonateAnonymousToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtImpersonateClientOfPort();
	// "NtImpersonateClientOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtImpersonateThread();
	// "NtImpersonateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtInitializeEnclave();
	// "NtInitializeEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtInitializeNlsFiles();
	// "NtInitializeNlsFiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtInitializeRegistry();
	// "NtInitializeRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtInitiatePowerAction();
	// "NtInitiatePowerAction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtIsProcessInJob();
	// "NtIsProcessInJob" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtIsSystemResumeAutomatic();
	// "NtIsSystemResumeAutomatic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtIsUILanguageComitted();
	// "NtIsUILanguageComitted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtListenPort();
	// "NtListenPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLoadDriver();
	// "NtLoadDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLoadEnclaveData();
	// "NtLoadEnclaveData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLoadKey();
	// "NtLoadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLoadKey2();
	// "NtLoadKey2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLoadKeyEx();
	// "NtLoadKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLockFile();
	// "NtLockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLockProductActivationKeys();
	// "NtLockProductActivationKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLockRegistryKey();
	// "NtLockRegistryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtLockVirtualMemory();
	// "NtLockVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMakePermanentObject();
	// "NtMakePermanentObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMakeTemporaryObject();
	// "NtMakeTemporaryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtManagePartition();
	// "NtManagePartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMapCMFModule();
	// "NtMapCMFModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMapUserPhysicalPages();
	// "NtMapUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMapUserPhysicalPagesScatter();
	// "NtMapUserPhysicalPagesScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtMapViewOfSection();
	// "NtMapViewOfSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtModifyBootEntry();
	// "NtModifyBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtModifyDriverEntry();
	// "NtModifyDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtNotifyChangeDirectoryFile();
	// "NtNotifyChangeDirectoryFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtNotifyChangeKey();
	// "NtNotifyChangeKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtNotifyChangeMultipleKeys();
	// "NtNotifyChangeMultipleKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtNotifyChangeSession();
	// "NtNotifyChangeSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenDirectoryObject();
	// "NtOpenDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenEnlistment();
	// "NtOpenEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenEvent();
	// "NtOpenEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenEventPair();
	// "NtOpenEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenFile();
	// "NtOpenFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenIoCompletion();
	// "NtOpenIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenJobObject();
	// "NtOpenJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenKey();
	// "NtOpenKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenKeyEx();
	// "NtOpenKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenKeyTransacted();
	// "NtOpenKeyTransacted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenKeyTransactedEx();
	// "NtOpenKeyTransactedEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenKeyedEvent();
	// "NtOpenKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenMutant();
	// "NtOpenMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenObjectAuditAlarm();
	// "NtOpenObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenPartition();
	// "NtOpenPartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenPrivateNamespace();
	// "NtOpenPrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenProcess();
	// "NtOpenProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenProcessToken();
	// "NtOpenProcessToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenProcessTokenEx();
	// "NtOpenProcessTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenRegistryTransaction();
	// "NtOpenRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenResourceManager();
	// "NtOpenResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenSection();
	// "NtOpenSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenSemaphore();
	// "NtOpenSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenSession();
	// "NtOpenSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenSymbolicLinkObject();
	// "NtOpenSymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenThread();
	// "NtOpenThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenThreadToken();
	// "NtOpenThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenThreadTokenEx();
	// "NtOpenThreadTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenTimer();
	// "NtOpenTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenTransaction();
	// "NtOpenTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtOpenTransactionManager();
	// "NtOpenTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPlugPlayControl();
	// "NtPlugPlayControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPowerInformation();
	// "NtPowerInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrePrepareComplete();
	// "NtPrePrepareComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrePrepareEnlistment();
	// "NtPrePrepareEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrepareComplete();
	// "NtPrepareComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrepareEnlistment();
	// "NtPrepareEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrivilegeCheck();
	// "NtPrivilegeCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrivilegeObjectAuditAlarm();
	// "NtPrivilegeObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPrivilegedServiceAuditAlarm();
	// "NtPrivilegedServiceAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPropagationComplete();
	// "NtPropagationComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPropagationFailed();
	// "NtPropagationFailed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtProtectVirtualMemory();
	// "NtProtectVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtPulseEvent();
	// "NtPulseEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryAttributesFile();
	// "NtQueryAttributesFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryBootEntryOrder();
	// "NtQueryBootEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryBootOptions();
	// "NtQueryBootOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDebugFilterState();
	// "NtQueryDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDefaultLocale();
	// "NtQueryDefaultLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDefaultUILanguage();
	// "NtQueryDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDirectoryFile();
	// "NtQueryDirectoryFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDirectoryObject();
	// "NtQueryDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryDriverEntryOrder();
	// "NtQueryDriverEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryEaFile();
	// "NtQueryEaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryEvent();
	// "NtQueryEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryFullAttributesFile();
	// "NtQueryFullAttributesFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationAtom();
	// "NtQueryInformationAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationEnlistment();
	// "NtQueryInformationEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationFile();
	// "NtQueryInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationJobObject();
	// "NtQueryInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationPort();
	// "NtQueryInformationPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationProcess();
	// "NtQueryInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationResourceManager();
	// "NtQueryInformationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationThread();
	// "NtQueryInformationThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationToken();
	// "NtQueryInformationToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationTransaction();
	// "NtQueryInformationTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationTransactionManager();
	// "NtQueryInformationTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInformationWorkerFactory();
	// "NtQueryInformationWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryInstallUILanguage();
	// "NtQueryInstallUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryIntervalProfile();
	// "NtQueryIntervalProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryIoCompletion();
	// "NtQueryIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryKey();
	// "NtQueryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryLicenseValue();
	// "NtQueryLicenseValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryMultipleValueKey();
	// "NtQueryMultipleValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryMutant();
	// "NtQueryMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryObject();
	// "NtQueryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryOpenSubKeys();
	// "NtQueryOpenSubKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryOpenSubKeysEx();
	// "NtQueryOpenSubKeysEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryPerformanceCounter();
	// "NtQueryPerformanceCounter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryPortInformationProcess();
	// "NtQueryPortInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryQuotaInformationFile();
	// "NtQueryQuotaInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySection();
	// "NtQuerySection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySecurityAttributesToken();
	// "NtQuerySecurityAttributesToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySecurityObject();
	// "NtQuerySecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySecurityPolicy();
	// "NtQuerySecurityPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySemaphore();
	// "NtQuerySemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySymbolicLinkObject();
	// "NtQuerySymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySystemEnvironmentValue();
	// "NtQuerySystemEnvironmentValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySystemEnvironmentValueEx();
	// "NtQuerySystemEnvironmentValueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySystemInformation();
	// "NtQuerySystemInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySystemInformationEx();
	// "NtQuerySystemInformationEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQuerySystemTime();
	// "NtQuerySystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryTimer();
	// "NtQueryTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryTimerResolution();
	// "NtQueryTimerResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryValueKey();
	// "NtQueryValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryVirtualMemory();
	// "NtQueryVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryVolumeInformationFile();
	// "NtQueryVolumeInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryWnfStateData();
	// "NtQueryWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueryWnfStateNameInformation();
	// "NtQueryWnfStateNameInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueueApcThread();
	// "NtQueueApcThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtQueueApcThreadEx();
	// "NtQueueApcThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRaiseException();
	// "NtRaiseException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRaiseHardError();
	// "NtRaiseHardError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReadFile();
	// "NtReadFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReadFileScatter();
	// "NtReadFileScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReadOnlyEnlistment();
	// "NtReadOnlyEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReadRequestData();
	// "NtReadRequestData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReadVirtualMemory();
	// "NtReadVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRecoverEnlistment();
	// "NtRecoverEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRecoverResourceManager();
	// "NtRecoverResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRecoverTransactionManager();
	// "NtRecoverTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRegisterProtocolAddressInformation();
	// "NtRegisterProtocolAddressInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRegisterThreadTerminatePort();
	// "NtRegisterThreadTerminatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReleaseKeyedEvent();
	// "NtReleaseKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReleaseMutant();
	// "NtReleaseMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReleaseSemaphore();
	// "NtReleaseSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReleaseWorkerFactoryWorker();
	// "NtReleaseWorkerFactoryWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRemoveIoCompletion();
	// "NtRemoveIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRemoveIoCompletionEx();
	// "NtRemoveIoCompletionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRemoveProcessDebug();
	// "NtRemoveProcessDebug" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRenameKey();
	// "NtRenameKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRenameTransactionManager();
	// "NtRenameTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplaceKey();
	// "NtReplaceKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplacePartitionUnit();
	// "NtReplacePartitionUnit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplyPort();
	// "NtReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplyWaitReceivePort();
	// "NtReplyWaitReceivePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplyWaitReceivePortEx();
	// "NtReplyWaitReceivePortEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtReplyWaitReplyPort();
	// "NtReplyWaitReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRequestPort();
	// "NtRequestPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRequestWaitReplyPort();
	// "NtRequestWaitReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtResetEvent();
	// "NtResetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtResetWriteWatch();
	// "NtResetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRestoreKey();
	// "NtRestoreKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtResumeProcess();
	// "NtResumeProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtResumeThread();
	// "NtResumeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRevertContainerImpersonation();
	// "NtRevertContainerImpersonation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRollbackComplete();
	// "NtRollbackComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRollbackEnlistment();
	// "NtRollbackEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRollbackRegistryTransaction();
	// "NtRollbackRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRollbackTransaction();
	// "NtRollbackTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtRollforwardTransactionManager();
	// "NtRollforwardTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSaveKey();
	// "NtSaveKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSaveKeyEx();
	// "NtSaveKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSaveMergedKeys();
	// "NtSaveMergedKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSecureConnectPort();
	// "NtSecureConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSerializeBoot();
	// "NtSerializeBoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetBootEntryOrder();
	// "NtSetBootEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetBootOptions();
	// "NtSetBootOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetCachedSigningLevel();
	// "NtSetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetCachedSigningLevel2();
	// "NtSetCachedSigningLevel2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetContextThread();
	// "NtSetContextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetDebugFilterState();
	// "NtSetDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetDefaultHardErrorPort();
	// "NtSetDefaultHardErrorPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetDefaultLocale();
	// "NtSetDefaultLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetDefaultUILanguage();
	// "NtSetDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetDriverEntryOrder();
	// "NtSetDriverEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetEaFile();
	// "NtSetEaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetEvent();
	// "NtSetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetEventBoostPriority();
	// "NtSetEventBoostPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetHighEventPair();
	// "NtSetHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetHighWaitLowEventPair();
	// "NtSetHighWaitLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetIRTimer();
	// "NtSetIRTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationDebugObject();
	// "NtSetInformationDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationEnlistment();
	// "NtSetInformationEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationFile();
	// "NtSetInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationJobObject();
	// "NtSetInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationKey();
	// "NtSetInformationKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationObject();
	// "NtSetInformationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationProcess();
	// "NtSetInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationResourceManager();
	// "NtSetInformationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationSymbolicLink();
	// "NtSetInformationSymbolicLink" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationThread();
	// "NtSetInformationThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationToken();
	// "NtSetInformationToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationTransaction();
	// "NtSetInformationTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationTransactionManager();
	// "NtSetInformationTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationVirtualMemory();
	// "NtSetInformationVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetInformationWorkerFactory();
	// "NtSetInformationWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetIntervalProfile();
	// "NtSetIntervalProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetIoCompletion();
	// "NtSetIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetIoCompletionEx();
	// "NtSetIoCompletionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetLdtEntries();
	// "NtSetLdtEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetLowEventPair();
	// "NtSetLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetLowWaitHighEventPair();
	// "NtSetLowWaitHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetQuotaInformationFile();
	// "NtSetQuotaInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSecurityObject();
	// "NtSetSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSystemEnvironmentValue();
	// "NtSetSystemEnvironmentValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSystemEnvironmentValueEx();
	// "NtSetSystemEnvironmentValueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSystemInformation();
	// "NtSetSystemInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSystemPowerState();
	// "NtSetSystemPowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetSystemTime();
	// "NtSetSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetThreadExecutionState();
	// "NtSetThreadExecutionState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetTimer();
	// "NtSetTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetTimer2();
	// "NtSetTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetTimerEx();
	// "NtSetTimerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetTimerResolution();
	// "NtSetTimerResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetUuidSeed();
	// "NtSetUuidSeed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetValueKey();
	// "NtSetValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetVolumeInformationFile();
	// "NtSetVolumeInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSetWnfProcessNotificationEvent();
	// "NtSetWnfProcessNotificationEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtShutdownSystem();
	// "NtShutdownSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtShutdownWorkerFactory();
	// "NtShutdownWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSignalAndWaitForSingleObject();
	// "NtSignalAndWaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSinglePhaseReject();
	// "NtSinglePhaseReject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtStartProfile();
	// "NtStartProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtStopProfile();
	// "NtStopProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSubscribeWnfStateChange();
	// "NtSubscribeWnfStateChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSuspendProcess();
	// "NtSuspendProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSuspendThread();
	// "NtSuspendThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtSystemDebugControl();
	// "NtSystemDebugControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTerminateJobObject();
	// "NtTerminateJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTerminateProcess();
	// "NtTerminateProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTerminateThread();
	// "NtTerminateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTestAlert();
	// "NtTestAlert" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtThawRegistry();
	// "NtThawRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtThawTransactions();
	// "NtThawTransactions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTraceControl();
	// "NtTraceControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTraceEvent();
	// "NtTraceEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtTranslateFilePath();
	// "NtTranslateFilePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUmsThreadYield();
	// "NtUmsThreadYield" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnloadDriver();
	// "NtUnloadDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnloadKey();
	// "NtUnloadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnloadKey2();
	// "NtUnloadKey2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnloadKeyEx();
	// "NtUnloadKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnlockFile();
	// "NtUnlockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnlockVirtualMemory();
	// "NtUnlockVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnmapViewOfSection();
	// "NtUnmapViewOfSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnmapViewOfSectionEx();
	// "NtUnmapViewOfSectionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUnsubscribeWnfStateChange();
	// "NtUnsubscribeWnfStateChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtUpdateWnfStateData();
	// "NtUpdateWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtVdmControl();
	// "NtVdmControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForAlertByThreadId();
	// "NtWaitForAlertByThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForDebugEvent();
	// "NtWaitForDebugEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForKeyedEvent();
	// "NtWaitForKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForMultipleObjects();
	// "NtWaitForMultipleObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForMultipleObjects32();
	// "NtWaitForMultipleObjects32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForSingleObject();
	// "NtWaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitForWorkViaWorkerFactory();
	// "NtWaitForWorkViaWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitHighEventPair();
	// "NtWaitHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWaitLowEventPair();
	// "NtWaitLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWorkerFactoryWorkerReady();
	// "NtWorkerFactoryWorkerReady" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWriteFile();
	// "NtWriteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWriteFileGather();
	// "NtWriteFileGather" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWriteRequestData();
	// "NtWriteRequestData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtWriteVirtualMemory();
	// "NtWriteVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtYieldExecution();
	// "NtYieldExecution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtdllDefWindowProc_A();
	// "NtdllDefWindowProc_A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtdllDefWindowProc_W();
	// "NtdllDefWindowProc_W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtdllDialogWndProc_A();
	// "NtdllDialogWndProc_A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtdllDialogWndProc_W();
	// "NtdllDialogWndProc_W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PfxFindPrefix();
	// "PfxFindPrefix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PfxInitialize();
	// "PfxInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PfxInsertPrefix();
	// "PfxInsertPrefix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PfxRemovePrefix();
	// "PfxRemovePrefix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtCaptureSnapshot();
	// "PssNtCaptureSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtDuplicateSnapshot();
	// "PssNtDuplicateSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtFreeRemoteSnapshot();
	// "PssNtFreeRemoteSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtFreeSnapshot();
	// "PssNtFreeSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtFreeWalkMarker();
	// "PssNtFreeWalkMarker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtQuerySnapshot();
	// "PssNtQuerySnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtValidateDescriptor();
	// "PssNtValidateDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssNtWalkSnapshot();
	// "PssNtWalkSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAbortRXact();
	// "RtlAbortRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAbsoluteToSelfRelativeSD();
	// "RtlAbsoluteToSelfRelativeSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquirePebLock();
	// "RtlAcquirePebLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquirePrivilege();
	// "RtlAcquirePrivilege" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquireReleaseSRWLockExclusive();
	// "RtlAcquireReleaseSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquireResourceExclusive();
	// "RtlAcquireResourceExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquireResourceShared();
	// "RtlAcquireResourceShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquireSRWLockExclusive();
	// "RtlAcquireSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAcquireSRWLockShared();
	// "RtlAcquireSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlActivateActivationContext();
	// "RtlActivateActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlActivateActivationContextEx();
	// "RtlActivateActivationContextEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlActivateActivationContextUnsafeFast();
	// "RtlActivateActivationContextUnsafeFast" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessAllowedAce();
	// "RtlAddAccessAllowedAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessAllowedAceEx();
	// "RtlAddAccessAllowedAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessAllowedObjectAce();
	// "RtlAddAccessAllowedObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessDeniedAce();
	// "RtlAddAccessDeniedAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessDeniedAceEx();
	// "RtlAddAccessDeniedAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAccessDeniedObjectAce();
	// "RtlAddAccessDeniedObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAce();
	// "RtlAddAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddActionToRXact();
	// "RtlAddActionToRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAtomToAtomTable();
	// "RtlAddAtomToAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAttributeActionToRXact();
	// "RtlAddAttributeActionToRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAuditAccessAce();
	// "RtlAddAuditAccessAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAuditAccessAceEx();
	// "RtlAddAuditAccessAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddAuditAccessObjectAce();
	// "RtlAddAuditAccessObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddCompoundAce();
	// "RtlAddCompoundAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddFunctionTable();
	// "RtlAddFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddGrowableFunctionTable();
	// "RtlAddGrowableFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddIntegrityLabelToBoundaryDescriptor();
	// "RtlAddIntegrityLabelToBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddMandatoryAce();
	// "RtlAddMandatoryAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddProcessTrustLabelAce();
	// "RtlAddProcessTrustLabelAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddRefActivationContext();
	// "RtlAddRefActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddRefMemoryStream();
	// "RtlAddRefMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddResourceAttributeAce();
	// "RtlAddResourceAttributeAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddSIDToBoundaryDescriptor();
	// "RtlAddSIDToBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddScopedPolicyIDAce();
	// "RtlAddScopedPolicyIDAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddVectoredContinueHandler();
	// "RtlAddVectoredContinueHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddVectoredExceptionHandler();
	// "RtlAddVectoredExceptionHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddressInSectionTable();
	// "RtlAddressInSectionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAdjustPrivilege();
	// "RtlAdjustPrivilege" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateActivationContextStack();
	// "RtlAllocateActivationContextStack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateAndInitializeSid();
	// "RtlAllocateAndInitializeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateAndInitializeSidEx();
	// "RtlAllocateAndInitializeSidEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateHandle();
	// "RtlAllocateHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateHeap();
	// "RtlAllocateHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateMemoryBlockLookaside();
	// "RtlAllocateMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateMemoryZone();
	// "RtlAllocateMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAllocateWnfSerializationGroup();
	// "RtlAllocateWnfSerializationGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAnsiCharToUnicodeChar();
	// "RtlAnsiCharToUnicodeChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAnsiStringToUnicodeSize();
	// "RtlAnsiStringToUnicodeSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAnsiStringToUnicodeString();
	// "RtlAnsiStringToUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppendAsciizToString();
	// "RtlAppendAsciizToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppendPathElement();
	// "RtlAppendPathElement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppendStringToString();
	// "RtlAppendStringToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppendUnicodeStringToString();
	// "RtlAppendUnicodeStringToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppendUnicodeToString();
	// "RtlAppendUnicodeToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlApplicationVerifierStop();
	// "RtlApplicationVerifierStop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlApplyRXact();
	// "RtlApplyRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlApplyRXactNoFlush();
	// "RtlApplyRXactNoFlush" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAppxIsFileOwnedByTrustedInstaller();
	// "RtlAppxIsFileOwnedByTrustedInstaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAreAllAccessesGranted();
	// "RtlAreAllAccessesGranted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAreAnyAccessesGranted();
	// "RtlAreAnyAccessesGranted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAreBitsClear();
	// "RtlAreBitsClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAreBitsSet();
	// "RtlAreBitsSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAreLongPathsEnabled();
	// "RtlAreLongPathsEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAssert();
	// "RtlAssert" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAvlInsertNodeEx();
	// "RtlAvlInsertNodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAvlRemoveNode();
	// "RtlAvlRemoveNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlBarrier();
	// "RtlBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlBarrierForDelete();
	// "RtlBarrierForDelete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCancelTimer();
	// "RtlCancelTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCanonicalizeDomainName();
	// "RtlCanonicalizeDomainName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCapabilityCheck();
	// "RtlCapabilityCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCaptureContext();
	// "RtlCaptureContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCaptureStackBackTrace();
	// "RtlCaptureStackBackTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCharToInteger();
	// "RtlCharToInteger" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckBootStatusIntegrity();
	// "RtlCheckBootStatusIntegrity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckForOrphanedCriticalSections();
	// "RtlCheckForOrphanedCriticalSections" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckPortableOperatingSystem();
	// "RtlCheckPortableOperatingSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckRegistryKey();
	// "RtlCheckRegistryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckSandboxedToken();
	// "RtlCheckSandboxedToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckTokenCapability();
	// "RtlCheckTokenCapability" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckTokenMembership();
	// "RtlCheckTokenMembership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCheckTokenMembershipEx();
	// "RtlCheckTokenMembershipEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCleanUpTEBLangLists();
	// "RtlCleanUpTEBLangLists" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlClearAllBits();
	// "RtlClearAllBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlClearBit();
	// "RtlClearBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlClearBits();
	// "RtlClearBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlClearThreadWorkOnBehalfTicket();
	// "RtlClearThreadWorkOnBehalfTicket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCloneMemoryStream();
	// "RtlCloneMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCloneUserProcess();
	// "RtlCloneUserProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCmDecodeMemIoResource();
	// "RtlCmDecodeMemIoResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCmEncodeMemIoResource();
	// "RtlCmEncodeMemIoResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCommitDebugInfo();
	// "RtlCommitDebugInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCommitMemoryStream();
	// "RtlCommitMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompactHeap();
	// "RtlCompactHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareAltitudes();
	// "RtlCompareAltitudes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareMemory();
	// "RtlCompareMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareMemoryUlong();
	// "RtlCompareMemoryUlong" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareString();
	// "RtlCompareString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareUnicodeString();
	// "RtlCompareUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareUnicodeStrings();
	// "RtlCompareUnicodeStrings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompleteProcessCloning();
	// "RtlCompleteProcessCloning" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompressBuffer();
	// "RtlCompressBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlComputeCrc32();
	// "RtlComputeCrc32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlComputeImportTableHash();
	// "RtlComputeImportTableHash" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlComputePrivatizedDllName_U();
	// "RtlComputePrivatizedDllName_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConnectToSm();
	// "RtlConnectToSm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConsoleMultiByteToUnicodeN();
	// "RtlConsoleMultiByteToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlContractHashTable();
	// "RtlContractHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertDeviceFamilyInfoToString();
	// "RtlConvertDeviceFamilyInfoToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertExclusiveToShared();
	// "RtlConvertExclusiveToShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertLCIDToString();
	// "RtlConvertLCIDToString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertSRWLockExclusiveToShared();
	// "RtlConvertSRWLockExclusiveToShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertSharedToExclusive();
	// "RtlConvertSharedToExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertSidToUnicodeString();
	// "RtlConvertSidToUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlConvertToAutoInheritSecurityObject();
	// "RtlConvertToAutoInheritSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyBitMap();
	// "RtlCopyBitMap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyContext();
	// "RtlCopyContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyExtendedContext();
	// "RtlCopyExtendedContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyLuid();
	// "RtlCopyLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyLuidAndAttributesArray();
	// "RtlCopyLuidAndAttributesArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyMappedMemory();
	// "RtlCopyMappedMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyMemory();
	// "RtlCopyMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyMemoryNonTemporal();
	// "RtlCopyMemoryNonTemporal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyMemoryStreamTo();
	// "RtlCopyMemoryStreamTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyOutOfProcessMemoryStreamTo();
	// "RtlCopyOutOfProcessMemoryStreamTo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopySecurityDescriptor();
	// "RtlCopySecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopySid();
	// "RtlCopySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopySidAndAttributesArray();
	// "RtlCopySidAndAttributesArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyString();
	// "RtlCopyString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyUnicodeString();
	// "RtlCopyUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCrc32();
	// "RtlCrc32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCrc64();
	// "RtlCrc64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateAcl();
	// "RtlCreateAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateActivationContext();
	// "RtlCreateActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateAndSetSD();
	// "RtlCreateAndSetSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateAtomTable();
	// "RtlCreateAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateBootStatusDataFile();
	// "RtlCreateBootStatusDataFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateBoundaryDescriptor();
	// "RtlCreateBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateEnvironment();
	// "RtlCreateEnvironment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateEnvironmentEx();
	// "RtlCreateEnvironmentEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateHashTable();
	// "RtlCreateHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateHashTableEx();
	// "RtlCreateHashTableEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateHeap();
	// "RtlCreateHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateMemoryBlockLookaside();
	// "RtlCreateMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateMemoryZone();
	// "RtlCreateMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateProcessParameters();
	// "RtlCreateProcessParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateProcessParametersEx();
	// "RtlCreateProcessParametersEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateProcessReflection();
	// "RtlCreateProcessReflection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateQueryDebugBuffer();
	// "RtlCreateQueryDebugBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateRegistryKey();
	// "RtlCreateRegistryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateSecurityDescriptor();
	// "RtlCreateSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateServiceSid();
	// "RtlCreateServiceSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateSystemVolumeInformationFolder();
	// "RtlCreateSystemVolumeInformationFolder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateTagHeap();
	// "RtlCreateTagHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateTimer();
	// "RtlCreateTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateTimerQueue();
	// "RtlCreateTimerQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUmsCompletionList();
	// "RtlCreateUmsCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUmsThreadContext();
	// "RtlCreateUmsThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUnicodeString();
	// "RtlCreateUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUnicodeStringFromAsciiz();
	// "RtlCreateUnicodeStringFromAsciiz" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUserProcess();
	// "RtlCreateUserProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUserSecurityObject();
	// "RtlCreateUserSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUserStack();
	// "RtlCreateUserStack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateUserThread();
	// "RtlCreateUserThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCreateVirtualAccountSid();
	// "RtlCreateVirtualAccountSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCultureNameToLCID();
	// "RtlCultureNameToLCID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCustomCPToUnicodeN();
	// "RtlCustomCPToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCutoverTimeToSystemTime();
	// "RtlCutoverTimeToSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeCommitDebugInfo();
	// "RtlDeCommitDebugInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeNormalizeProcessParams();
	// "RtlDeNormalizeProcessParams" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeactivateActivationContext();
	// "RtlDeactivateActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeactivateActivationContextUnsafeFast();
	// "RtlDeactivateActivationContextUnsafeFast" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDebugPrintTimes();
	// "RtlDebugPrintTimes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecodePointer();
	// "RtlDecodePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecodeRemotePointer();
	// "RtlDecodeRemotePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecodeSystemPointer();
	// "RtlDecodeSystemPointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecompressBuffer();
	// "RtlDecompressBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecompressBufferEx();
	// "RtlDecompressBufferEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDecompressFragment();
	// "RtlDecompressFragment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDefaultNpAcl();
	// "RtlDefaultNpAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDelete();
	// "RtlDelete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteAce();
	// "RtlDeleteAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteAtomFromAtomTable();
	// "RtlDeleteAtomFromAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteBarrier();
	// "RtlDeleteBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteBoundaryDescriptor();
	// "RtlDeleteBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteCriticalSection();
	// "RtlDeleteCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteElementGenericTable();
	// "RtlDeleteElementGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteElementGenericTableAvl();
	// "RtlDeleteElementGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteElementGenericTableAvlEx();
	// "RtlDeleteElementGenericTableAvlEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteFunctionTable();
	// "RtlDeleteFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteGrowableFunctionTable();
	// "RtlDeleteGrowableFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteHashTable();
	// "RtlDeleteHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteNoSplay();
	// "RtlDeleteNoSplay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteRegistryValue();
	// "RtlDeleteRegistryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteResource();
	// "RtlDeleteResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteSecurityObject();
	// "RtlDeleteSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteTimer();
	// "RtlDeleteTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteTimerQueue();
	// "RtlDeleteTimerQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteTimerQueueEx();
	// "RtlDeleteTimerQueueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteUmsCompletionList();
	// "RtlDeleteUmsCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteUmsThreadContext();
	// "RtlDeleteUmsThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDequeueUmsCompletionListItems();
	// "RtlDequeueUmsCompletionListItems" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeregisterSecureMemoryCacheCallback();
	// "RtlDeregisterSecureMemoryCacheCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeregisterWait();
	// "RtlDeregisterWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeregisterWaitEx();
	// "RtlDeregisterWaitEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeriveCapabilitySidsFromName();
	// "RtlDeriveCapabilitySidsFromName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyAtomTable();
	// "RtlDestroyAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyEnvironment();
	// "RtlDestroyEnvironment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyHandleTable();
	// "RtlDestroyHandleTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyHeap();
	// "RtlDestroyHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyMemoryBlockLookaside();
	// "RtlDestroyMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyMemoryZone();
	// "RtlDestroyMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyProcessParameters();
	// "RtlDestroyProcessParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDestroyQueryDebugBuffer();
	// "RtlDestroyQueryDebugBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDetectHeapLeaks();
	// "RtlDetectHeapLeaks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDetermineDosPathNameType_U();
	// "RtlDetermineDosPathNameType_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDisableThreadProfiling();
	// "RtlDisableThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDllShutdownInProgress();
	// "RtlDllShutdownInProgress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDnsHostNameToComputerName();
	// "RtlDnsHostNameToComputerName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDoesFileExists_U();
	// "RtlDoesFileExists_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosApplyFileIsolationRedirection_Ustr();
	// "RtlDosApplyFileIsolationRedirection_Ustr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosPathNameToNtPathName_U();
	// "RtlDosPathNameToNtPathName_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosPathNameToNtPathName_U_WithStatus();
	// "RtlDosPathNameToNtPathName_U_WithStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosPathNameToRelativeNtPathName_U();
	// "RtlDosPathNameToRelativeNtPathName_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosPathNameToRelativeNtPathName_U_WithStatus();
	// "RtlDosPathNameToRelativeNtPathName_U_WithStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosSearchPath_U();
	// "RtlDosSearchPath_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDosSearchPath_Ustr();
	// "RtlDosSearchPath_Ustr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDowncaseUnicodeChar();
	// "RtlDowncaseUnicodeChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDowncaseUnicodeString();
	// "RtlDowncaseUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDumpResource();
	// "RtlDumpResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDuplicateUnicodeString();
	// "RtlDuplicateUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEmptyAtomTable();
	// "RtlEmptyAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnableEarlyCriticalSectionEventCreation();
	// "RtlEnableEarlyCriticalSectionEventCreation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnableThreadProfiling();
	// "RtlEnableThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEncodePointer();
	// "RtlEncodePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEncodeRemotePointer();
	// "RtlEncodeRemotePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEncodeSystemPointer();
	// "RtlEncodeSystemPointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEndEnumerationHashTable();
	// "RtlEndEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEndStrongEnumerationHashTable();
	// "RtlEndStrongEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEndWeakEnumerationHashTable();
	// "RtlEndWeakEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnterCriticalSection();
	// "RtlEnterCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnterUmsSchedulingMode();
	// "RtlEnterUmsSchedulingMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumProcessHeaps();
	// "RtlEnumProcessHeaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateEntryHashTable();
	// "RtlEnumerateEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateGenericTable();
	// "RtlEnumerateGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateGenericTableAvl();
	// "RtlEnumerateGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateGenericTableLikeADirectory();
	// "RtlEnumerateGenericTableLikeADirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateGenericTableWithoutSplaying();
	// "RtlEnumerateGenericTableWithoutSplaying" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEnumerateGenericTableWithoutSplayingAvl();
	// "RtlEnumerateGenericTableWithoutSplayingAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualComputerName();
	// "RtlEqualComputerName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualDomainName();
	// "RtlEqualDomainName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualLuid();
	// "RtlEqualLuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualPrefixSid();
	// "RtlEqualPrefixSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualSid();
	// "RtlEqualSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualString();
	// "RtlEqualString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualUnicodeString();
	// "RtlEqualUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEqualWnfChangeStamps();
	// "RtlEqualWnfChangeStamps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEraseUnicodeString();
	// "RtlEraseUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEthernetAddressToStringA();
	// "RtlEthernetAddressToStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEthernetAddressToStringW();
	// "RtlEthernetAddressToStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEthernetStringToAddressA();
	// "RtlEthernetStringToAddressA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlEthernetStringToAddressW();
	// "RtlEthernetStringToAddressW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExecuteUmsThread();
	// "RtlExecuteUmsThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExitUserProcess();
	// "RtlExitUserProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExitUserThread();
	// "RtlExitUserThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExpandEnvironmentStrings();
	// "RtlExpandEnvironmentStrings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExpandEnvironmentStrings_U();
	// "RtlExpandEnvironmentStrings_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExpandHashTable();
	// "RtlExpandHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExtendMemoryBlockLookaside();
	// "RtlExtendMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExtendMemoryZone();
	// "RtlExtendMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlExtractBitMap();
	// "RtlExtractBitMap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFillMemory();
	// "RtlFillMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFinalReleaseOutOfProcessMemoryStream();
	// "RtlFinalReleaseOutOfProcessMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindAceByType();
	// "RtlFindAceByType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindActivationContextSectionGuid();
	// "RtlFindActivationContextSectionGuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindActivationContextSectionString();
	// "RtlFindActivationContextSectionString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindCharInUnicodeString();
	// "RtlFindCharInUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindClearBits();
	// "RtlFindClearBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindClearBitsAndSet();
	// "RtlFindClearBitsAndSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindClearRuns();
	// "RtlFindClearRuns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindClosestEncodableLength();
	// "RtlFindClosestEncodableLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindExportedRoutineByName();
	// "RtlFindExportedRoutineByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindLastBackwardRunClear();
	// "RtlFindLastBackwardRunClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindLeastSignificantBit();
	// "RtlFindLeastSignificantBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindLongestRunClear();
	// "RtlFindLongestRunClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindMessage();
	// "RtlFindMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindMostSignificantBit();
	// "RtlFindMostSignificantBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindNextForwardRunClear();
	// "RtlFindNextForwardRunClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindSetBits();
	// "RtlFindSetBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindSetBitsAndClear();
	// "RtlFindSetBitsAndClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFindUnicodeSubstring();
	// "RtlFindUnicodeSubstring" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFirstEntrySList();
	// "RtlFirstEntrySList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFirstFreeAce();
	// "RtlFirstFreeAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFlsAlloc();
	// "RtlFlsAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFlsFree();
	// "RtlFlsFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFlushHeaps();
	// "RtlFlushHeaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFlushSecureMemoryCache();
	// "RtlFlushSecureMemoryCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFormatCurrentUserKeyPath();
	// "RtlFormatCurrentUserKeyPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFormatMessage();
	// "RtlFormatMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFormatMessageEx();
	// "RtlFormatMessageEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeActivationContextStack();
	// "RtlFreeActivationContextStack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeAnsiString();
	// "RtlFreeAnsiString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeHandle();
	// "RtlFreeHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeHeap();
	// "RtlFreeHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeMemoryBlockLookaside();
	// "RtlFreeMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeOemString();
	// "RtlFreeOemString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeSid();
	// "RtlFreeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeThreadActivationContextStack();
	// "RtlFreeThreadActivationContextStack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeUnicodeString();
	// "RtlFreeUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFreeUserStack();
	// "RtlFreeUserStack" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGUIDFromString();
	// "RtlGUIDFromString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGenerate8dot3Name();
	// "RtlGenerate8dot3Name" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetAce();
	// "RtlGetAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetActiveActivationContext();
	// "RtlGetActiveActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetActiveConsoleId();
	// "RtlGetActiveConsoleId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetAppContainerNamedObjectPath();
	// "RtlGetAppContainerNamedObjectPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetAppContainerParent();
	// "RtlGetAppContainerParent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetAppContainerSidType();
	// "RtlGetAppContainerSidType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCallersAddress();
	// "RtlGetCallersAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCompressionWorkSpaceSize();
	// "RtlGetCompressionWorkSpaceSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetConsoleSessionForegroundProcessId();
	// "RtlGetConsoleSessionForegroundProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetControlSecurityDescriptor();
	// "RtlGetControlSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCriticalSectionRecursionCount();
	// "RtlGetCriticalSectionRecursionCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentDirectory_U();
	// "RtlGetCurrentDirectory_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentPeb();
	// "RtlGetCurrentPeb" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentProcessorNumber();
	// "RtlGetCurrentProcessorNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentProcessorNumberEx();
	// "RtlGetCurrentProcessorNumberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentServiceSessionId();
	// "RtlGetCurrentServiceSessionId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentTransaction();
	// "RtlGetCurrentTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetCurrentUmsThread();
	// "RtlGetCurrentUmsThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetDaclSecurityDescriptor();
	// "RtlGetDaclSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetDeviceFamilyInfoEnum();
	// "RtlGetDeviceFamilyInfoEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetElementGenericTable();
	// "RtlGetElementGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetElementGenericTableAvl();
	// "RtlGetElementGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetEnabledExtendedFeatures();
	// "RtlGetEnabledExtendedFeatures" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetExePath();
	// "RtlGetExePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetExtendedContextLength();
	// "RtlGetExtendedContextLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetExtendedFeaturesMask();
	// "RtlGetExtendedFeaturesMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFileMUIPath();
	// "RtlGetFileMUIPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFrame();
	// "RtlGetFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFullPathName_U();
	// "RtlGetFullPathName_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFullPathName_UEx();
	// "RtlGetFullPathName_UEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFullPathName_UstrEx();
	// "RtlGetFullPathName_UstrEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetFunctionTableListHead();
	// "RtlGetFunctionTableListHead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetGroupSecurityDescriptor();
	// "RtlGetGroupSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetIntegerAtom();
	// "RtlGetIntegerAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetInterruptTimePrecise();
	// "RtlGetInterruptTimePrecise" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLastNtStatus();
	// "RtlGetLastNtStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLastWin32Error();
	// "RtlGetLastWin32Error" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLengthWithoutLastFullDosOrNtPathElement();
	// "RtlGetLengthWithoutLastFullDosOrNtPathElement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLengthWithoutTrailingPathSeperators();
	// "RtlGetLengthWithoutTrailingPathSeperators" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLocaleFileMappingAddress();
	// "RtlGetLocaleFileMappingAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetLongestNtPathLength();
	// "RtlGetLongestNtPathLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNativeSystemInformation();
	// "RtlGetNativeSystemInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNextEntryHashTable();
	// "RtlGetNextEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNextUmsListItem();
	// "RtlGetNextUmsListItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNtGlobalFlags();
	// "RtlGetNtGlobalFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNtProductType();
	// "RtlGetNtProductType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetNtVersionNumbers();
	// "RtlGetNtVersionNumbers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetOwnerSecurityDescriptor();
	// "RtlGetOwnerSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetParentLocaleName();
	// "RtlGetParentLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetProcessHeaps();
	// "RtlGetProcessHeaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetProcessPreferredUILanguages();
	// "RtlGetProcessPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetProductInfo();
	// "RtlGetProductInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSaclSecurityDescriptor();
	// "RtlGetSaclSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSearchPath();
	// "RtlGetSearchPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSecurityDescriptorRMControl();
	// "RtlGetSecurityDescriptorRMControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSetBootStatusData();
	// "RtlGetSetBootStatusData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSuiteMask();
	// "RtlGetSuiteMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSystemPreferredUILanguages();
	// "RtlGetSystemPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetSystemTimePrecise();
	// "RtlGetSystemTimePrecise" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetThreadErrorMode();
	// "RtlGetThreadErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetThreadLangIdByIndex();
	// "RtlGetThreadLangIdByIndex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetThreadPreferredUILanguages();
	// "RtlGetThreadPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetThreadWorkOnBehalfTicket();
	// "RtlGetThreadWorkOnBehalfTicket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUILanguageInfo();
	// "RtlGetUILanguageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUmsCompletionListEvent();
	// "RtlGetUmsCompletionListEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUnloadEventTrace();
	// "RtlGetUnloadEventTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUnloadEventTraceEx();
	// "RtlGetUnloadEventTraceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUserInfoHeap();
	// "RtlGetUserInfoHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetUserPreferredUILanguages();
	// "RtlGetUserPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGetVersion();
	// "RtlGetVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGrowFunctionTable();
	// "RtlGrowFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlGuardCheckLongJumpTarget();
	// "RtlGuardCheckLongJumpTarget" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlHashUnicodeString();
	// "RtlHashUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlHeapTrkInitialize();
	// "RtlHeapTrkInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIdentifierAuthoritySid();
	// "RtlIdentifierAuthoritySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIdnToAscii();
	// "RtlIdnToAscii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIdnToNameprepUnicode();
	// "RtlIdnToNameprepUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIdnToUnicode();
	// "RtlIdnToUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImageDirectoryEntryToData();
	// "RtlImageDirectoryEntryToData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImageNtHeader();
	// "RtlImageNtHeader" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImageNtHeaderEx();
	// "RtlImageNtHeaderEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImageRvaToSection();
	// "RtlImageRvaToSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImageRvaToVa();
	// "RtlImageRvaToVa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImpersonateSelf();
	// "RtlImpersonateSelf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlImpersonateSelfEx();
	// "RtlImpersonateSelfEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitAnsiString();
	// "RtlInitAnsiString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitAnsiStringEx();
	// "RtlInitAnsiStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitBarrier();
	// "RtlInitBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitCodePageTable();
	// "RtlInitCodePageTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitEnumerationHashTable();
	// "RtlInitEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitMemoryStream();
	// "RtlInitMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitNlsTables();
	// "RtlInitNlsTables" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitOutOfProcessMemoryStream();
	// "RtlInitOutOfProcessMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitString();
	// "RtlInitString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitStringEx();
	// "RtlInitStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitStrongEnumerationHashTable();
	// "RtlInitStrongEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitUnicodeString();
	// "RtlInitUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitUnicodeStringEx();
	// "RtlInitUnicodeStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitWeakEnumerationHashTable();
	// "RtlInitWeakEnumerationHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeAtomPackage();
	// "RtlInitializeAtomPackage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeBitMap();
	// "RtlInitializeBitMap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeConditionVariable();
	// "RtlInitializeConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeContext();
	// "RtlInitializeContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeCriticalSection();
	// "RtlInitializeCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeCriticalSectionAndSpinCount();
	// "RtlInitializeCriticalSectionAndSpinCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeCriticalSectionEx();
	// "RtlInitializeCriticalSectionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeExtendedContext();
	// "RtlInitializeExtendedContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeGenericTable();
	// "RtlInitializeGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeGenericTableAvl();
	// "RtlInitializeGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeHandleTable();
	// "RtlInitializeHandleTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeNtUserPfn();
	// "RtlInitializeNtUserPfn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeRXact();
	// "RtlInitializeRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeResource();
	// "RtlInitializeResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeSListHead();
	// "RtlInitializeSListHead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeSRWLock();
	// "RtlInitializeSRWLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeSid();
	// "RtlInitializeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInitializeSidEx();
	// "RtlInitializeSidEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInsertElementGenericTable();
	// "RtlInsertElementGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInsertElementGenericTableAvl();
	// "RtlInsertElementGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInsertElementGenericTableFull();
	// "RtlInsertElementGenericTableFull" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInsertElementGenericTableFullAvl();
	// "RtlInsertElementGenericTableFullAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInsertEntryHashTable();
	// "RtlInsertEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInstallFunctionTableCallback();
	// "RtlInstallFunctionTableCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInt64ToUnicodeString();
	// "RtlInt64ToUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIntegerToChar();
	// "RtlIntegerToChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIntegerToUnicodeString();
	// "RtlIntegerToUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedClearBitRun();
	// "RtlInterlockedClearBitRun" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedFlushSList();
	// "RtlInterlockedFlushSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedPopEntrySList();
	// "RtlInterlockedPopEntrySList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedPushEntrySList();
	// "RtlInterlockedPushEntrySList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedPushListSList();
	// "RtlInterlockedPushListSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedPushListSListEx();
	// "RtlInterlockedPushListSListEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInterlockedSetBitRun();
	// "RtlInterlockedSetBitRun" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIoDecodeMemIoResource();
	// "RtlIoDecodeMemIoResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIoEncodeMemIoResource();
	// "RtlIoEncodeMemIoResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4AddressToStringA();
	// "RtlIpv4AddressToStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4AddressToStringExA();
	// "RtlIpv4AddressToStringExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4AddressToStringExW();
	// "RtlIpv4AddressToStringExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4AddressToStringW();
	// "RtlIpv4AddressToStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4StringToAddressA();
	// "RtlIpv4StringToAddressA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4StringToAddressExA();
	// "RtlIpv4StringToAddressExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4StringToAddressExW();
	// "RtlIpv4StringToAddressExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv4StringToAddressW();
	// "RtlIpv4StringToAddressW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6AddressToStringA();
	// "RtlIpv6AddressToStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6AddressToStringExA();
	// "RtlIpv6AddressToStringExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6AddressToStringExW();
	// "RtlIpv6AddressToStringExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6AddressToStringW();
	// "RtlIpv6AddressToStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6StringToAddressA();
	// "RtlIpv6StringToAddressA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6StringToAddressExA();
	// "RtlIpv6StringToAddressExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6StringToAddressExW();
	// "RtlIpv6StringToAddressExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIpv6StringToAddressW();
	// "RtlIpv6StringToAddressW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsActivationContextActive();
	// "RtlIsActivationContextActive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsCapabilitySid();
	// "RtlIsCapabilitySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsCriticalSectionLocked();
	// "RtlIsCriticalSectionLocked" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsCriticalSectionLockedByThread();
	// "RtlIsCriticalSectionLockedByThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsCurrentThreadAttachExempt();
	// "RtlIsCurrentThreadAttachExempt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsDosDeviceName_U();
	// "RtlIsDosDeviceName_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsGenericTableEmpty();
	// "RtlIsGenericTableEmpty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsGenericTableEmptyAvl();
	// "RtlIsGenericTableEmptyAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsLongPathAwareProcessByManifest();
	// "RtlIsLongPathAwareProcessByManifest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsMultiSessionSku();
	// "RtlIsMultiSessionSku" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsMultiUsersInSessionSku();
	// "RtlIsMultiUsersInSessionSku" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsNameInExpression();
	// "RtlIsNameInExpression" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsNameLegalDOS8Dot3();
	// "RtlIsNameLegalDOS8Dot3" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsNormalizedString();
	// "RtlIsNormalizedString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsPackageSid();
	// "RtlIsPackageSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsParentOfChildAppContainer();
	// "RtlIsParentOfChildAppContainer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsProcessorFeaturePresent();
	// "RtlIsProcessorFeaturePresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsTextUnicode();
	// "RtlIsTextUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsThreadWithinLoaderCallout();
	// "RtlIsThreadWithinLoaderCallout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsUntrustedObject();
	// "RtlIsUntrustedObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsValidHandle();
	// "RtlIsValidHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsValidIndexHandle();
	// "RtlIsValidIndexHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsValidLocaleName();
	// "RtlIsValidLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlIsValidProcessTrustLabelSid();
	// "RtlIsValidProcessTrustLabelSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlKnownExceptionFilter();
	// "RtlKnownExceptionFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLCIDToCultureName();
	// "RtlLCIDToCultureName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLargeIntegerToChar();
	// "RtlLargeIntegerToChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLcidToLocaleName();
	// "RtlLcidToLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLeaveCriticalSection();
	// "RtlLeaveCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLengthRequiredSid();
	// "RtlLengthRequiredSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLengthSecurityDescriptor();
	// "RtlLengthSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLengthSid();
	// "RtlLengthSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLengthSidAsUnicodeString();
	// "RtlLengthSidAsUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLoadString();
	// "RtlLoadString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLocalTimeToSystemTime();
	// "RtlLocalTimeToSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLocaleNameToLcid();
	// "RtlLocaleNameToLcid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLocateExtendedFeature();
	// "RtlLocateExtendedFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLocateExtendedFeature2();
	// "RtlLocateExtendedFeature2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLocateLegacyContext();
	// "RtlLocateLegacyContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockBootStatusData();
	// "RtlLockBootStatusData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockCurrentThread();
	// "RtlLockCurrentThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockHeap();
	// "RtlLockHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockMemoryBlockLookaside();
	// "RtlLockMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockMemoryStreamRegion();
	// "RtlLockMemoryStreamRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockMemoryZone();
	// "RtlLockMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLockModuleSection();
	// "RtlLockModuleSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLogStackBackTrace();
	// "RtlLogStackBackTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupAtomInAtomTable();
	// "RtlLookupAtomInAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupElementGenericTable();
	// "RtlLookupElementGenericTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupElementGenericTableAvl();
	// "RtlLookupElementGenericTableAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupElementGenericTableFull();
	// "RtlLookupElementGenericTableFull" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupElementGenericTableFullAvl();
	// "RtlLookupElementGenericTableFullAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupEntryHashTable();
	// "RtlLookupEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupFunctionEntry();
	// "RtlLookupFunctionEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupFunctionTable();
	// "RtlLookupFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMakeSelfRelativeSD();
	// "RtlMakeSelfRelativeSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMapGenericMask();
	// "RtlMapGenericMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMapSecurityErrorToNtStatus();
	// "RtlMapSecurityErrorToNtStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMoveMemory();
	// "RtlMoveMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMultiAppendUnicodeStringBuffer();
	// "RtlMultiAppendUnicodeStringBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMultiByteToUnicodeN();
	// "RtlMultiByteToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMultiByteToUnicodeSize();
	// "RtlMultiByteToUnicodeSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMultipleAllocateHeap();
	// "RtlMultipleAllocateHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMultipleFreeHeap();
	// "RtlMultipleFreeHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNewInstanceSecurityObject();
	// "RtlNewInstanceSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNewSecurityGrantedAccess();
	// "RtlNewSecurityGrantedAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNewSecurityObject();
	// "RtlNewSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNewSecurityObjectEx();
	// "RtlNewSecurityObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNewSecurityObjectWithMultipleInheritance();
	// "RtlNewSecurityObjectWithMultipleInheritance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNormalizeProcessParams();
	// "RtlNormalizeProcessParams" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNormalizeString();
	// "RtlNormalizeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNtPathNameToDosPathName();
	// "RtlNtPathNameToDosPathName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNtStatusToDosError();
	// "RtlNtStatusToDosError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNtStatusToDosErrorNoTeb();
	// "RtlNtStatusToDosErrorNoTeb" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNtdllName();
	// "RtlNtdllName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberGenericTableElements();
	// "RtlNumberGenericTableElements" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberGenericTableElementsAvl();
	// "RtlNumberGenericTableElementsAvl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberOfClearBits();
	// "RtlNumberOfClearBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberOfClearBitsInRange();
	// "RtlNumberOfClearBitsInRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberOfSetBits();
	// "RtlNumberOfSetBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberOfSetBitsInRange();
	// "RtlNumberOfSetBitsInRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlNumberOfSetBitsUlongPtr();
	// "RtlNumberOfSetBitsUlongPtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOemStringToUnicodeSize();
	// "RtlOemStringToUnicodeSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOemStringToUnicodeString();
	// "RtlOemStringToUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOemToUnicodeN();
	// "RtlOemToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOpenCurrentUser();
	// "RtlOpenCurrentUser" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOsDeploymentState();
	// "RtlOsDeploymentState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlOwnerAcesPresent();
	// "RtlOwnerAcesPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPcToFileHeader();
	// "RtlPcToFileHeader" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPinAtomInAtomTable();
	// "RtlPinAtomInAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPopFrame();
	// "RtlPopFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPrefixString();
	// "RtlPrefixString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPrefixUnicodeString();
	// "RtlPrefixUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPrepareForProcessCloning();
	// "RtlPrepareForProcessCloning" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlProcessFlsData();
	// "RtlProcessFlsData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlProtectHeap();
	// "RtlProtectHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPublishWnfStateData();
	// "RtlPublishWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPushFrame();
	// "RtlPushFrame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryActivationContextApplicationSettings();
	// "RtlQueryActivationContextApplicationSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryAtomInAtomTable();
	// "RtlQueryAtomInAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryCriticalSectionOwner();
	// "RtlQueryCriticalSectionOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryDepthSList();
	// "RtlQueryDepthSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryDynamicTimeZoneInformation();
	// "RtlQueryDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryElevationFlags();
	// "RtlQueryElevationFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryEnvironmentVariable();
	// "RtlQueryEnvironmentVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryEnvironmentVariable_U();
	// "RtlQueryEnvironmentVariable_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryHeapInformation();
	// "RtlQueryHeapInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryInformationAcl();
	// "RtlQueryInformationAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryInformationActivationContext();
	// "RtlQueryInformationActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryInformationActiveActivationContext();
	// "RtlQueryInformationActiveActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryInterfaceMemoryStream();
	// "RtlQueryInterfaceMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryModuleInformation();
	// "RtlQueryModuleInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryPackageClaims();
	// "RtlQueryPackageClaims" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryPackageIdentity();
	// "RtlQueryPackageIdentity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryPackageIdentityEx();
	// "RtlQueryPackageIdentityEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryPerformanceCounter();
	// "RtlQueryPerformanceCounter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryPerformanceFrequency();
	// "RtlQueryPerformanceFrequency" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryProcessBackTraceInformation();
	// "RtlQueryProcessBackTraceInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryProcessDebugInformation();
	// "RtlQueryProcessDebugInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryProcessHeapInformation();
	// "RtlQueryProcessHeapInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryProcessLockInformation();
	// "RtlQueryProcessLockInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryProtectedPolicy();
	// "RtlQueryProtectedPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryRegistryValues();
	// "RtlQueryRegistryValues" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryRegistryValuesEx();
	// "RtlQueryRegistryValuesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryResourcePolicy();
	// "RtlQueryResourcePolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQuerySecurityObject();
	// "RtlQuerySecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryTagHeap();
	// "RtlQueryTagHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryThreadProfiling();
	// "RtlQueryThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryTimeZoneInformation();
	// "RtlQueryTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryUmsThreadInformation();
	// "RtlQueryUmsThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryUnbiasedInterruptTime();
	// "RtlQueryUnbiasedInterruptTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryValidationRunlevel();
	// "RtlQueryValidationRunlevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryWnfMetaNotification();
	// "RtlQueryWnfMetaNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryWnfStateData();
	// "RtlQueryWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueryWnfStateDataWithExplicitScope();
	// "RtlQueryWnfStateDataWithExplicitScope" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueueApcWow64Thread();
	// "RtlQueueApcWow64Thread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlQueueWorkItem();
	// "RtlQueueWorkItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRaiseException();
	// "RtlRaiseException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRaiseStatus();
	// "RtlRaiseStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRandom();
	// "RtlRandom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRandomEx();
	// "RtlRandomEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRbInsertNodeEx();
	// "RtlRbInsertNodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRbRemoveNode();
	// "RtlRbRemoveNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReAllocateHeap();
	// "RtlReAllocateHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReadMemoryStream();
	// "RtlReadMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReadOutOfProcessMemoryStream();
	// "RtlReadOutOfProcessMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReadThreadProfilingData();
	// "RtlReadThreadProfilingData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRealPredecessor();
	// "RtlRealPredecessor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRealSuccessor();
	// "RtlRealSuccessor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRegisterForWnfMetaNotification();
	// "RtlRegisterForWnfMetaNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRegisterSecureMemoryCacheCallback();
	// "RtlRegisterSecureMemoryCacheCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRegisterThreadWithCsrss();
	// "RtlRegisterThreadWithCsrss" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRegisterWait();
	// "RtlRegisterWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseActivationContext();
	// "RtlReleaseActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseMemoryStream();
	// "RtlReleaseMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleasePath();
	// "RtlReleasePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleasePebLock();
	// "RtlReleasePebLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleasePrivilege();
	// "RtlReleasePrivilege" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseRelativeName();
	// "RtlReleaseRelativeName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseResource();
	// "RtlReleaseResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseSRWLockExclusive();
	// "RtlReleaseSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReleaseSRWLockShared();
	// "RtlReleaseSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRemoteCall();
	// "RtlRemoteCall" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRemoveEntryHashTable();
	// "RtlRemoveEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRemovePrivileges();
	// "RtlRemovePrivileges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRemoveVectoredContinueHandler();
	// "RtlRemoveVectoredContinueHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRemoveVectoredExceptionHandler();
	// "RtlRemoveVectoredExceptionHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReplaceSidInSd();
	// "RtlReplaceSidInSd" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReplaceSystemDirectoryInPath();
	// "RtlReplaceSystemDirectoryInPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReportException();
	// "RtlReportException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReportExceptionEx();
	// "RtlReportExceptionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReportSilentProcessExit();
	// "RtlReportSilentProcessExit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlReportSqmEscalation();
	// "RtlReportSqmEscalation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlResetMemoryBlockLookaside();
	// "RtlResetMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlResetMemoryZone();
	// "RtlResetMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlResetNtUserPfn();
	// "RtlResetNtUserPfn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlResetRtlTranslations();
	// "RtlResetRtlTranslations" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRestoreBootStatusDefaults();
	// "RtlRestoreBootStatusDefaults" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRestoreContext();
	// "RtlRestoreContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRestoreLastWin32Error();
	// "RtlRestoreLastWin32Error" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRetrieveNtUserPfn();
	// "RtlRetrieveNtUserPfn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRevertMemoryStream();
	// "RtlRevertMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunDecodeUnicodeString();
	// "RtlRunDecodeUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunEncodeUnicodeString();
	// "RtlRunEncodeUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunOnceBeginInitialize();
	// "RtlRunOnceBeginInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunOnceComplete();
	// "RtlRunOnceComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunOnceExecuteOnce();
	// "RtlRunOnceExecuteOnce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRunOnceInitialize();
	// "RtlRunOnceInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSecondsSince1970ToTime();
	// "RtlSecondsSince1970ToTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSecondsSince1980ToTime();
	// "RtlSecondsSince1980ToTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSeekMemoryStream();
	// "RtlSeekMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSelfRelativeToAbsoluteSD();
	// "RtlSelfRelativeToAbsoluteSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSelfRelativeToAbsoluteSD2();
	// "RtlSelfRelativeToAbsoluteSD2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSendMsgToSm();
	// "RtlSendMsgToSm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetAllBits();
	// "RtlSetAllBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetAttributesSecurityDescriptor();
	// "RtlSetAttributesSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetBit();
	// "RtlSetBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetBits();
	// "RtlSetBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetControlSecurityDescriptor();
	// "RtlSetControlSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetCriticalSectionSpinCount();
	// "RtlSetCriticalSectionSpinCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetCurrentDirectory_U();
	// "RtlSetCurrentDirectory_U" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetCurrentEnvironment();
	// "RtlSetCurrentEnvironment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetCurrentTransaction();
	// "RtlSetCurrentTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetDaclSecurityDescriptor();
	// "RtlSetDaclSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetDynamicTimeZoneInformation();
	// "RtlSetDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetEnvironmentStrings();
	// "RtlSetEnvironmentStrings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetEnvironmentVar();
	// "RtlSetEnvironmentVar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetEnvironmentVariable();
	// "RtlSetEnvironmentVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetExtendedFeaturesMask();
	// "RtlSetExtendedFeaturesMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetGroupSecurityDescriptor();
	// "RtlSetGroupSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetHeapInformation();
	// "RtlSetHeapInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetInformationAcl();
	// "RtlSetInformationAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetIoCompletionCallback();
	// "RtlSetIoCompletionCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetLastWin32Error();
	// "RtlSetLastWin32Error" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetLastWin32ErrorAndNtStatusFromNtStatus();
	// "RtlSetLastWin32ErrorAndNtStatusFromNtStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetMemoryStreamSize();
	// "RtlSetMemoryStreamSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetOwnerSecurityDescriptor();
	// "RtlSetOwnerSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetPortableOperatingSystem();
	// "RtlSetPortableOperatingSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetProcessDebugInformation();
	// "RtlSetProcessDebugInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetProcessIsCritical();
	// "RtlSetProcessIsCritical" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetProcessPreferredUILanguages();
	// "RtlSetProcessPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetProtectedPolicy();
	// "RtlSetProtectedPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetSaclSecurityDescriptor();
	// "RtlSetSaclSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetSearchPathMode();
	// "RtlSetSearchPathMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetSecurityDescriptorRMControl();
	// "RtlSetSecurityDescriptorRMControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetSecurityObject();
	// "RtlSetSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetSecurityObjectEx();
	// "RtlSetSecurityObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadErrorMode();
	// "RtlSetThreadErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadIsCritical();
	// "RtlSetThreadIsCritical" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadPoolStartFunc();
	// "RtlSetThreadPoolStartFunc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadPreferredUILanguages();
	// "RtlSetThreadPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadSubProcessTag();
	// "RtlSetThreadSubProcessTag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetThreadWorkOnBehalfTicket();
	// "RtlSetThreadWorkOnBehalfTicket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetTimeZoneInformation();
	// "RtlSetTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetTimer();
	// "RtlSetTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetUmsThreadInformation();
	// "RtlSetUmsThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetUnhandledExceptionFilter();
	// "RtlSetUnhandledExceptionFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetUserFlagsHeap();
	// "RtlSetUserFlagsHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSetUserValueHeap();
	// "RtlSetUserValueHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidDominates();
	// "RtlSidDominates" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidDominatesForTrust();
	// "RtlSidDominatesForTrust" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidEqualLevel();
	// "RtlSidEqualLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidHashInitialize();
	// "RtlSidHashInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidHashLookup();
	// "RtlSidHashLookup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSidIsHigherLevel();
	// "RtlSidIsHigherLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSizeHeap();
	// "RtlSizeHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSleepConditionVariableCS();
	// "RtlSleepConditionVariableCS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSleepConditionVariableSRW();
	// "RtlSleepConditionVariableSRW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxAreAllClear();
	// "RtlSparseBitmapCtxAreAllClear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxAreAllSet();
	// "RtlSparseBitmapCtxAreAllSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxCheckBit();
	// "RtlSparseBitmapCtxCheckBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxCleanup();
	// "RtlSparseBitmapCtxCleanup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxClearBits();
	// "RtlSparseBitmapCtxClearBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxClearBitsEx();
	// "RtlSparseBitmapCtxClearBitsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxCountBitsSet();
	// "RtlSparseBitmapCtxCountBitsSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxFindNextBitSet();
	// "RtlSparseBitmapCtxFindNextBitSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxFindSetRuns();
	// "RtlSparseBitmapCtxFindSetRuns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxInitialize();
	// "RtlSparseBitmapCtxInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxMetadataForBit();
	// "RtlSparseBitmapCtxMetadataForBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxOrBitmap();
	// "RtlSparseBitmapCtxOrBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxPrepareBits();
	// "RtlSparseBitmapCtxPrepareBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxSetBits();
	// "RtlSparseBitmapCtxSetBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxSetBitsEx();
	// "RtlSparseBitmapCtxSetBitsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxStart();
	// "RtlSparseBitmapCtxStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapCtxSubtractBitmap();
	// "RtlSparseBitmapCtxSubtractBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSparseBitmapEnumerateBitmap();
	// "RtlSparseBitmapEnumerateBitmap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSplay();
	// "RtlSplay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlStartRXact();
	// "RtlStartRXact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlStatMemoryStream();
	// "RtlStatMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlStringFromGUID();
	// "RtlStringFromGUID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlStringFromGUIDEx();
	// "RtlStringFromGUIDEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlStronglyEnumerateEntryHashTable();
	// "RtlStronglyEnumerateEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSubAuthorityCountSid();
	// "RtlSubAuthorityCountSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSubAuthoritySid();
	// "RtlSubAuthoritySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSubscribeWnfStateChangeNotification();
	// "RtlSubscribeWnfStateChangeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSubtreePredecessor();
	// "RtlSubtreePredecessor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSubtreeSuccessor();
	// "RtlSubtreeSuccessor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSwitchedVVI();
	// "RtlSwitchedVVI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlSystemTimeToLocalTime();
	// "RtlSystemTimeToLocalTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTestAndPublishWnfStateData();
	// "RtlTestAndPublishWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTestBit();
	// "RtlTestBit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTestProtectedAccess();
	// "RtlTestProtectedAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTimeFieldsToTime();
	// "RtlTimeFieldsToTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTimeToElapsedTimeFields();
	// "RtlTimeToElapsedTimeFields" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTimeToSecondsSince1970();
	// "RtlTimeToSecondsSince1970" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTimeToSecondsSince1980();
	// "RtlTimeToSecondsSince1980" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTimeToTimeFields();
	// "RtlTimeToTimeFields" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseAdd();
	// "RtlTraceDatabaseAdd" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseCreate();
	// "RtlTraceDatabaseCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseDestroy();
	// "RtlTraceDatabaseDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseEnumerate();
	// "RtlTraceDatabaseEnumerate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseFind();
	// "RtlTraceDatabaseFind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseLock();
	// "RtlTraceDatabaseLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseUnlock();
	// "RtlTraceDatabaseUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTraceDatabaseValidate();
	// "RtlTraceDatabaseValidate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTryAcquirePebLock();
	// "RtlTryAcquirePebLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTryAcquireSRWLockExclusive();
	// "RtlTryAcquireSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTryAcquireSRWLockShared();
	// "RtlTryAcquireSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTryConvertSRWLockSharedToExclusiveOrRelease();
	// "RtlTryConvertSRWLockSharedToExclusiveOrRelease" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlTryEnterCriticalSection();
	// "RtlTryEnterCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUTF8ToUnicodeN();
	// "RtlUTF8ToUnicodeN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUmsThreadYield();
	// "RtlUmsThreadYield" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnhandledExceptionFilter();
	// "RtlUnhandledExceptionFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnhandledExceptionFilter2();
	// "RtlUnhandledExceptionFilter2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToAnsiSize();
	// "RtlUnicodeStringToAnsiSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToAnsiString();
	// "RtlUnicodeStringToAnsiString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToCountedOemString();
	// "RtlUnicodeStringToCountedOemString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToInteger();
	// "RtlUnicodeStringToInteger" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToOemSize();
	// "RtlUnicodeStringToOemSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeStringToOemString();
	// "RtlUnicodeStringToOemString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeToCustomCPN();
	// "RtlUnicodeToCustomCPN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeToMultiByteN();
	// "RtlUnicodeToMultiByteN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeToMultiByteSize();
	// "RtlUnicodeToMultiByteSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeToOemN();
	// "RtlUnicodeToOemN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnicodeToUTF8N();
	// "RtlUnicodeToUTF8N" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUniform();
	// "RtlUniform" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockBootStatusData();
	// "RtlUnlockBootStatusData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockCurrentThread();
	// "RtlUnlockCurrentThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockHeap();
	// "RtlUnlockHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockMemoryBlockLookaside();
	// "RtlUnlockMemoryBlockLookaside" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockMemoryStreamRegion();
	// "RtlUnlockMemoryStreamRegion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockMemoryZone();
	// "RtlUnlockMemoryZone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnlockModuleSection();
	// "RtlUnlockModuleSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnsubscribeWnfNotificationWaitForCompletion();
	// "RtlUnsubscribeWnfNotificationWaitForCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnsubscribeWnfNotificationWithCompletionCallback();
	// "RtlUnsubscribeWnfNotificationWithCompletionCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnsubscribeWnfStateChangeNotification();
	// "RtlUnsubscribeWnfStateChangeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnwind();
	// "RtlUnwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnwindEx();
	// "RtlUnwindEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeChar();
	// "RtlUpcaseUnicodeChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeString();
	// "RtlUpcaseUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeStringToAnsiString();
	// "RtlUpcaseUnicodeStringToAnsiString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeStringToCountedOemString();
	// "RtlUpcaseUnicodeStringToCountedOemString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeStringToOemString();
	// "RtlUpcaseUnicodeStringToOemString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeToCustomCPN();
	// "RtlUpcaseUnicodeToCustomCPN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeToMultiByteN();
	// "RtlUpcaseUnicodeToMultiByteN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpcaseUnicodeToOemN();
	// "RtlUpcaseUnicodeToOemN" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpdateClonedCriticalSection();
	// "RtlUpdateClonedCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpdateClonedSRWLock();
	// "RtlUpdateClonedSRWLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpdateTimer();
	// "RtlUpdateTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpperChar();
	// "RtlUpperChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUpperString();
	// "RtlUpperString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUserThreadStart();
	// "RtlUserThreadStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidAcl();
	// "RtlValidAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidProcessProtection();
	// "RtlValidProcessProtection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidRelativeSecurityDescriptor();
	// "RtlValidRelativeSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidSecurityDescriptor();
	// "RtlValidSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidSid();
	// "RtlValidSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidateHeap();
	// "RtlValidateHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidateProcessHeaps();
	// "RtlValidateProcessHeaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlValidateUnicodeString();
	// "RtlValidateUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlVerifyVersionInfo();
	// "RtlVerifyVersionInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlVirtualUnwind();
	// "RtlVirtualUnwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWaitForWnfMetaNotification();
	// "RtlWaitForWnfMetaNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWaitOnAddress();
	// "RtlWaitOnAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeAddressAll();
	// "RtlWakeAddressAll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeAddressAllNoFence();
	// "RtlWakeAddressAllNoFence" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeAddressSingle();
	// "RtlWakeAddressSingle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeAddressSingleNoFence();
	// "RtlWakeAddressSingleNoFence" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeAllConditionVariable();
	// "RtlWakeAllConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWakeConditionVariable();
	// "RtlWakeConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWalkFrameChain();
	// "RtlWalkFrameChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWalkHeap();
	// "RtlWalkHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWeaklyEnumerateEntryHashTable();
	// "RtlWeaklyEnumerateEntryHashTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWerpReportException();
	// "RtlWerpReportException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWnfCompareChangeStamp();
	// "RtlWnfCompareChangeStamp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWnfDllUnloadCallback();
	// "RtlWnfDllUnloadCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64CallFunction64();
	// "RtlWow64CallFunction64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64EnableFsRedirection();
	// "RtlWow64EnableFsRedirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64EnableFsRedirectionEx();
	// "RtlWow64EnableFsRedirectionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetCpuAreaInfo();
	// "RtlWow64GetCpuAreaInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetCurrentCpuArea();
	// "RtlWow64GetCurrentCpuArea" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetCurrentMachine();
	// "RtlWow64GetCurrentMachine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetProcessMachines();
	// "RtlWow64GetProcessMachines" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetThreadContext();
	// "RtlWow64GetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64GetThreadSelectorEntry();
	// "RtlWow64GetThreadSelectorEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64IsWowGuestMachineSupported();
	// "RtlWow64IsWowGuestMachineSupported" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64LogMessageInEventLogger();
	// "RtlWow64LogMessageInEventLogger" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64SetThreadContext();
	// "RtlWow64SetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64SuspendThread();
	// "RtlWow64SuspendThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWow64SuspendThreadEx();
	// "RtlWow64SuspendThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWriteMemoryStream();
	// "RtlWriteMemoryStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlWriteRegistryValue();
	// "RtlWriteRegistryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlZeroHeap();
	// "RtlZeroHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlZeroMemory();
	// "RtlZeroMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlZombifyActivationContext();
	// "RtlZombifyActivationContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpApplyLengthFunction();
	// "RtlpApplyLengthFunction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpCheckDynamicTimeZoneInformation();
	// "RtlpCheckDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpCleanupRegistryKeys();
	// "RtlpCleanupRegistryKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpConvertAbsoluteToRelativeSecurityAttribute();
	// "RtlpConvertAbsoluteToRelativeSecurityAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpConvertCultureNamesToLCIDs();
	// "RtlpConvertCultureNamesToLCIDs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpConvertLCIDsToCultureNames();
	// "RtlpConvertLCIDsToCultureNames" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpConvertRelativeToAbsoluteSecurityAttribute();
	// "RtlpConvertRelativeToAbsoluteSecurityAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpCreateProcessRegistryInfo();
	// "RtlpCreateProcessRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpEnsureBufferSize();
	// "RtlpEnsureBufferSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpExecuteUmsThread();
	// "RtlpExecuteUmsThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpFreezeTimeBias();
	// "RtlpFreezeTimeBias" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpGetDeviceFamilyInfoEnum();
	// "RtlpGetDeviceFamilyInfoEnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpGetLCIDFromLangInfoNode();
	// "RtlpGetLCIDFromLangInfoNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpGetNameFromLangInfoNode();
	// "RtlpGetNameFromLangInfoNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpGetSystemDefaultUILanguage();
	// "RtlpGetSystemDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpGetUserOrMachineUILanguage4NLS();
	// "RtlpGetUserOrMachineUILanguage4NLS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpInitializeLangRegistryInfo();
	// "RtlpInitializeLangRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpIsQualifiedLanguage();
	// "RtlpIsQualifiedLanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpLoadMachineUIByPolicy();
	// "RtlpLoadMachineUIByPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpLoadUserUIByPolicy();
	// "RtlpLoadUserUIByPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpMergeSecurityAttributeInformation();
	// "RtlpMergeSecurityAttributeInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpMuiFreeLangRegistryInfo();
	// "RtlpMuiFreeLangRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpMuiRegCreateRegistryInfo();
	// "RtlpMuiRegCreateRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpMuiRegFreeRegistryInfo();
	// "RtlpMuiRegFreeRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpMuiRegLoadRegistryInfo();
	// "RtlpMuiRegLoadRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNotOwnerCriticalSection();
	// "RtlpNotOwnerCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtCreateKey();
	// "RtlpNtCreateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtEnumerateSubKey();
	// "RtlpNtEnumerateSubKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtMakeTemporaryKey();
	// "RtlpNtMakeTemporaryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtOpenKey();
	// "RtlpNtOpenKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtQueryValueKey();
	// "RtlpNtQueryValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpNtSetValueKey();
	// "RtlpNtSetValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpQueryDefaultUILanguage();
	// "RtlpQueryDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpQueryProcessDebugInformationFromWow64();
	// "RtlpQueryProcessDebugInformationFromWow64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpRefreshCachedUILanguage();
	// "RtlpRefreshCachedUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpSetInstallLanguage();
	// "RtlpSetInstallLanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpSetPreferredUILanguages();
	// "RtlpSetPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpSetUserPreferredUILanguages();
	// "RtlpSetUserPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpUmsExecuteYieldThreadEnd();
	// "RtlpUmsExecuteYieldThreadEnd" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpUmsThreadYield();
	// "RtlpUmsThreadYield" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpUnWaitCriticalSection();
	// "RtlpUnWaitCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpVerifyAndCommitUILanguageSettings();
	// "RtlpVerifyAndCommitUILanguageSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlpWaitForCriticalSection();
	// "RtlpWaitForCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlxAnsiStringToUnicodeSize();
	// "RtlxAnsiStringToUnicodeSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlxOemStringToUnicodeSize();
	// "RtlxOemStringToUnicodeSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlxUnicodeStringToAnsiSize();
	// "RtlxUnicodeStringToAnsiSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlxUnicodeStringToOemSize();
	// "RtlxUnicodeStringToOemSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SbExecuteProcedure();
	// "SbExecuteProcedure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SbSelectProcedure();
	// "SbSelectProcedure" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShipAssert();
	// "ShipAssert" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShipAssertGetBufferInfo();
	// "ShipAssertGetBufferInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShipAssertMsgA();
	// "ShipAssertMsgA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShipAssertMsgW();
	// "ShipAssertMsgW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocAlpcCompletion();
	// "TpAllocAlpcCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocAlpcCompletionEx();
	// "TpAllocAlpcCompletionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocCleanupGroup();
	// "TpAllocCleanupGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocIoCompletion();
	// "TpAllocIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocJobNotification();
	// "TpAllocJobNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocPool();
	// "TpAllocPool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocTimer();
	// "TpAllocTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocWait();
	// "TpAllocWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAllocWork();
	// "TpAllocWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAlpcRegisterCompletionList();
	// "TpAlpcRegisterCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpAlpcUnregisterCompletionList();
	// "TpAlpcUnregisterCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackDetectedUnrecoverableError();
	// "TpCallbackDetectedUnrecoverableError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackIndependent();
	// "TpCallbackIndependent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackLeaveCriticalSectionOnCompletion();
	// "TpCallbackLeaveCriticalSectionOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackMayRunLong();
	// "TpCallbackMayRunLong" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackReleaseMutexOnCompletion();
	// "TpCallbackReleaseMutexOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackReleaseSemaphoreOnCompletion();
	// "TpCallbackReleaseSemaphoreOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackSendAlpcMessageOnCompletion();
	// "TpCallbackSendAlpcMessageOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackSendPendingAlpcMessage();
	// "TpCallbackSendPendingAlpcMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackSetEventOnCompletion();
	// "TpCallbackSetEventOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCallbackUnloadDllOnCompletion();
	// "TpCallbackUnloadDllOnCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCancelAsyncIoOperation();
	// "TpCancelAsyncIoOperation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCaptureCaller();
	// "TpCaptureCaller" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpCheckTerminateWorker();
	// "TpCheckTerminateWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpDbgDumpHeapUsage();
	// "TpDbgDumpHeapUsage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpDbgSetLogRoutine();
	// "TpDbgSetLogRoutine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpDisablePoolCallbackChecks();
	// "TpDisablePoolCallbackChecks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpDisassociateCallback();
	// "TpDisassociateCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpIsTimerSet();
	// "TpIsTimerSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpPostWork();
	// "TpPostWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpQueryPoolStackInformation();
	// "TpQueryPoolStackInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseAlpcCompletion();
	// "TpReleaseAlpcCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseCleanupGroup();
	// "TpReleaseCleanupGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseCleanupGroupMembers();
	// "TpReleaseCleanupGroupMembers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseIoCompletion();
	// "TpReleaseIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseJobNotification();
	// "TpReleaseJobNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleasePool();
	// "TpReleasePool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseTimer();
	// "TpReleaseTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseWait();
	// "TpReleaseWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpReleaseWork();
	// "TpReleaseWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetDefaultPoolMaxThreads();
	// "TpSetDefaultPoolMaxThreads" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetDefaultPoolStackInformation();
	// "TpSetDefaultPoolStackInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolMaxThreads();
	// "TpSetPoolMaxThreads" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolMaxThreadsSoftLimit();
	// "TpSetPoolMaxThreadsSoftLimit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolMinThreads();
	// "TpSetPoolMinThreads" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolStackInformation();
	// "TpSetPoolStackInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolThreadBasePriority();
	// "TpSetPoolThreadBasePriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetPoolWorkerThreadIdleTimeout();
	// "TpSetPoolWorkerThreadIdleTimeout" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetTimer();
	// "TpSetTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetTimerEx();
	// "TpSetTimerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetWait();
	// "TpSetWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSetWaitEx();
	// "TpSetWaitEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpSimpleTryPost();
	// "TpSimpleTryPost" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpStartAsyncIoOperation();
	// "TpStartAsyncIoOperation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpTimerOutstandingCallbackCount();
	// "TpTimerOutstandingCallbackCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpTrimPools();
	// "TpTrimPools" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForAlpcCompletion();
	// "TpWaitForAlpcCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForIoCompletion();
	// "TpWaitForIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForJobNotification();
	// "TpWaitForJobNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForTimer();
	// "TpWaitForTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForWait();
	// "TpWaitForWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TpWaitForWork();
	// "TpWaitForWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerSetConditionMask();
	// "VerSetConditionMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerReportSQMEvent();
	// "WerReportSQMEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmAddToAverageDWORD();
	// "WinSqmAddToAverageDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmAddToStream();
	// "WinSqmAddToStream" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmAddToStreamEx();
	// "WinSqmAddToStreamEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCheckEscalationAddToStreamEx();
	// "WinSqmCheckEscalationAddToStreamEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCheckEscalationSetDWORD();
	// "WinSqmCheckEscalationSetDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCheckEscalationSetDWORD64();
	// "WinSqmCheckEscalationSetDWORD64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCheckEscalationSetString();
	// "WinSqmCheckEscalationSetString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCommonDatapointDelete();
	// "WinSqmCommonDatapointDelete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCommonDatapointSetDWORD();
	// "WinSqmCommonDatapointSetDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCommonDatapointSetDWORD64();
	// "WinSqmCommonDatapointSetDWORD64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCommonDatapointSetStreamEx();
	// "WinSqmCommonDatapointSetStreamEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmCommonDatapointSetString();
	// "WinSqmCommonDatapointSetString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmEndSession();
	// "WinSqmEndSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmEventEnabled();
	// "WinSqmEventEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmEventWrite();
	// "WinSqmEventWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmGetEscalationRuleStatus();
	// "WinSqmGetEscalationRuleStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmGetInstrumentationProperty();
	// "WinSqmGetInstrumentationProperty" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmIncrementDWORD();
	// "WinSqmIncrementDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmIsOptedIn();
	// "WinSqmIsOptedIn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmIsOptedInEx();
	// "WinSqmIsOptedInEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmIsSessionDisabled();
	// "WinSqmIsSessionDisabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetDWORD();
	// "WinSqmSetDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetDWORD64();
	// "WinSqmSetDWORD64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetEscalationInfo();
	// "WinSqmSetEscalationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetIfMaxDWORD();
	// "WinSqmSetIfMaxDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetIfMinDWORD();
	// "WinSqmSetIfMinDWORD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmSetString();
	// "WinSqmSetString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmStartSession();
	// "WinSqmStartSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmStartSessionForPartner();
	// "WinSqmStartSessionForPartner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinSqmStartSqmOptinListener();
	// "WinSqmStartSqmOptinListener" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAcceptConnectPort();
	// "ZwAcceptConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheck();
	// "ZwAccessCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckAndAuditAlarm();
	// "ZwAccessCheckAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckByType();
	// "ZwAccessCheckByType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckByTypeAndAuditAlarm();
	// "ZwAccessCheckByTypeAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckByTypeResultList();
	// "ZwAccessCheckByTypeResultList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckByTypeResultListAndAuditAlarm();
	// "ZwAccessCheckByTypeResultListAndAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAccessCheckByTypeResultListAndAuditAlarmByHandle();
	// "ZwAccessCheckByTypeResultListAndAuditAlarmByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAddAtom();
	// "ZwAddAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAddAtomEx();
	// "ZwAddAtomEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAddBootEntry();
	// "ZwAddBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAddDriverEntry();
	// "ZwAddDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAdjustGroupsToken();
	// "ZwAdjustGroupsToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAdjustPrivilegesToken();
	// "ZwAdjustPrivilegesToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAdjustTokenClaimsAndDeviceGroups();
	// "ZwAdjustTokenClaimsAndDeviceGroups" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlertResumeThread();
	// "ZwAlertResumeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlertThread();
	// "ZwAlertThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlertThreadByThreadId();
	// "ZwAlertThreadByThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAllocateLocallyUniqueId();
	// "ZwAllocateLocallyUniqueId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAllocateReserveObject();
	// "ZwAllocateReserveObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAllocateUserPhysicalPages();
	// "ZwAllocateUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAllocateUuids();
	// "ZwAllocateUuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAllocateVirtualMemory();
	// "ZwAllocateVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcAcceptConnectPort();
	// "ZwAlpcAcceptConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCancelMessage();
	// "ZwAlpcCancelMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcConnectPort();
	// "ZwAlpcConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcConnectPortEx();
	// "ZwAlpcConnectPortEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCreatePort();
	// "ZwAlpcCreatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCreatePortSection();
	// "ZwAlpcCreatePortSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCreateResourceReserve();
	// "ZwAlpcCreateResourceReserve" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCreateSectionView();
	// "ZwAlpcCreateSectionView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcCreateSecurityContext();
	// "ZwAlpcCreateSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcDeletePortSection();
	// "ZwAlpcDeletePortSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcDeleteResourceReserve();
	// "ZwAlpcDeleteResourceReserve" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcDeleteSectionView();
	// "ZwAlpcDeleteSectionView" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcDeleteSecurityContext();
	// "ZwAlpcDeleteSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcDisconnectPort();
	// "ZwAlpcDisconnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcImpersonateClientContainerOfPort();
	// "ZwAlpcImpersonateClientContainerOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcImpersonateClientOfPort();
	// "ZwAlpcImpersonateClientOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcOpenSenderProcess();
	// "ZwAlpcOpenSenderProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcOpenSenderThread();
	// "ZwAlpcOpenSenderThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcQueryInformation();
	// "ZwAlpcQueryInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcQueryInformationMessage();
	// "ZwAlpcQueryInformationMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcRevokeSecurityContext();
	// "ZwAlpcRevokeSecurityContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcSendWaitReceivePort();
	// "ZwAlpcSendWaitReceivePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAlpcSetInformation();
	// "ZwAlpcSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwApphelpCacheControl();
	// "ZwApphelpCacheControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAreMappedFilesTheSame();
	// "ZwAreMappedFilesTheSame" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAssignProcessToJobObject();
	// "ZwAssignProcessToJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwAssociateWaitCompletionPacket();
	// "ZwAssociateWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCallbackReturn();
	// "ZwCallbackReturn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelIoFile();
	// "ZwCancelIoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelIoFileEx();
	// "ZwCancelIoFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelSynchronousIoFile();
	// "ZwCancelSynchronousIoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelTimer();
	// "ZwCancelTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelTimer2();
	// "ZwCancelTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCancelWaitCompletionPacket();
	// "ZwCancelWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwClearEvent();
	// "ZwClearEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwClose();
	// "ZwClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCloseObjectAuditAlarm();
	// "ZwCloseObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCommitComplete();
	// "ZwCommitComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCommitEnlistment();
	// "ZwCommitEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCommitRegistryTransaction();
	// "ZwCommitRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCommitTransaction();
	// "ZwCommitTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCompactKeys();
	// "ZwCompactKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCompareObjects();
	// "ZwCompareObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCompareTokens();
	// "ZwCompareTokens" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCompleteConnectPort();
	// "ZwCompleteConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCompressKey();
	// "ZwCompressKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwConnectPort();
	// "ZwConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwContinue();
	// "ZwContinue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateDebugObject();
	// "ZwCreateDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateDirectoryObject();
	// "ZwCreateDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateDirectoryObjectEx();
	// "ZwCreateDirectoryObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateEnclave();
	// "ZwCreateEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateEnlistment();
	// "ZwCreateEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateEvent();
	// "ZwCreateEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateEventPair();
	// "ZwCreateEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateFile();
	// "ZwCreateFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateIRTimer();
	// "ZwCreateIRTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateIoCompletion();
	// "ZwCreateIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateJobObject();
	// "ZwCreateJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateJobSet();
	// "ZwCreateJobSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateKey();
	// "ZwCreateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateKeyTransacted();
	// "ZwCreateKeyTransacted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateKeyedEvent();
	// "ZwCreateKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateLowBoxToken();
	// "ZwCreateLowBoxToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateMailslotFile();
	// "ZwCreateMailslotFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateMutant();
	// "ZwCreateMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateNamedPipeFile();
	// "ZwCreateNamedPipeFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreatePagingFile();
	// "ZwCreatePagingFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreatePartition();
	// "ZwCreatePartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreatePort();
	// "ZwCreatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreatePrivateNamespace();
	// "ZwCreatePrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateProcess();
	// "ZwCreateProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateProcessEx();
	// "ZwCreateProcessEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateProfile();
	// "ZwCreateProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateProfileEx();
	// "ZwCreateProfileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateRegistryTransaction();
	// "ZwCreateRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateResourceManager();
	// "ZwCreateResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateSection();
	// "ZwCreateSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateSemaphore();
	// "ZwCreateSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateSymbolicLinkObject();
	// "ZwCreateSymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateThread();
	// "ZwCreateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateThreadEx();
	// "ZwCreateThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateTimer();
	// "ZwCreateTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateTimer2();
	// "ZwCreateTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateToken();
	// "ZwCreateToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateTokenEx();
	// "ZwCreateTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateTransaction();
	// "ZwCreateTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateTransactionManager();
	// "ZwCreateTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateUserProcess();
	// "ZwCreateUserProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateWaitCompletionPacket();
	// "ZwCreateWaitCompletionPacket" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateWaitablePort();
	// "ZwCreateWaitablePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateWnfStateName();
	// "ZwCreateWnfStateName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwCreateWorkerFactory();
	// "ZwCreateWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDebugActiveProcess();
	// "ZwDebugActiveProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDebugContinue();
	// "ZwDebugContinue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDelayExecution();
	// "ZwDelayExecution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteAtom();
	// "ZwDeleteAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteBootEntry();
	// "ZwDeleteBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteDriverEntry();
	// "ZwDeleteDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteFile();
	// "ZwDeleteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteKey();
	// "ZwDeleteKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteObjectAuditAlarm();
	// "ZwDeleteObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeletePrivateNamespace();
	// "ZwDeletePrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteValueKey();
	// "ZwDeleteValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteWnfStateData();
	// "ZwDeleteWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeleteWnfStateName();
	// "ZwDeleteWnfStateName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDeviceIoControlFile();
	// "ZwDeviceIoControlFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDisableLastKnownGood();
	// "ZwDisableLastKnownGood" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDisplayString();
	// "ZwDisplayString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDrawText();
	// "ZwDrawText" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDuplicateObject();
	// "ZwDuplicateObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwDuplicateToken();
	// "ZwDuplicateToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnableLastKnownGood();
	// "ZwEnableLastKnownGood" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateBootEntries();
	// "ZwEnumerateBootEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateDriverEntries();
	// "ZwEnumerateDriverEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateKey();
	// "ZwEnumerateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateSystemEnvironmentValuesEx();
	// "ZwEnumerateSystemEnvironmentValuesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateTransactionObject();
	// "ZwEnumerateTransactionObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwEnumerateValueKey();
	// "ZwEnumerateValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwExtendSection();
	// "ZwExtendSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFilterBootOption();
	// "ZwFilterBootOption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFilterToken();
	// "ZwFilterToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFilterTokenEx();
	// "ZwFilterTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFindAtom();
	// "ZwFindAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushBuffersFile();
	// "ZwFlushBuffersFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushBuffersFileEx();
	// "ZwFlushBuffersFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushInstallUILanguage();
	// "ZwFlushInstallUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushInstructionCache();
	// "ZwFlushInstructionCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushKey();
	// "ZwFlushKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushProcessWriteBuffers();
	// "ZwFlushProcessWriteBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushVirtualMemory();
	// "ZwFlushVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFlushWriteBuffer();
	// "ZwFlushWriteBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFreeUserPhysicalPages();
	// "ZwFreeUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFreeVirtualMemory();
	// "ZwFreeVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFreezeRegistry();
	// "ZwFreezeRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFreezeTransactions();
	// "ZwFreezeTransactions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwFsControlFile();
	// "ZwFsControlFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetCachedSigningLevel();
	// "ZwGetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetCompleteWnfStateSubscription();
	// "ZwGetCompleteWnfStateSubscription" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetContextThread();
	// "ZwGetContextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetCurrentProcessorNumber();
	// "ZwGetCurrentProcessorNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetCurrentProcessorNumberEx();
	// "ZwGetCurrentProcessorNumberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetDevicePowerState();
	// "ZwGetDevicePowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetMUIRegistryInfo();
	// "ZwGetMUIRegistryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetNextProcess();
	// "ZwGetNextProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetNextThread();
	// "ZwGetNextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetNlsSectionPtr();
	// "ZwGetNlsSectionPtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetNotificationResourceManager();
	// "ZwGetNotificationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwGetWriteWatch();
	// "ZwGetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwImpersonateAnonymousToken();
	// "ZwImpersonateAnonymousToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwImpersonateClientOfPort();
	// "ZwImpersonateClientOfPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwImpersonateThread();
	// "ZwImpersonateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwInitializeEnclave();
	// "ZwInitializeEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwInitializeNlsFiles();
	// "ZwInitializeNlsFiles" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwInitializeRegistry();
	// "ZwInitializeRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwInitiatePowerAction();
	// "ZwInitiatePowerAction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwIsProcessInJob();
	// "ZwIsProcessInJob" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwIsSystemResumeAutomatic();
	// "ZwIsSystemResumeAutomatic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwIsUILanguageComitted();
	// "ZwIsUILanguageComitted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwListenPort();
	// "ZwListenPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLoadDriver();
	// "ZwLoadDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLoadEnclaveData();
	// "ZwLoadEnclaveData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLoadKey();
	// "ZwLoadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLoadKey2();
	// "ZwLoadKey2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLoadKeyEx();
	// "ZwLoadKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLockFile();
	// "ZwLockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLockProductActivationKeys();
	// "ZwLockProductActivationKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLockRegistryKey();
	// "ZwLockRegistryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwLockVirtualMemory();
	// "ZwLockVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMakePermanentObject();
	// "ZwMakePermanentObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMakeTemporaryObject();
	// "ZwMakeTemporaryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwManagePartition();
	// "ZwManagePartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMapCMFModule();
	// "ZwMapCMFModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMapUserPhysicalPages();
	// "ZwMapUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMapUserPhysicalPagesScatter();
	// "ZwMapUserPhysicalPagesScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwMapViewOfSection();
	// "ZwMapViewOfSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwModifyBootEntry();
	// "ZwModifyBootEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwModifyDriverEntry();
	// "ZwModifyDriverEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwNotifyChangeDirectoryFile();
	// "ZwNotifyChangeDirectoryFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwNotifyChangeKey();
	// "ZwNotifyChangeKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwNotifyChangeMultipleKeys();
	// "ZwNotifyChangeMultipleKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwNotifyChangeSession();
	// "ZwNotifyChangeSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenDirectoryObject();
	// "ZwOpenDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenEnlistment();
	// "ZwOpenEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenEvent();
	// "ZwOpenEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenEventPair();
	// "ZwOpenEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenFile();
	// "ZwOpenFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenIoCompletion();
	// "ZwOpenIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenJobObject();
	// "ZwOpenJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenKey();
	// "ZwOpenKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenKeyEx();
	// "ZwOpenKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenKeyTransacted();
	// "ZwOpenKeyTransacted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenKeyTransactedEx();
	// "ZwOpenKeyTransactedEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenKeyedEvent();
	// "ZwOpenKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenMutant();
	// "ZwOpenMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenObjectAuditAlarm();
	// "ZwOpenObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenPartition();
	// "ZwOpenPartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenPrivateNamespace();
	// "ZwOpenPrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenProcess();
	// "ZwOpenProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenProcessToken();
	// "ZwOpenProcessToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenProcessTokenEx();
	// "ZwOpenProcessTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenRegistryTransaction();
	// "ZwOpenRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenResourceManager();
	// "ZwOpenResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenSection();
	// "ZwOpenSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenSemaphore();
	// "ZwOpenSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenSession();
	// "ZwOpenSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenSymbolicLinkObject();
	// "ZwOpenSymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenThread();
	// "ZwOpenThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenThreadToken();
	// "ZwOpenThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenThreadTokenEx();
	// "ZwOpenThreadTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenTimer();
	// "ZwOpenTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenTransaction();
	// "ZwOpenTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwOpenTransactionManager();
	// "ZwOpenTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPlugPlayControl();
	// "ZwPlugPlayControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPowerInformation();
	// "ZwPowerInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrePrepareComplete();
	// "ZwPrePrepareComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrePrepareEnlistment();
	// "ZwPrePrepareEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrepareComplete();
	// "ZwPrepareComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrepareEnlistment();
	// "ZwPrepareEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrivilegeCheck();
	// "ZwPrivilegeCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrivilegeObjectAuditAlarm();
	// "ZwPrivilegeObjectAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPrivilegedServiceAuditAlarm();
	// "ZwPrivilegedServiceAuditAlarm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPropagationComplete();
	// "ZwPropagationComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPropagationFailed();
	// "ZwPropagationFailed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwProtectVirtualMemory();
	// "ZwProtectVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwPulseEvent();
	// "ZwPulseEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryAttributesFile();
	// "ZwQueryAttributesFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryBootEntryOrder();
	// "ZwQueryBootEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryBootOptions();
	// "ZwQueryBootOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDebugFilterState();
	// "ZwQueryDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDefaultLocale();
	// "ZwQueryDefaultLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDefaultUILanguage();
	// "ZwQueryDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDirectoryFile();
	// "ZwQueryDirectoryFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDirectoryObject();
	// "ZwQueryDirectoryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryDriverEntryOrder();
	// "ZwQueryDriverEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryEaFile();
	// "ZwQueryEaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryEvent();
	// "ZwQueryEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryFullAttributesFile();
	// "ZwQueryFullAttributesFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationAtom();
	// "ZwQueryInformationAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationEnlistment();
	// "ZwQueryInformationEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationFile();
	// "ZwQueryInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationJobObject();
	// "ZwQueryInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationPort();
	// "ZwQueryInformationPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationProcess();
	// "ZwQueryInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationResourceManager();
	// "ZwQueryInformationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationThread();
	// "ZwQueryInformationThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationToken();
	// "ZwQueryInformationToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationTransaction();
	// "ZwQueryInformationTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationTransactionManager();
	// "ZwQueryInformationTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInformationWorkerFactory();
	// "ZwQueryInformationWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryInstallUILanguage();
	// "ZwQueryInstallUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryIntervalProfile();
	// "ZwQueryIntervalProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryIoCompletion();
	// "ZwQueryIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryKey();
	// "ZwQueryKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryLicenseValue();
	// "ZwQueryLicenseValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryMultipleValueKey();
	// "ZwQueryMultipleValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryMutant();
	// "ZwQueryMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryObject();
	// "ZwQueryObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryOpenSubKeys();
	// "ZwQueryOpenSubKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryOpenSubKeysEx();
	// "ZwQueryOpenSubKeysEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryPerformanceCounter();
	// "ZwQueryPerformanceCounter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryPortInformationProcess();
	// "ZwQueryPortInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryQuotaInformationFile();
	// "ZwQueryQuotaInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySection();
	// "ZwQuerySection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySecurityAttributesToken();
	// "ZwQuerySecurityAttributesToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySecurityObject();
	// "ZwQuerySecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySecurityPolicy();
	// "ZwQuerySecurityPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySemaphore();
	// "ZwQuerySemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySymbolicLinkObject();
	// "ZwQuerySymbolicLinkObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySystemEnvironmentValue();
	// "ZwQuerySystemEnvironmentValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySystemEnvironmentValueEx();
	// "ZwQuerySystemEnvironmentValueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySystemInformation();
	// "ZwQuerySystemInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySystemInformationEx();
	// "ZwQuerySystemInformationEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQuerySystemTime();
	// "ZwQuerySystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryTimer();
	// "ZwQueryTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryTimerResolution();
	// "ZwQueryTimerResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryValueKey();
	// "ZwQueryValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryVirtualMemory();
	// "ZwQueryVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryVolumeInformationFile();
	// "ZwQueryVolumeInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryWnfStateData();
	// "ZwQueryWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueryWnfStateNameInformation();
	// "ZwQueryWnfStateNameInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueueApcThread();
	// "ZwQueueApcThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwQueueApcThreadEx();
	// "ZwQueueApcThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRaiseException();
	// "ZwRaiseException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRaiseHardError();
	// "ZwRaiseHardError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReadFile();
	// "ZwReadFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReadFileScatter();
	// "ZwReadFileScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReadOnlyEnlistment();
	// "ZwReadOnlyEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReadRequestData();
	// "ZwReadRequestData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReadVirtualMemory();
	// "ZwReadVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRecoverEnlistment();
	// "ZwRecoverEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRecoverResourceManager();
	// "ZwRecoverResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRecoverTransactionManager();
	// "ZwRecoverTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRegisterProtocolAddressInformation();
	// "ZwRegisterProtocolAddressInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRegisterThreadTerminatePort();
	// "ZwRegisterThreadTerminatePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReleaseKeyedEvent();
	// "ZwReleaseKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReleaseMutant();
	// "ZwReleaseMutant" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReleaseSemaphore();
	// "ZwReleaseSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReleaseWorkerFactoryWorker();
	// "ZwReleaseWorkerFactoryWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRemoveIoCompletion();
	// "ZwRemoveIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRemoveIoCompletionEx();
	// "ZwRemoveIoCompletionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRemoveProcessDebug();
	// "ZwRemoveProcessDebug" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRenameKey();
	// "ZwRenameKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRenameTransactionManager();
	// "ZwRenameTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplaceKey();
	// "ZwReplaceKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplacePartitionUnit();
	// "ZwReplacePartitionUnit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplyPort();
	// "ZwReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplyWaitReceivePort();
	// "ZwReplyWaitReceivePort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplyWaitReceivePortEx();
	// "ZwReplyWaitReceivePortEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwReplyWaitReplyPort();
	// "ZwReplyWaitReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRequestPort();
	// "ZwRequestPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRequestWaitReplyPort();
	// "ZwRequestWaitReplyPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwResetEvent();
	// "ZwResetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwResetWriteWatch();
	// "ZwResetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRestoreKey();
	// "ZwRestoreKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwResumeProcess();
	// "ZwResumeProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwResumeThread();
	// "ZwResumeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRevertContainerImpersonation();
	// "ZwRevertContainerImpersonation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRollbackComplete();
	// "ZwRollbackComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRollbackEnlistment();
	// "ZwRollbackEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRollbackRegistryTransaction();
	// "ZwRollbackRegistryTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRollbackTransaction();
	// "ZwRollbackTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwRollforwardTransactionManager();
	// "ZwRollforwardTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSaveKey();
	// "ZwSaveKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSaveKeyEx();
	// "ZwSaveKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSaveMergedKeys();
	// "ZwSaveMergedKeys" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSecureConnectPort();
	// "ZwSecureConnectPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSerializeBoot();
	// "ZwSerializeBoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetBootEntryOrder();
	// "ZwSetBootEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetBootOptions();
	// "ZwSetBootOptions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetCachedSigningLevel();
	// "ZwSetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetCachedSigningLevel2();
	// "ZwSetCachedSigningLevel2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetContextThread();
	// "ZwSetContextThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetDebugFilterState();
	// "ZwSetDebugFilterState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetDefaultHardErrorPort();
	// "ZwSetDefaultHardErrorPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetDefaultLocale();
	// "ZwSetDefaultLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetDefaultUILanguage();
	// "ZwSetDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetDriverEntryOrder();
	// "ZwSetDriverEntryOrder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetEaFile();
	// "ZwSetEaFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetEvent();
	// "ZwSetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetEventBoostPriority();
	// "ZwSetEventBoostPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetHighEventPair();
	// "ZwSetHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetHighWaitLowEventPair();
	// "ZwSetHighWaitLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetIRTimer();
	// "ZwSetIRTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationDebugObject();
	// "ZwSetInformationDebugObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationEnlistment();
	// "ZwSetInformationEnlistment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationFile();
	// "ZwSetInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationJobObject();
	// "ZwSetInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationKey();
	// "ZwSetInformationKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationObject();
	// "ZwSetInformationObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationProcess();
	// "ZwSetInformationProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationResourceManager();
	// "ZwSetInformationResourceManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationSymbolicLink();
	// "ZwSetInformationSymbolicLink" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationThread();
	// "ZwSetInformationThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationToken();
	// "ZwSetInformationToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationTransaction();
	// "ZwSetInformationTransaction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationTransactionManager();
	// "ZwSetInformationTransactionManager" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationVirtualMemory();
	// "ZwSetInformationVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetInformationWorkerFactory();
	// "ZwSetInformationWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetIntervalProfile();
	// "ZwSetIntervalProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetIoCompletion();
	// "ZwSetIoCompletion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetIoCompletionEx();
	// "ZwSetIoCompletionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetLdtEntries();
	// "ZwSetLdtEntries" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetLowEventPair();
	// "ZwSetLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetLowWaitHighEventPair();
	// "ZwSetLowWaitHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetQuotaInformationFile();
	// "ZwSetQuotaInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSecurityObject();
	// "ZwSetSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSystemEnvironmentValue();
	// "ZwSetSystemEnvironmentValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSystemEnvironmentValueEx();
	// "ZwSetSystemEnvironmentValueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSystemInformation();
	// "ZwSetSystemInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSystemPowerState();
	// "ZwSetSystemPowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetSystemTime();
	// "ZwSetSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetThreadExecutionState();
	// "ZwSetThreadExecutionState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetTimer();
	// "ZwSetTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetTimer2();
	// "ZwSetTimer2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetTimerEx();
	// "ZwSetTimerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetTimerResolution();
	// "ZwSetTimerResolution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetUuidSeed();
	// "ZwSetUuidSeed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetValueKey();
	// "ZwSetValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetVolumeInformationFile();
	// "ZwSetVolumeInformationFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSetWnfProcessNotificationEvent();
	// "ZwSetWnfProcessNotificationEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwShutdownSystem();
	// "ZwShutdownSystem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwShutdownWorkerFactory();
	// "ZwShutdownWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSignalAndWaitForSingleObject();
	// "ZwSignalAndWaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSinglePhaseReject();
	// "ZwSinglePhaseReject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwStartProfile();
	// "ZwStartProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwStopProfile();
	// "ZwStopProfile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSubscribeWnfStateChange();
	// "ZwSubscribeWnfStateChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSuspendProcess();
	// "ZwSuspendProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSuspendThread();
	// "ZwSuspendThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwSystemDebugControl();
	// "ZwSystemDebugControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTerminateJobObject();
	// "ZwTerminateJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTerminateProcess();
	// "ZwTerminateProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTerminateThread();
	// "ZwTerminateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTestAlert();
	// "ZwTestAlert" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwThawRegistry();
	// "ZwThawRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwThawTransactions();
	// "ZwThawTransactions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTraceControl();
	// "ZwTraceControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTraceEvent();
	// "ZwTraceEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwTranslateFilePath();
	// "ZwTranslateFilePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUmsThreadYield();
	// "ZwUmsThreadYield" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnloadDriver();
	// "ZwUnloadDriver" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnloadKey();
	// "ZwUnloadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnloadKey2();
	// "ZwUnloadKey2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnloadKeyEx();
	// "ZwUnloadKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnlockFile();
	// "ZwUnlockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnlockVirtualMemory();
	// "ZwUnlockVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnmapViewOfSection();
	// "ZwUnmapViewOfSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnmapViewOfSectionEx();
	// "ZwUnmapViewOfSectionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUnsubscribeWnfStateChange();
	// "ZwUnsubscribeWnfStateChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwUpdateWnfStateData();
	// "ZwUpdateWnfStateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwVdmControl();
	// "ZwVdmControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForAlertByThreadId();
	// "ZwWaitForAlertByThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForDebugEvent();
	// "ZwWaitForDebugEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForKeyedEvent();
	// "ZwWaitForKeyedEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForMultipleObjects();
	// "ZwWaitForMultipleObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForMultipleObjects32();
	// "ZwWaitForMultipleObjects32" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForSingleObject();
	// "ZwWaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitForWorkViaWorkerFactory();
	// "ZwWaitForWorkViaWorkerFactory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitHighEventPair();
	// "ZwWaitHighEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWaitLowEventPair();
	// "ZwWaitLowEventPair" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWorkerFactoryWorkerReady();
	// "ZwWorkerFactoryWorkerReady" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWriteFile();
	// "ZwWriteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWriteFileGather();
	// "ZwWriteFileGather" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWriteRequestData();
	// "ZwWriteRequestData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwWriteVirtualMemory();
	// "ZwWriteVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZwYieldExecution();
	// "ZwYieldExecution" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __C_specific_handler();
	// "__C_specific_handler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __chkstk();
	// "__chkstk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __isascii();
	// "__isascii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __iscsym();
	// "__iscsym" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __iscsymf();
	// "__iscsymf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __misaligned_access();
	// "__misaligned_access" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __toascii();
	// "__toascii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _atoi64();
	// "_atoi64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _errno();
	// "_errno" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _fltused();
	// "_fltused" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _i64toa();
	// "_i64toa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _i64toa_s();
	// "_i64toa_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _i64tow();
	// "_i64tow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _i64tow_s();
	// "_i64tow_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _itoa();
	// "_itoa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _itoa_s();
	// "_itoa_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _itow();
	// "_itow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _itow_s();
	// "_itow_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lfind();
	// "_lfind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _local_unwind();
	// "_local_unwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ltoa();
	// "_ltoa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ltoa_s();
	// "_ltoa_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ltow();
	// "_ltow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ltow_s();
	// "_ltow_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _makepath_s();
	// "_makepath_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _memccpy();
	// "_memccpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _memicmp();
	// "_memicmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _setjmp();
	// "_setjmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _setjmpex();
	// "_setjmpex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snprintf();
	// "_snprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snprintf_s();
	// "_snprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snscanf_s();
	// "_snscanf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snwprintf();
	// "_snwprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snwprintf_s();
	// "_snwprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _snwscanf_s();
	// "_snwscanf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _splitpath();
	// "_splitpath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _splitpath_s();
	// "_splitpath_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strcmpi();
	// "_strcmpi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _stricmp();
	// "_stricmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strlwr();
	// "_strlwr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strlwr_s();
	// "_strlwr_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strnicmp();
	// "_strnicmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strnset_s();
	// "_strnset_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strset_s();
	// "_strset_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strupr();
	// "_strupr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _strupr_s();
	// "_strupr_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _swprintf();
	// "_swprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ui64toa();
	// "_ui64toa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ui64toa_s();
	// "_ui64toa_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ui64tow();
	// "_ui64tow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ui64tow_s();
	// "_ui64tow_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ultoa();
	// "_ultoa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ultoa_s();
	// "_ultoa_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ultow();
	// "_ultow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _ultow_s();
	// "_ultow_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vscwprintf();
	// "_vscwprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vsnprintf();
	// "_vsnprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vsnprintf_s();
	// "_vsnprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vsnwprintf();
	// "_vsnwprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vsnwprintf_s();
	// "_vsnwprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _vswprintf();
	// "_vswprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsicmp();
	// "_wcsicmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcslwr();
	// "_wcslwr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcslwr_s();
	// "_wcslwr_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsnicmp();
	// "_wcsnicmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsnset_s();
	// "_wcsnset_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsset_s();
	// "_wcsset_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcstoi64();
	// "_wcstoi64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcstoui64();
	// "_wcstoui64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsupr();
	// "_wcsupr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wcsupr_s();
	// "_wcsupr_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wmakepath_s();
	// "_wmakepath_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wsplitpath_s();
	// "_wsplitpath_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wtoi();
	// "_wtoi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wtoi64();
	// "_wtoi64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _wtol();
	// "_wtol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall abs();
	// "abs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall atan();
	// "atan" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall atan2();
	// "atan2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall atoi();
	// "atoi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall atol();
	// "atol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall bsearch();
	// "bsearch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ceil();
	// "ceil" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall cos();
	// "cos" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall fabs();
	// "fabs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall floor();
	// "floor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isalnum();
	// "isalnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isalpha();
	// "isalpha" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iscntrl();
	// "iscntrl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isdigit();
	// "isdigit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isgraph();
	// "isgraph" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall islower();
	// "islower" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isprint();
	// "isprint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ispunct();
	// "ispunct" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isspace();
	// "isspace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isupper();
	// "isupper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswalnum();
	// "iswalnum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswalpha();
	// "iswalpha" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswascii();
	// "iswascii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswctype();
	// "iswctype" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswdigit();
	// "iswdigit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswgraph();
	// "iswgraph" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswlower();
	// "iswlower" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswprint();
	// "iswprint" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswspace();
	// "iswspace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall iswxdigit();
	// "iswxdigit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall isxdigit();
	// "isxdigit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall labs();
	// "labs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall log();
	// "log" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall longjmp();
	// "longjmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall mbstowcs();
	// "mbstowcs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memchr();
	// "memchr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memcmp();
	// "memcmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memcpy();
	// "memcpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memcpy_s();
	// "memcpy_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memmove();
	// "memmove" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memmove_s();
	// "memmove_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall memset();
	// "memset" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall pow();
	// "pow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall qsort();
	// "qsort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall qsort_s();
	// "qsort_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sin();
	// "sin" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sprintf();
	// "sprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sprintf_s();
	// "sprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sqrt();
	// "sqrt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sscanf();
	// "sscanf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall sscanf_s();
	// "sscanf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcat();
	// "strcat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcat_s();
	// "strcat_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strchr();
	// "strchr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcmp();
	// "strcmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcpy();
	// "strcpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcpy_s();
	// "strcpy_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strcspn();
	// "strcspn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strlen();
	// "strlen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strncat();
	// "strncat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strncat_s();
	// "strncat_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strncmp();
	// "strncmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strncpy();
	// "strncpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strncpy_s();
	// "strncpy_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strnlen();
	// "strnlen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strpbrk();
	// "strpbrk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strrchr();
	// "strrchr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strspn();
	// "strspn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strstr();
	// "strstr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strtok_s();
	// "strtok_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strtol();
	// "strtol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall strtoul();
	// "strtoul" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall swprintf();
	// "swprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall swprintf_s();
	// "swprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall swscanf_s();
	// "swscanf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall tan();
	// "tan" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall tolower();
	// "tolower" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall toupper();
	// "toupper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall towlower();
	// "towlower" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall towupper();
	// "towupper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vDbgPrintEx();
	// "vDbgPrintEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vDbgPrintExWithPrefix();
	// "vDbgPrintExWithPrefix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vsprintf();
	// "vsprintf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vsprintf_s();
	// "vsprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall vswprintf_s();
	// "vswprintf_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscat();
	// "wcscat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscat_s();
	// "wcscat_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcschr();
	// "wcschr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscmp();
	// "wcscmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscpy();
	// "wcscpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscpy_s();
	// "wcscpy_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcscspn();
	// "wcscspn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcslen();
	// "wcslen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsncat();
	// "wcsncat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsncat_s();
	// "wcsncat_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsncmp();
	// "wcsncmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsncpy();
	// "wcsncpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsncpy_s();
	// "wcsncpy_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsnlen();
	// "wcsnlen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcspbrk();
	// "wcspbrk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsrchr();
	// "wcsrchr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsspn();
	// "wcsspn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcsstr();
	// "wcsstr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcstok_s();
	// "wcstok_s" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcstol();
	// "wcstol" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcstombs();
	// "wcstombs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall wcstoul();
	// "wcstoul" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = ntdll;

