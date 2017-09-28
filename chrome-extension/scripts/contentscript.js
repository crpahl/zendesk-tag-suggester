'use strict';

(function($){
	$(document).ready(function(){
	    setTimeout(function () {	    	
	    	setSuggestedTags(scrapeComments());
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

	function scrapeComments()
	{
		return 'comments'
	}

	function setSuggestedTags(comments)
	{
		var comments = scrapeComments();

		$.ajax({
		  url: "https://d65cb255.ngrok.io/tags",
		  type: "get", //send it through get method
		  data: { 
		    ajaxid: comments, 
		  },
		  success: function(response) {
		  	var tagSuggestions = createSuggestionTags(response)
		  	//console.log(response);
		  	//console.log(tagSuggestions);
		  	var $tags = $('div.ember-view.form_field.tags').get(0)
    		$(tagSuggestions).insertBefore($tags);
		  },
		  error: function(xhr) {
		    //Do Something to handle error
		  }
		});
	}
})(jQuery);
