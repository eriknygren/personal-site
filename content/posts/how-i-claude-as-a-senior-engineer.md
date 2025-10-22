---
title: "How I Claude"
description: "How I increase my output without causing a flop due to slop"
alt: x
importance: 500
timestamp: 1757087834
date: '2025-10-22'
---

# How I Claude as a senior engineer

**How I increase my output without causing a flop due to slop**

*Note: There are many of these tools out there, but I use Claude, so expect some Claude terminology below.*

## Is my LLM stupid?

Yes but you're smart so you can be the smart cop, and Claude can be the dumb cop.

All over the forums people are shouting about various coding tools and model performances, or
that this tool has become stupid et cetera. Although I am sure that fluctuating
quality is real, I'm not convinced relying on your AI assistant for solving
things for you is a good idea, nor would it be much of a productivity increase.

From experience, when I tried using Claude on parts of an application I don't really understand to
*"speed my progress up"*, I'm moving the cognitive load away from learning the system and planning
my feature, to proofreading. And since I don't really know this part of the
system, let's be honest, I'm moving the cognitive load to my team members to
proofread at the PR stage. This is not only risky in terms of application
quality, but also rather antisocial.

There are factors that mitigate this of course, type safe languages, good testing practices,
a well-written **CLAUDE.md** and linters, but even so. It will spit out slop, and
not reuse existing services the way someone who knew a piece of the system would.

*🤖 You're absolutely right, the Claude.md says to look for services and reuse, but I didn't.
I did not follow instructions, that was very bad of me 🤖*

Don't waste your life having these types of "debates" with your computer ⬆️.

## Let's get this stupid LLM to be smart about it

After about 6 months of usage now, I think I found my sweet spot where it is a
legit productivity increase. It's not an increase on every piece of work I pick
up, but when the work is shaped in the right way, I believe it to be a 2x-3x
productivity increase (subjective measurement)

- **I need to work on features in my skill set, in parts of the system I champion/know deeply**

Otherwise the prompt will just not be detailed enough, leaving lots open for
Claude to interpret, and you can't really validate its result. For work of
this shape I would personally stick to my IDE.

- **It needs to be typesafe (the self reinforcement loop of this is crucial)**

So in the project level **CLAUDE.md**, it's very helpful to have something like:
```
### Code Quality
- **MANDATORY after editing .vue or .ts files**: ALWAYS run BOTH linting AND
  TypeScript checking:
  - `yarn eslint` (try `yarn eslint --fix` first to auto-fix issues)
  - `yarn typecheck_app` for application files
  - `yarn typecheck_tests` for test files
  - If you're unsure about TypeScript types, ASK rather than assume

```
- **It needs to have clearly defined testing practices**

Help Claude understand where each layer is tested and how, should there be unit
tests for this file, or are these endpoints tested via request tests. I think
with LLM generated code the issue is adding too many tests, not too few. So
think of a reasonable middle ground here.

- **It needs to know how to assert functionality (what test suites to run when changing certain
  types of files etc)**

Getting it to run tests isn't really rocket science, I found that this is enough to make it usually
test what's expected if it changed a `.rb` or a `.js/ts/tsx/vue` file
```
Ensure tests pass (`yarn test run` for frontend, `bundle exec rspec` for
backend)
```

## A sensible vibe

Once we have identified a suitable piece of work that matches the above criteria, we can really
go to town. But we're not gonna vibe-code, we're going to approach a feature like you would have
in the year of our lord 2023:

1. Sit down with your favourite note taking solution of choice, and start mapping it out like
   you always have
2. One of the hardest things remains, naming things, do that at this stage, what
   should props be called, what's a suitable service name?
3. Think of ALL files that would need to change, like how you would have typed it, don't leave it
   to chance, you can also at this stage mark up parts of the code with `#TODO` comments, so the
   coding agent finds your draft ideas as it makes its plan

### Example prompt

So ok, following these rules, the prompt might look something like:
```
We’re working to add a feature that adds Foo to Bar.

This service will be called AddFooToBarService and will be located in
app/services/add_foo_to_bar_service.rb

- It needs to use the @shared/authentication_service.rb to do auth, see usage
  example in @services/an_already_nice_service.rb
- It needs to expose this through an endpoint called add_foo_to_bar in the
  @controllers/bar_controller.rb, and add tests in bar_controller_spec.rb

Get the local unstaged changes with #TODO comments to see additional pointers
for where changes need to be made.

We are just adding the endpoint, do not build out the front end.

```

If I'm halfway through the work on a branch, I usually use my [/diffmain command](https://github.com/eriknygren/dotfiles/blob/master/claude/.claude/commands/diffmain.md)
and my prompts usually look like:
```
/diffmain and let's add X to Y...
```

By just popping in all the right files in the prompt, in addition to your
committed comments, it should stick to doing what you wanted. It should self
re-inforce via type safety and specs and don't give up until it's done (which shouldn't be that long)

Keep the scope of the prompt similar to what would be a nice single commit size
if you were to work as a non-AI assisted worker of several months ago.

I'll run this, start planning out the next part, and by the time I have written that out in my notes,
it should be done with the above work. It shouldn't be too much to review, and it should all be
what you expected. Clear the context, run `/diffmain` paste in the next prompt, repeat until the feature is done.

I'm always working with relatively small context windows. No set and forget 5
hour prompts. Usually tasks are under 3 minutes to complete.

## Conclusion (/compact)

So that's my approach, I believe the benefits of this are:
- **Don't rot your brain**, you're still doing the thinking and planning, learning
  more and more as you consciously evolve the app architecture
- **It's just a very spicy autocomplete**, generating code without being
  overwhelming, there won't be so many added lines that you're gonna skim
  review it and become a slop-a-holic
- **It's fun!** the pace of work you'll be able to deliver at without quality
  compromises is simply very rewarding, I'm having a hoot in front of the computer
  every day

Obviously it can still be useful at coding in scenarios that doesn't match all
these criterias, but this is where I find velocity and risk meets at a nice
sweet spot. The biggest pitfall of all to avoid at the moment is to get sucked
into a real AI induced FOMO about velocity, I believe the cost of the
inevitable spaghetti output will be a dearer price to pay long term.

Don't believe me? Well my computer told me *I'm absolutely right*!
