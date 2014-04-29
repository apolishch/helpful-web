class CurrentUserController < ApplicationController
  respond_to :json

  def index
    respond_with CurrentUserSerializer.new(current_user)
  end
end