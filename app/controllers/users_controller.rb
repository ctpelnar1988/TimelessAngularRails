class UsersController < ApplicationController

  def new
    @user = User.new
    @a = rand(9)
    @b = rand(9)
    session["sum"] = @a + @b
  end


  def create
  @user = User.new(message_params)
    if params[:user][:captcha].to_i == session["sum"] && @user.email.include?('@') && @user.save
      redirect_to(:action => 'login')
    else
      render 'new'
    end
  end


  def login
  end

  def attempt_login
      if params[:email].present? && params[:password].present?
        found_user = User.where(:email => params[:email]).first
        if found_user
          authorized_user = found_user.authenticate(params[:password])
        end
      end
      if authorized_user
        session[:user_id] = authorized_user.id
        session[:email] = authorized_user.email
        redirect_to(:action => 'index', :controller => 'blogs')
      else
        redirect_to(:action => 'login')
      end
    end

  def destroy
    session[:user_id] = nil
    session[:email] = nil
    flash[:notice] = "Logged out."
    redirect_to(:action => "login" )
  end


    private
  def message_params
    return params.require(:user).permit( :email, :password, :password_confirmation )
  end

end
