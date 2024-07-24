class PetsController < ApplicationController
  before_action :upcoming_events

  def index
    @pets = current_user.pets
  end

  def show
    @pet = Pet.find(params[:id])
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
      # 1 j'assigne dans une variable step la valeur de la step
      step = define_step(@pet.errors.messages)
      # 2 je renvoie cette valeur dans les paramètres que je retourne
      redirect_to new_pet_path({ pet: pet_params }.merge(step: step))
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

  def upcoming_events
    @upcoming_events = current_user.events.where("start <= ?", Date.today + 3).where("start >= ?", Date.today).order(start: :asc)
  end

  def define_step(errors)
    if errors.key?(:name)
      return 0
    elsif errors.key?(:animal_type)
      return 1
    elsif errors.key?(:breed)
      return 2
    elsif errors.key?(:birth_date) || errors.key?(:weight)
      return 3
    elsif errors.key?(:description)
      return 4
    end
  end
end
