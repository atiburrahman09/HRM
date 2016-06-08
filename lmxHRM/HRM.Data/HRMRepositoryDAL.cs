using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Data
{
    public class HRMRepositoryDAL
    {
        private lmxHRMEntities db = new lmxHRMEntities();
        public bool Create(Department department)
        {
            bool status = false;
            db.Departments.Add(department);
            db.SaveChanges();

            return status = true;

        }
    }
}
