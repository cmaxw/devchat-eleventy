---
layout: layouts/post.njk
title: >
      AiA 225: Data and Page Content Refresh Patterns in Angular with Eyas Sharaiha
date: 2019-02-05 11:00:58
episode_number: 225
duration: 1:05:28
audio_url: https://media.devchat.tv/adventures-in-angular/AiA_225_Data_and_Page_Content_Refresh_patterns_in_Angular_with_Eyas_Sharaiha.mp3
podcast: adv-in-angular
tags: 
  - adv_in_angular
  - podcast
---

## **Sponsors**

- [Sentry](https://sentry.io)&nbsp;use the code "devchat" for $100 credit
- [Angular Bootcamp](https://angularbootcamp.com)
- [TripleByte](https://triplebyte.com/angular)

**Panel:**

- Charles Max Wood
- Joe Eames
- Ward Bell
- John Papa

**Special Guest:** &nbsp;Eyas Sharaiha

**Episode Summary:** This episode of Adventures in Angular has the panelists speaking with Eyas Sharaiha, who is a software engineer working for Google, working primarily with Google Maps . Eyas mostly does back end and infrastructure work, which gives him an interesting view of Angular. The panelists and Eyas discuss his article Data and Page Content refresh Patterns in Angular. Eyas talks about the most common mistakes he sees in using Angular, namely transforming observables and then subscribing to them too early or too late, and putting certain kinds of data transformations in places where they end up making the code a lot less clear. His approach in his articles is to walk readers through with trial and error, rather than laying down some sort of law. Eyas lays out how he deals with changes in Angular, naming the three best things to do to use Angular and RXJS correctly, emphasizing the importance of looking for side effects. His rule of thumb is that if the observable does anything other than the data it is admitting, then something is probably wrong. The panelists go on to discuss the usefulness of observables. The ask Eyas what the most common code smells he finds in angular apps that frequently use observables and how he would correct people. Eyas again emphasizes side effects or mutation as a sign of a deeper problem, cautions people against bending over backwards to use an observable, and discusses the importance of unpacking an observable at the correct time. He encourages listeners to try out the ergonomics of AsyncPipe to combine observables where possible, and the importance of using observables correctly. The shift in Angular becoming more about learning RXJS and non-Angular things than it is about Angular is discussed and length, as well as the difficulty to relate Angular to other things. Eyas feels that this trend has taken away some of the magic of Angular. In fact, NG Conf’s annual survey revealed that the top struggles are RXJS and architectural guidance. The panelists emphasize that programmers should ask themselves why they are doing things this particular way, and to seek creative solutions using different types of programming, such as procedural, reactive, idiomatic, and object oriented programming. **Terms:**
- [Observables](https://angular.io/guide/observables)
- [RxJs](https://angular.io/guide/rx-library)
- [Async pipe](https://angular.io/api/common/AsyncPipe)
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Reactive programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [Inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming))
- [NGRX](https://github.com/ngrx/platform)
Follow DevChat on [Facebook](https://www.facebook.com/DevChattv/? __tn__ =%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en) **Picks:** Joe Eames
- [Talk List](https://www.ng-conf.org/schedule/) over at NG Conf
- [Five Minute Marvel](https://www.amazon.com/Spin-Master-Games-Fast-Paced-Cooperative/dp/B07B81RSZX/ref=sr_1_1?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_U)
John Papa
- [https://realtalkjs.com](https://realtalkjs.com)
Ward Bell&nbsp;
- [https://auth0.com/blog/ngrx-facades-pros-and-cons/](https://auth0.com/blog/ngrx-facades-pros-and-cons/)
Charles Max Wood
- [https://libsyn.com](https://libsyn.com)
- [Purple seat pad](https://www.amazon.com/Purple-Portable-Seat-Cushion-Relieving/dp/B01CKMP10E/ref=sr_1_1_sspa?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_U)
- [vrbo.com](https://www.vrbo.com/)
Eyas Sharaiha
- [Schema-DTS](https://github.com/google/schema-dts)&nbsp;- TypeScript library for Schema.org
- [Bad Blood](https://www.goodreads.com/book/show/37976541-bad-blood)


### Transcript


