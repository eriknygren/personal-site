---
title: Captionhub
description: An enterprise captioning solution
img: x
alt: x
---

# CaptionHub

### Summary

**Back end:** Rails

**Front end:** Vue.js and various HTML5 media + canvas APIs

**Core challenge:** Real time browser render performance and feature modularity

### What does it do

CaptionHub is a lot of things, but in essence: It’s an enterprise tool for
anything to do with subtitles.

<div>
  <iframe
    allowtransparency="true"
    title="Wistia video player"
    allowFullscreen
    frameborder="0"
    scrolling="no"
    class="wistia_embed mx-auto"
    name="wistia_embed"
    src="https://fast.wistia.net/embed/iframe/57crmj04yq"
    width="500"
    height="280">
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

I overhauled the UI using VueJS as the new base framework. This was a task that
required a lot of pragmatism, partial deliveries of improvements was the only
solution that met business requirements rather than starting over.  I focused
on the most critical issues and moved over sections gradually as the old
Rails/jQuery UI could no longer deal with the complexity of customisable
workflow (without some serious spaghetti code!).

This turned out to be a good approach, iteration after iteration we could
rebrand the site, refresh the UX, solve critical performance issues and support
different tiers of feature support.

### Current state

A couple of years later and there’s not much legacy code left, and it’s a
modern performant app. It was always an excellent core product, but in the
world of modern enterprise SaaS software there’s a lot more to it. In terms of
platform integrations, self hosting, feature tiers, scaling etc. CaptionHub is
a product that can be shaped to meet all those demands: And that starts with
building applications that at their architectural core can deal with
modularity, across the whole stack.
