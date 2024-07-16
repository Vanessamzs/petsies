class Pet < ApplicationRecord
  has_many :users, through: :user_pets
  has_many :events, dependent: :destroy
end
