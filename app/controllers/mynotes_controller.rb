class MynotesController < ApplicationController
  # GET /mynotes
  # GET /mynotes.json
  respond_to :json
  
  def index
    render :json => Mynote.all
  end
  
  def show
    render :json => Document.find(params[:id])
  end
  
  def create
    mynote = Mynote.create! params
    render :json => mynote
  end
  
  def update
    mynote = Mynote.find(params[:id])
    mynote.update_attributes! params
    render :json => mynote
  end
  
  def destroy
    mynote = Mynote.find(params[:id])
    mynote.destroy
    render :json => mynote
  end
end
