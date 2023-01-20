import { start } from "repl";
import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live = new Live(platform);

    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform) {
    console.log("Aguarde...");

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}

// startLive(new YouTube());
// startLive(new Twitch());
// startLive(new Facebook());

startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());