require File.dirname(__FILE__) + '/../test_helper'
require 'username_check_controller'

# Re-raise errors caught by the controller.
class UsernameCheckController; def rescue_action(e) raise e end; end

class UsernameCheckControllerTest < Test::Unit::TestCase
  def setup
    @controller = UsernameCheckController.new
    @request    = ActionController::TestRequest.new
    @response   = ActionController::TestResponse.new
  end

  # Replace this with your real tests.
  def test_truth
    assert true
  end
end
