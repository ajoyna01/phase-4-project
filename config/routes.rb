Rails.application.routes.draw do
  
  # namespace :api do
  # resources :entries

  post "/signup", to: "users#create"
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessons#destroy"
  get "/parks", to: "parks#index"
  get "/entries", to: "entries#index"
  # end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
