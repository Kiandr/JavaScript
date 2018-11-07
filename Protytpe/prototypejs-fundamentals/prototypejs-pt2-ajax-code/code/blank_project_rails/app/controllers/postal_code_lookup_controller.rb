class PostalCodeLookupController < ApplicationController

  def index
    # Assumes post via ajax
    headers['Content-Type'] = "application/javascript; charset=utf-8"
    # Hard-coded. A live app would look this up in a database.
    render :text => {'locality' => 'San Francisco', 'region' => 'CA'}.to_json  
  end
  
end
