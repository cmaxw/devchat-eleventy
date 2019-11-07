---
layout: layouts/post.njk
podcast: js-jabber
title: 'JSJ 406: Security in Node'
date: 2019-11-05T11:00:17.280Z
episode_number: '406'
duration: '1:16:46'
audio_url: 'https://media.devchat.tv/js-jabber/JSJ_406_Panel.mp3'
tags:
  - js_jabber
  - podcast
  - node
  - node.js
  - security
  - web development
  - JavaScript
  - Node 11
  - Node 13
  - Steve Edwards
  - AJ O'Neal
  - Charles Max Wood
  - web security
  - encryption
  - ''
question1: What is TLS?
answer1: >-
  TLS is a handshake that happens between a client and a server. They exchange
  certificates, generate some random numbers to use for encryption, and TLS
  handles the encryption.
question2: What is the difference between HTTPS and TLS?
answer2: ' While TLS reduces the handshakes between client and server, HTTPS is just HTTP and has no knowledge that TLS is going on.'
question3: What is a certificate and what does it represent?
answer3: >-
  A certificate has on it a subject, which is a field which contains things like
  common name, which in the case of HTTPS is the server name or host name. then
  it will have subject alternative names (SAN), which will have a list of other
  names that are valid on that certificate. Also included on the certificate is
  the name of the authority that issued the certificate. There are also multiple
  types of certificates
question4: What is the difference between encryption and hashing?
answer4: >-
  Hashing is for verifying the integrity of data, while encryption can be used
  either as signing to verify identity or to keep data owned privately to the
  parties that are part of the connection. Encryption does not necessarily
  guarantee that the data is the original data.
---
Today the panel is talking about security features that are being added to Node 13. AJ talks about the background and what he's working with Let's Encrypt. He talks about changes that Node has made to the TLS module. TLS is a handshake that happens between a client and a server. They exchange certificates, generate some random numbers to use for encryption, and TLS handles the encryption. The move to HTTP/2 is all about fixing legacy bugs and legacy features from the SSL days and reducing the number of handshakes.

AJ talks about the difference between TLS and HTTPS. While TLS reduces the handshakes between client and server, HTTPS is just HTTP and has no knowledge that TLS is going on. HTTP/2 is more baked in as both encryption and compression are part of the specification and you get it automatically. HTTP/2 is also supposed to be faster because there's fewer handshakes, and you can build heuristic based web servers. Since browsers have varying degrees of compatibility, a smart HTTP/2 server will classify the browser and anticipate what files to send to a client based on behavior and characteristics without the client requesting them

A lot of these new features will be built into Node, in addition to some other notable features. First, there will now be set context on the TLS object. Second, if you're connected to a server, and the server manages multiple domains, the certificate will have multiple names on it. Previously, each different server name had a different network request, but now a .gitcertificate will let you get all the metadata about the certificate, including the primary domain and all the secondary domains and reuse the connections. 

These new features are a great improvement on the old Node. Previously, the TLS module in Node has been an absolute mess. These are APIs that have been long neglected, and are long overdue core editions to Node. Because of these additions, Node Crypto has finally become usable. HTTP/2 is now stable, usable, and has backwards compatable API, and a dictionary of headers to make it more efficient in compression.

The conversation turns back to certificates, and AJ explains what a certificate is and what it represents. A certificate has on it a subject, which is a field which contains things like common name, which in the case of HTTPS is the server name or host name. then it will have subject alternative names (SAN), which will have a list of other names that are valid on that certificate. Also included on the certificate is the name of the authority that issued the certificate. AJ talks about some of the different types of certificates, such as DV, OV, and EV certificates. They differentiate between encryption and hashing. Hashing is for verifying the integrity of data, while encryption can be used either as signing to verify identity or to keep data owned privately to the parties that are part of the connection. Encryption does not necessarily guarantee that the data is the original data. The show concludes with AJ talking about how he wants to make encryption available to the average person so that everyone can share securely. 

### Panelists

* Steve Edwards

* AJ O'Neal

* Charles Max Wood

Sponsors

* [Tidelift](https://tidelift.com/)

* [Sentry](http://sentry.io/) use the code "devchat" for 2 months free on Sentry's small plan

* [Ruby Rogues](https://devchat.tv/ruby-rogues/)

Links

* [Let's Encrypt](https://letsencrypt.org/)

* [Greenlock](https://www.npmjs.com/package/greenlock)

* [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2)

* [Node.js](https://nodejs.org/)

* [Node Crypto](https://nodejs.org/api/crypto.html)

* [JWK](https://tools.ietf.org/html/rfc7517)

* [LZMA](https://www.7-zip.org/sdk.html)

* [Gzip](https://www.gzip.org/)

* [Broccoli.js](https://broccoli.build/)

* [HTTPS](https://support.google.com/webmasters/answer/6073543?hl=en)

* [GCM](https://developers.google.com/cloud-messaging)

* [ASN.1](https://www.itu.int/en/ITU-T/asn1/Pages/introduction.aspx)

* [OWASP list](https://www.cloudflare.com/learning/security/threats/owasp-top-10/)

* [jwt.io](https://jwt.io/)

* [Diffie Hellman Key Exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)

* [Khana Academy Diffie-Hellman Key Exchange pt.2](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/diffie-hellman-key-exchange-part-2)

Follow DevChatTV on [Facebook](https://www.facebook.com/DevChattv/?__tn__=%2Cd%2CP-R&eid=ARDBDrBnK71PDmx_8gE_IeIEo5SnM7cyzylVBjAwfaOo1ck_6q3GXuRBfaUQZaWVvFGyEVjrhDwnS_tV) and [Twitter](https://twitter.com/devchattv?lang=en)

### Picks

Steve Edwards:

* [Panasonic SD-YD250 bread machine](https://shop.panasonic.com/microwave-and-kitchen/kitchen-appliances/bread-makers/SD-YD250.html)

AJ O'Neal:

* [Greenlock v.3](https://git.rootprojects.org/root/greenlock.js)

* [Samsung Evo 4 TOB ](https://www.amazon.com/Samsung-Inch-Internal-MZ-76E4T0B-AM/dp/B07864XY8B/ref=as_li_ss_tl??ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)paired with 2012 Macbook Pro

* [Dave Ramsey on Christian Healthcare Ministries](https://www.youtube.com/watch?v=RAjgCUcqXAM)

Charles Max Wood: 

* [Velcro straps](https://amzn.to/2W5Nthd?ie=UTF8&qid=1548462018&sr=8-1&linkCode=ll1&tag=devchattv-20&linkId=f06bfe7482dca8bb751ed6d7cc86e2ab&language=en_US)

* [Mac Pro Upgrade Guide](http://blog.greggant.com/posts/2018/05/07/definitive-mac-pro-upgrade-guide.html)
