class TagsController < ApplicationController
	def suggest
		classifier_path = Rails.root.join("lib", "classifier", "DummyTags.py").to_s
		output = `python #{classifier_path}`
		tags = JSON.parse(output)

		render json: tags, status: :ok	
	end
end
