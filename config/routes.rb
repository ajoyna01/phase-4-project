Rails.application.routes.draw do
  
  resources :entries
  resources :parks

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "sessons#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
