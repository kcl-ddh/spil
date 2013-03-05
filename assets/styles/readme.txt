STYLESHEETS

1. EDITING

Use SASS to make edits to the main stylesheet: site.scss. This pulls in all the other stylesheets (typography, layout, animations etc.).

Install SASS:

http://sass-lang.com/

In a Terminal window go to the assets/styles directory and type:

sass --watch site.scss:site.css

2. Layout

You can create your own responsive grid system with up to 12 grid units:

Set $maxWidth to be the maximum width of your layout (e.g. on a full-size desktop monitor): e.g. 1140px

Set $totalUnits to be the number of grid units you want, e.g. 12.

The grid units will be generated automatically in percentages.

You can then use them in your layout, e.g.

<div class="row">
	<div class="span8 units">8 units</div>
	<div class="span4 units">4 units</div>
</div>

