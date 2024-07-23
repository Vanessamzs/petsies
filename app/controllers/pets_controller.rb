class PetsController < ApplicationController

  def index
    @pets = current_user.pets
    @upcoming_events = current_user.events.where("start <= ?", Date.today + 3).where("start >= ?", Date.today).order(start: :asc)
  end
  
  def show
    @pet = Pet.find(params[:id])
    @upcoming_events = current_user.events.where("start <= ?", Date.today + 3).where("start >= ?", Date.today).order(start: :asc)
    @events = @pet.events
  end

  def new
    @pet = Pet.new
    @step = params[:step].to_i
    unless params[:pet].nil?
      @pet = Pet.new(pet_params)
    end
  end

  def create
    @pet = Pet.new(pet_params)
    @user_pet = UserPet.new(user: current_user, pet: @pet)
    if @pet.save && @user_pet.save
      redirect_to pets_path, notice: 'Le compagnon a été créé avec succès'
    else
      redirect_to new_pet_path({ pet: pet_params }.merge(step: params[:step].to_i + 1))
    end
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      redirect_to @pet, notice: 'Le compagnon a été modifié avec succès.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
    redirect_to pets_path, status: :see_other, notice: 'Le compagnon a été retiré'
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :breed, :animal_type, :birth_date, :weight, :description, :photo)
  end
end
