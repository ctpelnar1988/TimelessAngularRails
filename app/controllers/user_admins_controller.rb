class UserAdminsController < ApplicationController

  def login
  end


  def attempt_login
      if params[:email].present? && params[:password].present?
        found_user = UserAdmin.where(:email => params[:email]).first
        if found_user
          authorized_user = found_user.authenticate(params[:password])
        end
      end
      if authorized_user
        session[:user_id] = authorized_user.id
        session[:email] = authorized_user.email
        redirect_to(:action => 'index', :controller => 'admins_pages')
      else
        redirect_to(:action => 'login')
      end
    end

  def logout
    session[:user_id] = nil
    session[:email] = nil
    flash[:notice] = "Logged out."
    redirect_to(:action => "login" )
  end
end
