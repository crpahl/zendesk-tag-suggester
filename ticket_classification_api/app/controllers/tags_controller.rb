class TagsController < ApplicationController
	def suggest
		tags = ['tag1', 'tag2', 'tag3']

	    json_response(tags)
	end
end
