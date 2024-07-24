Rails.application.routes.draw do
  get 'errors/not_found'
  get 'errors/internal_server_error'
  devise_for :users
  root to: "pages#home"

  get "calendar", to: "pages#calendar"

  resources :pets do
    resources :events
  end
  resources :user_pet

  get "up" => "rails/health#show", as: :rails_health_check

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
end
