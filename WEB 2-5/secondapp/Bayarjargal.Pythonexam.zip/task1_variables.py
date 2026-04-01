# 1-р даалгавар: Хувьсагч ба оператор
# Оролт: 2 бүхэл тоо (нэг мөрөнд, зайгаар тусгаарлан)
# Гаралт (яг ингэж хэвлэ):
# Sum = ...
# Difference = ...
# Product = ...
# Division = ...  (2 оронгийн нарийвчлалтай)

a, b = map(int, input("Enter a and b numbers: ").split())
print("Sum =", a + b)
print("Difference =", a - b)
print("Product =", a * b)
print("Division =", round(a / b, 2))
