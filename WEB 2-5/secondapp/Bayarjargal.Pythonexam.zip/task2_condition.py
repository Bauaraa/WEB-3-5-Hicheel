# 2-р даалгавар: Нөхцөл шалгах
# Оролт: нэг бүхэл тоо n
# Гаралт: n<0 бол "Negative", n==0 бол "Zero", n>0 бол "Positive"

n = int(input("Enter a number: ").strip())
if n < 0:
    print("Negative")
elif n == 0:
    print("Zero")
else:
    print("Positive")
