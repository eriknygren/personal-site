---
title: CaptionHub
description: "CaptionHub: An enterprise captioning solution"
img: captionhub.svg
alt: x
importance: 500
---

# CaptionHub

### Summary

<div class="grid grid-cols-3">
  <div class="font-bold">When:</div>
  <div class="col-span-2">2017-present</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Back end:</div>
  <div class="col-span-2">Rails</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Front end:</div>
  <div class="col-span-2">Vue.js and various HTML5 media + canvas APIs</div>
</div>
<div class="grid grid-cols-3">
  <div class="font-bold">Core challenge:</div>
  <div class="col-span-2">Real time browser render performance and feature modularity</div>
</div>

CaptionHub is a lot of things, but in short: It’s an enterprise tool for
anything to do with subtitles.

<div>
  <iframe
    allowtransparency="true"
    title="Wistia video player"
    allowFullscreen
    frameborder="0"
    scrolling="no"
    class="wistia_embed mx-auto hidden md:block"
    name="wistia_embed"
    src="https://fast.wistia.net/embed/iframe/57crmj04yq"
    width="600"
    height="336">
  </iframe>

  <!-- sm screen embed version -->
  <iframe
    allowtransparency="true"
    title="Wistia video player"
    allowFullscreen
    frameborder="0"
    scrolling="no"
    class="wistia_embed mx-auto md:hidden"
    name="wistia_embed"
    src="https://fast.wistia.net/embed/iframe/57crmj04yq"
    width="400"
    height="224">
  </iframe>
</div>

It lets you transcribe a video, using AI-powered transcription engines. Create
translations, either automatically or using an editor (or both) and export them
to any format you can think of.

### What I've worked on

I was hired originally to rebuild the front end. There were two major parts to
this. First, the general project management around videos needed an overhaul to
support more sophisticated workflows and customisable feature sets per team as
the customer base and requirements grew.

Second, scaling issues with the video editor: It was a backbone JS app that
worked well, but it struggled to scale as the length of videos and the amount
of captions for a video increased. Problems that could be solved using
virtualisation and virtual DOM.

<img style="margin-bottom: 0;" src="screenshots/captionhub.webp" alt="Screenshot of CaptionHub's editor" />
<span class="text-sm italic">The CaptionHub caption editor</span>

I overhauled the UI using VueJS as the new base framework. This was a task that
required a lot of pragmatism. Partial deliveries of improvements was the only
solution that met business requirements, rather than a full rebuild.  I focused
on the most critical issues and moved over sections gradually as the old
Rails/jQuery UI could no longer deal with the complexity of customisable
workflows.

This turned out to be a good approach, iteration after iteration we could
rebrand the site, refresh the UX, solve critical performance issues and deliver
different tiers of feature support.

### Current state

A couple of years later and there’s not much legacy code left, and it’s a
modern performant app. It was always an excellent core product, but in the
world of modern enterprise SaaS software there’s a lot more to it:
platform integrations, self hosting, feature tiers, scaling etc. CaptionHub is
a product that can be shaped to meet all these demands. And that starts with
building applications that at their architectural core can deal with
modularity, across the whole stack.
