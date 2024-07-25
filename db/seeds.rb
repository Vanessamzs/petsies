Pet.destroy_all
User.destroy_all

@user1 = User.create(email: "test1@test.com", password: "123456")

@pet1 = Pet.create(name: "Lili", breed: "Européen", birth_date: '22-04-2010', weight: 3.5, description: "La doyenne des compagnons, très câline", animal_type: "Chat", photo_url: "path/to/images/lili.png")
@pet2 = Pet.create(name: "Plume", breed: "Siamois", birth_date: '01-08-2014', weight: 5.0, description: "Gourmande, et câline!", animal_type: "Chat")
@pet3 = Pet.create(name: "Minette", breed: "Européen", birth_date: '01-08-2020', weight: 3.5, description: "Protectrice et douce", animal_type: "Chat")
@pet4 = Pet.create(name: "Tigrou", breed: "Européen", birth_date: '01-04-2021', weight: 5.5, description: "Joueur et protecteur", animal_type: "Chat")
@pet5 = Pet.create(name: "Twister", breed: "Européen", birth_date: '01-09-2022', weight: 4.2, description: "Malicieux", animal_type: "Chat")
@pet6 = Pet.create(name: "Twinny", breed: "Européen", birth_date: '01-09-2022', weight: 6.0, description: "Gourmand, joueur et câlin", animal_type: "Chat")
@pet7 = Pet.create(name: "Neko", breed: "Européen", birth_date: '15-04-2023', weight: 3.5, description: "Joueur et coquin ", animal_type: "Chat")
@pet8 = Pet.create(name: "Neki", breed: "Européen", birth_date: '15-04-2023', weight: 3.0, description: "Joueuse, câline, c'est la soeur de Neko", animal_type: "Chat")
@pet9 = Pet.create(name: "Tobby", breed: "Bleu russe", birth_date: '10-06-2023', weight: 4.5, description: "Joueur et protecteur", animal_type: "Chat")
@pet10 = Pet.create(name: "Maya", breed: "Bleu russe", birth_date: '10-06-2023', weight: 3.5, description: "Craintive et joueuse", animal_type: "Chat")

@userpet1 = UserPet.create(user: @user1, pet: @pet2)
@userpet2 = UserPet.create(user: @user1, pet: @pet3)
@userper3 = UserPet.create(user: @user1, pet: @pet4)
@userpet4 = UserPet.create(user: @user1, pet: @pet6)
@userpet5 = UserPet.create(user: @user1, pet: @pet5)
@userper6 = UserPet.create(user: @user1, pet: @pet8)
@userpet7 = UserPet.create(user: @user1, pet: @pet7)
@userpet8 = UserPet.create(user: @user1, pet: @pet10)
@userpet9 = UserPet.create(user: @user1, pet: @pet1)
@userpet10 = UserPet.create(user: @user1, pet: @pet9)

@event2 = Event.create(title: "Traitement", start: '2024-07-26', end: '2024-07-26', pet: @pet2)

puts "Tout va bien"
