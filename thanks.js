const vscode = require('vscode');

function mostrarNotificacion() {
    vscode.window.showInformationMessage('Gracias por instalar Fragmentos Python');
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.insertSnippet', () => {
        // Lógica para insertar el fragmento de código

        const primeraVez = !context.globalState.get('snippetInstalled');

        if (primeraVez) {
            mostrarNotificacion();

            context.globalState.update('snippetInstalled', true);
        }
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;
