const header = document.querySelector("header");
const footer = document.querySelector("footer");
header.innerHTML = `
    <img id="myBG" src="../images/paperbg.jpg" class="w-auto h-auto" alt="background image paper">
    <!-- Navbar -->
    <nav>
      <div class="logo">
        <a href="../html/homepage.html"><img src="../images/logo_no_brush.png" alt="logo"></a>
      </div>
      <ul>
        <li>
          <a href="../html/homepage.html">Home</a>
        </li>
        <li>
          <a href="../html/products.html">Products</a>
        </li>
        <li>
          <a href="../html/about.html">About</a>
        </li>
        <li>
          <a href="../html/contact.html">Contact Us</a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </nav>
    <div class="menubar">
      <ul>
        <li>
          <a href="../html/homepage.html">Home</a>
        </li>
        <li>
          <a href="../html/products.html">Products</a>
        </li>
        <li>
          <a href="../html/about.html">About</a>
        </li>
        <li>
          <a href="../html/contact.html">Contact Us</a>
        </li>
      </ul>
    </div>
`;

footer.innerHTML = `
    <p>@2024 Polaroid. All Rights Reserved.</p>
    <p>Privacy Policy</p>

`;