using EPiServer.Shell;
using Site.Models.Pages;

namespace Site.Business.DropContentPlugin
{
    [UIDescriptorRegistration]
    public class ContactPageUIDescriptor : UIDescriptor<ContactPage>, IEditorDropBehavior
    {
        public ContactPageUIDescriptor()
            : base(ContentTypeCssClassNames.Unknown)
        {
            DefaultView = CmsViewNames.OnPageEditView;
        }
        
        public EditorDropBehavior EditorDropBehaviour
        {
            get
            {
                return EditorDropBehavior.CreateLink;
            }
            set
            {

            }
        }
    }
}