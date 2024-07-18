Pet.destroy_all
User.destroy_all

@user1 = User.create(email: "test1@test.com", password: "123456")
@user2 = User.create(email: "test2@test.com", password: "123456")
@user3 = User.create(email: "test3@test.com", password: "123456")

@pet1 = Pet.create(name: "Bob", breed: "Golden", weight: 22.5, description: "Très beau golden", animal_type: "Chien")
@pet2 = Pet.create(name: "Patrick", breed: "roux", weight: 7.5, description: "Très beau chat", animal_type: "Chat")
@pet3 = Pet.create(name: "Ginette", breed: "A sonnette", weight: 1, description: "Très gros serpent", animal_type: "Serpent")

@userpet1 = UserPet.create(user: @user1, pet: @pet2)
@userpet2 = UserPet.create(user: @user2, pet: @pet3)
@userper3 = UserPet.create(user: @user3, pet: @pet1)

@event1 = Event.create(title: "Rendez-vous", start: '2024-07-20', end: '2024-07-20', pet: @pet1)
@event2 = Event.create(title: "Traitement", start: '2024-07-21', end: '2024-07-21', pet: @pet2)

puts "Tout va bien"