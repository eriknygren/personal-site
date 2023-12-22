---
title: "Vuex to Pinia: An easy incremental migration path"
description: "An article with code examples explaining how you can incrementally migrate from Vuex to Pinia"
alt: x
importance: 500
---

# Vuex to Pinia: An easy incremental migration path

So you’ve gone and done it, you’ve moved your terrifyingly large app from Vue 2
to Vue 3. You’re enjoying all the new benefits that come with that, but you
can’t help but feel that something still holds you back from fully enjoying
modern LSP + TS features, and you’re sick of magic strings. That’s right, it's
time to come off Vuex.

So if you’ve read up on the basics. You’ll have learned that Pinia modules take
on a flat structure, and import other modules as required, whereas a Vuex store
can be built up in a hierarchy using submodules. This may sound like a big
change, but it actually opens up an easy migration path.

### Think of your existing Vuex store as just another module

In Pinia, when we want to talk to another store. We import the store definition
and invoke it to get access to the store, like the following example:

```js
import { useStoreB } from 'pinia/store_b'

export const useStoreA = defineStore('storeA', {
  state: () => ({ number: 1 }),
  actions: {
    myAction() {
      // we can dispatch an action in another store like:
      const storeB = useStoreB()
      storeB.callAction()
    },
  },
  getters: {
    myCalculatedValue() {
      // we can get the state of another store like:
      const storeB = useStoreB()
      return this.number + useStoreB().anotherNumber;
    },
  },
})
```
As you can see, no store “owns” another store, it’s a flat structure where each
store is imported when required.

Okay great you’re thinking, but how do this help me get off Vuex
incrementally? Well with Vuex 4, Vuex released support for the composition API
usage, by adding the [useStore
method](https://vuex.vuejs.org/guide/composition-api.html#composition-api).
Which lets you access the store instance on demand, just like we accessed the
`store_b` Pinia store in the example above.

So how could we extend the above Pinia store to talk with Vuex? Something like
this.

```js
import { useStoreB } from 'pinia/store_b'
import { useStore as useVuexStore } from 'vuex'

export const useStoreA = defineStore('storeA', {
  state: () => ({ number: 1 }),
  actions: {
    myAction() {
      // we can dispatch an action in another store like:
      const storeB = useStoreB()
      storeB.callAction()

      // now also dispatch a vuex action
      const vuexStore = useVuexStore();
      vuexStore.dispatch('mySubModule/actionName', { foo: 'bar' }, { root: true })
    },
  },
  getters: {
    myCalculatedValue() {
      // we can get the state of another store like:
      const storeB = useStoreB()
      const vuexStore = useVuexStore();
      // now also add a number to this calculation from the vuex store
      const stateFromVuex = vuexStore
                              .state
                              .mySubmodule
                              .anotherAnotherNumber
      return this.number + useStoreB().anotherNumber + stateFromVuex
    },
  },
})
```

As you can see in the example above, our Pinia store can now happily both fetch
state and dispatch action from a Vuex store.

### What about the other way around, can my Vuex store talk to a Pinia store?

It can indeed, using a similar approach if we have a Vuex action, we can call a
Pinia action by importing it:

```js
import { useStoreB } from 'pinia/store_b'
...
// a vuex action, calling a pinia action
const actions = {
  myVuexAction({ state, commit, dispatch}, param) {
    const storeB = useStoreB()
    storeB.callAction()
  },
}

// a vuex getter, fetching state from pinia
const getters = {
  myVuexGetter(state) {
    const storeB = useStoreB()
    return storeB.anotherNumber + state.aNumberStoredInVuex;
  },
}
```

So there you go, you now have an approach for talking between Vuex and Pinia,
and vice versa. Using this strategy, you can chip away at your migration at a
pace that suits your organization’s and application’s needs.

In the real world it’s not always easy to justify taking a month off to pay off
a bunch of tech debt all in one go!

