// javascript ffi interface for advapi32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');

const ffi = require('ffi');

// init
var advapi32 = ffi.Library( 'advapi32.dll' ,{} );

// 
// int __stdcall A_SHAFinal();
// advapi32.A_SHAFinal = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall A_SHAInit();
// advapi32.A_SHAInit = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall A_SHAUpdate();
// advapi32.A_SHAUpdate = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AbortSystemShutdownA();
// advapi32.AbortSystemShutdownA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AbortSystemShutdownW();
// advapi32.AbortSystemShutdownW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheck();
// advapi32.AccessCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckAndAuditAlarmA();
// advapi32.AccessCheckAndAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckAndAuditAlarmW();
// advapi32.AccessCheckAndAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByType();
// advapi32.AccessCheckByType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeAndAuditAlarmA();
// advapi32.AccessCheckByTypeAndAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeAndAuditAlarmW();
// advapi32.AccessCheckByTypeAndAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeResultList();
// advapi32.AccessCheckByTypeResultList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeResultListAndAuditAlarmA();
// advapi32.AccessCheckByTypeResultListAndAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeResultListAndAuditAlarmByHandleA();
// advapi32.AccessCheckByTypeResultListAndAuditAlarmByHandleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeResultListAndAuditAlarmByHandleW();
// advapi32.AccessCheckByTypeResultListAndAuditAlarmByHandleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AccessCheckByTypeResultListAndAuditAlarmW();
// advapi32.AccessCheckByTypeResultListAndAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessAllowedAce();
// advapi32.AddAccessAllowedAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessAllowedAceEx();
// advapi32.AddAccessAllowedAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessAllowedObjectAce();
// advapi32.AddAccessAllowedObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessDeniedAce();
// advapi32.AddAccessDeniedAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessDeniedAceEx();
// advapi32.AddAccessDeniedAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAccessDeniedObjectAce();
// advapi32.AddAccessDeniedObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAce();
// advapi32.AddAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAuditAccessAce();
// advapi32.AddAuditAccessAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAuditAccessAceEx();
// advapi32.AddAuditAccessAceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddAuditAccessObjectAce();
// advapi32.AddAuditAccessObjectAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddConditionalAce();
// advapi32.AddConditionalAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddMandatoryAce();
// advapi32.AddMandatoryAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddUsersToEncryptedFile();
// advapi32.AddUsersToEncryptedFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AddUsersToEncryptedFileEx();
// advapi32.AddUsersToEncryptedFileEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustTokenGroups();
// advapi32.AdjustTokenGroups = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AdjustTokenPrivileges();
// advapi32.AdjustTokenPrivileges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllocateAndInitializeSid();
// advapi32.AllocateAndInitializeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AllocateLocallyUniqueId();
// advapi32.AllocateLocallyUniqueId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AreAllAccessesGranted();
// advapi32.AreAllAccessesGranted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AreAnyAccessesGranted();
// advapi32.AreAnyAccessesGranted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditComputeEffectivePolicyBySid();
// advapi32.AuditComputeEffectivePolicyBySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditComputeEffectivePolicyByToken();
// advapi32.AuditComputeEffectivePolicyByToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditEnumerateCategories();
// advapi32.AuditEnumerateCategories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditEnumeratePerUserPolicy();
// advapi32.AuditEnumeratePerUserPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditEnumerateSubCategories();
// advapi32.AuditEnumerateSubCategories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditFree();
// advapi32.AuditFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupCategoryGuidFromCategoryId();
// advapi32.AuditLookupCategoryGuidFromCategoryId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupCategoryIdFromCategoryGuid();
// advapi32.AuditLookupCategoryIdFromCategoryGuid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupCategoryNameA();
// advapi32.AuditLookupCategoryNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupCategoryNameW();
// advapi32.AuditLookupCategoryNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupSubCategoryNameA();
// advapi32.AuditLookupSubCategoryNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditLookupSubCategoryNameW();
// advapi32.AuditLookupSubCategoryNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditQueryGlobalSaclA();
// advapi32.AuditQueryGlobalSaclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditQueryGlobalSaclW();
// advapi32.AuditQueryGlobalSaclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditQueryPerUserPolicy();
// advapi32.AuditQueryPerUserPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditQuerySecurity();
// advapi32.AuditQuerySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditQuerySystemPolicy();
// advapi32.AuditQuerySystemPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditSetGlobalSaclA();
// advapi32.AuditSetGlobalSaclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditSetGlobalSaclW();
// advapi32.AuditSetGlobalSaclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditSetPerUserPolicy();
// advapi32.AuditSetPerUserPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditSetSecurity();
// advapi32.AuditSetSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall AuditSetSystemPolicy();
// advapi32.AuditSetSystemPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BackupEventLogA();
// advapi32.BackupEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BackupEventLogW();
// advapi32.BackupEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegCloseKey();
// advapi32.BaseRegCloseKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegCreateKey();
// advapi32.BaseRegCreateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegDeleteKeyEx();
// advapi32.BaseRegDeleteKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegDeleteValue();
// advapi32.BaseRegDeleteValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegFlushKey();
// advapi32.BaseRegFlushKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegGetVersion();
// advapi32.BaseRegGetVersion = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegLoadKey();
// advapi32.BaseRegLoadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegOpenKey();
// advapi32.BaseRegOpenKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegRestoreKey();
// advapi32.BaseRegRestoreKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegSaveKeyEx();
// advapi32.BaseRegSaveKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegSetKeySecurity();
// advapi32.BaseRegSetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegSetValue();
// advapi32.BaseRegSetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BaseRegUnLoadKey();
// advapi32.BaseRegUnLoadKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildExplicitAccessWithNameA();
// advapi32.BuildExplicitAccessWithNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildExplicitAccessWithNameW();
// advapi32.BuildExplicitAccessWithNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildImpersonateExplicitAccessWithNameA();
// advapi32.BuildImpersonateExplicitAccessWithNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildImpersonateExplicitAccessWithNameW();
// advapi32.BuildImpersonateExplicitAccessWithNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildImpersonateTrusteeA();
// advapi32.BuildImpersonateTrusteeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildImpersonateTrusteeW();
// advapi32.BuildImpersonateTrusteeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildSecurityDescriptorA();
// advapi32.BuildSecurityDescriptorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildSecurityDescriptorW();
// advapi32.BuildSecurityDescriptorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithNameA();
// advapi32.BuildTrusteeWithNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithNameW();
// advapi32.BuildTrusteeWithNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithObjectsAndNameA();
// advapi32.BuildTrusteeWithObjectsAndNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithObjectsAndNameW();
// advapi32.BuildTrusteeWithObjectsAndNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithObjectsAndSidA();
// advapi32.BuildTrusteeWithObjectsAndSidA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithObjectsAndSidW();
// advapi32.BuildTrusteeWithObjectsAndSidW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithSidA();
// advapi32.BuildTrusteeWithSidA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall BuildTrusteeWithSidW();
// advapi32.BuildTrusteeWithSidW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CancelOverlappedAccess();
// advapi32.CancelOverlappedAccess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeServiceConfig2A();
// advapi32.ChangeServiceConfig2A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeServiceConfig2W();
// advapi32.ChangeServiceConfig2W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeServiceConfigA();
// advapi32.ChangeServiceConfigA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ChangeServiceConfigW();
// advapi32.ChangeServiceConfigW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckForHiberboot();
// advapi32.CheckForHiberboot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CheckTokenMembership();
// advapi32.CheckTokenMembership = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearEventLogA();
// advapi32.ClearEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ClearEventLogW();
// advapi32.ClearEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseCodeAuthzLevel();
// advapi32.CloseCodeAuthzLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseEncryptedFileRaw();
// advapi32.CloseEncryptedFileRaw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseEventLog();
// advapi32.CloseEventLog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseServiceHandle();
// advapi32.CloseServiceHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseThreadWaitChainSession();
// advapi32.CloseThreadWaitChainSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CloseTrace();
// advapi32.CloseTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CommandLineFromMsiDescriptor();
// advapi32.CommandLineFromMsiDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ComputeAccessTokenFromCodeAuthzLevel();
// advapi32.ComputeAccessTokenFromCodeAuthzLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlService();
// advapi32.ControlService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlServiceExA();
// advapi32.ControlServiceExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlServiceExW();
// advapi32.ControlServiceExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlTraceA();
// advapi32.ControlTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ControlTraceW();
// advapi32.ControlTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertAccessToSecurityDescriptorA();
// advapi32.ConvertAccessToSecurityDescriptorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertAccessToSecurityDescriptorW();
// advapi32.ConvertAccessToSecurityDescriptorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSDToStringSDDomainW();
// advapi32.ConvertSDToStringSDDomainW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSDToStringSDRootDomainA();
// advapi32.ConvertSDToStringSDRootDomainA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSDToStringSDRootDomainW();
// advapi32.ConvertSDToStringSDRootDomainW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToAccessA();
// advapi32.ConvertSecurityDescriptorToAccessA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToAccessNamedA();
// advapi32.ConvertSecurityDescriptorToAccessNamedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToAccessNamedW();
// advapi32.ConvertSecurityDescriptorToAccessNamedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToAccessW();
// advapi32.ConvertSecurityDescriptorToAccessW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToStringSecurityDescriptorA();
// advapi32.ConvertSecurityDescriptorToStringSecurityDescriptorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSecurityDescriptorToStringSecurityDescriptorW();
// advapi32.ConvertSecurityDescriptorToStringSecurityDescriptorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSidToStringSidA();
// advapi32.ConvertSidToStringSidA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertSidToStringSidW();
// advapi32.ConvertSidToStringSidW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSDToSDDomainA();
// advapi32.ConvertStringSDToSDDomainA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSDToSDDomainW();
// advapi32.ConvertStringSDToSDDomainW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSDToSDRootDomainA();
// advapi32.ConvertStringSDToSDRootDomainA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSDToSDRootDomainW();
// advapi32.ConvertStringSDToSDRootDomainW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSecurityDescriptorToSecurityDescriptorA();
// advapi32.ConvertStringSecurityDescriptorToSecurityDescriptorA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSecurityDescriptorToSecurityDescriptorW();
// advapi32.ConvertStringSecurityDescriptorToSecurityDescriptorW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSidToSidA();
// advapi32.ConvertStringSidToSidA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertStringSidToSidW();
// advapi32.ConvertStringSidToSidW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ConvertToAutoInheritPrivateObjectSecurity();
// advapi32.ConvertToAutoInheritPrivateObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CopySid();
// advapi32.CopySid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateCodeAuthzLevel();
// advapi32.CreateCodeAuthzLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePrivateObjectSecurity();
// advapi32.CreatePrivateObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePrivateObjectSecurityEx();
// advapi32.CreatePrivateObjectSecurityEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreatePrivateObjectSecurityWithMultipleInheritance();
// advapi32.CreatePrivateObjectSecurityWithMultipleInheritance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessAsUserA();
// advapi32.CreateProcessAsUserA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessAsUserW();
// advapi32.CreateProcessAsUserW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessWithLogonW();
// advapi32.CreateProcessWithLogonW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateProcessWithTokenW();
// advapi32.CreateProcessWithTokenW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateRestrictedToken();
// advapi32.CreateRestrictedToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateServiceA();
// advapi32.CreateServiceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateServiceW();
// advapi32.CreateServiceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateTraceInstanceId();
// advapi32.CreateTraceInstanceId = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CreateWellKnownSid();
// advapi32.CreateWellKnownSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredBackupCredentials();
// advapi32.CredBackupCredentials = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredDeleteA();
// advapi32.CredDeleteA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredDeleteW();
// advapi32.CredDeleteW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredEncryptAndMarshalBinaryBlob();
// advapi32.CredEncryptAndMarshalBinaryBlob = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredEnumerateA();
// advapi32.CredEnumerateA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredEnumerateW();
// advapi32.CredEnumerateW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredFindBestCredentialA();
// advapi32.CredFindBestCredentialA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredFindBestCredentialW();
// advapi32.CredFindBestCredentialW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredFree();
// advapi32.CredFree = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredGetSessionTypes();
// advapi32.CredGetSessionTypes = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredGetTargetInfoA();
// advapi32.CredGetTargetInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredGetTargetInfoW();
// advapi32.CredGetTargetInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredIsMarshaledCredentialA();
// advapi32.CredIsMarshaledCredentialA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredIsMarshaledCredentialW();
// advapi32.CredIsMarshaledCredentialW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredIsProtectedA();
// advapi32.CredIsProtectedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredIsProtectedW();
// advapi32.CredIsProtectedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredMarshalCredentialA();
// advapi32.CredMarshalCredentialA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredMarshalCredentialW();
// advapi32.CredMarshalCredentialW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredProfileLoaded();
// advapi32.CredProfileLoaded = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredProfileLoadedEx();
// advapi32.CredProfileLoadedEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredProfileUnloaded();
// advapi32.CredProfileUnloaded = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredProtectA();
// advapi32.CredProtectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredProtectW();
// advapi32.CredProtectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredReadA();
// advapi32.CredReadA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredReadByTokenHandle();
// advapi32.CredReadByTokenHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredReadDomainCredentialsA();
// advapi32.CredReadDomainCredentialsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredReadDomainCredentialsW();
// advapi32.CredReadDomainCredentialsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredReadW();
// advapi32.CredReadW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredRenameA();
// advapi32.CredRenameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredRenameW();
// advapi32.CredRenameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredRestoreCredentials();
// advapi32.CredRestoreCredentials = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredUnmarshalCredentialA();
// advapi32.CredUnmarshalCredentialA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredUnmarshalCredentialW();
// advapi32.CredUnmarshalCredentialW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredUnprotectA();
// advapi32.CredUnprotectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredUnprotectW();
// advapi32.CredUnprotectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredWriteA();
// advapi32.CredWriteA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredWriteDomainCredentialsA();
// advapi32.CredWriteDomainCredentialsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredWriteDomainCredentialsW();
// advapi32.CredWriteDomainCredentialsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredWriteW();
// advapi32.CredWriteW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpConvertCredential();
// advapi32.CredpConvertCredential = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpConvertOneCredentialSize();
// advapi32.CredpConvertOneCredentialSize = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpConvertTargetInfo();
// advapi32.CredpConvertTargetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpDecodeCredential();
// advapi32.CredpDecodeCredential = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpEncodeCredential();
// advapi32.CredpEncodeCredential = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CredpEncodeSecret();
// advapi32.CredpEncodeSecret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptAcquireContextA();
// advapi32.CryptAcquireContextA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptAcquireContextW();
// advapi32.CryptAcquireContextW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptContextAddRef();
// advapi32.CryptContextAddRef = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptCreateHash();
// advapi32.CryptCreateHash = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDecrypt();
// advapi32.CryptDecrypt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDeriveKey();
// advapi32.CryptDeriveKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDestroyHash();
// advapi32.CryptDestroyHash = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDestroyKey();
// advapi32.CryptDestroyKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDuplicateHash();
// advapi32.CryptDuplicateHash = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptDuplicateKey();
// advapi32.CryptDuplicateKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptEncrypt();
// advapi32.CryptEncrypt = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptEnumProviderTypesA();
// advapi32.CryptEnumProviderTypesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptEnumProviderTypesW();
// advapi32.CryptEnumProviderTypesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptEnumProvidersA();
// advapi32.CryptEnumProvidersA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptEnumProvidersW();
// advapi32.CryptEnumProvidersW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptExportKey();
// advapi32.CryptExportKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGenKey();
// advapi32.CryptGenKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGenRandom();
// advapi32.CryptGenRandom = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetDefaultProviderA();
// advapi32.CryptGetDefaultProviderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetDefaultProviderW();
// advapi32.CryptGetDefaultProviderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetHashParam();
// advapi32.CryptGetHashParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetKeyParam();
// advapi32.CryptGetKeyParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetProvParam();
// advapi32.CryptGetProvParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptGetUserKey();
// advapi32.CryptGetUserKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptHashData();
// advapi32.CryptHashData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptHashSessionKey();
// advapi32.CryptHashSessionKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptImportKey();
// advapi32.CryptImportKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptReleaseContext();
// advapi32.CryptReleaseContext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetHashParam();
// advapi32.CryptSetHashParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetKeyParam();
// advapi32.CryptSetKeyParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetProvParam();
// advapi32.CryptSetProvParam = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetProviderA();
// advapi32.CryptSetProviderA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetProviderExA();
// advapi32.CryptSetProviderExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetProviderExW();
// advapi32.CryptSetProviderExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSetProviderW();
// advapi32.CryptSetProviderW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSignHashA();
// advapi32.CryptSignHashA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptSignHashW();
// advapi32.CryptSignHashW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptVerifySignatureA();
// advapi32.CryptVerifySignatureA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CryptVerifySignatureW();
// advapi32.CryptVerifySignatureW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall CveEventWrite();
// advapi32.CveEventWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DecryptFileA();
// advapi32.DecryptFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DecryptFileW();
// advapi32.DecryptFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteAce();
// advapi32.DeleteAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeleteService();
// advapi32.DeleteService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DeregisterEventSource();
// advapi32.DeregisterEventSource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DestroyPrivateObjectSecurity();
// advapi32.DestroyPrivateObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateEncryptionInfoFile();
// advapi32.DuplicateEncryptionInfoFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateToken();
// advapi32.DuplicateToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall DuplicateTokenEx();
// advapi32.DuplicateTokenEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfBackupEventLogFileA();
// advapi32.ElfBackupEventLogFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfBackupEventLogFileW();
// advapi32.ElfBackupEventLogFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfChangeNotify();
// advapi32.ElfChangeNotify = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfClearEventLogFileA();
// advapi32.ElfClearEventLogFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfClearEventLogFileW();
// advapi32.ElfClearEventLogFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfCloseEventLog();
// advapi32.ElfCloseEventLog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfDeregisterEventSource();
// advapi32.ElfDeregisterEventSource = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfFlushEventLog();
// advapi32.ElfFlushEventLog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfNumberOfRecords();
// advapi32.ElfNumberOfRecords = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfOldestRecord();
// advapi32.ElfOldestRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfOpenBackupEventLogA();
// advapi32.ElfOpenBackupEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfOpenBackupEventLogW();
// advapi32.ElfOpenBackupEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfOpenEventLogA();
// advapi32.ElfOpenEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfOpenEventLogW();
// advapi32.ElfOpenEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfReadEventLogA();
// advapi32.ElfReadEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfReadEventLogW();
// advapi32.ElfReadEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfRegisterEventSourceA();
// advapi32.ElfRegisterEventSourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfRegisterEventSourceW();
// advapi32.ElfRegisterEventSourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfReportEventA();
// advapi32.ElfReportEventA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfReportEventAndSourceW();
// advapi32.ElfReportEventAndSourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ElfReportEventW();
// advapi32.ElfReportEventW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableTrace();
// advapi32.EnableTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableTraceEx();
// advapi32.EnableTraceEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnableTraceEx2();
// advapi32.EnableTraceEx2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncryptFileA();
// advapi32.EncryptFileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncryptFileW();
// advapi32.EncryptFileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncryptedFileKeyInfo();
// advapi32.EncryptedFileKeyInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EncryptionDisable();
// advapi32.EncryptionDisable = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDependentServicesA();
// advapi32.EnumDependentServicesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDependentServicesW();
// advapi32.EnumDependentServicesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumDynamicTimeZoneInformation();
// advapi32.EnumDynamicTimeZoneInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumServiceGroupW();
// advapi32.EnumServiceGroupW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumServicesStatusA();
// advapi32.EnumServicesStatusA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumServicesStatusExA();
// advapi32.EnumServicesStatusExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumServicesStatusExW();
// advapi32.EnumServicesStatusExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumServicesStatusW();
// advapi32.EnumServicesStatusW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateTraceGuids();
// advapi32.EnumerateTraceGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EnumerateTraceGuidsEx();
// advapi32.EnumerateTraceGuidsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EqualDomainSid();
// advapi32.EqualDomainSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EqualPrefixSid();
// advapi32.EqualPrefixSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EqualSid();
// advapi32.EqualSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventAccessControl();
// advapi32.EventAccessControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventAccessQuery();
// advapi32.EventAccessQuery = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventAccessRemove();
// advapi32.EventAccessRemove = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventActivityIdControl();
// advapi32.EventActivityIdControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventEnabled();
// advapi32.EventEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventProviderEnabled();
// advapi32.EventProviderEnabled = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventRegister();
// advapi32.EventRegister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventSetInformation();
// advapi32.EventSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventUnregister();
// advapi32.EventUnregister = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWrite();
// advapi32.EventWrite = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWriteEndScenario();
// advapi32.EventWriteEndScenario = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWriteEx();
// advapi32.EventWriteEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWriteStartScenario();
// advapi32.EventWriteStartScenario = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWriteString();
// advapi32.EventWriteString = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall EventWriteTransfer();
// advapi32.EventWriteTransfer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FileEncryptionStatusA();
// advapi32.FileEncryptionStatusA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FileEncryptionStatusW();
// advapi32.FileEncryptionStatusW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FindFirstFreeAce();
// advapi32.FindFirstFreeAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushEfsCache();
// advapi32.FlushEfsCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushTraceA();
// advapi32.FlushTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FlushTraceW();
// advapi32.FlushTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeEncryptedFileKeyInfo();
// advapi32.FreeEncryptedFileKeyInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeEncryptedFileMetadata();
// advapi32.FreeEncryptedFileMetadata = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeEncryptionCertificateHashList();
// advapi32.FreeEncryptionCertificateHashList = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeInheritedFromArray();
// advapi32.FreeInheritedFromArray = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall FreeSid();
// advapi32.FreeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAccessPermissionsForObjectA();
// advapi32.GetAccessPermissionsForObjectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAccessPermissionsForObjectW();
// advapi32.GetAccessPermissionsForObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAce();
// advapi32.GetAce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAclInformation();
// advapi32.GetAclInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAuditedPermissionsFromAclA();
// advapi32.GetAuditedPermissionsFromAclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetAuditedPermissionsFromAclW();
// advapi32.GetAuditedPermissionsFromAclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentHwProfileA();
// advapi32.GetCurrentHwProfileA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetCurrentHwProfileW();
// advapi32.GetCurrentHwProfileW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetDynamicTimeZoneInformationEffectiveYears();
// advapi32.GetDynamicTimeZoneInformationEffectiveYears = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEffectiveRightsFromAclA();
// advapi32.GetEffectiveRightsFromAclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEffectiveRightsFromAclW();
// advapi32.GetEffectiveRightsFromAclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEncryptedFileMetadata();
// advapi32.GetEncryptedFileMetadata = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetEventLogInformation();
// advapi32.GetEventLogInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExplicitEntriesFromAclA();
// advapi32.GetExplicitEntriesFromAclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetExplicitEntriesFromAclW();
// advapi32.GetExplicitEntriesFromAclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileSecurityA();
// advapi32.GetFileSecurityA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetFileSecurityW();
// advapi32.GetFileSecurityW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInformationCodeAuthzLevelW();
// advapi32.GetInformationCodeAuthzLevelW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInformationCodeAuthzPolicyW();
// advapi32.GetInformationCodeAuthzPolicyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInheritanceSourceA();
// advapi32.GetInheritanceSourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetInheritanceSourceW();
// advapi32.GetInheritanceSourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetKernelObjectSecurity();
// advapi32.GetKernelObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLengthSid();
// advapi32.GetLengthSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocalManagedApplicationData();
// advapi32.GetLocalManagedApplicationData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetLocalManagedApplications();
// advapi32.GetLocalManagedApplications = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetManagedApplicationCategories();
// advapi32.GetManagedApplicationCategories = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetManagedApplications();
// advapi32.GetManagedApplications = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMultipleTrusteeA();
// advapi32.GetMultipleTrusteeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMultipleTrusteeOperationA();
// advapi32.GetMultipleTrusteeOperationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMultipleTrusteeOperationW();
// advapi32.GetMultipleTrusteeOperationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetMultipleTrusteeW();
// advapi32.GetMultipleTrusteeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedSecurityInfoA();
// advapi32.GetNamedSecurityInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedSecurityInfoExA();
// advapi32.GetNamedSecurityInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedSecurityInfoExW();
// advapi32.GetNamedSecurityInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNamedSecurityInfoW();
// advapi32.GetNamedSecurityInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetNumberOfEventLogRecords();
// advapi32.GetNumberOfEventLogRecords = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOldestEventLogRecord();
// advapi32.GetOldestEventLogRecord = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetOverlappedAccessResults();
// advapi32.GetOverlappedAccessResults = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetPrivateObjectSecurity();
// advapi32.GetPrivateObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorControl();
// advapi32.GetSecurityDescriptorControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorDacl();
// advapi32.GetSecurityDescriptorDacl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorGroup();
// advapi32.GetSecurityDescriptorGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorLength();
// advapi32.GetSecurityDescriptorLength = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorOwner();
// advapi32.GetSecurityDescriptorOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorRMControl();
// advapi32.GetSecurityDescriptorRMControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityDescriptorSacl();
// advapi32.GetSecurityDescriptorSacl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityInfo();
// advapi32.GetSecurityInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityInfoExA();
// advapi32.GetSecurityInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSecurityInfoExW();
// advapi32.GetSecurityInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetServiceDisplayNameA();
// advapi32.GetServiceDisplayNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetServiceDisplayNameW();
// advapi32.GetServiceDisplayNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetServiceKeyNameA();
// advapi32.GetServiceKeyNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetServiceKeyNameW();
// advapi32.GetServiceKeyNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSidIdentifierAuthority();
// advapi32.GetSidIdentifierAuthority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSidLengthRequired();
// advapi32.GetSidLengthRequired = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSidSubAuthority();
// advapi32.GetSidSubAuthority = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetSidSubAuthorityCount();
// advapi32.GetSidSubAuthorityCount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetStringConditionFromBinary();
// advapi32.GetStringConditionFromBinary = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetThreadWaitChain();
// advapi32.GetThreadWaitChain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTokenInformation();
// advapi32.GetTokenInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTraceEnableFlags();
// advapi32.GetTraceEnableFlags = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTraceEnableLevel();
// advapi32.GetTraceEnableLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTraceLoggerHandle();
// advapi32.GetTraceLoggerHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeFormA();
// advapi32.GetTrusteeFormA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeFormW();
// advapi32.GetTrusteeFormW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeNameA();
// advapi32.GetTrusteeNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeNameW();
// advapi32.GetTrusteeNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeTypeA();
// advapi32.GetTrusteeTypeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetTrusteeTypeW();
// advapi32.GetTrusteeTypeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserNameA();
// advapi32.GetUserNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetUserNameW();
// advapi32.GetUserNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall GetWindowsAccountDomainSid();
// advapi32.GetWindowsAccountDomainSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_QueryTagInformation();
// advapi32.I_QueryTagInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScGetCurrentGroupStateW();
// advapi32.I_ScGetCurrentGroupStateW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScIsSecurityProcess();
// advapi32.I_ScIsSecurityProcess = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScPnPGetServiceName();
// advapi32.I_ScPnPGetServiceName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScQueryServiceConfig();
// advapi32.I_ScQueryServiceConfig = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScRegisterPreshutdownRestart();
// advapi32.I_ScRegisterPreshutdownRestart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScReparseServiceDatabase();
// advapi32.I_ScReparseServiceDatabase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScSendPnPMessage();
// advapi32.I_ScSendPnPMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScSendTSMessage();
// advapi32.I_ScSendTSMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScSetServiceBitsA();
// advapi32.I_ScSetServiceBitsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScSetServiceBitsW();
// advapi32.I_ScSetServiceBitsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall I_ScValidatePnPService();
// advapi32.I_ScValidatePnPService = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IdentifyCodeAuthzLevelW();
// advapi32.IdentifyCodeAuthzLevelW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImpersonateAnonymousToken();
// advapi32.ImpersonateAnonymousToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImpersonateLoggedOnUser();
// advapi32.ImpersonateLoggedOnUser = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImpersonateNamedPipeClient();
// advapi32.ImpersonateNamedPipeClient = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ImpersonateSelf();
// advapi32.ImpersonateSelf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeAcl();
// advapi32.InitializeAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeSecurityDescriptor();
// advapi32.InitializeSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitializeSid();
// advapi32.InitializeSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateShutdownA();
// advapi32.InitiateShutdownA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateShutdownW();
// advapi32.InitiateShutdownW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateSystemShutdownA();
// advapi32.InitiateSystemShutdownA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateSystemShutdownExA();
// advapi32.InitiateSystemShutdownExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateSystemShutdownExW();
// advapi32.InitiateSystemShutdownExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InitiateSystemShutdownW();
// advapi32.InitiateSystemShutdownW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall InstallApplication();
// advapi32.InstallApplication = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsTextUnicode();
// advapi32.IsTextUnicode = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsTokenRestricted();
// advapi32.IsTokenRestricted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsTokenUntrusted();
// advapi32.IsTokenUntrusted = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidAcl();
// advapi32.IsValidAcl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidRelativeSecurityDescriptor();
// advapi32.IsValidRelativeSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidSecurityDescriptor();
// advapi32.IsValidSecurityDescriptor = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsValidSid();
// advapi32.IsValidSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall IsWellKnownSid();
// advapi32.IsWellKnownSid = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LockServiceDatabase();
// advapi32.LockServiceDatabase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogonUserA();
// advapi32.LogonUserA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogonUserExA();
// advapi32.LogonUserExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogonUserExExW();
// advapi32.LogonUserExExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogonUserExW();
// advapi32.LogonUserExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LogonUserW();
// advapi32.LogonUserW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupAccountNameA();
// advapi32.LookupAccountNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupAccountNameW();
// advapi32.LookupAccountNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupAccountSidA();
// advapi32.LookupAccountSidA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupAccountSidW();
// advapi32.LookupAccountSidW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeDisplayNameA();
// advapi32.LookupPrivilegeDisplayNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeDisplayNameW();
// advapi32.LookupPrivilegeDisplayNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeNameA();
// advapi32.LookupPrivilegeNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeNameW();
// advapi32.LookupPrivilegeNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeValueA();
// advapi32.LookupPrivilegeValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupPrivilegeValueW();
// advapi32.LookupPrivilegeValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupSecurityDescriptorPartsA();
// advapi32.LookupSecurityDescriptorPartsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LookupSecurityDescriptorPartsW();
// advapi32.LookupSecurityDescriptorPartsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaAddAccountRights();
// advapi32.LsaAddAccountRights = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaAddPrivilegesToAccount();
// advapi32.LsaAddPrivilegesToAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaClearAuditLog();
// advapi32.LsaClearAuditLog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaClose();
// advapi32.LsaClose = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaCreateAccount();
// advapi32.LsaCreateAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaCreateSecret();
// advapi32.LsaCreateSecret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaCreateTrustedDomain();
// advapi32.LsaCreateTrustedDomain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaCreateTrustedDomainEx();
// advapi32.LsaCreateTrustedDomainEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaDelete();
// advapi32.LsaDelete = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaDeleteTrustedDomain();
// advapi32.LsaDeleteTrustedDomain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumerateAccountRights();
// advapi32.LsaEnumerateAccountRights = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumerateAccounts();
// advapi32.LsaEnumerateAccounts = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumerateAccountsWithUserRight();
// advapi32.LsaEnumerateAccountsWithUserRight = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumeratePrivileges();
// advapi32.LsaEnumeratePrivileges = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumeratePrivilegesOfAccount();
// advapi32.LsaEnumeratePrivilegesOfAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumerateTrustedDomains();
// advapi32.LsaEnumerateTrustedDomains = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaEnumerateTrustedDomainsEx();
// advapi32.LsaEnumerateTrustedDomainsEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaFreeMemory();
// advapi32.LsaFreeMemory = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaGetAppliedCAPIDs();
// advapi32.LsaGetAppliedCAPIDs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaGetQuotasForAccount();
// advapi32.LsaGetQuotasForAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaGetRemoteUserName();
// advapi32.LsaGetRemoteUserName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaGetSystemAccessAccount();
// advapi32.LsaGetSystemAccessAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaGetUserName();
// advapi32.LsaGetUserName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaICLookupNames();
// advapi32.LsaICLookupNames = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaICLookupNamesWithCreds();
// advapi32.LsaICLookupNamesWithCreds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaICLookupSids();
// advapi32.LsaICLookupSids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaICLookupSidsWithCreds();
// advapi32.LsaICLookupSidsWithCreds = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupNames();
// advapi32.LsaLookupNames = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupNames2();
// advapi32.LsaLookupNames2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupPrivilegeDisplayName();
// advapi32.LsaLookupPrivilegeDisplayName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupPrivilegeName();
// advapi32.LsaLookupPrivilegeName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupPrivilegeValue();
// advapi32.LsaLookupPrivilegeValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupSids();
// advapi32.LsaLookupSids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaLookupSids2();
// advapi32.LsaLookupSids2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaManageSidNameMapping();
// advapi32.LsaManageSidNameMapping = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaNtStatusToWinError();
// advapi32.LsaNtStatusToWinError = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenAccount();
// advapi32.LsaOpenAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenPolicy();
// advapi32.LsaOpenPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenPolicySce();
// advapi32.LsaOpenPolicySce = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenSecret();
// advapi32.LsaOpenSecret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenTrustedDomain();
// advapi32.LsaOpenTrustedDomain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaOpenTrustedDomainByName();
// advapi32.LsaOpenTrustedDomainByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryCAPs();
// advapi32.LsaQueryCAPs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryDomainInformationPolicy();
// advapi32.LsaQueryDomainInformationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryForestTrustInformation();
// advapi32.LsaQueryForestTrustInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryInfoTrustedDomain();
// advapi32.LsaQueryInfoTrustedDomain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryInformationPolicy();
// advapi32.LsaQueryInformationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQuerySecret();
// advapi32.LsaQuerySecret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQuerySecurityObject();
// advapi32.LsaQuerySecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryTrustedDomainInfo();
// advapi32.LsaQueryTrustedDomainInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaQueryTrustedDomainInfoByName();
// advapi32.LsaQueryTrustedDomainInfoByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaRemoveAccountRights();
// advapi32.LsaRemoveAccountRights = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaRemovePrivilegesFromAccount();
// advapi32.LsaRemovePrivilegesFromAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaRetrievePrivateData();
// advapi32.LsaRetrievePrivateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetCAPs();
// advapi32.LsaSetCAPs = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetDomainInformationPolicy();
// advapi32.LsaSetDomainInformationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetForestTrustInformation();
// advapi32.LsaSetForestTrustInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetInformationPolicy();
// advapi32.LsaSetInformationPolicy = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetInformationTrustedDomain();
// advapi32.LsaSetInformationTrustedDomain = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetQuotasForAccount();
// advapi32.LsaSetQuotasForAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetSecret();
// advapi32.LsaSetSecret = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetSecurityObject();
// advapi32.LsaSetSecurityObject = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetSystemAccessAccount();
// advapi32.LsaSetSystemAccessAccount = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetTrustedDomainInfoByName();
// advapi32.LsaSetTrustedDomainInfoByName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaSetTrustedDomainInformation();
// advapi32.LsaSetTrustedDomainInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall LsaStorePrivateData();
// advapi32.LsaStorePrivateData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Final();
// advapi32.MD4Final = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Init();
// advapi32.MD4Init = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD4Update();
// advapi32.MD4Update = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Final();
// advapi32.MD5Final = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Init();
// advapi32.MD5Init = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MD5Update();
// advapi32.MD5Update = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MIDL_user_free_Ext();
// advapi32.MIDL_user_free_Ext = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MSChapSrvChangePassword();
// advapi32.MSChapSrvChangePassword = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MSChapSrvChangePassword2();
// advapi32.MSChapSrvChangePassword2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MakeAbsoluteSD();
// advapi32.MakeAbsoluteSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MakeAbsoluteSD2();
// advapi32.MakeAbsoluteSD2 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MakeSelfRelativeSD();
// advapi32.MakeSelfRelativeSD = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall MapGenericMask();
// advapi32.MapGenericMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall N/A();
// advapi32.N/A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyBootConfigStatus();
// advapi32.NotifyBootConfigStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyChangeEventLog();
// advapi32.NotifyChangeEventLog = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyServiceStatusChange();
// advapi32.NotifyServiceStatusChange = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyServiceStatusChangeA();
// advapi32.NotifyServiceStatusChangeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NotifyServiceStatusChangeW();
// advapi32.NotifyServiceStatusChangeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall NpGetUserName();
// advapi32.NpGetUserName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectCloseAuditAlarmA();
// advapi32.ObjectCloseAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectCloseAuditAlarmW();
// advapi32.ObjectCloseAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectDeleteAuditAlarmA();
// advapi32.ObjectDeleteAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectDeleteAuditAlarmW();
// advapi32.ObjectDeleteAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectOpenAuditAlarmA();
// advapi32.ObjectOpenAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectOpenAuditAlarmW();
// advapi32.ObjectOpenAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectPrivilegeAuditAlarmA();
// advapi32.ObjectPrivilegeAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ObjectPrivilegeAuditAlarmW();
// advapi32.ObjectPrivilegeAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenBackupEventLogA();
// advapi32.OpenBackupEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenBackupEventLogW();
// advapi32.OpenBackupEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEncryptedFileRawA();
// advapi32.OpenEncryptedFileRawA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEncryptedFileRawW();
// advapi32.OpenEncryptedFileRawW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEventLogA();
// advapi32.OpenEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenEventLogW();
// advapi32.OpenEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenProcessToken();
// advapi32.OpenProcessToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenSCManagerA();
// advapi32.OpenSCManagerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenSCManagerW();
// advapi32.OpenSCManagerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenServiceA();
// advapi32.OpenServiceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenServiceW();
// advapi32.OpenServiceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenThreadToken();
// advapi32.OpenThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenThreadWaitChainSession();
// advapi32.OpenThreadWaitChainSession = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenTraceA();
// advapi32.OpenTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OpenTraceW();
// advapi32.OpenTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OperationEnd();
// advapi32.OperationEnd = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall OperationStart();
// advapi32.OperationStart = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfAddCounters();
// advapi32.PerfAddCounters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfCloseQueryHandle();
// advapi32.PerfCloseQueryHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfCreateInstance();
// advapi32.PerfCreateInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfDecrementULongCounterValue();
// advapi32.PerfDecrementULongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfDecrementULongLongCounterValue();
// advapi32.PerfDecrementULongLongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfDeleteCounters();
// advapi32.PerfDeleteCounters = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfDeleteInstance();
// advapi32.PerfDeleteInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfEnumerateCounterSet();
// advapi32.PerfEnumerateCounterSet = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfEnumerateCounterSetInstances();
// advapi32.PerfEnumerateCounterSetInstances = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfIncrementULongCounterValue();
// advapi32.PerfIncrementULongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfIncrementULongLongCounterValue();
// advapi32.PerfIncrementULongLongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfOpenQueryHandle();
// advapi32.PerfOpenQueryHandle = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfQueryCounterData();
// advapi32.PerfQueryCounterData = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfQueryCounterInfo();
// advapi32.PerfQueryCounterInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfQueryCounterSetRegistrationInfo();
// advapi32.PerfQueryCounterSetRegistrationInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfQueryInstance();
// advapi32.PerfQueryInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegCloseKey();
// advapi32.PerfRegCloseKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegEnumKey();
// advapi32.PerfRegEnumKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegEnumValue();
// advapi32.PerfRegEnumValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegQueryInfoKey();
// advapi32.PerfRegQueryInfoKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegQueryValue();
// advapi32.PerfRegQueryValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfRegSetValue();
// advapi32.PerfRegSetValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfSetCounterRefValue();
// advapi32.PerfSetCounterRefValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfSetCounterSetInfo();
// advapi32.PerfSetCounterSetInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfSetULongCounterValue();
// advapi32.PerfSetULongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfSetULongLongCounterValue();
// advapi32.PerfSetULongLongCounterValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfStartProvider();
// advapi32.PerfStartProvider = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfStartProviderEx();
// advapi32.PerfStartProviderEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PerfStopProvider();
// advapi32.PerfStopProvider = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivilegeCheck();
// advapi32.PrivilegeCheck = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivilegedServiceAuditAlarmA();
// advapi32.PrivilegedServiceAuditAlarmA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall PrivilegedServiceAuditAlarmW();
// advapi32.PrivilegedServiceAuditAlarmW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ProcessIdleTasks();
// advapi32.ProcessIdleTasks = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ProcessIdleTasksW();
// advapi32.ProcessIdleTasksW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ProcessTrace();
// advapi32.ProcessTrace = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryAllTracesA();
// advapi32.QueryAllTracesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryAllTracesW();
// advapi32.QueryAllTracesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryLocalUserServiceName();
// advapi32.QueryLocalUserServiceName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryRecoveryAgentsOnEncryptedFile();
// advapi32.QueryRecoveryAgentsOnEncryptedFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QuerySecurityAccessMask();
// advapi32.QuerySecurityAccessMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceConfig2A();
// advapi32.QueryServiceConfig2A = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceConfig2W();
// advapi32.QueryServiceConfig2W = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceConfigA();
// advapi32.QueryServiceConfigA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceConfigW();
// advapi32.QueryServiceConfigW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceDynamicInformation();
// advapi32.QueryServiceDynamicInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceLockStatusA();
// advapi32.QueryServiceLockStatusA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceLockStatusW();
// advapi32.QueryServiceLockStatusW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceObjectSecurity();
// advapi32.QueryServiceObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceStatus();
// advapi32.QueryServiceStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryServiceStatusEx();
// advapi32.QueryServiceStatusEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryTraceA();
// advapi32.QueryTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryTraceW();
// advapi32.QueryTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryUserServiceName();
// advapi32.QueryUserServiceName = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall QueryUsersOnEncryptedFile();
// advapi32.QueryUsersOnEncryptedFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadEncryptedFileRaw();
// advapi32.ReadEncryptedFileRaw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadEventLogA();
// advapi32.ReadEventLogA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReadEventLogW();
// advapi32.ReadEventLogW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCloseKey();
// advapi32.RegCloseKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegConnectRegistryA();
// advapi32.RegConnectRegistryA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegConnectRegistryExA();
// advapi32.RegConnectRegistryExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegConnectRegistryExW();
// advapi32.RegConnectRegistryExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegConnectRegistryW();
// advapi32.RegConnectRegistryW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCopyTreeA();
// advapi32.RegCopyTreeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCopyTreeW();
// advapi32.RegCopyTreeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyA();
// advapi32.RegCreateKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyExA();
// advapi32.RegCreateKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyExW();
// advapi32.RegCreateKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyTransactedA();
// advapi32.RegCreateKeyTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyTransactedW();
// advapi32.RegCreateKeyTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegCreateKeyW();
// advapi32.RegCreateKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyA();
// advapi32.RegDeleteKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyExA();
// advapi32.RegDeleteKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyExW();
// advapi32.RegDeleteKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyTransactedA();
// advapi32.RegDeleteKeyTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyTransactedW();
// advapi32.RegDeleteKeyTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyValueA();
// advapi32.RegDeleteKeyValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyValueW();
// advapi32.RegDeleteKeyValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteKeyW();
// advapi32.RegDeleteKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteTreeA();
// advapi32.RegDeleteTreeA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteTreeW();
// advapi32.RegDeleteTreeW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteValueA();
// advapi32.RegDeleteValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDeleteValueW();
// advapi32.RegDeleteValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDisablePredefinedCache();
// advapi32.RegDisablePredefinedCache = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDisablePredefinedCacheEx();
// advapi32.RegDisablePredefinedCacheEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegDisableReflectionKey();
// advapi32.RegDisableReflectionKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnableReflectionKey();
// advapi32.RegEnableReflectionKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyA();
// advapi32.RegEnumKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyExA();
// advapi32.RegEnumKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyExW();
// advapi32.RegEnumKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumKeyW();
// advapi32.RegEnumKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumValueA();
// advapi32.RegEnumValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegEnumValueW();
// advapi32.RegEnumValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegFlushKey();
// advapi32.RegFlushKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetKeySecurity();
// advapi32.RegGetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetValueA();
// advapi32.RegGetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegGetValueW();
// advapi32.RegGetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadAppKeyA();
// advapi32.RegLoadAppKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadAppKeyW();
// advapi32.RegLoadAppKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadKeyA();
// advapi32.RegLoadKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadKeyW();
// advapi32.RegLoadKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadMUIStringA();
// advapi32.RegLoadMUIStringA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegLoadMUIStringW();
// advapi32.RegLoadMUIStringW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegNotifyChangeKeyValue();
// advapi32.RegNotifyChangeKeyValue = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenCurrentUser();
// advapi32.RegOpenCurrentUser = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyA();
// advapi32.RegOpenKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyExA();
// advapi32.RegOpenKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyExW();
// advapi32.RegOpenKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyTransactedA();
// advapi32.RegOpenKeyTransactedA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyTransactedW();
// advapi32.RegOpenKeyTransactedW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenKeyW();
// advapi32.RegOpenKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOpenUserClassesRoot();
// advapi32.RegOpenUserClassesRoot = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegOverridePredefKey();
// advapi32.RegOverridePredefKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryInfoKeyA();
// advapi32.RegQueryInfoKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryInfoKeyW();
// advapi32.RegQueryInfoKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryMultipleValuesA();
// advapi32.RegQueryMultipleValuesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryMultipleValuesW();
// advapi32.RegQueryMultipleValuesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryReflectionKey();
// advapi32.RegQueryReflectionKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueA();
// advapi32.RegQueryValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueExA();
// advapi32.RegQueryValueExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueExW();
// advapi32.RegQueryValueExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegQueryValueW();
// advapi32.RegQueryValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegRenameKey();
// advapi32.RegRenameKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegReplaceKeyA();
// advapi32.RegReplaceKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegReplaceKeyW();
// advapi32.RegReplaceKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegRestoreKeyA();
// advapi32.RegRestoreKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegRestoreKeyW();
// advapi32.RegRestoreKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyA();
// advapi32.RegSaveKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyExA();
// advapi32.RegSaveKeyExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyExW();
// advapi32.RegSaveKeyExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSaveKeyW();
// advapi32.RegSaveKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetKeySecurity();
// advapi32.RegSetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetKeyValueA();
// advapi32.RegSetKeyValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetKeyValueW();
// advapi32.RegSetKeyValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueA();
// advapi32.RegSetValueA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueExA();
// advapi32.RegSetValueExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueExW();
// advapi32.RegSetValueExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegSetValueW();
// advapi32.RegSetValueW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegUnLoadKeyA();
// advapi32.RegUnLoadKeyA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegUnLoadKeyW();
// advapi32.RegUnLoadKeyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterEventSourceA();
// advapi32.RegisterEventSourceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterEventSourceW();
// advapi32.RegisterEventSourceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterIdleTask();
// advapi32.RegisterIdleTask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterServiceCtrlHandlerA();
// advapi32.RegisterServiceCtrlHandlerA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterServiceCtrlHandlerExA();
// advapi32.RegisterServiceCtrlHandlerExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterServiceCtrlHandlerExW();
// advapi32.RegisterServiceCtrlHandlerExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterServiceCtrlHandlerW();
// advapi32.RegisterServiceCtrlHandlerW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterTraceGuidsA();
// advapi32.RegisterTraceGuidsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterTraceGuidsW();
// advapi32.RegisterTraceGuidsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RegisterWaitChainCOMCallback();
// advapi32.RegisterWaitChainCOMCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoteRegEnumKeyWrapper();
// advapi32.RemoteRegEnumKeyWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoteRegEnumValueWrapper();
// advapi32.RemoteRegEnumValueWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoteRegQueryInfoKeyWrapper();
// advapi32.RemoteRegQueryInfoKeyWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoteRegQueryValueWrapper();
// advapi32.RemoteRegQueryValueWrapper = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveTraceCallback();
// advapi32.RemoveTraceCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RemoveUsersFromEncryptedFile();
// advapi32.RemoveUsersFromEncryptedFile = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReportEventA();
// advapi32.ReportEventA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall ReportEventW();
// advapi32.ReportEventW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall RevertToSelf();
// advapi32.RevertToSelf = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SafeBaseRegGetKeySecurity();
// advapi32.SafeBaseRegGetKeySecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferCloseLevel();
// advapi32.SaferCloseLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferComputeTokenFromLevel();
// advapi32.SaferComputeTokenFromLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferCreateLevel();
// advapi32.SaferCreateLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferGetLevelInformation();
// advapi32.SaferGetLevelInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferGetPolicyInformation();
// advapi32.SaferGetPolicyInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferIdentifyLevel();
// advapi32.SaferIdentifyLevel = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferRecordEventLogEntry();
// advapi32.SaferRecordEventLogEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferSetLevelInformation();
// advapi32.SaferSetLevelInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferSetPolicyInformation();
// advapi32.SaferSetPolicyInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiChangeRegistryScope();
// advapi32.SaferiChangeRegistryScope = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiCompareTokenLevels();
// advapi32.SaferiCompareTokenLevels = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiIsDllAllowed();
// advapi32.SaferiIsDllAllowed = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiIsExecutableFileType();
// advapi32.SaferiIsExecutableFileType = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiPopulateDefaultsInRegistry();
// advapi32.SaferiPopulateDefaultsInRegistry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiRecordEventLogEntry();
// advapi32.SaferiRecordEventLogEntry = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SaferiSearchMatchingHashRules();
// advapi32.SaferiSearchMatchingHashRules = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetAclInformation();
// advapi32.SetAclInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEncryptedFileMetadata();
// advapi32.SetEncryptedFileMetadata = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAccessListA();
// advapi32.SetEntriesInAccessListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAccessListW();
// advapi32.SetEntriesInAccessListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAclA();
// advapi32.SetEntriesInAclA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAclW();
// advapi32.SetEntriesInAclW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAuditListA();
// advapi32.SetEntriesInAuditListA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetEntriesInAuditListW();
// advapi32.SetEntriesInAuditListW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileSecurityA();
// advapi32.SetFileSecurityA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetFileSecurityW();
// advapi32.SetFileSecurityW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetInformationCodeAuthzLevelW();
// advapi32.SetInformationCodeAuthzLevelW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetInformationCodeAuthzPolicyW();
// advapi32.SetInformationCodeAuthzPolicyW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetKernelObjectSecurity();
// advapi32.SetKernelObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedSecurityInfoA();
// advapi32.SetNamedSecurityInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedSecurityInfoExA();
// advapi32.SetNamedSecurityInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedSecurityInfoExW();
// advapi32.SetNamedSecurityInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetNamedSecurityInfoW();
// advapi32.SetNamedSecurityInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPrivateObjectSecurity();
// advapi32.SetPrivateObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetPrivateObjectSecurityEx();
// advapi32.SetPrivateObjectSecurityEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityAccessMask();
// advapi32.SetSecurityAccessMask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorControl();
// advapi32.SetSecurityDescriptorControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorDacl();
// advapi32.SetSecurityDescriptorDacl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorGroup();
// advapi32.SetSecurityDescriptorGroup = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorOwner();
// advapi32.SetSecurityDescriptorOwner = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorRMControl();
// advapi32.SetSecurityDescriptorRMControl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityDescriptorSacl();
// advapi32.SetSecurityDescriptorSacl = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityInfo();
// advapi32.SetSecurityInfo = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityInfoExA();
// advapi32.SetSecurityInfoExA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetSecurityInfoExW();
// advapi32.SetSecurityInfoExW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetServiceBits();
// advapi32.SetServiceBits = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetServiceObjectSecurity();
// advapi32.SetServiceObjectSecurity = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetServiceStatus();
// advapi32.SetServiceStatus = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetThreadToken();
// advapi32.SetThreadToken = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTokenInformation();
// advapi32.SetTokenInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetTraceCallback();
// advapi32.SetTraceCallback = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserFileEncryptionKey();
// advapi32.SetUserFileEncryptionKey = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SetUserFileEncryptionKeyEx();
// advapi32.SetUserFileEncryptionKeyEx = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartServiceA();
// advapi32.StartServiceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartServiceCtrlDispatcherA();
// advapi32.StartServiceCtrlDispatcherA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartServiceCtrlDispatcherW();
// advapi32.StartServiceCtrlDispatcherW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartServiceW();
// advapi32.StartServiceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartTraceA();
// advapi32.StartTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StartTraceW();
// advapi32.StartTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StopTraceA();
// advapi32.StopTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall StopTraceW();
// advapi32.StopTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction001();
// advapi32.SystemFunction001 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction002();
// advapi32.SystemFunction002 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction003();
// advapi32.SystemFunction003 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction004();
// advapi32.SystemFunction004 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction005();
// advapi32.SystemFunction005 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction006();
// advapi32.SystemFunction006 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction007();
// advapi32.SystemFunction007 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction008();
// advapi32.SystemFunction008 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction009();
// advapi32.SystemFunction009 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction010();
// advapi32.SystemFunction010 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction011();
// advapi32.SystemFunction011 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction012();
// advapi32.SystemFunction012 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction013();
// advapi32.SystemFunction013 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction014();
// advapi32.SystemFunction014 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction015();
// advapi32.SystemFunction015 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction016();
// advapi32.SystemFunction016 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction017();
// advapi32.SystemFunction017 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction018();
// advapi32.SystemFunction018 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction019();
// advapi32.SystemFunction019 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction020();
// advapi32.SystemFunction020 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction021();
// advapi32.SystemFunction021 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction022();
// advapi32.SystemFunction022 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction023();
// advapi32.SystemFunction023 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction024();
// advapi32.SystemFunction024 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction025();
// advapi32.SystemFunction025 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction026();
// advapi32.SystemFunction026 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction027();
// advapi32.SystemFunction027 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction028();
// advapi32.SystemFunction028 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction029();
// advapi32.SystemFunction029 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction030();
// advapi32.SystemFunction030 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction031();
// advapi32.SystemFunction031 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction032();
// advapi32.SystemFunction032 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction033();
// advapi32.SystemFunction033 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction034();
// advapi32.SystemFunction034 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction035();
// advapi32.SystemFunction035 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction036();
// advapi32.SystemFunction036 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction040();
// advapi32.SystemFunction040 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall SystemFunction041();
// advapi32.SystemFunction041 = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceEvent();
// advapi32.TraceEvent = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceEventInstance();
// advapi32.TraceEventInstance = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceMessage();
// advapi32.TraceMessage = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceMessageVa();
// advapi32.TraceMessageVa = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceQueryInformation();
// advapi32.TraceQueryInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TraceSetInformation();
// advapi32.TraceSetInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TreeResetNamedSecurityInfoA();
// advapi32.TreeResetNamedSecurityInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TreeResetNamedSecurityInfoW();
// advapi32.TreeResetNamedSecurityInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TreeSetNamedSecurityInfoA();
// advapi32.TreeSetNamedSecurityInfoA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TreeSetNamedSecurityInfoW();
// advapi32.TreeSetNamedSecurityInfoW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrusteeAccessToObjectA();
// advapi32.TrusteeAccessToObjectA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall TrusteeAccessToObjectW();
// advapi32.TrusteeAccessToObjectW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UninstallApplication();
// advapi32.UninstallApplication = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnlockServiceDatabase();
// advapi32.UnlockServiceDatabase = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterIdleTask();
// advapi32.UnregisterIdleTask = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UnregisterTraceGuids();
// advapi32.UnregisterTraceGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateTraceA();
// advapi32.UpdateTraceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UpdateTraceW();
// advapi32.UpdateTraceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UsePinForEncryptedFilesA();
// advapi32.UsePinForEncryptedFilesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall UsePinForEncryptedFilesW();
// advapi32.UsePinForEncryptedFilesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WaitServiceState();
// advapi32.WaitServiceState = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiCloseBlock();
// advapi32.WmiCloseBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiDevInstToInstanceNameA();
// advapi32.WmiDevInstToInstanceNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiDevInstToInstanceNameW();
// advapi32.WmiDevInstToInstanceNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiEnumerateGuids();
// advapi32.WmiEnumerateGuids = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiExecuteMethodA();
// advapi32.WmiExecuteMethodA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiExecuteMethodW();
// advapi32.WmiExecuteMethodW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiFileHandleToInstanceNameA();
// advapi32.WmiFileHandleToInstanceNameA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiFileHandleToInstanceNameW();
// advapi32.WmiFileHandleToInstanceNameW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiFreeBuffer();
// advapi32.WmiFreeBuffer = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiMofEnumerateResourcesA();
// advapi32.WmiMofEnumerateResourcesA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiMofEnumerateResourcesW();
// advapi32.WmiMofEnumerateResourcesW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiNotificationRegistrationA();
// advapi32.WmiNotificationRegistrationA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiNotificationRegistrationW();
// advapi32.WmiNotificationRegistrationW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiOpenBlock();
// advapi32.WmiOpenBlock = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQueryAllDataA();
// advapi32.WmiQueryAllDataA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQueryAllDataMultipleA();
// advapi32.WmiQueryAllDataMultipleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQueryAllDataMultipleW();
// advapi32.WmiQueryAllDataMultipleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQueryAllDataW();
// advapi32.WmiQueryAllDataW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQueryGuidInformation();
// advapi32.WmiQueryGuidInformation = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQuerySingleInstanceA();
// advapi32.WmiQuerySingleInstanceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQuerySingleInstanceMultipleA();
// advapi32.WmiQuerySingleInstanceMultipleA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQuerySingleInstanceMultipleW();
// advapi32.WmiQuerySingleInstanceMultipleW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiQuerySingleInstanceW();
// advapi32.WmiQuerySingleInstanceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiReceiveNotificationsA();
// advapi32.WmiReceiveNotificationsA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiReceiveNotificationsW();
// advapi32.WmiReceiveNotificationsW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiSetSingleInstanceA();
// advapi32.WmiSetSingleInstanceA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiSetSingleInstanceW();
// advapi32.WmiSetSingleInstanceW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiSetSingleItemA();
// advapi32.WmiSetSingleItemA = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WmiSetSingleItemW();
// advapi32.WmiSetSingleItemW = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];

// int __stdcall WriteEncryptedFileRaw();
// advapi32.WriteEncryptedFileRaw = [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ];


// exports
module.exports = advapi32;