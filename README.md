# React Foundations - Rating Component

Your task is to create a rating component that **_closely_** resembles (looks as close as possible) to the one found under `/design` folder: `design.png`.

![rating-component](./design/design.png)

## Hover

Hover must be the same as presented in `design/hover.mp4`. Please note that `hovering` does not mean selecting a rating. It is just a simple visual feedback of a `potential` selection.

## Selecting a rating

See `design/selecting-rating.mp4` for a breakdown on what to expected when an element is selected. Please note that at least `one` rating must be selected; otherwise, the user should be informed of that: see `design/error.mp4`

## Keyboard Navigation

See `design/keyboard-usage.mp4` for the behaviour of your component when using the keyboard. Expect `TAB`, `ARROW-<direction>`, `SPACE` and `ENTER` to work fine when `submitting` a rating.

## Components

You only need two files: `index.jsx` and `main.jsx`. If you know how to break the UI down into components, feel free to have separate files. It is ok to start with just one file (big component) as `<App>`. This component should have all the behaviour of `design/design.png` rating component.

## Package

Make sure to use commands `pn dev` to run to development environment and compile your application using `rollup`.

## HTML

The expected `html` that you can AND `must` use:

```html
<div></div>
<!-- You can use it, at most, two times -->
<main></main>
<article></article>
<p></p>
<form></form>
<h1></h1>
<legend></legend>
<span></span>
<label></label>
<input />
<button></button>
```

## Git Branching

If you need a refresher on `Git Branching`. Check [this](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors) out.

> [!IMPORTANT]
> This project requires you to setup `Git` and `GitHub`. Use what we have learned so far `Branching`, `Merging`, `Pulling`, and `Pushing`. Also, use `git merge <branch> --no-ff` to preserve branch history. When showcasing your project, you can also show your development branches.
