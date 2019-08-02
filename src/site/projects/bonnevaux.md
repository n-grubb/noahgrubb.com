---
title: Bonnevaux Centre for Peace
slug: bonnevaux
description: A hand-crafted digital experience to support the meditation center's fundraising intiative's and event booking.
---

<figure class="feature">
    <img src="/images/bv-about.png" title="The About page of Bonnevaux" alt="A screenshot of the Bonnevaux homepage" />
    <figcaption>The About Page on Bonnevaux</figcaption>
</figure>

### Project Overview: 
Bonnevaux is the international meditation and retreat centre of the <a href="http://wccm.org/">The World Community for Christian Meditation</a>. The retreat centre is now open but much of the grounds are still under construction. The <abbr title="World Community for Christian Meditation">WCCM</abbr> wanted to create a site to support fundraising efforts for the center as well as the events that are starting to take place there. The <abbr title="World Community for Christian Meditation">WCCM</abbr> enlisted <a href="https://being.design/" target="_blank">Being Design</a>'s help with this and I was drafted to run the technical side of things. 

<h3><span>Challenge:</span>Gutenberg</h3>

The vision for the site encompasses different phases over the next few years as the centre becomes more and more operational. Because of this, we wanted to build this site in an especially forward-thinking manner and that meant utilizing the new <a href="https://wordpress.org/gutenberg/" target="_blank">Gutenberg editor</a>. Being Design thoughtfully crafted a design system and I created custom Gutenberg blocks to implement it. This ended up being quite the challenge since creating Gutenberg blocks doesn't have great documentation. However, I think we knocked it out of the part. Gutenberg excels when paired with a design system, it allows you to think about a design in the same way. Our blocks are used around the site to create a feeling of unity through all of the site's content. 

<figure class="screenshot rotating-images">
    <img src="/images/bv-contentblock-wide.png" title="A custom Gutenberg block for displaying content, on wide screens" alt="A custom Gutenberg block for displaying content, on wide screens" />
    <img src="/images/bv-contentblock-large.png" title="A custom Gutenberg block for displaying content, on large screens" alt="A custom Gutenberg block for displaying content, on large screens" />
    <img src="/images/bv-contentblock-medium.png" title="A custom Gutenberg block for displaying content, on medium screens" alt="A custom Gutenberg block for displaying content, on medium screens" />
    <img src="/images/bv-contentblock-small.png" title="A custom content block created with Gutenberg on small screens" alt="A custom Gutenberg block for displaying content, on small screens" />
    <figcaption>A custom Gutenberg block for displaying content at various screen widths</figcaption>
</figure>

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

This content block above is a great example, and a block we are particularly proud of. It looks great on all screen sizes and is really versatile for us to be used many times on the site through different block options. 

<figure class="screenshot feature">
    <img src="/images/bv-donation-pages.png" title="A donation page on the Bonnevaux site" alt="A donation page on the Bonnevaux site" />
    <figcaption>A donation page on the Bonnevaux site. <a href="https://bonnevauxwccm.org/donation/retreat-center/" target="_blank">See the full page</a></figcaption>
</figure>

The Gutenberg editor has allowed us to pass alot of control to the site editors. Using Gutenberg and the blocks we created, our editors have created beautiful donation pages for the different areas of the center that users can contribute to.

<h3><span>Challenge:</span>Multilingual</h3>

The <abbr title="World Community for Christian Meditation">WCCM</abbr> is a global organization which means people with many different language preferences will be viewing the site. We wanted to make sure that the site was built with full translation support. In all of our templates, I utilized the WordPress <a href="https://codex.wordpress.org/Function_Reference/_2" target="_blank">translation function</a> namespaced to our theme. 

ex: `__( 'Facilitator', 'bonnevaux' );` 

Using this in conjuction with the <a href="https://wpml.org/" target="_blank">WordPress Multilingual Plugin</a> allowed us to create a theme where all text is available for translation. The site is currently in English and French, with plans for more languages in the near future.

