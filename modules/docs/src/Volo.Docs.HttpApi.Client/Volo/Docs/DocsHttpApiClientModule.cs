using Volo.Abp.AuditLogging.HttpApi.Client.Volo.Abp.AuditLogging;
using Volo.Abp.Modularity;

namespace Volo.Docs
{
    [DependsOn(
        typeof(DocsApplicationContractsModule),
        typeof(AbpAuditLoggingHttpApiClientModule))]
    public class DocsHttpApiClientModule : AbpModule
    {
        
    }
}
