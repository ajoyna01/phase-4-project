puts "Started seeding"


User.create(username: "Anna", password_digest: "1234")


Park.create(fullName: "Acadia National Park", url: "https://www.nps.gov/acad/index.htm",url: "https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg")


puts "Finished seeding"