class TagsController < ApplicationController
	def suggest
		communications = params[:communications]
		classifier_path = Rails.root.join("lib", "classifier", "TicketClassifier.py").to_s
		output = `python #{classifier_path} #{communications}`
		tags = JSON.parse(output)

		render json: tags, status: :ok	
	end
end
