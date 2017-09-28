'use strict';

(function($){
	$(document).ready(function(){
		var suggestions = ['blerg1', 'blerg2', 'blerg3']
		var tagSuggestions = createSuggestionTags(suggestions);

	    setTimeout(function () {
	    	var $tags = $('div.ember-view.form_field.tags').get(0)
	    	//console.log($tags)
    		$(tagSuggestions).insertAfter($tags);
    		//console.log('inserting');
			//console.log(createSuggestionTags());
    	}, 5000);
	});

	function createSuggestionTags(tags)
	{
		return `<div id="tag-suggestions" class="ember-view form_field" >
					<label for="">Suggested Tags</label>
					<div style="border: 1px solid lightgray; padding: 1rem 0.5rem; background-color: white; border-radius: 3px;">
						${createTags(tags)}
					</div>
				</div>`
	}

	function createTags(tags)
	{
		var tagString = "";

		tags.forEach(function(tag) {
			tagString += `<span style="margin-right: 0.5rem; border: 1px solid lightgray; padding: 0.5rem; background-color: #49b949; border-radius: 2px; color: black;">
				${tag}
	        </span>`
  		});

		return tagString
	}
})(jQuery);
