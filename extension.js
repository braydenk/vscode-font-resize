const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  console.log('font-resizer activated!');

  let incrementFontSize = vscode.commands.registerCommand('extension.incrementFontSize', function () {
    let config = vscode.workspace.getConfiguration();
    let newFontSize = config.get('editor.fontSize') + 1;
    config.update('editor.fontSize', newFontSize);
  });

  let decrementFontSize = vscode.commands.registerCommand('extension.decrementFontSize', function () {
    let config = vscode.workspace.getConfiguration();
    let newFontSize = config.get('editor.fontSize') - 1;
    config.update('editor.fontSize', newFontSize);
  });

  context.subscriptions.push(incrementFontSize, decrementFontSize);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
