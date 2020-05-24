using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zad9.Models;

namespace zad9.Controllers
{
    public class depracatedSongsController : Controller
    {
        // GET: Songs
        public ActionResult Index()
        {
            //Song czg = new Song("Ciągle Pada", "Czerwone Gitary", "Pop rock", 1);
            Song czg = new Song("Ciągle Pada", "Czerwone Gitary", 1, 1);
            return View(czg);
        }
        
        // GET: Songs/Square
        public ActionResult Square(int id)
        {
            int idSQ = id*id;
            return Content(idSQ.ToString());
        }
    }
}