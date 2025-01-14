# Bskl

### About
The Bskl is A FrameWork For Using **Link and URL** To Your Project

### Installtion
for Install This FrameWork Use :

```bash
npm i bskl
```

![npm](./badge.svg)(https://bskl-ui-7bes.onrender.com)
![download](./badge2.svg)(https://bskl-ui-7bes.onrender.com)
![install size](./badge3.svg)(https://bskl-ui-7bes.onrender.com)

### How To Use Fast Dom
For Using **queryById**:
```javaScript
const dom = new FastDom();

try {
  const header = dom.queryById<HTMLDivElement>("header");
  header.textContent = "New Header Text!";
  console.log(header.textContent);
} catch (error) {
  console.error(error);
}
```
For Using **attribute**:
```javaScript
const dom = new FastDom();

try {
  const header = dom.queryById<HTMLDivElement>("header");
  dom.safeSetAttribute(header, "aria-label", "Main Header");
  console.log(header.getAttribute("aria-label")); // Outputs: "Main Header"
} catch (error) {
  console.error(error);
}

```

** This is Beta Version We Not add The Features in The WebSite **
# For See More :
https://bskl-ui-7bes.onrender.com

### Features:
#### It has LocalStorage Component
#### New way For Use Links and URL
#### Fetch Component
#### WebSocket
#### Logger Component
#### Secure Your Project With Bskl
#### Fast Dom With Bskl