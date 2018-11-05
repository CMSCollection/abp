using Volo.Abp.AuditLogging;
using Volo.Abp.Modularity;

namespace Volo.Docs
{
    [DependsOn(typeof(DocsDomainSharedModule),
               typeof(AbpAuditLoggingApplicationContractsModule))]
    public class DocsApplicationContractsModule : AbpModule
    {

    }
}
