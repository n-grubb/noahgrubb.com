---
title: On Mandatory Tech..
date: 2019-05-30
---

Over the past few years, it has seen to become an assumption that projects will be built in either WordPress or React. 

Is it an app? 
> "This needs to be done in React."

Is it.. not an app? 
> "Must be a WordPress site." 

I believe it is the duty of web developers to prevent sites to conform to one of two molds. Maybe I should keep my mouth shut as someone who makes a living as a WordPress expert, but WordPress is not necessary for all sites. React is not necessary for <abbr title="Progressive Web Apps">PWAs</abbr>. 

The decision to use a certain technology is a nuanced one for each site. The solution should be tailored to the problem. Before the decision to utilize a certain framework, CMS or technology is used we should first think about the constraints. Here are just a few questions I think about when beginning a project:
* Who is the audience? 
* How complex is the site or application?
* How many pages is the website?
* How often is the content likely to change?
* What kind of traffic is this site or application expected to see?
* Are the site admins tech-savvy? Can they write markdown, HTML, or CSS?
* Is the project dealing with any secure information? (credit cards, addresses, etc)

And that doesn't even cover questions you should ask about each individual technology that you are considering. Some examples:
* What is the core problem this tech aims to solve?
* How close to that core problem is our use-case?
* How mature is this technology?
* Will this technology increase the complexity of the project? (hosting, deploying, development environments)
* Will this technology cause performance issues?
* Is the community active? Will support be hard to come by?
* Who backs this technology? (implied reluctancy to use anything from Google or Facebook goes here..)

By asking these questions you might uncover that you don't need to use something as complex as React to build your web app. You might even learn that you don't need a web app at all! Maybe you learn that WordPress seems like a big solution for a site with a few pages and content that is not likely to change much. The client might be very comfortable writing HTML or markdown and not need the visual editor that is a core selling point of using a content mangement system. 

There are a lot of alternatives out there and you should do your research. Maybe you want to give <a href="https://getkirby.com/" target="_blank" title="Kirby CMS official website">Kirby</a> a try and see what a database-less CMS looks like. Maybe you just want to break from the WordPress mold and test out something a bit fresher like <a href="https://craftcms.com/" target="_blank" title="CraftCMS official website">CraftCMS</a>. Static site generators and utilizing the <abbr title="Javascript, APIS, Markup">JAM</abbr> stack opens up even more possiblities to create tailor-made solutions. I'm particularly keen on tech that opens up ways to create a custom CMS that only gives the client or end-user what they actually need. To that end, <a href="https://www.vapid.com/" target="_blank" title="Vapid CMS official website">Vapid</a> has my attention. <a href="https://svelte.dev/" target="_blank" title="Svelte official documentation">Svelte</a> is an exciting new JavaScript framework that feels much more intuitive (to me) than React and it is also free from the control of Zuckerberg's Army. And dare I say it, sometimes a plain HTML/CSS/JS site might even be the best answer! 

Don't get me wrong, I'm not arguing to quit using WordPress or React. I am merely saying that we, as the builders of the web, should challenge the assumption that any given framework or CMS is mandatory.
