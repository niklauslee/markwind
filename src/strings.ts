export const modernNormalizeCss = `*,
::after,
::before {
  box-sizing: border-box;
}
html {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji";
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
}
body {
  margin: 0;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo,
    monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  border-color: currentcolor;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
legend {
  padding: 0;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}`;

export const htmlWrapper = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style type="text/tailwindcss">
      @layer base {
        h1 {
          @apply mt-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl;
        }
        h2 {
          @apply mt-8 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0;
        }
        h3 {
          @apply mt-6 scroll-m-20 text-2xl font-semibold tracking-tight;
        }
        h4 {
          @apply mt-4 scroll-m-20 text-xl font-semibold tracking-tight;
        }
        p {
          @apply mt-2;
        }
        blockquote {
          @apply mt-2 border-l-2 pl-6 italic;
        }
        table {
          @apply w-full;
        }
        tr {
          @apply m-0 border-t p-0 even:bg-slate-100;
        }
        th {
          @apply border px-2 py-1 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right;
        }
        td {
          @apply border px-2 py-1 text-left [&[align=center]]:text-center [&[align=right]]:text-right;
        }
        ul {
          @apply my-2 ml-6 list-disc [&>li]:mt-0;
        }
        ol {
          @apply my-2 ml-6 list-decimal [&>li]:mt-0;
        }
        pre {
          @apply my-2 rounded bg-slate-100 font-mono;
        }
        code {
          @apply relative rounded px-[0.3rem] py-[0.2rem] font-mono;
        }
        p code {
          @apply bg-slate-100 text-xs;
        }
        a {
          @apply underline underline-offset-4;
        }          
      }
    </style>
    <title>{{title}}</title>
  </head>
  <body>
    {{{content}}}
  </body>
</html>`;
