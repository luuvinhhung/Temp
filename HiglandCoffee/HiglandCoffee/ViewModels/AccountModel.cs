using HiglandCoffee.Model;

namespace HiglandCoffee.ViewModels
{
    public class CreateAccountModel
    {
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public long branch_Id { get; set; }
    }

    public class AccountModel
    {
        public string username { get; set; }
        public string email { get; set; }
        public string Id { get; set; }
        public string fullName { get; set; }
        public string phoneNumber { get; set; }
        public long branch_Id { get; set; }

        public AccountModel() { }
        public AccountModel(Account account)
        {
            this.email = account.Email;
            this.username = account.UserName;
            this.Id = account.Id;
            this.fullName = account.FullName;
            this.phoneNumber = account.PhoneNumber;
            branch_Id = account.Branch.Id;
        }
    }
}