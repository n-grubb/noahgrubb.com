---
title: Seth Godin's Blog
slug: seth-godin
description: Implemented a redesign of Seth Godin's marketing blog, one of the most popular blogs on the internet.
---

<figure class="feature">
    <img src="/images/seths-blog-hp.png" title="The homepage of Seth's Blog" alt="A screenshot of the homepage on Seth's Blog" />
    <figcaption>The homepage of Seth's Blog</figcaption>
</figure>

### Project Overview: 
The primary goal of this project was to refresh Seth's long-running and very popular marketing blog. I teamed up with Seth's art director, [Alex Peck](https://alxpck.com/), to implement a redesign for the blog. I created a completely custom theme to accomodate the new design and a handful of plugins for a variety of new features.

The blog was previously built on Typepad, but Seth decided it was time to move it to a more modern platform. We created a new site architecture and developed a plan to migrate all of the old content over to the WordPress site.

<h3><span>Challenge:</span>"Star the Post"</h3>

<figure class="screenshot stp-thumb">
    <img src="/images/stp.gif" title="The Star the Post Animation" alt="The Star the Post Animation on Seth's Blog" />
    <figcaption>The Star the Post Animation</figcaption>
</figure>

One of the new features we wanted to add was a piece of functionality similar to Medium's applause button. This button allows users to give positive feedback on posts that resonate with them. I worked with Alex to design a simple animation to accompany this feature. We wanted to keep it quite simple to align with the rest of the design so  we ended up landing on a "pop" animation. 

<p class="clearit">The star count updates in semi-real time using the WordPress heartbeat API. Every 15 seconds, a post receives the updated count from the server and display that. The challenge here was that we needed to always display the accurate count but also keep the experience snappy for our users. We didn't want the animation to wait to play until we received a response from the server. Our solution: we update the count immediately and then send the update to the server. When the heartbeat api sends a new response, we refresh the count with the authorative number from the api response.</p>

We identified that users who "star" a post are more likely to share the post on social media. This prompted us to then add a short animation that directs a user's attention to the social media icons after the star animation plays.  

<figure class="screenshot full">
    <img src="/images/sg-social.gif" title="The Star the Post Social Animation" alt="The Star the Post Social Animation on Seth's Blog" />
    <figcaption>The Star the Post Social Animation</figcaption>
</figure>

We put this to data to use and used our star counts within an internal algorithm to rank blog posts. This required setting up a custom database table to store information and adding tracking to certain user interactions with the site such as page views and social shares. How we calculate this has changed over time but our equation looks something like this: 

```
Star Count = ( post views / 7 ) + ( star clicks * 1 ) + ( social shares * 7 )
```

You can see this in action via the "Story of the Week" that collects star counts over a 7 day period to determine the hottest article of that week. 

<figure class="screenshot feature">
    <img src="/images/story-of-the-week.png" title="A screenshot of the Story of the Week functionality" alt="A screenshot of the Story of the Week functionality" />
    <figcaption>The Story of the Week</figcaption>
</figure>

<h3><span>Challenge:</span>Notifications</h3>

Another feature we added was something we called Notifications. We created a post type within WordPress that was designated as "News &amp; Updates". These posts would include news about Seth's different ventures, such as book releases or course offerings. We then created a way to notify the user that a new post of this type is available for them to view. 

<div class="screenshot-grid">
    <figure class="screenshot">
        <img src="/images/sg-new-updates.gif" title='The "You Have New Updates" animation' alt='The "You Have New Updates" animation' />
        <figcaption>New Updates Notification</figcaption>
    </figure>
    <figure class="screenshot">
        <img src="/images/sg-new-updates-mobile.gif" title='The "You Have New Updates" animation on mobile devices' alt='The "You Have New Updates" animation on mobile devices' />
        <figcaption>New Updates Notification - mobile</figcaption>
    </figure>
</div>

We did not want this notification to show if a user has already seen the News post. So we used cookies to do this. We keep track of the post-id of the latest news post. On the first page view, the notification will not show as we want the content to make the first impression. After the first page view, the notification will appear if we determine a user has not seen the post that matches that id. We are able to determine if a user has seen the post by setting a cookie that holds the id of the last seen notification post. If a user visits the notifications page or visits the latest news post, the id of the latest post will be set and the notification alert will no longer appear for that visitor. 

<h3><span>Challenge:</span>Unique Share Images</h3>

When a user shares a post, we wanted to serve a nice image that accompanies the link. By itself, this is no challenge. But we wanted to put our own spin on this to make it easy for Seth going forward. Our goal was to have this image be chosen randomly from a group of images when a post is published. 

<figure class="screenshot rotating-images">
    <img src="/images/sg-og-image-1.jpg" title="One of Seth's Social Sharing Images" alt="One of Seth's Social Sharing Images" />
    <img src="/images/sg-og-image-2.jpg" title="A screenshot of the Story of the Week functionality" alt="One of Seth's Social Sharing Images" />
    <img src="/images/sg-og-image-3.jpg" title="A screenshot of the Story of the Week functionality" alt="One of Seth's Social Sharing Images" />
    <img src="/images/sg-og-image-4.jpg" title="A screenshot of the Story of the Week functionality" alt="One of Seth's Social Sharing Images" />
    <figcaption>Some of Seth's Social Sharing Images</figcaption>
</figure>

To accomplish this, I created an image category for media uploaded via the WordPress media manager. Under this category, we uploaded a handful of nice images to be used on social sites. When a post is published, we check to see if an image has been set and if not, use one of the images from our custom category. The image is saved to that post as metadata so that it will be consistent going forward. 

### Launch
There really is no margin for error on launching a site with this large of an audience. Lucky for us, we worked with the great team at [WordPress VIP](https://wpvip.com/) to seamlessly launch the new site with no issues for Seth's readers. 

<script>
    const images_to_rotate = document.querySelectorAll('.rotating-images img');
    let iteration = 0;
    setInterval( () => {
        iteration++;
        images_to_rotate.forEach( (image, i ) => {
            if ( i == iteration % images_to_rotate.length ) {
                image.style.display = 'block';
            }
            else {
                image.style.display = 'none';
                
            }
        });
    }, 2000);
</script>