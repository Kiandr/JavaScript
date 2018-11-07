# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  # Pick a unique cookie name to distinguish our session data from others'
  session :session_key => '_ajax_playbook_rails_session_id'

  protected

  ##
  # A short message when a resource should be accessed only
  # with a certain method.

  def http_method_error
    "This page is meant to be requested with POST, but you did a GET"
  end

  ##
  # Returns true if the current resource was requested
  # via Ajax.
  #
  # For example only. The built-in Rails method is used
  # in the rest of this application.
  #
  #   request.xml_http_request?

  def ajax?
    request.env['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'
  end

end
