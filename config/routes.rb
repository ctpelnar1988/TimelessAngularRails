Rails.application.routes.draw do
  resources :messages
  resources :users


  # Pages:
  root 'pages#index'
  get '/about' => 'pages#about'
  get '/procedures' => 'pages#procedures'
  get '/for_men' => 'pages#for_men'
  get '/vip' => 'pages#vip'
  get '/international' => 'pages#international'
  get '/media' => 'pages#media'
  get '/gallery' => 'pages#gallery'
  get '/location' => 'pages#location'


  # Messages:
  get '/contact' => 'messages#new'
  post 'message_sent' => 'messages#create'
  post 'https://www.google.com/recaptcha/api/siteverify' => 'messages#create'
  get '/message_sent' => 'messages#show'


  # Blogs:
  get '/blogs_home' => 'blogs#index'
  get '/blog_month_archive' => 'blogs#show_month'
  get '/blog_category_archive' => 'blogs#show_category'
  get '/blog_page' => 'blogs#show_page'
  get '/blog_redirect_login' => 'blogs#login'


  # Users login/signup
  get '/blog_signup' => 'users#new'
  post 'blog_signup' => 'users#create'
  get '/blog_login' => 'users#login'
  post 'blog_attempt_login' => 'users#attempt_login'
  delete '/user/blog_logout' => 'users#destroy'

  # User_Admins login/signup
  get '/admin_login' => 'user_admins#login'
  post 'admin_attempt_login' => 'user_admins#attempt_login'
  get '/admin_logout' => 'user_admins#logout'

  # Admins Pages
  get '/admin_home' => 'admins_pages#index'
  get '/admin_redirect_login' => 'admins_pages#login'
  end