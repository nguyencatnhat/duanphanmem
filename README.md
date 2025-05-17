
# 🚀 Hướng Dẫn Sử Dụng GitHub Cơ Bản

---

## ⚙️ 1. Cài đặt Git

- Tải và cài đặt Git từ: [git-scm.com/downloads](https://git-scm.com/downloads)
- Kiểm tra Git đã cài chưa:
  ```bash
  git --version
  ```

---

## 🛠️ 2. Cấu hình Git lần đầu

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

---

## 📁 3. Tạo repository mới trên GitHub

- Đăng nhập GitHub: [github.com](https://github.com)
- Nhấn **New repository** (📦)
- Đặt tên repo, chọn Public hoặc Private, nhấn **Create repository**

---

## 📥 4. Clone repository về máy

```bash
git clone https://github.com/username/repository.git
cd repository
```

---

## 📝 5. Các thao tác làm việc cơ bản

- Kiểm tra trạng thái file:
  ```bash
  git status
  ```

- Thêm file vào staging:
  ```bash
  git add <tên_file>
  ```
  Hoặc thêm tất cả:
  ```bash
  git add .
  ```

- Commit thay đổi:
  ```bash
  git commit -m "Mô tả thay đổi"
  ```

- Đẩy lên GitHub:
  ```bash
  git push origin main
  ```

---

## 🌿 6. Tạo và chuyển nhánh (branch)

- Tạo nhánh mới & chuyển sang:
  ```bash
  git checkout -b ten-nhanh
  ```

- Chuyển về main:
  ```bash
  git checkout main
  ```

---

## 🔀 7. Hợp nhất nhánh (merge)

- Chuyển về main:
  ```bash
  git checkout main
  ```

- Merge nhánh khác:
  ```bash
  git merge ten-nhanh
  ```

- Nếu có conflict, sửa file, rồi:
  ```bash
  git add <file>
  git commit
  ```

---

## 🔄 8. Cập nhật từ remote

```bash
git pull origin main
```

---

## 📚 9. Lệnh hữu ích khác

- Xem lịch sử commit:
  ```bash
  git log
  ```

- Xem thay đổi chưa commit:
  ```bash
  git diff
  ```

---

## 🔗 10. Tham khảo

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/en)

---

✨ *Chúc bạn thành công với Git & GitHub!*
