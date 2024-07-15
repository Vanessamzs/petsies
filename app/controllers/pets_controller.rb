class PetsController < ApplicationController
  def index
    @pets = Pet.all
  end

  # def show
  #   @pet = Pet.find(params[:id])
  # end

  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.new
  end
end
