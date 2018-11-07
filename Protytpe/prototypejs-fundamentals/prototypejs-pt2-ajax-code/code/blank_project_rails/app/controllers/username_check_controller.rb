class UsernameCheckController < ApplicationController

  def index
    # Assumes post via ajax
    # TODO Don't return if blank
    headers['Content-Type'] = "application/javascript; charset=utf-8"
    if params[:username] == 'buster'
      render :action => "username_taken"
    else
      render :action => "username_available"
    end
  end

end
