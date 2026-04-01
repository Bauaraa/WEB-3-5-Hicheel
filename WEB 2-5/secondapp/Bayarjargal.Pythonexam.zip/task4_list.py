# 4-р даалгавар: Жагсаалт (List)
# Оролт: каммагаар тусгаарлагдсан тоонууд (жишээ: 1,2,3,4,5)
# Гаралт (яг ингэж хэвлэ):
# Max = ...
# Min = ...
# Avg = ...  (2 оронгийн нарийвчлалтай)

nums = [float(x.strip()) for x in input("Enter numbers with comma: ").split(",")]
print("Max =", int(max(nums)) if all(float(int(x))==x for x in nums) else max(nums))
print("Min =", int(min(nums)) if all(float(int(x))==x for x in nums) else min(nums))
avg = sum(nums)/len(nums)
print("Avg =", f"{avg:.2f}")
