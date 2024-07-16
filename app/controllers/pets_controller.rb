class PetsController < ApplicationController
  def index
    @pets = UserPet.where(user: current_user)
  end

  def show
    @pet = Pet.find(params[:id])
    @user = current_user
  end

  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.new(pet_params)
    @user_pet = UserPet.new(user: current_user, pet: @pet)
    if @pet.save! && @user_pet.save!
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
  
  def pet_params
    params.require(:pet).permit(:name, :breed, :animal_type, :birth_date, :weight, :description, :photo)
  end
end
