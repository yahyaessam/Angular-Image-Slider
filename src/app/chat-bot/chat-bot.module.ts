import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChatBotComponent } from "./chat-bot.component";
import { ChatBotService } from "./chat-bot.services";
// import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports:[CommonModule],
    declarations:[ChatBotComponent],
    exports:[ChatBotComponent],
    providers:[ChatBotService]
})

export class ChatBotModule {}