using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Data;

namespace HRM.BLL
{
    public class HRMRepositoryBLL
    {
        public bool Create(Department department)
        {
            HRMRepositoryDAL dal=new HRMRepositoryDAL();
            bool status = dal.Create(department);
            return status;
        }
    }
}
