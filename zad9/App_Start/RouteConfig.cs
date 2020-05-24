using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace zad9
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Def",
                url: "",
                defaults: new { controller = "Songs", action = "Index", id = UrlParameter.Optional }
            );
            //reguła z punktu 8.
            routes.MapRoute(
                name: "id2",
                url: "dep",
                defaults: new { controller = "deprecatedSongs", action = "Square", id = 23 }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
