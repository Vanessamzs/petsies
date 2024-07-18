class PetsController < ApplicationController
  def index
    @pets = current_user.pets
  end

  def show
    @pet = Pet.find(params[:id])
    @upcoming_events = @pet.events.where("start <= ?", Date.today + 3 ).order(start: :asc)
    @events = @pet.events
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

  def edit
    @pet = Pet.find(params[:id])
  end

  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      redirect_to @pet, notice: 'Le compagnon a été mis à jour avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    redirect_to root_path, status: :see_other
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :breed, :animal_type, :birth_date, :weight, :description, :photo)
  end
end
