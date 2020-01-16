# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Word.create([{title: 'abbifal', synonym: 'cat'}, {title: 'gingle', synonym: 'the'}, {title: 'trillophant', synonym: 'ghost'}])
Poem.create(title: 'Gingle Trillophant-Abbifal', content: '“I am gingle trillophant-abbifal!”
cried gingle abbifal.

Why did gingle abbifal believe
it was a trillophant?

Doesn’t a dead thing always lie?')

puts 'seeded db'