---
layout: layouts/post.njk
title: >
  RR 302 Web Security
date: 2017-03-21 05:00:12
episode_number: 302
duration: 50:05
audio_url: https://media.devchat.tv/ruby-rogues/RR_302_Web_Security.mp3
podcast: ruby-rogues
tags:
  - ruby_rogues
  - podcast
---

## **Web Security**

On today's episode, Brian Hogan, David Kimura, and Charles Max Wood discuss **&nbsp;web security**.&nbsp;Security&nbsp;demands attention. Developers can't risk having their projects exploited by hackers and other such attackers. Tune in to learn about the different types and issues in security.

## **Security in&nbsp;Rails**

Rails provides a good security and there are a lot of good conventions. However, it doesn't mean that if you write codes in Rails, you have nothing to worry about concerning security. There are still factors you need to consider&nbsp;to make sure that you have everything covered. There are numerous ways to introduce cross-site scripting. One is you could use a&nbsp;vulnerable code and the other is a third party library. &nbsp;There also exists an issue on SQL injection where if you do not sanitize user input, you open the risk of SQL injection even though Rails inherently follows the standard procedures.

## **Classifications of Security Vulnerabilities**

There are different levels of security and other factors you have to be aware of as you take each step in the process. It is very important to focus on your code vulnerability, which includes third party plug-ins, regardless whether you're using a Java library or a gem. Maintaining good security measures includes reviewing the source code, tracing back old issues that have been posted for that gem, and looking up to resources or reading about best practices on performing queries or running code. If you are going to add a gem to your library, it is your responsibility to administer necessary safety actions to lessen future issues.

## **Tools for Vulnerability Identification**

One way to mitigate vulnerability issues is to list down tools that would help us identify them up front. One of the gems commonly used is called Brakeman. It runs through the application and gives a report on the vulnerabilities it was able to catch. Another tool is OWASP ZAP which basically sets up a proxy to a browser. The proxy serves as a mediator between your browser and application. It can pick up cross-site scripting issues or different kinds of vulnerabilities.To hear _Web Security_,\_&nbsp;\_download and listen to the entire episode. Feel free to contact Charles if you want to know more about Ruby Rogues podcast. He would surely love to hear from you![Charles' Twitter account](https://twitter.com/cmaxw)If you’re short on time, here are the highlights of Web Security:Security in Rails? (3:29) Different levels of security? (8:34) Tools for identifying vulnerabilities? (14:16) Zero day vulnerability? (22:30) Automated testing? (26:18) Other security resources? (31:02) Recent security issues? (33:13)

## **Picks:**

Brian: [PrivacyRights.org data breaches section](https://www.privacyrights.org/data-breaches)David: [video on attr_encrypted](https://www.driftingruby.com/episodes/attr_encrypted)Charles: [JSJ Episode with Kim Carter](https://devchat.tv/js-jabber/jsj-251-infosec-for-web-developers-with-kim-carter), [Invisible Selling Machine&nbsp;by Ryan Deiss](https://invisiblesellingmachine.com/)

## **Episode Links:**

[OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project),&nbsp;[Brakeman](https://brakemanscanner.org/),&nbsp;[Metasploit](https://www.metasploit.com/),&nbsp;[XSS (Cross site scripting)](<https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)>),&nbsp;[SQL injection](https://www.owasp.org/index.php/SQL_Injection),&nbsp;sanitizing on user input,&nbsp;COBOL,&nbsp;authenticity tokens,&nbsp;SSL,&nbsp;[Brakeman Pro](https://brakemanpro.com/),&nbsp;[Justin Collins episode](https://devchat.tv/ruby-rogues/219-rr-brakeman-and-rails-security-with-justin-collins),&nbsp;Cloudflare (proxy),&nbsp;Code Reviews,&nbsp;[Rails Security mailing list](https://groups.google.com/forum/#!forum/rubyonrails-security),&nbsp;[Heartbleed](https://heartbleed.com/),&nbsp;[OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project),&nbsp;server hardening,&nbsp;server updates,&nbsp;[GitLab data loss](https://about.gitlab.com/2017/02/01/gitlab-dot-com-database-incident/), [DDOS](https://en.wikipedia.org/wiki/Denial-of-service_attack)

### Transcript
