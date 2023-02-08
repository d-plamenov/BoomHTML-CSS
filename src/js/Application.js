import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const div = document.getElementById("emojis");
    const paragraph = document.createElement("p");
    this.emojis.forEach((e) => (paragraph.textContent += e));
    div.appendChild(paragraph);
  }

  addBananas() {
    const newEmojis = this.emojis.map(monkey => monkey + this.banana);
    const div = document.getElementById("emojis");
    div.textContent = "";
    this.setEmojis(newEmojis);
  }
}
