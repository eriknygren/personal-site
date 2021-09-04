---
title: WorldwideFM
description: "WorldwideFM: Internet radio and content platform"
img: wwfm.png
alt: x
importance: 400
---


# WorldwideFM

### Summary

<div class="grid grid-cols-3">
  <div class="font-bold">When:</div>
  <div class="col-span-2">2021</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Back end:</div>
  <div class="col-span-2">CraftCMS/PHP</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Front end:</div>
  <div class="col-span-2">Nuxt.JS/Vue</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Core challenge:</div>
  <div class="col-span-2">Dynamic content & UX</div>
</div>

A really fun project I was very excited to be involved with. In their own words
WorldwideFM is: 'An award winning radio station with a global audience’. It's internet
radio, and it's really good, you should check it out.

I was involved in this project in a development lead/architectural role, choosing
frameworks and making technical decisions based on a spec brought forward by the client.
In summary the time had come for them to upgrade their website, to support more features
and enable the launch of a premium subscriber model.

<img style="margin-bottom: 0;" src="screenshots/wwfm.webp" alt="Screenshot of WWFM splash page" />
<span class="text-sm italic">The WorldwideFM landing page</span>

Internet radio is an interesting one, serving the actual audio stream is
trivial with modern web APIs. The challenge is everything around it, giving
the content editors an app that is fun and easy to work with, while also
letting them serve interesting and varied content year on year. In such a
content driven industry, there are also a heavy emphasis on taking SEO into
account. Last but not least, we need to have an effortless way to navigate
around the web app, without interrupting audio. Below I’ll separate out these
three problems and how we tackled them.

### Content management

Picking a CMS should mostly be about something that’s a joy to work with. The
most important thing to remember is when a dev teams moves on, someone else’s
job start, spending a significant part of their day creating content in the
CMS.

For this project we picked Craft CMS. It did all the things we needed it to
do, paid subscription support and a very good editing experience.
As one of our mains priorities was to give something truly flexible to the client,
we were keen on the https://craftcms.com/features/all#matrix matrix field systems in craft.
It gives us a nice way of creating highly flexible content, that we can easily
identify in a front end and style nicely, no matter the structure of the post.

<img class="mx-auto" style="margin-bottom: 0;" src="screenshots/wwfm_mobile.webp" alt="Screenshot of WWFM show/episode page" />
<span class="block text-center text-sm italic">Listening back to a show on mobile</span>

### Effortless navigation without interrupting audio

Modern SPA solutions are at their core for partially loading sites after the
initial pageload, meaning we only swap out the part of the site we need to.
This is a great match for solving issues around persisting parts of the site,
meaning we can keep the header intact and not interrupt audio streams as the
user navigates around.

We used Nuxt.js/Vue as our front end stack. This let’s us use vue-router to do
client side SPA routing.

To fetch content from our CMS we use GraphQL, which works great in a scenario
where the content is not coming from a custom API, but from a CMS, as it gives
us a nice way of only fetching the content we need.

### SEO

One of the main problems with javascript rendered applications have
traditionally been a lack of indexing content with search engines, as its
rendered in the browser after the initial page load. However, by running our
front end on a node server, we can let Nuxt render the initial page on the
server, send it down with all content in place, and let the browser take over
responsibility from there. By doing this we can correctly set meta data, and
search crawlers will see a fully rendered page, making the site receptible for
organic search traffic.

### Conclusion

With this approach we were able to deliver a site that is effortless both to
maintain and visit. Which does not get in the way of letting the content shine.
