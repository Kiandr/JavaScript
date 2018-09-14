using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace knockout101
{
    public class LoginController : Controller
    {

        //Get:    /Login/Index
        public ActionResult Index()
        {
           
            return View();
        }


        [HttpPost]
        [AllowAnonymous]
        public ActionResult Login()
        {

            //var firstName = "Elmira";
            //var passWord = "1234";
            //var result = firstName + passWord;
            //return Json(result, JsonRequestBehavior.AllowGet);


            return Json("success", JsonRequestBehavior.AllowGet);







        }


      
    }
}