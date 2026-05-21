import{chromium} from 'playwright';

async  function multiUserTest(){
    let browser=await chromium.launch({headless:false});

    //Admin
    let AdminContext =await browser.newContext();
    let adminPage = await AdminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

    //Viewer
    let viewerContext=await browser.newContext();
    let ViewerPage= await viewerContext.newPage();
    await ViewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

     await AdminContext.close();
    await ViewerPage.close();
    await browser.close();


}
multiUserTest();
