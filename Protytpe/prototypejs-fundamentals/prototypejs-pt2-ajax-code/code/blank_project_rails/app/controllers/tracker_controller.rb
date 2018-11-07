class TrackerController < ApplicationController

  def index
    if request.get?
      render :text => http_method_error
    else
      render :text => request.env.to_yaml
    end
  end

end
