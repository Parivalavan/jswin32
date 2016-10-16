// javascript ffi interface for kernel32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var kernel32 = ffi.Library( 'kernel32.dll' , {} );

// int __stdcall AcquireSRWLockExclusive();
// kernel32.AcquireSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AcquireSRWLockShared();
// kernel32.AcquireSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ActivateActCtx();
// kernel32.ActivateActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ActivateActCtxWorker();
// kernel32.ActivateActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAtomA();
// kernel32.AddAtomA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAtomW();
// kernel32.AddAtomW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddConsoleAliasA();
// kernel32.AddConsoleAliasA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddConsoleAliasW();
// kernel32.AddConsoleAliasW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddDllDirectory();
// kernel32.AddDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddIntegrityLabelToBoundaryDescriptor();
// kernel32.AddIntegrityLabelToBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddLocalAlternateComputerNameA();
// kernel32.AddLocalAlternateComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddLocalAlternateComputerNameW();
// kernel32.AddLocalAlternateComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddRefActCtx();
// kernel32.AddRefActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddRefActCtxWorker();
// kernel32.AddRefActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddResourceAttributeAce();
// kernel32.AddResourceAttributeAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddSIDToBoundaryDescriptor();
// kernel32.AddSIDToBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddScopedPolicyIDAce();
// kernel32.AddScopedPolicyIDAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddSecureMemoryCacheCallback();
// kernel32.AddSecureMemoryCacheCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddVectoredContinueHandler();
// kernel32.AddVectoredContinueHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddVectoredExceptionHandler();
// kernel32.AddVectoredExceptionHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustCalendarDate();
// kernel32.AdjustCalendarDate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllocConsole();
// kernel32.AllocConsole = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllocateUserPhysicalPages();
// kernel32.AllocateUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllocateUserPhysicalPagesNuma();
// kernel32.AllocateUserPhysicalPagesNuma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetClrCompat();
// kernel32.AppPolicyGetClrCompat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetCreateFileAccess();
// kernel32.AppPolicyGetCreateFileAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetLifecycleManagement();
// kernel32.AppPolicyGetLifecycleManagement = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetMediaFoundationCodecLoading();
// kernel32.AppPolicyGetMediaFoundationCodecLoading = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetProcessTerminationMethod();
// kernel32.AppPolicyGetProcessTerminationMethod = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetShowDeveloperDiagnostic();
// kernel32.AppPolicyGetShowDeveloperDiagnostic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetThreadInitializationType();
// kernel32.AppPolicyGetThreadInitializationType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppPolicyGetWindowingModel();
// kernel32.AppPolicyGetWindowingModel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AppXGetOSMaxVersionTested();
// kernel32.AppXGetOSMaxVersionTested = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ApplicationRecoveryFinished();
// kernel32.ApplicationRecoveryFinished = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ApplicationRecoveryInProgress();
// kernel32.ApplicationRecoveryInProgress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AreFileApisANSI();
// kernel32.AreFileApisANSI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AssignProcessToJobObject();
// kernel32.AssignProcessToJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AttachConsole();
// kernel32.AttachConsole = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BackupRead();
// kernel32.BackupRead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BackupSeek();
// kernel32.BackupSeek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BackupWrite();
// kernel32.BackupWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCheckAppcompatCache();
// kernel32.BaseCheckAppcompatCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCheckAppcompatCacheEx();
// kernel32.BaseCheckAppcompatCacheEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCheckAppcompatCacheExWorker();
// kernel32.BaseCheckAppcompatCacheExWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCheckAppcompatCacheWorker();
// kernel32.BaseCheckAppcompatCacheWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCheckElevation();
// kernel32.BaseCheckElevation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCleanupAppcompatCacheSupport();
// kernel32.BaseCleanupAppcompatCacheSupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseCleanupAppcompatCacheSupportWorker();
// kernel32.BaseCleanupAppcompatCacheSupportWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseDestroyVDMEnvironment();
// kernel32.BaseDestroyVDMEnvironment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseDllReadWriteIniFile();
// kernel32.BaseDllReadWriteIniFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseDumpAppcompatCache();
// kernel32.BaseDumpAppcompatCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseDumpAppcompatCacheWorker();
// kernel32.BaseDumpAppcompatCacheWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseElevationPostProcessing();
// kernel32.BaseElevationPostProcessing = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseFlushAppcompatCache();
// kernel32.BaseFlushAppcompatCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseFlushAppcompatCacheWorker();
// kernel32.BaseFlushAppcompatCacheWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseFormatObjectAttributes();
// kernel32.BaseFormatObjectAttributes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseFormatTimeOut();
// kernel32.BaseFormatTimeOut = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseFreeAppCompatDataForProcessWorker();
// kernel32.BaseFreeAppCompatDataForProcessWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseGenerateAppCompatData();
// kernel32.BaseGenerateAppCompatData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseGetNamedObjectDirectory();
// kernel32.BaseGetNamedObjectDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseInitAppcompatCacheSupport();
// kernel32.BaseInitAppcompatCacheSupport = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseInitAppcompatCacheSupportWorker();
// kernel32.BaseInitAppcompatCacheSupportWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseIsAppcompatInfrastructureDisabled();
// kernel32.BaseIsAppcompatInfrastructureDisabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseIsAppcompatInfrastructureDisabledWorker();
// kernel32.BaseIsAppcompatInfrastructureDisabledWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseIsDosApplication();
// kernel32.BaseIsDosApplication = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseQueryModuleData();
// kernel32.BaseQueryModuleData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseReadAppCompatDataForProcessWorker();
// kernel32.BaseReadAppCompatDataForProcessWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseSetLastNTError();
// kernel32.BaseSetLastNTError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseThreadInitThunk();
// kernel32.BaseThreadInitThunk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseUpdateAppcompatCache();
// kernel32.BaseUpdateAppcompatCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseUpdateAppcompatCacheWorker();
// kernel32.BaseUpdateAppcompatCacheWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseUpdateVDMEntry();
// kernel32.BaseUpdateVDMEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseVerifyUnicodeString();
// kernel32.BaseVerifyUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseWriteErrorElevationRequiredEvent();
// kernel32.BaseWriteErrorElevationRequiredEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Basep8BitStringToDynamicUnicodeString();
// kernel32.Basep8BitStringToDynamicUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepAllocateActivationContextActivationBlock();
// kernel32.BasepAllocateActivationContextActivationBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepAnsiStringToDynamicUnicodeString();
// kernel32.BasepAnsiStringToDynamicUnicodeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepAppContainerEnvironmentExtension();
// kernel32.BasepAppContainerEnvironmentExtension = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepAppXExtension();
// kernel32.BasepAppXExtension = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepCheckAppCompat();
// kernel32.BasepCheckAppCompat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepCheckWebBladeHashes();
// kernel32.BasepCheckWebBladeHashes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepCheckWinSaferRestrictions();
// kernel32.BasepCheckWinSaferRestrictions = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepConstructSxsCreateProcessMessage();
// kernel32.BasepConstructSxsCreateProcessMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepCopyEncryption();
// kernel32.BasepCopyEncryption = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepFreeActivationContextActivationBlock();
// kernel32.BasepFreeActivationContextActivationBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepFreeAppCompatData();
// kernel32.BasepFreeAppCompatData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepGetAppCompatData();
// kernel32.BasepGetAppCompatData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepGetComputerNameFromNtPath();
// kernel32.BasepGetComputerNameFromNtPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepGetExeArchType();
// kernel32.BasepGetExeArchType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepIsProcessAllowed();
// kernel32.BasepIsProcessAllowed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepMapModuleHandle();
// kernel32.BasepMapModuleHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepNotifyLoadStringResource();
// kernel32.BasepNotifyLoadStringResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepPostSuccessAppXExtension();
// kernel32.BasepPostSuccessAppXExtension = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepProcessInvalidImage();
// kernel32.BasepProcessInvalidImage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepQueryAppCompat();
// kernel32.BasepQueryAppCompat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepReleaseAppXContext();
// kernel32.BasepReleaseAppXContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepReleaseSxsCreateProcessUtilityStruct();
// kernel32.BasepReleaseSxsCreateProcessUtilityStruct = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepReportFault();
// kernel32.BasepReportFault = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BasepSetFileEncryptionCompression();
// kernel32.BasepSetFileEncryptionCompression = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Beep();
// kernel32.Beep = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginUpdateResourceA();
// kernel32.BeginUpdateResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BeginUpdateResourceW();
// kernel32.BeginUpdateResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BindIoCompletionCallback();
// kernel32.BindIoCompletionCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildCommDCBA();
// kernel32.BuildCommDCBA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildCommDCBAndTimeoutsA();
// kernel32.BuildCommDCBAndTimeoutsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildCommDCBAndTimeoutsW();
// kernel32.BuildCommDCBAndTimeoutsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildCommDCBW();
// kernel32.BuildCommDCBW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallNamedPipeA();
// kernel32.CallNamedPipeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallNamedPipeW();
// kernel32.CallNamedPipeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CallbackMayRunLong();
// kernel32.CallbackMayRunLong = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelDeviceWakeupRequest();
// kernel32.CancelDeviceWakeupRequest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelIo();
// kernel32.CancelIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelIoEx();
// kernel32.CancelIoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelSynchronousIo();
// kernel32.CancelSynchronousIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelThreadpoolIo();
// kernel32.CancelThreadpoolIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelTimerQueueTimer();
// kernel32.CancelTimerQueueTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelWaitableTimer();
// kernel32.CancelWaitableTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CeipIsOptedIn();
// kernel32.CeipIsOptedIn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeTimerQueueTimer();
// kernel32.ChangeTimerQueueTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckAllowDecryptedRemoteDestinationPolicy();
// kernel32.CheckAllowDecryptedRemoteDestinationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckElevation();
// kernel32.CheckElevation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckElevationEnabled();
// kernel32.CheckElevationEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckForReadOnlyResource();
// kernel32.CheckForReadOnlyResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckForReadOnlyResourceFilter();
// kernel32.CheckForReadOnlyResourceFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckNameLegalDOS8Dot3A();
// kernel32.CheckNameLegalDOS8Dot3A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckNameLegalDOS8Dot3W();
// kernel32.CheckNameLegalDOS8Dot3W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckRemoteDebuggerPresent();
// kernel32.CheckRemoteDebuggerPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckTokenCapability();
// kernel32.CheckTokenCapability = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckTokenMembershipEx();
// kernel32.CheckTokenMembershipEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearCommBreak();
// kernel32.ClearCommBreak = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearCommError();
// kernel32.ClearCommError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseConsoleHandle();
// kernel32.CloseConsoleHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseHandle();
// kernel32.CloseHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClosePackageInfo();
// kernel32.ClosePackageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClosePrivateNamespace();
// kernel32.ClosePrivateNamespace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseProfileUserMapping();
// kernel32.CloseProfileUserMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseState();
// kernel32.CloseState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpool();
// kernel32.CloseThreadpool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolCleanupGroup();
// kernel32.CloseThreadpoolCleanupGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolCleanupGroupMembers();
// kernel32.CloseThreadpoolCleanupGroupMembers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolIo();
// kernel32.CloseThreadpoolIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolTimer();
// kernel32.CloseThreadpoolTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolWait();
// kernel32.CloseThreadpoolWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadpoolWork();
// kernel32.CloseThreadpoolWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CmdBatNotification();
// kernel32.CmdBatNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CommConfigDialogA();
// kernel32.CommConfigDialogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CommConfigDialogW();
// kernel32.CommConfigDialogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareCalendarDates();
// kernel32.CompareCalendarDates = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareFileTime();
// kernel32.CompareFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareStringA();
// kernel32.CompareStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareStringEx();
// kernel32.CompareStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareStringOrdinal();
// kernel32.CompareStringOrdinal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CompareStringW();
// kernel32.CompareStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConnectNamedPipe();
// kernel32.ConnectNamedPipe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConsoleMenuControl();
// kernel32.ConsoleMenuControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ContinueDebugEvent();
// kernel32.ContinueDebugEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertCalDateTimeToSystemTime();
// kernel32.ConvertCalDateTimeToSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertDefaultLocale();
// kernel32.ConvertDefaultLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertFiberToThread();
// kernel32.ConvertFiberToThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertNLSDayOfWeekToWin32DayOfWeek();
// kernel32.ConvertNLSDayOfWeekToWin32DayOfWeek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSystemTimeToCalDateTime();
// kernel32.ConvertSystemTimeToCalDateTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertThreadToFiber();
// kernel32.ConvertThreadToFiber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertThreadToFiberEx();
// kernel32.ConvertThreadToFiberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyContext();
// kernel32.CopyContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFile2();
// kernel32.CopyFile2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileA();
// kernel32.CopyFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileExA();
// kernel32.CopyFileExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileExW();
// kernel32.CopyFileExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileTransactedA();
// kernel32.CopyFileTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileTransactedW();
// kernel32.CopyFileTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyFileW();
// kernel32.CopyFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopyLZFile();
// kernel32.CopyLZFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateActCtxA();
// kernel32.CreateActCtxA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateActCtxW();
// kernel32.CreateActCtxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateActCtxWWorker();
// kernel32.CreateActCtxWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBoundaryDescriptorA();
// kernel32.CreateBoundaryDescriptorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateBoundaryDescriptorW();
// kernel32.CreateBoundaryDescriptorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateConsoleScreenBuffer();
// kernel32.CreateConsoleScreenBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryA();
// kernel32.CreateDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryExA();
// kernel32.CreateDirectoryExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryExW();
// kernel32.CreateDirectoryExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryTransactedA();
// kernel32.CreateDirectoryTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryTransactedW();
// kernel32.CreateDirectoryTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateDirectoryW();
// kernel32.CreateDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEnclave();
// kernel32.CreateEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEventA();
// kernel32.CreateEventA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEventExA();
// kernel32.CreateEventExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEventExW();
// kernel32.CreateEventExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateEventW();
// kernel32.CreateEventW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFiber();
// kernel32.CreateFiber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFiberEx();
// kernel32.CreateFiberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFile2();
// kernel32.CreateFile2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileA();
// kernel32.CreateFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileMappingA();
// kernel32.CreateFileMappingA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileMappingFromApp();
// kernel32.CreateFileMappingFromApp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileMappingNumaA();
// kernel32.CreateFileMappingNumaA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileMappingNumaW();
// kernel32.CreateFileMappingNumaW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileMappingW();
// kernel32.CreateFileMappingW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileTransactedA();
// kernel32.CreateFileTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileTransactedW();
// kernel32.CreateFileTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateFileW();
// kernel32.CreateFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHardLinkA();
// kernel32.CreateHardLinkA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHardLinkTransactedA();
// kernel32.CreateHardLinkTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHardLinkTransactedW();
// kernel32.CreateHardLinkTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateHardLinkW();
// kernel32.CreateHardLinkW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateIoCompletionPort();
// kernel32.CreateIoCompletionPort = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateJobObjectA();
// kernel32.CreateJobObjectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateJobObjectW();
// kernel32.CreateJobObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateJobSet();
// kernel32.CreateJobSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMailslotA();
// kernel32.CreateMailslotA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMailslotW();
// kernel32.CreateMailslotW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMemoryResourceNotification();
// kernel32.CreateMemoryResourceNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMutexA();
// kernel32.CreateMutexA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMutexExA();
// kernel32.CreateMutexExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMutexExW();
// kernel32.CreateMutexExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateMutexW();
// kernel32.CreateMutexW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateNamedPipeA();
// kernel32.CreateNamedPipeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateNamedPipeW();
// kernel32.CreateNamedPipeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePipe();
// kernel32.CreatePipe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePrivateNamespaceA();
// kernel32.CreatePrivateNamespaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePrivateNamespaceW();
// kernel32.CreatePrivateNamespaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessA();
// kernel32.CreateProcessA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessAsUserA();
// kernel32.CreateProcessAsUserA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessAsUserW();
// kernel32.CreateProcessAsUserW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessInternalA();
// kernel32.CreateProcessInternalA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessInternalW();
// kernel32.CreateProcessInternalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessW();
// kernel32.CreateProcessW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRemoteThread();
// kernel32.CreateRemoteThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRemoteThreadEx();
// kernel32.CreateRemoteThreadEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSemaphoreA();
// kernel32.CreateSemaphoreA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSemaphoreExA();
// kernel32.CreateSemaphoreExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSemaphoreExW();
// kernel32.CreateSemaphoreExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSemaphoreW();
// kernel32.CreateSemaphoreW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSymbolicLinkA();
// kernel32.CreateSymbolicLinkA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSymbolicLinkTransactedA();
// kernel32.CreateSymbolicLinkTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSymbolicLinkTransactedW();
// kernel32.CreateSymbolicLinkTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateSymbolicLinkW();
// kernel32.CreateSymbolicLinkW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateTapePartition();
// kernel32.CreateTapePartition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThread();
// kernel32.CreateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpool();
// kernel32.CreateThreadpool = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpoolCleanupGroup();
// kernel32.CreateThreadpoolCleanupGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpoolIo();
// kernel32.CreateThreadpoolIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpoolTimer();
// kernel32.CreateThreadpoolTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpoolWait();
// kernel32.CreateThreadpoolWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateThreadpoolWork();
// kernel32.CreateThreadpoolWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateTimerQueue();
// kernel32.CreateTimerQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateTimerQueueTimer();
// kernel32.CreateTimerQueueTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateToolhelp32Snapshot();
// kernel32.CreateToolhelp32Snapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateUmsCompletionList();
// kernel32.CreateUmsCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateUmsThreadContext();
// kernel32.CreateUmsThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWaitableTimerA();
// kernel32.CreateWaitableTimerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWaitableTimerExA();
// kernel32.CreateWaitableTimerExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWaitableTimerExW();
// kernel32.CreateWaitableTimerExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWaitableTimerW();
// kernel32.CreateWaitableTimerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CtrlRoutine();
// kernel32.CtrlRoutine = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeactivateActCtx();
// kernel32.DeactivateActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeactivateActCtxWorker();
// kernel32.DeactivateActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DebugActiveProcess();
// kernel32.DebugActiveProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DebugActiveProcessStop();
// kernel32.DebugActiveProcessStop = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DebugBreak();
// kernel32.DebugBreak = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DebugBreakProcess();
// kernel32.DebugBreakProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DebugSetProcessKillOnExit();
// kernel32.DebugSetProcessKillOnExit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DecodePointer();
// kernel32.DecodePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DecodeSystemPointer();
// kernel32.DecodeSystemPointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefineDosDeviceA();
// kernel32.DefineDosDeviceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DefineDosDeviceW();
// kernel32.DefineDosDeviceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DelayLoadFailureHook();
// kernel32.DelayLoadFailureHook = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteAtom();
// kernel32.DeleteAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteBoundaryDescriptor();
// kernel32.DeleteBoundaryDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteCriticalSection();
// kernel32.DeleteCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteFiber();
// kernel32.DeleteFiber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteFileA();
// kernel32.DeleteFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteFileTransactedA();
// kernel32.DeleteFileTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteFileTransactedW();
// kernel32.DeleteFileTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteFileW();
// kernel32.DeleteFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteProcThreadAttributeList();
// kernel32.DeleteProcThreadAttributeList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteSynchronizationBarrier();
// kernel32.DeleteSynchronizationBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteTimerQueue();
// kernel32.DeleteTimerQueue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteTimerQueueEx();
// kernel32.DeleteTimerQueueEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteTimerQueueTimer();
// kernel32.DeleteTimerQueueTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteUmsCompletionList();
// kernel32.DeleteUmsCompletionList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteUmsThreadContext();
// kernel32.DeleteUmsThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteVolumeMountPointA();
// kernel32.DeleteVolumeMountPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteVolumeMountPointW();
// kernel32.DeleteVolumeMountPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DequeueUmsCompletionListItems();
// kernel32.DequeueUmsCompletionListItems = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeviceIoControl();
// kernel32.DeviceIoControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisableThreadLibraryCalls();
// kernel32.DisableThreadLibraryCalls = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisableThreadProfiling();
// kernel32.DisableThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisassociateCurrentThreadFromCallback();
// kernel32.DisassociateCurrentThreadFromCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DiscardVirtualMemory();
// kernel32.DiscardVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DisconnectNamedPipe();
// kernel32.DisconnectNamedPipe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DnsHostnameToComputerNameA();
// kernel32.DnsHostnameToComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DnsHostnameToComputerNameExW();
// kernel32.DnsHostnameToComputerNameExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DnsHostnameToComputerNameW();
// kernel32.DnsHostnameToComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DosDateTimeToFileTime();
// kernel32.DosDateTimeToFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DosPathToSessionPathA();
// kernel32.DosPathToSessionPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DosPathToSessionPathW();
// kernel32.DosPathToSessionPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateConsoleHandle();
// kernel32.DuplicateConsoleHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateEncryptionInfoFileExt();
// kernel32.DuplicateEncryptionInfoFileExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateHandle();
// kernel32.DuplicateHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableThreadProfiling();
// kernel32.EnableThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncodePointer();
// kernel32.EncodePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncodeSystemPointer();
// kernel32.EncodeSystemPointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndUpdateResourceA();
// kernel32.EndUpdateResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EndUpdateResourceW();
// kernel32.EndUpdateResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnterCriticalSection();
// kernel32.EnterCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnterSynchronizationBarrier();
// kernel32.EnterSynchronizationBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnterUmsSchedulingMode();
// kernel32.EnterUmsSchedulingMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumCalendarInfoA();
// kernel32.EnumCalendarInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumCalendarInfoExA();
// kernel32.EnumCalendarInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumCalendarInfoExEx();
// kernel32.EnumCalendarInfoExEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumCalendarInfoExW();
// kernel32.EnumCalendarInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumCalendarInfoW();
// kernel32.EnumCalendarInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDateFormatsA();
// kernel32.EnumDateFormatsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDateFormatsExA();
// kernel32.EnumDateFormatsExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDateFormatsExEx();
// kernel32.EnumDateFormatsExEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDateFormatsExW();
// kernel32.EnumDateFormatsExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDateFormatsW();
// kernel32.EnumDateFormatsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumLanguageGroupLocalesA();
// kernel32.EnumLanguageGroupLocalesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumLanguageGroupLocalesW();
// kernel32.EnumLanguageGroupLocalesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceLanguagesA();
// kernel32.EnumResourceLanguagesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceLanguagesExA();
// kernel32.EnumResourceLanguagesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceLanguagesExW();
// kernel32.EnumResourceLanguagesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceLanguagesW();
// kernel32.EnumResourceLanguagesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceNamesA();
// kernel32.EnumResourceNamesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceNamesExA();
// kernel32.EnumResourceNamesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceNamesExW();
// kernel32.EnumResourceNamesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceNamesW();
// kernel32.EnumResourceNamesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceTypesA();
// kernel32.EnumResourceTypesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceTypesExA();
// kernel32.EnumResourceTypesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceTypesExW();
// kernel32.EnumResourceTypesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumResourceTypesW();
// kernel32.EnumResourceTypesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemCodePagesA();
// kernel32.EnumSystemCodePagesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemCodePagesW();
// kernel32.EnumSystemCodePagesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemFirmwareTables();
// kernel32.EnumSystemFirmwareTables = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemGeoID();
// kernel32.EnumSystemGeoID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemLanguageGroupsA();
// kernel32.EnumSystemLanguageGroupsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemLanguageGroupsW();
// kernel32.EnumSystemLanguageGroupsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemLocalesA();
// kernel32.EnumSystemLocalesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemLocalesEx();
// kernel32.EnumSystemLocalesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumSystemLocalesW();
// kernel32.EnumSystemLocalesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumTimeFormatsA();
// kernel32.EnumTimeFormatsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumTimeFormatsEx();
// kernel32.EnumTimeFormatsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumTimeFormatsW();
// kernel32.EnumTimeFormatsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumUILanguagesA();
// kernel32.EnumUILanguagesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumUILanguagesW();
// kernel32.EnumUILanguagesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLocalComputerNamesA();
// kernel32.EnumerateLocalComputerNamesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateLocalComputerNamesW();
// kernel32.EnumerateLocalComputerNamesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EraseTape();
// kernel32.EraseTape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EscapeCommFunction();
// kernel32.EscapeCommFunction = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExecuteUmsThread();
// kernel32.ExecuteUmsThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExitProcess();
// kernel32.ExitProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExitThread();
// kernel32.ExitThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExitVDM();
// kernel32.ExitVDM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpandEnvironmentStringsA();
// kernel32.ExpandEnvironmentStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpandEnvironmentStringsW();
// kernel32.ExpandEnvironmentStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpungeConsoleCommandHistoryA();
// kernel32.ExpungeConsoleCommandHistoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ExpungeConsoleCommandHistoryW();
// kernel32.ExpungeConsoleCommandHistoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FatalAppExitA();
// kernel32.FatalAppExitA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FatalAppExitW();
// kernel32.FatalAppExitW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FatalExit();
// kernel32.FatalExit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FileTimeToDosDateTime();
// kernel32.FileTimeToDosDateTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FileTimeToLocalFileTime();
// kernel32.FileTimeToLocalFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FileTimeToSystemTime();
// kernel32.FileTimeToSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillConsoleOutputAttribute();
// kernel32.FillConsoleOutputAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillConsoleOutputCharacterA();
// kernel32.FillConsoleOutputCharacterA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FillConsoleOutputCharacterW();
// kernel32.FillConsoleOutputCharacterW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindActCtxSectionGuid();
// kernel32.FindActCtxSectionGuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindActCtxSectionGuidWorker();
// kernel32.FindActCtxSectionGuidWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindActCtxSectionStringA();
// kernel32.FindActCtxSectionStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindActCtxSectionStringW();
// kernel32.FindActCtxSectionStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindActCtxSectionStringWWorker();
// kernel32.FindActCtxSectionStringWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindAtomA();
// kernel32.FindAtomA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindAtomW();
// kernel32.FindAtomW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindClose();
// kernel32.FindClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindCloseChangeNotification();
// kernel32.FindCloseChangeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstChangeNotificationA();
// kernel32.FindFirstChangeNotificationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstChangeNotificationW();
// kernel32.FindFirstChangeNotificationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileA();
// kernel32.FindFirstFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileExA();
// kernel32.FindFirstFileExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileExW();
// kernel32.FindFirstFileExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileNameTransactedW();
// kernel32.FindFirstFileNameTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileNameW();
// kernel32.FindFirstFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileTransactedA();
// kernel32.FindFirstFileTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileTransactedW();
// kernel32.FindFirstFileTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFileW();
// kernel32.FindFirstFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstStreamTransactedW();
// kernel32.FindFirstStreamTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstStreamW();
// kernel32.FindFirstStreamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstVolumeA();
// kernel32.FindFirstVolumeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstVolumeMountPointA();
// kernel32.FindFirstVolumeMountPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstVolumeMountPointW();
// kernel32.FindFirstVolumeMountPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstVolumeW();
// kernel32.FindFirstVolumeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNLSString();
// kernel32.FindNLSString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNLSStringEx();
// kernel32.FindNLSStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextChangeNotification();
// kernel32.FindNextChangeNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextFileA();
// kernel32.FindNextFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextFileNameW();
// kernel32.FindNextFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextFileW();
// kernel32.FindNextFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextStreamW();
// kernel32.FindNextStreamW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextVolumeA();
// kernel32.FindNextVolumeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextVolumeMountPointA();
// kernel32.FindNextVolumeMountPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextVolumeMountPointW();
// kernel32.FindNextVolumeMountPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindNextVolumeW();
// kernel32.FindNextVolumeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindPackagesByPackageFamily();
// kernel32.FindPackagesByPackageFamily = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindResourceA();
// kernel32.FindResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindResourceExA();
// kernel32.FindResourceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindResourceExW();
// kernel32.FindResourceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindResourceW();
// kernel32.FindResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindStringOrdinal();
// kernel32.FindStringOrdinal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindVolumeClose();
// kernel32.FindVolumeClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindVolumeMountPointClose();
// kernel32.FindVolumeMountPointClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlsAlloc();
// kernel32.FlsAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlsFree();
// kernel32.FlsFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlsGetValue();
// kernel32.FlsGetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlsSetValue();
// kernel32.FlsSetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushConsoleInputBuffer();
// kernel32.FlushConsoleInputBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushFileBuffers();
// kernel32.FlushFileBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushInstructionCache();
// kernel32.FlushInstructionCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushProcessWriteBuffers();
// kernel32.FlushProcessWriteBuffers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushViewOfFile();
// kernel32.FlushViewOfFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FoldStringA();
// kernel32.FoldStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FoldStringW();
// kernel32.FoldStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FormatApplicationUserModelId();
// kernel32.FormatApplicationUserModelId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FormatMessageA();
// kernel32.FormatMessageA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FormatMessageW();
// kernel32.FormatMessageW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeConsole();
// kernel32.FreeConsole = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeEnvironmentStringsA();
// kernel32.FreeEnvironmentStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeEnvironmentStringsW();
// kernel32.FreeEnvironmentStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeLibrary();
// kernel32.FreeLibrary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeLibraryAndExitThread();
// kernel32.FreeLibraryAndExitThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeLibraryWhenCallbackReturns();
// kernel32.FreeLibraryWhenCallbackReturns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeMemoryJobObject();
// kernel32.FreeMemoryJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeResource();
// kernel32.FreeResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeUserPhysicalPages();
// kernel32.FreeUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GenerateConsoleCtrlEvent();
// kernel32.GenerateConsoleCtrlEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetACP();
// kernel32.GetACP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetActiveProcessorCount();
// kernel32.GetActiveProcessorCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetActiveProcessorGroupCount();
// kernel32.GetActiveProcessorGroupCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAppContainerAce();
// kernel32.GetAppContainerAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAppContainerNamedObjectPath();
// kernel32.GetAppContainerNamedObjectPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetApplicationRecoveryCallback();
// kernel32.GetApplicationRecoveryCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetApplicationRecoveryCallbackWorker();
// kernel32.GetApplicationRecoveryCallbackWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetApplicationRestartSettings();
// kernel32.GetApplicationRestartSettings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetApplicationRestartSettingsWorker();
// kernel32.GetApplicationRestartSettingsWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetApplicationUserModelId();
// kernel32.GetApplicationUserModelId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAtomNameA();
// kernel32.GetAtomNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAtomNameW();
// kernel32.GetAtomNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBinaryType();
// kernel32.GetBinaryType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBinaryTypeA();
// kernel32.GetBinaryTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetBinaryTypeW();
// kernel32.GetBinaryTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCPInfo();
// kernel32.GetCPInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCPInfoExA();
// kernel32.GetCPInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCPInfoExW();
// kernel32.GetCPInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCachedSigningLevel();
// kernel32.GetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarDateFormat();
// kernel32.GetCalendarDateFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarDateFormatEx();
// kernel32.GetCalendarDateFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarDaysInMonth();
// kernel32.GetCalendarDaysInMonth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarDifferenceInDays();
// kernel32.GetCalendarDifferenceInDays = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarInfoA();
// kernel32.GetCalendarInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarInfoEx();
// kernel32.GetCalendarInfoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarInfoW();
// kernel32.GetCalendarInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarMonthsInYear();
// kernel32.GetCalendarMonthsInYear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarSupportedDateRange();
// kernel32.GetCalendarSupportedDateRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCalendarWeekNumber();
// kernel32.GetCalendarWeekNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComPlusPackageInstallStatus();
// kernel32.GetComPlusPackageInstallStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommConfig();
// kernel32.GetCommConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommMask();
// kernel32.GetCommMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommModemStatus();
// kernel32.GetCommModemStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommProperties();
// kernel32.GetCommProperties = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommState();
// kernel32.GetCommState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommTimeouts();
// kernel32.GetCommTimeouts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommandLineA();
// kernel32.GetCommandLineA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCommandLineW();
// kernel32.GetCommandLineW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCompressedFileSizeA();
// kernel32.GetCompressedFileSizeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCompressedFileSizeTransactedA();
// kernel32.GetCompressedFileSizeTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCompressedFileSizeTransactedW();
// kernel32.GetCompressedFileSizeTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCompressedFileSizeW();
// kernel32.GetCompressedFileSizeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComputerNameA();
// kernel32.GetComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComputerNameExA();
// kernel32.GetComputerNameExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComputerNameExW();
// kernel32.GetComputerNameExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetComputerNameW();
// kernel32.GetComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasA();
// kernel32.GetConsoleAliasA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasExesA();
// kernel32.GetConsoleAliasExesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasExesLengthA();
// kernel32.GetConsoleAliasExesLengthA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasExesLengthW();
// kernel32.GetConsoleAliasExesLengthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasExesW();
// kernel32.GetConsoleAliasExesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasW();
// kernel32.GetConsoleAliasW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasesA();
// kernel32.GetConsoleAliasesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasesLengthA();
// kernel32.GetConsoleAliasesLengthA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasesLengthW();
// kernel32.GetConsoleAliasesLengthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleAliasesW();
// kernel32.GetConsoleAliasesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCP();
// kernel32.GetConsoleCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCharType();
// kernel32.GetConsoleCharType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCommandHistoryA();
// kernel32.GetConsoleCommandHistoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCommandHistoryLengthA();
// kernel32.GetConsoleCommandHistoryLengthA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCommandHistoryLengthW();
// kernel32.GetConsoleCommandHistoryLengthW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCommandHistoryW();
// kernel32.GetConsoleCommandHistoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCursorInfo();
// kernel32.GetConsoleCursorInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleCursorMode();
// kernel32.GetConsoleCursorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleDisplayMode();
// kernel32.GetConsoleDisplayMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleFontInfo();
// kernel32.GetConsoleFontInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleFontSize();
// kernel32.GetConsoleFontSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleHardwareState();
// kernel32.GetConsoleHardwareState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleHistoryInfo();
// kernel32.GetConsoleHistoryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleInputExeNameA();
// kernel32.GetConsoleInputExeNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleInputExeNameW();
// kernel32.GetConsoleInputExeNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleInputWaitHandle();
// kernel32.GetConsoleInputWaitHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleKeyboardLayoutNameA();
// kernel32.GetConsoleKeyboardLayoutNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleKeyboardLayoutNameW();
// kernel32.GetConsoleKeyboardLayoutNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleMode();
// kernel32.GetConsoleMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleNlsMode();
// kernel32.GetConsoleNlsMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleOriginalTitleA();
// kernel32.GetConsoleOriginalTitleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleOriginalTitleW();
// kernel32.GetConsoleOriginalTitleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleOutputCP();
// kernel32.GetConsoleOutputCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleProcessList();
// kernel32.GetConsoleProcessList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleScreenBufferInfo();
// kernel32.GetConsoleScreenBufferInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleScreenBufferInfoEx();
// kernel32.GetConsoleScreenBufferInfoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleSelectionInfo();
// kernel32.GetConsoleSelectionInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleTitleA();
// kernel32.GetConsoleTitleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleTitleW();
// kernel32.GetConsoleTitleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetConsoleWindow();
// kernel32.GetConsoleWindow = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrencyFormatA();
// kernel32.GetCurrencyFormatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrencyFormatEx();
// kernel32.GetCurrencyFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrencyFormatW();
// kernel32.GetCurrencyFormatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentActCtx();
// kernel32.GetCurrentActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentActCtxWorker();
// kernel32.GetCurrentActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentApplicationUserModelId();
// kernel32.GetCurrentApplicationUserModelId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentConsoleFont();
// kernel32.GetCurrentConsoleFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentConsoleFontEx();
// kernel32.GetCurrentConsoleFontEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentDirectoryA();
// kernel32.GetCurrentDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentDirectoryW();
// kernel32.GetCurrentDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPackageFamilyName();
// kernel32.GetCurrentPackageFamilyName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPackageFullName();
// kernel32.GetCurrentPackageFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPackageId();
// kernel32.GetCurrentPackageId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPackageInfo();
// kernel32.GetCurrentPackageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentPackagePath();
// kernel32.GetCurrentPackagePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentProcess();
// kernel32.GetCurrentProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentProcessId();
// kernel32.GetCurrentProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentProcessorNumber();
// kernel32.GetCurrentProcessorNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentProcessorNumberEx();
// kernel32.GetCurrentProcessorNumberEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentThread();
// kernel32.GetCurrentThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentThreadId();
// kernel32.GetCurrentThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentThreadStackLimits();
// kernel32.GetCurrentThreadStackLimits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentUmsThread();
// kernel32.GetCurrentUmsThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDateFormatA();
// kernel32.GetDateFormatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDateFormatAWorker();
// kernel32.GetDateFormatAWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDateFormatEx();
// kernel32.GetDateFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDateFormatW();
// kernel32.GetDateFormatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDateFormatWWorker();
// kernel32.GetDateFormatWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDefaultCommConfigA();
// kernel32.GetDefaultCommConfigA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDefaultCommConfigW();
// kernel32.GetDefaultCommConfigW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDevicePowerState();
// kernel32.GetDevicePowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDiskFreeSpaceA();
// kernel32.GetDiskFreeSpaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDiskFreeSpaceExA();
// kernel32.GetDiskFreeSpaceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDiskFreeSpaceExW();
// kernel32.GetDiskFreeSpaceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDiskFreeSpaceW();
// kernel32.GetDiskFreeSpaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDllDirectoryA();
// kernel32.GetDllDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDllDirectoryW();
// kernel32.GetDllDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDriveTypeA();
// kernel32.GetDriveTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDriveTypeW();
// kernel32.GetDriveTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDurationFormat();
// kernel32.GetDurationFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDurationFormatEx();
// kernel32.GetDurationFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDynamicTimeZoneInformation();
// kernel32.GetDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnabledXStateFeatures();
// kernel32.GetEnabledXStateFeatures = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEncryptedFileVersionExt();
// kernel32.GetEncryptedFileVersionExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnvironmentStrings();
// kernel32.GetEnvironmentStrings = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnvironmentStringsA();
// kernel32.GetEnvironmentStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnvironmentStringsW();
// kernel32.GetEnvironmentStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnvironmentVariableA();
// kernel32.GetEnvironmentVariableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEnvironmentVariableW();
// kernel32.GetEnvironmentVariableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEraNameCountedString();
// kernel32.GetEraNameCountedString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetErrorMode();
// kernel32.GetErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExitCodeProcess();
// kernel32.GetExitCodeProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExitCodeThread();
// kernel32.GetExitCodeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExpandedNameA();
// kernel32.GetExpandedNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExpandedNameW();
// kernel32.GetExpandedNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesA();
// kernel32.GetFileAttributesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesExA();
// kernel32.GetFileAttributesExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesExW();
// kernel32.GetFileAttributesExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesTransactedA();
// kernel32.GetFileAttributesTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesTransactedW();
// kernel32.GetFileAttributesTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileAttributesW();
// kernel32.GetFileAttributesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileBandwidthReservation();
// kernel32.GetFileBandwidthReservation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileInformationByHandle();
// kernel32.GetFileInformationByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileInformationByHandleEx();
// kernel32.GetFileInformationByHandleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileMUIInfo();
// kernel32.GetFileMUIInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileMUIPath();
// kernel32.GetFileMUIPath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileSize();
// kernel32.GetFileSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileSizeEx();
// kernel32.GetFileSizeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileTime();
// kernel32.GetFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileType();
// kernel32.GetFileType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFinalPathNameByHandleA();
// kernel32.GetFinalPathNameByHandleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFinalPathNameByHandleW();
// kernel32.GetFinalPathNameByHandleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFirmwareEnvironmentVariableA();
// kernel32.GetFirmwareEnvironmentVariableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFirmwareEnvironmentVariableExA();
// kernel32.GetFirmwareEnvironmentVariableExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFirmwareEnvironmentVariableExW();
// kernel32.GetFirmwareEnvironmentVariableExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFirmwareEnvironmentVariableW();
// kernel32.GetFirmwareEnvironmentVariableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFirmwareType();
// kernel32.GetFirmwareType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFullPathNameA();
// kernel32.GetFullPathNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFullPathNameTransactedA();
// kernel32.GetFullPathNameTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFullPathNameTransactedW();
// kernel32.GetFullPathNameTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFullPathNameW();
// kernel32.GetFullPathNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGeoInfoA();
// kernel32.GetGeoInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetGeoInfoW();
// kernel32.GetGeoInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetHandleInformation();
// kernel32.GetHandleInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLargePageMinimum();
// kernel32.GetLargePageMinimum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLargestConsoleWindowSize();
// kernel32.GetLargestConsoleWindowSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLastError();
// kernel32.GetLastError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocalTime();
// kernel32.GetLocalTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocaleInfoA();
// kernel32.GetLocaleInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocaleInfoEx();
// kernel32.GetLocaleInfoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocaleInfoW();
// kernel32.GetLocaleInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogicalDriveStringsA();
// kernel32.GetLogicalDriveStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogicalDriveStringsW();
// kernel32.GetLogicalDriveStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogicalDrives();
// kernel32.GetLogicalDrives = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogicalProcessorInformation();
// kernel32.GetLogicalProcessorInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLogicalProcessorInformationEx();
// kernel32.GetLogicalProcessorInformationEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLongPathNameA();
// kernel32.GetLongPathNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLongPathNameTransactedA();
// kernel32.GetLongPathNameTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLongPathNameTransactedW();
// kernel32.GetLongPathNameTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLongPathNameW();
// kernel32.GetLongPathNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMailslotInfo();
// kernel32.GetMailslotInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMaximumProcessorCount();
// kernel32.GetMaximumProcessorCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMaximumProcessorGroupCount();
// kernel32.GetMaximumProcessorGroupCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMemoryErrorHandlingCapabilities();
// kernel32.GetMemoryErrorHandlingCapabilities = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleFileNameA();
// kernel32.GetModuleFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleFileNameW();
// kernel32.GetModuleFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleHandleA();
// kernel32.GetModuleHandleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleHandleExA();
// kernel32.GetModuleHandleExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleHandleExW();
// kernel32.GetModuleHandleExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetModuleHandleW();
// kernel32.GetModuleHandleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNLSVersion();
// kernel32.GetNLSVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNLSVersionEx();
// kernel32.GetNLSVersionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeAttribute();
// kernel32.GetNamedPipeAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeClientComputerNameA();
// kernel32.GetNamedPipeClientComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeClientComputerNameW();
// kernel32.GetNamedPipeClientComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeClientProcessId();
// kernel32.GetNamedPipeClientProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeClientSessionId();
// kernel32.GetNamedPipeClientSessionId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeHandleStateA();
// kernel32.GetNamedPipeHandleStateA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeHandleStateW();
// kernel32.GetNamedPipeHandleStateW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeInfo();
// kernel32.GetNamedPipeInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeServerProcessId();
// kernel32.GetNamedPipeServerProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedPipeServerSessionId();
// kernel32.GetNamedPipeServerSessionId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNativeSystemInfo();
// kernel32.GetNativeSystemInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNextUmsListItem();
// kernel32.GetNextUmsListItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNextVDMCommand();
// kernel32.GetNextVDMCommand = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaAvailableMemoryNode();
// kernel32.GetNumaAvailableMemoryNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaAvailableMemoryNodeEx();
// kernel32.GetNumaAvailableMemoryNodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaHighestNodeNumber();
// kernel32.GetNumaHighestNodeNumber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaNodeNumberFromHandle();
// kernel32.GetNumaNodeNumberFromHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaNodeProcessorMask();
// kernel32.GetNumaNodeProcessorMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaNodeProcessorMaskEx();
// kernel32.GetNumaNodeProcessorMaskEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaProcessorNode();
// kernel32.GetNumaProcessorNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaProcessorNodeEx();
// kernel32.GetNumaProcessorNodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaProximityNode();
// kernel32.GetNumaProximityNode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumaProximityNodeEx();
// kernel32.GetNumaProximityNodeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberFormatA();
// kernel32.GetNumberFormatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberFormatEx();
// kernel32.GetNumberFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberFormatW();
// kernel32.GetNumberFormatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberOfConsoleFonts();
// kernel32.GetNumberOfConsoleFonts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberOfConsoleInputEvents();
// kernel32.GetNumberOfConsoleInputEvents = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberOfConsoleMouseButtons();
// kernel32.GetNumberOfConsoleMouseButtons = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOEMCP();
// kernel32.GetOEMCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOverlappedResult();
// kernel32.GetOverlappedResult = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOverlappedResultEx();
// kernel32.GetOverlappedResultEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackageApplicationIds();
// kernel32.GetPackageApplicationIds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackageFamilyName();
// kernel32.GetPackageFamilyName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackageFullName();
// kernel32.GetPackageFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackageId();
// kernel32.GetPackageId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackageInfo();
// kernel32.GetPackageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackagePath();
// kernel32.GetPackagePath = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackagePathByFullName();
// kernel32.GetPackagePathByFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPackagesByPackageFamily();
// kernel32.GetPackagesByPackageFamily = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPhysicallyInstalledSystemMemory();
// kernel32.GetPhysicallyInstalledSystemMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPriorityClass();
// kernel32.GetPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileIntA();
// kernel32.GetPrivateProfileIntA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileIntW();
// kernel32.GetPrivateProfileIntW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileSectionA();
// kernel32.GetPrivateProfileSectionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileSectionNamesA();
// kernel32.GetPrivateProfileSectionNamesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileSectionNamesW();
// kernel32.GetPrivateProfileSectionNamesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileSectionW();
// kernel32.GetPrivateProfileSectionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileStringA();
// kernel32.GetPrivateProfileStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileStringW();
// kernel32.GetPrivateProfileStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileStructA();
// kernel32.GetPrivateProfileStructA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateProfileStructW();
// kernel32.GetPrivateProfileStructW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcAddress();
// kernel32.GetProcAddress = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessAffinityMask();
// kernel32.GetProcessAffinityMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessDEPPolicy();
// kernel32.GetProcessDEPPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessDefaultCpuSets();
// kernel32.GetProcessDefaultCpuSets = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessGroupAffinity();
// kernel32.GetProcessGroupAffinity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessHandleCount();
// kernel32.GetProcessHandleCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessHeap();
// kernel32.GetProcessHeap = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessHeaps();
// kernel32.GetProcessHeaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessId();
// kernel32.GetProcessId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessIdOfThread();
// kernel32.GetProcessIdOfThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessInformation();
// kernel32.GetProcessInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessIoCounters();
// kernel32.GetProcessIoCounters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessMitigationPolicy();
// kernel32.GetProcessMitigationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessPreferredUILanguages();
// kernel32.GetProcessPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessPriorityBoost();
// kernel32.GetProcessPriorityBoost = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessShutdownParameters();
// kernel32.GetProcessShutdownParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessTimes();
// kernel32.GetProcessTimes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessVersion();
// kernel32.GetProcessVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessWorkingSetSize();
// kernel32.GetProcessWorkingSetSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessWorkingSetSizeEx();
// kernel32.GetProcessWorkingSetSizeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProcessorSystemCycleTime();
// kernel32.GetProcessorSystemCycleTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProductInfo();
// kernel32.GetProductInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileIntA();
// kernel32.GetProfileIntA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileIntW();
// kernel32.GetProfileIntW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileSectionA();
// kernel32.GetProfileSectionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileSectionW();
// kernel32.GetProfileSectionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileStringA();
// kernel32.GetProfileStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetProfileStringW();
// kernel32.GetProfileStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetQueuedCompletionStatus();
// kernel32.GetQueuedCompletionStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetQueuedCompletionStatusEx();
// kernel32.GetQueuedCompletionStatusEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetShortPathNameA();
// kernel32.GetShortPathNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetShortPathNameW();
// kernel32.GetShortPathNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStagedPackagePathByFullName();
// kernel32.GetStagedPackagePathByFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStartupInfoA();
// kernel32.GetStartupInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStartupInfoW();
// kernel32.GetStartupInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStateFolder();
// kernel32.GetStateFolder = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStdHandle();
// kernel32.GetStdHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringScripts();
// kernel32.GetStringScripts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringTypeA();
// kernel32.GetStringTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringTypeExA();
// kernel32.GetStringTypeExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringTypeExW();
// kernel32.GetStringTypeExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringTypeW();
// kernel32.GetStringTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemAppDataKey();
// kernel32.GetSystemAppDataKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemCpuSetInformation();
// kernel32.GetSystemCpuSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDEPPolicy();
// kernel32.GetSystemDEPPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDefaultLCID();
// kernel32.GetSystemDefaultLCID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDefaultLangID();
// kernel32.GetSystemDefaultLangID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDefaultLocaleName();
// kernel32.GetSystemDefaultLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDefaultUILanguage();
// kernel32.GetSystemDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDirectoryA();
// kernel32.GetSystemDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemDirectoryW();
// kernel32.GetSystemDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemFileCacheSize();
// kernel32.GetSystemFileCacheSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemFirmwareTable();
// kernel32.GetSystemFirmwareTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemInfo();
// kernel32.GetSystemInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemPowerStatus();
// kernel32.GetSystemPowerStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemPreferredUILanguages();
// kernel32.GetSystemPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemRegistryQuota();
// kernel32.GetSystemRegistryQuota = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemTime();
// kernel32.GetSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemTimeAdjustment();
// kernel32.GetSystemTimeAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemTimeAsFileTime();
// kernel32.GetSystemTimeAsFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemTimePreciseAsFileTime();
// kernel32.GetSystemTimePreciseAsFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemTimes();
// kernel32.GetSystemTimes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemWindowsDirectoryA();
// kernel32.GetSystemWindowsDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemWindowsDirectoryW();
// kernel32.GetSystemWindowsDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemWow64DirectoryA();
// kernel32.GetSystemWow64DirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSystemWow64DirectoryW();
// kernel32.GetSystemWow64DirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTapeParameters();
// kernel32.GetTapeParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTapePosition();
// kernel32.GetTapePosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTapeStatus();
// kernel32.GetTapeStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTempFileNameA();
// kernel32.GetTempFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTempFileNameW();
// kernel32.GetTempFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTempPathA();
// kernel32.GetTempPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTempPathW();
// kernel32.GetTempPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadContext();
// kernel32.GetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadErrorMode();
// kernel32.GetThreadErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadGroupAffinity();
// kernel32.GetThreadGroupAffinity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadIOPendingFlag();
// kernel32.GetThreadIOPendingFlag = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadId();
// kernel32.GetThreadId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadIdealProcessorEx();
// kernel32.GetThreadIdealProcessorEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadInformation();
// kernel32.GetThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadLocale();
// kernel32.GetThreadLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadPreferredUILanguages();
// kernel32.GetThreadPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadPriority();
// kernel32.GetThreadPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadPriorityBoost();
// kernel32.GetThreadPriorityBoost = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadSelectedCpuSets();
// kernel32.GetThreadSelectedCpuSets = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadSelectorEntry();
// kernel32.GetThreadSelectorEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadTimes();
// kernel32.GetThreadTimes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadUILanguage();
// kernel32.GetThreadUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTickCount();
// kernel32.GetTickCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTickCount64();
// kernel32.GetTickCount64 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeFormatA();
// kernel32.GetTimeFormatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeFormatAWorker();
// kernel32.GetTimeFormatAWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeFormatEx();
// kernel32.GetTimeFormatEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeFormatW();
// kernel32.GetTimeFormatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeFormatWWorker();
// kernel32.GetTimeFormatWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeZoneInformation();
// kernel32.GetTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTimeZoneInformationForYear();
// kernel32.GetTimeZoneInformationForYear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUILanguageInfo();
// kernel32.GetUILanguageInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUmsCompletionListEvent();
// kernel32.GetUmsCompletionListEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUmsSystemThreadInformation();
// kernel32.GetUmsSystemThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserDefaultLCID();
// kernel32.GetUserDefaultLCID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserDefaultLangID();
// kernel32.GetUserDefaultLangID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserDefaultLocaleName();
// kernel32.GetUserDefaultLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserDefaultUILanguage();
// kernel32.GetUserDefaultUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserGeoID();
// kernel32.GetUserGeoID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserPreferredUILanguages();
// kernel32.GetUserPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVDMCurrentDirectories();
// kernel32.GetVDMCurrentDirectories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVersion();
// kernel32.GetVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVersionExA();
// kernel32.GetVersionExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVersionExW();
// kernel32.GetVersionExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumeInformationA();
// kernel32.GetVolumeInformationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumeInformationByHandleW();
// kernel32.GetVolumeInformationByHandleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumeInformationW();
// kernel32.GetVolumeInformationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumeNameForVolumeMountPointA();
// kernel32.GetVolumeNameForVolumeMountPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumeNameForVolumeMountPointW();
// kernel32.GetVolumeNameForVolumeMountPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumePathNameA();
// kernel32.GetVolumePathNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumePathNameW();
// kernel32.GetVolumePathNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumePathNamesForVolumeNameA();
// kernel32.GetVolumePathNamesForVolumeNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetVolumePathNamesForVolumeNameW();
// kernel32.GetVolumePathNamesForVolumeNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowsDirectoryA();
// kernel32.GetWindowsDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowsDirectoryW();
// kernel32.GetWindowsDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWriteWatch();
// kernel32.GetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetXStateFeaturesMask();
// kernel32.GetXStateFeaturesMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalAddAtomA();
// kernel32.GlobalAddAtomA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalAddAtomExA();
// kernel32.GlobalAddAtomExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalAddAtomExW();
// kernel32.GlobalAddAtomExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalAddAtomW();
// kernel32.GlobalAddAtomW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalAlloc();
// kernel32.GlobalAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalCompact();
// kernel32.GlobalCompact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalDeleteAtom();
// kernel32.GlobalDeleteAtom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalFindAtomA();
// kernel32.GlobalFindAtomA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalFindAtomW();
// kernel32.GlobalFindAtomW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalFix();
// kernel32.GlobalFix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalFlags();
// kernel32.GlobalFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalFree();
// kernel32.GlobalFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalGetAtomNameA();
// kernel32.GlobalGetAtomNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalGetAtomNameW();
// kernel32.GlobalGetAtomNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalHandle();
// kernel32.GlobalHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalLock();
// kernel32.GlobalLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalMemoryStatus();
// kernel32.GlobalMemoryStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalMemoryStatusEx();
// kernel32.GlobalMemoryStatusEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalReAlloc();
// kernel32.GlobalReAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalSize();
// kernel32.GlobalSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalUnWire();
// kernel32.GlobalUnWire = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalUnfix();
// kernel32.GlobalUnfix = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalUnlock();
// kernel32.GlobalUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GlobalWire();
// kernel32.GlobalWire = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Heap32First();
// kernel32.Heap32First = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Heap32ListFirst();
// kernel32.Heap32ListFirst = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Heap32ListNext();
// kernel32.Heap32ListNext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Heap32Next();
// kernel32.Heap32Next = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapAlloc();
// kernel32.HeapAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapCompact();
// kernel32.HeapCompact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapCreate();
// kernel32.HeapCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapDestroy();
// kernel32.HeapDestroy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapFree();
// kernel32.HeapFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapLock();
// kernel32.HeapLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapQueryInformation();
// kernel32.HeapQueryInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapReAlloc();
// kernel32.HeapReAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapSetInformation();
// kernel32.HeapSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapSize();
// kernel32.HeapSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapSummary();
// kernel32.HeapSummary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapUnlock();
// kernel32.HeapUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapValidate();
// kernel32.HeapValidate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall HeapWalk();
// kernel32.HeapWalk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IdnToAscii();
// kernel32.IdnToAscii = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IdnToNameprepUnicode();
// kernel32.IdnToNameprepUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IdnToUnicode();
// kernel32.IdnToUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitAtomTable();
// kernel32.InitAtomTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitOnceBeginInitialize();
// kernel32.InitOnceBeginInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitOnceComplete();
// kernel32.InitOnceComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitOnceExecuteOnce();
// kernel32.InitOnceExecuteOnce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitOnceInitialize();
// kernel32.InitOnceInitialize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeConditionVariable();
// kernel32.InitializeConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeContext();
// kernel32.InitializeContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeCriticalSection();
// kernel32.InitializeCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeCriticalSectionAndSpinCount();
// kernel32.InitializeCriticalSectionAndSpinCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeCriticalSectionEx();
// kernel32.InitializeCriticalSectionEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeEnclave();
// kernel32.InitializeEnclave = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeProcThreadAttributeList();
// kernel32.InitializeProcThreadAttributeList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeSListHead();
// kernel32.InitializeSListHead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeSRWLock();
// kernel32.InitializeSRWLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeSynchronizationBarrier();
// kernel32.InitializeSynchronizationBarrier = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InstallELAMCertificateInfo();
// kernel32.InstallELAMCertificateInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InterlockedFlushSList();
// kernel32.InterlockedFlushSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InterlockedPopEntrySList();
// kernel32.InterlockedPopEntrySList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InterlockedPushEntrySList();
// kernel32.InterlockedPushEntrySList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InterlockedPushListSList();
// kernel32.InterlockedPushListSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InterlockedPushListSListEx();
// kernel32.InterlockedPushListSListEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InvalidateConsoleDIBits();
// kernel32.InvalidateConsoleDIBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadCodePtr();
// kernel32.IsBadCodePtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadHugeReadPtr();
// kernel32.IsBadHugeReadPtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadHugeWritePtr();
// kernel32.IsBadHugeWritePtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadReadPtr();
// kernel32.IsBadReadPtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadStringPtrA();
// kernel32.IsBadStringPtrA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadStringPtrW();
// kernel32.IsBadStringPtrW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsBadWritePtr();
// kernel32.IsBadWritePtr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCalendarLeapDay();
// kernel32.IsCalendarLeapDay = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCalendarLeapMonth();
// kernel32.IsCalendarLeapMonth = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsCalendarLeapYear();
// kernel32.IsCalendarLeapYear = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDBCSLeadByte();
// kernel32.IsDBCSLeadByte = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDBCSLeadByteEx();
// kernel32.IsDBCSLeadByteEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsDebuggerPresent();
// kernel32.IsDebuggerPresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsEnclaveTypeSupported();
// kernel32.IsEnclaveTypeSupported = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsNLSDefinedString();
// kernel32.IsNLSDefinedString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsNativeVhdBoot();
// kernel32.IsNativeVhdBoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsNormalizedString();
// kernel32.IsNormalizedString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsProcessCritical();
// kernel32.IsProcessCritical = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsProcessInJob();
// kernel32.IsProcessInJob = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsProcessorFeaturePresent();
// kernel32.IsProcessorFeaturePresent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsSystemResumeAutomatic();
// kernel32.IsSystemResumeAutomatic = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsThreadAFiber();
// kernel32.IsThreadAFiber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsThreadpoolTimerSet();
// kernel32.IsThreadpoolTimerSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidCalDateTime();
// kernel32.IsValidCalDateTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidCodePage();
// kernel32.IsValidCodePage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidLanguageGroup();
// kernel32.IsValidLanguageGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidLocale();
// kernel32.IsValidLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidLocaleName();
// kernel32.IsValidLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidNLSVersion();
// kernel32.IsValidNLSVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWow64Process();
// kernel32.IsWow64Process = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EmptyWorkingSet();
// kernel32.K32EmptyWorkingSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumDeviceDrivers();
// kernel32.K32EnumDeviceDrivers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumPageFilesA();
// kernel32.K32EnumPageFilesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumPageFilesW();
// kernel32.K32EnumPageFilesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumProcessModules();
// kernel32.K32EnumProcessModules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumProcessModulesEx();
// kernel32.K32EnumProcessModulesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32EnumProcesses();
// kernel32.K32EnumProcesses = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetDeviceDriverBaseNameA();
// kernel32.K32GetDeviceDriverBaseNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetDeviceDriverBaseNameW();
// kernel32.K32GetDeviceDriverBaseNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetDeviceDriverFileNameA();
// kernel32.K32GetDeviceDriverFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetDeviceDriverFileNameW();
// kernel32.K32GetDeviceDriverFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetMappedFileNameA();
// kernel32.K32GetMappedFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetMappedFileNameW();
// kernel32.K32GetMappedFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetModuleBaseNameA();
// kernel32.K32GetModuleBaseNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetModuleBaseNameW();
// kernel32.K32GetModuleBaseNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetModuleFileNameExA();
// kernel32.K32GetModuleFileNameExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetModuleFileNameExW();
// kernel32.K32GetModuleFileNameExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetModuleInformation();
// kernel32.K32GetModuleInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetPerformanceInfo();
// kernel32.K32GetPerformanceInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetProcessImageFileNameA();
// kernel32.K32GetProcessImageFileNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetProcessImageFileNameW();
// kernel32.K32GetProcessImageFileNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetProcessMemoryInfo();
// kernel32.K32GetProcessMemoryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetWsChanges();
// kernel32.K32GetWsChanges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32GetWsChangesEx();
// kernel32.K32GetWsChangesEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32InitializeProcessForWsWatch();
// kernel32.K32InitializeProcessForWsWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32QueryWorkingSet();
// kernel32.K32QueryWorkingSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall K32QueryWorkingSetEx();
// kernel32.K32QueryWorkingSetEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LCIDToLocaleName();
// kernel32.LCIDToLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LCMapStringA();
// kernel32.LCMapStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LCMapStringEx();
// kernel32.LCMapStringEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LCMapStringW();
// kernel32.LCMapStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZClose();
// kernel32.LZClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZCloseFile();
// kernel32.LZCloseFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZCopy();
// kernel32.LZCopy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZCreateFileW();
// kernel32.LZCreateFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZDone();
// kernel32.LZDone = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZInit();
// kernel32.LZInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZOpenFileA();
// kernel32.LZOpenFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZOpenFileW();
// kernel32.LZOpenFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZRead();
// kernel32.LZRead = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZSeek();
// kernel32.LZSeek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LZStart();
// kernel32.LZStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LeaveCriticalSection();
// kernel32.LeaveCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LeaveCriticalSectionWhenCallbackReturns();
// kernel32.LeaveCriticalSectionWhenCallbackReturns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadAppInitDlls();
// kernel32.LoadAppInitDlls = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadEnclaveData();
// kernel32.LoadEnclaveData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadLibraryA();
// kernel32.LoadLibraryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadLibraryExA();
// kernel32.LoadLibraryExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadLibraryExW();
// kernel32.LoadLibraryExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadLibraryW();
// kernel32.LoadLibraryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadModule();
// kernel32.LoadModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadPackagedLibrary();
// kernel32.LoadPackagedLibrary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadResource();
// kernel32.LoadResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadStringBaseExW();
// kernel32.LoadStringBaseExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LoadStringBaseW();
// kernel32.LoadStringBaseW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalAlloc();
// kernel32.LocalAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalCompact();
// kernel32.LocalCompact = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalFileTimeToFileTime();
// kernel32.LocalFileTimeToFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalFlags();
// kernel32.LocalFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalFree();
// kernel32.LocalFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalHandle();
// kernel32.LocalHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalLock();
// kernel32.LocalLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalReAlloc();
// kernel32.LocalReAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalShrink();
// kernel32.LocalShrink = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalSize();
// kernel32.LocalSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocalUnlock();
// kernel32.LocalUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocaleNameToLCID();
// kernel32.LocaleNameToLCID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LocateXStateFeature();
// kernel32.LocateXStateFeature = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockFile();
// kernel32.LockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockFileEx();
// kernel32.LockFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockResource();
// kernel32.LockResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapUserPhysicalPages();
// kernel32.MapUserPhysicalPages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapUserPhysicalPagesScatter();
// kernel32.MapUserPhysicalPagesScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapViewOfFile();
// kernel32.MapViewOfFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapViewOfFileEx();
// kernel32.MapViewOfFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapViewOfFileExNuma();
// kernel32.MapViewOfFileExNuma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapViewOfFileFromApp();
// kernel32.MapViewOfFileFromApp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Module32First();
// kernel32.Module32First = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Module32FirstW();
// kernel32.Module32FirstW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Module32Next();
// kernel32.Module32Next = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Module32NextW();
// kernel32.Module32NextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileA();
// kernel32.MoveFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileExA();
// kernel32.MoveFileExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileExW();
// kernel32.MoveFileExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileTransactedA();
// kernel32.MoveFileTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileTransactedW();
// kernel32.MoveFileTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileW();
// kernel32.MoveFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileWithProgressA();
// kernel32.MoveFileWithProgressA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MoveFileWithProgressW();
// kernel32.MoveFileWithProgressW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MulDiv();
// kernel32.MulDiv = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MultiByteToWideChar();
// kernel32.MultiByteToWideChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NeedCurrentDirectoryForExePathA();
// kernel32.NeedCurrentDirectoryForExePathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NeedCurrentDirectoryForExePathW();
// kernel32.NeedCurrentDirectoryForExePathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsCheckPolicy();
// kernel32.NlsCheckPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsEventDataDescCreate();
// kernel32.NlsEventDataDescCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsGetCacheUpdateCount();
// kernel32.NlsGetCacheUpdateCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsUpdateLocale();
// kernel32.NlsUpdateLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsUpdateSystemLocale();
// kernel32.NlsUpdateSystemLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NlsWriteEtwEvent();
// kernel32.NlsWriteEtwEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NormalizeString();
// kernel32.NormalizeString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyMountMgr();
// kernel32.NotifyMountMgr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyUILanguageChange();
// kernel32.NotifyUILanguageChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NtVdm64CreateProcessInternalW();
// kernel32.NtVdm64CreateProcessInternalW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OOBEComplete();
// kernel32.OOBEComplete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OfferVirtualMemory();
// kernel32.OfferVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenConsoleW();
// kernel32.OpenConsoleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenConsoleWStub();
// kernel32.OpenConsoleWStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEventA();
// kernel32.OpenEventA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEventW();
// kernel32.OpenEventW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenFile();
// kernel32.OpenFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenFileById();
// kernel32.OpenFileById = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenFileMappingA();
// kernel32.OpenFileMappingA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenFileMappingW();
// kernel32.OpenFileMappingW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenJobObjectA();
// kernel32.OpenJobObjectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenJobObjectW();
// kernel32.OpenJobObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenMutexA();
// kernel32.OpenMutexA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenMutexW();
// kernel32.OpenMutexW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenPackageInfoByFullName();
// kernel32.OpenPackageInfoByFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenPrivateNamespaceA();
// kernel32.OpenPrivateNamespaceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenPrivateNamespaceW();
// kernel32.OpenPrivateNamespaceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenProcess();
// kernel32.OpenProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenProcessToken();
// kernel32.OpenProcessToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenProfileUserMapping();
// kernel32.OpenProfileUserMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenSemaphoreA();
// kernel32.OpenSemaphoreA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenSemaphoreW();
// kernel32.OpenSemaphoreW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenState();
// kernel32.OpenState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenStateExplicit();
// kernel32.OpenStateExplicit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenThread();
// kernel32.OpenThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenThreadToken();
// kernel32.OpenThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenWaitableTimerA();
// kernel32.OpenWaitableTimerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenWaitableTimerW();
// kernel32.OpenWaitableTimerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OutputDebugStringA();
// kernel32.OutputDebugStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OutputDebugStringW();
// kernel32.OutputDebugStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackageFamilyNameFromFullName();
// kernel32.PackageFamilyNameFromFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackageFamilyNameFromId();
// kernel32.PackageFamilyNameFromId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackageFullNameFromId();
// kernel32.PackageFullNameFromId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackageIdFromFullName();
// kernel32.PackageIdFromFullName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PackageNameAndPublisherIdFromFamilyName();
// kernel32.PackageNameAndPublisherIdFromFamilyName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ParseApplicationUserModelId();
// kernel32.ParseApplicationUserModelId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PeekConsoleInputA();
// kernel32.PeekConsoleInputA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PeekConsoleInputW();
// kernel32.PeekConsoleInputW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PeekNamedPipe();
// kernel32.PeekNamedPipe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PostQueuedCompletionStatus();
// kernel32.PostQueuedCompletionStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PowerClearRequest();
// kernel32.PowerClearRequest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PowerCreateRequest();
// kernel32.PowerCreateRequest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PowerSetRequest();
// kernel32.PowerSetRequest = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrefetchVirtualMemory();
// kernel32.PrefetchVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrepareTape();
// kernel32.PrepareTape = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivCopyFileExW();
// kernel32.PrivCopyFileExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivMoveFileIdentityW();
// kernel32.PrivMoveFileIdentityW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Process32First();
// kernel32.Process32First = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Process32FirstW();
// kernel32.Process32FirstW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Process32Next();
// kernel32.Process32Next = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Process32NextW();
// kernel32.Process32NextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ProcessIdToSessionId();
// kernel32.ProcessIdToSessionId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssCaptureSnapshot();
// kernel32.PssCaptureSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssDuplicateSnapshot();
// kernel32.PssDuplicateSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssFreeSnapshot();
// kernel32.PssFreeSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssQuerySnapshot();
// kernel32.PssQuerySnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerCreate();
// kernel32.PssWalkMarkerCreate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerFree();
// kernel32.PssWalkMarkerFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerGetPosition();
// kernel32.PssWalkMarkerGetPosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerRewind();
// kernel32.PssWalkMarkerRewind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerSeek();
// kernel32.PssWalkMarkerSeek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerSeekToBeginning();
// kernel32.PssWalkMarkerSeekToBeginning = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerSetPosition();
// kernel32.PssWalkMarkerSetPosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkMarkerTell();
// kernel32.PssWalkMarkerTell = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PssWalkSnapshot();
// kernel32.PssWalkSnapshot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PulseEvent();
// kernel32.PulseEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PurgeComm();
// kernel32.PurgeComm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryActCtxSettingsW();
// kernel32.QueryActCtxSettingsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryActCtxSettingsWWorker();
// kernel32.QueryActCtxSettingsWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryActCtxW();
// kernel32.QueryActCtxW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryActCtxWWorker();
// kernel32.QueryActCtxWWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryDepthSList();
// kernel32.QueryDepthSList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryDosDeviceA();
// kernel32.QueryDosDeviceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryDosDeviceW();
// kernel32.QueryDosDeviceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryFullProcessImageNameA();
// kernel32.QueryFullProcessImageNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryFullProcessImageNameW();
// kernel32.QueryFullProcessImageNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryIdleProcessorCycleTime();
// kernel32.QueryIdleProcessorCycleTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryIdleProcessorCycleTimeEx();
// kernel32.QueryIdleProcessorCycleTimeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryInformationJobObject();
// kernel32.QueryInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryIoRateControlInformationJobObject();
// kernel32.QueryIoRateControlInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryMemoryResourceNotification();
// kernel32.QueryMemoryResourceNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryPerformanceCounter();
// kernel32.QueryPerformanceCounter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryPerformanceFrequency();
// kernel32.QueryPerformanceFrequency = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryProcessAffinityUpdateMode();
// kernel32.QueryProcessAffinityUpdateMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryProcessCycleTime();
// kernel32.QueryProcessCycleTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryProtectedPolicy();
// kernel32.QueryProtectedPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryThreadCycleTime();
// kernel32.QueryThreadCycleTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryThreadProfiling();
// kernel32.QueryThreadProfiling = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryThreadpoolStackInformation();
// kernel32.QueryThreadpoolStackInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryUmsThreadInformation();
// kernel32.QueryUmsThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryUnbiasedInterruptTime();
// kernel32.QueryUnbiasedInterruptTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueueUserAPC();
// kernel32.QueueUserAPC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueueUserWorkItem();
// kernel32.QueueUserWorkItem = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkGetData2Worker();
// kernel32.QuirkGetData2Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkGetDataWorker();
// kernel32.QuirkGetDataWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabled2Worker();
// kernel32.QuirkIsEnabled2Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabled3Worker();
// kernel32.QuirkIsEnabled3Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledForPackage2Worker();
// kernel32.QuirkIsEnabledForPackage2Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledForPackage3Worker();
// kernel32.QuirkIsEnabledForPackage3Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledForPackage4Worker();
// kernel32.QuirkIsEnabledForPackage4Worker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledForPackageWorker();
// kernel32.QuirkIsEnabledForPackageWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledForProcessWorker();
// kernel32.QuirkIsEnabledForProcessWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuirkIsEnabledWorker();
// kernel32.QuirkIsEnabledWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RaiseException();
// kernel32.RaiseException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RaiseFailFastException();
// kernel32.RaiseFailFastException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RaiseInvalid16BitExeError();
// kernel32.RaiseInvalid16BitExeError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReOpenFile();
// kernel32.ReOpenFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleA();
// kernel32.ReadConsoleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleInputA();
// kernel32.ReadConsoleInputA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleInputExA();
// kernel32.ReadConsoleInputExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleInputExW();
// kernel32.ReadConsoleInputExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleInputW();
// kernel32.ReadConsoleInputW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleOutputA();
// kernel32.ReadConsoleOutputA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleOutputAttribute();
// kernel32.ReadConsoleOutputAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleOutputCharacterA();
// kernel32.ReadConsoleOutputCharacterA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleOutputCharacterW();
// kernel32.ReadConsoleOutputCharacterW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleOutputW();
// kernel32.ReadConsoleOutputW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadConsoleW();
// kernel32.ReadConsoleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadDirectoryChangesW();
// kernel32.ReadDirectoryChangesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadFile();
// kernel32.ReadFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadFileEx();
// kernel32.ReadFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadFileScatter();
// kernel32.ReadFileScatter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadProcessMemory();
// kernel32.ReadProcessMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadThreadProfilingData();
// kernel32.ReadThreadProfilingData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReclaimVirtualMemory();
// kernel32.ReclaimVirtualMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCloseKey();
// kernel32.RegCloseKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCopyTreeW();
// kernel32.RegCopyTreeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyExA();
// kernel32.RegCreateKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyExW();
// kernel32.RegCreateKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyExA();
// kernel32.RegDeleteKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyExW();
// kernel32.RegDeleteKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteTreeA();
// kernel32.RegDeleteTreeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteTreeW();
// kernel32.RegDeleteTreeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteValueA();
// kernel32.RegDeleteValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteValueW();
// kernel32.RegDeleteValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDisablePredefinedCacheEx();
// kernel32.RegDisablePredefinedCacheEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyExA();
// kernel32.RegEnumKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyExW();
// kernel32.RegEnumKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumValueA();
// kernel32.RegEnumValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumValueW();
// kernel32.RegEnumValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegFlushKey();
// kernel32.RegFlushKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetKeySecurity();
// kernel32.RegGetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetValueA();
// kernel32.RegGetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetValueW();
// kernel32.RegGetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadKeyA();
// kernel32.RegLoadKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadKeyW();
// kernel32.RegLoadKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadMUIStringA();
// kernel32.RegLoadMUIStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadMUIStringW();
// kernel32.RegLoadMUIStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegNotifyChangeKeyValue();
// kernel32.RegNotifyChangeKeyValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenCurrentUser();
// kernel32.RegOpenCurrentUser = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyExA();
// kernel32.RegOpenKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyExW();
// kernel32.RegOpenKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenUserClassesRoot();
// kernel32.RegOpenUserClassesRoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryInfoKeyA();
// kernel32.RegQueryInfoKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryInfoKeyW();
// kernel32.RegQueryInfoKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueExA();
// kernel32.RegQueryValueExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueExW();
// kernel32.RegQueryValueExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegRestoreKeyA();
// kernel32.RegRestoreKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegRestoreKeyW();
// kernel32.RegRestoreKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyExA();
// kernel32.RegSaveKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyExW();
// kernel32.RegSaveKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetKeySecurity();
// kernel32.RegSetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueExA();
// kernel32.RegSetValueExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueExW();
// kernel32.RegSetValueExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegUnLoadKeyA();
// kernel32.RegUnLoadKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegUnLoadKeyW();
// kernel32.RegUnLoadKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterApplicationRecoveryCallback();
// kernel32.RegisterApplicationRecoveryCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterApplicationRestart();
// kernel32.RegisterApplicationRestart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterBadMemoryNotification();
// kernel32.RegisterBadMemoryNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterConsoleIME();
// kernel32.RegisterConsoleIME = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterConsoleOS2();
// kernel32.RegisterConsoleOS2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterConsoleVDM();
// kernel32.RegisterConsoleVDM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWaitForInputIdle();
// kernel32.RegisterWaitForInputIdle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWaitForSingleObject();
// kernel32.RegisterWaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWaitForSingleObjectEx();
// kernel32.RegisterWaitForSingleObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWaitUntilOOBECompleted();
// kernel32.RegisterWaitUntilOOBECompleted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWowBaseHandlers();
// kernel32.RegisterWowBaseHandlers = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWowExec();
// kernel32.RegisterWowExec = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseActCtx();
// kernel32.ReleaseActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseActCtxWorker();
// kernel32.ReleaseActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseMutex();
// kernel32.ReleaseMutex = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseMutexWhenCallbackReturns();
// kernel32.ReleaseMutexWhenCallbackReturns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseSRWLockExclusive();
// kernel32.ReleaseSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseSRWLockShared();
// kernel32.ReleaseSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseSemaphore();
// kernel32.ReleaseSemaphore = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReleaseSemaphoreWhenCallbackReturns();
// kernel32.ReleaseSemaphoreWhenCallbackReturns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveDirectoryA();
// kernel32.RemoveDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveDirectoryTransactedA();
// kernel32.RemoveDirectoryTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveDirectoryTransactedW();
// kernel32.RemoveDirectoryTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveDirectoryW();
// kernel32.RemoveDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveDllDirectory();
// kernel32.RemoveDllDirectory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveLocalAlternateComputerNameA();
// kernel32.RemoveLocalAlternateComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveLocalAlternateComputerNameW();
// kernel32.RemoveLocalAlternateComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveSecureMemoryCacheCallback();
// kernel32.RemoveSecureMemoryCacheCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveVectoredContinueHandler();
// kernel32.RemoveVectoredContinueHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveVectoredExceptionHandler();
// kernel32.RemoveVectoredExceptionHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReplaceFile();
// kernel32.ReplaceFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReplaceFileA();
// kernel32.ReplaceFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReplaceFileW();
// kernel32.ReplaceFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReplacePartitionUnit();
// kernel32.ReplacePartitionUnit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RequestDeviceWakeup();
// kernel32.RequestDeviceWakeup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RequestWakeupLatency();
// kernel32.RequestWakeupLatency = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResetEvent();
// kernel32.ResetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResetWriteWatch();
// kernel32.ResetWriteWatch = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResolveDelayLoadedAPI();
// kernel32.ResolveDelayLoadedAPI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResolveDelayLoadsFromDll();
// kernel32.ResolveDelayLoadsFromDll = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResolveLocaleName();
// kernel32.ResolveLocaleName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RestoreLastError();
// kernel32.RestoreLastError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ResumeThread();
// kernel32.ResumeThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlAddFunctionTable();
// kernel32.RtlAddFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCaptureContext();
// kernel32.RtlCaptureContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCaptureStackBackTrace();
// kernel32.RtlCaptureStackBackTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCompareMemory();
// kernel32.RtlCompareMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlCopyMemory();
// kernel32.RtlCopyMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlDeleteFunctionTable();
// kernel32.RtlDeleteFunctionTable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlFillMemory();
// kernel32.RtlFillMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlInstallFunctionTableCallback();
// kernel32.RtlInstallFunctionTableCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlLookupFunctionEntry();
// kernel32.RtlLookupFunctionEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlMoveMemory();
// kernel32.RtlMoveMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlPcToFileHeader();
// kernel32.RtlPcToFileHeader = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRaiseException();
// kernel32.RtlRaiseException = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlRestoreContext();
// kernel32.RtlRestoreContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnwind();
// kernel32.RtlUnwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlUnwindEx();
// kernel32.RtlUnwindEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlVirtualUnwind();
// kernel32.RtlVirtualUnwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RtlZeroMemory();
// kernel32.RtlZeroMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollConsoleScreenBufferA();
// kernel32.ScrollConsoleScreenBufferA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ScrollConsoleScreenBufferW();
// kernel32.ScrollConsoleScreenBufferW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SearchPathA();
// kernel32.SearchPathA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SearchPathW();
// kernel32.SearchPathW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCachedSigningLevel();
// kernel32.SetCachedSigningLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCalendarInfoA();
// kernel32.SetCalendarInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCalendarInfoW();
// kernel32.SetCalendarInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComPlusPackageInstallStatus();
// kernel32.SetComPlusPackageInstallStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCommBreak();
// kernel32.SetCommBreak = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCommConfig();
// kernel32.SetCommConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCommMask();
// kernel32.SetCommMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCommState();
// kernel32.SetCommState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCommTimeouts();
// kernel32.SetCommTimeouts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComputerNameA();
// kernel32.SetComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComputerNameEx2W();
// kernel32.SetComputerNameEx2W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComputerNameExA();
// kernel32.SetComputerNameExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComputerNameExW();
// kernel32.SetComputerNameExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetComputerNameW();
// kernel32.SetComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleActiveScreenBuffer();
// kernel32.SetConsoleActiveScreenBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCP();
// kernel32.SetConsoleCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCtrlHandler();
// kernel32.SetConsoleCtrlHandler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCursor();
// kernel32.SetConsoleCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCursorInfo();
// kernel32.SetConsoleCursorInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCursorMode();
// kernel32.SetConsoleCursorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleCursorPosition();
// kernel32.SetConsoleCursorPosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleDisplayMode();
// kernel32.SetConsoleDisplayMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleFont();
// kernel32.SetConsoleFont = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleHardwareState();
// kernel32.SetConsoleHardwareState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleHistoryInfo();
// kernel32.SetConsoleHistoryInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleIcon();
// kernel32.SetConsoleIcon = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleInputExeNameA();
// kernel32.SetConsoleInputExeNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleInputExeNameW();
// kernel32.SetConsoleInputExeNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleKeyShortcuts();
// kernel32.SetConsoleKeyShortcuts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleLocalEUDC();
// kernel32.SetConsoleLocalEUDC = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleMaximumWindowSize();
// kernel32.SetConsoleMaximumWindowSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleMenuClose();
// kernel32.SetConsoleMenuClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleMode();
// kernel32.SetConsoleMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleNlsMode();
// kernel32.SetConsoleNlsMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleNumberOfCommandsA();
// kernel32.SetConsoleNumberOfCommandsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleNumberOfCommandsW();
// kernel32.SetConsoleNumberOfCommandsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleOS2OemFormat();
// kernel32.SetConsoleOS2OemFormat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleOutputCP();
// kernel32.SetConsoleOutputCP = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsolePalette();
// kernel32.SetConsolePalette = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleScreenBufferInfoEx();
// kernel32.SetConsoleScreenBufferInfoEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleScreenBufferSize();
// kernel32.SetConsoleScreenBufferSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleTextAttribute();
// kernel32.SetConsoleTextAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleTitleA();
// kernel32.SetConsoleTitleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleTitleW();
// kernel32.SetConsoleTitleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetConsoleWindowInfo();
// kernel32.SetConsoleWindowInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCriticalSectionSpinCount();
// kernel32.SetCriticalSectionSpinCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCurrentConsoleFontEx();
// kernel32.SetCurrentConsoleFontEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCurrentDirectoryA();
// kernel32.SetCurrentDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetCurrentDirectoryW();
// kernel32.SetCurrentDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDefaultCommConfigA();
// kernel32.SetDefaultCommConfigA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDefaultCommConfigW();
// kernel32.SetDefaultCommConfigW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDefaultDllDirectories();
// kernel32.SetDefaultDllDirectories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDllDirectoryA();
// kernel32.SetDllDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDllDirectoryW();
// kernel32.SetDllDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetDynamicTimeZoneInformation();
// kernel32.SetDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEndOfFile();
// kernel32.SetEndOfFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEnvironmentStringsA();
// kernel32.SetEnvironmentStringsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEnvironmentStringsW();
// kernel32.SetEnvironmentStringsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEnvironmentVariableA();
// kernel32.SetEnvironmentVariableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEnvironmentVariableW();
// kernel32.SetEnvironmentVariableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetErrorMode();
// kernel32.SetErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEvent();
// kernel32.SetEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEventWhenCallbackReturns();
// kernel32.SetEventWhenCallbackReturns = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileApisToANSI();
// kernel32.SetFileApisToANSI = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileApisToOEM();
// kernel32.SetFileApisToOEM = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileAttributesA();
// kernel32.SetFileAttributesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileAttributesTransactedA();
// kernel32.SetFileAttributesTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileAttributesTransactedW();
// kernel32.SetFileAttributesTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileAttributesW();
// kernel32.SetFileAttributesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileBandwidthReservation();
// kernel32.SetFileBandwidthReservation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileCompletionNotificationModes();
// kernel32.SetFileCompletionNotificationModes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileInformationByHandle();
// kernel32.SetFileInformationByHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileIoOverlappedRange();
// kernel32.SetFileIoOverlappedRange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFilePointer();
// kernel32.SetFilePointer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFilePointerEx();
// kernel32.SetFilePointerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileShortNameA();
// kernel32.SetFileShortNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileShortNameW();
// kernel32.SetFileShortNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileTime();
// kernel32.SetFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileValidData();
// kernel32.SetFileValidData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFirmwareEnvironmentVariableA();
// kernel32.SetFirmwareEnvironmentVariableA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFirmwareEnvironmentVariableExA();
// kernel32.SetFirmwareEnvironmentVariableExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFirmwareEnvironmentVariableExW();
// kernel32.SetFirmwareEnvironmentVariableExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFirmwareEnvironmentVariableW();
// kernel32.SetFirmwareEnvironmentVariableW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetHandleCount();
// kernel32.SetHandleCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetHandleInformation();
// kernel32.SetHandleInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetInformationJobObject();
// kernel32.SetInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetIoRateControlInformationJobObject();
// kernel32.SetIoRateControlInformationJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLastConsoleEventActive();
// kernel32.SetLastConsoleEventActive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLastError();
// kernel32.SetLastError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLocalPrimaryComputerNameA();
// kernel32.SetLocalPrimaryComputerNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLocalPrimaryComputerNameW();
// kernel32.SetLocalPrimaryComputerNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLocalTime();
// kernel32.SetLocalTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLocaleInfoA();
// kernel32.SetLocaleInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetLocaleInfoW();
// kernel32.SetLocaleInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMailslotInfo();
// kernel32.SetMailslotInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetMessageWaitingIndicator();
// kernel32.SetMessageWaitingIndicator = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedPipeAttribute();
// kernel32.SetNamedPipeAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedPipeHandleState();
// kernel32.SetNamedPipeHandleState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPriorityClass();
// kernel32.SetPriorityClass = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessAffinityMask();
// kernel32.SetProcessAffinityMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessAffinityUpdateMode();
// kernel32.SetProcessAffinityUpdateMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDEPPolicy();
// kernel32.SetProcessDEPPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessDefaultCpuSets();
// kernel32.SetProcessDefaultCpuSets = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessInformation();
// kernel32.SetProcessInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessMitigationPolicy();
// kernel32.SetProcessMitigationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessPreferredUILanguages();
// kernel32.SetProcessPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessPriorityBoost();
// kernel32.SetProcessPriorityBoost = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessShutdownParameters();
// kernel32.SetProcessShutdownParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessWorkingSetSize();
// kernel32.SetProcessWorkingSetSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProcessWorkingSetSizeEx();
// kernel32.SetProcessWorkingSetSizeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetProtectedPolicy();
// kernel32.SetProtectedPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSearchPathMode();
// kernel32.SetSearchPathMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetStdHandle();
// kernel32.SetStdHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetStdHandleEx();
// kernel32.SetStdHandleEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemFileCacheSize();
// kernel32.SetSystemFileCacheSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemPowerState();
// kernel32.SetSystemPowerState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemTime();
// kernel32.SetSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSystemTimeAdjustment();
// kernel32.SetSystemTimeAdjustment = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTapeParameters();
// kernel32.SetTapeParameters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTapePosition();
// kernel32.SetTapePosition = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTermsrvAppInstallMode();
// kernel32.SetTermsrvAppInstallMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadAffinityMask();
// kernel32.SetThreadAffinityMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadContext();
// kernel32.SetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadErrorMode();
// kernel32.SetThreadErrorMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadExecutionState();
// kernel32.SetThreadExecutionState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadGroupAffinity();
// kernel32.SetThreadGroupAffinity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadIdealProcessor();
// kernel32.SetThreadIdealProcessor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadIdealProcessorEx();
// kernel32.SetThreadIdealProcessorEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadInformation();
// kernel32.SetThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadLocale();
// kernel32.SetThreadLocale = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadPreferredUILanguages();
// kernel32.SetThreadPreferredUILanguages = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadPriority();
// kernel32.SetThreadPriority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadPriorityBoost();
// kernel32.SetThreadPriorityBoost = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadSelectedCpuSets();
// kernel32.SetThreadSelectedCpuSets = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadStackGuarantee();
// kernel32.SetThreadStackGuarantee = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadToken();
// kernel32.SetThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadUILanguage();
// kernel32.SetThreadUILanguage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolStackInformation();
// kernel32.SetThreadpoolStackInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolThreadMaximum();
// kernel32.SetThreadpoolThreadMaximum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolThreadMinimum();
// kernel32.SetThreadpoolThreadMinimum = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolTimer();
// kernel32.SetThreadpoolTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolTimerEx();
// kernel32.SetThreadpoolTimerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolWait();
// kernel32.SetThreadpoolWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadpoolWaitEx();
// kernel32.SetThreadpoolWaitEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTimeZoneInformation();
// kernel32.SetTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTimerQueueTimer();
// kernel32.SetTimerQueueTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUmsThreadInformation();
// kernel32.SetUmsThreadInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUnhandledExceptionFilter();
// kernel32.SetUnhandledExceptionFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserGeoID();
// kernel32.SetUserGeoID = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVDMCurrentDirectories();
// kernel32.SetVDMCurrentDirectories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVolumeLabelA();
// kernel32.SetVolumeLabelA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVolumeLabelW();
// kernel32.SetVolumeLabelW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVolumeMountPointA();
// kernel32.SetVolumeMountPointA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVolumeMountPointW();
// kernel32.SetVolumeMountPointW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetVolumeMountPointWStub();
// kernel32.SetVolumeMountPointWStub = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWaitableTimer();
// kernel32.SetWaitableTimer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetWaitableTimerEx();
// kernel32.SetWaitableTimerEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetXStateFeaturesMask();
// kernel32.SetXStateFeaturesMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetupComm();
// kernel32.SetupComm = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ShowConsoleCursor();
// kernel32.ShowConsoleCursor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SignalObjectAndWait();
// kernel32.SignalObjectAndWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SizeofResource();
// kernel32.SizeofResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Sleep();
// kernel32.Sleep = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SleepConditionVariableCS();
// kernel32.SleepConditionVariableCS = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SleepConditionVariableSRW();
// kernel32.SleepConditionVariableSRW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SleepEx();
// kernel32.SleepEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SortCloseHandle();
// kernel32.SortCloseHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SortGetHandle();
// kernel32.SortGetHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartThreadpoolIo();
// kernel32.StartThreadpoolIo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SubmitThreadpoolWork();
// kernel32.SubmitThreadpoolWork = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SuspendThread();
// kernel32.SuspendThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwitchToFiber();
// kernel32.SwitchToFiber = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SwitchToThread();
// kernel32.SwitchToThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemTimeToFileTime();
// kernel32.SystemTimeToFileTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemTimeToTzSpecificLocalTime();
// kernel32.SystemTimeToTzSpecificLocalTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemTimeToTzSpecificLocalTimeEx();
// kernel32.SystemTimeToTzSpecificLocalTimeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TerminateJobObject();
// kernel32.TerminateJobObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TerminateProcess();
// kernel32.TerminateProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TerminateThread();
// kernel32.TerminateThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvAppInstallMode();
// kernel32.TermsrvAppInstallMode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvConvertSysRootToUserDir();
// kernel32.TermsrvConvertSysRootToUserDir = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvCreateRegEntry();
// kernel32.TermsrvCreateRegEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvDeleteKey();
// kernel32.TermsrvDeleteKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvDeleteValue();
// kernel32.TermsrvDeleteValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvGetPreSetValue();
// kernel32.TermsrvGetPreSetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvGetWindowsDirectoryA();
// kernel32.TermsrvGetWindowsDirectoryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvGetWindowsDirectoryW();
// kernel32.TermsrvGetWindowsDirectoryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvOpenRegEntry();
// kernel32.TermsrvOpenRegEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvOpenUserClasses();
// kernel32.TermsrvOpenUserClasses = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvRestoreKey();
// kernel32.TermsrvRestoreKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvSetKeySecurity();
// kernel32.TermsrvSetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvSetValueKey();
// kernel32.TermsrvSetValueKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TermsrvSyncUserIniFileExt();
// kernel32.TermsrvSyncUserIniFileExt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Thread32First();
// kernel32.Thread32First = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Thread32Next();
// kernel32.Thread32Next = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TlsAlloc();
// kernel32.TlsAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TlsFree();
// kernel32.TlsFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TlsGetValue();
// kernel32.TlsGetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TlsSetValue();
// kernel32.TlsSetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Toolhelp32ReadProcessMemory();
// kernel32.Toolhelp32ReadProcessMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TransactNamedPipe();
// kernel32.TransactNamedPipe = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TransmitCommChar();
// kernel32.TransmitCommChar = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TryAcquireSRWLockExclusive();
// kernel32.TryAcquireSRWLockExclusive = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TryAcquireSRWLockShared();
// kernel32.TryAcquireSRWLockShared = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TryEnterCriticalSection();
// kernel32.TryEnterCriticalSection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrySubmitThreadpoolCallback();
// kernel32.TrySubmitThreadpoolCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TzSpecificLocalTimeToSystemTime();
// kernel32.TzSpecificLocalTimeToSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TzSpecificLocalTimeToSystemTimeEx();
// kernel32.TzSpecificLocalTimeToSystemTimeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UTRegister();
// kernel32.UTRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UTUnRegister();
// kernel32.UTUnRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UmsThreadYield();
// kernel32.UmsThreadYield = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnhandledExceptionFilter();
// kernel32.UnhandledExceptionFilter = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnlockFile();
// kernel32.UnlockFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnlockFileEx();
// kernel32.UnlockFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnmapViewOfFile();
// kernel32.UnmapViewOfFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnmapViewOfFileEx();
// kernel32.UnmapViewOfFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterApplicationRecoveryCallback();
// kernel32.UnregisterApplicationRecoveryCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterApplicationRestart();
// kernel32.UnregisterApplicationRestart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterBadMemoryNotification();
// kernel32.UnregisterBadMemoryNotification = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterConsoleIME();
// kernel32.UnregisterConsoleIME = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterWait();
// kernel32.UnregisterWait = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterWaitEx();
// kernel32.UnregisterWaitEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterWaitUntilOOBECompleted();
// kernel32.UnregisterWaitUntilOOBECompleted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateCalendarDayOfWeek();
// kernel32.UpdateCalendarDayOfWeek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateProcThreadAttribute();
// kernel32.UpdateProcThreadAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateResourceA();
// kernel32.UpdateResourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateResourceW();
// kernel32.UpdateResourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VDMConsoleOperation();
// kernel32.VDMConsoleOperation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VDMOperationStarted();
// kernel32.VDMOperationStarted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerLanguageNameA();
// kernel32.VerLanguageNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerLanguageNameW();
// kernel32.VerLanguageNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerSetConditionMask();
// kernel32.VerSetConditionMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerifyConsoleIoHandle();
// kernel32.VerifyConsoleIoHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerifyScripts();
// kernel32.VerifyScripts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerifyVersionInfoA();
// kernel32.VerifyVersionInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VerifyVersionInfoW();
// kernel32.VerifyVersionInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualAlloc();
// kernel32.VirtualAlloc = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualAllocEx();
// kernel32.VirtualAllocEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualAllocExNuma();
// kernel32.VirtualAllocExNuma = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualFree();
// kernel32.VirtualFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualFreeEx();
// kernel32.VirtualFreeEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualLock();
// kernel32.VirtualLock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualProtect();
// kernel32.VirtualProtect = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualProtectEx();
// kernel32.VirtualProtectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualQuery();
// kernel32.VirtualQuery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualQueryEx();
// kernel32.VirtualQueryEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall VirtualUnlock();
// kernel32.VirtualUnlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WTSGetActiveConsoleSessionId();
// kernel32.WTSGetActiveConsoleSessionId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitCommEvent();
// kernel32.WaitCommEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForDebugEvent();
// kernel32.WaitForDebugEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForDebugEventEx();
// kernel32.WaitForDebugEventEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForMultipleObjects();
// kernel32.WaitForMultipleObjects = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForMultipleObjectsEx();
// kernel32.WaitForMultipleObjectsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForSingleObject();
// kernel32.WaitForSingleObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForSingleObjectEx();
// kernel32.WaitForSingleObjectEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForThreadpoolIoCallbacks();
// kernel32.WaitForThreadpoolIoCallbacks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForThreadpoolTimerCallbacks();
// kernel32.WaitForThreadpoolTimerCallbacks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForThreadpoolWaitCallbacks();
// kernel32.WaitForThreadpoolWaitCallbacks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitForThreadpoolWorkCallbacks();
// kernel32.WaitForThreadpoolWorkCallbacks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitNamedPipeA();
// kernel32.WaitNamedPipeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitNamedPipeW();
// kernel32.WaitNamedPipeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WakeAllConditionVariable();
// kernel32.WakeAllConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WakeConditionVariable();
// kernel32.WakeConditionVariable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerGetFlags();
// kernel32.WerGetFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerGetFlagsWorker();
// kernel32.WerGetFlagsWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterFile();
// kernel32.WerRegisterFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterFileWorker();
// kernel32.WerRegisterFileWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterMemoryBlock();
// kernel32.WerRegisterMemoryBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterMemoryBlockWorker();
// kernel32.WerRegisterMemoryBlockWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterRuntimeExceptionModule();
// kernel32.WerRegisterRuntimeExceptionModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerRegisterRuntimeExceptionModuleWorker();
// kernel32.WerRegisterRuntimeExceptionModuleWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerSetFlags();
// kernel32.WerSetFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerSetFlagsWorker();
// kernel32.WerSetFlagsWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterFile();
// kernel32.WerUnregisterFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterFileWorker();
// kernel32.WerUnregisterFileWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterMemoryBlock();
// kernel32.WerUnregisterMemoryBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterMemoryBlockWorker();
// kernel32.WerUnregisterMemoryBlockWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterRuntimeExceptionModule();
// kernel32.WerUnregisterRuntimeExceptionModule = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerUnregisterRuntimeExceptionModuleWorker();
// kernel32.WerUnregisterRuntimeExceptionModuleWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpCleanupMessageMapping();
// kernel32.WerpCleanupMessageMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpGetDebugger();
// kernel32.WerpGetDebugger = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpInitiateRemoteRecovery();
// kernel32.WerpInitiateRemoteRecovery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpLaunchAeDebug();
// kernel32.WerpLaunchAeDebug = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpNotifyLoadStringResource();
// kernel32.WerpNotifyLoadStringResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpNotifyLoadStringResourceEx();
// kernel32.WerpNotifyLoadStringResourceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpNotifyLoadStringResourceWorker();
// kernel32.WerpNotifyLoadStringResourceWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpNotifyUseStringResource();
// kernel32.WerpNotifyUseStringResource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpNotifyUseStringResourceWorker();
// kernel32.WerpNotifyUseStringResourceWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WerpStringLookup();
// kernel32.WerpStringLookup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WideCharToMultiByte();
// kernel32.WideCharToMultiByte = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WinExec();
// kernel32.WinExec = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64DisableWow64FsRedirection();
// kernel32.Wow64DisableWow64FsRedirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64EnableWow64FsRedirection();
// kernel32.Wow64EnableWow64FsRedirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64GetThreadContext();
// kernel32.Wow64GetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64GetThreadSelectorEntry();
// kernel32.Wow64GetThreadSelectorEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64RevertWow64FsRedirection();
// kernel32.Wow64RevertWow64FsRedirection = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64SetThreadContext();
// kernel32.Wow64SetThreadContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall Wow64SuspendThread();
// kernel32.Wow64SuspendThread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleA();
// kernel32.WriteConsoleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleInputA();
// kernel32.WriteConsoleInputA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleInputVDMA();
// kernel32.WriteConsoleInputVDMA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleInputVDMW();
// kernel32.WriteConsoleInputVDMW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleInputW();
// kernel32.WriteConsoleInputW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleOutputA();
// kernel32.WriteConsoleOutputA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleOutputAttribute();
// kernel32.WriteConsoleOutputAttribute = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleOutputCharacterA();
// kernel32.WriteConsoleOutputCharacterA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleOutputCharacterW();
// kernel32.WriteConsoleOutputCharacterW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleOutputW();
// kernel32.WriteConsoleOutputW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteConsoleW();
// kernel32.WriteConsoleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteFile();
// kernel32.WriteFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteFileEx();
// kernel32.WriteFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteFileGather();
// kernel32.WriteFileGather = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileSectionA();
// kernel32.WritePrivateProfileSectionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileSectionW();
// kernel32.WritePrivateProfileSectionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileStringA();
// kernel32.WritePrivateProfileStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileStringW();
// kernel32.WritePrivateProfileStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileStructA();
// kernel32.WritePrivateProfileStructA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WritePrivateProfileStructW();
// kernel32.WritePrivateProfileStructW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteProcessMemory();
// kernel32.WriteProcessMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteProfileSectionA();
// kernel32.WriteProfileSectionA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteProfileSectionW();
// kernel32.WriteProfileSectionW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteProfileStringA();
// kernel32.WriteProfileStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteProfileStringW();
// kernel32.WriteProfileStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteTapemark();
// kernel32.WriteTapemark = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZombifyActCtx();
// kernel32.ZombifyActCtx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ZombifyActCtxWorker();
// kernel32.ZombifyActCtxWorker = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __C_specific_handler();
// kernel32.__C_specific_handler = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __chkstk();
// kernel32.__chkstk = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall __misaligned_access();
// kernel32.__misaligned_access = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _hread();
// kernel32._hread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _hwrite();
// kernel32._hwrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lclose();
// kernel32._lclose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lcreat();
// kernel32._lcreat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _llseek();
// kernel32._llseek = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _local_unwind();
// kernel32._local_unwind = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lopen();
// kernel32._lopen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lread();
// kernel32._lread = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall _lwrite();
// kernel32._lwrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcat();
// kernel32.lstrcat = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcatA();
// kernel32.lstrcatA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcatW();
// kernel32.lstrcatW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmp();
// kernel32.lstrcmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmpA();
// kernel32.lstrcmpA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmpW();
// kernel32.lstrcmpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmpi();
// kernel32.lstrcmpi = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmpiA();
// kernel32.lstrcmpiA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcmpiW();
// kernel32.lstrcmpiW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpy();
// kernel32.lstrcpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpyA();
// kernel32.lstrcpyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpyW();
// kernel32.lstrcpyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpyn();
// kernel32.lstrcpyn = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpynA();
// kernel32.lstrcpynA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrcpynW();
// kernel32.lstrcpynW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrlen();
// kernel32.lstrlen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrlenA();
// kernel32.lstrlenA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall lstrlenW();
// kernel32.lstrlenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall timeBeginPeriod();
// kernel32.timeBeginPeriod = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall timeEndPeriod();
// kernel32.timeEndPeriod = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall timeGetDevCaps();
// kernel32.timeGetDevCaps = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall timeGetSystemTime();
// kernel32.timeGetSystemTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall timeGetTime();
// kernel32.timeGetTime = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_lstrcmpW();
// kernel32.uaw_lstrcmpW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_lstrcmpiW();
// kernel32.uaw_lstrcmpiW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_lstrlenW();
// kernel32.uaw_lstrlenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_wcschr();
// kernel32.uaw_wcschr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_wcscpy();
// kernel32.uaw_wcscpy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_wcsicmp();
// kernel32.uaw_wcsicmp = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_wcslen();
// kernel32.uaw_wcslen = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall uaw_wcsrchr();
// kernel32.uaw_wcsrchr = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// exports
module.exports = kernel32;