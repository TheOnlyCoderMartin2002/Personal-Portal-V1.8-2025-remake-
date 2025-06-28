let DEV_PASSKEY = 7845;
let RAN_PIN = 1234;
let PIN_ACCESS_PANEL = document.getElementById("pin-access-panel");
let PIN_ACCESS_INP = document.getElementById("pin-access-inp");
let INFO_PAR = document.getElementById("info-par");
let NUM_KEY_PANEL = document.getElementById("num-key-panel");
let WELCOME_PANEL = document.getElementById("welcome-panel");
let MAIN_OPTION_MENU = document.getElementById("main-option-menu");
let PIN_CONTROL_PANEL = document.getElementById("pin-control-panel");
let PIN_ENT_BTN = document.getElementById("pin-ent-btn");
let PIN_CLR_BTN = document.getElementById("pin-clr-btn");

let CLOSE_WELCOME_PANEL = document.getElementById("close-welcome-panel");


function clearInp() {
    PIN_ACCESS_INP.value = "";
}

if (PIN_ACCESS_INP.length > 4) {
    alert("Pin is too long");
}

function enterBtn() {
    if (PIN_ACCESS_INP.value == DEV_PASSKEY) {
        alert("| _ LOGIN APPROVED _ |");
        console.log("PASSKEY ACCEPTED");
        console.log("LOGGED IN SUCCESSFULLY!");
        
        WELCOME_PANEL.style.display = "block";
        
        PIN_ACCESS_INP.style.display = "none";
        PIN_ACCESS_PANEL.style.display = "none";
        NUM_KEY_PANEL.style.display = "none";
        INFO_PAR.style.display = "none";
        PIN_CONTROL_PANEL.style.display = "none";
        clearInp();
    } else {
        alert("(!!) LOGIN FAILED (!!)");
        console.log("PASSKEY REJECTED");
        console.log("The passkey is inocorrect, not long enough or abscent!");
        clearInp();
    }
}

function closeWelcomePanel() {
    document.getElementById("h2-1").style.display = "none";
    document.getElementById("info-par-2").style.display = "none";
    document.getElementById("info-par-3").style.display = "none";
    document.getElementById("info-par-4").style.display = "none";
    document.getElementById("close-welcome-panel").style.display = "none";
    MAIN_OPTION_MENU.style.display = "flex";
    document.getElementById("logout-panel").style.display = "block";
    document.getElementById("portal-logout").style.display = "flex";
    document.getElementById("option-menu-2").style.display = "block";
}

function openCalcJot() {
    document.getElementById("calc-jot-app").style.display = "flex";
    document.getElementById("close-calc-jot").style.display = "block";
    document.getElementById("close-calc-jot").style.margin = "auto";
    document.getElementById("br-1").style.display = "block";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("themes-panel").style.display = "none";
    
    WELCOME_PANEL.style.width = "900px";
    WELCOME_PANEL.style.height = "fit-content";
    MAIN_OPTION_MENU.style.display = "none";
}

function closeCalcJot() {
    document.getElementById("calc-jot-app").style.display = "none";
    document.getElementById("close-calc-jot").style.display = "none";
    document.getElementById("br-1").style.display = "block";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    WELCOME_PANEL.style.width = "95%";
    WELCOME_PANEL.style.height = "95%";
    MAIN_OPTION_MENU.style.display = "flex";
}

function showPortalInfo() {
    document.getElementById("portal-info-panel").style.display = "block";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("close-portal-info").style.display = "block";
    document.getElementById("close-portal-info").style.margin = "auto";
    document.getElementById("close-portal-info").style.backgroundColor = "maroon";
    document.getElementById("close-portal-info").style.color = "aliceblue";
    document.getElementById("close-portal-info").style.fontWeight = "bold";
    document.getElementById("themes-panel").style.display = "none";
    MAIN_OPTION_MENU.style.display = "none";
    WELCOME_PANEL.style.width = "95%";
    WELCOME_PANEL.style.height = "95%";
}

function closePortalInfo() {
    document.getElementById("portal-info-panel").style.display = "none";
    document.getElementById("close-portal-info").style.display = "none";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("root-container").style.width = "1000px";
    MAIN_OPTION_MENU.style.display = "flex";
    WELCOME_PANEL.style.height = "95%";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("close-info-panel").style.display = "none";
}

function logoutPortal() {
    WELCOME_PANEL.style.display = "none";
    PIN_ACCESS_INP.style.display = "block";
    PIN_ACCESS_PANEL.style.display = "block";
    PIN_CONTROL_PANEL.style.display = "flex";
    NUM_KEY_PANEL.style.display = "flex";
    INFO_PAR.style.display = "block";
    document.getElementById("themes-panel").style.display = "none";
    alert("Logged out successfully!");
    console.log("Logged out successfully!");
}

function showMusicPanel() {
    MAIN_OPTION_MENU.style.display = "none";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("personal-music-panel").style.display = "block";
    document.getElementById("close-music-panel").style.display = "flex";
    document.getElementById("themes-panel").style.display = "none";
}

function closeMusicPanel() {
    MAIN_OPTION_MENU.style.display = "flex";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("personal-music-panel").style.display = "none";
    document.getElementById("close-video-panel").style.display = "none";
}

function showVideosPanel() {
    MAIN_OPTION_MENU.style.display = "none";
    WELCOME_PANEL.style.display = "100%";
    document.getElementById("root-container").style.width = "1000px";
    document.getElementById("root-container").style.height = "700px";
    document.getElementById("personal-video-panel").style.display = "block";
    document.getElementById("close-video-panel").style.display = "block";
}

function closeVideoPanel() {
    MAIN_OPTION_MENU.style.display = "flex"
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("personal-video-panel").style.display = "none";
    document.getElementById("close-music-panel").style.display = "none";
}

function inDevMssg() {
    alert("Under development - coming soon...");
}

function showThemes() {
    document.getElementById("themes-panel").style.display = "flex";
    document.getElementById("root-container").style.height = "700px";
}

function closeThemes() {
    document.getElementById("themes-panel").style.display = "none";
    document.getElementById("root-container").style.height = "700px";
}

function brightTheme() {
    MAIN_OPTION_MENU.style.backgroundColor = "darkorange";
    WELCOME_PANEL.style.backgroundColor = "black";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("root").style.backgroundColor = "gold";
    document.getElementById("title").style.color = "aliceblue";
    document.getElementById("root-container").style.backgroundImage = "linear-gradient(darkorange, darkorange";
}

function ambientDarkTheme() {
    WELCOME_PANEL.style.backgroundColor = "black";
    WELCOME_PANEL.style.width = "95%";
    MAIN_OPTION_MENU.style.backgroundColor = "darkblue";
    document.getElementById("root").style.backgroundColor = "black";
    document.getElementById("title").style.color = "aliceblue";
    document.getElementById("root-container").style.backgroundImage = "linear-gradient(darkblue, darkblue";
}

function rgbTheme() {
    MAIN_OPTION_MENU.style.backgroundColor = "red";
    WELCOME_PANEL.style.backgroundColor = "black";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("root").style.backgroundColor = "red";
    document.getElementById("root-container").style.backgroundImage = "linear-gradient(green, green)";
}

function defaultTheme() {
    MAIN_OPTION_MENU.style.backgroundColor = "lightslategray";
    WELCOME_PANEL.style.backgroundColor = "black";
    document.getElementById("root").style.backgroundColor = "#483D8B";
    document.getElementById("root-container").style.backgroundImage = "linear-gradient(transparent, transparent)";
}

function plainStructureTheme() {
    MAIN_OPTION_MENU.style.backgroundColor = "transparent";
    WELCOME_PANEL.style.backgroundImage = "linear-gradient(transparent, transparent)";
    document.getElementById("root").style.backgroundColor = "darkmagenta";
    document.getElementById("root").style.color = "black";
    document.getElementById("root-container").style.backgroundImage = "linear-gradient(transparent, transparent)";
}

function showPatchNotes() {
    MAIN_OPTION_MENU.style.display = "none";
    document.getElementById("patch-notes-panel").style.display = "block";
    document.getElementById("close-patch-notes-btn").style.display = "block";
    WELCOME_PANEL.style.width = "95%";
    document.getElementById("themes-panel").style.display = "none";
}

function closePatchNotes() {
    MAIN_OPTION_MENU.style.display = "flex";
    document.getElementById("patch-notes-panel").style.display = "none";
    document.getElementById("close-patch-notes-btn").style.display = "none";
    WELCOME_PANEL.style.width = "95%";
}

document.getElementById("in-dev").onclick = function() {
    alert("This option is in development!");
}