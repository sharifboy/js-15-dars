"use strict";

class Typing {
  constructor(option) {
    this.title = document.querySelector(".title");
    this.delay = option.delay;
    this.interval = option.interval;

    this.text = this.title.innerHTML.trim();
    this.title.innerHTML = "";
  }
}
