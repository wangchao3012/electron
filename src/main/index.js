import { app, BrowserWindow, ipcMain, screen } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:19080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;


  var opt = {
    width: width,
    height: height,
    minWidth: 1280,
    minHeight: 300,
    autoHideMenuBar: true,
    useContentSize: true,
    backgroundColor: '#000',
    // frame: false
  }
  if (process.platform == 'darwin') {
    opt.titleBarStyle = 'hiddenInset';
  } else if (process.platform == 'win32') {
    opt.frame = false;
  } else {
    opt.frame = false;
  }

  // set linux icon to the top left of window
  if (process.platform == 'linux') {
    var exeDir = path.dirname(app.getPath('exe'));
    opt['icon'] = path.join(exeDir, 'icon.png');
  }

  mainWindow = new BrowserWindow(opt)

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  //登录窗口最小化
  ipcMain.on('window-min', function () {
    mainWindow.minimize();
  })
  //登录窗口最大化
  ipcMain.on('window-max', function () {
    if (mainWindow.isMaximized()) {
      mainWindow.restore();
    } else {
      mainWindow.maximize();
    }
  })
  ipcMain.on('window-close', function () {
    mainWindow.close();
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/**/
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})

