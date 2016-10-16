// javascript ffi interface for advapi32
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
var advapi32 = ffi.Library( "advapi32.dll" ,
{
	// int __stdcall A_SHAFinal();
	// "A_SHAFinal" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall A_SHAInit();
	// "A_SHAInit" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall A_SHAUpdate();
	// "A_SHAUpdate" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AbortSystemShutdownA();
	// "AbortSystemShutdownA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AbortSystemShutdownW();
	// "AbortSystemShutdownW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheck();
	// "AccessCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckAndAuditAlarmA();
	// "AccessCheckAndAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckAndAuditAlarmW();
	// "AccessCheckAndAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByType();
	// "AccessCheckByType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeAndAuditAlarmA();
	// "AccessCheckByTypeAndAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeAndAuditAlarmW();
	// "AccessCheckByTypeAndAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeResultList();
	// "AccessCheckByTypeResultList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeResultListAndAuditAlarmA();
	// "AccessCheckByTypeResultListAndAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeResultListAndAuditAlarmByHandleA();
	// "AccessCheckByTypeResultListAndAuditAlarmByHandleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeResultListAndAuditAlarmByHandleW();
	// "AccessCheckByTypeResultListAndAuditAlarmByHandleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AccessCheckByTypeResultListAndAuditAlarmW();
	// "AccessCheckByTypeResultListAndAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessAllowedAce();
	// "AddAccessAllowedAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessAllowedAceEx();
	// "AddAccessAllowedAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessAllowedObjectAce();
	// "AddAccessAllowedObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessDeniedAce();
	// "AddAccessDeniedAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessDeniedAceEx();
	// "AddAccessDeniedAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAccessDeniedObjectAce();
	// "AddAccessDeniedObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAce();
	// "AddAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAuditAccessAce();
	// "AddAuditAccessAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAuditAccessAceEx();
	// "AddAuditAccessAceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddAuditAccessObjectAce();
	// "AddAuditAccessObjectAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddConditionalAce();
	// "AddConditionalAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddMandatoryAce();
	// "AddMandatoryAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddUsersToEncryptedFile();
	// "AddUsersToEncryptedFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AddUsersToEncryptedFileEx();
	// "AddUsersToEncryptedFileEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustTokenGroups();
	// "AdjustTokenGroups" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AdjustTokenPrivileges();
	// "AdjustTokenPrivileges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllocateAndInitializeSid();
	// "AllocateAndInitializeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AllocateLocallyUniqueId();
	// "AllocateLocallyUniqueId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AreAllAccessesGranted();
	// "AreAllAccessesGranted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AreAnyAccessesGranted();
	// "AreAnyAccessesGranted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditComputeEffectivePolicyBySid();
	// "AuditComputeEffectivePolicyBySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditComputeEffectivePolicyByToken();
	// "AuditComputeEffectivePolicyByToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditEnumerateCategories();
	// "AuditEnumerateCategories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditEnumeratePerUserPolicy();
	// "AuditEnumeratePerUserPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditEnumerateSubCategories();
	// "AuditEnumerateSubCategories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditFree();
	// "AuditFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupCategoryGuidFromCategoryId();
	// "AuditLookupCategoryGuidFromCategoryId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupCategoryIdFromCategoryGuid();
	// "AuditLookupCategoryIdFromCategoryGuid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupCategoryNameA();
	// "AuditLookupCategoryNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupCategoryNameW();
	// "AuditLookupCategoryNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupSubCategoryNameA();
	// "AuditLookupSubCategoryNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditLookupSubCategoryNameW();
	// "AuditLookupSubCategoryNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditQueryGlobalSaclA();
	// "AuditQueryGlobalSaclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditQueryGlobalSaclW();
	// "AuditQueryGlobalSaclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditQueryPerUserPolicy();
	// "AuditQueryPerUserPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditQuerySecurity();
	// "AuditQuerySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditQuerySystemPolicy();
	// "AuditQuerySystemPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditSetGlobalSaclA();
	// "AuditSetGlobalSaclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditSetGlobalSaclW();
	// "AuditSetGlobalSaclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditSetPerUserPolicy();
	// "AuditSetPerUserPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditSetSecurity();
	// "AuditSetSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall AuditSetSystemPolicy();
	// "AuditSetSystemPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BackupEventLogA();
	// "BackupEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BackupEventLogW();
	// "BackupEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegCloseKey();
	// "BaseRegCloseKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegCreateKey();
	// "BaseRegCreateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegDeleteKeyEx();
	// "BaseRegDeleteKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegDeleteValue();
	// "BaseRegDeleteValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegFlushKey();
	// "BaseRegFlushKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegGetVersion();
	// "BaseRegGetVersion" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegLoadKey();
	// "BaseRegLoadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegOpenKey();
	// "BaseRegOpenKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegRestoreKey();
	// "BaseRegRestoreKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegSaveKeyEx();
	// "BaseRegSaveKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegSetKeySecurity();
	// "BaseRegSetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegSetValue();
	// "BaseRegSetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BaseRegUnLoadKey();
	// "BaseRegUnLoadKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildExplicitAccessWithNameA();
	// "BuildExplicitAccessWithNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildExplicitAccessWithNameW();
	// "BuildExplicitAccessWithNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildImpersonateExplicitAccessWithNameA();
	// "BuildImpersonateExplicitAccessWithNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildImpersonateExplicitAccessWithNameW();
	// "BuildImpersonateExplicitAccessWithNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildImpersonateTrusteeA();
	// "BuildImpersonateTrusteeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildImpersonateTrusteeW();
	// "BuildImpersonateTrusteeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildSecurityDescriptorA();
	// "BuildSecurityDescriptorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildSecurityDescriptorW();
	// "BuildSecurityDescriptorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithNameA();
	// "BuildTrusteeWithNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithNameW();
	// "BuildTrusteeWithNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithObjectsAndNameA();
	// "BuildTrusteeWithObjectsAndNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithObjectsAndNameW();
	// "BuildTrusteeWithObjectsAndNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithObjectsAndSidA();
	// "BuildTrusteeWithObjectsAndSidA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithObjectsAndSidW();
	// "BuildTrusteeWithObjectsAndSidW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithSidA();
	// "BuildTrusteeWithSidA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall BuildTrusteeWithSidW();
	// "BuildTrusteeWithSidW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CancelOverlappedAccess();
	// "CancelOverlappedAccess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeServiceConfig2A();
	// "ChangeServiceConfig2A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeServiceConfig2W();
	// "ChangeServiceConfig2W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeServiceConfigA();
	// "ChangeServiceConfigA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ChangeServiceConfigW();
	// "ChangeServiceConfigW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckForHiberboot();
	// "CheckForHiberboot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CheckTokenMembership();
	// "CheckTokenMembership" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearEventLogA();
	// "ClearEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ClearEventLogW();
	// "ClearEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseCodeAuthzLevel();
	// "CloseCodeAuthzLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseEncryptedFileRaw();
	// "CloseEncryptedFileRaw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseEventLog();
	// "CloseEventLog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseServiceHandle();
	// "CloseServiceHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseThreadWaitChainSession();
	// "CloseThreadWaitChainSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CloseTrace();
	// "CloseTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CommandLineFromMsiDescriptor();
	// "CommandLineFromMsiDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ComputeAccessTokenFromCodeAuthzLevel();
	// "ComputeAccessTokenFromCodeAuthzLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlService();
	// "ControlService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlServiceExA();
	// "ControlServiceExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlServiceExW();
	// "ControlServiceExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlTraceA();
	// "ControlTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ControlTraceW();
	// "ControlTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertAccessToSecurityDescriptorA();
	// "ConvertAccessToSecurityDescriptorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertAccessToSecurityDescriptorW();
	// "ConvertAccessToSecurityDescriptorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSDToStringSDDomainW();
	// "ConvertSDToStringSDDomainW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSDToStringSDRootDomainA();
	// "ConvertSDToStringSDRootDomainA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSDToStringSDRootDomainW();
	// "ConvertSDToStringSDRootDomainW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToAccessA();
	// "ConvertSecurityDescriptorToAccessA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToAccessNamedA();
	// "ConvertSecurityDescriptorToAccessNamedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToAccessNamedW();
	// "ConvertSecurityDescriptorToAccessNamedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToAccessW();
	// "ConvertSecurityDescriptorToAccessW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToStringSecurityDescriptorA();
	// "ConvertSecurityDescriptorToStringSecurityDescriptorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSecurityDescriptorToStringSecurityDescriptorW();
	// "ConvertSecurityDescriptorToStringSecurityDescriptorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSidToStringSidA();
	// "ConvertSidToStringSidA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertSidToStringSidW();
	// "ConvertSidToStringSidW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSDToSDDomainA();
	// "ConvertStringSDToSDDomainA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSDToSDDomainW();
	// "ConvertStringSDToSDDomainW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSDToSDRootDomainA();
	// "ConvertStringSDToSDRootDomainA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSDToSDRootDomainW();
	// "ConvertStringSDToSDRootDomainW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSecurityDescriptorToSecurityDescriptorA();
	// "ConvertStringSecurityDescriptorToSecurityDescriptorA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSecurityDescriptorToSecurityDescriptorW();
	// "ConvertStringSecurityDescriptorToSecurityDescriptorW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSidToSidA();
	// "ConvertStringSidToSidA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertStringSidToSidW();
	// "ConvertStringSidToSidW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ConvertToAutoInheritPrivateObjectSecurity();
	// "ConvertToAutoInheritPrivateObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CopySid();
	// "CopySid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateCodeAuthzLevel();
	// "CreateCodeAuthzLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePrivateObjectSecurity();
	// "CreatePrivateObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePrivateObjectSecurityEx();
	// "CreatePrivateObjectSecurityEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreatePrivateObjectSecurityWithMultipleInheritance();
	// "CreatePrivateObjectSecurityWithMultipleInheritance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessAsUserA();
	// "CreateProcessAsUserA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessAsUserW();
	// "CreateProcessAsUserW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessWithLogonW();
	// "CreateProcessWithLogonW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateProcessWithTokenW();
	// "CreateProcessWithTokenW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateRestrictedToken();
	// "CreateRestrictedToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateServiceA();
	// "CreateServiceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateServiceW();
	// "CreateServiceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateTraceInstanceId();
	// "CreateTraceInstanceId" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CreateWellKnownSid();
	// "CreateWellKnownSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredBackupCredentials();
	// "CredBackupCredentials" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredDeleteA();
	// "CredDeleteA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredDeleteW();
	// "CredDeleteW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredEncryptAndMarshalBinaryBlob();
	// "CredEncryptAndMarshalBinaryBlob" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredEnumerateA();
	// "CredEnumerateA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredEnumerateW();
	// "CredEnumerateW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredFindBestCredentialA();
	// "CredFindBestCredentialA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredFindBestCredentialW();
	// "CredFindBestCredentialW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredFree();
	// "CredFree" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredGetSessionTypes();
	// "CredGetSessionTypes" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredGetTargetInfoA();
	// "CredGetTargetInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredGetTargetInfoW();
	// "CredGetTargetInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredIsMarshaledCredentialA();
	// "CredIsMarshaledCredentialA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredIsMarshaledCredentialW();
	// "CredIsMarshaledCredentialW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredIsProtectedA();
	// "CredIsProtectedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredIsProtectedW();
	// "CredIsProtectedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredMarshalCredentialA();
	// "CredMarshalCredentialA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredMarshalCredentialW();
	// "CredMarshalCredentialW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredProfileLoaded();
	// "CredProfileLoaded" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredProfileLoadedEx();
	// "CredProfileLoadedEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredProfileUnloaded();
	// "CredProfileUnloaded" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredProtectA();
	// "CredProtectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredProtectW();
	// "CredProtectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredReadA();
	// "CredReadA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredReadByTokenHandle();
	// "CredReadByTokenHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredReadDomainCredentialsA();
	// "CredReadDomainCredentialsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredReadDomainCredentialsW();
	// "CredReadDomainCredentialsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredReadW();
	// "CredReadW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredRenameA();
	// "CredRenameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredRenameW();
	// "CredRenameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredRestoreCredentials();
	// "CredRestoreCredentials" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredUnmarshalCredentialA();
	// "CredUnmarshalCredentialA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredUnmarshalCredentialW();
	// "CredUnmarshalCredentialW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredUnprotectA();
	// "CredUnprotectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredUnprotectW();
	// "CredUnprotectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredWriteA();
	// "CredWriteA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredWriteDomainCredentialsA();
	// "CredWriteDomainCredentialsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredWriteDomainCredentialsW();
	// "CredWriteDomainCredentialsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredWriteW();
	// "CredWriteW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpConvertCredential();
	// "CredpConvertCredential" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpConvertOneCredentialSize();
	// "CredpConvertOneCredentialSize" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpConvertTargetInfo();
	// "CredpConvertTargetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpDecodeCredential();
	// "CredpDecodeCredential" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpEncodeCredential();
	// "CredpEncodeCredential" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CredpEncodeSecret();
	// "CredpEncodeSecret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptAcquireContextA();
	// "CryptAcquireContextA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptAcquireContextW();
	// "CryptAcquireContextW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptContextAddRef();
	// "CryptContextAddRef" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptCreateHash();
	// "CryptCreateHash" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDecrypt();
	// "CryptDecrypt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDeriveKey();
	// "CryptDeriveKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDestroyHash();
	// "CryptDestroyHash" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDestroyKey();
	// "CryptDestroyKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDuplicateHash();
	// "CryptDuplicateHash" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptDuplicateKey();
	// "CryptDuplicateKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptEncrypt();
	// "CryptEncrypt" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptEnumProviderTypesA();
	// "CryptEnumProviderTypesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptEnumProviderTypesW();
	// "CryptEnumProviderTypesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptEnumProvidersA();
	// "CryptEnumProvidersA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptEnumProvidersW();
	// "CryptEnumProvidersW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptExportKey();
	// "CryptExportKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGenKey();
	// "CryptGenKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGenRandom();
	// "CryptGenRandom" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetDefaultProviderA();
	// "CryptGetDefaultProviderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetDefaultProviderW();
	// "CryptGetDefaultProviderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetHashParam();
	// "CryptGetHashParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetKeyParam();
	// "CryptGetKeyParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetProvParam();
	// "CryptGetProvParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptGetUserKey();
	// "CryptGetUserKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptHashData();
	// "CryptHashData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptHashSessionKey();
	// "CryptHashSessionKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptImportKey();
	// "CryptImportKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptReleaseContext();
	// "CryptReleaseContext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetHashParam();
	// "CryptSetHashParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetKeyParam();
	// "CryptSetKeyParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetProvParam();
	// "CryptSetProvParam" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetProviderA();
	// "CryptSetProviderA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetProviderExA();
	// "CryptSetProviderExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetProviderExW();
	// "CryptSetProviderExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSetProviderW();
	// "CryptSetProviderW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSignHashA();
	// "CryptSignHashA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptSignHashW();
	// "CryptSignHashW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptVerifySignatureA();
	// "CryptVerifySignatureA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CryptVerifySignatureW();
	// "CryptVerifySignatureW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall CveEventWrite();
	// "CveEventWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DecryptFileA();
	// "DecryptFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DecryptFileW();
	// "DecryptFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteAce();
	// "DeleteAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeleteService();
	// "DeleteService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DeregisterEventSource();
	// "DeregisterEventSource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DestroyPrivateObjectSecurity();
	// "DestroyPrivateObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateEncryptionInfoFile();
	// "DuplicateEncryptionInfoFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateToken();
	// "DuplicateToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall DuplicateTokenEx();
	// "DuplicateTokenEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfBackupEventLogFileA();
	// "ElfBackupEventLogFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfBackupEventLogFileW();
	// "ElfBackupEventLogFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfChangeNotify();
	// "ElfChangeNotify" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfClearEventLogFileA();
	// "ElfClearEventLogFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfClearEventLogFileW();
	// "ElfClearEventLogFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfCloseEventLog();
	// "ElfCloseEventLog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfDeregisterEventSource();
	// "ElfDeregisterEventSource" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfFlushEventLog();
	// "ElfFlushEventLog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfNumberOfRecords();
	// "ElfNumberOfRecords" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfOldestRecord();
	// "ElfOldestRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfOpenBackupEventLogA();
	// "ElfOpenBackupEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfOpenBackupEventLogW();
	// "ElfOpenBackupEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfOpenEventLogA();
	// "ElfOpenEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfOpenEventLogW();
	// "ElfOpenEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfReadEventLogA();
	// "ElfReadEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfReadEventLogW();
	// "ElfReadEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfRegisterEventSourceA();
	// "ElfRegisterEventSourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfRegisterEventSourceW();
	// "ElfRegisterEventSourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfReportEventA();
	// "ElfReportEventA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfReportEventAndSourceW();
	// "ElfReportEventAndSourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ElfReportEventW();
	// "ElfReportEventW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableTrace();
	// "EnableTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableTraceEx();
	// "EnableTraceEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnableTraceEx2();
	// "EnableTraceEx2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncryptFileA();
	// "EncryptFileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncryptFileW();
	// "EncryptFileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncryptedFileKeyInfo();
	// "EncryptedFileKeyInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EncryptionDisable();
	// "EncryptionDisable" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDependentServicesA();
	// "EnumDependentServicesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDependentServicesW();
	// "EnumDependentServicesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumDynamicTimeZoneInformation();
	// "EnumDynamicTimeZoneInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumServiceGroupW();
	// "EnumServiceGroupW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumServicesStatusA();
	// "EnumServicesStatusA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumServicesStatusExA();
	// "EnumServicesStatusExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumServicesStatusExW();
	// "EnumServicesStatusExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumServicesStatusW();
	// "EnumServicesStatusW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateTraceGuids();
	// "EnumerateTraceGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EnumerateTraceGuidsEx();
	// "EnumerateTraceGuidsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EqualDomainSid();
	// "EqualDomainSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EqualPrefixSid();
	// "EqualPrefixSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EqualSid();
	// "EqualSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventAccessControl();
	// "EventAccessControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventAccessQuery();
	// "EventAccessQuery" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventAccessRemove();
	// "EventAccessRemove" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventActivityIdControl();
	// "EventActivityIdControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventEnabled();
	// "EventEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventProviderEnabled();
	// "EventProviderEnabled" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventRegister();
	// "EventRegister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventSetInformation();
	// "EventSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventUnregister();
	// "EventUnregister" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWrite();
	// "EventWrite" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWriteEndScenario();
	// "EventWriteEndScenario" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWriteEx();
	// "EventWriteEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWriteStartScenario();
	// "EventWriteStartScenario" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWriteString();
	// "EventWriteString" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall EventWriteTransfer();
	// "EventWriteTransfer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FileEncryptionStatusA();
	// "FileEncryptionStatusA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FileEncryptionStatusW();
	// "FileEncryptionStatusW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FindFirstFreeAce();
	// "FindFirstFreeAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushEfsCache();
	// "FlushEfsCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushTraceA();
	// "FlushTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FlushTraceW();
	// "FlushTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeEncryptedFileKeyInfo();
	// "FreeEncryptedFileKeyInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeEncryptedFileMetadata();
	// "FreeEncryptedFileMetadata" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeEncryptionCertificateHashList();
	// "FreeEncryptionCertificateHashList" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeInheritedFromArray();
	// "FreeInheritedFromArray" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall FreeSid();
	// "FreeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAccessPermissionsForObjectA();
	// "GetAccessPermissionsForObjectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAccessPermissionsForObjectW();
	// "GetAccessPermissionsForObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAce();
	// "GetAce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAclInformation();
	// "GetAclInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAuditedPermissionsFromAclA();
	// "GetAuditedPermissionsFromAclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetAuditedPermissionsFromAclW();
	// "GetAuditedPermissionsFromAclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentHwProfileA();
	// "GetCurrentHwProfileA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetCurrentHwProfileW();
	// "GetCurrentHwProfileW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetDynamicTimeZoneInformationEffectiveYears();
	// "GetDynamicTimeZoneInformationEffectiveYears" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEffectiveRightsFromAclA();
	// "GetEffectiveRightsFromAclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEffectiveRightsFromAclW();
	// "GetEffectiveRightsFromAclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEncryptedFileMetadata();
	// "GetEncryptedFileMetadata" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetEventLogInformation();
	// "GetEventLogInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExplicitEntriesFromAclA();
	// "GetExplicitEntriesFromAclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetExplicitEntriesFromAclW();
	// "GetExplicitEntriesFromAclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileSecurityA();
	// "GetFileSecurityA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetFileSecurityW();
	// "GetFileSecurityW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInformationCodeAuthzLevelW();
	// "GetInformationCodeAuthzLevelW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInformationCodeAuthzPolicyW();
	// "GetInformationCodeAuthzPolicyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInheritanceSourceA();
	// "GetInheritanceSourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetInheritanceSourceW();
	// "GetInheritanceSourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetKernelObjectSecurity();
	// "GetKernelObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLengthSid();
	// "GetLengthSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocalManagedApplicationData();
	// "GetLocalManagedApplicationData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetLocalManagedApplications();
	// "GetLocalManagedApplications" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetManagedApplicationCategories();
	// "GetManagedApplicationCategories" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetManagedApplications();
	// "GetManagedApplications" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMultipleTrusteeA();
	// "GetMultipleTrusteeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMultipleTrusteeOperationA();
	// "GetMultipleTrusteeOperationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMultipleTrusteeOperationW();
	// "GetMultipleTrusteeOperationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetMultipleTrusteeW();
	// "GetMultipleTrusteeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedSecurityInfoA();
	// "GetNamedSecurityInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedSecurityInfoExA();
	// "GetNamedSecurityInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedSecurityInfoExW();
	// "GetNamedSecurityInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNamedSecurityInfoW();
	// "GetNamedSecurityInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetNumberOfEventLogRecords();
	// "GetNumberOfEventLogRecords" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOldestEventLogRecord();
	// "GetOldestEventLogRecord" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetOverlappedAccessResults();
	// "GetOverlappedAccessResults" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetPrivateObjectSecurity();
	// "GetPrivateObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorControl();
	// "GetSecurityDescriptorControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorDacl();
	// "GetSecurityDescriptorDacl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorGroup();
	// "GetSecurityDescriptorGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorLength();
	// "GetSecurityDescriptorLength" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorOwner();
	// "GetSecurityDescriptorOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorRMControl();
	// "GetSecurityDescriptorRMControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityDescriptorSacl();
	// "GetSecurityDescriptorSacl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityInfo();
	// "GetSecurityInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityInfoExA();
	// "GetSecurityInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSecurityInfoExW();
	// "GetSecurityInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetServiceDisplayNameA();
	// "GetServiceDisplayNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetServiceDisplayNameW();
	// "GetServiceDisplayNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetServiceKeyNameA();
	// "GetServiceKeyNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetServiceKeyNameW();
	// "GetServiceKeyNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSidIdentifierAuthority();
	// "GetSidIdentifierAuthority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSidLengthRequired();
	// "GetSidLengthRequired" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSidSubAuthority();
	// "GetSidSubAuthority" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetSidSubAuthorityCount();
	// "GetSidSubAuthorityCount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetStringConditionFromBinary();
	// "GetStringConditionFromBinary" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetThreadWaitChain();
	// "GetThreadWaitChain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTokenInformation();
	// "GetTokenInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTraceEnableFlags();
	// "GetTraceEnableFlags" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTraceEnableLevel();
	// "GetTraceEnableLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTraceLoggerHandle();
	// "GetTraceLoggerHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeFormA();
	// "GetTrusteeFormA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeFormW();
	// "GetTrusteeFormW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeNameA();
	// "GetTrusteeNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeNameW();
	// "GetTrusteeNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeTypeA();
	// "GetTrusteeTypeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetTrusteeTypeW();
	// "GetTrusteeTypeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserNameA();
	// "GetUserNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetUserNameW();
	// "GetUserNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall GetWindowsAccountDomainSid();
	// "GetWindowsAccountDomainSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_QueryTagInformation();
	// "I_QueryTagInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScGetCurrentGroupStateW();
	// "I_ScGetCurrentGroupStateW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScIsSecurityProcess();
	// "I_ScIsSecurityProcess" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScPnPGetServiceName();
	// "I_ScPnPGetServiceName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScQueryServiceConfig();
	// "I_ScQueryServiceConfig" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScRegisterPreshutdownRestart();
	// "I_ScRegisterPreshutdownRestart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScReparseServiceDatabase();
	// "I_ScReparseServiceDatabase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScSendPnPMessage();
	// "I_ScSendPnPMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScSendTSMessage();
	// "I_ScSendTSMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScSetServiceBitsA();
	// "I_ScSetServiceBitsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScSetServiceBitsW();
	// "I_ScSetServiceBitsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall I_ScValidatePnPService();
	// "I_ScValidatePnPService" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IdentifyCodeAuthzLevelW();
	// "IdentifyCodeAuthzLevelW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImpersonateAnonymousToken();
	// "ImpersonateAnonymousToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImpersonateLoggedOnUser();
	// "ImpersonateLoggedOnUser" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImpersonateNamedPipeClient();
	// "ImpersonateNamedPipeClient" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ImpersonateSelf();
	// "ImpersonateSelf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeAcl();
	// "InitializeAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeSecurityDescriptor();
	// "InitializeSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitializeSid();
	// "InitializeSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateShutdownA();
	// "InitiateShutdownA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateShutdownW();
	// "InitiateShutdownW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateSystemShutdownA();
	// "InitiateSystemShutdownA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateSystemShutdownExA();
	// "InitiateSystemShutdownExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateSystemShutdownExW();
	// "InitiateSystemShutdownExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InitiateSystemShutdownW();
	// "InitiateSystemShutdownW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall InstallApplication();
	// "InstallApplication" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsTextUnicode();
	// "IsTextUnicode" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsTokenRestricted();
	// "IsTokenRestricted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsTokenUntrusted();
	// "IsTokenUntrusted" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidAcl();
	// "IsValidAcl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidRelativeSecurityDescriptor();
	// "IsValidRelativeSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidSecurityDescriptor();
	// "IsValidSecurityDescriptor" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsValidSid();
	// "IsValidSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall IsWellKnownSid();
	// "IsWellKnownSid" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LockServiceDatabase();
	// "LockServiceDatabase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogonUserA();
	// "LogonUserA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogonUserExA();
	// "LogonUserExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogonUserExExW();
	// "LogonUserExExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogonUserExW();
	// "LogonUserExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LogonUserW();
	// "LogonUserW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupAccountNameA();
	// "LookupAccountNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupAccountNameW();
	// "LookupAccountNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupAccountSidA();
	// "LookupAccountSidA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupAccountSidW();
	// "LookupAccountSidW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeDisplayNameA();
	// "LookupPrivilegeDisplayNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeDisplayNameW();
	// "LookupPrivilegeDisplayNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeNameA();
	// "LookupPrivilegeNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeNameW();
	// "LookupPrivilegeNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeValueA();
	// "LookupPrivilegeValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupPrivilegeValueW();
	// "LookupPrivilegeValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupSecurityDescriptorPartsA();
	// "LookupSecurityDescriptorPartsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LookupSecurityDescriptorPartsW();
	// "LookupSecurityDescriptorPartsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaAddAccountRights();
	// "LsaAddAccountRights" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaAddPrivilegesToAccount();
	// "LsaAddPrivilegesToAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaClearAuditLog();
	// "LsaClearAuditLog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaClose();
	// "LsaClose" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaCreateAccount();
	// "LsaCreateAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaCreateSecret();
	// "LsaCreateSecret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaCreateTrustedDomain();
	// "LsaCreateTrustedDomain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaCreateTrustedDomainEx();
	// "LsaCreateTrustedDomainEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaDelete();
	// "LsaDelete" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaDeleteTrustedDomain();
	// "LsaDeleteTrustedDomain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumerateAccountRights();
	// "LsaEnumerateAccountRights" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumerateAccounts();
	// "LsaEnumerateAccounts" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumerateAccountsWithUserRight();
	// "LsaEnumerateAccountsWithUserRight" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumeratePrivileges();
	// "LsaEnumeratePrivileges" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumeratePrivilegesOfAccount();
	// "LsaEnumeratePrivilegesOfAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumerateTrustedDomains();
	// "LsaEnumerateTrustedDomains" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaEnumerateTrustedDomainsEx();
	// "LsaEnumerateTrustedDomainsEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaFreeMemory();
	// "LsaFreeMemory" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaGetAppliedCAPIDs();
	// "LsaGetAppliedCAPIDs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaGetQuotasForAccount();
	// "LsaGetQuotasForAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaGetRemoteUserName();
	// "LsaGetRemoteUserName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaGetSystemAccessAccount();
	// "LsaGetSystemAccessAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaGetUserName();
	// "LsaGetUserName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaICLookupNames();
	// "LsaICLookupNames" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaICLookupNamesWithCreds();
	// "LsaICLookupNamesWithCreds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaICLookupSids();
	// "LsaICLookupSids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaICLookupSidsWithCreds();
	// "LsaICLookupSidsWithCreds" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupNames();
	// "LsaLookupNames" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupNames2();
	// "LsaLookupNames2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupPrivilegeDisplayName();
	// "LsaLookupPrivilegeDisplayName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupPrivilegeName();
	// "LsaLookupPrivilegeName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupPrivilegeValue();
	// "LsaLookupPrivilegeValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupSids();
	// "LsaLookupSids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaLookupSids2();
	// "LsaLookupSids2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaManageSidNameMapping();
	// "LsaManageSidNameMapping" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaNtStatusToWinError();
	// "LsaNtStatusToWinError" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenAccount();
	// "LsaOpenAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenPolicy();
	// "LsaOpenPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenPolicySce();
	// "LsaOpenPolicySce" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenSecret();
	// "LsaOpenSecret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenTrustedDomain();
	// "LsaOpenTrustedDomain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaOpenTrustedDomainByName();
	// "LsaOpenTrustedDomainByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryCAPs();
	// "LsaQueryCAPs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryDomainInformationPolicy();
	// "LsaQueryDomainInformationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryForestTrustInformation();
	// "LsaQueryForestTrustInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryInfoTrustedDomain();
	// "LsaQueryInfoTrustedDomain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryInformationPolicy();
	// "LsaQueryInformationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQuerySecret();
	// "LsaQuerySecret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQuerySecurityObject();
	// "LsaQuerySecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryTrustedDomainInfo();
	// "LsaQueryTrustedDomainInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaQueryTrustedDomainInfoByName();
	// "LsaQueryTrustedDomainInfoByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaRemoveAccountRights();
	// "LsaRemoveAccountRights" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaRemovePrivilegesFromAccount();
	// "LsaRemovePrivilegesFromAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaRetrievePrivateData();
	// "LsaRetrievePrivateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetCAPs();
	// "LsaSetCAPs" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetDomainInformationPolicy();
	// "LsaSetDomainInformationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetForestTrustInformation();
	// "LsaSetForestTrustInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetInformationPolicy();
	// "LsaSetInformationPolicy" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetInformationTrustedDomain();
	// "LsaSetInformationTrustedDomain" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetQuotasForAccount();
	// "LsaSetQuotasForAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetSecret();
	// "LsaSetSecret" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetSecurityObject();
	// "LsaSetSecurityObject" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetSystemAccessAccount();
	// "LsaSetSystemAccessAccount" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetTrustedDomainInfoByName();
	// "LsaSetTrustedDomainInfoByName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaSetTrustedDomainInformation();
	// "LsaSetTrustedDomainInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall LsaStorePrivateData();
	// "LsaStorePrivateData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

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

	// int __stdcall MIDL_user_free_Ext();
	// "MIDL_user_free_Ext" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MSChapSrvChangePassword();
	// "MSChapSrvChangePassword" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MSChapSrvChangePassword2();
	// "MSChapSrvChangePassword2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MakeAbsoluteSD();
	// "MakeAbsoluteSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MakeAbsoluteSD2();
	// "MakeAbsoluteSD2" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MakeSelfRelativeSD();
	// "MakeSelfRelativeSD" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall MapGenericMask();
	// "MapGenericMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall N/A();
	// "N/A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyBootConfigStatus();
	// "NotifyBootConfigStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyChangeEventLog();
	// "NotifyChangeEventLog" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyServiceStatusChange();
	// "NotifyServiceStatusChange" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyServiceStatusChangeA();
	// "NotifyServiceStatusChangeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NotifyServiceStatusChangeW();
	// "NotifyServiceStatusChangeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall NpGetUserName();
	// "NpGetUserName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectCloseAuditAlarmA();
	// "ObjectCloseAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectCloseAuditAlarmW();
	// "ObjectCloseAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectDeleteAuditAlarmA();
	// "ObjectDeleteAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectDeleteAuditAlarmW();
	// "ObjectDeleteAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectOpenAuditAlarmA();
	// "ObjectOpenAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectOpenAuditAlarmW();
	// "ObjectOpenAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectPrivilegeAuditAlarmA();
	// "ObjectPrivilegeAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ObjectPrivilegeAuditAlarmW();
	// "ObjectPrivilegeAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenBackupEventLogA();
	// "OpenBackupEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenBackupEventLogW();
	// "OpenBackupEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEncryptedFileRawA();
	// "OpenEncryptedFileRawA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEncryptedFileRawW();
	// "OpenEncryptedFileRawW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEventLogA();
	// "OpenEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenEventLogW();
	// "OpenEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenProcessToken();
	// "OpenProcessToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenSCManagerA();
	// "OpenSCManagerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenSCManagerW();
	// "OpenSCManagerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenServiceA();
	// "OpenServiceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenServiceW();
	// "OpenServiceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenThreadToken();
	// "OpenThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenThreadWaitChainSession();
	// "OpenThreadWaitChainSession" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenTraceA();
	// "OpenTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OpenTraceW();
	// "OpenTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OperationEnd();
	// "OperationEnd" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall OperationStart();
	// "OperationStart" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfAddCounters();
	// "PerfAddCounters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfCloseQueryHandle();
	// "PerfCloseQueryHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfCreateInstance();
	// "PerfCreateInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfDecrementULongCounterValue();
	// "PerfDecrementULongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfDecrementULongLongCounterValue();
	// "PerfDecrementULongLongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfDeleteCounters();
	// "PerfDeleteCounters" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfDeleteInstance();
	// "PerfDeleteInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfEnumerateCounterSet();
	// "PerfEnumerateCounterSet" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfEnumerateCounterSetInstances();
	// "PerfEnumerateCounterSetInstances" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfIncrementULongCounterValue();
	// "PerfIncrementULongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfIncrementULongLongCounterValue();
	// "PerfIncrementULongLongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfOpenQueryHandle();
	// "PerfOpenQueryHandle" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfQueryCounterData();
	// "PerfQueryCounterData" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfQueryCounterInfo();
	// "PerfQueryCounterInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfQueryCounterSetRegistrationInfo();
	// "PerfQueryCounterSetRegistrationInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfQueryInstance();
	// "PerfQueryInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegCloseKey();
	// "PerfRegCloseKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegEnumKey();
	// "PerfRegEnumKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegEnumValue();
	// "PerfRegEnumValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegQueryInfoKey();
	// "PerfRegQueryInfoKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegQueryValue();
	// "PerfRegQueryValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfRegSetValue();
	// "PerfRegSetValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfSetCounterRefValue();
	// "PerfSetCounterRefValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfSetCounterSetInfo();
	// "PerfSetCounterSetInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfSetULongCounterValue();
	// "PerfSetULongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfSetULongLongCounterValue();
	// "PerfSetULongLongCounterValue" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfStartProvider();
	// "PerfStartProvider" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfStartProviderEx();
	// "PerfStartProviderEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PerfStopProvider();
	// "PerfStopProvider" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivilegeCheck();
	// "PrivilegeCheck" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivilegedServiceAuditAlarmA();
	// "PrivilegedServiceAuditAlarmA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall PrivilegedServiceAuditAlarmW();
	// "PrivilegedServiceAuditAlarmW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ProcessIdleTasks();
	// "ProcessIdleTasks" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ProcessIdleTasksW();
	// "ProcessIdleTasksW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ProcessTrace();
	// "ProcessTrace" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryAllTracesA();
	// "QueryAllTracesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryAllTracesW();
	// "QueryAllTracesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryLocalUserServiceName();
	// "QueryLocalUserServiceName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryRecoveryAgentsOnEncryptedFile();
	// "QueryRecoveryAgentsOnEncryptedFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QuerySecurityAccessMask();
	// "QuerySecurityAccessMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceConfig2A();
	// "QueryServiceConfig2A" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceConfig2W();
	// "QueryServiceConfig2W" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceConfigA();
	// "QueryServiceConfigA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceConfigW();
	// "QueryServiceConfigW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceDynamicInformation();
	// "QueryServiceDynamicInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceLockStatusA();
	// "QueryServiceLockStatusA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceLockStatusW();
	// "QueryServiceLockStatusW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceObjectSecurity();
	// "QueryServiceObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceStatus();
	// "QueryServiceStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryServiceStatusEx();
	// "QueryServiceStatusEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryTraceA();
	// "QueryTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryTraceW();
	// "QueryTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryUserServiceName();
	// "QueryUserServiceName" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall QueryUsersOnEncryptedFile();
	// "QueryUsersOnEncryptedFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadEncryptedFileRaw();
	// "ReadEncryptedFileRaw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadEventLogA();
	// "ReadEventLogA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReadEventLogW();
	// "ReadEventLogW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCloseKey();
	// "RegCloseKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegConnectRegistryA();
	// "RegConnectRegistryA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegConnectRegistryExA();
	// "RegConnectRegistryExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegConnectRegistryExW();
	// "RegConnectRegistryExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegConnectRegistryW();
	// "RegConnectRegistryW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCopyTreeA();
	// "RegCopyTreeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCopyTreeW();
	// "RegCopyTreeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyA();
	// "RegCreateKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyExA();
	// "RegCreateKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyExW();
	// "RegCreateKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyTransactedA();
	// "RegCreateKeyTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyTransactedW();
	// "RegCreateKeyTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegCreateKeyW();
	// "RegCreateKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyA();
	// "RegDeleteKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyExA();
	// "RegDeleteKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyExW();
	// "RegDeleteKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyTransactedA();
	// "RegDeleteKeyTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyTransactedW();
	// "RegDeleteKeyTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyValueA();
	// "RegDeleteKeyValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyValueW();
	// "RegDeleteKeyValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteKeyW();
	// "RegDeleteKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteTreeA();
	// "RegDeleteTreeA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteTreeW();
	// "RegDeleteTreeW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteValueA();
	// "RegDeleteValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDeleteValueW();
	// "RegDeleteValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDisablePredefinedCache();
	// "RegDisablePredefinedCache" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDisablePredefinedCacheEx();
	// "RegDisablePredefinedCacheEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegDisableReflectionKey();
	// "RegDisableReflectionKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnableReflectionKey();
	// "RegEnableReflectionKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyA();
	// "RegEnumKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyExA();
	// "RegEnumKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyExW();
	// "RegEnumKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegEnumKeyW();
	// "RegEnumKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

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

	// int __stdcall RegLoadAppKeyA();
	// "RegLoadAppKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegLoadAppKeyW();
	// "RegLoadAppKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

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

	// int __stdcall RegOpenKeyA();
	// "RegOpenKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyExA();
	// "RegOpenKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyExW();
	// "RegOpenKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyTransactedA();
	// "RegOpenKeyTransactedA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyTransactedW();
	// "RegOpenKeyTransactedW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenKeyW();
	// "RegOpenKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOpenUserClassesRoot();
	// "RegOpenUserClassesRoot" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegOverridePredefKey();
	// "RegOverridePredefKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryInfoKeyA();
	// "RegQueryInfoKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryInfoKeyW();
	// "RegQueryInfoKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryMultipleValuesA();
	// "RegQueryMultipleValuesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryMultipleValuesW();
	// "RegQueryMultipleValuesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryReflectionKey();
	// "RegQueryReflectionKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueA();
	// "RegQueryValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueExA();
	// "RegQueryValueExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueExW();
	// "RegQueryValueExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegQueryValueW();
	// "RegQueryValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegRenameKey();
	// "RegRenameKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegReplaceKeyA();
	// "RegReplaceKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegReplaceKeyW();
	// "RegReplaceKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegRestoreKeyA();
	// "RegRestoreKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegRestoreKeyW();
	// "RegRestoreKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyA();
	// "RegSaveKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyExA();
	// "RegSaveKeyExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyExW();
	// "RegSaveKeyExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSaveKeyW();
	// "RegSaveKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetKeySecurity();
	// "RegSetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetKeyValueA();
	// "RegSetKeyValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetKeyValueW();
	// "RegSetKeyValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueA();
	// "RegSetValueA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueExA();
	// "RegSetValueExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueExW();
	// "RegSetValueExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegSetValueW();
	// "RegSetValueW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegUnLoadKeyA();
	// "RegUnLoadKeyA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegUnLoadKeyW();
	// "RegUnLoadKeyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterEventSourceA();
	// "RegisterEventSourceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterEventSourceW();
	// "RegisterEventSourceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterIdleTask();
	// "RegisterIdleTask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterServiceCtrlHandlerA();
	// "RegisterServiceCtrlHandlerA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterServiceCtrlHandlerExA();
	// "RegisterServiceCtrlHandlerExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterServiceCtrlHandlerExW();
	// "RegisterServiceCtrlHandlerExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterServiceCtrlHandlerW();
	// "RegisterServiceCtrlHandlerW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterTraceGuidsA();
	// "RegisterTraceGuidsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterTraceGuidsW();
	// "RegisterTraceGuidsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RegisterWaitChainCOMCallback();
	// "RegisterWaitChainCOMCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoteRegEnumKeyWrapper();
	// "RemoteRegEnumKeyWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoteRegEnumValueWrapper();
	// "RemoteRegEnumValueWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoteRegQueryInfoKeyWrapper();
	// "RemoteRegQueryInfoKeyWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoteRegQueryValueWrapper();
	// "RemoteRegQueryValueWrapper" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveTraceCallback();
	// "RemoveTraceCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RemoveUsersFromEncryptedFile();
	// "RemoveUsersFromEncryptedFile" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReportEventA();
	// "ReportEventA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall ReportEventW();
	// "ReportEventW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall RevertToSelf();
	// "RevertToSelf" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SafeBaseRegGetKeySecurity();
	// "SafeBaseRegGetKeySecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferCloseLevel();
	// "SaferCloseLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferComputeTokenFromLevel();
	// "SaferComputeTokenFromLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferCreateLevel();
	// "SaferCreateLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferGetLevelInformation();
	// "SaferGetLevelInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferGetPolicyInformation();
	// "SaferGetPolicyInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferIdentifyLevel();
	// "SaferIdentifyLevel" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferRecordEventLogEntry();
	// "SaferRecordEventLogEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferSetLevelInformation();
	// "SaferSetLevelInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferSetPolicyInformation();
	// "SaferSetPolicyInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiChangeRegistryScope();
	// "SaferiChangeRegistryScope" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiCompareTokenLevels();
	// "SaferiCompareTokenLevels" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiIsDllAllowed();
	// "SaferiIsDllAllowed" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiIsExecutableFileType();
	// "SaferiIsExecutableFileType" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiPopulateDefaultsInRegistry();
	// "SaferiPopulateDefaultsInRegistry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiRecordEventLogEntry();
	// "SaferiRecordEventLogEntry" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SaferiSearchMatchingHashRules();
	// "SaferiSearchMatchingHashRules" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetAclInformation();
	// "SetAclInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEncryptedFileMetadata();
	// "SetEncryptedFileMetadata" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAccessListA();
	// "SetEntriesInAccessListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAccessListW();
	// "SetEntriesInAccessListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAclA();
	// "SetEntriesInAclA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAclW();
	// "SetEntriesInAclW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAuditListA();
	// "SetEntriesInAuditListA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetEntriesInAuditListW();
	// "SetEntriesInAuditListW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileSecurityA();
	// "SetFileSecurityA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetFileSecurityW();
	// "SetFileSecurityW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetInformationCodeAuthzLevelW();
	// "SetInformationCodeAuthzLevelW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetInformationCodeAuthzPolicyW();
	// "SetInformationCodeAuthzPolicyW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetKernelObjectSecurity();
	// "SetKernelObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedSecurityInfoA();
	// "SetNamedSecurityInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedSecurityInfoExA();
	// "SetNamedSecurityInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedSecurityInfoExW();
	// "SetNamedSecurityInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetNamedSecurityInfoW();
	// "SetNamedSecurityInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPrivateObjectSecurity();
	// "SetPrivateObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetPrivateObjectSecurityEx();
	// "SetPrivateObjectSecurityEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityAccessMask();
	// "SetSecurityAccessMask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorControl();
	// "SetSecurityDescriptorControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorDacl();
	// "SetSecurityDescriptorDacl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorGroup();
	// "SetSecurityDescriptorGroup" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorOwner();
	// "SetSecurityDescriptorOwner" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorRMControl();
	// "SetSecurityDescriptorRMControl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityDescriptorSacl();
	// "SetSecurityDescriptorSacl" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityInfo();
	// "SetSecurityInfo" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityInfoExA();
	// "SetSecurityInfoExA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetSecurityInfoExW();
	// "SetSecurityInfoExW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetServiceBits();
	// "SetServiceBits" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetServiceObjectSecurity();
	// "SetServiceObjectSecurity" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetServiceStatus();
	// "SetServiceStatus" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetThreadToken();
	// "SetThreadToken" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTokenInformation();
	// "SetTokenInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetTraceCallback();
	// "SetTraceCallback" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserFileEncryptionKey();
	// "SetUserFileEncryptionKey" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SetUserFileEncryptionKeyEx();
	// "SetUserFileEncryptionKeyEx" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartServiceA();
	// "StartServiceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartServiceCtrlDispatcherA();
	// "StartServiceCtrlDispatcherA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartServiceCtrlDispatcherW();
	// "StartServiceCtrlDispatcherW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartServiceW();
	// "StartServiceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartTraceA();
	// "StartTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StartTraceW();
	// "StartTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StopTraceA();
	// "StopTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall StopTraceW();
	// "StopTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction001();
	// "SystemFunction001" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction002();
	// "SystemFunction002" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction003();
	// "SystemFunction003" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction004();
	// "SystemFunction004" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction005();
	// "SystemFunction005" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction006();
	// "SystemFunction006" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction007();
	// "SystemFunction007" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction008();
	// "SystemFunction008" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction009();
	// "SystemFunction009" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction010();
	// "SystemFunction010" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction011();
	// "SystemFunction011" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction012();
	// "SystemFunction012" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction013();
	// "SystemFunction013" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction014();
	// "SystemFunction014" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction015();
	// "SystemFunction015" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction016();
	// "SystemFunction016" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction017();
	// "SystemFunction017" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction018();
	// "SystemFunction018" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction019();
	// "SystemFunction019" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction020();
	// "SystemFunction020" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction021();
	// "SystemFunction021" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction022();
	// "SystemFunction022" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction023();
	// "SystemFunction023" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction024();
	// "SystemFunction024" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction025();
	// "SystemFunction025" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction026();
	// "SystemFunction026" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction027();
	// "SystemFunction027" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction028();
	// "SystemFunction028" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction029();
	// "SystemFunction029" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction030();
	// "SystemFunction030" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction031();
	// "SystemFunction031" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction032();
	// "SystemFunction032" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction033();
	// "SystemFunction033" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction034();
	// "SystemFunction034" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction035();
	// "SystemFunction035" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction036();
	// "SystemFunction036" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction040();
	// "SystemFunction040" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall SystemFunction041();
	// "SystemFunction041" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceEvent();
	// "TraceEvent" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceEventInstance();
	// "TraceEventInstance" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceMessage();
	// "TraceMessage" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceMessageVa();
	// "TraceMessageVa" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceQueryInformation();
	// "TraceQueryInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TraceSetInformation();
	// "TraceSetInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TreeResetNamedSecurityInfoA();
	// "TreeResetNamedSecurityInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TreeResetNamedSecurityInfoW();
	// "TreeResetNamedSecurityInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TreeSetNamedSecurityInfoA();
	// "TreeSetNamedSecurityInfoA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TreeSetNamedSecurityInfoW();
	// "TreeSetNamedSecurityInfoW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrusteeAccessToObjectA();
	// "TrusteeAccessToObjectA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall TrusteeAccessToObjectW();
	// "TrusteeAccessToObjectW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UninstallApplication();
	// "UninstallApplication" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnlockServiceDatabase();
	// "UnlockServiceDatabase" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterIdleTask();
	// "UnregisterIdleTask" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UnregisterTraceGuids();
	// "UnregisterTraceGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateTraceA();
	// "UpdateTraceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UpdateTraceW();
	// "UpdateTraceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UsePinForEncryptedFilesA();
	// "UsePinForEncryptedFilesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall UsePinForEncryptedFilesW();
	// "UsePinForEncryptedFilesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WaitServiceState();
	// "WaitServiceState" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiCloseBlock();
	// "WmiCloseBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiDevInstToInstanceNameA();
	// "WmiDevInstToInstanceNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiDevInstToInstanceNameW();
	// "WmiDevInstToInstanceNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiEnumerateGuids();
	// "WmiEnumerateGuids" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiExecuteMethodA();
	// "WmiExecuteMethodA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiExecuteMethodW();
	// "WmiExecuteMethodW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiFileHandleToInstanceNameA();
	// "WmiFileHandleToInstanceNameA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiFileHandleToInstanceNameW();
	// "WmiFileHandleToInstanceNameW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiFreeBuffer();
	// "WmiFreeBuffer" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiMofEnumerateResourcesA();
	// "WmiMofEnumerateResourcesA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiMofEnumerateResourcesW();
	// "WmiMofEnumerateResourcesW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiNotificationRegistrationA();
	// "WmiNotificationRegistrationA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiNotificationRegistrationW();
	// "WmiNotificationRegistrationW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiOpenBlock();
	// "WmiOpenBlock" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQueryAllDataA();
	// "WmiQueryAllDataA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQueryAllDataMultipleA();
	// "WmiQueryAllDataMultipleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQueryAllDataMultipleW();
	// "WmiQueryAllDataMultipleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQueryAllDataW();
	// "WmiQueryAllDataW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQueryGuidInformation();
	// "WmiQueryGuidInformation" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQuerySingleInstanceA();
	// "WmiQuerySingleInstanceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQuerySingleInstanceMultipleA();
	// "WmiQuerySingleInstanceMultipleA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQuerySingleInstanceMultipleW();
	// "WmiQuerySingleInstanceMultipleW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiQuerySingleInstanceW();
	// "WmiQuerySingleInstanceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiReceiveNotificationsA();
	// "WmiReceiveNotificationsA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiReceiveNotificationsW();
	// "WmiReceiveNotificationsW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiSetSingleInstanceA();
	// "WmiSetSingleInstanceA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiSetSingleInstanceW();
	// "WmiSetSingleInstanceW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiSetSingleItemA();
	// "WmiSetSingleItemA" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WmiSetSingleItemW();
	// "WmiSetSingleItemW" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

	// int __stdcall WriteEncryptedFileRaw();
	// "WriteEncryptedFileRaw" :   [ wtypes.int , [ ] , {abi : ffi.FFI_STDCALL } ] ,

});
module.exports = advapi32;



// exports
module.exports = advapi32;