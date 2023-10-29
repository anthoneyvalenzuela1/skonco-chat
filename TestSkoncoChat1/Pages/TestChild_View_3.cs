using Bunit;
using Microsoft.Extensions.DependencyInjection;
using SkoncoChat1.Pages;

namespace TestSkoncoChat1
{
	[Collection("SkoncoChat1")]
	public class TestChild_View_3
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			var componentUnderTest = ctx.RenderComponent<Child_View_3>();
			Assert.NotNull(componentUnderTest);
		}
	}
}