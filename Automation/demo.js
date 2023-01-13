let puppeteer = require('puppeteer')

console.log('before')

//launch browser
let browser = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
})   //return promises - pending

browser.then(function(browserInstance)
{
    let newTab = browserInstance.newPage() //for new tab
    return newTab 

    // return browserInstance
}).then(function(newPage)
{
    console.log('new Tab Opened')

    let pagewillbeOpened = newPage.goto('https://www.youtube.com/')
    return pagewillbeOpened
}).then(function()
{
    console.log('website opended')
})


console.log('after')