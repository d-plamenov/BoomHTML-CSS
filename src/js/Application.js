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
   const div = document.getElementById("emojis");
   const paragraph = document.createElement("p");
   paragraph.innerHTML = app.emojis;
   div.appendChild(paragraph);
}

  addBananas() {
    this.emojis.map(monkey => {monkey += this.banana })
  }
}
