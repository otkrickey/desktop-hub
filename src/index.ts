import { app, BrowserWindow, Menu } from 'electron';
import path from 'path';

const isReactDev = Number.parseInt(process.env.R ?? '0') === 1;
const isElectronDev = Number.parseInt(process.env.E ?? '0') === 1;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    if (isReactDev) mainWindow.loadURL('http://localhost:3000');
    else mainWindow.loadFile(path.join(__dirname, '../client/build/index.html'));
    if (isElectronDev) mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow();
});

app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });