class TagsController < ApplicationController
	def suggest
		tags = ['tag1', 'tag2', 'tag3']

		render json: tags, status: :ok	
	end
end
