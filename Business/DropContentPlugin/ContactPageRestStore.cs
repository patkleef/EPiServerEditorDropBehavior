using System.Text;
using System.Web;
using System.Web.Mvc;
using EPiServer;
using EPiServer.Core;
using EPiServer.ServiceLocation;
using EPiServer.Shell.Services.Rest;
using Site.Models.Pages;

namespace Site.Business.DropContentPlugin
{
    [RestStore("contactpagestore")]
    public class ContactPageRestStore : RestControllerBase
    {
        private IContentRepository _contentRepository;

        public RestResult Get(int id)
        {
            _contentRepository = ServiceLocator.Current.GetInstance<IContentRepository>();
            
            var page = _contentRepository.Get<ContactPage>(new ContentReference(id));

            var stringBuilder = new StringBuilder();
            stringBuilder.AppendFormat("<p>{0}</p>", page.Name);
            stringBuilder.AppendFormat("<p>{0}</p>", page.Email);
            stringBuilder.AppendFormat("<p>{0}</p>", page.Phone);

            return Rest(new { data = stringBuilder.ToString() });
        }
    }
}