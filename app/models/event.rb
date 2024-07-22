class Event < ApplicationRecord
  belongs_to :pet


  class Snippet
    CATEGORIES = ["Rendez-vous", "Traitement", "Loisir"]
  end
end
