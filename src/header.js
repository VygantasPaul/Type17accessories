export function addHeader (app) {
  const headerHtml = `<header>
  <div class="logo">Sport accessories</div>
  <nav class="nav">
    <ul>
      <li><a href="./addAccessory.html">Insert accessory</a></li>
      <li><a href="./index.html">Accessories</a></li>
    </ul>
  </nav>
</header>`
  
app.insertAdjacentHTML('afterbegin', headerHtml);
}