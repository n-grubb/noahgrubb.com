Over the past year, I have invested serious time to get up to speed with WordPress' new visual editor, Gutenberg. I have now used it on a few <a href="/work">projects</a>. I found a few big hurdles when learning Gutenberg and I may be able to save you some time by sharing my findings:

1. The most important thing is learning to _think in Gutenberg_.

Gutenberg is a whole new way of thinking about WordPress theme development. Previously, you thought through the post types, then the custom fields needed for each post type, Creating the custom fields in a plugin and displaying them in your theme templates. With Gutenberg, custom fields have _kinda_ vanished from the equation. Instead of creating strict templates where certain content is editable, instead you will be creating reusable components for the website that the client can utilize on the site however they like. This should create a more intuitive editing process and more modularity throught the site. A single custom block could be used across the site and even appear differently by adding options (align left, align right, etc). This one block template can now power many areas, custom fields don't need setup for the content type using it and it doesn't need to be added to other template files. 


2. The WordPress team hasn't done a good job at supporting it with documentation. 

The documentation is still quite sparse. Tutorials revolve around an command line interface that does most of the config work for you. This leads to only understanding part of the larger process involved with creating Gutenberg blocks. 

3. Don't use `create-guten-block`. 

As I mentioned above, you won't gain the full picture by starting with create-guten-block. To really understand Gutenberg, I ended up creating my own scaffold that I could copy for each new block I wanted to create. To accomplish this, I used create-guten-block and other examples as a reference and combined them with my own personal build processes. This allowed for a much deeper understanding of custom block development.