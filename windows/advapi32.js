// javascript ffi interface for advapi32
// by TinySec( root@tinysec.net )
// you can free use this code , but if you had modify , send a copy to to my mail please.

const printf = require('cprintf').printf;
const sprintf = require('cprintf').sprintf;
const wtypes = require('wtypes');
const ref = require('ref');
const ffi = require('ffi');
const iconv = require('iconv-lite');



var advapi32 = ffi.Library( "advapi32.dll" ,
{
	// "A_SHAFinal" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "A_SHAInit" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "A_SHAUpdate" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AbortSystemShutdownA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AbortSystemShutdownW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheck" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckAndAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckAndAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeAndAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeAndAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeResultList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeResultListAndAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeResultListAndAuditAlarmByHandleA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeResultListAndAuditAlarmByHandleW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AccessCheckByTypeResultListAndAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessAllowedAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessAllowedAceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessAllowedObjectAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessDeniedAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessDeniedAceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAccessDeniedObjectAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAuditAccessAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAuditAccessAceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddAuditAccessObjectAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddConditionalAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddMandatoryAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddUsersToEncryptedFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AddUsersToEncryptedFileEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AdjustTokenGroups" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AdjustTokenPrivileges" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AllocateAndInitializeSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AllocateLocallyUniqueId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AreAllAccessesGranted" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AreAnyAccessesGranted" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditComputeEffectivePolicyBySid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditComputeEffectivePolicyByToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditEnumerateCategories" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditEnumeratePerUserPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditEnumerateSubCategories" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditFree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupCategoryGuidFromCategoryId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupCategoryIdFromCategoryGuid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupCategoryNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupCategoryNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupSubCategoryNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditLookupSubCategoryNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditQueryGlobalSaclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditQueryGlobalSaclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditQueryPerUserPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditQuerySecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditQuerySystemPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditSetGlobalSaclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditSetGlobalSaclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditSetPerUserPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditSetSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "AuditSetSystemPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BackupEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BackupEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegCloseKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegCreateKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegDeleteKeyEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegDeleteValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegFlushKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegGetVersion" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegLoadKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegOpenKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegRestoreKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegSaveKeyEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegSetKeySecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegSetValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BaseRegUnLoadKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildExplicitAccessWithNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildExplicitAccessWithNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildImpersonateExplicitAccessWithNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildImpersonateExplicitAccessWithNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildImpersonateTrusteeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildImpersonateTrusteeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildSecurityDescriptorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildSecurityDescriptorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithObjectsAndNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithObjectsAndNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithObjectsAndSidA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithObjectsAndSidW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithSidA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "BuildTrusteeWithSidW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CancelOverlappedAccess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeServiceConfig2A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeServiceConfig2W" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeServiceConfigA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ChangeServiceConfigW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckForHiberboot" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CheckTokenMembership" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClearEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ClearEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseCodeAuthzLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseEncryptedFileRaw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseEventLog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseServiceHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseThreadWaitChainSession" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CloseTrace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CommandLineFromMsiDescriptor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ComputeAccessTokenFromCodeAuthzLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlServiceExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlServiceExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ControlTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertAccessToSecurityDescriptorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertAccessToSecurityDescriptorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSDToStringSDDomainW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSDToStringSDRootDomainA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSDToStringSDRootDomainW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToAccessA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToAccessNamedA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToAccessNamedW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToAccessW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToStringSecurityDescriptorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSecurityDescriptorToStringSecurityDescriptorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSidToStringSidA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertSidToStringSidW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSDToSDDomainA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSDToSDDomainW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSDToSDRootDomainA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSDToSDRootDomainW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSecurityDescriptorToSecurityDescriptorA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSecurityDescriptorToSecurityDescriptorW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSidToSidA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertStringSidToSidW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ConvertToAutoInheritPrivateObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CopySid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateCodeAuthzLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePrivateObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePrivateObjectSecurityEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreatePrivateObjectSecurityWithMultipleInheritance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateProcessAsUserA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateProcessAsUserW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateProcessWithLogonW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateProcessWithTokenW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateRestrictedToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateServiceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateServiceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateTraceInstanceId" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CreateWellKnownSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredBackupCredentials" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredDeleteA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredDeleteW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredEncryptAndMarshalBinaryBlob" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredEnumerateA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredEnumerateW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredFindBestCredentialA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredFindBestCredentialW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredFree" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredGetSessionTypes" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredGetTargetInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredGetTargetInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredIsMarshaledCredentialA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredIsMarshaledCredentialW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredIsProtectedA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredIsProtectedW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredMarshalCredentialA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredMarshalCredentialW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredProfileLoaded" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredProfileLoadedEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredProfileUnloaded" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredProtectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredProtectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredReadA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredReadByTokenHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredReadDomainCredentialsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredReadDomainCredentialsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredReadW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredRenameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredRenameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredRestoreCredentials" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredUnmarshalCredentialA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredUnmarshalCredentialW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredUnprotectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredUnprotectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredWriteA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredWriteDomainCredentialsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredWriteDomainCredentialsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredWriteW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpConvertCredential" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpConvertOneCredentialSize" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpConvertTargetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpDecodeCredential" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpEncodeCredential" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CredpEncodeSecret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptAcquireContextA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptAcquireContextW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptContextAddRef" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptCreateHash" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDecrypt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDeriveKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDestroyHash" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDestroyKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDuplicateHash" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptDuplicateKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptEncrypt" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptEnumProviderTypesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptEnumProviderTypesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptEnumProvidersA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptEnumProvidersW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptExportKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGenKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGenRandom" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetDefaultProviderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetDefaultProviderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetHashParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetKeyParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetProvParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptGetUserKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptHashData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptHashSessionKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptImportKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptReleaseContext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetHashParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetKeyParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetProvParam" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetProviderA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetProviderExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetProviderExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSetProviderW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSignHashA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptSignHashW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptVerifySignatureA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CryptVerifySignatureW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "CveEventWrite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DecryptFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DecryptFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeleteService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DeregisterEventSource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DestroyPrivateObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DuplicateEncryptionInfoFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DuplicateToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "DuplicateTokenEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfBackupEventLogFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfBackupEventLogFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfChangeNotify" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfClearEventLogFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfClearEventLogFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfCloseEventLog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfDeregisterEventSource" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfFlushEventLog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfNumberOfRecords" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfOldestRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfOpenBackupEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfOpenBackupEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfOpenEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfOpenEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfReadEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfReadEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfRegisterEventSourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfRegisterEventSourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfReportEventA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfReportEventAndSourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ElfReportEventW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableTrace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableTraceEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnableTraceEx2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EncryptFileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EncryptFileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EncryptedFileKeyInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EncryptionDisable" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDependentServicesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDependentServicesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumDynamicTimeZoneInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumServiceGroupW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumServicesStatusA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumServicesStatusExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumServicesStatusExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumServicesStatusW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumerateTraceGuids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EnumerateTraceGuidsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EqualDomainSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EqualPrefixSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EqualSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventAccessControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventAccessQuery" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventAccessRemove" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventActivityIdControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventProviderEnabled" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventRegister" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventSetInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventUnregister" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWrite" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWriteEndScenario" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWriteEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWriteStartScenario" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWriteString" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "EventWriteTransfer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FileEncryptionStatusA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FileEncryptionStatusW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FindFirstFreeAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlushEfsCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlushTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FlushTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeEncryptedFileKeyInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeEncryptedFileMetadata" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeEncryptionCertificateHashList" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeInheritedFromArray" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "FreeSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAccessPermissionsForObjectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAccessPermissionsForObjectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAclInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAuditedPermissionsFromAclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetAuditedPermissionsFromAclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentHwProfileA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetCurrentHwProfileW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetDynamicTimeZoneInformationEffectiveYears" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEffectiveRightsFromAclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEffectiveRightsFromAclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEncryptedFileMetadata" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetEventLogInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetExplicitEntriesFromAclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetExplicitEntriesFromAclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFileSecurityA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetFileSecurityW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInformationCodeAuthzLevelW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInformationCodeAuthzPolicyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInheritanceSourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetInheritanceSourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetKernelObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLengthSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLocalManagedApplicationData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetLocalManagedApplications" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetManagedApplicationCategories" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetManagedApplications" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMultipleTrusteeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMultipleTrusteeOperationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMultipleTrusteeOperationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetMultipleTrusteeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNamedSecurityInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNamedSecurityInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNamedSecurityInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNamedSecurityInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetNumberOfEventLogRecords" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOldestEventLogRecord" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetOverlappedAccessResults" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetPrivateObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorDacl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorGroup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorLength" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorOwner" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorRMControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityDescriptorSacl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSecurityInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetServiceDisplayNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetServiceDisplayNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetServiceKeyNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetServiceKeyNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSidIdentifierAuthority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSidLengthRequired" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSidSubAuthority" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetSidSubAuthorityCount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetStringConditionFromBinary" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetThreadWaitChain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTokenInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTraceEnableFlags" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTraceEnableLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTraceLoggerHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeFormA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeFormW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeTypeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetTrusteeTypeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUserNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetUserNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "GetWindowsAccountDomainSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_QueryTagInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScGetCurrentGroupStateW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScIsSecurityProcess" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScPnPGetServiceName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScQueryServiceConfig" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScRegisterPreshutdownRestart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScReparseServiceDatabase" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScSendPnPMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScSendTSMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScSetServiceBitsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScSetServiceBitsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "I_ScValidatePnPService" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IdentifyCodeAuthzLevelW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ImpersonateAnonymousToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ImpersonateLoggedOnUser" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ImpersonateNamedPipeClient" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ImpersonateSelf" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeAcl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeSecurityDescriptor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitializeSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateShutdownA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateShutdownW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateSystemShutdownA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateSystemShutdownExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateSystemShutdownExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InitiateSystemShutdownW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "InstallApplication" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsTextUnicode" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsTokenRestricted" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsTokenUntrusted" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidAcl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidRelativeSecurityDescriptor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidSecurityDescriptor" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsValidSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "IsWellKnownSid" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LockServiceDatabase" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogonUserA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogonUserExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogonUserExExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogonUserExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LogonUserW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupAccountNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupAccountNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupAccountSidA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupAccountSidW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeDisplayNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeDisplayNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupPrivilegeValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupSecurityDescriptorPartsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LookupSecurityDescriptorPartsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaAddAccountRights" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaAddPrivilegesToAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaClearAuditLog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaClose" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaCreateAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaCreateSecret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaCreateTrustedDomain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaCreateTrustedDomainEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaDelete" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaDeleteTrustedDomain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumerateAccountRights" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumerateAccounts" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumerateAccountsWithUserRight" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumeratePrivileges" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumeratePrivilegesOfAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumerateTrustedDomains" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaEnumerateTrustedDomainsEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaFreeMemory" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaGetAppliedCAPIDs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaGetQuotasForAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaGetRemoteUserName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaGetSystemAccessAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaGetUserName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaICLookupNames" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaICLookupNamesWithCreds" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaICLookupSids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaICLookupSidsWithCreds" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupNames" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupNames2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupPrivilegeDisplayName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupPrivilegeName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupPrivilegeValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupSids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaLookupSids2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaManageSidNameMapping" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaNtStatusToWinError" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenPolicySce" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenSecret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenTrustedDomain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaOpenTrustedDomainByName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryCAPs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryDomainInformationPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryForestTrustInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryInfoTrustedDomain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryInformationPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQuerySecret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQuerySecurityObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryTrustedDomainInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaQueryTrustedDomainInfoByName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaRemoveAccountRights" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaRemovePrivilegesFromAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaRetrievePrivateData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetCAPs" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetDomainInformationPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetForestTrustInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetInformationPolicy" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetInformationTrustedDomain" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetQuotasForAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetSecret" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetSecurityObject" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetSystemAccessAccount" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetTrustedDomainInfoByName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaSetTrustedDomainInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "LsaStorePrivateData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD4Final" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD4Init" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD4Update" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD5Final" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD5Init" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MD5Update" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MIDL_user_free_Ext" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MSChapSrvChangePassword" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MSChapSrvChangePassword2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MakeAbsoluteSD" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MakeAbsoluteSD2" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MakeSelfRelativeSD" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "MapGenericMask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "N/A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyBootConfigStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyChangeEventLog" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyServiceStatusChange" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyServiceStatusChangeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NotifyServiceStatusChangeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "NpGetUserName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectCloseAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectCloseAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectDeleteAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectDeleteAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectOpenAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectOpenAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectPrivilegeAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ObjectPrivilegeAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenBackupEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenBackupEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenEncryptedFileRawA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenEncryptedFileRawW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenProcessToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenSCManagerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenSCManagerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenServiceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenServiceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenThreadToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenThreadWaitChainSession" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OpenTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OperationEnd" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "OperationStart" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfAddCounters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfCloseQueryHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfCreateInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfDecrementULongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfDecrementULongLongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfDeleteCounters" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfDeleteInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfEnumerateCounterSet" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfEnumerateCounterSetInstances" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfIncrementULongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfIncrementULongLongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfOpenQueryHandle" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfQueryCounterData" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfQueryCounterInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfQueryCounterSetRegistrationInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfQueryInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegCloseKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegEnumKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegEnumValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegQueryInfoKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegQueryValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfRegSetValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfSetCounterRefValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfSetCounterSetInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfSetULongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfSetULongLongCounterValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfStartProvider" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfStartProviderEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PerfStopProvider" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivilegeCheck" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivilegedServiceAuditAlarmA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "PrivilegedServiceAuditAlarmW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ProcessIdleTasks" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ProcessIdleTasksW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ProcessTrace" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryAllTracesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryAllTracesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryLocalUserServiceName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryRecoveryAgentsOnEncryptedFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QuerySecurityAccessMask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceConfig2A" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceConfig2W" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceConfigA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceConfigW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceDynamicInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceLockStatusA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceLockStatusW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryServiceStatusEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryUserServiceName" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "QueryUsersOnEncryptedFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReadEncryptedFileRaw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReadEventLogA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReadEventLogW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCloseKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegConnectRegistryA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegConnectRegistryExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegConnectRegistryExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegConnectRegistryW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCopyTreeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCopyTreeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyTransactedA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyTransactedW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegCreateKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyTransactedA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyTransactedW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteTreeA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteTreeW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDeleteValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDisablePredefinedCache" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDisablePredefinedCacheEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegDisableReflectionKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnableReflectionKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegEnumValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegFlushKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegGetKeySecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegGetValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegGetValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadAppKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadAppKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadMUIStringA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegLoadMUIStringW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegNotifyChangeKeyValue" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenCurrentUser" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyTransactedA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyTransactedW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOpenUserClassesRoot" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegOverridePredefKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryInfoKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryInfoKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryMultipleValuesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryMultipleValuesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryReflectionKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryValueExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryValueExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegQueryValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegRenameKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegReplaceKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegReplaceKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegRestoreKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegRestoreKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSaveKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSaveKeyExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSaveKeyExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSaveKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetKeySecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetKeyValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetKeyValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetValueA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetValueExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetValueExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegSetValueW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegUnLoadKeyA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegUnLoadKeyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterEventSourceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterEventSourceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterIdleTask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterServiceCtrlHandlerA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterServiceCtrlHandlerExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterServiceCtrlHandlerExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterServiceCtrlHandlerW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterTraceGuidsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterTraceGuidsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RegisterWaitChainCOMCallback" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoteRegEnumKeyWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoteRegEnumValueWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoteRegQueryInfoKeyWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoteRegQueryValueWrapper" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveTraceCallback" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RemoveUsersFromEncryptedFile" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReportEventA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "ReportEventW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "RevertToSelf" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SafeBaseRegGetKeySecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferCloseLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferComputeTokenFromLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferCreateLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferGetLevelInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferGetPolicyInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferIdentifyLevel" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferRecordEventLogEntry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferSetLevelInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferSetPolicyInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiChangeRegistryScope" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiCompareTokenLevels" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiIsDllAllowed" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiIsExecutableFileType" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiPopulateDefaultsInRegistry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiRecordEventLogEntry" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SaferiSearchMatchingHashRules" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetAclInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEncryptedFileMetadata" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAccessListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAccessListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAclA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAclW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAuditListA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetEntriesInAuditListW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetFileSecurityA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetFileSecurityW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetInformationCodeAuthzLevelW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetInformationCodeAuthzPolicyW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetKernelObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetNamedSecurityInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetNamedSecurityInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetNamedSecurityInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetNamedSecurityInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPrivateObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetPrivateObjectSecurityEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityAccessMask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorDacl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorGroup" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorOwner" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorRMControl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityDescriptorSacl" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityInfo" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityInfoExA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetSecurityInfoExW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetServiceBits" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetServiceObjectSecurity" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetServiceStatus" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetThreadToken" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTokenInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetTraceCallback" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetUserFileEncryptionKey" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SetUserFileEncryptionKeyEx" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartServiceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartServiceCtrlDispatcherA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartServiceCtrlDispatcherW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartServiceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StartTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StopTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "StopTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction001" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction002" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction003" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction004" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction005" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction006" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction007" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction008" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction009" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction010" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction011" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction012" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction013" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction014" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction015" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction016" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction017" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction018" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction019" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction020" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction021" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction022" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction023" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction024" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction025" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction026" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction027" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction028" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction029" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction030" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction031" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction032" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction033" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction034" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction035" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction036" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction040" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "SystemFunction041" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceEvent" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceEventInstance" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceMessage" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceMessageVa" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceQueryInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TraceSetInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TreeResetNamedSecurityInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TreeResetNamedSecurityInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TreeSetNamedSecurityInfoA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TreeSetNamedSecurityInfoW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TrusteeAccessToObjectA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "TrusteeAccessToObjectW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UninstallApplication" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnlockServiceDatabase" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterIdleTask" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UnregisterTraceGuids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateTraceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UpdateTraceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UsePinForEncryptedFilesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "UsePinForEncryptedFilesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WaitServiceState" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiCloseBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiDevInstToInstanceNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiDevInstToInstanceNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiEnumerateGuids" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiExecuteMethodA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiExecuteMethodW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiFileHandleToInstanceNameA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiFileHandleToInstanceNameW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiFreeBuffer" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiMofEnumerateResourcesA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiMofEnumerateResourcesW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiNotificationRegistrationA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiNotificationRegistrationW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiOpenBlock" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQueryAllDataA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQueryAllDataMultipleA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQueryAllDataMultipleW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQueryAllDataW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQueryGuidInformation" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQuerySingleInstanceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQuerySingleInstanceMultipleA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQuerySingleInstanceMultipleW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiQuerySingleInstanceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiReceiveNotificationsA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiReceiveNotificationsW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiSetSingleInstanceA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiSetSingleInstanceW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiSetSingleItemA" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WmiSetSingleItemW" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

	// "WriteEncryptedFileRaw" : 
	// [
	//	wtypes.BOOL ,
	//	[ 
	//		 wtypes.HANDLE , // __in HANDLE hObject 
	//	], 
	//	{ abi : ffi.FFI_STDCALL }
	// ],

});
module.exports = advapi32;
