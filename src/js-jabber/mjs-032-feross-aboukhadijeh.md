---
layout: layouts/post.njk
title: >
      MJS 032 Feross Aboukhadijeh
date: 2017-08-30 04:00:50
episode_number: 032
duration: 29:20
audio_url: https://media.devchat.tv//my-js-story/MJS_032_Feross_Aboukhadijeh.mp3
podcast: js-jabber
tags: 
  - js_jabber
  - podcast
---

## **MJS 032: Feross Aboukhadijeh**
Today's episode is a My JavaScript Story with Feross Aboukhadijeh. Feross talked about his contributions to the JavaScript community to the decentralized web. Listen to learn more about Mike!
### **[01:00] – Introduction to Feross Aboukhadijeh**
Feross was on episode 155 and he talked about Webtorrent. It was 2 years ago.
### **[01:35] – How did you get into programming?**
 **Toddler** Feross has always been interested in computers and technology. His mom told him a story about how when he was a toddler, he was always watching people whenever they’re using technology – the television, the microwave, or the VCR. She said that he’s trying to imitate what he saw. **HTML and Web proxies** According to Feross, he became seriously interested when he was in middle school when he learned about HTML and wanted to make a personal site. In high school, there was this class that you could take. It’s a tech team where they went around and fixed teachers’ computers because they were understaffed. Some of the computers have administrator privileges turned on for the student accounts as well because some of the software that was required for certain classes needed it. The computers always had viruses on them because people would install first-person shooters and play during class time. They actually have school-wide filtering system so students can’t access certain sites. One of the categories they blocked was downloading sites. In order to even do their job, they have to figure out web proxies to get around the filters. He ended up setting up one of those on his own server. **First website** Feross’ real programming experience was PHP. It was in his junior year of high school. He bought a book in Barnes & Noble about PHP and MySQL. He wanted to build a site to host his favorite flash animations. That project was a database-driven website where people can segment their flash animations and soundboards, prank phone calls, and other internet humor. The site was called freetoflash. That was the first website that he built.
### **[07:10] – How did you get into JavaScript?**
Feross thinks JavaScript is one of those languages that you don’t actually really bother to sit down and learn. There weren’t any good resources. According to him, He really didn’t know JavaScript until he started a company right after he graduated from college. He started taking JavaScript seriously because he was learning Node.js and realized that you can build real things from it. The start-up is called PeerCDN. They’re trying to make a content delivery network that would work in the browser using WebRTC. The idea is you would add a script tag to your website and then we would try to find other people visiting your site that already has the content that you want, you’ll fetch it from them over a peer-to-peer connection to save on your hosting build to reduce your CDN bill. That was a big Node application. It also has intense front-end component. He started learning about NPM, how you build things with microservices, and how do you deploy a JavaScript application. That was in 2013.
### **[09:35] – Webtorrent**
Feross has been trying to transition Webtorrent into a distributed contribution model. It’s always been something that he would give out commit rights. If someone makes a good contribution, he’ll just add them to the Github for it. He recently made it into an organization on Github. He’s hoping to make it something that’s not completely dependent on him in order for it to continue existing. He’s going to be involved with it for the foreseeable future but he’s also trying to do new projects as well besides that. The good news is Webtorrent is mostly done in some sense. It works well. There are bugs. But if you use Webtorrent, especially if you use the desktop application to torrent things, it’s really polished and works nicely.
### **[11:10] – Contributions to JavaScript community**
 **Standard JS** Feross is known for Standard JS or sometimes called JavaScript Standard Style. Standard JS is an attempt to codify some JavaScript style rules into a simple package that you can install. So, if you want to enforce the same set of code style or requirements on your code base, you can just use NPM install standard and then, in your test field or package JSON, you can just use that standard. You can run one command and it will tell you whether your code is a standard or not. If it’s not, it will tell you exactly what errors there are, on which lines in your project. These are errors of all kinds like inconsistent styling – spacing things correctly, preferences that people have, using a variable before it’s defined. Rather than having to spend a long time debating a bunch of ES rules with your team and deciding exactly which of the hundreds of rules you want to enforce and what exactly you configure them to, you can set a standard. There are about 800,000 people downloading it every month on NPM. Currently, it’s the second most popular style guide after the Airbnb style guide. **Why Standard JS** Feross was working on WebTorrent and he kept having pull requests from people that were really good that contain features or bug fixes. He wanted to merge but there will always be minor style issues. They are inconsistencies that didn’t really matter to the functionality of the application or the module but if they accumulate your code base over time. It’s like the Broken windows theory, where there’s a neighborhood with a broken window. People start to think that things aren’t maintained and things aren’t taken care of. He had this tough decision of he can either merge the pull request and fix the issues himself or he could give them feedback and say, “This is great. I want to merge this but please fix these 2 or 3 issues and update your pull request.” When you do that, around half the time, people just disappear and they’ve never actually make a change. It’s not really a nice thing to do especially if it’s a first-time contributor to your project because they went out of their way to actually make a change and you’re giving them work to do.
### **[20:40] – What are you working on now?**
I made a website recently just for fun. It’s called Play. It’s a music site. It’s a way to listen to and watch music videos. It has a really quick search that can get you quickly to the song that you’re looking for. What’s really cool about it is it has integration with this service called Songfacts. If the song that you’re listening to has associated facts in this song facts database, then, those facts will show up when you watch the video in a form of little bubbles that will appear on top of the video. It’s more of an experiment for me to learn about Preact. It’s an API compatible with React, which means that your React components and everything should just work if you switch from Preact to React, or back. It’s tenth the size of React. React is around 30kB and Preact is around 3kB, which is pretty nice if you’re trying to make a site that works well on mobile. I wanted to experiment on how small can I make this JavaScript bundle. How efficiently can I make a full-featured site with lots of fanciness while keeping the JavaScript bundle really small? It’s definitely possible to build applications that don’t have hundreds of kilobytes of JavaScript.
### **Picks**
 **Feross Aboukhadijeh**
- Decentralized web
- [Dat Project](https://datproject.org/)
- [Beaker Project](https://beaker-project.org/)
- [IPFS](https://ipfs.io/)
- [Secure Scuttlebutt](https://github.com/ssbc/secure-scuttlebutt)
- [Patchwork](https://github.com/ssbc/patchwork)
- [Brave](https://brave.com/)
- [Twitter: @WebTorrentApp](https://twitter.com/webtorrentapp?lang=en)
- [Twitter: @feross](https://twitter.com/feross)
**Charles Max Wood**
- [Let’s Encrypt](https://letsencrypt.org/)
- [Digital Ocean](https://www.digitalocean.com/)


### Transcript


