# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :gamerooms, only: %i[index create update show]
  resources :levels, only: %i[create show]
  resources :guessers, only: %i[create show]
  resources :guesses, only: [:create]

  mount ActionCable.server => '/cable'
end
