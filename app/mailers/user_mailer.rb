class UserMailer < ApplicationMailer
  default from: "notifications@example.com"

  def timeless_email(message)
    @message = message
    @url  = 'https://still-beyond-9340.herokuapp.com'
    mail(to: 'christopherpelnar@gmail.com', subject: 'Timeless Laser Client Message')
  end

  def user_email(message)
    @message = message
    @url  = 'https://still-beyond-9340.herokuapp.com'
    mail(to: @message.email, subject: 'Timeless Laser Confirmation')
  end

end
