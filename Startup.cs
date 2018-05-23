using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Swashbuckle.AspNetCore.Swagger;

namespace AspNetCoreMaterialUniversal
{
    public class Startup
    {
        // Order or run
        //1) Constructor
        //2) Configure services
        //3) Configure
        private IHostingEnvironment HostingEnvironment { get; }

        public static IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            HostingEnvironment = env;
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            if (HostingEnvironment.IsDevelopment())
            {
                services.AddNodeServices(options =>
                {
                    options.LaunchWithDebugging = true;
                    options.DebuggingPort = 9229;
                });
            }

            services.AddOptions();

            services.AddResponseCompression();

            services.AddMemoryCache();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "wwwroot/dist";
            });

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "AspNetCoreSpa", Version = "v1" });
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                loggerFactory.AddConsole(Startup.Configuration.GetSection("Logging"));
                loggerFactory.AddDebug();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseResponseCompression();
            }

            // https://github.com/openiddict/openiddict-core/issues/518
            // And
            // https://github.com/aspnet/Docs/issues/2384#issuecomment-297980490
            var forwarOptions = new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            };
            forwarOptions.KnownNetworks.Clear();
            forwarOptions.KnownProxies.Clear();

            app.UseForwardedHeaders(forwarOptions);

            app.UseAuthentication();

            app.UseStaticFiles();

            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                   name: "default",
                   template: "{controller}/{action=Index}/{id?}");

                // http://stackoverflow.com/questions/25982095/using-googleoauth2authenticationoptions-got-a-redirect-uri-mismatch-error
                // routes.MapRoute(name: "signin-google", template: "signin-google", defaults: new { controller = "Account", action = "ExternalLoginCallback" });

                routes.MapRoute(name: "set-language", template: "setlanguage", defaults: new { controller = "Home", action = "SetLanguage" });

                // routes.MapSpaFallbackRoute(name: "spa-fallback", defaults: new { controller = "Home", action = "Index" });
            });

            app.UseSpa(spa =>
                      {
                          spa.Options.SourcePath = "ClientApp";

                          /*
                          // If you want to enable server-side rendering (SSR),
                          // [1] In AspNetCoreSpa.csproj, change the <BuildServerSideRenderer> property
                          //     value to 'true', so that the SSR bundle is built during publish
                          // [2] Uncomment this code block
                          */

                          spa.UseSpaPrerendering(options =>
                          {
                              options.BootModulePath = $"{spa.Options.SourcePath}/dist-server/main.js";
                              //   options.BootModuleBuilder = env.IsDevelopment() ? new AngularCliBuilder(npmScript: "build:ssr") : null;
                              options.ExcludeUrls = new[] { "/sockjs-node" };
                              options.SupplyData = (requestContext, obj) =>
                                {
                                    //  var result = appService.GetApplicationData(requestContext).GetAwaiter().GetResult();
                                    obj.Add("Cookies", requestContext.Request.Cookies);
                                };
                          });

                          //   if (env.IsDevelopment())
                          //   {
                          //       spa.UseAngularCliServer(npmScript: "start");
                          //       //   OR
                          //       //spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                          //   }
                      });
        }
    }
}