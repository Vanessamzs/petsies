class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

  def calendar
    @events = current_user.events
    @upcoming_events = @events.where("start <= ?", Date.today + 3).where("start >= ?", Date.today).order(start: :asc)
  end
end
