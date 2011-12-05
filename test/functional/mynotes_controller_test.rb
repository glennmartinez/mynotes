require 'test_helper'

class MynotesControllerTest < ActionController::TestCase
  setup do
    @mynote = mynotes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mynotes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mynote" do
    assert_difference('Mynote.count') do
      post :create, mynote: @mynote.attributes
    end

    assert_redirected_to mynote_path(assigns(:mynote))
  end

  test "should show mynote" do
    get :show, id: @mynote.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mynote.to_param
    assert_response :success
  end

  test "should update mynote" do
    put :update, id: @mynote.to_param, mynote: @mynote.attributes
    assert_redirected_to mynote_path(assigns(:mynote))
  end

  test "should destroy mynote" do
    assert_difference('Mynote.count', -1) do
      delete :destroy, id: @mynote.to_param
    end

    assert_redirected_to mynotes_path
  end
end
