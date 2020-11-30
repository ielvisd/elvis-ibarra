---
title: 'Add Tailwind CSS to your Quasar project in 5 minutes or less'
description: 'Add Tailwind to a Quasar Project'
img: https://images.unsplash.com/photo-1515261439133-0f6cfb098e04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80
alt: 'Add Tailwind CSS to your Quasar project in 5 minutes or less'
author:
  name: Elvis Ibarra
  bio: All about Elvis, what he does, and where he works
  img: ElvisBanksy.jpg
tags:
  - web development
  - css
---

### Why do this?

I've been building a passion project of mine, [Jiujitsio](https://jiujits.io), in Quasar for the past few months and wanted to implement Tailwind styling when prototyping new or creating custom components.

### Step 1 - Install Tailwind

> Install Tailwind via NPM or Yarn.

![Install via npm or yarn screenshot](https://dev-to-uploads.s3.amazonaws.com/i/onwx5bc2rgcggnj4jqrk.png)

### Step 2 - Add Tailwind to your CSS.

> Import Tailwind Directives. Add the following in between the `style` tags of any Quasar component you wish to style with Tailwind.

![Tailwind directives screenshot](https://dev-to-uploads.s3.amazonaws.com/i/s79juh9oz1u4h82ttuoy.png)

### Step 3 - Process your CSS with Tailwind

> Since `Vue` styles are piped through PostCSS we are going to need to modify our `.postcssrc.js` file to require Tailwind.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jn4a49cbr5sssmy8kz9b.png)

### Step 4 - Profit & Next Steps

> That's it! Any Quasar components in your project where you add the Tailwind directives will now respond to Tailwind class styling. You can also optionally also add a Tailwind config file (may be a follow up post) for further customization.

Video Demo:

- [Add Tailwind CSS to your Quasar project in 5 minutes or less](https://www.youtube.com/watch?v=c5jCzmModKo&feature=youtu.be)

Relevant Docs:

- [Tailwind Installation](https://tailwindcss.com/docs/installation/)
- [Quasar - Handling Webpack](https://quasar.dev/quasar-cli/handling-webpack)
