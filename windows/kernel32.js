// javascript ffi interface for kernel32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');

// init
var kernel32 = ffi.Library( "kernel32.dll" ,
{
	// int __stdcall AcquireSRWLockExclusive();
	// "AcquireSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AcquireSRWLockShared();
	// "AcquireSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ActivateActCtx();
	// "ActivateActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ActivateActCtxWorker();
	// "ActivateActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAtomA();
	// "AddAtomA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAtomW();
	// "AddAtomW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddConsoleAliasA();
	// "AddConsoleAliasA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddConsoleAliasW();
	// "AddConsoleAliasW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddDllDirectory();
	// "AddDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddIntegrityLabelToBoundaryDescriptor();
	// "AddIntegrityLabelToBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddLocalAlternateComputerNameA();
	// "AddLocalAlternateComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddLocalAlternateComputerNameW();
	// "AddLocalAlternateComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddRefActCtx();
	// "AddRefActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddRefActCtxWorker();
	// "AddRefActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddResourceAttributeAce();
	// "AddResourceAttributeAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddSIDToBoundaryDescriptor();
	// "AddSIDToBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddScopedPolicyIDAce();
	// "AddScopedPolicyIDAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddSecureMemoryCacheCallback();
	// "AddSecureMemoryCacheCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddVectoredContinueHandler();
	// "AddVectoredContinueHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddVectoredExceptionHandler();
	// "AddVectoredExceptionHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustCalendarDate();
	// "AdjustCalendarDate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllocConsole();
	// "AllocConsole" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllocateUserPhysicalPages();
	// "AllocateUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllocateUserPhysicalPagesNuma();
	// "AllocateUserPhysicalPagesNuma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetClrCompat();
	// "AppPolicyGetClrCompat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetCreateFileAccess();
	// "AppPolicyGetCreateFileAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetLifecycleManagement();
	// "AppPolicyGetLifecycleManagement" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetMediaFoundationCodecLoading();
	// "AppPolicyGetMediaFoundationCodecLoading" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetProcessTerminationMethod();
	// "AppPolicyGetProcessTerminationMethod" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetShowDeveloperDiagnostic();
	// "AppPolicyGetShowDeveloperDiagnostic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetThreadInitializationType();
	// "AppPolicyGetThreadInitializationType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppPolicyGetWindowingModel();
	// "AppPolicyGetWindowingModel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AppXGetOSMaxVersionTested();
	// "AppXGetOSMaxVersionTested" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ApplicationRecoveryFinished();
	// "ApplicationRecoveryFinished" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ApplicationRecoveryInProgress();
	// "ApplicationRecoveryInProgress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AreFileApisANSI();
	// "AreFileApisANSI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AssignProcessToJobObject();
	// "AssignProcessToJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AttachConsole();
	// "AttachConsole" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BackupRead();
	// "BackupRead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BackupSeek();
	// "BackupSeek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BackupWrite();
	// "BackupWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCheckAppcompatCache();
	// "BaseCheckAppcompatCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCheckAppcompatCacheEx();
	// "BaseCheckAppcompatCacheEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCheckAppcompatCacheExWorker();
	// "BaseCheckAppcompatCacheExWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCheckAppcompatCacheWorker();
	// "BaseCheckAppcompatCacheWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCheckElevation();
	// "BaseCheckElevation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCleanupAppcompatCacheSupport();
	// "BaseCleanupAppcompatCacheSupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseCleanupAppcompatCacheSupportWorker();
	// "BaseCleanupAppcompatCacheSupportWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseDestroyVDMEnvironment();
	// "BaseDestroyVDMEnvironment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseDllReadWriteIniFile();
	// "BaseDllReadWriteIniFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseDumpAppcompatCache();
	// "BaseDumpAppcompatCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseDumpAppcompatCacheWorker();
	// "BaseDumpAppcompatCacheWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseElevationPostProcessing();
	// "BaseElevationPostProcessing" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseFlushAppcompatCache();
	// "BaseFlushAppcompatCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseFlushAppcompatCacheWorker();
	// "BaseFlushAppcompatCacheWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseFormatObjectAttributes();
	// "BaseFormatObjectAttributes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseFormatTimeOut();
	// "BaseFormatTimeOut" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseFreeAppCompatDataForProcessWorker();
	// "BaseFreeAppCompatDataForProcessWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseGenerateAppCompatData();
	// "BaseGenerateAppCompatData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseGetNamedObjectDirectory();
	// "BaseGetNamedObjectDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseInitAppcompatCacheSupport();
	// "BaseInitAppcompatCacheSupport" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseInitAppcompatCacheSupportWorker();
	// "BaseInitAppcompatCacheSupportWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseIsAppcompatInfrastructureDisabled();
	// "BaseIsAppcompatInfrastructureDisabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseIsAppcompatInfrastructureDisabledWorker();
	// "BaseIsAppcompatInfrastructureDisabledWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseIsDosApplication();
	// "BaseIsDosApplication" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseQueryModuleData();
	// "BaseQueryModuleData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseReadAppCompatDataForProcessWorker();
	// "BaseReadAppCompatDataForProcessWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseSetLastNTError();
	// "BaseSetLastNTError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseThreadInitThunk();
	// "BaseThreadInitThunk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseUpdateAppcompatCache();
	// "BaseUpdateAppcompatCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseUpdateAppcompatCacheWorker();
	// "BaseUpdateAppcompatCacheWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseUpdateVDMEntry();
	// "BaseUpdateVDMEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseVerifyUnicodeString();
	// "BaseVerifyUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseWriteErrorElevationRequiredEvent();
	// "BaseWriteErrorElevationRequiredEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Basep8BitStringToDynamicUnicodeString();
	// "Basep8BitStringToDynamicUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepAllocateActivationContextActivationBlock();
	// "BasepAllocateActivationContextActivationBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepAnsiStringToDynamicUnicodeString();
	// "BasepAnsiStringToDynamicUnicodeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepAppContainerEnvironmentExtension();
	// "BasepAppContainerEnvironmentExtension" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepAppXExtension();
	// "BasepAppXExtension" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepCheckAppCompat();
	// "BasepCheckAppCompat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepCheckWebBladeHashes();
	// "BasepCheckWebBladeHashes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepCheckWinSaferRestrictions();
	// "BasepCheckWinSaferRestrictions" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepConstructSxsCreateProcessMessage();
	// "BasepConstructSxsCreateProcessMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepCopyEncryption();
	// "BasepCopyEncryption" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepFreeActivationContextActivationBlock();
	// "BasepFreeActivationContextActivationBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepFreeAppCompatData();
	// "BasepFreeAppCompatData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepGetAppCompatData();
	// "BasepGetAppCompatData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepGetComputerNameFromNtPath();
	// "BasepGetComputerNameFromNtPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepGetExeArchType();
	// "BasepGetExeArchType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepIsProcessAllowed();
	// "BasepIsProcessAllowed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepMapModuleHandle();
	// "BasepMapModuleHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepNotifyLoadStringResource();
	// "BasepNotifyLoadStringResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepPostSuccessAppXExtension();
	// "BasepPostSuccessAppXExtension" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepProcessInvalidImage();
	// "BasepProcessInvalidImage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepQueryAppCompat();
	// "BasepQueryAppCompat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepReleaseAppXContext();
	// "BasepReleaseAppXContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepReleaseSxsCreateProcessUtilityStruct();
	// "BasepReleaseSxsCreateProcessUtilityStruct" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepReportFault();
	// "BasepReportFault" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BasepSetFileEncryptionCompression();
	// "BasepSetFileEncryptionCompression" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Beep();
	// "Beep" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginUpdateResourceA();
	// "BeginUpdateResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BeginUpdateResourceW();
	// "BeginUpdateResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BindIoCompletionCallback();
	// "BindIoCompletionCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildCommDCBA();
	// "BuildCommDCBA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildCommDCBAndTimeoutsA();
	// "BuildCommDCBAndTimeoutsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildCommDCBAndTimeoutsW();
	// "BuildCommDCBAndTimeoutsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildCommDCBW();
	// "BuildCommDCBW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallNamedPipeA();
	// "CallNamedPipeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallNamedPipeW();
	// "CallNamedPipeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CallbackMayRunLong();
	// "CallbackMayRunLong" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelDeviceWakeupRequest();
	// "CancelDeviceWakeupRequest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelIo();
	// "CancelIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelIoEx();
	// "CancelIoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelSynchronousIo();
	// "CancelSynchronousIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelThreadpoolIo();
	// "CancelThreadpoolIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelTimerQueueTimer();
	// "CancelTimerQueueTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelWaitableTimer();
	// "CancelWaitableTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CeipIsOptedIn();
	// "CeipIsOptedIn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeTimerQueueTimer();
	// "ChangeTimerQueueTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckAllowDecryptedRemoteDestinationPolicy();
	// "CheckAllowDecryptedRemoteDestinationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckElevation();
	// "CheckElevation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckElevationEnabled();
	// "CheckElevationEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckForReadOnlyResource();
	// "CheckForReadOnlyResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckForReadOnlyResourceFilter();
	// "CheckForReadOnlyResourceFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckNameLegalDOS8Dot3A();
	// "CheckNameLegalDOS8Dot3A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckNameLegalDOS8Dot3W();
	// "CheckNameLegalDOS8Dot3W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckRemoteDebuggerPresent();
	// "CheckRemoteDebuggerPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckTokenCapability();
	// "CheckTokenCapability" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckTokenMembershipEx();
	// "CheckTokenMembershipEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearCommBreak();
	// "ClearCommBreak" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearCommError();
	// "ClearCommError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseConsoleHandle();
	// "CloseConsoleHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseHandle();
	// "CloseHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClosePackageInfo();
	// "ClosePackageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClosePrivateNamespace();
	// "ClosePrivateNamespace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseProfileUserMapping();
	// "CloseProfileUserMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseState();
	// "CloseState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpool();
	// "CloseThreadpool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolCleanupGroup();
	// "CloseThreadpoolCleanupGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolCleanupGroupMembers();
	// "CloseThreadpoolCleanupGroupMembers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolIo();
	// "CloseThreadpoolIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolTimer();
	// "CloseThreadpoolTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolWait();
	// "CloseThreadpoolWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadpoolWork();
	// "CloseThreadpoolWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CmdBatNotification();
	// "CmdBatNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CommConfigDialogA();
	// "CommConfigDialogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CommConfigDialogW();
	// "CommConfigDialogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareCalendarDates();
	// "CompareCalendarDates" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareFileTime();
	// "CompareFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareStringA();
	// "CompareStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareStringEx();
	// "CompareStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareStringOrdinal();
	// "CompareStringOrdinal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CompareStringW();
	// "CompareStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConnectNamedPipe();
	// "ConnectNamedPipe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConsoleMenuControl();
	// "ConsoleMenuControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ContinueDebugEvent();
	// "ContinueDebugEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertCalDateTimeToSystemTime();
	// "ConvertCalDateTimeToSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertDefaultLocale();
	// "ConvertDefaultLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertFiberToThread();
	// "ConvertFiberToThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertNLSDayOfWeekToWin32DayOfWeek();
	// "ConvertNLSDayOfWeekToWin32DayOfWeek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSystemTimeToCalDateTime();
	// "ConvertSystemTimeToCalDateTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertThreadToFiber();
	// "ConvertThreadToFiber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertThreadToFiberEx();
	// "ConvertThreadToFiberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyContext();
	// "CopyContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFile2();
	// "CopyFile2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileA();
	// "CopyFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileExA();
	// "CopyFileExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileExW();
	// "CopyFileExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileTransactedA();
	// "CopyFileTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileTransactedW();
	// "CopyFileTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyFileW();
	// "CopyFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopyLZFile();
	// "CopyLZFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateActCtxA();
	// "CreateActCtxA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateActCtxW();
	// "CreateActCtxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateActCtxWWorker();
	// "CreateActCtxWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBoundaryDescriptorA();
	// "CreateBoundaryDescriptorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateBoundaryDescriptorW();
	// "CreateBoundaryDescriptorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateConsoleScreenBuffer();
	// "CreateConsoleScreenBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryA();
	// "CreateDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryExA();
	// "CreateDirectoryExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryExW();
	// "CreateDirectoryExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryTransactedA();
	// "CreateDirectoryTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryTransactedW();
	// "CreateDirectoryTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateDirectoryW();
	// "CreateDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEnclave();
	// "CreateEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEventA();
	// "CreateEventA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEventExA();
	// "CreateEventExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEventExW();
	// "CreateEventExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateEventW();
	// "CreateEventW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFiber();
	// "CreateFiber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFiberEx();
	// "CreateFiberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFile2();
	// "CreateFile2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileA();
	// "CreateFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileMappingA();
	// "CreateFileMappingA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileMappingFromApp();
	// "CreateFileMappingFromApp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileMappingNumaA();
	// "CreateFileMappingNumaA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileMappingNumaW();
	// "CreateFileMappingNumaW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileMappingW();
	// "CreateFileMappingW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileTransactedA();
	// "CreateFileTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateFileTransactedW();
	// "CreateFileTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	 "CreateFileW" :   [ wtypes.HANDLE ,
	 	[
		  wtypes.LPCWSTR ,  				// __in     LPCWSTR  lpFileName,
		  wtypes.DWORD ,  					// __in     DWORD  dwDesiredAccess,
		  wtypes.DWORD ,  					// __in     DWORD  dwShareMode,
		  wtypes.LPSECURITY_ATTRIBUTES ,  	// __in_opt LPSECURITY_ATTRIBUTES  lpSecurityAttributes,
		  wtypes.DWORD ,  					// __in     DWORD  dwCreationDisposition,
		  wtypes.DWORD ,  					// __in     DWORD  dwFlagsAndAttributes,
		  wtypes.HANDLE ,  					// __in_opt  HANDLE  hTemplateFile,
		] , 
		{abi : ffi.FFI_STDCALL } 
	] ,

	// int __stdcall CreateHardLinkA();
	// "CreateHardLinkA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateHardLinkTransactedA();
	// "CreateHardLinkTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateHardLinkTransactedW();
	// "CreateHardLinkTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateHardLinkW();
	// "CreateHardLinkW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateIoCompletionPort();
	// "CreateIoCompletionPort" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateJobObjectA();
	// "CreateJobObjectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateJobObjectW();
	// "CreateJobObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateJobSet();
	// "CreateJobSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMailslotA();
	// "CreateMailslotA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMailslotW();
	// "CreateMailslotW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMemoryResourceNotification();
	// "CreateMemoryResourceNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMutexA();
	// "CreateMutexA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMutexExA();
	// "CreateMutexExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMutexExW();
	// "CreateMutexExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateMutexW();
	// "CreateMutexW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateNamedPipeA();
	// "CreateNamedPipeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateNamedPipeW();
	// "CreateNamedPipeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePipe();
	// "CreatePipe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePrivateNamespaceA();
	// "CreatePrivateNamespaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePrivateNamespaceW();
	// "CreatePrivateNamespaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessA();
	// "CreateProcessA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessAsUserA();
	// "CreateProcessAsUserA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessAsUserW();
	// "CreateProcessAsUserW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessInternalA();
	// "CreateProcessInternalA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessInternalW();
	// "CreateProcessInternalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessW();
	// "CreateProcessW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRemoteThread();
	// "CreateRemoteThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRemoteThreadEx();
	// "CreateRemoteThreadEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSemaphoreA();
	// "CreateSemaphoreA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSemaphoreExA();
	// "CreateSemaphoreExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSemaphoreExW();
	// "CreateSemaphoreExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSemaphoreW();
	// "CreateSemaphoreW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSymbolicLinkA();
	// "CreateSymbolicLinkA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSymbolicLinkTransactedA();
	// "CreateSymbolicLinkTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSymbolicLinkTransactedW();
	// "CreateSymbolicLinkTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateSymbolicLinkW();
	// "CreateSymbolicLinkW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateTapePartition();
	// "CreateTapePartition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThread();
	// "CreateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpool();
	// "CreateThreadpool" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpoolCleanupGroup();
	// "CreateThreadpoolCleanupGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpoolIo();
	// "CreateThreadpoolIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpoolTimer();
	// "CreateThreadpoolTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpoolWait();
	// "CreateThreadpoolWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateThreadpoolWork();
	// "CreateThreadpoolWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateTimerQueue();
	// "CreateTimerQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateTimerQueueTimer();
	// "CreateTimerQueueTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateToolhelp32Snapshot();
	// "CreateToolhelp32Snapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateUmsCompletionList();
	// "CreateUmsCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateUmsThreadContext();
	// "CreateUmsThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWaitableTimerA();
	// "CreateWaitableTimerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWaitableTimerExA();
	// "CreateWaitableTimerExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWaitableTimerExW();
	// "CreateWaitableTimerExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWaitableTimerW();
	// "CreateWaitableTimerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CtrlRoutine();
	// "CtrlRoutine" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeactivateActCtx();
	// "DeactivateActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeactivateActCtxWorker();
	// "DeactivateActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DebugActiveProcess();
	// "DebugActiveProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DebugActiveProcessStop();
	// "DebugActiveProcessStop" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DebugBreak();
	// "DebugBreak" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DebugBreakProcess();
	// "DebugBreakProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DebugSetProcessKillOnExit();
	// "DebugSetProcessKillOnExit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DecodePointer();
	// "DecodePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DecodeSystemPointer();
	// "DecodeSystemPointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefineDosDeviceA();
	// "DefineDosDeviceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DefineDosDeviceW();
	// "DefineDosDeviceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DelayLoadFailureHook();
	// "DelayLoadFailureHook" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteAtom();
	// "DeleteAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteBoundaryDescriptor();
	// "DeleteBoundaryDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteCriticalSection();
	// "DeleteCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteFiber();
	// "DeleteFiber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteFileA();
	// "DeleteFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteFileTransactedA();
	// "DeleteFileTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteFileTransactedW();
	// "DeleteFileTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteFileW();
	// "DeleteFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteProcThreadAttributeList();
	// "DeleteProcThreadAttributeList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteSynchronizationBarrier();
	// "DeleteSynchronizationBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteTimerQueue();
	// "DeleteTimerQueue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteTimerQueueEx();
	// "DeleteTimerQueueEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteTimerQueueTimer();
	// "DeleteTimerQueueTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteUmsCompletionList();
	// "DeleteUmsCompletionList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteUmsThreadContext();
	// "DeleteUmsThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteVolumeMountPointA();
	// "DeleteVolumeMountPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteVolumeMountPointW();
	// "DeleteVolumeMountPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DequeueUmsCompletionListItems();
	// "DequeueUmsCompletionListItems" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeviceIoControl();
	// "DeviceIoControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisableThreadLibraryCalls();
	// "DisableThreadLibraryCalls" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisableThreadProfiling();
	// "DisableThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisassociateCurrentThreadFromCallback();
	// "DisassociateCurrentThreadFromCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DiscardVirtualMemory();
	// "DiscardVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DisconnectNamedPipe();
	// "DisconnectNamedPipe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DnsHostnameToComputerNameA();
	// "DnsHostnameToComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DnsHostnameToComputerNameExW();
	// "DnsHostnameToComputerNameExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DnsHostnameToComputerNameW();
	// "DnsHostnameToComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DosDateTimeToFileTime();
	// "DosDateTimeToFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DosPathToSessionPathA();
	// "DosPathToSessionPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DosPathToSessionPathW();
	// "DosPathToSessionPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateConsoleHandle();
	// "DuplicateConsoleHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateEncryptionInfoFileExt();
	// "DuplicateEncryptionInfoFileExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateHandle();
	// "DuplicateHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableThreadProfiling();
	// "EnableThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncodePointer();
	// "EncodePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncodeSystemPointer();
	// "EncodeSystemPointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndUpdateResourceA();
	// "EndUpdateResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EndUpdateResourceW();
	// "EndUpdateResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnterCriticalSection();
	// "EnterCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnterSynchronizationBarrier();
	// "EnterSynchronizationBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnterUmsSchedulingMode();
	// "EnterUmsSchedulingMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumCalendarInfoA();
	// "EnumCalendarInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumCalendarInfoExA();
	// "EnumCalendarInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumCalendarInfoExEx();
	// "EnumCalendarInfoExEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumCalendarInfoExW();
	// "EnumCalendarInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumCalendarInfoW();
	// "EnumCalendarInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDateFormatsA();
	// "EnumDateFormatsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDateFormatsExA();
	// "EnumDateFormatsExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDateFormatsExEx();
	// "EnumDateFormatsExEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDateFormatsExW();
	// "EnumDateFormatsExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDateFormatsW();
	// "EnumDateFormatsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumLanguageGroupLocalesA();
	// "EnumLanguageGroupLocalesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumLanguageGroupLocalesW();
	// "EnumLanguageGroupLocalesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceLanguagesA();
	// "EnumResourceLanguagesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceLanguagesExA();
	// "EnumResourceLanguagesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceLanguagesExW();
	// "EnumResourceLanguagesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceLanguagesW();
	// "EnumResourceLanguagesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceNamesA();
	// "EnumResourceNamesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceNamesExA();
	// "EnumResourceNamesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceNamesExW();
	// "EnumResourceNamesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceNamesW();
	// "EnumResourceNamesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceTypesA();
	// "EnumResourceTypesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceTypesExA();
	// "EnumResourceTypesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceTypesExW();
	// "EnumResourceTypesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumResourceTypesW();
	// "EnumResourceTypesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemCodePagesA();
	// "EnumSystemCodePagesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemCodePagesW();
	// "EnumSystemCodePagesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemFirmwareTables();
	// "EnumSystemFirmwareTables" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemGeoID();
	// "EnumSystemGeoID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemLanguageGroupsA();
	// "EnumSystemLanguageGroupsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemLanguageGroupsW();
	// "EnumSystemLanguageGroupsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemLocalesA();
	// "EnumSystemLocalesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemLocalesEx();
	// "EnumSystemLocalesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumSystemLocalesW();
	// "EnumSystemLocalesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumTimeFormatsA();
	// "EnumTimeFormatsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumTimeFormatsEx();
	// "EnumTimeFormatsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumTimeFormatsW();
	// "EnumTimeFormatsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumUILanguagesA();
	// "EnumUILanguagesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumUILanguagesW();
	// "EnumUILanguagesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLocalComputerNamesA();
	// "EnumerateLocalComputerNamesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateLocalComputerNamesW();
	// "EnumerateLocalComputerNamesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EraseTape();
	// "EraseTape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EscapeCommFunction();
	// "EscapeCommFunction" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExecuteUmsThread();
	// "ExecuteUmsThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExitProcess();
	// "ExitProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExitThread();
	// "ExitThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExitVDM();
	// "ExitVDM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpandEnvironmentStringsA();
	// "ExpandEnvironmentStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpandEnvironmentStringsW();
	// "ExpandEnvironmentStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpungeConsoleCommandHistoryA();
	// "ExpungeConsoleCommandHistoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ExpungeConsoleCommandHistoryW();
	// "ExpungeConsoleCommandHistoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FatalAppExitA();
	// "FatalAppExitA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FatalAppExitW();
	// "FatalAppExitW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FatalExit();
	// "FatalExit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FileTimeToDosDateTime();
	// "FileTimeToDosDateTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FileTimeToLocalFileTime();
	// "FileTimeToLocalFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FileTimeToSystemTime();
	// "FileTimeToSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillConsoleOutputAttribute();
	// "FillConsoleOutputAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillConsoleOutputCharacterA();
	// "FillConsoleOutputCharacterA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FillConsoleOutputCharacterW();
	// "FillConsoleOutputCharacterW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindActCtxSectionGuid();
	// "FindActCtxSectionGuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindActCtxSectionGuidWorker();
	// "FindActCtxSectionGuidWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindActCtxSectionStringA();
	// "FindActCtxSectionStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindActCtxSectionStringW();
	// "FindActCtxSectionStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindActCtxSectionStringWWorker();
	// "FindActCtxSectionStringWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindAtomA();
	// "FindAtomA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindAtomW();
	// "FindAtomW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindClose();
	// "FindClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindCloseChangeNotification();
	// "FindCloseChangeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstChangeNotificationA();
	// "FindFirstChangeNotificationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstChangeNotificationW();
	// "FindFirstChangeNotificationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileA();
	// "FindFirstFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileExA();
	// "FindFirstFileExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileExW();
	// "FindFirstFileExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileNameTransactedW();
	// "FindFirstFileNameTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileNameW();
	// "FindFirstFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileTransactedA();
	// "FindFirstFileTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileTransactedW();
	// "FindFirstFileTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFileW();
	// "FindFirstFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstStreamTransactedW();
	// "FindFirstStreamTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstStreamW();
	// "FindFirstStreamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstVolumeA();
	// "FindFirstVolumeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstVolumeMountPointA();
	// "FindFirstVolumeMountPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstVolumeMountPointW();
	// "FindFirstVolumeMountPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstVolumeW();
	// "FindFirstVolumeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNLSString();
	// "FindNLSString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNLSStringEx();
	// "FindNLSStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextChangeNotification();
	// "FindNextChangeNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextFileA();
	// "FindNextFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextFileNameW();
	// "FindNextFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextFileW();
	// "FindNextFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextStreamW();
	// "FindNextStreamW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextVolumeA();
	// "FindNextVolumeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextVolumeMountPointA();
	// "FindNextVolumeMountPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextVolumeMountPointW();
	// "FindNextVolumeMountPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindNextVolumeW();
	// "FindNextVolumeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindPackagesByPackageFamily();
	// "FindPackagesByPackageFamily" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindResourceA();
	// "FindResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindResourceExA();
	// "FindResourceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindResourceExW();
	// "FindResourceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindResourceW();
	// "FindResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindStringOrdinal();
	// "FindStringOrdinal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindVolumeClose();
	// "FindVolumeClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindVolumeMountPointClose();
	// "FindVolumeMountPointClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlsAlloc();
	// "FlsAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlsFree();
	// "FlsFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlsGetValue();
	// "FlsGetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlsSetValue();
	// "FlsSetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushConsoleInputBuffer();
	// "FlushConsoleInputBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushFileBuffers();
	// "FlushFileBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushInstructionCache();
	// "FlushInstructionCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushProcessWriteBuffers();
	// "FlushProcessWriteBuffers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushViewOfFile();
	// "FlushViewOfFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FoldStringA();
	// "FoldStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FoldStringW();
	// "FoldStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FormatApplicationUserModelId();
	// "FormatApplicationUserModelId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FormatMessageA();
	// "FormatMessageA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FormatMessageW();
	// "FormatMessageW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeConsole();
	// "FreeConsole" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeEnvironmentStringsA();
	// "FreeEnvironmentStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeEnvironmentStringsW();
	// "FreeEnvironmentStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeLibrary();
	// "FreeLibrary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeLibraryAndExitThread();
	// "FreeLibraryAndExitThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeLibraryWhenCallbackReturns();
	// "FreeLibraryWhenCallbackReturns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeMemoryJobObject();
	// "FreeMemoryJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeResource();
	// "FreeResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeUserPhysicalPages();
	// "FreeUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GenerateConsoleCtrlEvent();
	// "GenerateConsoleCtrlEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetACP();
	// "GetACP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetActiveProcessorCount();
	// "GetActiveProcessorCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetActiveProcessorGroupCount();
	// "GetActiveProcessorGroupCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAppContainerAce();
	// "GetAppContainerAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAppContainerNamedObjectPath();
	// "GetAppContainerNamedObjectPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetApplicationRecoveryCallback();
	// "GetApplicationRecoveryCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetApplicationRecoveryCallbackWorker();
	// "GetApplicationRecoveryCallbackWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetApplicationRestartSettings();
	// "GetApplicationRestartSettings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetApplicationRestartSettingsWorker();
	// "GetApplicationRestartSettingsWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetApplicationUserModelId();
	// "GetApplicationUserModelId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAtomNameA();
	// "GetAtomNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAtomNameW();
	// "GetAtomNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBinaryType();
	// "GetBinaryType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBinaryTypeA();
	// "GetBinaryTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetBinaryTypeW();
	// "GetBinaryTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCPInfo();
	// "GetCPInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCPInfoExA();
	// "GetCPInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCPInfoExW();
	// "GetCPInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCachedSigningLevel();
	// "GetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarDateFormat();
	// "GetCalendarDateFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarDateFormatEx();
	// "GetCalendarDateFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarDaysInMonth();
	// "GetCalendarDaysInMonth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarDifferenceInDays();
	// "GetCalendarDifferenceInDays" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarInfoA();
	// "GetCalendarInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarInfoEx();
	// "GetCalendarInfoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarInfoW();
	// "GetCalendarInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarMonthsInYear();
	// "GetCalendarMonthsInYear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarSupportedDateRange();
	// "GetCalendarSupportedDateRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCalendarWeekNumber();
	// "GetCalendarWeekNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetComPlusPackageInstallStatus();
	// "GetComPlusPackageInstallStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommConfig();
	// "GetCommConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommMask();
	// "GetCommMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommModemStatus();
	// "GetCommModemStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommProperties();
	// "GetCommProperties" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommState();
	// "GetCommState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommTimeouts();
	// "GetCommTimeouts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommandLineA();
	// "GetCommandLineA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCommandLineW();
	// "GetCommandLineW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCompressedFileSizeA();
	// "GetCompressedFileSizeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCompressedFileSizeTransactedA();
	// "GetCompressedFileSizeTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCompressedFileSizeTransactedW();
	// "GetCompressedFileSizeTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCompressedFileSizeW();
	// "GetCompressedFileSizeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// BOOL __stdcall GetComputerNameA();
	 "GetComputerNameA" :   [ wtypes.BOOL , [ wtypes.LPSTR , wtypes.LPDWORD ] , {abi : ffi.FFI_STDCALL } ] ,

	// BOOL __stdcall GetComputerNameExA();
	// "GetComputerNameExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetComputerNameExW();
	// "GetComputerNameExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// BOOL __stdcall GetComputerNameW(__out LPWSTR lpBuffer , __inout LPDWORD lpnSize);
	 "GetComputerNameW" :   [ wtypes.BOOL , [ wtypes.LPWSTR , wtypes.LPDWORD ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasA();
	// "GetConsoleAliasA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasExesA();
	// "GetConsoleAliasExesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasExesLengthA();
	// "GetConsoleAliasExesLengthA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasExesLengthW();
	// "GetConsoleAliasExesLengthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasExesW();
	// "GetConsoleAliasExesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasW();
	// "GetConsoleAliasW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasesA();
	// "GetConsoleAliasesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasesLengthA();
	// "GetConsoleAliasesLengthA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasesLengthW();
	// "GetConsoleAliasesLengthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleAliasesW();
	// "GetConsoleAliasesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCP();
	// "GetConsoleCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCharType();
	// "GetConsoleCharType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCommandHistoryA();
	// "GetConsoleCommandHistoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCommandHistoryLengthA();
	// "GetConsoleCommandHistoryLengthA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCommandHistoryLengthW();
	// "GetConsoleCommandHistoryLengthW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCommandHistoryW();
	// "GetConsoleCommandHistoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCursorInfo();
	// "GetConsoleCursorInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleCursorMode();
	// "GetConsoleCursorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleDisplayMode();
	// "GetConsoleDisplayMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleFontInfo();
	// "GetConsoleFontInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleFontSize();
	// "GetConsoleFontSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleHardwareState();
	// "GetConsoleHardwareState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleHistoryInfo();
	// "GetConsoleHistoryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleInputExeNameA();
	// "GetConsoleInputExeNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleInputExeNameW();
	// "GetConsoleInputExeNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleInputWaitHandle();
	// "GetConsoleInputWaitHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleKeyboardLayoutNameA();
	// "GetConsoleKeyboardLayoutNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleKeyboardLayoutNameW();
	// "GetConsoleKeyboardLayoutNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleMode();
	// "GetConsoleMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleNlsMode();
	// "GetConsoleNlsMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleOriginalTitleA();
	// "GetConsoleOriginalTitleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleOriginalTitleW();
	// "GetConsoleOriginalTitleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleOutputCP();
	// "GetConsoleOutputCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleProcessList();
	// "GetConsoleProcessList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleScreenBufferInfo();
	// "GetConsoleScreenBufferInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleScreenBufferInfoEx();
	// "GetConsoleScreenBufferInfoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleSelectionInfo();
	// "GetConsoleSelectionInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleTitleA();
	// "GetConsoleTitleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleTitleW();
	// "GetConsoleTitleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetConsoleWindow();
	// "GetConsoleWindow" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrencyFormatA();
	// "GetCurrencyFormatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrencyFormatEx();
	// "GetCurrencyFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrencyFormatW();
	// "GetCurrencyFormatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentActCtx();
	// "GetCurrentActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentActCtxWorker();
	// "GetCurrentActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentApplicationUserModelId();
	// "GetCurrentApplicationUserModelId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentConsoleFont();
	// "GetCurrentConsoleFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentConsoleFontEx();
	// "GetCurrentConsoleFontEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentDirectoryA();
	// "GetCurrentDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentDirectoryW();
	// "GetCurrentDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPackageFamilyName();
	// "GetCurrentPackageFamilyName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPackageFullName();
	// "GetCurrentPackageFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPackageId();
	// "GetCurrentPackageId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPackageInfo();
	// "GetCurrentPackageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentPackagePath();
	// "GetCurrentPackagePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentProcess();
	// "GetCurrentProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentProcessId();
	// "GetCurrentProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentProcessorNumber();
	// "GetCurrentProcessorNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentProcessorNumberEx();
	// "GetCurrentProcessorNumberEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentThread();
	// "GetCurrentThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentThreadId();
	// "GetCurrentThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentThreadStackLimits();
	// "GetCurrentThreadStackLimits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentUmsThread();
	// "GetCurrentUmsThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDateFormatA();
	// "GetDateFormatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDateFormatAWorker();
	// "GetDateFormatAWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDateFormatEx();
	// "GetDateFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDateFormatW();
	// "GetDateFormatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDateFormatWWorker();
	// "GetDateFormatWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDefaultCommConfigA();
	// "GetDefaultCommConfigA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDefaultCommConfigW();
	// "GetDefaultCommConfigW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDevicePowerState();
	// "GetDevicePowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDiskFreeSpaceA();
	// "GetDiskFreeSpaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDiskFreeSpaceExA();
	// "GetDiskFreeSpaceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDiskFreeSpaceExW();
	// "GetDiskFreeSpaceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDiskFreeSpaceW();
	// "GetDiskFreeSpaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDllDirectoryA();
	// "GetDllDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDllDirectoryW();
	// "GetDllDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDriveTypeA();
	// "GetDriveTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDriveTypeW();
	// "GetDriveTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDurationFormat();
	// "GetDurationFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDurationFormatEx();
	// "GetDurationFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDynamicTimeZoneInformation();
	// "GetDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnabledXStateFeatures();
	// "GetEnabledXStateFeatures" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEncryptedFileVersionExt();
	// "GetEncryptedFileVersionExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnvironmentStrings();
	// "GetEnvironmentStrings" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnvironmentStringsA();
	// "GetEnvironmentStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnvironmentStringsW();
	// "GetEnvironmentStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnvironmentVariableA();
	// "GetEnvironmentVariableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEnvironmentVariableW();
	// "GetEnvironmentVariableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEraNameCountedString();
	// "GetEraNameCountedString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetErrorMode();
	// "GetErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExitCodeProcess();
	// "GetExitCodeProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExitCodeThread();
	// "GetExitCodeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExpandedNameA();
	// "GetExpandedNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExpandedNameW();
	// "GetExpandedNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesA();
	// "GetFileAttributesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesExA();
	// "GetFileAttributesExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesExW();
	// "GetFileAttributesExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesTransactedA();
	// "GetFileAttributesTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesTransactedW();
	// "GetFileAttributesTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileAttributesW();
	// "GetFileAttributesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileBandwidthReservation();
	// "GetFileBandwidthReservation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileInformationByHandle();
	// "GetFileInformationByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileInformationByHandleEx();
	// "GetFileInformationByHandleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileMUIInfo();
	// "GetFileMUIInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileMUIPath();
	// "GetFileMUIPath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileSize();
	// "GetFileSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileSizeEx();
	// "GetFileSizeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileTime();
	// "GetFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileType();
	// "GetFileType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFinalPathNameByHandleA();
	// "GetFinalPathNameByHandleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFinalPathNameByHandleW();
	// "GetFinalPathNameByHandleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFirmwareEnvironmentVariableA();
	// "GetFirmwareEnvironmentVariableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFirmwareEnvironmentVariableExA();
	// "GetFirmwareEnvironmentVariableExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFirmwareEnvironmentVariableExW();
	// "GetFirmwareEnvironmentVariableExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFirmwareEnvironmentVariableW();
	// "GetFirmwareEnvironmentVariableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFirmwareType();
	// "GetFirmwareType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFullPathNameA();
	// "GetFullPathNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFullPathNameTransactedA();
	// "GetFullPathNameTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFullPathNameTransactedW();
	// "GetFullPathNameTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFullPathNameW();
	// "GetFullPathNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGeoInfoA();
	// "GetGeoInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetGeoInfoW();
	// "GetGeoInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetHandleInformation();
	// "GetHandleInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLargePageMinimum();
	// "GetLargePageMinimum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLargestConsoleWindowSize();
	// "GetLargestConsoleWindowSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLastError();
	// "GetLastError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocalTime();
	// "GetLocalTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocaleInfoA();
	// "GetLocaleInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocaleInfoEx();
	// "GetLocaleInfoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocaleInfoW();
	// "GetLocaleInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogicalDriveStringsA();
	// "GetLogicalDriveStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogicalDriveStringsW();
	// "GetLogicalDriveStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogicalDrives();
	// "GetLogicalDrives" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogicalProcessorInformation();
	// "GetLogicalProcessorInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLogicalProcessorInformationEx();
	// "GetLogicalProcessorInformationEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLongPathNameA();
	// "GetLongPathNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLongPathNameTransactedA();
	// "GetLongPathNameTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLongPathNameTransactedW();
	// "GetLongPathNameTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLongPathNameW();
	// "GetLongPathNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMailslotInfo();
	// "GetMailslotInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMaximumProcessorCount();
	// "GetMaximumProcessorCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMaximumProcessorGroupCount();
	// "GetMaximumProcessorGroupCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMemoryErrorHandlingCapabilities();
	// "GetMemoryErrorHandlingCapabilities" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleFileNameA();
	// "GetModuleFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleFileNameW();
	// "GetModuleFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleHandleA();
	// "GetModuleHandleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleHandleExA();
	// "GetModuleHandleExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleHandleExW();
	// "GetModuleHandleExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetModuleHandleW();
	// "GetModuleHandleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNLSVersion();
	// "GetNLSVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNLSVersionEx();
	// "GetNLSVersionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeAttribute();
	// "GetNamedPipeAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeClientComputerNameA();
	// "GetNamedPipeClientComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeClientComputerNameW();
	// "GetNamedPipeClientComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeClientProcessId();
	// "GetNamedPipeClientProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeClientSessionId();
	// "GetNamedPipeClientSessionId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeHandleStateA();
	// "GetNamedPipeHandleStateA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeHandleStateW();
	// "GetNamedPipeHandleStateW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeInfo();
	// "GetNamedPipeInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeServerProcessId();
	// "GetNamedPipeServerProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedPipeServerSessionId();
	// "GetNamedPipeServerSessionId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNativeSystemInfo();
	// "GetNativeSystemInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNextUmsListItem();
	// "GetNextUmsListItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNextVDMCommand();
	// "GetNextVDMCommand" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaAvailableMemoryNode();
	// "GetNumaAvailableMemoryNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaAvailableMemoryNodeEx();
	// "GetNumaAvailableMemoryNodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaHighestNodeNumber();
	// "GetNumaHighestNodeNumber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaNodeNumberFromHandle();
	// "GetNumaNodeNumberFromHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaNodeProcessorMask();
	// "GetNumaNodeProcessorMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaNodeProcessorMaskEx();
	// "GetNumaNodeProcessorMaskEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaProcessorNode();
	// "GetNumaProcessorNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaProcessorNodeEx();
	// "GetNumaProcessorNodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaProximityNode();
	// "GetNumaProximityNode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumaProximityNodeEx();
	// "GetNumaProximityNodeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberFormatA();
	// "GetNumberFormatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberFormatEx();
	// "GetNumberFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberFormatW();
	// "GetNumberFormatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberOfConsoleFonts();
	// "GetNumberOfConsoleFonts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberOfConsoleInputEvents();
	// "GetNumberOfConsoleInputEvents" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberOfConsoleMouseButtons();
	// "GetNumberOfConsoleMouseButtons" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOEMCP();
	// "GetOEMCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOverlappedResult();
	// "GetOverlappedResult" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOverlappedResultEx();
	// "GetOverlappedResultEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackageApplicationIds();
	// "GetPackageApplicationIds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackageFamilyName();
	// "GetPackageFamilyName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackageFullName();
	// "GetPackageFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackageId();
	// "GetPackageId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackageInfo();
	// "GetPackageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackagePath();
	// "GetPackagePath" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackagePathByFullName();
	// "GetPackagePathByFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPackagesByPackageFamily();
	// "GetPackagesByPackageFamily" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPhysicallyInstalledSystemMemory();
	// "GetPhysicallyInstalledSystemMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPriorityClass();
	// "GetPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileIntA();
	// "GetPrivateProfileIntA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileIntW();
	// "GetPrivateProfileIntW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileSectionA();
	// "GetPrivateProfileSectionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileSectionNamesA();
	// "GetPrivateProfileSectionNamesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileSectionNamesW();
	// "GetPrivateProfileSectionNamesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileSectionW();
	// "GetPrivateProfileSectionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileStringA();
	// "GetPrivateProfileStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileStringW();
	// "GetPrivateProfileStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileStructA();
	// "GetPrivateProfileStructA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateProfileStructW();
	// "GetPrivateProfileStructW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcAddress();
	// "GetProcAddress" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessAffinityMask();
	// "GetProcessAffinityMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessDEPPolicy();
	// "GetProcessDEPPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessDefaultCpuSets();
	// "GetProcessDefaultCpuSets" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessGroupAffinity();
	// "GetProcessGroupAffinity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessHandleCount();
	// "GetProcessHandleCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessHeap();
	// "GetProcessHeap" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessHeaps();
	// "GetProcessHeaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessId();
	// "GetProcessId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessIdOfThread();
	// "GetProcessIdOfThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessInformation();
	// "GetProcessInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessIoCounters();
	// "GetProcessIoCounters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessMitigationPolicy();
	// "GetProcessMitigationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessPreferredUILanguages();
	// "GetProcessPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessPriorityBoost();
	// "GetProcessPriorityBoost" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessShutdownParameters();
	// "GetProcessShutdownParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessTimes();
	// "GetProcessTimes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessVersion();
	// "GetProcessVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessWorkingSetSize();
	// "GetProcessWorkingSetSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessWorkingSetSizeEx();
	// "GetProcessWorkingSetSizeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProcessorSystemCycleTime();
	// "GetProcessorSystemCycleTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProductInfo();
	// "GetProductInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileIntA();
	// "GetProfileIntA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileIntW();
	// "GetProfileIntW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileSectionA();
	// "GetProfileSectionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileSectionW();
	// "GetProfileSectionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileStringA();
	// "GetProfileStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetProfileStringW();
	// "GetProfileStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetQueuedCompletionStatus();
	// "GetQueuedCompletionStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetQueuedCompletionStatusEx();
	// "GetQueuedCompletionStatusEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetShortPathNameA();
	// "GetShortPathNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetShortPathNameW();
	// "GetShortPathNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStagedPackagePathByFullName();
	// "GetStagedPackagePathByFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStartupInfoA();
	// "GetStartupInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStartupInfoW();
	// "GetStartupInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStateFolder();
	// "GetStateFolder" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStdHandle();
	// "GetStdHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringScripts();
	// "GetStringScripts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringTypeA();
	// "GetStringTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringTypeExA();
	// "GetStringTypeExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringTypeExW();
	// "GetStringTypeExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringTypeW();
	// "GetStringTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemAppDataKey();
	// "GetSystemAppDataKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemCpuSetInformation();
	// "GetSystemCpuSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDEPPolicy();
	// "GetSystemDEPPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDefaultLCID();
	// "GetSystemDefaultLCID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDefaultLangID();
	// "GetSystemDefaultLangID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDefaultLocaleName();
	// "GetSystemDefaultLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDefaultUILanguage();
	// "GetSystemDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDirectoryA();
	// "GetSystemDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemDirectoryW();
	// "GetSystemDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemFileCacheSize();
	// "GetSystemFileCacheSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemFirmwareTable();
	// "GetSystemFirmwareTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemInfo();
	// "GetSystemInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemPowerStatus();
	// "GetSystemPowerStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemPreferredUILanguages();
	// "GetSystemPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemRegistryQuota();
	// "GetSystemRegistryQuota" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemTime();
	// "GetSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemTimeAdjustment();
	// "GetSystemTimeAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemTimeAsFileTime();
	// "GetSystemTimeAsFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemTimePreciseAsFileTime();
	// "GetSystemTimePreciseAsFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemTimes();
	// "GetSystemTimes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemWindowsDirectoryA();
	// "GetSystemWindowsDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemWindowsDirectoryW();
	// "GetSystemWindowsDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemWow64DirectoryA();
	// "GetSystemWow64DirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSystemWow64DirectoryW();
	// "GetSystemWow64DirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTapeParameters();
	// "GetTapeParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTapePosition();
	// "GetTapePosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTapeStatus();
	// "GetTapeStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTempFileNameA();
	// "GetTempFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTempFileNameW();
	// "GetTempFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTempPathA();
	// "GetTempPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTempPathW();
	// "GetTempPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadContext();
	// "GetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadErrorMode();
	// "GetThreadErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadGroupAffinity();
	// "GetThreadGroupAffinity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadIOPendingFlag();
	// "GetThreadIOPendingFlag" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadId();
	// "GetThreadId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadIdealProcessorEx();
	// "GetThreadIdealProcessorEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadInformation();
	// "GetThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadLocale();
	// "GetThreadLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadPreferredUILanguages();
	// "GetThreadPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadPriority();
	// "GetThreadPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadPriorityBoost();
	// "GetThreadPriorityBoost" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadSelectedCpuSets();
	// "GetThreadSelectedCpuSets" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadSelectorEntry();
	// "GetThreadSelectorEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadTimes();
	// "GetThreadTimes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadUILanguage();
	// "GetThreadUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTickCount();
	// "GetTickCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTickCount64();
	// "GetTickCount64" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeFormatA();
	// "GetTimeFormatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeFormatAWorker();
	// "GetTimeFormatAWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeFormatEx();
	// "GetTimeFormatEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeFormatW();
	// "GetTimeFormatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeFormatWWorker();
	// "GetTimeFormatWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeZoneInformation();
	// "GetTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTimeZoneInformationForYear();
	// "GetTimeZoneInformationForYear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUILanguageInfo();
	// "GetUILanguageInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUmsCompletionListEvent();
	// "GetUmsCompletionListEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUmsSystemThreadInformation();
	// "GetUmsSystemThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserDefaultLCID();
	// "GetUserDefaultLCID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserDefaultLangID();
	// "GetUserDefaultLangID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserDefaultLocaleName();
	// "GetUserDefaultLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserDefaultUILanguage();
	// "GetUserDefaultUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserGeoID();
	// "GetUserGeoID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserPreferredUILanguages();
	// "GetUserPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVDMCurrentDirectories();
	// "GetVDMCurrentDirectories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVersion();
	// "GetVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVersionExA();
	// "GetVersionExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVersionExW();
	// "GetVersionExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumeInformationA();
	// "GetVolumeInformationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumeInformationByHandleW();
	// "GetVolumeInformationByHandleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumeInformationW();
	// "GetVolumeInformationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumeNameForVolumeMountPointA();
	// "GetVolumeNameForVolumeMountPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumeNameForVolumeMountPointW();
	// "GetVolumeNameForVolumeMountPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumePathNameA();
	// "GetVolumePathNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumePathNameW();
	// "GetVolumePathNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumePathNamesForVolumeNameA();
	// "GetVolumePathNamesForVolumeNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetVolumePathNamesForVolumeNameW();
	// "GetVolumePathNamesForVolumeNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowsDirectoryA();
	// "GetWindowsDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowsDirectoryW();
	// "GetWindowsDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWriteWatch();
	// "GetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetXStateFeaturesMask();
	// "GetXStateFeaturesMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalAddAtomA();
	// "GlobalAddAtomA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalAddAtomExA();
	// "GlobalAddAtomExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalAddAtomExW();
	// "GlobalAddAtomExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalAddAtomW();
	// "GlobalAddAtomW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalAlloc();
	// "GlobalAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalCompact();
	// "GlobalCompact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalDeleteAtom();
	// "GlobalDeleteAtom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalFindAtomA();
	// "GlobalFindAtomA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalFindAtomW();
	// "GlobalFindAtomW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalFix();
	// "GlobalFix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalFlags();
	// "GlobalFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalFree();
	// "GlobalFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalGetAtomNameA();
	// "GlobalGetAtomNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalGetAtomNameW();
	// "GlobalGetAtomNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalHandle();
	// "GlobalHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalLock();
	// "GlobalLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalMemoryStatus();
	// "GlobalMemoryStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalMemoryStatusEx();
	// "GlobalMemoryStatusEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalReAlloc();
	// "GlobalReAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalSize();
	// "GlobalSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalUnWire();
	// "GlobalUnWire" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalUnfix();
	// "GlobalUnfix" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalUnlock();
	// "GlobalUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GlobalWire();
	// "GlobalWire" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Heap32First();
	// "Heap32First" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Heap32ListFirst();
	// "Heap32ListFirst" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Heap32ListNext();
	// "Heap32ListNext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Heap32Next();
	// "Heap32Next" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapAlloc();
	// "HeapAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapCompact();
	// "HeapCompact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapCreate();
	// "HeapCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapDestroy();
	// "HeapDestroy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapFree();
	// "HeapFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapLock();
	// "HeapLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapQueryInformation();
	// "HeapQueryInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapReAlloc();
	// "HeapReAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapSetInformation();
	// "HeapSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapSize();
	// "HeapSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapSummary();
	// "HeapSummary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapUnlock();
	// "HeapUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapValidate();
	// "HeapValidate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall HeapWalk();
	// "HeapWalk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IdnToAscii();
	// "IdnToAscii" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IdnToNameprepUnicode();
	// "IdnToNameprepUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IdnToUnicode();
	// "IdnToUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitAtomTable();
	// "InitAtomTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitOnceBeginInitialize();
	// "InitOnceBeginInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitOnceComplete();
	// "InitOnceComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitOnceExecuteOnce();
	// "InitOnceExecuteOnce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitOnceInitialize();
	// "InitOnceInitialize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeConditionVariable();
	// "InitializeConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeContext();
	// "InitializeContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeCriticalSection();
	// "InitializeCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeCriticalSectionAndSpinCount();
	// "InitializeCriticalSectionAndSpinCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeCriticalSectionEx();
	// "InitializeCriticalSectionEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeEnclave();
	// "InitializeEnclave" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeProcThreadAttributeList();
	// "InitializeProcThreadAttributeList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeSListHead();
	// "InitializeSListHead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeSRWLock();
	// "InitializeSRWLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeSynchronizationBarrier();
	// "InitializeSynchronizationBarrier" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InstallELAMCertificateInfo();
	// "InstallELAMCertificateInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InterlockedFlushSList();
	// "InterlockedFlushSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InterlockedPopEntrySList();
	// "InterlockedPopEntrySList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InterlockedPushEntrySList();
	// "InterlockedPushEntrySList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InterlockedPushListSList();
	// "InterlockedPushListSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InterlockedPushListSListEx();
	// "InterlockedPushListSListEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InvalidateConsoleDIBits();
	// "InvalidateConsoleDIBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadCodePtr();
	// "IsBadCodePtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadHugeReadPtr();
	// "IsBadHugeReadPtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadHugeWritePtr();
	// "IsBadHugeWritePtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadReadPtr();
	// "IsBadReadPtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadStringPtrA();
	// "IsBadStringPtrA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadStringPtrW();
	// "IsBadStringPtrW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsBadWritePtr();
	// "IsBadWritePtr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCalendarLeapDay();
	// "IsCalendarLeapDay" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCalendarLeapMonth();
	// "IsCalendarLeapMonth" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsCalendarLeapYear();
	// "IsCalendarLeapYear" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDBCSLeadByte();
	// "IsDBCSLeadByte" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDBCSLeadByteEx();
	// "IsDBCSLeadByteEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsDebuggerPresent();
	// "IsDebuggerPresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsEnclaveTypeSupported();
	// "IsEnclaveTypeSupported" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsNLSDefinedString();
	// "IsNLSDefinedString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsNativeVhdBoot();
	// "IsNativeVhdBoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsNormalizedString();
	// "IsNormalizedString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsProcessCritical();
	// "IsProcessCritical" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsProcessInJob();
	// "IsProcessInJob" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsProcessorFeaturePresent();
	// "IsProcessorFeaturePresent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsSystemResumeAutomatic();
	// "IsSystemResumeAutomatic" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsThreadAFiber();
	// "IsThreadAFiber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsThreadpoolTimerSet();
	// "IsThreadpoolTimerSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidCalDateTime();
	// "IsValidCalDateTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidCodePage();
	// "IsValidCodePage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidLanguageGroup();
	// "IsValidLanguageGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidLocale();
	// "IsValidLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidLocaleName();
	// "IsValidLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidNLSVersion();
	// "IsValidNLSVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWow64Process();
	// "IsWow64Process" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EmptyWorkingSet();
	// "K32EmptyWorkingSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumDeviceDrivers();
	// "K32EnumDeviceDrivers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumPageFilesA();
	// "K32EnumPageFilesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumPageFilesW();
	// "K32EnumPageFilesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumProcessModules();
	// "K32EnumProcessModules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumProcessModulesEx();
	// "K32EnumProcessModulesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32EnumProcesses();
	// "K32EnumProcesses" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetDeviceDriverBaseNameA();
	// "K32GetDeviceDriverBaseNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetDeviceDriverBaseNameW();
	// "K32GetDeviceDriverBaseNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetDeviceDriverFileNameA();
	// "K32GetDeviceDriverFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetDeviceDriverFileNameW();
	// "K32GetDeviceDriverFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetMappedFileNameA();
	// "K32GetMappedFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetMappedFileNameW();
	// "K32GetMappedFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetModuleBaseNameA();
	// "K32GetModuleBaseNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetModuleBaseNameW();
	// "K32GetModuleBaseNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetModuleFileNameExA();
	// "K32GetModuleFileNameExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetModuleFileNameExW();
	// "K32GetModuleFileNameExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetModuleInformation();
	// "K32GetModuleInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetPerformanceInfo();
	// "K32GetPerformanceInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetProcessImageFileNameA();
	// "K32GetProcessImageFileNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetProcessImageFileNameW();
	// "K32GetProcessImageFileNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetProcessMemoryInfo();
	// "K32GetProcessMemoryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetWsChanges();
	// "K32GetWsChanges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32GetWsChangesEx();
	// "K32GetWsChangesEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32InitializeProcessForWsWatch();
	// "K32InitializeProcessForWsWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32QueryWorkingSet();
	// "K32QueryWorkingSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall K32QueryWorkingSetEx();
	// "K32QueryWorkingSetEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LCIDToLocaleName();
	// "LCIDToLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LCMapStringA();
	// "LCMapStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LCMapStringEx();
	// "LCMapStringEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LCMapStringW();
	// "LCMapStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZClose();
	// "LZClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZCloseFile();
	// "LZCloseFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZCopy();
	// "LZCopy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZCreateFileW();
	// "LZCreateFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZDone();
	// "LZDone" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZInit();
	// "LZInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZOpenFileA();
	// "LZOpenFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZOpenFileW();
	// "LZOpenFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZRead();
	// "LZRead" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZSeek();
	// "LZSeek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LZStart();
	// "LZStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LeaveCriticalSection();
	// "LeaveCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LeaveCriticalSectionWhenCallbackReturns();
	// "LeaveCriticalSectionWhenCallbackReturns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadAppInitDlls();
	// "LoadAppInitDlls" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadEnclaveData();
	// "LoadEnclaveData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadLibraryA();
	// "LoadLibraryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadLibraryExA();
	// "LoadLibraryExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadLibraryExW();
	// "LoadLibraryExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadLibraryW();
	// "LoadLibraryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadModule();
	// "LoadModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadPackagedLibrary();
	// "LoadPackagedLibrary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadResource();
	// "LoadResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadStringBaseExW();
	// "LoadStringBaseExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LoadStringBaseW();
	// "LoadStringBaseW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalAlloc();
	// "LocalAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalCompact();
	// "LocalCompact" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalFileTimeToFileTime();
	// "LocalFileTimeToFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalFlags();
	// "LocalFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalFree();
	// "LocalFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalHandle();
	// "LocalHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalLock();
	// "LocalLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalReAlloc();
	// "LocalReAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalShrink();
	// "LocalShrink" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalSize();
	// "LocalSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocalUnlock();
	// "LocalUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocaleNameToLCID();
	// "LocaleNameToLCID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LocateXStateFeature();
	// "LocateXStateFeature" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockFile();
	// "LockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockFileEx();
	// "LockFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockResource();
	// "LockResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapUserPhysicalPages();
	// "MapUserPhysicalPages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapUserPhysicalPagesScatter();
	// "MapUserPhysicalPagesScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapViewOfFile();
	// "MapViewOfFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapViewOfFileEx();
	// "MapViewOfFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapViewOfFileExNuma();
	// "MapViewOfFileExNuma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapViewOfFileFromApp();
	// "MapViewOfFileFromApp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Module32First();
	// "Module32First" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Module32FirstW();
	// "Module32FirstW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Module32Next();
	// "Module32Next" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Module32NextW();
	// "Module32NextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileA();
	// "MoveFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileExA();
	// "MoveFileExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileExW();
	// "MoveFileExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileTransactedA();
	// "MoveFileTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileTransactedW();
	// "MoveFileTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileW();
	// "MoveFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileWithProgressA();
	// "MoveFileWithProgressA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MoveFileWithProgressW();
	// "MoveFileWithProgressW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MulDiv();
	// "MulDiv" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MultiByteToWideChar();
	// "MultiByteToWideChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NeedCurrentDirectoryForExePathA();
	// "NeedCurrentDirectoryForExePathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NeedCurrentDirectoryForExePathW();
	// "NeedCurrentDirectoryForExePathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsCheckPolicy();
	// "NlsCheckPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsEventDataDescCreate();
	// "NlsEventDataDescCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsGetCacheUpdateCount();
	// "NlsGetCacheUpdateCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsUpdateLocale();
	// "NlsUpdateLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsUpdateSystemLocale();
	// "NlsUpdateSystemLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NlsWriteEtwEvent();
	// "NlsWriteEtwEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NormalizeString();
	// "NormalizeString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyMountMgr();
	// "NotifyMountMgr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyUILanguageChange();
	// "NotifyUILanguageChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NtVdm64CreateProcessInternalW();
	// "NtVdm64CreateProcessInternalW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OOBEComplete();
	// "OOBEComplete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OfferVirtualMemory();
	// "OfferVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenConsoleW();
	// "OpenConsoleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenConsoleWStub();
	// "OpenConsoleWStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEventA();
	// "OpenEventA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEventW();
	// "OpenEventW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenFile();
	// "OpenFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenFileById();
	// "OpenFileById" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenFileMappingA();
	// "OpenFileMappingA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenFileMappingW();
	// "OpenFileMappingW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenJobObjectA();
	// "OpenJobObjectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenJobObjectW();
	// "OpenJobObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenMutexA();
	// "OpenMutexA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenMutexW();
	// "OpenMutexW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenPackageInfoByFullName();
	// "OpenPackageInfoByFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenPrivateNamespaceA();
	// "OpenPrivateNamespaceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenPrivateNamespaceW();
	// "OpenPrivateNamespaceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenProcess();
	// "OpenProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenProcessToken();
	// "OpenProcessToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenProfileUserMapping();
	// "OpenProfileUserMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenSemaphoreA();
	// "OpenSemaphoreA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenSemaphoreW();
	// "OpenSemaphoreW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenState();
	// "OpenState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenStateExplicit();
	// "OpenStateExplicit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenThread();
	// "OpenThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenThreadToken();
	// "OpenThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenWaitableTimerA();
	// "OpenWaitableTimerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenWaitableTimerW();
	// "OpenWaitableTimerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OutputDebugStringA();
	// "OutputDebugStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OutputDebugStringW();
	// "OutputDebugStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackageFamilyNameFromFullName();
	// "PackageFamilyNameFromFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackageFamilyNameFromId();
	// "PackageFamilyNameFromId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackageFullNameFromId();
	// "PackageFullNameFromId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackageIdFromFullName();
	// "PackageIdFromFullName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PackageNameAndPublisherIdFromFamilyName();
	// "PackageNameAndPublisherIdFromFamilyName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ParseApplicationUserModelId();
	// "ParseApplicationUserModelId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PeekConsoleInputA();
	// "PeekConsoleInputA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PeekConsoleInputW();
	// "PeekConsoleInputW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PeekNamedPipe();
	// "PeekNamedPipe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PostQueuedCompletionStatus();
	// "PostQueuedCompletionStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PowerClearRequest();
	// "PowerClearRequest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PowerCreateRequest();
	// "PowerCreateRequest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PowerSetRequest();
	// "PowerSetRequest" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrefetchVirtualMemory();
	// "PrefetchVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrepareTape();
	// "PrepareTape" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivCopyFileExW();
	// "PrivCopyFileExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivMoveFileIdentityW();
	// "PrivMoveFileIdentityW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Process32First();
	// "Process32First" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Process32FirstW();
	// "Process32FirstW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Process32Next();
	// "Process32Next" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Process32NextW();
	// "Process32NextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ProcessIdToSessionId();
	// "ProcessIdToSessionId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssCaptureSnapshot();
	// "PssCaptureSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssDuplicateSnapshot();
	// "PssDuplicateSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssFreeSnapshot();
	// "PssFreeSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssQuerySnapshot();
	// "PssQuerySnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerCreate();
	// "PssWalkMarkerCreate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerFree();
	// "PssWalkMarkerFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerGetPosition();
	// "PssWalkMarkerGetPosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerRewind();
	// "PssWalkMarkerRewind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerSeek();
	// "PssWalkMarkerSeek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerSeekToBeginning();
	// "PssWalkMarkerSeekToBeginning" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerSetPosition();
	// "PssWalkMarkerSetPosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkMarkerTell();
	// "PssWalkMarkerTell" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PssWalkSnapshot();
	// "PssWalkSnapshot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PulseEvent();
	// "PulseEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PurgeComm();
	// "PurgeComm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryActCtxSettingsW();
	// "QueryActCtxSettingsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryActCtxSettingsWWorker();
	// "QueryActCtxSettingsWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryActCtxW();
	// "QueryActCtxW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryActCtxWWorker();
	// "QueryActCtxWWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryDepthSList();
	// "QueryDepthSList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryDosDeviceA();
	// "QueryDosDeviceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryDosDeviceW();
	// "QueryDosDeviceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryFullProcessImageNameA();
	// "QueryFullProcessImageNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryFullProcessImageNameW();
	// "QueryFullProcessImageNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryIdleProcessorCycleTime();
	// "QueryIdleProcessorCycleTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryIdleProcessorCycleTimeEx();
	// "QueryIdleProcessorCycleTimeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryInformationJobObject();
	// "QueryInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryIoRateControlInformationJobObject();
	// "QueryIoRateControlInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryMemoryResourceNotification();
	// "QueryMemoryResourceNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryPerformanceCounter();
	// "QueryPerformanceCounter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryPerformanceFrequency();
	// "QueryPerformanceFrequency" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryProcessAffinityUpdateMode();
	// "QueryProcessAffinityUpdateMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryProcessCycleTime();
	// "QueryProcessCycleTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryProtectedPolicy();
	// "QueryProtectedPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryThreadCycleTime();
	// "QueryThreadCycleTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryThreadProfiling();
	// "QueryThreadProfiling" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryThreadpoolStackInformation();
	// "QueryThreadpoolStackInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryUmsThreadInformation();
	// "QueryUmsThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryUnbiasedInterruptTime();
	// "QueryUnbiasedInterruptTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueueUserAPC();
	// "QueueUserAPC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueueUserWorkItem();
	// "QueueUserWorkItem" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkGetData2Worker();
	// "QuirkGetData2Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkGetDataWorker();
	// "QuirkGetDataWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabled2Worker();
	// "QuirkIsEnabled2Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabled3Worker();
	// "QuirkIsEnabled3Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledForPackage2Worker();
	// "QuirkIsEnabledForPackage2Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledForPackage3Worker();
	// "QuirkIsEnabledForPackage3Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledForPackage4Worker();
	// "QuirkIsEnabledForPackage4Worker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledForPackageWorker();
	// "QuirkIsEnabledForPackageWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledForProcessWorker();
	// "QuirkIsEnabledForProcessWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuirkIsEnabledWorker();
	// "QuirkIsEnabledWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RaiseException();
	// "RaiseException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RaiseFailFastException();
	// "RaiseFailFastException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RaiseInvalid16BitExeError();
	// "RaiseInvalid16BitExeError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReOpenFile();
	// "ReOpenFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleA();
	// "ReadConsoleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleInputA();
	// "ReadConsoleInputA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleInputExA();
	// "ReadConsoleInputExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleInputExW();
	// "ReadConsoleInputExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleInputW();
	// "ReadConsoleInputW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleOutputA();
	// "ReadConsoleOutputA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleOutputAttribute();
	// "ReadConsoleOutputAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleOutputCharacterA();
	// "ReadConsoleOutputCharacterA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleOutputCharacterW();
	// "ReadConsoleOutputCharacterW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleOutputW();
	// "ReadConsoleOutputW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadConsoleW();
	// "ReadConsoleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadDirectoryChangesW();
	// "ReadDirectoryChangesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadFile();
	// "ReadFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadFileEx();
	// "ReadFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadFileScatter();
	// "ReadFileScatter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadProcessMemory();
	// "ReadProcessMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadThreadProfilingData();
	// "ReadThreadProfilingData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReclaimVirtualMemory();
	// "ReclaimVirtualMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCloseKey();
	// "RegCloseKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCopyTreeW();
	// "RegCopyTreeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyExA();
	// "RegCreateKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyExW();
	// "RegCreateKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyExA();
	// "RegDeleteKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyExW();
	// "RegDeleteKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteTreeA();
	// "RegDeleteTreeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteTreeW();
	// "RegDeleteTreeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteValueA();
	// "RegDeleteValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteValueW();
	// "RegDeleteValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDisablePredefinedCacheEx();
	// "RegDisablePredefinedCacheEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyExA();
	// "RegEnumKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyExW();
	// "RegEnumKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumValueA();
	// "RegEnumValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumValueW();
	// "RegEnumValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegFlushKey();
	// "RegFlushKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegGetKeySecurity();
	// "RegGetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegGetValueA();
	// "RegGetValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegGetValueW();
	// "RegGetValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegLoadKeyA();
	// "RegLoadKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegLoadKeyW();
	// "RegLoadKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegLoadMUIStringA();
	// "RegLoadMUIStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegLoadMUIStringW();
	// "RegLoadMUIStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegNotifyChangeKeyValue();
	// "RegNotifyChangeKeyValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenCurrentUser();
	// "RegOpenCurrentUser" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyExA();
	// "RegOpenKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyExW();
	// "RegOpenKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenUserClassesRoot();
	// "RegOpenUserClassesRoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryInfoKeyA();
	// "RegQueryInfoKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryInfoKeyW();
	// "RegQueryInfoKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueExA();
	// "RegQueryValueExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueExW();
	// "RegQueryValueExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegRestoreKeyA();
	// "RegRestoreKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegRestoreKeyW();
	// "RegRestoreKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyExA();
	// "RegSaveKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyExW();
	// "RegSaveKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetKeySecurity();
	// "RegSetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueExA();
	// "RegSetValueExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueExW();
	// "RegSetValueExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegUnLoadKeyA();
	// "RegUnLoadKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegUnLoadKeyW();
	// "RegUnLoadKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterApplicationRecoveryCallback();
	// "RegisterApplicationRecoveryCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterApplicationRestart();
	// "RegisterApplicationRestart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterBadMemoryNotification();
	// "RegisterBadMemoryNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterConsoleIME();
	// "RegisterConsoleIME" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterConsoleOS2();
	// "RegisterConsoleOS2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterConsoleVDM();
	// "RegisterConsoleVDM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWaitForInputIdle();
	// "RegisterWaitForInputIdle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWaitForSingleObject();
	// "RegisterWaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWaitForSingleObjectEx();
	// "RegisterWaitForSingleObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWaitUntilOOBECompleted();
	// "RegisterWaitUntilOOBECompleted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWowBaseHandlers();
	// "RegisterWowBaseHandlers" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWowExec();
	// "RegisterWowExec" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseActCtx();
	// "ReleaseActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseActCtxWorker();
	// "ReleaseActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseMutex();
	// "ReleaseMutex" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseMutexWhenCallbackReturns();
	// "ReleaseMutexWhenCallbackReturns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseSRWLockExclusive();
	// "ReleaseSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseSRWLockShared();
	// "ReleaseSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseSemaphore();
	// "ReleaseSemaphore" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReleaseSemaphoreWhenCallbackReturns();
	// "ReleaseSemaphoreWhenCallbackReturns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveDirectoryA();
	// "RemoveDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveDirectoryTransactedA();
	// "RemoveDirectoryTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveDirectoryTransactedW();
	// "RemoveDirectoryTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveDirectoryW();
	// "RemoveDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveDllDirectory();
	// "RemoveDllDirectory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveLocalAlternateComputerNameA();
	// "RemoveLocalAlternateComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveLocalAlternateComputerNameW();
	// "RemoveLocalAlternateComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveSecureMemoryCacheCallback();
	// "RemoveSecureMemoryCacheCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveVectoredContinueHandler();
	// "RemoveVectoredContinueHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveVectoredExceptionHandler();
	// "RemoveVectoredExceptionHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReplaceFile();
	// "ReplaceFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReplaceFileA();
	// "ReplaceFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReplaceFileW();
	// "ReplaceFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReplacePartitionUnit();
	// "ReplacePartitionUnit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RequestDeviceWakeup();
	// "RequestDeviceWakeup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RequestWakeupLatency();
	// "RequestWakeupLatency" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResetEvent();
	// "ResetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResetWriteWatch();
	// "ResetWriteWatch" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResolveDelayLoadedAPI();
	// "ResolveDelayLoadedAPI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResolveDelayLoadsFromDll();
	// "ResolveDelayLoadsFromDll" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResolveLocaleName();
	// "ResolveLocaleName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RestoreLastError();
	// "RestoreLastError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ResumeThread();
	// "ResumeThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlAddFunctionTable();
	// "RtlAddFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCaptureContext();
	// "RtlCaptureContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCaptureStackBackTrace();
	// "RtlCaptureStackBackTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCompareMemory();
	// "RtlCompareMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlCopyMemory();
	// "RtlCopyMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlDeleteFunctionTable();
	// "RtlDeleteFunctionTable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlFillMemory();
	// "RtlFillMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlInstallFunctionTableCallback();
	// "RtlInstallFunctionTableCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlLookupFunctionEntry();
	// "RtlLookupFunctionEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlMoveMemory();
	// "RtlMoveMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlPcToFileHeader();
	// "RtlPcToFileHeader" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRaiseException();
	// "RtlRaiseException" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlRestoreContext();
	// "RtlRestoreContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnwind();
	// "RtlUnwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlUnwindEx();
	// "RtlUnwindEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlVirtualUnwind();
	// "RtlVirtualUnwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RtlZeroMemory();
	// "RtlZeroMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollConsoleScreenBufferA();
	// "ScrollConsoleScreenBufferA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ScrollConsoleScreenBufferW();
	// "ScrollConsoleScreenBufferW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SearchPathA();
	// "SearchPathA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SearchPathW();
	// "SearchPathW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCachedSigningLevel();
	// "SetCachedSigningLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCalendarInfoA();
	// "SetCalendarInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCalendarInfoW();
	// "SetCalendarInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComPlusPackageInstallStatus();
	// "SetComPlusPackageInstallStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCommBreak();
	// "SetCommBreak" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCommConfig();
	// "SetCommConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCommMask();
	// "SetCommMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCommState();
	// "SetCommState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCommTimeouts();
	// "SetCommTimeouts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComputerNameA();
	// "SetComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComputerNameEx2W();
	// "SetComputerNameEx2W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComputerNameExA();
	// "SetComputerNameExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComputerNameExW();
	// "SetComputerNameExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetComputerNameW();
	// "SetComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleActiveScreenBuffer();
	// "SetConsoleActiveScreenBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCP();
	// "SetConsoleCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCtrlHandler();
	// "SetConsoleCtrlHandler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCursor();
	// "SetConsoleCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCursorInfo();
	// "SetConsoleCursorInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCursorMode();
	// "SetConsoleCursorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleCursorPosition();
	// "SetConsoleCursorPosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleDisplayMode();
	// "SetConsoleDisplayMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleFont();
	// "SetConsoleFont" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleHardwareState();
	// "SetConsoleHardwareState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleHistoryInfo();
	// "SetConsoleHistoryInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleIcon();
	// "SetConsoleIcon" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleInputExeNameA();
	// "SetConsoleInputExeNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleInputExeNameW();
	// "SetConsoleInputExeNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleKeyShortcuts();
	// "SetConsoleKeyShortcuts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleLocalEUDC();
	// "SetConsoleLocalEUDC" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleMaximumWindowSize();
	// "SetConsoleMaximumWindowSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleMenuClose();
	// "SetConsoleMenuClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleMode();
	// "SetConsoleMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleNlsMode();
	// "SetConsoleNlsMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleNumberOfCommandsA();
	// "SetConsoleNumberOfCommandsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleNumberOfCommandsW();
	// "SetConsoleNumberOfCommandsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleOS2OemFormat();
	// "SetConsoleOS2OemFormat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleOutputCP();
	// "SetConsoleOutputCP" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsolePalette();
	// "SetConsolePalette" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleScreenBufferInfoEx();
	// "SetConsoleScreenBufferInfoEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleScreenBufferSize();
	// "SetConsoleScreenBufferSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleTextAttribute();
	// "SetConsoleTextAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleTitleA();
	// "SetConsoleTitleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleTitleW();
	// "SetConsoleTitleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetConsoleWindowInfo();
	// "SetConsoleWindowInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCriticalSectionSpinCount();
	// "SetCriticalSectionSpinCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCurrentConsoleFontEx();
	// "SetCurrentConsoleFontEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCurrentDirectoryA();
	// "SetCurrentDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetCurrentDirectoryW();
	// "SetCurrentDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDefaultCommConfigA();
	// "SetDefaultCommConfigA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDefaultCommConfigW();
	// "SetDefaultCommConfigW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDefaultDllDirectories();
	// "SetDefaultDllDirectories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDllDirectoryA();
	// "SetDllDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDllDirectoryW();
	// "SetDllDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetDynamicTimeZoneInformation();
	// "SetDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEndOfFile();
	// "SetEndOfFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEnvironmentStringsA();
	// "SetEnvironmentStringsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEnvironmentStringsW();
	// "SetEnvironmentStringsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEnvironmentVariableA();
	// "SetEnvironmentVariableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEnvironmentVariableW();
	// "SetEnvironmentVariableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetErrorMode();
	// "SetErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEvent();
	// "SetEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEventWhenCallbackReturns();
	// "SetEventWhenCallbackReturns" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileApisToANSI();
	// "SetFileApisToANSI" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileApisToOEM();
	// "SetFileApisToOEM" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileAttributesA();
	// "SetFileAttributesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileAttributesTransactedA();
	// "SetFileAttributesTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileAttributesTransactedW();
	// "SetFileAttributesTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileAttributesW();
	// "SetFileAttributesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileBandwidthReservation();
	// "SetFileBandwidthReservation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileCompletionNotificationModes();
	// "SetFileCompletionNotificationModes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileInformationByHandle();
	// "SetFileInformationByHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileIoOverlappedRange();
	// "SetFileIoOverlappedRange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFilePointer();
	// "SetFilePointer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFilePointerEx();
	// "SetFilePointerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileShortNameA();
	// "SetFileShortNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileShortNameW();
	// "SetFileShortNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileTime();
	// "SetFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileValidData();
	// "SetFileValidData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFirmwareEnvironmentVariableA();
	// "SetFirmwareEnvironmentVariableA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFirmwareEnvironmentVariableExA();
	// "SetFirmwareEnvironmentVariableExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFirmwareEnvironmentVariableExW();
	// "SetFirmwareEnvironmentVariableExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFirmwareEnvironmentVariableW();
	// "SetFirmwareEnvironmentVariableW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetHandleCount();
	// "SetHandleCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetHandleInformation();
	// "SetHandleInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetInformationJobObject();
	// "SetInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetIoRateControlInformationJobObject();
	// "SetIoRateControlInformationJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLastConsoleEventActive();
	// "SetLastConsoleEventActive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLastError();
	// "SetLastError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLocalPrimaryComputerNameA();
	// "SetLocalPrimaryComputerNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLocalPrimaryComputerNameW();
	// "SetLocalPrimaryComputerNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLocalTime();
	// "SetLocalTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLocaleInfoA();
	// "SetLocaleInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetLocaleInfoW();
	// "SetLocaleInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMailslotInfo();
	// "SetMailslotInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetMessageWaitingIndicator();
	// "SetMessageWaitingIndicator" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedPipeAttribute();
	// "SetNamedPipeAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedPipeHandleState();
	// "SetNamedPipeHandleState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPriorityClass();
	// "SetPriorityClass" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessAffinityMask();
	// "SetProcessAffinityMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessAffinityUpdateMode();
	// "SetProcessAffinityUpdateMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDEPPolicy();
	// "SetProcessDEPPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessDefaultCpuSets();
	// "SetProcessDefaultCpuSets" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessInformation();
	// "SetProcessInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessMitigationPolicy();
	// "SetProcessMitigationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessPreferredUILanguages();
	// "SetProcessPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessPriorityBoost();
	// "SetProcessPriorityBoost" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessShutdownParameters();
	// "SetProcessShutdownParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessWorkingSetSize();
	// "SetProcessWorkingSetSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProcessWorkingSetSizeEx();
	// "SetProcessWorkingSetSizeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetProtectedPolicy();
	// "SetProtectedPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSearchPathMode();
	// "SetSearchPathMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetStdHandle();
	// "SetStdHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetStdHandleEx();
	// "SetStdHandleEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemFileCacheSize();
	// "SetSystemFileCacheSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemPowerState();
	// "SetSystemPowerState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemTime();
	// "SetSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSystemTimeAdjustment();
	// "SetSystemTimeAdjustment" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTapeParameters();
	// "SetTapeParameters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTapePosition();
	// "SetTapePosition" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTermsrvAppInstallMode();
	// "SetTermsrvAppInstallMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadAffinityMask();
	// "SetThreadAffinityMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadContext();
	// "SetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadErrorMode();
	// "SetThreadErrorMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadExecutionState();
	// "SetThreadExecutionState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadGroupAffinity();
	// "SetThreadGroupAffinity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadIdealProcessor();
	// "SetThreadIdealProcessor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadIdealProcessorEx();
	// "SetThreadIdealProcessorEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadInformation();
	// "SetThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadLocale();
	// "SetThreadLocale" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadPreferredUILanguages();
	// "SetThreadPreferredUILanguages" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadPriority();
	// "SetThreadPriority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadPriorityBoost();
	// "SetThreadPriorityBoost" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadSelectedCpuSets();
	// "SetThreadSelectedCpuSets" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadStackGuarantee();
	// "SetThreadStackGuarantee" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadToken();
	// "SetThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadUILanguage();
	// "SetThreadUILanguage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolStackInformation();
	// "SetThreadpoolStackInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolThreadMaximum();
	// "SetThreadpoolThreadMaximum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolThreadMinimum();
	// "SetThreadpoolThreadMinimum" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolTimer();
	// "SetThreadpoolTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolTimerEx();
	// "SetThreadpoolTimerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolWait();
	// "SetThreadpoolWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadpoolWaitEx();
	// "SetThreadpoolWaitEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTimeZoneInformation();
	// "SetTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTimerQueueTimer();
	// "SetTimerQueueTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUmsThreadInformation();
	// "SetUmsThreadInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUnhandledExceptionFilter();
	// "SetUnhandledExceptionFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserGeoID();
	// "SetUserGeoID" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVDMCurrentDirectories();
	// "SetVDMCurrentDirectories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVolumeLabelA();
	// "SetVolumeLabelA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVolumeLabelW();
	// "SetVolumeLabelW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVolumeMountPointA();
	// "SetVolumeMountPointA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVolumeMountPointW();
	// "SetVolumeMountPointW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetVolumeMountPointWStub();
	// "SetVolumeMountPointWStub" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWaitableTimer();
	// "SetWaitableTimer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetWaitableTimerEx();
	// "SetWaitableTimerEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetXStateFeaturesMask();
	// "SetXStateFeaturesMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetupComm();
	// "SetupComm" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ShowConsoleCursor();
	// "ShowConsoleCursor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SignalObjectAndWait();
	// "SignalObjectAndWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SizeofResource();
	// "SizeofResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Sleep();
	// "Sleep" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SleepConditionVariableCS();
	// "SleepConditionVariableCS" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SleepConditionVariableSRW();
	// "SleepConditionVariableSRW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SleepEx();
	// "SleepEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SortCloseHandle();
	// "SortCloseHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SortGetHandle();
	// "SortGetHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartThreadpoolIo();
	// "StartThreadpoolIo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SubmitThreadpoolWork();
	// "SubmitThreadpoolWork" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SuspendThread();
	// "SuspendThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwitchToFiber();
	// "SwitchToFiber" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SwitchToThread();
	// "SwitchToThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemTimeToFileTime();
	// "SystemTimeToFileTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemTimeToTzSpecificLocalTime();
	// "SystemTimeToTzSpecificLocalTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemTimeToTzSpecificLocalTimeEx();
	// "SystemTimeToTzSpecificLocalTimeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TerminateJobObject();
	// "TerminateJobObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TerminateProcess();
	// "TerminateProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TerminateThread();
	// "TerminateThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvAppInstallMode();
	// "TermsrvAppInstallMode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvConvertSysRootToUserDir();
	// "TermsrvConvertSysRootToUserDir" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvCreateRegEntry();
	// "TermsrvCreateRegEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvDeleteKey();
	// "TermsrvDeleteKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvDeleteValue();
	// "TermsrvDeleteValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvGetPreSetValue();
	// "TermsrvGetPreSetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvGetWindowsDirectoryA();
	// "TermsrvGetWindowsDirectoryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvGetWindowsDirectoryW();
	// "TermsrvGetWindowsDirectoryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvOpenRegEntry();
	// "TermsrvOpenRegEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvOpenUserClasses();
	// "TermsrvOpenUserClasses" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvRestoreKey();
	// "TermsrvRestoreKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvSetKeySecurity();
	// "TermsrvSetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvSetValueKey();
	// "TermsrvSetValueKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TermsrvSyncUserIniFileExt();
	// "TermsrvSyncUserIniFileExt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Thread32First();
	// "Thread32First" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Thread32Next();
	// "Thread32Next" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TlsAlloc();
	// "TlsAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TlsFree();
	// "TlsFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TlsGetValue();
	// "TlsGetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TlsSetValue();
	// "TlsSetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Toolhelp32ReadProcessMemory();
	// "Toolhelp32ReadProcessMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TransactNamedPipe();
	// "TransactNamedPipe" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TransmitCommChar();
	// "TransmitCommChar" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TryAcquireSRWLockExclusive();
	// "TryAcquireSRWLockExclusive" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TryAcquireSRWLockShared();
	// "TryAcquireSRWLockShared" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TryEnterCriticalSection();
	// "TryEnterCriticalSection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrySubmitThreadpoolCallback();
	// "TrySubmitThreadpoolCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TzSpecificLocalTimeToSystemTime();
	// "TzSpecificLocalTimeToSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TzSpecificLocalTimeToSystemTimeEx();
	// "TzSpecificLocalTimeToSystemTimeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UTRegister();
	// "UTRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UTUnRegister();
	// "UTUnRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UmsThreadYield();
	// "UmsThreadYield" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnhandledExceptionFilter();
	// "UnhandledExceptionFilter" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnlockFile();
	// "UnlockFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnlockFileEx();
	// "UnlockFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnmapViewOfFile();
	// "UnmapViewOfFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnmapViewOfFileEx();
	// "UnmapViewOfFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterApplicationRecoveryCallback();
	// "UnregisterApplicationRecoveryCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterApplicationRestart();
	// "UnregisterApplicationRestart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterBadMemoryNotification();
	// "UnregisterBadMemoryNotification" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterConsoleIME();
	// "UnregisterConsoleIME" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterWait();
	// "UnregisterWait" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterWaitEx();
	// "UnregisterWaitEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterWaitUntilOOBECompleted();
	// "UnregisterWaitUntilOOBECompleted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateCalendarDayOfWeek();
	// "UpdateCalendarDayOfWeek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateProcThreadAttribute();
	// "UpdateProcThreadAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateResourceA();
	// "UpdateResourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateResourceW();
	// "UpdateResourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VDMConsoleOperation();
	// "VDMConsoleOperation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VDMOperationStarted();
	// "VDMOperationStarted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerLanguageNameA();
	// "VerLanguageNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerLanguageNameW();
	// "VerLanguageNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerSetConditionMask();
	// "VerSetConditionMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerifyConsoleIoHandle();
	// "VerifyConsoleIoHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerifyScripts();
	// "VerifyScripts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerifyVersionInfoA();
	// "VerifyVersionInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VerifyVersionInfoW();
	// "VerifyVersionInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualAlloc();
	// "VirtualAlloc" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualAllocEx();
	// "VirtualAllocEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualAllocExNuma();
	// "VirtualAllocExNuma" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualFree();
	// "VirtualFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualFreeEx();
	// "VirtualFreeEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualLock();
	// "VirtualLock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualProtect();
	// "VirtualProtect" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualProtectEx();
	// "VirtualProtectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualQuery();
	// "VirtualQuery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualQueryEx();
	// "VirtualQueryEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall VirtualUnlock();
	// "VirtualUnlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WTSGetActiveConsoleSessionId();
	// "WTSGetActiveConsoleSessionId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitCommEvent();
	// "WaitCommEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForDebugEvent();
	// "WaitForDebugEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForDebugEventEx();
	// "WaitForDebugEventEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForMultipleObjects();
	// "WaitForMultipleObjects" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForMultipleObjectsEx();
	// "WaitForMultipleObjectsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForSingleObject();
	// "WaitForSingleObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForSingleObjectEx();
	// "WaitForSingleObjectEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForThreadpoolIoCallbacks();
	// "WaitForThreadpoolIoCallbacks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForThreadpoolTimerCallbacks();
	// "WaitForThreadpoolTimerCallbacks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForThreadpoolWaitCallbacks();
	// "WaitForThreadpoolWaitCallbacks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitForThreadpoolWorkCallbacks();
	// "WaitForThreadpoolWorkCallbacks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitNamedPipeA();
	// "WaitNamedPipeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitNamedPipeW();
	// "WaitNamedPipeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WakeAllConditionVariable();
	// "WakeAllConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WakeConditionVariable();
	// "WakeConditionVariable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerGetFlags();
	// "WerGetFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerGetFlagsWorker();
	// "WerGetFlagsWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterFile();
	// "WerRegisterFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterFileWorker();
	// "WerRegisterFileWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterMemoryBlock();
	// "WerRegisterMemoryBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterMemoryBlockWorker();
	// "WerRegisterMemoryBlockWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterRuntimeExceptionModule();
	// "WerRegisterRuntimeExceptionModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerRegisterRuntimeExceptionModuleWorker();
	// "WerRegisterRuntimeExceptionModuleWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerSetFlags();
	// "WerSetFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerSetFlagsWorker();
	// "WerSetFlagsWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterFile();
	// "WerUnregisterFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterFileWorker();
	// "WerUnregisterFileWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterMemoryBlock();
	// "WerUnregisterMemoryBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterMemoryBlockWorker();
	// "WerUnregisterMemoryBlockWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterRuntimeExceptionModule();
	// "WerUnregisterRuntimeExceptionModule" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerUnregisterRuntimeExceptionModuleWorker();
	// "WerUnregisterRuntimeExceptionModuleWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpCleanupMessageMapping();
	// "WerpCleanupMessageMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpGetDebugger();
	// "WerpGetDebugger" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpInitiateRemoteRecovery();
	// "WerpInitiateRemoteRecovery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpLaunchAeDebug();
	// "WerpLaunchAeDebug" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpNotifyLoadStringResource();
	// "WerpNotifyLoadStringResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpNotifyLoadStringResourceEx();
	// "WerpNotifyLoadStringResourceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpNotifyLoadStringResourceWorker();
	// "WerpNotifyLoadStringResourceWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpNotifyUseStringResource();
	// "WerpNotifyUseStringResource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpNotifyUseStringResourceWorker();
	// "WerpNotifyUseStringResourceWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WerpStringLookup();
	// "WerpStringLookup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WideCharToMultiByte();
	// "WideCharToMultiByte" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WinExec();
	// "WinExec" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64DisableWow64FsRedirection();
	// "Wow64DisableWow64FsRedirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64EnableWow64FsRedirection();
	// "Wow64EnableWow64FsRedirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64GetThreadContext();
	// "Wow64GetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64GetThreadSelectorEntry();
	// "Wow64GetThreadSelectorEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64RevertWow64FsRedirection();
	// "Wow64RevertWow64FsRedirection" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64SetThreadContext();
	// "Wow64SetThreadContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall Wow64SuspendThread();
	// "Wow64SuspendThread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleA();
	// "WriteConsoleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleInputA();
	// "WriteConsoleInputA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleInputVDMA();
	// "WriteConsoleInputVDMA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleInputVDMW();
	// "WriteConsoleInputVDMW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleInputW();
	// "WriteConsoleInputW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleOutputA();
	// "WriteConsoleOutputA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleOutputAttribute();
	// "WriteConsoleOutputAttribute" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleOutputCharacterA();
	// "WriteConsoleOutputCharacterA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleOutputCharacterW();
	// "WriteConsoleOutputCharacterW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleOutputW();
	// "WriteConsoleOutputW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteConsoleW();
	// "WriteConsoleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteFile();
	// "WriteFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteFileEx();
	// "WriteFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteFileGather();
	// "WriteFileGather" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileSectionA();
	// "WritePrivateProfileSectionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileSectionW();
	// "WritePrivateProfileSectionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileStringA();
	// "WritePrivateProfileStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileStringW();
	// "WritePrivateProfileStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileStructA();
	// "WritePrivateProfileStructA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WritePrivateProfileStructW();
	// "WritePrivateProfileStructW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteProcessMemory();
	// "WriteProcessMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteProfileSectionA();
	// "WriteProfileSectionA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteProfileSectionW();
	// "WriteProfileSectionW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteProfileStringA();
	// "WriteProfileStringA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteProfileStringW();
	// "WriteProfileStringW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteTapemark();
	// "WriteTapemark" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZombifyActCtx();
	// "ZombifyActCtx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ZombifyActCtxWorker();
	// "ZombifyActCtxWorker" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __C_specific_handler();
	// "__C_specific_handler" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __chkstk();
	// "__chkstk" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall __misaligned_access();
	// "__misaligned_access" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _hread();
	// "_hread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _hwrite();
	// "_hwrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lclose();
	// "_lclose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lcreat();
	// "_lcreat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _llseek();
	// "_llseek" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _local_unwind();
	// "_local_unwind" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lopen();
	// "_lopen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lread();
	// "_lread" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall _lwrite();
	// "_lwrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcat();
	// "lstrcat" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcatA();
	// "lstrcatA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcatW();
	// "lstrcatW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmp();
	// "lstrcmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmpA();
	// "lstrcmpA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmpW();
	// "lstrcmpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmpi();
	// "lstrcmpi" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmpiA();
	// "lstrcmpiA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcmpiW();
	// "lstrcmpiW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpy();
	// "lstrcpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpyA();
	// "lstrcpyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpyW();
	// "lstrcpyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpyn();
	// "lstrcpyn" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpynA();
	// "lstrcpynA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrcpynW();
	// "lstrcpynW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrlen();
	// "lstrlen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrlenA();
	// "lstrlenA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall lstrlenW();
	// "lstrlenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall timeBeginPeriod();
	// "timeBeginPeriod" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall timeEndPeriod();
	// "timeEndPeriod" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall timeGetDevCaps();
	// "timeGetDevCaps" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall timeGetSystemTime();
	// "timeGetSystemTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall timeGetTime();
	// "timeGetTime" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_lstrcmpW();
	// "uaw_lstrcmpW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_lstrcmpiW();
	// "uaw_lstrcmpiW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_lstrlenW();
	// "uaw_lstrlenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_wcschr();
	// "uaw_wcschr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_wcscpy();
	// "uaw_wcscpy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_wcsicmp();
	// "uaw_wcsicmp" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_wcslen();
	// "uaw_wcslen" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall uaw_wcsrchr();
	// "uaw_wcsrchr" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = kernel32;

// test out char*
function test_GetComputerNameA()
{
	var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
	kernel32.GetComputerNameA( ref.NULL , lpnSize );
		
	var nSize = lpnSize.deref();

	var lpBuffer = new Buffer( nSize * 1 );

	kernel32.GetComputerNameA( lpBuffer , lpnSize );

	var strName = lpBuffer.toString();
		
	printf( strName );
}

// test out wchar*
function test_GetComputerNameW()
{
	var lpnSize = ref.alloc( wtypes.DWORD , 0 );
		
	kernel32.GetComputerNameW( ref.NULL , lpnSize );
		
	var nSize = lpnSize.deref();

	var lpBuffer = new Buffer( nSize * 2 );

	kernel32.GetComputerNameW( lpBuffer , lpnSize );

	var strName = iconv.decode( lpBuffer , 'ucs2' );
		
	printf( strName );
}
		
