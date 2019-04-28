#Source Code Material Design Web

## Things in this Repo
1. Ripple Transition (Updated Version 1.2)[Idea's from ripple effect button google]
2. Parallax Effect (Coming soon)
3. Framework Design (Coming soon)

## How to install
### Ripple Transition
1. Add this line in head tag.
```
<head>
    ...
    <link rel="stylesheet" href="Ripple.css">
</head>
```
2. Add this line in last body tag.
```
<body>
    ...
    ...
    <script src="Ripple.js"></script>
</body>
```
3. You must add placeholder for ripple. So add div with id='ripplePlaceholder' to do that.
```
<body>
    <section>
        <div id="ripplePlaceholder"></div>
    </section>
    <script src="Ripple.js"></script>
</body>
```
4. Add "transition" class to the trigger button or anything that trigger the transition.
```
<button id="submit"  class="btn orange">Submit</button>
```
5. Now final line of html is like
```
<body>
    <section>
        <div id="ripplePlaceholder"></div>
        <button id="submit"  class="btn orange">Submit</button>
    </section>
    <script src="Ripple.js"></script>
</body>
```
Happy Hacking Chocs !!