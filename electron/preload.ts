import { Url } from "url"

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    launch: async (data: Url) => await ipcRenderer.send('launch', data),
    getDocumentById: async (data: Url) => await ipcRenderer.send('get_element_by_id', data),
    getDocumentByClassName: async (data: Url) => await ipcRenderer.send('get_element_by_classname', data),
    click: async (data: Url) => await ipcRenderer.send('click', data),

    onReplySiteWindow: (listener: any) => ipcRenderer.on('reply', listener)
  }
)