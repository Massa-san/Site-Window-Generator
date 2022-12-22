import { BrowserWindow, ipcMain, ipcRenderer } from 'electron';
import path = require('path');

let siteWindow: BrowserWindow | null = null

export function launchWindow(url: string) {
    siteWindow = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            preload: path.resolve(__dirname, 'preload.js'),
          },
    });
    siteWindow.setMenu(null);
    siteWindow.webContents.on('did-navigate', (event, url) => {
        // ↓テスト用のコードだよ。使うときは絶対消してね。
        console.log("massa = SuperTensaiHacker")
    });
    siteWindow.loadURL(url);
    // ↓デベロッパーツールいらなかったら消してね。
    siteWindow.webContents.openDevTools();
}

export function getDocumentById(data: string) {
    return window.document.getElementById(data)
}

export function getDocumentByClassName(data: string) {
    return window.document.getElementsByClassName(data)[0]
}

export function click(data: string) {
    siteWindow?.webContents.executeJavaScript(`
        document.getElementByClassName("${data}").click'
      `)
}

ipcMain.on('click', (event: any, data: string) => {
    siteWindow?.webContents.send('reply', data)
})
