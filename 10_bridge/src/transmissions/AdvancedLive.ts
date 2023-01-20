import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
    constructor(platform: IPlatform) {
        super(platform);
    }

    subtitles(): void {
        console.log("Legendas ativadas na Transmissão!");
    }

    comments(): void {
        console.log("Comentários liberados na live!");
    }
}