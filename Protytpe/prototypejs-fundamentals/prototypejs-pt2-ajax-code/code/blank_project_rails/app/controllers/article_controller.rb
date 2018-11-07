class ArticleController < ApplicationController

  def index
    if request.xml_http_request?
      sleep 2
      if (params[:error])
        render :text => "Server Error!", :status => 500
      else
        render :file => RAILS_ROOT + "/public/article_fragment.html"
      end
      return
    elsif request.get? && params[:format].blank?
      render :file => RAILS_ROOT + "/public/article_fragment.html"
      return
    end
    # Full page will be rendered by default
    render
  end

end
