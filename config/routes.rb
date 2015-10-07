Rails.application.routes.draw do
  resources :messages

  # Pages Controller
  get '/' => 'pages#index'
  get '/about' => 'pages#about'

  get '/for_men' => 'pages#for_men'


  # Messages Controller
  get '/contact' => 'messages#index'
end
