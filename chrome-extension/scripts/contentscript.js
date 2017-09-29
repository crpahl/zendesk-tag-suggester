'use strict';

(function($){
	$(document).ready(function(){
	    setTimeout(function () {	    	
	    	setSuggestedTags();
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
1
		return tagString
	}

	function scrapeCommunications()
	{
		return 'communications'
	}

	function setSuggestedTags(communications)
	{
		var communications = scrapeCommunications();

		$.ajax({
		  url: "https://c480a59a.ngrok.io/tags",
		  type: "get", //send it through get method
		  data: { 
		    communications: communications, 
		  },
		  success: function(response) {
		  	var tagSuggestions = createSuggestionTags(response)
		  	var $tags = $('div.ember-view.form_field.tags').get(0)
    		$(tagSuggestions).insertBefore($tags);
		  },
		  error: function(xhr) {
		    //Do Something to handle error
		  }
		});
	}
})(jQuery);
