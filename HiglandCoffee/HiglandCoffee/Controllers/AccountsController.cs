using HiglandCoffee.Infrastructure;
using HiglandCoffee.Model;
using HiglandCoffee.ViewModels;
using Microsoft.AspNet.Identity;
using System.Linq;
using System.Net;
using System.Web.Http;

namespace HiglandCoffee.Controllers
{
    public class AccountsController : ApiController
    {
        private ApplicationUserManager _userManager;
        private ApplicationRoleManager _roleManager;
        private ErrorModel error;

        public AccountsController(ApplicationUserManager userManager, ApplicationRoleManager roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            error = new ErrorModel();
        }

        //Lấy thông tin tất cả nhân viên
        /**
         * @api {Get} /Accounts/GetAll?page={page}&pageSize={pageSize}&filter={filter}
         * @apigroup Accounts
         * @apiPermission none
         * @apiVersion 1.0.0
         *
         * @apiSuccess {long} Id Id của nhân viên
         * @apiSuccess {string} username Username nhân viên
         * @apiSuccess {string} email email nhân viên
         * @apiSuccess {string} fullName Họ tên
         * @apiSuccess {string} phoneNumber Số điện thoại
         * @apiSuccess {string} branch_id Mã chi nhánh
         *
         * @apiSuccessExample {json} Response:
         * {
         *   "username": "admin",
         *  "email": "admin@test.com",
         *  "Id": "36cd045c-94a3-48a2-9a3d-05c603011b3f",
         *  "fullName": "Tấn Triều",
         *  "phoneNumber": "0123456789",
         *  "Branch_id" : 1
         * }
         */

        [HttpGet]
        public IHttpActionResult GetAll(int page, int pageSize, string filter = null)
        {
            int totalRow = 0;
            var model = _userManager.Users.Select(x => new AccountModel
            {
                email = x.Email,
                username = x.UserName,
                Id = x.Id,
                fullName = x.FullName
            });
            totalRow = model.Count();
            if (!string.IsNullOrEmpty(filter))
                model = model.Where(x => x.username.Contains(filter) || x.fullName.Contains(filter));
            var list = model.OrderBy(x => x.fullName).Skip((page - 1) * pageSize).Take(pageSize);
            return Ok(list);
        }

        //Lấy thông tin nhân viên theo username
        /**
         * @api {Get} /Accounts/GetByUserName?username={username}
         * @apigroup Accounts
         * @apiPermission none
         * @apiVersion 1.0.0
         *
         * @apiSuccess {long} Id Id của nhân viên
         * @apiSuccess {string} username Username nhân viên
         * @apiSuccess {string} email email nhân viên
         * @apiSuccess {string} fullName Họ tên
         * @apiSuccess {string} phoneNumber Số điện thoại
         * @apiSuccess {string} branch_id Mã chi nhánh
         *
         * @apiSuccessExample {json} Response:
         * {
         *   "username": "admin",
         *  "email": "admin@test.com",
         *  "Id": "36cd045c-94a3-48a2-9a3d-05c603011b3f",
         *  "fullName": null,
         *  "phoneNumber": null
         *  "Branch_id" : 1
         * }
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Not Found"
         *     }
         *
         */

        [HttpGet]
        public IHttpActionResult GetByUsername(string username)
        {
            IHttpActionResult httpActionResult;
            var user = _userManager.Users.FirstOrDefault(x => x.UserName == username);
            if (user == null)
            {
                error.Add("Not Found");
                httpActionResult = new ErrorActionResult(Request, HttpStatusCode.NotFound, error);
            }
            else
            {
                httpActionResult = Ok(new AccountModel
                {
                    email = user.Email,
                    username = user.UserName,
                    Id = user.Id,
                    fullName = user.FullName,
                    phoneNumber = user.PhoneNumber
                });
            }
            return httpActionResult;
        }
    }
}