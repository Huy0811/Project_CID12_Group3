class Header {
  $header;
  $container;
  $row;
  $col;
  $nav;
  $logo;
  $imgLogo;
  $menu;
  $home;
  $product;
  $about;
  $contact;
  $cart;
  $logOut;

  constructor() {
    this.$header = document.createElement("header");
    this.$header.classList.add("header");

    this.$container = document.createElement("div");
    this.$container.classList.add("container");

    this.$row = document.createElement("div");
    this.$row.classList.add("row");

    this.$col = document.createElement("div");
    this.$col.classList.add("col-12");

    this.$nav = document.createElement("nav");
    this.$nav.classList.add("main-nav");

    this.$logo = document.createElement("a");
    this.$logo.classList.add("logo");
    this.$logo.href = "#";

    this.$imgLogo = document.createElement("img");
    this.$imgLogo.src = "assets/images/logo.png";

    this.$menu = document.createElement("ul");
    this.$menu.classList.add("nav");

    this.$home = document.createElement("li");
    this.$home.innerHTML = "Home";

    this.$product = document.createElement("li");
    this.$product.innerHTML = "Product";

    this.$about = document.createElement("li");
    this.$about.innerHTML = "About";

    this.$contact = document.createElement("li");
    this.$contact.innerHTML = "Contact";
  }

  render = () => {
    this.$header.appendChild(this.$container);
    this.$container.appendChild(this.$row);
    this.$row.appendChild(this.$col);
    this.$col.appendChild(this.$nav);
    this.$nav.appendChild(this.$logo);
    this.$nav.appendChild(this.$menu);
    this.$logo.appendChild(this.$imgLogo);
    this.$menu.appendChild(this.$home);
    this.$menu.appendChild(this.$product);
    this.$menu.appendChild(this.$about);
    this.$menu.appendChild(this.$contact);
    return this.$header;
  };
}

export { Header };
