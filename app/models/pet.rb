class Pet < ApplicationRecord
  has_many :events
  has_many :pets, through: :user_pets
end
