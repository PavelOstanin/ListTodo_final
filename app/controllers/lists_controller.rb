class ListsController < ApplicationController
  respond_to :json, :html
  after_filter :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end
  def index
    respond_with List.all
  end

  def create
    respond_with List.create list_params
  end

  def update
  end

  def destroy
    respond_with List.destroy params[:id]
  end
  private

  def category_params
    params.require(:list).permit(:title)
  end
end
