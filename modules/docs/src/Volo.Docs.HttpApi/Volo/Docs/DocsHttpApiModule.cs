using Volo.Abp.AuditLogging;
using Volo.Abp.Modularity;

namespace Volo.Docs
{
    [DependsOn(
        typeof(DocsApplicationContractsModule),
        typeof(AbpAuditLoggingHttpApiModule))]
    public class DocsHttpApiModule : AbpModule
    {
        
    }
}
