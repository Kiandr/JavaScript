require File.dirname(__FILE__) + '/../test_helper'
require 'postal_code_lookup_controller'

# Re-raise errors caught by the controller.
class PostalCodeLookupController; def rescue_action(e) raise e end; end

class PostalCodeLookupControllerTest < Test::Unit::TestCase
  def setup
    @controller = PostalCodeLookupController.new
    @request    = ActionController::TestRequest.new
    @response   = ActionController::TestResponse.new
  end

  # Replace this with your real tests.
  def test_truth
    assert true
  end
end
