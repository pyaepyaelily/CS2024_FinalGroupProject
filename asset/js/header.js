class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <head>
        <link rel="stylesheet" href="asset/style/header.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Source+Sans+3:wght@300&display=swap" rel="stylesheet">
      </head>
    <body>
        <div class="header">
            <div class="navbar">
                <div class="navbar-title">
                  <img src="asset/img/logo.png">
                </div>
                <div class="navbar-buttons">
                    <a href="login.html">
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/2e2e2e/gender-neutral-user.png" alt="gender-neutral-user"/>
                    </a>
                    <a href="mycart.html">
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/2e2e2e/shopping-cart.png" alt="shopping-cart"/>
                    </a>
                </div>
            </div>
            <div class="navbar-row">
                <a href="index.html">Home</a>
                <a href="aboutus.html">About Us</a>
                <a href="cat.html">Shop Now</a>
                <a href="guide.html">Guide</a>
                <a href="faq.html">FAQs</a>
                <a href="contactus.html">Contact Us</a>
            </div>
        </div>

    </body>
      `;
    }
  }

  customElements.define('header-component', Header);
