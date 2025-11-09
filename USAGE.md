# StarterUI Usage Documentation

A simple yet sufficient UI library for your website and webapp. This documentation provides comprehensive usage examples for all StarterUI components.

## Installation

### CDN Links

Include StarterUI in your HTML file using CDN:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Sharishth/starterui@main/min.css">

<!-- JavaScript (Optional - only needed for interactive components) -->
<script src="https://cdn.jsdelivr.net/gh/Sharishth/starterui@main/min.js" defer></script>
```

### Local Installation

Alternatively, you can download the files and include them locally:

```html
<link rel="stylesheet" href="layout.css">
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

---

## Components

### Buttons

#### Default Button
```html
<button class="button">Button</button>
```

#### Button with Shadow
```html
<button class="button shadow-default">Button</button>
```

#### Glass Button
Requires a background image on the parent container:
```html
<div class="layout-bg-img">
  <button class="button bg-glass-scheme">Button</button>
</div>
```

#### Link Button
```html
<a href="#" class="button link-button">Link Button</a>
```

#### Colored Buttons
```html
<button class="button bg-success-color text-white">Success</button>
<button class="button bg-info-color text-white">Info</button>
<button class="button bg-warn-color text-white">Warning</button>
<button class="button bg-error-color text-white">Error</button>
```

---

### Dropdown

**Script Required:** Yes

```html
<div class="dropdown">
  <button type="button" onclick="dropdown(this)" aria-valuetext="" class="dropdownValue">
    Select Option &blacktriangledown;
  </button>
  <div class="options">
    <button type="button" class="optionitem" onclick="setOptionValue(this, 'Option Value 1')">
      Option Value 1
    </button>
    <button type="button" class="optionitem" onclick="setOptionValue(this, 'Option Value 2')">
      Option Value 2
    </button>
    <button type="button" class="optionitem" onclick="setOptionValue(this, 'Option Value 3')">
      Option Value 3
    </button>
  </div>
</div>
```

**Functions:**
- `dropdown(button)` - Toggles the dropdown menu
- `setOptionValue(button, value)` - Sets the selected option value

---

### Checkbox

#### System Default Checkbox
```html
<input type="checkbox" name="" id="checkboxsystem" />
```

#### Label Checkbox Styled
```html
<input type="checkbox" name="" id="labelCheckbox" class="inputChkLabel">
<label class="labelCheckbox" for="labelCheckbox"></label>
```

#### Custom Checkbox
**Script Required:** Yes (custom function needed)

```html
<div class="checkbox-body" onclick="checkCheckbox()">
  <div id="checkbox-mock" class="checkbox shadow-default" 
       onclick="changeCheckboxValue(this)" 
       aria-valuetext="off">
  </div>
</div>
```

**Note:** Custom checkbox uses `aria-valuetext` with values "on" or "off" instead of input value.

---

### Input Boxes

#### Text Input
```html
<input type="text" class="inputtext" placeholder="Your Text here!">
<input type="email" class="inputtext" placeholder="someone@example.com">
<input type="password" class="inputtext" placeholder="password">
<input type="datetime" class="inputtext" placeholder="2024-01-01T01:01:60Z">
```

#### Date Input
```html
<input type="date" class="inputdate">
<input type="week" class="inputdate">
<input type="datetime-local" class="inputdate">
```

#### Search Bar
```html
<input type="search" class="inputtext">
```

---

### Table

#### Classic Table
```html
<table cellspacing="0" class="shadow-default">
  <thead>
    <tr>
      <th>Col Head 1</th>
      <th>Col Head 2</th>
      <th>Col Head 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row Value 1</td>
      <td>Row Value 2</td>
      <td>Row Value 3</td>
    </tr>
  </tbody>
</table>
```

**Note:** Use `cellspacing="0"` or `cellspacing="2"` for better visual appearance.

#### Themed Tables
```html
<!-- Green Theme -->
<table cellspacing="0" class="shadow-default table-theme-green">
  <!-- table content -->
</table>

<!-- Blue Theme -->
<table cellspacing="0" class="shadow-default table-theme-blue">
  <!-- table content -->
</table>
```

---

### Accordion

**Script Required:** Yes

```html
<div class="accordian shadow-default">
  <button class="accordian-button" onclick="accexpand(this)">
    <p>Show 1st item</p>
    <p>&blacktriangledown;</p>
  </button>
  <div class="accordian-content">
    <p>Some content inside the box. Another accordion content.</p>
  </div>
</div>
```

**Function:** `accexpand(button)` - Toggles accordion content visibility

---

### Badges / Tags

```html
<p class="badge-count">+99</p>
<p class="badge-info">info</p>
<p class="badge-warn">warning</p>
<p class="badge-error">error</p>
<p class="badge-success">success</p>
```

---

### Cards

#### Text Card
```html
<div class="card-text shadow-default">
  <h1>Earth 🌍</h1>
  <p>Earth is the third planet from the Sun...</p>
  <a href="#" class="button link-button bg-trust-blue place-self-center text-white">
    Learn More
  </a>
</div>
```

#### Quote Card
```html
<div class="card-quote shadow-default">
  <div class="card-quote-head">
    <h1>Unity is strength</h1>
  </div>
  <div class="card-quote-body">
    <p>For fellow citizens:</p>
    <p>&OpenCurlyDoubleQuote;Alone we are weak, united we are strong.&CloseCurlyDoubleQuote;</p>
    <p>- John Doe</p>
  </div>
</div>
```

#### Comment Card with Avatar
```html
<div class="card-comment shadow-default">
  <div class="card-comment-head">
    <img src="avatar.jpg" alt="">
    <div>
      <h1>Sharishth Singh</h1>
    </div>
  </div>
  <div class="card-comment-body">
    <p>A.I. will only replace people who don't adapt to changes around them.</p>
  </div>
</div>
```

#### Card with Image
```html
<div class="card-img-text shadow-default">
  <div class="card-img-text-head">
    <h1>The Stars</h1>
  </div>
  <div class="card-img-text-body">
    <img src="stars.jpg" alt="" style="height: 200px;">
  </div>
  <div class="card-img-text-footer">
    <p>Photo of stars in clear sky at night.</p>
  </div>
</div>
```

---

### Carousel

#### Image Carousel
**Script Required:** Yes

```html
<div class="carousel">
  <div class="img-slide-previous">
    <button class="bg-glass-scheme button" onclick="carouselPrevImage(this)">
      &lessdot;
    </button>
  </div>
  <div class="carouselContentContainer">
    <img src="./assets/1.jpg" alt="" height="250px" width="350">
    <img src="./assets/2.jpg" alt="" height="250px" width="350">
    <img src="./assets/3.jpg" alt="" height="250px" width="350">
  </div>
  <div class="img-slide-next">
    <button class="bg-glass-scheme button" onclick="carouselNextImage(this)">
      &gtrdot;
    </button>
  </div>
</div>
```

**Functions:**
- `carouselPrevImage(button)` - Navigate to previous image
- `carouselNextImage(button)` - Navigate to next image

#### Carousel with Div Content
**Script Required:** Yes

```html
<div class="carousel">
  <div class="img-slide-previous">
    <button class="bg-glass-scheme button" onclick="carouselPrevElementDiv(this)">
      &lessdot;
    </button>
  </div>
  <div class="carouselContentContainer">
    <div class="carouselDiv">
      <!-- Your content here -->
    </div>
    <div class="carouselDiv">
      <!-- Your content here -->
    </div>
  </div>
  <div class="img-slide-next">
    <button class="bg-glass-scheme button" onclick="carouselNextElementDiv(this)">
      &gtrdot;
    </button>
  </div>
</div>
```

**Functions:**
- `carouselPrevElementDiv(button)` - Navigate to previous element
- `carouselNextElementDiv(button)` - Navigate to next element

#### Auto Slide Carousel
**Script Required:** Yes

```html
<div class="carouselAuto">
  <script>
    const CarouselInterval = 1500; // Interval in milliseconds (default: 5000)
  </script>
  <div class="img-slide-previous">
    <button class="bg-glass-scheme button" onclick="carouselAutoPrevElementDiv(this)">
      &lessdot;
    </button>
  </div>
  <div class="carouselContentContainer">
    <div class="carouselDiv">
      <!-- Your content here -->
    </div>
    <div class="carouselDiv">
      <!-- Your content here -->
    </div>
  </div>
  <div class="img-slide-next">
    <button class="bg-glass-scheme button" onclick="carouselAutoNextElementDiv(this)">
      &gtrdot;
    </button>
  </div>
</div>
```

**Note:** Auto slide pauses on mouse hover and resumes on mouse out. Default interval is 5000ms unless `CarouselInterval` is defined.

---

### Breadcrumb

#### Default Breadcrumb
```html
<ul class="bread">
  <li class="crumbs"><a href="#">Home</a></li>
  <li class="crumbs"><a href="#">About</a></li>
  <li class="crumbs"><a href="#">Contact Form</a></li>
  <li class="crumbs"><a href="#">Submission Details</a></li>
</ul>
```

#### Breadcrumb with Custom Separators
```html
<ul class="bread">
  <li class="crumbs"><a href="#">Home</a></li>
  <li class="crumbs"><a href="#">About</a></li>
  <li class="crumbs crumbsTriangle"><a href="#">Contact Form</a></li>
  <li class="crumbs crumbsArrow"><a href="#">Submission Details</a></li>
</ul>
```

---

### Navbar

#### Simple Default Navbar
```html
<header class="navbar bg-white">
  <nav class="navWrapper">
    <ul class="navList">
      <li class="navItems"><a href="#">Home</a></li>
      <li class="navItems"><a href="#">About</a></li>
      <li class="navItems"><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```

#### Responsive Navbar
**Script Required:** Yes

```html
<header class="navbar NavResponsive bg-white">
  <nav class="navWrapper">
    <ul class="navList">
      <li class="navItems"><a href="#">Home</a></li>
      <li class="navItems"><a href="#">About</a></li>
      <li class="navItems"><a href="#">Contact</a></li>
    </ul>
    <div class="navActions">
      <button onclick="showNavItems(this)">☰</button>
      <ul class="hiddenNavList">
        <li class="navItems"><a href="#">Home</a></li>
        <li class="navItems"><a href="#">About</a></li>
        <li class="navItems"><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>
```

**Function:** `showNavItems(button)` - Toggles mobile menu

#### Responsive Navbar with Logo
```html
<header class="navbar NavResponsive bg-white">
  <nav class="navWrapper">
    <div class="navBrand">
      <img src="logo.jpg" alt="logo" class="navLogo">
      <h1>Title</h1>
    </div>
    <ul class="navList">
      <li class="navItems"><a href="#">Home</a></li>
      <li class="navItems"><a href="#">Pricing</a></li>
      <li class="navItems"><a href="#">About</a></li>
      <li class="navItems"><a href="#">Contact</a></li>
    </ul>
    <div class="navActions">
      <button onclick="showNavItems(this)">☰</button>
      <ul class="hiddenNavList">
        <!-- Mobile menu items -->
      </ul>
    </div>
  </nav>
</header>
```

#### Sticky Navbar
```html
<header class="navbar NavResponsive sticky-top bg-white">
  <!-- Navbar content -->
</header>
```

---

### Timeline

#### Default Timeline (List-based)
```html
<ul class="timeline">
  <li>
    <div class="timelineItems timelineDone">1</div>
  </li>
  <li>
    <div class="timelineItems timelineDone">2</div>
  </li>
  <li>
    <div class="timelineItems timelineActive">3</div>
  </li>
  <li>
    <div class="timelineItems">4</div>
  </li>
</ul>
```

**Classes:**
- `timelineDone` - Completed step
- `timelineActive` - Current active step
- Default (no class) - Pending step

#### Custom Timeline (Div-based)
```html
<div class="timelinediv">
  <div class="timelinedivItem">
    <p class="timelineAtdate">01-01-2024</p>
    <p class="timelineAtPlace timelineDone shadow-default">Stop 1</p>
    <p class="timelineAtTime">10:30 P.M.</p>
  </div>
  <div class="timelinedivconnector timelineDone shadow-default"></div>
  <div class="timelinedivItem">
    <p class="timelineAtdate">02-01-2024</p>
    <p class="timelineAtPlace timelineDone shadow-default">Stop 2</p>
    <p class="timelineAtTime">10:30 P.M.</p>
  </div>
  <div class="timelinedivconnector timelineToactive shadow-default"></div>
  <div class="timelinedivItem">
    <p class="timelineAtdate">04-01-2024</p>
    <p class="timelineAtPlace timelineActive shadow-default">Stop 3</p>
    <p class="timelineAtTime">10:30 P.M.</p>
  </div>
</div>
```

---

### Tabs

**Script Required:** Yes

```html
<div class="tabs" style="width: 100%;">
  <div class="tabBar" onclick="showTab(event)">
    <button class="tab tabActive">Tab 1</button>
    <button class="tab">Tab 2</button>
    <button class="tab">Tab 3</button>
  </div>
  <div class="tabBody">
    <div class="tabContent">
      <!-- Tab 1 content -->
    </div>
    <div class="tabContent">
      <!-- Tab 2 content -->
    </div>
    <div class="tabContent">
      <!-- Tab 3 content -->
    </div>
  </div>
</div>
```

**Function:** `showTab(event)` - Handles tab switching. Pass `event` from `onclick`.

**Note:** First tab should have `tabActive` class. Only the first `tabContent` is visible by default.

---

### Range Input

```html
<input type="range" name="" id="">
```

---

### Code Block

```html
<pre class="code">
  <code>myfunction = (a,b) => {
    console.log(`${a} and ${b}`);
  }</code>
</pre>
```

---

### Mock Browser

#### Desktop Browser
```html
<div class="browser" style="max-width: 800px;">
  <div class="browser-title-bar">
    <div class="browser-buttons">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="browser-address-bar">
      <div>&leftarrow;</div>
      <div>www.example.com</div>
      <div>&rightarrow;</div>
    </div>
  </div>
  <div class="browser-body">
    <!-- Your content here -->
  </div>
</div>
```

#### Mobile Browser
```html
<div class="mobile-wrapper">
  <div class="mobile-border">
    <div class="mobile-notch">
      <div class="camera-punch"></div>
    </div>
    <div class="browser browser-mobile" style="max-width: min-content;">
      <div class="browser-title-bar">
        <!-- Browser content -->
      </div>
      <div class="browser-body">
        <!-- Your content here -->
      </div>
    </div>
  </div>
  <div class="mobile-buttons">
    <div class="mobile-button"></div>
    <div class="mobile-button"></div>
    <div class="mobile-button"></div>
  </div>
</div>
```

---

### Pagination

#### Default Pagination
```html
<div class="pagination bg-glass-scheme">
  <a href="#" class="ease-in-out-scale">&blacktriangleleft;</a>
  <a href="#" class="ease-in-out-scale">1</a>
  <a href="#" class="ease-in-out-scale">2</a>
  <a href="#" class="ease-in-out-scale">3</a>
  <a href="#" class="currentPage ease-in-out-scale">4</a> ....
  <a href="#" class="ease-in-out-scale">20</a>
  <a href="#" class="ease-in-out-scale">&blacktriangleright;</a>
  <select name="" id="" class="ease-in-out-scale">
    <option value="1">Page 1 of 20</option>
    <option value="2">Page 2 of 20</option>
    <option value="4" selected>Page 4 of 20</option>
  </select>
</div>
```

#### Pagination with Dropdown
```html
<div class="pagination bg-info-color text-black">
  <a href="#" class="ease-in-out-scale">&blacktriangleleft;</a>
  <a href="#" class="ease-in-out-scale">1</a>
  <a href="#" class="ease-in-out-scale">2</a>
  <a href="#" class="ease-in-out-scale currentPage">4</a> ....
  <a href="#" class="ease-in-out-scale">20</a>
  <a href="#" class="ease-in-out-scale">&blacktriangleright;</a>
  <div class="pageSelect ease-in-out-scale">
    <div class="dropdown">
      <button type="button" onclick="dropdown(this)" class="dropdownValue">
        Select Option &blacktriangledown;
      </button>
      <div class="options">
        <button type="button" class="optionitem" onclick="setOptionValue(this, 'Page 1 of 20')">
          Page 1 of 20
        </button>
        <button type="button" class="optionitem" onclick="setOptionValue(this, 'Page 2 of 20')">
          Page 2 of 20
        </button>
      </div>
    </div>
  </div>
</div>
```

**Color Classes:** `bg-info-color`, `bg-success-color`, `bg-warn-color`, `bg-error-color`, `bg-white`, `bg-black`

---

### Radio Input

#### Default Radio
```html
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale" onclick="resp()">
    <input type="radio" name="myradio">
  </label>
</div>
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale" onclick="resp()">
    <input type="radio" name="myradio">
  </label>
</div>
```

#### Colored Radio
```html
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale">
    <input type="radio" name="myradio2" class="bg-success-color">
  </label>
</div>
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale">
    <input type="radio" name="myradio2" class="bg-info-color">
  </label>
</div>
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale">
    <input type="radio" name="myradio2" class="bg-warn-color">
  </label>
</div>
<div class="radio-wrapper">
  <label class="radio ease-in-out-scale">
    <input type="radio" name="myradio2" class="bg-error-color">
  </label>
</div>
```

---

### Toggle

```html
<label class="toggle shadow-default">
  <input type="checkbox" name="" id="">
  <span class="toogle-switch"></span>
</label>
```

---

### Dividers

#### Horizontal Rule (`<hr>` tag)
```html
<div class="bg-white p-2 br-rad-5">
  <h1 class="m-0">About Me</h1>
  <hr>
  <p class="m-0">I am a developer.</p>
</div>
```

#### Horizontal Divider with Text
```html
<div class="divider-hr">
  <div></div>
  <p>AND</p>
  <div></div>
</div>
```

#### Horizontal Divider without Text
```html
<div class="divider-hr">
  <div></div>
</div>
```

#### Vertical Divider
**Script Required:** Yes (for auto-scaling)

```html
<div class="divider-vr">
  <div></div>
  <p>OR</p>
  <div></div>
</div>
```

---

### Drawer

**Script Required:** Yes

```html
<div class="card-text w-100">
  <div class="drawer-wrapper" id="mydrawerWrap">
    <div class="drawer" id="mydrawer">
      <button class="button shadow-default" onclick="closeDrawer('mydrawerWrap','mydrawer')">
        x
      </button>
      <p style="cursor: pointer; padding: 1rem;">🏠 Drawer Item 1</p>
      <p style="cursor: pointer; padding: 1rem;">🕶 Drawer Item 2</p>
      <p style="cursor: pointer; padding: 1rem;">🎃 Drawer Item 3</p>
    </div>
  </div>

  <div class="z-index-0" style="border: 1px solid lightgray; padding: 1rem;">
    <button class="button w-max-con" onclick="openDrawer('mydrawerWrap','mydrawer')">
      Open Drawer
    </button>
    <!-- Main content -->
  </div>
</div>
```

**Functions:**
- `openDrawer(wrapperId, drawerId)` - Opens the drawer
- `closeDrawer(wrapperId, drawerId)` - Closes the drawer

**Note:** Drawer wrapper and drawer elements need unique IDs.

---

## Layout Templates

### Flex Templates

#### Flex - Justify Center Align Center Row
```html
<div class="flex-jc-ac-row gap-1r">
  <p>Item1</p>
  <p>Item2</p>
  <p>Item3</p>
</div>
```

**Note:** Wraps automatically at screen width ≤ 768px.

#### Flex - Justify Center Align Center Column
```html
<div class="flex-jc-ac-col gap-1r">
  <p>Item1</p>
  <p>Item2</p>
  <p>Item3</p>
</div>
```

#### Gap Classes
- `gap-0` - No gap
- `gap-05r` - 0.5rem gap
- `gap-1r` - 1rem gap

#### Hero Section Simple
```html
<div class="layout-bg-img text-white br-rad-6px">
  <div class="backdrop-darken p-1r br-rad-inherit">
    <h1 class="text-center">Your Journey begins here.</h1>
    <p class="text-center m-t-0">Explore everything with us.</p>
    <div class="flex-jc-ac-row gap-1r">
      <a href="#" class="button bg-glass-scheme link-button">Learn More</a>
      <a href="#" class="button bg-glass-scheme link-button">Contact Us</a>
    </div>
  </div>
</div>
```

#### Hero Section Two Row
```html
<div class="flex-jc-ac-col h-100">
  <div class="p-1r flex-jc-ac-col bg-black text-white w-100" style="height: 200px;">
    <h1 class="text-center">Your Journey begins here.</h1>
    <a href="#" class="button bg-white link-button text-black">Learn More</a>
  </div>
  <div class="p-1r flex-jc-ac-col bg-white text-black w-100" style="height: 200px;">
    <p class="text-center">Explore everything with us.</p>
    <a href="#" class="button bg-black link-button text-white">Contact Us</a>
  </div>
</div>
```

#### Hero Section Two Column
Wraps into two-row layout at smaller screen widths.

```html
<div class="flex-jc-ac-row h-100">
  <div class="p-1r flex-jc-ac-col align-self-stretch bg-black text-white w-100">
    <h1 class="text-center m-t-a">Your Journey begins here.</h1>
    <a href="#" class="button bg-white link-button text-black m-t-a m-b-0">Learn More</a>
  </div>
  <div class="p-1r flex-jc-ac-col align-self-stretch bg-white text-black w-100">
    <p class="text-center m-t-a">Explore everything with us.</p>
    <a href="#" class="button bg-black link-button m-t-a m-b-0">Contact Us</a>
  </div>
</div>
```

---

### Grid Templates

#### 2 Column Grid
```html
<div class="grid bg-white gap-1r">
  <div class="grid-row-1 grid-col-1">item1</div>
  <div class="grid-row-1 grid-col-2">item2</div>
  <div class="grid-row-2 grid-col-1">item3</div>
  <div class="grid-row-2 grid-col-2">item4</div>
</div>
```

**Shorter way:**
```html
<div class="grid grid-col-auto-auto bg-white gap-1r">
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
  <div>item4</div>
</div>
```

#### 3 Column Grid
```html
<div class="grid grid-col-auto-auto-auto bg-white gap-1r">
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
  <div>item4</div>
  <div>item5</div>
  <div>item6</div>
</div>
```

#### Column Span
```html
<div class="grid grid-col-auto-auto-auto bg-white gap-1r">
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
  <div class="grid-col-span-2">item4 (spans 2 columns)</div>
  <div>item5</div>
</div>
```

**Column Span Classes:** `grid-col-span-1` to `grid-col-span-4`

#### Row Span
```html
<div class="grid grid-col-auto-auto-auto bg-white gap-1r">
  <div class="grid-row-span-2">item1 (spans 2 rows)</div>
  <div>item2</div>
  <div>item3</div>
  <div>item5</div>
  <div>item6</div>
</div>
```

#### Grid Item Positioning
```html
<div class="grid-row-1 grid-col-1">item1</div>
<div class="grid-row-1 grid-col-2">item2</div>
```

**Position Classes:**
- `grid-row-1` to `grid-row-6`
- `grid-col-1` to `grid-col-6`

#### Justify Self
```html
<div class="grid-col-span-2 justify-self-start">Start</div>
<div class="grid-col-span-2 justify-self-center">Center</div>
<div class="grid-col-span-2 justify-self-end">End</div>
```

**Classes:** `justify-self-start`, `justify-self-center`, `justify-self-end`

#### Align Self
```html
<div class="grid-row-span-2 align-self-start">Start</div>
<div class="grid-row-span-2 align-self-center">Center</div>
<div class="grid-row-span-2 align-self-end">End</div>
```

**Classes:** `align-self-start`, `align-self-center`, `align-self-end`

#### Centering Inside Grid Item
```html
<div class="grid-col-span-2">
  <div class="flex-jc-ac">Centered Content</div>
</div>
```

#### Footer Template
```html
<div class="w-100 bg-info-color p-1r text-white">
  <div class="grid grid-col-auto-auto p-1r gap-1r">
    <div class="grid-row-1 grid-col-1 grid-col-span-1 justify-self-start">
      <img class="br-rad-50" src="logo.jpg" alt="footer-logo" height="128px" width="128px">
    </div>
    <div class="grid-row-1 grid-col-2 flex-jc-ac-col m-l-a m-r-0">
      <a class="text-white" href="#">Link Here</a>
      <a class="m-t-2 text-white" href="#">Link Here</a>
      <a class="m-t-2 text-white" href="#">Link Here</a>
    </div>
    <div class="grid-row-1 grid-col-3 flex-jc-ac-col m-l-a m-r-0">
      <a class="text-white" href="#">Link Here</a>
      <a class="m-t-2 text-white" href="#">Link Here</a>
      <a class="m-t-2 text-white" href="#">Link Here</a>
    </div>
    <div class="grid-row-2 grid-col-1 grid-col-span-3 text-center">
      &copy; Example Release, 2024
    </div>
  </div>
</div>
```

---

## Utility Classes

### Colors

#### Background Colors
- `bg-white`
- `bg-black`
- `bg-success-color`
- `bg-info-color`
- `bg-warn-color`
- `bg-error-color`
- `bg-trust-blue`
- `bg-glass-scheme`
- `bg-transparent-black-scheme`

#### Text Colors
- `text-white`
- `text-black`
- `text-success-color`
- `text-info-color`
- `text-warn-color`
- `text-error-color`

### Spacing

#### Margin
- `m-0` - No margin
- `m-t-0`, `m-t-2`, `m-t-3`, `m-t-4` - Margin top
- `m-b-0`, `m-b-2`, `m-b-3` - Margin bottom
- `m-l-a`, `m-r-0`, `m-r-1r` - Margin left/right
- `m-t-a` - Margin top auto

#### Padding
- `p-0`, `p-1r`, `p-2r`, `p-05-r` - Padding
- `p-y-5`, `p-y-10` - Padding vertical
- `p-1`, `p-2` - Padding small

### Borders & Radius

- `br-rad-5`, `br-rad-6px`, `br-rad-50` - Border radius
- `br-rad-inherit` - Border radius inherit
- `ring-1` - Border ring

### Shadows

- `shadow-default` - Default shadow

### Display & Position

- `sticky-top` - Sticky positioning
- `z-index-0` - Z-index
- `place-self-center` - Place self center

### Sizing

- `w-100` - Width 100%
- `w-max-con` - Width max content
- `h-100` - Height 100%
- `h-max-con` - Height max content
- `max-width: 800px` - Custom max width (inline style)

### Text

- `text-center` - Text align center
- `font-size-1-5-r`, `font-size-2-r`, `font-size-4-r` - Font sizes
- `font-family-system-segoe` - Font family
- `user-select-none` - User select none

### Effects

- `ease-in-out-scale` - Scale animation on hover
- `smooth-scroll` - Smooth scrolling
- `thin-scrollbar` - Thin scrollbar

### Layout

- `layout-bg-img` - Background image layout
- `backdrop-darken` - Darken backdrop
- `flex-wrap` - Flex wrap

---

## JavaScript Functions Reference

### Dropdown
- `dropdown(button)` - Toggles dropdown visibility
- `setOptionValue(button, value)` - Sets selected option value

### Checkbox
- `changeCheckboxValue(checkbox)` - Toggles custom checkbox state

### Accordion
- `accexpand(button)` - Toggles accordion content

### Carousel
- `carouselPrevImage(button)` - Previous image in carousel
- `carouselNextImage(button)` - Next image in carousel
- `carouselPrevElementDiv(button)` - Previous element in div carousel
- `carouselNextElementDiv(button)` - Next element in div carousel
- `carouselAutoPrevElementDiv(button)` - Previous element in auto carousel
- `carouselAutoNextElementDiv(button)` - Next element in auto carousel

### Navbar
- `showNavItems(button)` - Toggles mobile menu

### Tabs
- `showTab(event)` - Switches tabs (pass event from onclick)

### Drawer
- `openDrawer(wrapperId, drawerId)` - Opens drawer
- `closeDrawer(wrapperId, drawerId)` - Closes drawer

---

## Notes

1. **Script Requirements:** Some components require the JavaScript file to be included. Check each component's documentation above.

2. **Responsive Design:** The framework includes responsive utilities. Flex layouts wrap at ≤768px screen width.

3. **Accessibility:** Use proper ARIA attributes where needed (e.g., `aria-valuetext` for custom checkboxes).

4. **Browser Compatibility:** Tested with modern browsers. Some features may require polyfills for older browsers.

5. **Performance:** The framework is lightweight and optimized for performance. Chrome Lighthouse scores range from 83 to 96.

6. **Customization:** You can override styles using your own CSS or by modifying the utility classes.

---

## Examples

See `index.html` for comprehensive component examples and `landing.html` for a real-world implementation.

---

## Support

For issues, questions, or contributions, please visit the [GitHub repository](https://github.com/Sharishth/starterui).

---

**Last Updated:** Based on StarterUI version as of documentation creation.

