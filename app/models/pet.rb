class Pet < ApplicationRecord
  SPECIES = ['Chien', 'Chat', 'Hamster', 'Souris', 'Cheval', 'Serpent', 'Oiseau', 'Poisson', 'Grenouille', 'Araignée']
  
  has_many :users, through: :user_pets
  has_many :events, dependent: :destroy

  validates :name, presence: true
  validates :breed, presence: true
  validates :weight, presence: true
  validates :description, presence: true, length: { maximum: 150 }
  validates :animal_type, presence: true, inclusion: { in: SPECIES}

  has_one_attached :photo
end
