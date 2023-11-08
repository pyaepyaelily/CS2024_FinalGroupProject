class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <head>
        <link rel="stylesheet" href="asset/style/header.css">
      </head>
    <body>
        <div class="header">
            <div class="navbar">
                <div class="navbar-title">
                    KEYBOARD
                </div>
                <div class="navbar-buttons">
                    <a href="login.html">
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/2e2e2e/gender-neutral-user.png" alt="gender-neutral-user"/>        
                    </a>
                    <a href="cart.html">
                        <img width="25" height="25" src="https://img.icons8.com/windows/32/2e2e2e/shopping-cart.png" alt="shopping-cart"/>          
                    </a>
                </div>
            </div>
            <div class="navbar-row">
                <a href="index.html">Home</a>
                <a href="#">About Us</a>
                <a href="cat.html">Shop Now</a>
                <a href="#">Guide</a>
                <a href="faq.html">FAQs</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    
    </body>
      `;
    }
  }
  
  customElements.define('header-component', Header);