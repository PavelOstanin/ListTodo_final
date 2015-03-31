class ListsController < ApplicationController
  respond_to :json, :html


  def index
    respond_to do |format|
       format.html
       format.json { render json: List.all }
    end
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
