Rails.application.routes.draw do
  resources :items
  resources :users do
    collection do
      post "/login", to: "users#login"
      post "/register", to: "users#register"
    end
  end
end