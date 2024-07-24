class Pet < ApplicationRecord


  SPECIES = ['Chien', 'Chat', 'Hamster', 'Souris', 'Cheval', 'Serpent', 'Oiseau', 'Poisson', 'Grenouille', 'Araignée', 'Dragon']


  has_many :user_pets, dependent: :destroy # donne la méthode @pet.user_pets
  has_many :users, through: :user_pets
  has_many :events, dependent: :destroy

  validates :name, presence: true
  validates :breed, presence: true
  validates :birth_date, presence: true
  validates :weight, presence: true
  validates :description, presence: true, length: { maximum: 150 }
  validates :animal_type, presence: true, inclusion: { in: SPECIES}

  has_one_attached :photo

  def age
    return nil unless birth_date

    now = Time.zone.now.to_date
    years = now.year - birth_date.year
    months = now.month - birth_date.month

    if months < 0
      years -= 1
      months += 12
    end

    "#{years} an#{'s' if years != 1} et #{months} mois"
  end
end
