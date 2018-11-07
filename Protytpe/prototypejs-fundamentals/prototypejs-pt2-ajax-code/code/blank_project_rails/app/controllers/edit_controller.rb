class EditController < ApplicationController

  helper_method :stylize_text

  def index
    if request.get?
      render :text => http_method_error
    else
      if request.xml_http_request?
        headers['Content-Type'] = "application/javascript; charset=utf-8"
        render
      else
        render :text => stylize_text(params[:story])
      end
    end
  end

  protected

  ##
  # Make all instances of 'butter' strong.

  def stylize_text(text)
    text.gsub(/(butter)/i, '<strong>\1</strong>')
  end

end
