class HcardLookupController < ApplicationController

  def index
    # NOTE In a production app you would require this in environment.rb.
    #      It's put here so the rest of the application will work for
    #      people who don't have this gem.
    require 'mofo'
    
    # Assumes post via Ajax
    h = HCard.find(params[:url])

    headers['Content-Type'] = "application/javascript; charset=utf-8"
    render :text => {
      'adr' => {
        'region' => h.adr.region,
        'locality' => h.adr.locality,
        'country-name' => h.adr.country_name,
        'street-address' => h.adr.street_address,
        'postal-code' => h.adr.postal_code
      }
    }.to_json
  rescue Exception => e
    # TODO A better way to pass an error would be helpful.
    render :text => "Server Error: #{e.message}", :status => 500
  end

end
