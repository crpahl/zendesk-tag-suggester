'use strict';

(function($){
	$(document).ready(function(){

		var tagSuggestions = createSuggestionTags();
	    setTimeout(function () {
	    	var $tags = $('div.ember-view.form_field.tags').get(0)
	    	console.log($tags)
    		$(tagSuggestions).insertAfter($tags);
    		console.log('inserting');
			console.log(createSuggestionTags());
    	}, 5000);
	});

	function createSuggestionTags()
	{
		return `<div id="tag-suggestions" class="ember-view form_field" >
					<label for="">Suggested Tags</label>
					<div style="border: 1px solid lightgray; padding: 1rem 0.5rem; background-color: white; border-radius: 3px;">
						${createTag('bleh')}
					</div>
				</div>`
	}

	function createTag(tagName)
	{
		return `<span style="border: 1px solid gray; padding: 0.5rem; background-color: #49b949; border-radius: 2px; color: black;">
			${tagName}
        </span>`
	}
})(jQuery);
