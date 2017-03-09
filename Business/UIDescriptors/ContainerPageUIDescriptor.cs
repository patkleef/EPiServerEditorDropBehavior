using EPiServer.Editor;
using EPiServer.Shell;
using Site.Models.Pages;

namespace Site.Business.UIDescriptors
{
    [UIDescriptorRegistration]
    public class ContainerPageUIDescriptor : UIDescriptor<ContainerPage>, IEditorDropBehavior
    {
        public ContainerPageUIDescriptor()
            : base(ContentTypeCssClassNames.Container)
        {
            DefaultView = CmsViewNames.AllPropertiesView;
            EditorDropBehaviour = EditorDropBehavior.CreateLink;
        }

        public EditorDropBehavior EditorDropBehaviour { get; set; }
    }
}
