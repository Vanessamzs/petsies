class User < ApplicationRecord
  has_many :user_pets, dependent: :destroy
  has_many :pets, through: :user_pets
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
