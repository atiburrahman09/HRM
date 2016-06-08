using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using HRM.BLL;
using HRM.Data;

namespace HRM.Web.Controllers
{
    public class DepartmentController : Controller
    {
       
        // GET: Department
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateDepartment()
        {
            return View();
        }
        public ActionResult EditDepartment()
        {
            return View();
        }

        public ActionResult DepartmentList()
        {
            return View();
        }
          [HttpPost]
        public JsonResult create(Department department)
        {

              HRMRepositoryBLL bll=new HRMRepositoryBLL();
              bool status = bll.Create(department);
              if (status)
              {
                  return Json(department);
              }
            //if (ModelState.IsValid)
            //{
            //    db.Departments.Add(department);
            //    db.SaveChanges();
            
            //}
            //Response.StatusCode = (int)HttpStatusCode.BadRequest;
              else
              {
                  Response.StatusCode = (int)HttpStatusCode.BadRequest;
                  return Json("Invalid Model State");
              }
           
        }

    }
}