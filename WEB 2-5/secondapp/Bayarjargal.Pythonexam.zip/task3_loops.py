# 3-р даалгавар: Давталт
# Оролт: нэг бүхэл тоо n (n>=1)
# 1) for давталтаар 1–n хүртэлх тоонуудын нийлбэрийг ол.
#    Хэвлэл: "Sum = X"
# 2) while давталтаар 1–n хүртэлх тэгш тоонуудыг нэг мөрөнд хэвлэ.
#    Хэвлэл: "Even numbers: 2 4 6 ..." (тоо хооронд нэг зай)

n = int(input("Enter number: ").strip())
s = 0
for i in range(1, n+1):
    s += i
print("Sum =", s)

print("Even numbers:", end=" ")
i = 1
while i <= n:
    if i % 2 == 0:
        print(i, end=" ")
    i += 1
