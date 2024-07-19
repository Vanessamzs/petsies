Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  resources :pets do
    resources :events
  end
  resources :user_pet

  get "up" => "rails/health#show", as: :rails_health_check
end
