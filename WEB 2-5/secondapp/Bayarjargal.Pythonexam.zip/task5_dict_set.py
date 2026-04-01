# 5-р даалгавар: Dictionary ба Set
# 3 оюутны нэр ба насыг оруул. (жишээ: Nomin 18)
# Дараа нь dict болон насны давхардлыг арилгасан set-ийг хэвлэ.

students = {"Enkhjin": 18, "Bolor": 19, "Bayar": 20}
for i in range(3):
    name, age = input("Enter student name and age: ").split()
    students[name] = int(age)

print(students)
ages = set(students.values())
print("Unique ages:", ages)
