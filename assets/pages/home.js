import { Header } from "../components/home/header.js";

const header = new Header();

class Home {
  $container;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("main");
  }

  render = () => {
    this.$container.appendChild(header.render());
    return this.$container;
  };
}

export { Home };
