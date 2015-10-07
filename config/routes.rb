Rails.application.routes.draw do
  resources :messages

  # Pages Controller
  get '/' => 'pages#index'
  get '/about' => 'pages#about'


  # Messages Controller
  get '/contact' => 'messages#index'
end
