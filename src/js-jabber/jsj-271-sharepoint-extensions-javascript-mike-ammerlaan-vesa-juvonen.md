---
layout: layouts/post.njk
title: >
  JSJ 271: SharePoint Extensions in JavaScript with Mike Ammerlaan and Vesa Juvonen
date: 2017-07-25 05:10:27
episode_number: 271
duration: 53:17
audio_url: https://devchat.cachefly.net/javascriptjabber/JSJ_271_SharePoint_Extensions_in_JavaScript_with_Mike_Ammerlaan_and_Vesa_Juvonen.mp3
podcast: js-jabber
tags:
  - js_jabber
  - podcast
---

## JSJ 271: SharePoint Extensions in JavaScript with Mike Ammerlaan and Vesa Juvonen

This episode is a live episode from Microsoft Build where AJ O'Neal and Charles Max Wood interview Mike Ammerlaan and Vesa Juvonent about building extensions for SharePoint with JavaScript.**[00:01:28] Mike Ammerlaan introduction**Mike has worked at Microsoft for a long time on multiple Microsoft products and projects. He's currently on the Office Ecosystem Marketing Team.**[00:01:52] Vesa Juvonen introduction**Ves a is Senior Program Manager for the SharePoint Splat team. He's been with Microsoft for about 11 years and manages the community and documentation for the SharePoint framework.**[00:02:18] What is the SharePoint Framework?**This is how you write SharePoint extensions with JavaScript. SharePoint has changed. It now works with common modern development tools and web development techniques. SharePoint consolodates the extension effort**[00:03:32] What is SharePoint?**File sharing, team sites, communication points for teams. Part of Office 365. You use Web Parts to add functionality to SharePoint. Web Parts provide functionality like widgets and are scoped to a team, group, or set of users. It's usually hosted on premises, but you can also use it with Office 365 as a hosted solution.**[00:05:56] What extensions can you build for SharePoint?**You can build widgets for your front page or intranet. You can also add user management or data management or document management. Examples:

- Dashboards
- Mini Applications
- Scheduling and Time Tracking
- Document Storage
- Source code repositories
  **[00:07:39] What is WebDAV and how does it relate?**WebDAV is a protocol for accessing documents and SharePoint supports it among other protocols for managing documents.**[00:08:36] Do I have to build front-end and back-end components to get full functionality?**You can build the front-end UI with Angular and other frameworks. And then build a service in Azure on the backend. The backend systems can then access Line of Business systems or other data systems. It really does take multiple skill sets to build extensions for SharePoint.**[00:11:10] SharePoint on Mobile**There is a mobile web app and the Web Parts work through the mobile application. You can also use any browser to connect to the application.**[00:12:08] Building extensions with standard Angular or React component libraries**There are standard Yeoman templates. You can also pull in the components through React or Angular just like what Microsoft does. Newer Angular versions are designed for Single Page Apps and SharePoint isn't necessarily set up to work that way. The Web Parts are isolated from each other and Angular requires some workarounds.**[00:14:30] Getting around sandboxing**Google and Microsoft are talking to each other to see how to work around this when there are multiple sandboxed applications that can't talk to each other in very simple ways.**[00:15:39] Application library or naming collisions if my UI uses different versions or clobber page wide settings**There are guides for a lot of this. React does a bunch of the isolation work. Addons are iframed in and an API token is given to grant access to the data and APIs. Microsoft also reviews and approves plugins.**[00:18:30] How do you get started and make money at this?**Look at the SharePoint store. You can build things through websites and pages and offer the plugins through the store. You can request a SharePoint tenant installation from the Microsoft Dev Tools for free. Then you can build into the tenant site. The rest of the tools are available on npm.[SharePoint Developer Tools](http://dev.office.com/sharepoint)**[00:22:13] Automated testing for SharePoint extensions**Unit testing is built in for JavaScript. Testing the UI's require you to sign into Office 365. There are people doing it, though.**[00:22:54] Building internal-only extensions**SharePoint is an enterprise tool, so a lot of enterprises may not want to install extensions from the store. You can definitely build and install private plugins for SharePoint setups. They also have their own backend systems that will require custom development.**[00:25:50] Office 365, SharePoint, and OneDrive**Office 365 is used by people across many different sized organizations and SharePoint is much more enterprise. Office 365 tools store files and information in SharePoint. What about OneDrive versus Sharepoint? OneDrive is focused for one person. SharePoint is focused around a team. But they have the same APIs and use the same technology stack.**[00:29:05] The history and future of SharePoint**It started out on premises and has moved to the cloud. The SharePoint team is working to keep it available and useful in the modern cloud based era.**[00:30:25] What does the API footprint look like?**It spans modifying lists, data objects, attributes, items in a list, put Web Parts on a page, modify the experience, and manage and modify access, users, and documents. SharePoint is a way of building a way of conveying information. SharePoint is layers of data and scopes.**[00:35:26] Tutorials and Open Source**[dev.office.com](http://dev.office.com)The Sharepoint framework is not open source yet, but they're working on that. They also need to open source the Yeoman templates. Open source samples are available at [github.com/sharepoint](http://github.com/sharepoint).

### **Picks**

**Charles Max Wood**

- [BlueTick](http://bluetick.io)
- [Zapier](http://zapier.com)
- [ScheduleOnce](http://scheduleonce.com)
- [Moo.com](http://moo.com)
- Advice: Take the time to go talk to people. Vesa adds that you should go to a session that's on something completely outside your experience.
  **AJ O'Neal**
- [The Circle](http://www.imdb.com/title/tt4287320/)
- Spontaneity/Happiness: AJ tells a story about a woman he saw running through sprinklers.
- [Oh the places you'll go by Dr. Seuss](http://amzn.to/2u5Icq7): AJ talks about a journal entry he read at a yard sale.
  **Mike Ammerlaan**
- [Super hot VR on Oculus Rift](http://store.steampowered.com/app/617830/SUPERHOT_VR/)
  **Vesa Juvonen**
- Family
  A big thanks to Microsoft, DotNetRocks, and Build!

### Transcript
