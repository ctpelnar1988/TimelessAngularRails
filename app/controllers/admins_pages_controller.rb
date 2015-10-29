class AdminsPagesController < ApplicationController

  before_action :confirm_logged_in, :except => [:login]

  def index
    @messages = Message.all
  end

  def login
    redirect_to(:action => 'login', :controller => 'user_admins')
  end

end
