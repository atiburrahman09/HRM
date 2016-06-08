using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(lmxHRM.Startup))]
namespace lmxHRM
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
