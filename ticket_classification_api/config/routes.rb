Rails.application.routes.draw do
	get '/tags', to: 'tags#suggest'
end
