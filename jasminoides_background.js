browser.commands.onCommand.addListener((command) => {
	if (command === 'toggle-sidebar') {
		browser.sidebarAction.toggle();
	}
});
