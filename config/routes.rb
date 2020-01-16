Rails.application.routes.draw do
  resources :poems
  resources :words
  resources :users, only: [:create, :register, :login] do
    resources :poems
    resources :words
    collection do
      post "/login", to: "users#login"
      post "/register", to: "users#register"
    end
  end
end