class EventsController < ApplicationController
  before_action :set_pet

  def index
    @events = @pet.events
  end

  def show
  end

  def new
    @event = @pet.events
    @event = Event.new
  end

  def create
    @event = @pet.events.new(event_params)
    if @event.save
      redirect_to pet_path(@pet)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @event = @pet.events.find(params[:id])
    @event.destroy
    redirect_to pet_event_path(@pet), notice: 'evènement supprimé avec succès'
  end

  private

  def set_pet
    @pet = Pet.find(params[:pet_id])
  rescue ActiveRecord::RecordNotFound
    redirect_to root_path, alert: "Pet not found."
  end

  def event_params
    params.require(:event).permit(:title, :treatment_type, :description, :start, :end)
  end
end
