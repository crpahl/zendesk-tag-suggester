class TagsController < ApplicationController
	def suggest
		tags = ['quickbooks', 'feature_request']

		render json: tags, status: :ok	
	end
end
