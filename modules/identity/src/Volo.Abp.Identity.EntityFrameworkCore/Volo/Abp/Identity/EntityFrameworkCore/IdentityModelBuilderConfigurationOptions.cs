using System;
using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Abp.Identity.EntityFrameworkCore
{
    public class IdentityModelBuilderConfigurationOptions : ModelBuilderConfigurationOptions
    {
        public Type UserType
        {
            get => _userType;
            set
            {
                if (!typeof(IdentityUser).IsAssignableFrom(value))
                {
                    throw new AbpException($"Given type ({value.AssemblyQualifiedName}) must be derived from the {typeof(IdentityUser)} class!");
                }

                _userType = value;
            }
        }
        private Type _userType = typeof(IdentityUser);

        public IdentityModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = AbpIdentityConsts.DefaultDbTablePrefix,
            [CanBeNull] string schema = AbpIdentityConsts.DefaultDbSchema)
            : base(
                tablePrefix, 
                schema)
        {

        }
    }
}