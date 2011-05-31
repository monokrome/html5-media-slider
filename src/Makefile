# Parts that are shared between every variation of the media slider
parts_base=parts/core.js

# Files used by the generic library
parts_generic=parts/generic/prefix.js \
              ${parts_base} \
              parts/generic/suffix.js

# Files used by the Require.JS plugin
parts_rjs=parts/requirejs/prefix.js \
          ${parts_base} \
          parts/requirejs/suffix.js

# Files used by the jQuery plugin
parts_jq=parts/jquery/prefix.js \
         ${parts_base} \
         parts/jquery/suffix.js

# Output files.
media_slider='./dist/mediaSlider.js'
media_slider_rjs='./dist/mediaSlider_r.js'
media_slider_jq='./dist/mediaSlider.jquery.js'

# Builds every possible variant of the HTML5 Media Slider
all: ${media_slider} ${media_slider_rjs} ${media_slider_jq}

# Provides a generic library in the global namespace. :(
${media_slider}:
	mkdir -p `dirname ${media_slider}`
	cat ${parts_base} > ${media_slider}

# Provides a require.js module which defines MediaSlider
${media_slider_rjs}:
	mkdir -p `dirname ${media_slider_rjs}`
	cat ${parts_rjs} > ${media_slider_rjs}

# Provides a jQuery module providing $(selector).MediaSlider mechanics
${media_slider_jq}:
	mkdir -p `dirname ${media_slider_jq}`
	cat ${parts_jq} > ${media_slider_jq}
