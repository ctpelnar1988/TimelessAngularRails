class MessagesController < ApplicationController

  def new
    @message = Message.new
    @a = rand(9)
    @b = rand(9)
    session["sum"] = @a + @b
  end

  def create
  @message = Message.new(message_params)
    if params[:message][:captcha].to_i == session["sum"] && @message.email.include?("@") && @message.save
      UserMailer.timeless_email(@message).deliver_now
      UserMailer.user_email(@message).deliver_now
      redirect_to '/message_sent'
    else
      render 'new'
    end
  end

  def show
  end

    private
  def message_params
    return params.require(:message).permit(:name, :email, :phone_number, :user_message, :captcha)
  end


end
