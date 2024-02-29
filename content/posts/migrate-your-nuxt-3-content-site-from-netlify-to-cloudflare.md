---
title: "Taking your static Nuxt 3 + Nuxt Content site from Netlify to Cloudflare Pages"
description: "An article/walkthrough describing my experience moving a Nuxt 3 Content site from Netlify to Cloudflare Pages"
alt: x
importance: 500
timestamp: 1709216723
date: '2024-02-29'
---

# Taking your static Nuxt 3 + Nuxt Content site from Netlify to Cloudflare pages

### Background

If you, like me, have read [this
post](https://old.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/){:target="_blank"},
you probaly got pretty scared about hosting your static sites on Netlify. Long
story short: someone who hosted a page on Netlify was the victim of a DDOS
attack, and an mp3 file they hosted on Netlify got requested repeatedly,
resulting in terabytes of data transfer, and was then charged $100k for the
honours, upon opening a ticket the bill was dropped to $5k, finally when the
Reddit post went viral, they got off for free.

The possibility of a sudden traffic spike onto some big file resource you haven’t
thought about and the next thing you know you’re legally liable for thousands,
unless you manage to make enough noise, is not a risk I’d like to leave myself
open to.

So, I did some provider window shopping, and found that Cloudflare Pages offers
a similar service, with the benefit of no network limits in the free tier.
Let’s get migrating.

### Starting the migration process

The first thing you’ll experience by creating your Cloudflare account is not
knowing where to click due to the amount of buttons, their product offering is
huge so it does feel a little bit more daunting than Netlify. Anyway, what you
wanna do is head over to **Workers and Pages**, and click **Create
application**, pick the **Pages** tab and connect to your static site Github
repo.

You can copy over your build settings from Netlify, but I had to do some boring
trial and error, which I have left out of this text, and ended up with the
following config:

<div class="flex flex-col mx-auto text-center" style="max-width: 28rem;">
  <img style="margin-bottom: 0;" src="/screenshots/cloudflare_build_config.jpg" alt="My Cloudflare Page build config" />
  <span class="text-sm italic">My Cloudflare Page build config</span>
</div>

### The blight of the Nitro preset for Cloudflare Pages

I couldn’t get the build running, even though it was perfectly happy deploying
the site on Netlify, what was different? In theory it should be the same build
right? Wrong! Here’s the error you’ll get without making any changes:

```
Error: Failed to publish your Function. Got error: Your Functions script is
over the 1 MiB size limit (workers.api.error.script_too_large)
```

Function? I’m deploying a static site, why does Cloudflare Pages think I’m
deploying a function? Scrolling up a bit in the build log I found this:

```
[info] [nitro] Building Nitro Server (preset: `cloudflare-pages`)
```

So a Nuxt content static site is built using
[Nitro](https://nitro.unjs.io/){:target="_blank"}, it walks through the routes
and generates each page and compiles it to a static resource.

Now it turns out that Cloudflare Pages has provided a specific preset for
Nitro, to run Nuxt apps as serverless functions, fantastic! Except we’re trying
to deploy a static site and don’t have any functions, and this preset is
getting applied by default, that’s why our build worked on Netlify, but not on
Cloudflare Pages. Time to update our `nuxt.config.ts` and explicitly set what
preset we want to use:

```ts
nitro: {
  preset: 'static',
},
```

Et voilà, Cloudflare Pages now stops trying to build a serverless app, and
accepts it’s a static site.

I’m not sure if you will have this problem, but I thought I’d cover it just in
case. So my `yarn generate` command would not exit, the build process would
remain running indefinitely. This is probably because the [Nuxt SSR 
flag](https://nuxt.com/docs/api/nuxt-config#ssr){:target="_blank"} is not
explicitly set to false. However, enabling this flag breaks the Nuxt Content
[documentDriven
mode](https://content.nuxt.com/get-started/configuration#documentdriven){:target="_blank"},
resulting in an empty site. So I needed to ensure the build process properly
exits and Cloudflare continues to deploy the build.

I could achieve this with the following hook in my `nuxt.config.ts`

```ts
{
  ...
  hooks: {
    close: () => {
      process.exit(0)
    },
  },
  ...
}
```

See [this Github issue
thread](https://github.com/nuxt/cli/issues/169#issuecomment-1729300497){:target="_blank"}
for reference.

### Finally it deploys + Conclusion
At this stage deploys are working, moving the DNS over to Cloudflare was easy,
head over into the **Custom domains** tab on your page, add your domain, and then
it should be a matter of changing the name servers to point from Netlify to
Cloudflare.

From an end user perspective I was very impressed by the load times with the
app now hosted on Cloudflare, their compression tech has led to quicker page
loads than before, I experience a significant visual difference from before
when opening the site uncached.

All in all the migration was a good experience, once you iron out the quirks of
nitro presets. Plus, now I don’t have to worry about losing tons of money either
which makes me sleep better at night.
