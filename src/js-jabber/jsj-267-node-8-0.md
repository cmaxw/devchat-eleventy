---
layout: layouts/post.njk
title: >
  JSJ 267: Node 8.0 with Mikeal Rogers, Arunesh Chandra, and Anna Henningsen
date: 2017-06-27 04:00:19
episode_number: 267
duration: 52:16
audio_url: https://devchat.cachefly.net/javascriptjabber/JSJ_267_Node8.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

---

#### JSJ 267 Node 8 with Mikeal Rogers, Arunesh Chandra, and Anna Henningsen

On today’s episode of JavaScript Jabber we have panelists Joe Eames, AJ O’Neil, Amiee Knight and Charles Max Wood and we are talking about Node 8. To help us we have special guests Mikeal Rodgers, Arunesh Chandra, and Anna Henningsen. It’s going to be a great show. Tune in.

---

##### [1:56] Is Node 8 just an update or is there more?

- More than just an update
- Two main points:
- Improved [Prana](https://www.npmjs.com/package/prana) support
- Native API
- Native APIs are helpful for Native Add-ons. For both the consumer and the developer side.
- Prior to update these Node Native modules ran in C++ and bound to specific to Node 8 APIs.
- Causes these modules to be updated or reconciled every time these modules are rereleased.
- Creates burden for module maintainers.
- Creates friction in upgrading Node versions in production departments.
- If you have a deployment depending on a certain Native module, some of the modules may not get updated in time when updating your Node versions. Keeping people from updating Node.
- Creates compatibility issues with Node users not using Node 8
- Experimental support for a Native layer in Node 8 to eliminate these issues as much as possible.
- Important milestone for the module ecosystem.
- You can write extensions for Node in C++ and it decouples V8 so you can use something else on the front.
- Modules takes dependency on V8 API specific to a particular version. So if V8 changes your module will be extracted from that.
- As a side benefit, you can have another VM to take advantage of that.
- Major version upgrades mean updating Native modules and usually some of those modules haven’t updated to the newest version of Node and be complicated.
- Deep dependency wise, about 30% depends on a Native module somewhere
- In the future, with the Native API, you’ll be able to update Node without breaking modules.

##### [5:51] What kind of work went into this?

- Most of the work was in C++
- First thing that was done was, they looked at the top dependent Native modules in the ecosystem.
- Looked for what kind of V8 exposure they had and cataloged it
- Looked at how these APIs and what their purposes were
- Looked for a way to extract them so that they are part of Node Core
- Created neutral APIs, now part of the Node core.
- All C APIs
- Also has a C++ wrapper to improves usability of the API.

##### [7:17] What’s an example of what you can do with these APIs?

- Native modules allows for tighter integration and better module performance
- Specific APIs that you can use in V8 that isn’t available through JavaScript
- If you have a C++ variable code and you want to expose a variable into JavaScript, that is V8 API note a Node 8 API
- Having it bound directly to the VM was something they wanted for a long time
- Google controls V8 and they bind to V8
- Created a better relationship with Google starting in IOJS
- Also worked with Microsoft with their Node Shocker work.
- Same with [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)
- [SpiderNode](https://github.com/mozilla/spidernode) is in the works

##### [9:23] Have you guys done any testing for performance?

- Some. There is a performance working group.
- There is a need to stay on top of V8
- V8 team has focused on new language features
- Many features have been added over the years
- Many didn’t come in optimized
- The performance profile has changed with these features
- If you’re using new language features, you will see a performance boost
- In core, still tracking down code that was specific to the old optimizer and rewriting i to work the new optimizer
- [Turbo C](https://turboc.codeplex.com/) compiler hasn’t landed yet, but is to come.
- Will have a completely different performance profile
- In most real world applications it will be faster
- Waiting on the release to take a version of V8 to make it easier to upgrade features in the future

##### [11:28] Are the new features picked up from V8 or implemented in Node?

- It’s all in V8
- Better longterm support
- Promises are made better in Node as a platform
- Added new method called `util.promisify()`
- Implementation comes from V8
- Allows for more optimization for promises in Node core
- Promise support for the one-deprecated domains module.

##### [13:02] Is there anything more than NMP 5?

- First off, delete your NMP cache.
- It’s in your home directory usually with a .npm extension

##### [14:09] What are the new features in V8?

- Unlimited heap sizes, previously had a 4gb limit. No fixed limit.

##### [14:09] Will you see things like chakra come out tuned for servers?

- Profiles of a server for application process are getting smaller
- Getting cut into containers and VMs and micro services
- Vms that have cold boot time and run quickly in a strained environment is looking more like what we will see in the future
- Yes, especially if you’re using cloud functions
- V8 is optimized for phones, but Chakra is even more so
- Looking for opportunities for VMs can be solely optimized for a device target
- Node take advantage of that VM
- VM neutrality is an interesting concept
- VM Vendors trying to optimize it based on workloads of a server
- Opens opportunities for Node
- Node Chakra has been proved to iOS. You can cut off jitting off which was a requirement to be able to be in the Apple App Store
- Node is not just for servers anymore
- Node doesn’t take a long time configuring it
- When a developer runs code on an IoT or a mobile app they don’t control the VM that is bundled, they run it on top of Node and it just works.
- VM neutrality gives a new vector, so you can swam a whole different VM

##### [18:44] When running different engines like iOS vs Android, does the profile change?

- What it comes down to is if it’s eventive programming
- The browser is an eventive environment, is very efficient waiting for things to happen before it does something
- The way that we program servers and nodes are the same as well
- the basics are the same generally
- environmental differences exist but the programming model is usually the same
- What does impact it is memory and processor and hardware and things like that
- That is where tuning the VM comes into play

##### [20:29] What is the new Async Hooks API used for?

- Node has been lacking for automated inspection of Async Hook
- No way for Node to tell you when scheduling and beginning of an Async operation. Hook helps with that
- it’s a way for developers to write debugging features
- Node tells the application that it’s working with Asynchronous way.
- The embedded inspector has been embedded since Node 6
- Now has a JavaScript API to use it
- You can use things like Chrome debugger inside the running node process
- Old debugging protocol has been removed
- VM.run is still there but in the process of being deprecated

##### [22:34] How like is the experimental Node API will change?

- Marked as experimental because it’s the first time in the open
- Hopefully out of experimental soon
- Soon can port API to the existing LTS
- Looking for more people to participate with the new API and give feedback
- Fix any concerns before it goes to LTS
- Some other experimental things are in the works like ASync Hooks and how it interacts with promises
- Renaming some features
- Another new feature - serializer and deserializer that comes with V8
- experimental but will most likely stay

##### [25:31] what is your standard for going to LTS?

- Major releases every 6 months
- Next Oct Node 9 will come out and then Node 8 will be LTS
- Documentation, updates, additions etc will be ready then
- Plan to do it for 2.5 years
- Every even releases come out to LTS as the odd release comes out
- Helps keeps a current line while having something new in the release line
- Node 6 is the current LTS version

##### [27:26] What are you taking out or deprecating in Node 8?

- Use the word deprecate sparingly
- If many people use features, it’s hard to get rid of
- Security issue with Buffer, constructor argument was ambiguous
- Had added APIs that were more explicit over time and pushed those
- Now it will be deprecated

##### [28:43] 21% - 33% Performance increase with some Node updates

- Someone online updated their React app to Node 8 and found an 21% - 33% increase
- Benchmarking group tests to make sure things are getting faster
- V8 is always getting faster as well
- Code changes fast and so there is a chance performance slows down so they have people to check
- Benchmark test are all automated by a team

##### [30:47] Is it safe to just switch to Node 8?

- For front-end, yes
- clear your NPM cache
- Back use cases will usually wait until LTS

##### [31:28] Where any of the features hard to implement?

- The API work took about a year
- It was a collaboration which made it interesting
- IBM, Intel, Google were involved
- The collaboration took a while
- Also Async hooks took at least a year.
- Async hooks used to be called async wraps and has been in the work for almost 3 years
- many of the changes were the accumulation of small chances

##### [33:07] It’s the little things

- Letting people get small changes in accumulate into a big difference
- the product gets much better that way

##### [33:57] What versions of Node are you actively updating?

- Current releases of Node 8 for a half of year
- Node 6 is LTS
- Additional year of maintenance of previous LTSs.
- Schedule is at [http://github.com/node8js/lts](http://github.com/node8js/lts) in a chart
- Support for Node 4 with only critical updates, Node 6 minor updates, and Node 8
- Node 7 doesn’t get much support unless it’s vital security supports.
- If you’re running 0.10 or 0.12 stop. Those do not get security fixes anymore

##### [35:42] Where do you see things going from here?

- Mostly still working out Async hooks
- Maybe add some web worker or worker support for Node JS
- ES module support
- Working to make promises better
- Working on the performance profile and internal systems

##### [20:29] What is the adoption like of Node 8?

- Node team gets better at getting people to adopt quickly
- but about 5% - 6% will not upgrade
- community doubles each year at 8 million users right now
- [Here is a graph on Twitter posted by NPM](https://hackernoon.com/upgrading-from-node-6-to-node-8-a-real-world-performance-comparison-3dfe1fbc92a3)
- Limiting breaks and softly deprecating things makes it’s easier to upgrade

##### [40:11] How can people contribute and get involved?

- [NodeToDo.org](http://nodetodo.org) shows how to make contribution
- Occasionally major conferences have information on how to contribute
- Test it out and help make it stronger

##### [42:08] If people install Node 8 and have issues what can they do?

- If it’s an NPM problem check with them
- clear cache!
- install newest version with: `npm install -g npm@latest`
- Report problems to either [NPM](http://github.com/nmp/nmp) or [Node](http://github.com/nodejs/node)
- If you’re not sure where the problem is, check [github.com/nodejs/help](http://github.com/nodejs/help)

---

#### Links

[Node8](https://nodejs.org/en/blog/release/v8.0.0/)[Node’s Twitter](https://twitter.com/nodejs)[Node’s Medium](https://medium.com/@nodejs)[Node Evangelism Group](http://github.com/nodejs/evangelism/)

Mikael on [Twitter](https://twitter.com/mikeal) and [GitHub](https://github.com/mikeal)Arunesh on [Twitter](https://twitter.com/AruneshC)Anna on [Twitter](https://twitter.com/addaleax)

---

#### Picks

##### AJ

[Overclocked Remix Super Mario RPG Window to The Stars](http://smrpg.ocremix.org/)

##### Amiee

[Blogpost RisingStack on Node 8](https://blog.risingstack.com/important-features-fixes-node-js-version-8/)  
[2 Frugal Dudes](http://2frugaldudes.com/)

##### Charles

[Homeland](http://www.sho.com/homeland)  
[House of Cards](http://house-of-cards.wikia.com/wiki/Main_Page)

##### Joe

[Shimmer Lake](https://www.youtube.com/watch?v=sm_hwxNTAa0)

##### Mikael

[Blake2b-wasm](https://github.com/mafintosh/blake2b-wasm)

##### Aremesh

Current Nightly News

---

### Transcript
