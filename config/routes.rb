Rails.application.routes.draw do
  devise_for :users
  root to: "pets#index"

  get "calendar", to: "pages#calendar"

  resources :pets, except: [:index] do
    resources :events
  end
  resources :user_pet

  get "up" => "rails/health#show", as: :rails_health_check
end
